QUnit.module('Card Types — Switching', function() {

  var allTypes = ['hero', 'monster', 'pet', 'loot', 'treasure', 'wonder', 'explore', 'command', 'timeout', 'arcadeSolo', 'arcadeGang'];

  allTypes.forEach(function(type) {
    QUnit.test('setCardType("' + type + '") applies correct CSS class', function(assert) {
      var card = $('.cardGroup.selected').data('node');
      var originalType = card.data.cardType;

      card.setCardType(type);

      assert.equal(card.data.cardType, type, 'data.cardType updated');
      assert.ok(card.node.find('.card').hasClass(type), '.card has class "' + type + '"');

      card.setCardType(originalType);
    });
  });


  QUnit.test('switching type removes previous type class', function(assert) {
    var card = $('.cardGroup.selected').data('node');
    var originalType = card.data.cardType;

    card.setCardType('monster');
    card.setCardType('loot');

    assert.ok(!card.node.find('.card').hasClass('monster'), 'monster class removed');
    assert.ok(card.node.find('.card').hasClass('loot'), 'loot class applied');

    card.setCardType(originalType);
  });


  QUnit.test('switching type updates default avatar', function(assert) {
    var card = $('.cardGroup.selected').data('node');
    var originalType = card.data.cardType;

    card.setCardType('pet');
    var petSrc = card.node.find('.character').attr('src');
    assert.ok(petSrc.indexOf('bunny') !== -1, 'pet gets bunny silhouette');

    card.setCardType('monster');
    var monsterSrc = card.node.find('.character').attr('src');
    assert.ok(monsterSrc.indexOf('dragon') !== -1, 'monster gets dragon silhouette');

    card.setCardType(originalType);
  });
});


QUnit.module('Card Types — Author and Region', function() {

  QUnit.test('setAuthor updates data and DOM', function(assert) {
    var card = $('.cardGroup.selected').data('node');

    card.setAuthor('Test Author');

    assert.equal(card.data.author, 'Test Author', 'data updated');
    assert.equal(card.node.find('.author').first().text(), 'Test Author', 'DOM updated');

    card.setAuthor('');
  });


  QUnit.test('setRegion applies color class', function(assert) {
    var card = $('.cardGroup.selected').data('node');

    card.setRegion('red');
    assert.ok(card.node.find('.card').hasClass('red'), 'red class applied');

    card.setRegion('green');
    assert.ok(card.node.find('.card').hasClass('green'), 'green class applied');
    assert.ok(!card.node.find('.card').hasClass('red'), 'red class removed');

    card.setRegion('');
  });


  QUnit.test('setOrientation sets item layout', function(assert) {
    var card = $('.cardGroup.selected').data('node');
    var originalType = card.data.cardType;
    card.setCardType('loot');

    card.setOrientation('ruby');
    assert.ok(card.node.find('.contentBorder').first().hasClass('ruby'), 'ruby orientation applied');

    card.setOrientation('sapphire');
    assert.ok(card.node.find('.contentBorder').first().hasClass('sapphire'), 'sapphire orientation applied');
    assert.ok(!card.node.find('.contentBorder').first().hasClass('ruby'), 'ruby removed');

    card.setCardType(originalType);
  });
});
