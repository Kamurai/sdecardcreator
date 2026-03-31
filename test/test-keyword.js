QUnit.module('Keyword — Store', function() {

  QUnit.test('keywordStore is initialized and accessible', function(assert) {
    var keywordStore = $('.page').data('keywordStore');
    assert.ok(keywordStore, 'keywordStore exists on .page');
    assert.ok(keywordStore.data, 'keywordStore has data');
    assert.ok(keywordStore.re, 'keywordStore has regex');
    assert.ok(Object.keys(keywordStore.data).length > 0, 'keywordStore has keywords loaded');
  });


  QUnit.test('findKeywords wraps known keywords in spans', function(assert) {
    var keywordStore = $('.page').data('keywordStore');
    var result = keywordStore.findKeywords('Fire');
    assert.ok(result.indexOf('<span') !== -1, 'known keyword "Fire" is wrapped in a span');
    assert.ok(result.indexOf('keyword') !== -1, 'span has keyword class');
  });


  QUnit.test('findKeywords ignores unknown text', function(assert) {
    var keywordStore = $('.page').data('keywordStore');
    var result = keywordStore.findKeywords('xyzzy');
    assert.equal(result, 'xyzzy', 'unknown text passes through unchanged');
  });


  QUnit.test('findDice converts dice notation to spans', function(assert) {
    var keywordStore = $('.page').data('keywordStore');
    var result = keywordStore.findDice('1B 2R');
    assert.ok(result.indexOf('<span') !== -1, 'dice notation is converted');
  });
});


QUnit.module('Keyword — Custom Keywords', function() {

  QUnit.test('setCustomKey adds a new keyword to the store', function(assert) {
    var keywordStore = $('.page').data('keywordStore');

    keywordStore.setCustomKey({
      name: 'Test Zap',
      description: 'A test keyword',
      version: 1,
      hasErrata: false,
      displayBack: true
    });

    assert.ok(keywordStore.data['Test Zap'], 'keyword exists in store data');
    assert.equal(keywordStore.data['Test Zap'].description, 'A test keyword', 'description is correct');
    assert.ok(keywordStore.customKeywords['Test Zap'], 'keyword is tracked as custom');

    delete keywordStore.data['Test Zap'];
    delete keywordStore.customKeywords['Test Zap'];
    keywordStore._setup(keywordStore.data);
  });


  QUnit.test('custom keyword with spaces is matched by findKeywords', function(assert) {
    var keywordStore = $('.page').data('keywordStore');

    keywordStore.setCustomKey({
      name: 'Flame Shield',
      description: 'Protects with fire',
      version: 1,
      hasErrata: false,
      displayBack: true
    });

    var result = keywordStore.findKeywords('Flame Shield');
    assert.ok(result.indexOf('<span') !== -1, 'custom keyword with space is matched');
    assert.ok(result.indexOf('Flame Shield') !== -1, 'keyword text preserved in output');

    delete keywordStore.data['Flame Shield'];
    delete keywordStore.customKeywords['Flame Shield'];
    keywordStore._setup(keywordStore.data);
  });


  QUnit.test('custom keyword with apostrophe is matched by findKeywords', function(assert) {
    var keywordStore = $('.page').data('keywordStore');

    keywordStore.setCustomKey({
      name: "Dragon's Rage",
      description: 'A fiery dragon attack',
      version: 1,
      hasErrata: false,
      displayBack: true
    });

    var result = keywordStore.findKeywords("Dragon's Rage");
    assert.ok(result.indexOf('<span') !== -1, 'custom keyword with apostrophe is matched');

    delete keywordStore.data["Dragon's Rage"];
    delete keywordStore.customKeywords["Dragon's Rage"];
    keywordStore._setup(keywordStore.data);
  });
});


QUnit.module('Keyword — Save/Load Custom Keywords', function() {

  QUnit.test('custom keywords are included in document-level save', function(assert) {
    var keywordStore = $('.page').data('keywordStore');
    var mainMenu = $.data($('.menuBar')[0], 'coreNode');

    keywordStore.setCustomKey({
      name: 'Flame Shield',
      description: 'Protects with fire',
      version: 1,
      hasErrata: false,
      displayBack: true
    });

    var saved = mainMenu.gatherData();

    assert.ok(saved.customKeywords !== undefined, 'document JSON includes customKeywords');
    assert.ok(saved.customKeywords['Flame Shield'], 'Flame Shield is in customKeywords');
    assert.ok(saved.cards, 'cards array still present');

    delete keywordStore.data['Flame Shield'];
    delete keywordStore.customKeywords['Flame Shield'];
    keywordStore._setup(keywordStore.data);
  });


  QUnit.test('custom keywords survive a save/load round-trip', function(assert) {
    var keywordStore = $('.page').data('keywordStore');
    var mainMenu = $.data($('.menuBar')[0], 'coreNode');

    keywordStore.setCustomKey({
      name: 'Flame Shield',
      description: 'Protects with fire',
      version: 1,
      hasErrata: false,
      displayBack: true
    });

    // Simulate save: serialize to JSON string then parse back (as real file save/load does)
    var saved = JSON.parse(JSON.stringify(mainMenu.gatherData()));

    // Simulate clearing custom keywords (as happens on fresh page load)
    delete keywordStore.data['Flame Shield'];
    delete keywordStore.customKeywords['Flame Shield'];
    keywordStore._setup(keywordStore.data);

    assert.ok(keywordStore.data['Flame Shield'] === undefined, 'keyword cleared from store');

    // Simulate load via the v2 path
    mainMenu.loadData(saved);

    assert.ok(
      keywordStore.data['Flame Shield'] !== undefined,
      'custom keyword restored to store after load'
    );

    var result = keywordStore.findKeywords('Flame Shield');
    assert.ok(result.indexOf('<span') !== -1, 'restored keyword is matchable');

    delete keywordStore.data['Flame Shield'];
    delete keywordStore.customKeywords['Flame Shield'];
    keywordStore._setup(keywordStore.data);
  });


  QUnit.test('custom keyword with spaces and apostrophe survives round-trip', function(assert) {
    var keywordStore = $('.page').data('keywordStore');
    var mainMenu = $.data($('.menuBar')[0], 'coreNode');

    keywordStore.setCustomKey({
      name: "Dragon's Rage",
      description: 'A fiery dragon attack',
      version: 1,
      hasErrata: false,
      displayBack: true
    });

    var saved = JSON.parse(JSON.stringify(mainMenu.gatherData()));

    delete keywordStore.data["Dragon's Rage"];
    delete keywordStore.customKeywords["Dragon's Rage"];
    keywordStore._setup(keywordStore.data);

    mainMenu.loadData(saved);

    assert.ok(
      keywordStore.data["Dragon's Rage"] !== undefined,
      'custom keyword with apostrophe survives round-trip'
    );

    delete keywordStore.data["Dragon's Rage"];
    delete keywordStore.customKeywords["Dragon's Rage"];
    keywordStore._setup(keywordStore.data);
  });
});
