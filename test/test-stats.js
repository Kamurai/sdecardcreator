QUnit.module('Card Stats — Combat Stats', function() {

  QUnit.test('setStat STR updates data', function(assert) {
    var card = $('.cardGroup.selected').data('node');
    var original = card.data.STR;

    card.setStat('STR', '2SW 1R 1G');
    assert.equal(card.data.STR, '2SW 1R 1G', 'STR data updated');

    card.setStat('STR', original);
  });


  QUnit.test('setStat ARM updates data', function(assert) {
    var card = $('.cardGroup.selected').data('node');
    var original = card.data.ARM;

    card.setStat('ARM', '1R 2G SH');
    assert.equal(card.data.ARM, '1R 2G SH', 'ARM data updated');

    card.setStat('ARM', original);
  });


  QUnit.test('setStat renders dice in card DOM', function(assert) {
    var card = $('.cardGroup.selected').data('node');
    var original = card.data.STR;

    card.setStat('STR', '3B 2R');

    var strStat = card.STRStat.node;
    assert.equal(strStat.find('.blue').text(), '3', 'blue dice shows 3');
    assert.equal(strStat.find('.red').text(), '2', 'red dice shows 2');

    card.setStat('STR', original);
  });


  QUnit.test('setStat renders offense type', function(assert) {
    var card = $('.cardGroup.selected').data('node');
    var original = card.data.STR;

    card.setStat('STR', '1SW 2B');
    assert.ok(card.STRStat.node.find('.offense').hasClass('melee'), 'SW renders as melee');

    card.setStat('STR', '1MI 2B');
    assert.ok(card.STRStat.node.find('.offense').hasClass('missile'), 'MI renders as missile');

    card.setStat('STR', '1MA 2B');
    assert.ok(card.STRStat.node.find('.offense').hasClass('magic'), 'MA renders as magic');

    card.setStat('STR', original);
  });


  QUnit.test('setStat renders shield', function(assert) {
    var card = $('.cardGroup.selected').data('node');
    var original = card.data.ARM;

    card.setStat('ARM', '2B SH');
    assert.notEqual(card.ARMStat.node.find('.defense').css('visibility'), 'hidden', 'shield is visible');

    card.setStat('ARM', original);
  });
});


QUnit.module('Card Stats — Wounds, Potions, Skulls', function() {

  QUnit.test('setWounds updates data and DOM', function(assert) {
    var card = $('.cardGroup.selected').data('node');
    var original = card.data.wounds;

    card.setWounds('8');
    assert.equal(card.data.wounds, '8', 'data updated');
    assert.equal(card.node.find('.wounds').text(), '8', 'DOM updated');

    card.setWounds(original);
  });


  QUnit.test('setPotions updates data and DOM', function(assert) {
    var card = $('.cardGroup.selected').data('node');
    var original = card.data.potions;

    card.setPotions('3');
    assert.equal(card.data.potions, '3', 'data updated');
    assert.equal(card.node.find('.potions').text(), '3', 'DOM updated');

    card.setPotions(original);
  });


  QUnit.test('setPetCost updates data and DOM', function(assert) {
    var card = $('.cardGroup.selected').data('node');

    card.setPetCost('2');
    assert.equal(card.data.petCost, '2', 'data updated');
    assert.equal(card.node.find('.petCost').text(), '2', 'DOM updated');

    card.setPetCost('1');
  });


  QUnit.test('setSkulls updates data and DOM', function(assert) {
    var card = $('.cardGroup.selected').data('node');

    card.setSkulls('3');
    assert.equal(card.data.skulls, '3', 'data updated');
    assert.equal(card.node.find('.skulls').text(), '3', 'DOM updated');
  });
});
