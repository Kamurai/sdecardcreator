# AGENTS.md — SDE Card Creator

## Project Overview

**SDE Card Creator** is a browser-based tool for designing custom cards for the tabletop board game **Super Dungeon Explore** (SDE). Users create Hero, Monster, Pet, Loot, Treasure, Wonder, Explore, Timeout, Command, and Arcade cards with full control over stats, abilities, keywords, artwork, and styling.

- **Live**: https://medicationforall.github.io/sdecardcreator/
- **Author**: James M Adams (Medication For All)
- **License**: LGPL

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Language | Vanilla JavaScript (ES5) — no transpilation, no modules |
| DOM | jQuery 3.2.1 + jQuery UI 1.12.1 |
| Export | dom-to-image 2.5.2 (PNG), FileSaver.js 1.3.3 (file download) |
| Animation | Animate.css 3.5.1 |
| Icons | Game-icons.net (spritesheet in `css/image/`) |
| Fonts | Adelon Bold + Adelon Italic (custom woff2/ttf in `css/font/`) |
| Build | **None** — static files served via any HTTP server |
| Dependencies | All loaded from CDN via `<script>` tags in `index.html` |

### Running Locally

```bash
python -m http.server
# then open http://localhost:8000
```

---

## Directory Structure

```
sdecardcreator/
  index.html              # Entry point — all scripts loaded here
  config.json             # App config (enableShare, servlet URL)
  README.md               # Project documentation
  css/                    # Stylesheets
    style.css             # Global styles, layout, header
    form.css              # Editor form control styles
    card2.css             # Base card styles
    cardModel.css         # Hero/Monster/Pet card styles
    cardItem.css          # Item (Loot/Treasure/Wonder) card styles
    cardExplore.css       # Explore card styles
    cardCommand.css       # Command card styles
    cardTimeout.css       # Timeout card styles
    cardArcade.css        # Arcade card styles
    cardContainer.css     # Card container layout
    editorPane.css        # Editor pane layout
    keywordSettings.css   # Keyword display styles
    loadSubMenu.css       # Load menu styles
    font/                 # AdelonBold.woff2, AdelonItalic.woff2
    image/                # Spritesheet, potion icons
  html/                   # Static help pages (loaded in dialogs)
    help.html, faq.html, about.html, changes.html, todo.html
  image/                  # Card images, backgrounds, borders, silhouettes
    borders/              # Card border images
  json/                   # Keyword data files
    sde_keywords.json           # Master keyword definitions
    sde_keywords_english.json   # English keyword translations
    sde_keywords_deutch.json    # German keyword translations
    sde_keywords_espanol.json   # Spanish keyword translations
    sde_keywords_francais.json  # French keyword translations
  license/                # LGPL license text
  script/                 # All application JavaScript
    main.js               # App entry point and global utility functions
    mjs/                  # Reusable utility library (Core framework)
    menuBar/              # Top menu bar (save/load/add card)
    editorPane/           # Left panel — form controls for editing cards
    cardContainer/        # Right panel — card rendering and display
    ability/              # Ability model (card abilities)
    keyword/              # Keyword store and settings
    translation/          # i18n system (4 languages)
  template/               # Pre-built card templates (JSON)
    heroes/, loot/, treasure/, wonder/, explore/, timeout/, command/
  test/                   # Test phrase files for translation testing
```

---

## Architecture

### Pattern: Constructor Functions + Mixins

The codebase uses **ES5 constructor functions** with a **mixin pattern** for composition. There are no ES6 classes, no module system, and no bundler. All scripts are loaded via `<script>` tags in `index.html` in dependency order.

**Mixin application** uses `call(this)` to mix behavior into constructors:

```javascript
// In Card._constructor:
HasCardTypeControls.call(this);
HasCardHeader.call(this);
HasCardImage.call(this);
HasStats.call(this);
// ... etc
```

**State storage** uses jQuery's `.data()` to attach object references to DOM nodes:

```javascript
this.node.data('node', this);                     // Store reference on DOM
$('.cardContainer').data('node');                  // Retrieve reference from DOM
$('.page').data('keywordStore', keywordStore);     // Global keyword store on .page
```

### Core Framework (`script/mjs/script/Core.js`)

A lightweight tree data structure providing parent-child relationships:

- `Core.prototype.add(child)` — add child, set parent
- `Core.prototype.remove(child)` — remove child
- `Core.prototype.each(methodName)` — call method on all children
- `Core.prototype.find(classObject)` — find child by constructor
- `Core.prototype.closest(classObject)` — traverse up tree

`KeywordStore` extends `Core` via prototypal inheritance.

### BaseControl (`script/editorPane/controls/BaseControl.js`)

All editor controls inherit from `BaseControl`, which handles:
- Template rendering into the edit form
- Calling `this.setup()` on the subclass
- Storing `this.node` reference

---

## Component Hierarchy

```
index.html
  $(document).ready() in main.js
    ├── MainMenu              — Top bar
    │   ├── HasOpenMenuButtons  — Hamburger menu toggle
    │   ├── HasSaveMenu         — Save as PNG / JSON
    │   ├── HasLoadMenu         — Import JSON / load templates
    │   └── HasAddCardButton    — "Add Card" button
    ├── KeywordStore           — Loaded from sde_keywords_english.json
    ├── EditorPane             — Left panel container
    │   └── EditForm           — Houses all editor controls
    │       ├── CardControl      — Type, scale, author, border, orientation
    │       ├── HeaderControl    — Title, subtitle, move, actions
    │       ├── ImageControl     — Character image, background
    │       ├── ItemStatsControl — Item stat bonuses
    │       ├── StatsControl     — STR, ARM, WILL, DEX
    │       ├── KeywordControl   — Keywords list, affinity gem
    │       ├── AbilityControl   — Add/remove abilities
    │       ├── BitControl       — Monster bit type (8-bit, 16-bit, boss)
    │       ├── FlavorTextControl— Flavor text
    │       ├── CardModifierControl — Card modifiers
    │       └── LegendControl    — Legend display
    └── CardContainer          — Right panel
        └── Card (1..n)        — Rendered card instances
            ├── HasCardTypeControls — Card type switching
            ├── HasCardHeader      — Title/subtitle DOM
            ├── HasCardImage       — Character image DOM
            ├── HasItemStats       — Item stat DOM
            ├── HasStats           — Combat stat DOM
            ├── HasKeywords        — Keywords DOM
            ├── HasAffinity        — Affinity gem DOM
            ├── HasAbilities       — Abilities DOM
            ├── HasFlavorText      — Flavor text DOM
            └── HasBit             — Monster bit DOM
```

---

## Data Flow

### 1. Initialization (`main.js` — `$(document).ready`)

```
Load sde_keywords_english.json via $.getJSON
  → new MainMenu()
  → new KeywordStore(keywords)
  → new EditorPane()           → creates EditForm with all controls
  → new CardContainer()        → stores on .cardContainer DOM
  → new Card(false)            → first card, calls initFirstCard()
  → keywordStore stored on .page via $.data
```

### 2. User Edits Card (Form → Card)

Each editor control binds `input`/`change` events on its form fields. When the user types or selects:

```
Form input event
  → Control handler (e.g., HasTitleControl)
  → Reads value from form field
  → Updates card.data property
  → Updates card DOM directly (e.g., .find('.title').text(value))
```

**Example — Title change:**
```javascript
// In HasTitleControl mixin:
editForm.find('input[name="title"]').on('input', function() {
    var card = $('.cardGroup.selected').data('node');
    card.data.title = $(this).val();
    card.node.find('.title').text($(this).val());
});
```

### 3. Ability Text Parsing

When ability definitions are entered, they're parsed through a chain:

```
Raw text
  → keywordStore.findKeywords()     — wraps known keywords in <span>
  → keywordStore.findDice()         — converts dice notation (1B, 2R, etc.) to styled spans
  → keywordStore.findAffinities()   — converts affinity names to styled spans
  → keywordStore.findStats()        — converts stat names (STR, ARM) to styled spans
  → Rendered HTML in card
```

### 4. Card Selection / Sync

When a card is clicked (selected):

```
Click on .cardGroup
  → HasCardSelect deselects others, selects clicked
  → CardContainer.syncForm(card)
  → EditForm.sync(card.data, card.abilities)
  → Each control reads card.data and updates form fields
```

### 5. Save as PNG

```
Click "Save Image"
  → Get selected .cardGroup DOM element
  → domtoimage.toBlob(selectedCard)
  → saveAs(blob, title + '.png')
```

### 6. Save as JSON

```
Click "Save JSON"
  → MainMenu.gatherData()
  → CardContainer.gatherData()
  → Each Card.gatherData() → returns card.data + abilities
  → JSON.stringify(data)
  → saveAs(blob, title + '.json')
```

### 7. Load JSON

```
File input change
  → FileReader.readAsText(file)
  → jQuery.parseJSON(text)
  → Check versionSpec: "2.0" → loadDataVersion2 (multi-card)
                        else → loadDataVersion1 (single card)
  → CardContainer.loadData(data)
  → For each card: new Card() → card.loadData(cardData)
  → Each load method updates card.data and DOM
```

---

## Card Types

| Type | CSS Class | Layout |
|------|-----------|--------|
| Hero | `.hero` | Model card — front (stats, image, abilities) + back (keywords, flavor) |
| Monster | `.monster` | Model card — same as Hero with skull count |
| Pet | `.pet` | Model card — with pet cost |
| Loot | `.loot` | Item card — small, with orientation |
| Treasure | `.treasure` | Item card — same as Loot |
| Wonder | `.wonder` | Item card — same as Loot |
| Explore | `.explore` | Explore layout — creep spawn count |
| Timeout | `.timeout` | Timeout layout |
| Command | `.command` | Command layout |
| Arcade Solo | `.arcadeSolo` | Arcade mode solo card |
| Arcade Gang | `.arcadeGang` | Arcade mode gang card |

Card type switching uses `HasSetTypeDisplay` mixin which toggles CSS classes to show/hide relevant sections.

---

## Card Data Model

```javascript
// Card.data (default for Hero):
{
  cardType: "hero",
  title: "title",
  author: "",
  subTitle: "subTitle",
  move: "6",
  actions: "3",
  wounds: "5",
  potions: "1",
  petCost: "1",
  keywordsList: "",
  background: "fae_wood.jpg",
  backgroundFlip: false,
  imageSource: "default",
  STR: "1SW 3B",            // Stat notation: dice color + count
  ARM: "2B 1R SH",
  WILL: "3B",
  DEX: "3B",
  flavorText: "",
  abilities: [],             // Array of Ability data objects
  affinity: "CITRINE"        // CITRINE, RUBY, EMERALD, SAPPHIRE, AMETHYST
}

// Ability data:
{
  costType: "attack",        // attack, support, signature, special, nameOnly, etc.
  cost: "2",                 // Action point cost
  name: "Head Chopper",
  definition: "1SW, +1G STR" // Parsed for keywords, dice, stats
}
```

### Dice Notation

Stats and abilities use a compact dice notation:

- `1B` = 1 Blue die, `2R` = 2 Red dice, `3G` = 3 Green dice
- `4O` = 4 Orange dice, `5P` = 5 Purple dice
- `1SW` = 1 Sword (melee), `0MI` = 0 Missile, `1MA` = 1 Magic, `2RG` = 2 Range
- `1ST` = 1 Star, `SH` = Shield
- `1AC` = 1 Action, `2MO` = 2 Movement, `2PO` = 2 Potion, `1HE` = 1 Heart

---

## Keyword System

### KeywordStore (`script/keyword/KeywordStore.js`)

Loaded from `json/sde_keywords_english.json` (or language-specific file). Contains ~300+ game keywords with:

```javascript
{
  "9 Lives": {
    "description": "When a model with 9 Lives...",
    "version": 1,
    "hasErrata": "true",
    "errata": [
      { "description": "Updated text...", "version": 1.99, "source": "..." }
    ]
  }
}
```

**Keyword matching** uses dynamically-built regex from all keyword names, sorted by length (longest first). Two regexes:
- `this.re` — exact keyword matches
- `this.reN` — keywords with numeric variable (e.g., "Burst X" → matches "Burst 3")

**Keyword rendering** on card backs: when abilities reference keywords, the back of the card auto-populates keyword definitions.

### KeywordSettings (`script/keyword/KeywordSettings.js`)

Allows users to customize keyword descriptions and create custom keywords via `keywordStore.setCustomKey()`.

---

## Internationalization (i18n)

### Languages Supported
- English (`en`), German/Deutsch (`de`), Spanish/Espanol (`es`), French/Francais (`fr`)

### Architecture

```
script/translation/
  baseCommon.js      — Shared constants (language codes, file names)
  baseEnglish.js     — English regex patterns, symbols, stats, UI strings
  baseDeutch.js      — German equivalents
  baseEspanol.js     — Spanish equivalents
  baseFrancais.js    — French equivalents
  translator.js      — Dispatches to correct language's functions
  setUI.js           — Applies language strings to UI elements
```

**Language switching** (`changeLanguage()` in main.js):
1. Strip existing stat/symbol CSS classes from keyword definitions
2. Switch keyword JSON file (loads language-specific `sde_keywords_*.json`)
3. Rebuild `KeywordStore` with new keywords
4. Re-apply language to all definitions and descriptions
5. Update UI text via `setUI.js`

Each language defines its own:
- Stat regex patterns (STR/ARM/WILL/DEX vs FUE/RES/VOL/DES etc.)
- Dice notation patterns
- Symbol names (AUGMENT, DANGEROUS, BANE, etc.)
- Affinity names
- Immunity names
- UI label translations

---

## Save / Load Format

### JSON v2.0 (multi-card)

```json
{
  "versionSpec": "2.0",
  "cards": [
    { /* Card data object */ },
    { /* Card data object */ }
  ]
}
```

### JSON v1.0 (single card — legacy)

A single card data object at the root level (no `versionSpec` wrapper).

Load logic detects version via `data.versionSpec === '2.0'` and routes accordingly.

### Template Loading

Templates in `template/` are v1.0 format (single card). Loaded via `$.getJSON('template/' + file)` when clicking template links in the Load menu.

---

## Key Patterns and Conventions

### Mixin Pattern

All behavior composition uses `FunctionName.call(this)` to mix methods/properties into the current constructor's `this`. Mixins are prefixed with `Has` (e.g., `HasSaveMenu`, `HasCardHeader`, `HasToggleDisplay`).

### DOM as State Store

jQuery `.data()` is used as the primary state binding mechanism between JavaScript objects and DOM elements:

```javascript
this.node.data('node', this);                    // Attach JS object to its DOM node
$('.cardGroup.selected').data('node');            // Get Card object from DOM
$('.cardContainer').data('node');                 // Get CardContainer
$('.page').data('keywordStore', keywordStore);    // Global singleton
```

### Selected Card

The currently-selected card has CSS class `.selected` on its `.cardGroup` wrapper. All editor operations target `$('.cardGroup.selected').data('node')`.

### Template Strings

HTML templates are stored as string properties on constructor functions (e.g., `Card.template`, `EditForm.template`). Rendered via jQuery's `$(this.template).appendTo(parent)`.

### Event Binding

Uses jQuery event delegation and `$.proxy()` for `this` binding in callbacks.

---

## Assets

### Card Backgrounds
Located in `image/background/` — referenced by filename in `card.data.background`.

### Card Borders
Located in `image/borders/` — various border styles for card frames.

### CSS Spritesheet
`css/image/spritesheet.png` — contains all stat icons, dice faces, affinity gems, keywords symbols, offense types. Referenced via CSS background-position.

### Silhouette Images
`image/*.png` — character silhouettes (petsilo.png, dragonsilo.png, barbsilo.png, etc.) used as default card images.

---

## Configuration

### `config.json`

```json
{
  "enableShare": false,
  "servlet": "cardStore.php"
}
```

- `enableShare` — toggles the "Share" button in the header (creates URL link to card)
- `servlet` — PHP backend URL for share functionality (not included in repo)

---

## No Build Process

There is no `package.json`, no bundler, no transpiler, no test runner. The project is purely static HTML/CSS/JS served over HTTP. Script load order in `index.html` matters — dependencies must be loaded before dependents.
