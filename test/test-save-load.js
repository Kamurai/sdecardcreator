QUnit.module('Save/Load — v2 Format', function() {

  QUnit.test('gatherData produces valid v2 structure', function(assert) {
    var mainMenu = $.data($('.menuBar')[0], 'coreNode');
    var data = mainMenu.gatherData();

    assert.equal(data.versionSpec, '2.0', 'versionSpec is 2.0');
    assert.ok(Array.isArray(data.cards), 'cards is an array');
    assert.ok(data.cards.length > 0, 'at least one card');
  });


  QUnit.test('v2 round-trip preserves all card fields', function(assert) {
    var mainMenu = $.data($('.menuBar')[0], 'coreNode');
    var card = $('.cardGroup.selected').data('node');

    card.setTitle('Round Trip Hero');
    card.setSubTitle('Test Sub');
    card.setMove('7');
    card.setActions('4');
    card.setStat('STR', '2SW 1R');
    card.setAffinity('RUBY');
    card.setFlavorText('A test hero.');

    var saved = JSON.parse(JSON.stringify(mainMenu.gatherData()));

    mainMenu.loadData(saved);

    var loaded = $('.cardGroup.selected').data('node');
    assert.equal(loaded.data.title, 'Round Trip Hero', 'title preserved');
    assert.equal(loaded.data.subTitle, 'Test Sub', 'subTitle preserved');
    assert.equal(loaded.data.move, '7', 'move preserved');
    assert.equal(loaded.data.actions, '4', 'actions preserved');
    assert.equal(loaded.data.STR, '2SW 1R', 'STR preserved');
    assert.equal(loaded.data.affinity, 'RUBY', 'affinity preserved');
    assert.equal(loaded.data.flavorText, 'A test hero.', 'flavorText preserved');
  });


  QUnit.test('v2 multi-card round-trip preserves card count', function(assert) {
    var mainMenu = $.data($('.menuBar')[0], 'coreNode');
    var cardContainer = $('.cardContainer').data('node');

    cardContainer.addCard(false);
    var card2 = $('.cardGroup.selected').data('node');
    card2.setTitle('Card Two');

    var countBefore = $('.cardGroup').length;
    var saved = JSON.parse(JSON.stringify(mainMenu.gatherData()));

    mainMenu.loadData(saved);

    assert.equal($('.cardGroup').length, countBefore, 'card count preserved after round-trip');

    var titles = [];
    $('.cardGroup').each(function() {
      titles.push($(this).data('node').data.title);
    });
    assert.ok(titles.indexOf('Card Two') !== -1, 'Card Two found in loaded cards');
  });


  QUnit.test('v2 round-trip preserves abilities', function(assert) {
    var mainMenu = $.data($('.menuBar')[0], 'coreNode');
    var card = $('.cardGroup.selected').data('node');
    var editForm = $('.editForm').data('node');

    editForm.abilityControl.addAbility();
    var ability = card.abilities[card.abilities.length - 1];
    ability.setName('Saved Ability');
    ability.setDefinition('2R STR');
    ability.setCostType('attack');
    ability.setCost('2');

    var saved = JSON.parse(JSON.stringify(mainMenu.gatherData()));

    mainMenu.loadData(saved);

    var loaded = $('.cardGroup.selected').data('node');
    var loadedAbility = loaded.abilities[loaded.abilities.length - 1];
    assert.ok(loadedAbility, 'ability exists after load');
    assert.equal(loadedAbility.data.name, 'Saved Ability', 'ability name preserved');
    assert.equal(loadedAbility.data.definition, '2R STR', 'ability definition preserved');
    assert.equal(loadedAbility.data.costType, 'attack', 'ability costType preserved');
    assert.equal(loadedAbility.data.cost, '2', 'ability cost preserved');
  });
});


QUnit.module('Save/Load — v1 Format', function() {

  QUnit.test('loadData detects v1 format (no versionSpec)', function(assert) {
    var mainMenu = $.data($('.menuBar')[0], 'coreNode');
    var countBefore = $('.cardGroup').length;

    var v1Data = {
      cardType: 'monster',
      title: 'V1 Monster',
      move: '4',
      actions: '2',
      STR: '2SW 1R',
      ARM: '1R SH',
      WILL: '1B',
      DEX: '1B'
    };

    $('input[name="loadAppend"]').prop('checked', true);
    mainMenu.loadData(v1Data);

    assert.ok($('.cardGroup').length >= countBefore, 'card loaded from v1 format');
    var loaded = $('.cardGroup.selected').data('node');
    assert.equal(loaded.data.title, 'V1 Monster', 'v1 card title loaded');
    assert.equal(loaded.data.cardType, 'monster', 'v1 card type loaded');

    var cardContainer = $('.cardContainer').data('node');
    cardContainer.deleteSelectedCard();
    $('input[name="loadAppend"]').prop('checked', false);
  });
});


QUnit.module('Save/Load — Card Container', function() {

  QUnit.test('deleteCards removes all cards', function(assert) {
    var cardContainer = $('.cardContainer').data('node');
    cardContainer.addCard(false);
    cardContainer.addCard(false);

    assert.ok($('.cardGroup').length >= 3, 'multiple cards exist');

    cardContainer.deleteCards();
    assert.equal($('.cardGroup').length, 0, 'all cards removed');

    cardContainer.addCard(false);
    assert.equal($('.cardGroup').length, 1, 'can add card after deleteCards');
  });


  QUnit.test('duplicateSelectedCard creates a copy', function(assert) {
    var cardContainer = $('.cardContainer').data('node');
    var card = $('.cardGroup.selected').data('node');
    card.setTitle('Original Card');

    var countBefore = $('.cardGroup').length;
    cardContainer.duplicateSelectedCard();

    assert.equal($('.cardGroup').length, countBefore + 1, 'card count increased');
    var duplicate = $('.cardGroup.selected').data('node');
    assert.equal(duplicate.data.title, 'Original Card', 'duplicate has same title');

    cardContainer.deleteSelectedCard();
    card.setTitle('title');
  });
});
