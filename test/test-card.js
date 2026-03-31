QUnit.module('Card — Data Model', function() {

  QUnit.test('default card is a hero', function(assert) {
    var card = $('.cardGroup.selected').data('node');
    assert.ok(card, 'selected card exists');
    assert.equal(card.data.cardType, 'hero', 'default type is hero');
  });


  QUnit.test('default card has expected stat defaults', function(assert) {
    var card = $('.cardGroup.selected').data('node');
    assert.equal(card.data.move, '6', 'move defaults to 6');
    assert.equal(card.data.actions, '3', 'actions defaults to 3');
    assert.equal(card.data.wounds, '5', 'wounds defaults to 5');
    assert.equal(card.data.STR, '1SW 3B', 'STR defaults to 1SW 3B');
    assert.equal(card.data.ARM, '2B 1R SH', 'ARM defaults to 2B 1R SH');
    assert.equal(card.data.WILL, '3B', 'WILL defaults to 3B');
    assert.equal(card.data.DEX, '3B', 'DEX defaults to 3B');
  });


  QUnit.test('gatherData returns card data with abilities', function(assert) {
    var card = $('.cardGroup.selected').data('node');
    var data = card.gatherData();

    assert.equal(data.cardType, card.data.cardType, 'cardType preserved');
    assert.equal(data.title, card.data.title, 'title preserved');
    assert.ok(Array.isArray(data.abilities), 'abilities is an array');
    assert.equal(data.abilities.length, card.abilities.length, 'ability count matches');
  });


  QUnit.test('gatherData returns a clone, not a reference', function(assert) {
    var card = $('.cardGroup.selected').data('node');
    var data = card.gatherData();

    data.title = 'MUTATED';
    assert.notEqual(card.data.title, 'MUTATED', 'mutating gathered data does not affect card');
  });


  QUnit.test('loadData populates card from JSON', function(assert) {
    var cardContainer = $('.cardContainer').data('node');
    cardContainer.addCard(false);
    var card = $('.cardGroup.selected').data('node');

    var templateData = {
      cardType: 'monster',
      title: 'Test Dragon',
      subTitle: 'Boss Monster',
      move: '4',
      actions: '2',
      wounds: '8',
      STR: '2SW 1R',
      ARM: '1R 1G SH',
      WILL: '2R',
      DEX: '1B',
      flavorText: 'A fearsome test beast.',
      abilities: [
        { costType: 'attack', cost: '3', name: 'Flame Breath', definition: 'Sweep 2, FIRE' }
      ],
      affinity: 'RUBY'
    };

    card.loadData(templateData);

    assert.equal(card.data.title, 'Test Dragon', 'title loaded');
    assert.equal(card.data.cardType, 'monster', 'cardType loaded');
    assert.equal(card.data.move, '4', 'move loaded');
    assert.equal(card.abilities.length, 1, 'ability loaded');
    assert.equal(card.abilities[0].data.name, 'Flame Breath', 'ability name loaded');

    cardContainer.deleteSelectedCard();
  });
});


QUnit.module('Card — Multi-Card', function() {

  QUnit.test('adding a card increases card count', function(assert) {
    var countBefore = $('.cardGroup').length;
    var cardContainer = $('.cardContainer').data('node');

    cardContainer.addCard(false);

    assert.equal($('.cardGroup').length, countBefore + 1, 'card count increased by 1');

    cardContainer.deleteSelectedCard();
  });


  QUnit.test('new card becomes selected', function(assert) {
    var cardContainer = $('.cardContainer').data('node');

    cardContainer.addCard(false);
    var selected = $('.cardGroup.selected').data('node');

    assert.ok(selected, 'a card is selected');
    assert.equal($('.cardGroup.selected').length, 1, 'exactly one card selected');

    cardContainer.deleteSelectedCard();
  });


  QUnit.test('selecting a card syncs form', function(assert) {
    var cardContainer = $('.cardContainer').data('node');

    cardContainer.addCard(false);
    var card2 = $('.cardGroup.selected').data('node');
    card2.data.title = 'Card Two';
    card2.node.find('.title').text('Card Two');

    var card1 = $('.cardGroup').first().data('node');
    cardContainer.selectCard(card1);

    var formTitle = $('.editForm input[name="title"]').val();
    assert.equal(formTitle, card1.data.title, 'form synced to selected card');

    cardContainer.selectCard(card2);
    cardContainer.deleteSelectedCard();
  });
});


QUnit.module('Card — Save/Load Round-Trip', function() {

  QUnit.test('gatherData and loadData produce equivalent cards', function(assert) {
    var card = $('.cardGroup.selected').data('node');
    var originalData = card.gatherData();

    var cardContainer = $('.cardContainer').data('node');
    cardContainer.addCard(false);
    var newCard = $('.cardGroup.selected').data('node');
    newCard.loadData(originalData);

    var roundTrippedData = newCard.gatherData();

    assert.equal(roundTrippedData.cardType, originalData.cardType, 'cardType survives round-trip');
    assert.equal(roundTrippedData.title, originalData.title, 'title survives round-trip');
    assert.equal(roundTrippedData.STR, originalData.STR, 'STR survives round-trip');
    assert.equal(roundTrippedData.ARM, originalData.ARM, 'ARM survives round-trip');
    assert.equal(roundTrippedData.abilities.length, originalData.abilities.length, 'ability count survives round-trip');

    cardContainer.deleteSelectedCard();
  });
});
