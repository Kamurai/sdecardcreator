QUnit.module('Ability — Lifecycle', function() {

  QUnit.test('added ability has editable form fields', function(assert) {
    var card = $('.cardGroup.selected').data('node');
    var editForm = $('.editForm').data('node');
    var initialCount = card.abilities.length;

    editForm.abilityControl.addAbility();

    var newAbility = card.abilities[card.abilities.length - 1];
    assert.ok(newAbility, 'ability was added to card');
    assert.ok(newAbility.formNode, 'ability has a form node');
    assert.ok(newAbility.formNode.find('input[name="name"]').length > 0, 'form has name input');
    assert.ok(newAbility.formNode.find('textarea[name="definition"]').length > 0, 'form has definition textarea');
    assert.ok(newAbility.formNode.find('select[name="costType"]').length > 0, 'form has costType select');
    assert.ok(newAbility.formNode.find('input[name="cost"]').length > 0, 'form has cost input');

    newAbility.closeAbility();
  });


  QUnit.test('editing ability name updates card DOM', function(assert) {
    var card = $('.cardGroup.selected').data('node');
    var editForm = $('.editForm').data('node');

    editForm.abilityControl.addAbility();
    var ability = card.abilities[card.abilities.length - 1];

    ability.setName('Test Slash');

    assert.equal(ability.data.name, 'Test Slash', 'ability data updated');
    var cardName = ability.getCardAbilityNodes().first().find('.name').text();
    assert.equal(cardName, 'Test Slash', 'card DOM updated');

    ability.closeAbility();
  });


  QUnit.test('editing ability definition updates card DOM', function(assert) {
    var card = $('.cardGroup.selected').data('node');
    var editForm = $('.editForm').data('node');

    editForm.abilityControl.addAbility();
    var ability = card.abilities[card.abilities.length - 1];

    ability.setDefinition('+1R STR');

    assert.equal(ability.data.definition, '+1R STR', 'ability data updated');
    var definitionHtml = ability.getCardAbilityNodes().find('.definition').html();
    assert.ok(definitionHtml.length > 0, 'card DOM has rendered definition');

    ability.closeAbility();
  });


  QUnit.test('editing ability cost updates card DOM', function(assert) {
    var card = $('.cardGroup.selected').data('node');
    var editForm = $('.editForm').data('node');

    editForm.abilityControl.addAbility();
    var ability = card.abilities[card.abilities.length - 1];

    ability.setCost('3');

    assert.equal(ability.data.cost, '3', 'ability data updated');

    ability.closeAbility();
  });


  QUnit.test('editing ability costType updates card DOM', function(assert) {
    var card = $('.cardGroup.selected').data('node');
    var editForm = $('.editForm').data('node');

    editForm.abilityControl.addAbility();
    var ability = card.abilities[card.abilities.length - 1];

    ability.setCostType('support');

    assert.equal(ability.data.costType, 'support', 'ability data updated');
    assert.ok(
      ability.getCardAbilityNodes().find('.cost').hasClass('support'),
      'card DOM has support class'
    );

    ability.closeAbility();
  });


  QUnit.test('form input events trigger ability updates', function(assert) {
    var card = $('.cardGroup.selected').data('node');
    var editForm = $('.editForm').data('node');

    editForm.abilityControl.addAbility();
    var ability = card.abilities[card.abilities.length - 1];

    ability.formNode.find('input[name="name"]').val('Fire Strike').trigger('input');
    assert.equal(ability.data.name, 'Fire Strike', 'name input event updates data');

    ability.formNode.find('textarea[name="definition"]').val('2R STR').trigger('input');
    assert.equal(ability.data.definition, '2R STR', 'definition input event updates data');

    ability.formNode.find('input[name="cost"]').val('5').trigger('input');
    assert.equal(ability.data.cost, '5', 'cost input event updates data');

    ability.closeAbility();
  });


  QUnit.test('ability persists after card deselect and reselect', function(assert) {
    var cardContainer = $('.cardContainer').data('node');

    cardContainer.addCard(false);
    var card2 = $('.cardGroup.selected').data('node');

    var editForm = $('.editForm').data('node');
    editForm.abilityControl.addAbility();
    var ability = card2.abilities[card2.abilities.length - 1];
    ability.setName('Persisted Ability');
    ability.setDefinition('test definition');

    var card1 = $('.cardGroup').first().data('node');
    cardContainer.selectCard(card1);
    cardContainer.selectCard(card2);

    var restoredAbility = card2.abilities[card2.abilities.length - 1];
    assert.equal(restoredAbility.data.name, 'Persisted Ability', 'ability name survives reselect');
    assert.equal(restoredAbility.data.definition, 'test definition', 'ability definition survives reselect');
    assert.ok(restoredAbility.formNode.is(':visible') || restoredAbility.formNode.length > 0, 'form node still exists');

    restoredAbility.formNode.find('input[name="name"]').val('Edited After Reselect').trigger('input');
    assert.equal(restoredAbility.data.name, 'Edited After Reselect', 'ability is still editable after reselect');

    card2.node.remove();
    cardContainer.selectCard(card1);
  });
});


QUnit.module('Ability — removeAbility bug', function() {

  QUnit.test('removeAbility should remove the correct ability, not always the first', function(assert) {
    var card = $('.cardGroup.selected').data('node');
    var editForm = $('.editForm').data('node');

    editForm.abilityControl.addAbility();
    editForm.abilityControl.addAbility();
    editForm.abilityControl.addAbility();

    var ability1 = card.abilities[card.abilities.length - 3];
    var ability2 = card.abilities[card.abilities.length - 2];
    var ability3 = card.abilities[card.abilities.length - 1];

    ability1.setName('First');
    ability2.setName('Second');
    ability3.setName('Third');

    var countBefore = card.abilities.length;

    ability2.closeAbility();

    var remainingNames = [];
    for (var i = 0; i < card.abilities.length; i++) {
      if (card.abilities[i] && card.abilities[i].data && card.abilities[i].data.name) {
        remainingNames.push(card.abilities[i].data.name);
      }
    }

    assert.ok(
      remainingNames.indexOf('Second') === -1,
      'KNOWN BUG: removed ability "Second" should not be in remaining abilities — ' +
      'got [' + remainingNames.join(', ') + ']'
    );

    ability1.closeAbility();
    ability3.closeAbility();
  });
});
