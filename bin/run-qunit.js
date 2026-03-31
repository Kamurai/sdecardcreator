const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();

  page.on('console', msg => {
    if (msg.type() === 'error') console.error('  [browser]', msg.text());
  });

  await page.goto('http://localhost:8000/test/runner.html');

  const result = await page.evaluate(() => new Promise((resolve, reject) => {
    const timeout = setTimeout(() => reject(new Error('QUnit did not complete within 30s')), 30000);
    const check = setInterval(() => {
      const el = document.getElementById('qunit-testresult');
      if (el && el.innerText.indexOf('tests completed') !== -1) {
        clearInterval(check);
        clearTimeout(timeout);

        const failed = [];
        document.querySelectorAll('#qunit-tests > li.fail').forEach(li => {
          const name = li.querySelector('.test-name');
          const msg = li.querySelector('.test-message');
          failed.push((name ? name.textContent : 'unknown') + ': ' + (msg ? msg.textContent : ''));
        });

        resolve({ summary: el.innerText.split('\n')[0], failed: failed });
      }
    }, 100);
  }));

  await browser.close();

  console.log(result.summary);

  if (result.failed.length > 0) {
    console.log('\nFailed tests:');
    result.failed.forEach(f => console.log('  ✖ ' + f));
    process.exit(1);
  }

  process.exit(0);
})();
