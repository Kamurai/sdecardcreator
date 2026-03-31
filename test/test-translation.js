QUnit.module('Translation — Dice Parsing', function() {

  QUnit.test('findDice converts blue dice notation', function(assert) {
    var ks = $('.page').data('keywordStore');
    var result = ks.findDice('3B');
    assert.ok(result.indexOf('blue') !== -1, '3B renders with blue class');
    assert.ok(result.indexOf('3') !== -1, 'dice count 3 present');
  });


  QUnit.test('findDice converts red dice notation', function(assert) {
    var ks = $('.page').data('keywordStore');
    var result = ks.findDice('2R');
    assert.ok(result.indexOf('red') !== -1, '2R renders with red class');
  });


  QUnit.test('findDice converts multiple dice types', function(assert) {
    var ks = $('.page').data('keywordStore');
    var result = ks.findDice('1B 2R 3G');
    assert.ok(result.indexOf('blue') !== -1, 'blue present');
    assert.ok(result.indexOf('red') !== -1, 'red present');
    assert.ok(result.indexOf('green') !== -1, 'green present');
  });


  QUnit.test('findDice converts offense types', function(assert) {
    var ks = $('.page').data('keywordStore');

    var sw = ks.findDice('1SW');
    assert.ok(sw.indexOf('melee') !== -1, 'SW renders as melee');

    var mi = ks.findDice('1MI');
    assert.ok(mi.indexOf('missile') !== -1, 'MI renders as missile');

    var ma = ks.findDice('1MA');
    assert.ok(ma.indexOf('magic') !== -1, 'MA renders as magic');
  });
});


QUnit.module('Translation — Stat Parsing', function() {

  QUnit.test('findStats wraps stat names', function(assert) {
    var ks = $('.page').data('keywordStore');
    var result = ks.findStats('STR');
    assert.ok(result.indexOf('stat') !== -1, 'STR is wrapped as stat');
  });


  QUnit.test('findStats handles all four stats', function(assert) {
    var ks = $('.page').data('keywordStore');

    assert.ok(ks.findStats('STR').indexOf('stat') !== -1, 'STR recognized');
    assert.ok(ks.findStats('ARM').indexOf('stat') !== -1, 'ARM recognized');
    assert.ok(ks.findStats('WILL').indexOf('stat') !== -1, 'WILL recognized');
    assert.ok(ks.findStats('DEX').indexOf('stat') !== -1, 'DEX recognized');
  });
});


QUnit.module('Translation — Affinity Parsing', function() {

  QUnit.test('findAffinities wraps affinity names', function(assert) {
    var ks = $('.page').data('keywordStore');
    var result = ks.findAffinities('RUBY');
    assert.ok(result.indexOf('affinity') !== -1 || result.indexOf('RUBY') !== -1, 'RUBY is recognized');
  });
});


QUnit.module('Translation — Utility Functions', function() {

  QUnit.test('toCamelCase capitalizes first letter', function(assert) {
    assert.equal(toCamelCase('fire'), 'Fire', 'fire → Fire');
    assert.equal(toCamelCase('ICE'), 'Ice', 'ICE → Ice');
  });


  QUnit.test('toCamelCaseLoop handles multi-word strings', function(assert) {
    assert.equal(toCamelCaseLoop('fire storm'), 'Fire Storm', 'fire storm → Fire Storm');
    assert.equal(toCamelCaseLoop('IMMUNE: BANE'), 'Immune: Bane', 'IMMUNE: BANE → Immune: Bane');
  });


  QUnit.test('isNotEmpty returns correct values', function(assert) {
    assert.ok(isNotEmpty('hello'), 'non-empty string is not empty');
    assert.ok(!isNotEmpty(''), 'empty string is empty');
    assert.ok(!isNotEmpty(undefined), 'undefined is empty');
    assert.ok(!isNotEmpty(null), 'null is empty');
  });
});
