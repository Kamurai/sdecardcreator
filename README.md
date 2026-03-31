# SDE Card Creator

You can see a working version of the app at [https://medicationforall.github.io/sdecardcreator/](https://medicationforall.github.io/sdecardcreator/)

This is an application for creating cards for Super Dungeon Explore.<br />
Can create Hero, Monster, Pet, Loot, Treasure, Wonder, Explore, and Timeout cards.


## Requirements
http web server. Apache, python, or IIS will work fine.


### Python quick webserver
Requires python to be installed.
1. Open a command prompt in the directory where you have sdecardcreator downloaded.
2. In the command prompt type the following:
```
python -m http.server
```
3. Open a web browser and in the address bar go to **http://localhost:8000**



## Running Tests
Tests use [QUnit](https://qunitjs.com/) and run in the browser.

**In the browser:**

1. Start a local web server (see above)
2. Open **http://localhost:8000/test/runner.html**

**Headless (requires Node.js and Playwright):**

```
npx playwright install chromium
bin/run-tests
```

This starts a temporary HTTP server, runs the tests in headless Chromium, and exits with 0 on success or 1 on failure.

Test files are in the `test/` directory:
* `test-card.js` — Card data model, multi-card management, save/load round-trip
* `test-card-types.js` — All 11 card types, author, region, orientation
* `test-header.js` — Title, subtitle, move, actions
* `test-stats.js` — STR/ARM/WILL/DEX dice rendering, wounds, potions, skulls
* `test-ability.js` — Ability add/edit/remove lifecycle and form event binding
* `test-keyword.js` — Keyword store, custom keywords, save/load round-trip
* `test-editor-sync.js` — Form-to-card and card-to-form sync
* `test-save-load.js` — v1/v2 JSON formats, multi-card, abilities, card operations
* `test-translation.js` — Dice/stat/affinity parsing, utility functions


## Libraries
This Application uses:
* [jQuery](https://jquery.com/)
* [jQuery-ui](http://jqueryui.com/)
* [FileSaver.js](https://github.com/eligrey/FileSaver.js/)
* [dom-to-image](https://github.com/tsayen/dom-to-image)
* [Animate.css](https://daneden.github.io/animate.css/)
* [Game-icons.net](http://game-icons.net/)


All of the scripts are being called via cdn.<br />
If you want to run this application offline you'll need to locally reference those libraries.


## License
This applications code is Licensed under LGPL see the license directory.

This project is completely unofficial and in no way endorsed by Ninja Division Publishing™ LLC. Super Dungeon Explore® and its respective contents are trademarks and/or copyrights of Ninja Division Publishing™ LLC. No challenge to their status intended. All Rights Reserved to their respective owners.
