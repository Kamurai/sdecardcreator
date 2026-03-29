QUnit.module('Card Header — Title and Subtitle', function() {

  QUnit.test('setTitle updates data and DOM', function(assert) {
    var card = $('.cardGroup.selected').data('node');

    card.setTitle('Dragon Blade');
    assert.equal(card.data.title, 'Dragon Blade', 'data updated');
    assert.equal(card.node.find('.title').first().text(), 'Dragon Blade', 'DOM updated');

    card.setTitle('title');
  });


  QUnit.test('setTitle with empty string resets to default', function(assert) {
    var card = $('.cardGroup.selected').data('node');

    card.setTitle('');
    assert.equal(card.node.find('.title').first().text(), 'title', 'DOM shows default');

    card.setTitle('title');
  });


  QUnit.test('setSubTitle updates data and DOM', function(assert) {
    var card = $('.cardGroup.selected').data('node');

    card.setSubTitle('Legendary Hero');
    assert.equal(card.data.subTitle, 'Legendary Hero', 'data updated');
    assert.equal(card.node.find('.subTitle').first().text(), 'Legendary Hero', 'DOM updated');

    card.setSubTitle('subTitle');
  });


  QUnit.test('setSubTitle with empty string resets to default', function(assert) {
    var card = $('.cardGroup.selected').data('node');

    card.setSubTitle('');
    assert.equal(card.node.find('.subTitle').first().text(), 'subTitle', 'DOM shows default');
  });
});


QUnit.module('Card Header — Move and Actions', function() {

  QUnit.test('setMove updates data and DOM', function(assert) {
    var card = $('.cardGroup.selected').data('node');
    var original = card.data.move;

    card.setMove('8');
    assert.equal(card.data.move, '8', 'data updated');
    assert.equal(card.node.find('.move').first().text(), '8', 'DOM updated');

    card.setMove(original);
  });


  QUnit.test('setActions updates data and DOM', function(assert) {
    var card = $('.cardGroup.selected').data('node');
    var original = card.data.actions;

    card.setActions('5');
    assert.equal(card.data.actions, '5', 'data updated');
    assert.equal(card.node.find('.actions').first().text(), '5', 'DOM updated');

    card.setActions(original);
  });
});
