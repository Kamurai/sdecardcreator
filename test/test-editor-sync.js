QUnit.module('Editor Sync — Form reflects selected card', function() {

  QUnit.test('selecting a card syncs title to form', function(assert) {
    var cardContainer = $('.cardContainer').data('node');

    cardContainer.addCard(false);
    var card2 = $('.cardGroup.selected').data('node');
    card2.setTitle('Second Card');

    var card1 = $('.cardGroup').first().data('node');
    cardContainer.selectCard(card1);
    assert.equal($('.editForm input[name="title"]').val(), card1.data.title, 'form shows card1 title');

    cardContainer.selectCard(card2);
    assert.equal($('.editForm input[name="title"]').val(), 'Second Card', 'form shows card2 title');

    cardContainer.deleteSelectedCard();
  });


  QUnit.test('selecting a card syncs stats to form', function(assert) {
    var cardContainer = $('.cardContainer').data('node');

    cardContainer.addCard(false);
    var card2 = $('.cardGroup.selected').data('node');
    card2.setStat('STR', '5R 2G');

    var card1 = $('.cardGroup').first().data('node');
    cardContainer.selectCard(card1);
    assert.equal($('.editForm input[name="STR"]').val(), card1.data.STR, 'form shows card1 STR');

    cardContainer.selectCard(card2);
    assert.equal($('.editForm input[name="STR"]').val(), '5R 2G', 'form shows card2 STR');

    cardContainer.deleteSelectedCard();
  });


  QUnit.test('selecting a card syncs card type to form', function(assert) {
    var cardContainer = $('.cardContainer').data('node');

    cardContainer.addCard(false);
    var card2 = $('.cardGroup.selected').data('node');
    card2.setCardType('monster');

    var card1 = $('.cardGroup').first().data('node');
    cardContainer.selectCard(card1);
    assert.equal($('.editForm select[name="cardType"]').val(), card1.data.cardType, 'form shows card1 type');

    cardContainer.selectCard(card2);
    assert.equal($('.editForm select[name="cardType"]').val(), 'monster', 'form shows card2 type');

    cardContainer.deleteSelectedCard();
  });


  QUnit.test('selecting a card syncs abilities to form', function(assert) {
    var cardContainer = $('.cardContainer').data('node');
    var editForm = $('.editForm').data('node');

    cardContainer.addCard(false);
    var card2 = $('.cardGroup.selected').data('node');
    editForm.abilityControl.addAbility();
    card2.abilities[card2.abilities.length - 1].setName('Card2 Ability');
    var card2AbilityCount = card2.abilities.length;

    var card1 = $('.cardGroup').first().data('node');
    cardContainer.selectCard(card1);
    var card1FormAbilities = $('.editForm .abilities .ability').length;

    cardContainer.selectCard(card2);
    var card2FormAbilities = $('.editForm .abilities .ability').length;

    assert.equal(card1FormAbilities, card1.abilities.length, 'form shows card1 ability count');
    assert.equal(card2FormAbilities, card2AbilityCount, 'form shows card2 ability count');

    card2.abilities[card2.abilities.length - 1].closeAbility();
    cardContainer.deleteSelectedCard();
  });
});


QUnit.module('Editor Sync — Form input updates card', function() {

  QUnit.test('typing in title input updates card', function(assert) {
    var card = $('.cardGroup.selected').data('node');

    $('.editForm input[name="title"]').val('Typed Title').trigger('input');
    assert.equal(card.data.title, 'Typed Title', 'card data updated from form');

    card.setTitle('title');
    $('.editForm input[name="title"]').val('title');
  });


  QUnit.test('typing in subtitle input updates card', function(assert) {
    var card = $('.cardGroup.selected').data('node');

    $('.editForm input[name="subTitle"]').val('Typed Sub').trigger('input');
    assert.equal(card.data.subTitle, 'Typed Sub', 'card data updated from form');

    card.setSubTitle('subTitle');
    $('.editForm input[name="subTitle"]').val('subTitle');
  });


  QUnit.test('changing card type select updates card', function(assert) {
    var card = $('.cardGroup.selected').data('node');
    var original = card.data.cardType;

    $('.editForm select[name="cardType"]').val('monster').trigger('change');
    assert.equal(card.data.cardType, 'monster', 'card type updated from form');

    $('.editForm select[name="cardType"]').val(original).trigger('change');
  });


  QUnit.test('typing in move input updates card', function(assert) {
    var card = $('.cardGroup.selected').data('node');
    var original = card.data.move;

    $('.editForm input[name="move"]').val('9').trigger('input');
    assert.equal(card.data.move, '9', 'card move updated from form');

    card.setMove(original);
    $('.editForm input[name="move"]').val(original);
  });
});
