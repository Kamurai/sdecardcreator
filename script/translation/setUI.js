function setUILanguage() {
	setUIButtonBar();
	setUISectionHeaders();
	setUICardSection();
	setUIHeaderSection();
	setUIImageSection();
	setUIStatsSection();
	setUIKeywordSection();
	setUIAbilitySection();
	//setUIFlavorTextSection();
	setUICardModifierSection();
	setUILegendSection();
}

function setUIButtonBar(){
	setUISaveButton();
	setUILoadButton();
	setUIAddCardButton();
	setUIHelpButton();
	setUIHelpDialog();
}

function setUISaveButton() {
	var en = UI_SAVE_ENGLISH;
	var de = UI_SAVE_DEUTCH;
	var es = UI_SAVE_ESPANOL;
	var fr = UI_SAVE_FRANCAIS;

	substituteLanguage("uiSave", en, de, es, fr);
}

function setUILoadButton() {
	var en = UI_LOAD_ENGLISH;
	var de = UI_LOAD_DEUTCH;
	var es = UI_LOAD_ESPANOL;
	var fr = UI_LOAD_FRANCAIS;

	substituteLanguage("uiLoad", en, de, es, fr);
}

function setUIAddCardButton() {
	var en = UI_ADD_CARD_ENGLISH;
	var de = UI_ADD_CARD_DEUTCH;
	var es = UI_ADD_CARD_ESPANOL;
	var fr = UI_ADD_CARD_FRANCAIS;

	substituteLanguage("uiAddCard", en, de, es, fr);
}

function setUIHelpButton() {
	var en = UI_HELP_ENGLISH;
	var de = UI_HELP_DEUTCH;
	var es = UI_HELP_ESPANOL;
	var fr = UI_HELP_FRANCAIS;

	substituteLanguage("uiHelp", en, de, es, fr);
}

function setUIHelpDialog() {
	setUIMedicationForAll();
	setUIGithub();
	//setUIHelp();
	//setUIHelpDialogInformatin();
	setUIFAQ();
	//setUIFAQInformation();
	setUIChanges();
	//setUIChangesInformation();
	setUIToDo();
	//setUIToDoInformation();
	setUIAbout();
	//setUIAboutInformation();
}

function setUIMedicationForAll() {
	var en = UI_MEDICATION_FOR_ALL_ENGLISH;
	var de = UI_MEDICATION_FOR_ALL_DEUTCH;
	var es = UI_MEDICATION_FOR_ALL_ESPANOL;
	var fr = UI_MEDICATION_FOR_ALL_FRANCAIS;

	substituteLanguage("uiMedicationForAll", en, de, es, fr);
}

function setUIGithub() {
	var en = UI_GITHUB_ENGLISH;
	var de = UI_GITHUB_DEUTCH;
	var es = UI_GITHUB_ESPANOL;
	var fr = UI_GITHUB_FRANCAIS;

	substituteLanguage("uiGitHub", en, de, es, fr);
}

function setUIFAQ() {
	var en = UI_FAQ_ENGLISH;
	var de = UI_FAQ_DEUTCH;
	var es = UI_FAQ_ESPANOL;
	var fr = UI_FAQ_FRANCAIS;

	substituteLanguage("uiFAQ", en, de, es, fr);
}

function setUIChanges() {
	var en = UI_CHANGES_ENGLISH;
	var de = UI_CHANGES_DEUTCH;
	var es = UI_CHANGES_ESPANOL;
	var fr = UI_CHANGES_FRANCAIS;

	substituteLanguage("uiChanges", en, de, es, fr);
}

function setUIToDo() {
	var en = UI_TODO_ENGLISH;
	var de = UI_TODO_DEUTCH;
	var es = UI_TODO_ESPANOL;
	var fr = UI_TODO_FRANCAIS;

	substituteLanguage("uiToDo", en, de, es, fr);
}

function setUIAbout() {
	var en = UI_ABOUT_ENGLISH;
	var de = UI_ABOUT_DEUTCH;
	var es = UI_ABOUT_ESPANOL;
	var fr = UI_ABOUT_FRANCAIS;

	substituteLanguage("uiAbout", en, de, es, fr);
}

function setUISectionHeaders(){
	setUICardHeader();
	setUIHeaderHeader();
	setUIImageHeader();
	setUIStatsHeader();
	setUIKeywordHeader();
	setUIAbilityHeader();
	setUIFlavorTextHeader();
	setUICardModifierHeader();
}

function setUICardHeader() {
	var en = UI_CARD_ENGLISH;
	var de = UI_CARD_DEUTCH;
	var es = UI_CARD_ESPANOL;
	var fr = UI_CARD_FRANCAIS;

	substituteLanguage("uiCard", en, de, es, fr);
}

function setUIHeaderHeader() {
	var en = UI_HEADER_ENGLISH;
	var de = UI_HEADER_DEUTCH;
	var es = UI_HEADER_ESPANOL;
	var fr = UI_HEADER_FRANCAIS;

	substituteLanguage("uiHeader", en, de, es, fr);
}

function setUIImageHeader() {
	var en = UI_IMAGE_ENGLISH;
	var de = UI_IMAGE_DEUTCH;
	var es = UI_IMAGE_ESPANOL;
	var fr = UI_IMAGE_FRANCAIS;

	substituteLanguage("uiImage", en, de, es, fr);
}

function setUIStatsHeader() {
	var en = UI_STATS_ENGLISH;
	var de = UI_STATS_DEUTCH;
	var es = UI_STATS_ESPANOL;
	var fr = UI_STATS_FRANCAIS;

	substituteLanguage("uiStats", en, de, es, fr);
}

function setUIKeywordHeader() {
	var en = UI_KEYWORD_ENGLISH;
	var de = UI_KEYWORD_DEUTCH;
	var es = UI_KEYWORD_ESPANOL;
	var fr = UI_KEYWORD_FRANCAIS;

	substituteLanguage("uiKeyword", en, de, es, fr);
}

function setUIAbilityHeader() {
	var en = UI_ABILITY_ENGLISH;
	var de = UI_ABILITY_DEUTCH;
	var es = UI_ABILITY_ESPANOL;
	var fr = UI_ABILITY_FRANCAIS;

	substituteLanguage("uiAbility", en, de, es, fr);
}

function setUIFlavorTextHeader() {
	var en = UI_FLAVOR_TEXT_ENGLISH;
	var de = UI_FLAVOR_TEXT_DEUTCH;
	var es = UI_FLAVOR_TEXT_ESPANOL;
	var fr = UI_FLAVOR_TEXT_FRANCAIS;

	substituteLanguage("uiFlavorText", en, de, es, fr);
}

function setUICardModifierHeader() {
	var en = UI_CARD_MODIFIER_ENGLISH;
	var de = UI_CARD_MODIFIER_DEUTCH;
	var es = UI_CARD_MODIFIER_ESPANOL;
	var fr = UI_CARD_MODIFIER_FRANCAIS;

	substituteLanguage("uiCardModifier", en, de, es, fr);
}

function setUICardSection(){
	setUIType();
	setUICardTypeList();
	setUIScale();
	setUIAuthor();
	setUIBorder();
	setUIBorderList();
}

function setUIType() {
	var en = UI_TYPE_ENGLISH;
	var de = UI_TYPE_DEUTCH;
	var es = UI_TYPE_ESPANOL;
	var fr = UI_TYPE_FRANCAIS;

	substituteLanguage("uiType", en, de, es, fr);
}

function setUICardTypeList(){
	setUIHero();
	setUIMonster();
	setUIPet();
	
	setUILoot();
	setUITreasure();
	setUIWonder();
	setUIExplore();
	
	setUITimeout();
	setUICommand();
	
	setUIExperimental();
	
	setUIArcadeSolo();
	setUIArcadeGang();
}

function setUIHero() {
	var en = UI_HERO_ENGLISH;
	var de = UI_HERO_DEUTCH;
	var es = UI_HERO_ESPANOL;
	var fr = "Héros";

	substituteLanguage("uiHero", en, de, es, fr);
}

function setUIMonster() {
	var en = UI_MONSTER_ENGLISH;
	var de = UI_MONSTER_DEUTCH;
	var es = UI_MONSTER_ESPANOL;
	var fr = "Monstre";

	substituteLanguage("uiMonster", en, de, es, fr);
}

function setUIPet() {
	var en = UI_PET_ENGLISH;
	var de = UI_PET_DEUTCH;
	var es = UI_PET_ESPANOL;
	var fr = UI_PET_FRANCAIS;

	substituteLanguage("uiPet", en, de, es, fr);
}

function setUILoot() {
	var en = UI_LOOT_ENGLISH;
	var de = UI_LOOT_DEUTCH;
	var es = UI_LOOT_ESPANOL;
	var fr = UI_LOOT_FRANCAIS;

	substituteLanguage("uiLoot", en, de, es, fr);
}

function setUITreasure() {
	var en = UI_TREASURE_ENGLISH;
	var de = UI_TREASURE_DEUTCH;
	var es = UI_TREASURE_ESPANOL;
	var fr = UI_TREASURE_FRANCAIS;

	substituteLanguage("uiTreasure", en, de, es, fr);
}

function setUIWonder() {
	var en = UI_WONDER_ENGLISH;
	var de = UI_WONDER_DEUTCH;
	var es = UI_WONDER_ESPANOL;
	var fr = UI_WONDER_FRANCAIS;

	substituteLanguage("uiWonder", en, de, es, fr);
}

function setUIExplore() {
	var en = UI_EXPLORE_ENGLISH;
	var de = UI_EXPLORE_DEUTCH;
	var es = UI_EXPLORE_ESPANOL;
	var fr = UI_EXPLORE_FRANCAIS;

	substituteLanguage("uiExplore", en, de, es, fr);
}

function setUITimeout() {
	var en = UI_TIMEOUT_ENGLISH;
	var de = UI_TIMEOUT_DEUTCH;
	var es = UI_TIMEOUT_ESPANOL;
	var fr = UI_TIMEOUT_FRANCAIS;

	substituteLanguage("uiTimeout", en, de, es, fr);
}

function setUICommand() {
	var en = UI_COMMAND_ENGLISH;
	var de = UI_COMMAND_DEUTCH;
	var es = UI_COMMAND_ESPANOL;
	var fr = UI_COMMAND_FRANCAIS;

	substituteLanguage("uiCommand", en, de, es, fr);
}

function setUIExperimental() {
	var en = UI_EXPERIMENTAL_ENGLISH;
	var de = UI_EXPERIMENTAL_DEUTCH;
	var es = UI_EXPERIMENTAL_ESPANOL;
	var fr = UI_EXPERIMENTAL_FRANCAIS;

	substituteLanguage("uiExperimental", en, de, es, fr);
}

function setUIArcadeSolo() {
	var en = UI_ARCADE_SOLO_ENGLISH;
	var de = UI_ARCADE_SOLO_DEUTCH;
	var es = UI_ARCADE_SOLO_ESPANOL;
	var fr = UI_ARCADE_SOLO_FRANCAIS;

	substituteLanguage("uiArcadeSolo", en, de, es, fr);
}

function setUIArcadeGang() {
	var en = UI_ARCADE_GANG_ENGLISH;
	var de = UI_ARCADE_GANG_DEUTCH;
	var es = UI_ARCADE_GANG_ESPANOL;
	var fr = UI_ARCADE_GANG_FRANCAIS;

	substituteLanguage("uiArcadeGang", en, de, es, fr);
}

function setUIScale() {
	var en = UI_SCALE_ENGLISH;
	var de = UI_SCALE_DEUTCH;
	var es = UI_SCALE_ESPANOL;
	var fr = UI_SCALE_FRANCAIS;

	substituteLanguage("uiScale", en, de, es, fr);
}

function setUIAuthor() {
	var en = UI_AUTHOR_ENGLISH;
	var de = UI_AUTHOR_DEUTCH;
	var es = UI_AUTHOR_ESPANOL;
	var fr = UI_AUTHOR_FRANCAIS;

	substituteLanguage("uiAuthor", en, de, es, fr);
}

function setUIBorder() {
	var en = UI_BORDER_ENGLISH;
	var de = UI_BORDER_DEUTCH;
	var es = UI_BORDER_ESPANOL;
	var fr = UI_BORDER_FRANCAIS;

	substituteLanguage("uiBorder", en, de, es, fr);
}

function setUIBorderList(){
	setUIBlue();
	setUIRed();
	setUIGreen();
	setUIPurple();
	setUIYellow();
	
	setUIOrange();
	setUIBrown();
	setUIPink();
	setUIGray();
	setUIWhite();
	setUIBlack();
	
	setUIClassicBlue();
	setUIClassicRed();
	setUIClassicGreen();
	setUIClassicPurple();
	setUIClassicYellow();	
}

function setUIBlue() {
	var en = UI_BLUE_ENGLISH;
	var de = UI_BLUE_DEUTCH;
	var es = UI_BLUE_ESPANOL;
	var fr = UI_BLUE_FRANCAIS;

	substituteLanguage("uiBlue", en, de, es, fr);
}

function setUIRed() {
	var en = UI_RED_ENGLISH;
	var de = UI_RED_DEUTCH;
	var es = UI_RED_ESPANOL;
	var fr = UI_RED_FRANCAIS;

	substituteLanguage("uiRed", en, de, es, fr);
}

function setUIGreen() {
	var en = UI_GREEN_ENGLISH;
	var de = UI_GREEN_DEUTCH;
	var es = UI_GREEN_ESPANOL;
	var fr = UI_GREEN_FRANCAIS;

	substituteLanguage("uiGreen", en, de, es, fr);
}

function setUIPurple() {
	var en = UI_PURPLE_ENGLISH;
	var de = UI_PURPLE_DEUTCH;
	var es = UI_PURPLE_ESPANOL;
	var fr = UI_PURPLE_FRANCAIS;

	substituteLanguage("uiPurple", en, de, es, fr);
}

function setUIYellow() {
	var en = UI_YELLOW_ENGLISH;
	var de = UI_YELLOW_DEUTCH;
	var es = UI_YELLOW_ESPANOL;
	var fr = UI_YELLOW_FRANCAIS;

	substituteLanguage("uiYellow", en, de, es, fr);
}

function setUIOrange() {
	var en = UI_ORANGE_ENGLISH;
	var de = UI_ORANGE_DEUTCH;
	var es = UI_ORANGE_ESPANOL;
	var fr = UI_ORANGE_FRANCAIS;

	substituteLanguage("uiOrange", en, de, es, fr);
}

function setUIBrown() {
	var en = UI_BROWN_ENGLISH;
	var de = UI_BROWN_DEUTCH;
	var es = UI_BROWN_ESPANOL;
	var fr = UI_BROWN_FRANCAIS;

	substituteLanguage("uiBrown", en, de, es, fr);
}

function setUIPink() {
	var en = UI_PINK_ENGLISH;
	var de = UI_PINK_DEUTCH;
	var es = UI_PINK_ESPANOL;
	var fr = UI_PINK_FRANCAIS;

	substituteLanguage("uiPink", en, de, es, fr);
}

function setUIGray() {
	var en = UI_GRAY_ENGLISH;
	var de = UI_GRAY_DEUTCH;
	var es = UI_GRAY_ESPANOL;
	var fr = UI_GRAY_FRANCAIS;

	substituteLanguage("uiGray", en, de, es, fr);
}

function setUIWhite() {
	var en = UI_WHITE_ENGLISH;
	var de = UI_WHITE_DEUTCH;
	var es = UI_WHITE_ESPANOL;
	var fr = UI_WHITE_FRANCAIS;

	substituteLanguage("uiWhite", en, de, es, fr);
}

function setUIBlack() {
	var en = UI_BLACK_ENGLISH;
	var de = UI_BLACK_DEUTCH;
	var es = UI_BLACK_ESPANOL;
	var fr = UI_BLACK_FRANCAIS;

	substituteLanguage("uiBlack", en, de, es, fr);
}

function setUIClassicBlue() {
	var en = UI_CLASSIC_BLUE_ENGLISH;
	var de = UI_CLASSIC_BLUE_DEUTCH;
	var es = UI_CLASSIC_BLUE_ESPANOL;
	var fr = "Bleu Classique";

	substituteLanguage("uiClassicBlue", en, de, es, fr);
}

function setUIClassicRed() {
	var en = UI_CLASSIC_RED_ENGLISH;
	var de = UI_CLASSIC_RED_DEUTCH;
	var es = UI_CLASSIC_RED_ESPANOL;
	var fr = UI_CLASSIC_RED_FRANCAIS;

	substituteLanguage("uiClassicRed", en, de, es, fr);
}

function setUIClassicGreen() {
	var en = UI_CLASSIC_GREEN_ENGLISH;
	var de = UI_CLASSIC_GREEN_DEUTCH;
	var es = UI_CLASSIC_GREEN_ESPANOL;
	var fr = UI_CLASSIC_GREEN_FRANCAIS;

	substituteLanguage("uiClassicGreen", en, de, es, fr);
}

function setUIClassicPurple() {
	var en = UI_CLASSIC_PURPLE_ENGLISH;
	var de = UI_CLASSIC_PURPLE_DEUTCH;
	var es = UI_CLASSIC_PURPLE_ESPANOL;
	var fr = UI_CLASSIC_PURPLE_FRANCAIS;

	substituteLanguage("uiClassicPurple", en, de, es, fr);
}

function setUIClassicYellow() {
	var en = UI_CLASSIC_YELLOW_ENGLISH;
	var de = UI_CLASSIC_YELLOW_DEUTCH;
	var es = UI_CLASSIC_YELLOW_ESPANOL;
	var fr = UI_CLASSIC_YELLOW_FRANCAIS;

	substituteLanguage("uiClassicYellow", en, de, es, fr);
}

function setUIHeaderSection(){
	setUITitle();
	setUISubTitle();
	setUIMove();
	setUIActions();
}

function setUITitle() {
	var en = UI_TITLE_ENGLISH;
	var de = UI_TITLE_DEUTCH;
	var es = UI_TITLE_ESPANOL;
	var fr = UI_TITLE_FRANCAIS;

	substituteLanguage("uiTitle", en, de, es, fr);
}

function setUISubTitle() {
	var en = UI_SUB_TITLE_ENGLISH;
	var de = UI_SUB_TITLE_DEUTCH;
	var es = UI_SUB_TITLE_ESPANOL;
	var fr = UI_SUB_TITLE_FRANCAIS;

	substituteLanguage("uiSubTitle", en, de, es, fr);
}

function setUIMove() {
	var en = UI_MOVEMENT_ENGLISH;
	var de = UI_MOVEMENT_DEUTCH;
	var es = UI_MOVEMENT_ESPANOL;
	var fr = UI_MOVEMENT_FRANCAIS;

	substituteLanguage("uiMove", en, de, es, fr);
}

function setUIActions() {
	var en = UI_ACTIONS_ENGLISH;
	var de = UI_ACTIONS_DEUTCH;
	var es = UI_ACTIONS_ESPANOL;
	var fr = UI_ACTIONS_FRANCAIS;

	substituteLanguage("uiAction", en, de, es, fr);
}

function setUIImageSection(){
	setUIBackground();
	setUIBackgroundList();
	setUIAvatar();
	setUIAvatarList();
}

function setUIBackground() {
	var en = UI_BACKGROUND_ENGLISH;
	var de = UI_BACKGROUND_DEUTCH;
	var es = UI_BACKGROUND_ESPANOL;
	var fr = UI_BACKGROUND_FRANCAIS;

	substituteLanguage("uiBackground", en, de, es, fr);
}

function setUIBackgroundList(){
	
	//colors are handled in setUIBorderList()
	setUITransparent();
}

function setUITransparent() {
	var en = UI_TRANSPARENT_ENGLISH;
	var de = UI_TRANSPARENT_DEUTCH;
	var es = UI_TRANSPARENT_ESPANOL;
	var fr = UI_TRANSPARENT_FRANCAIS;

	substituteLanguage("uiTransparent", en, de, es, fr);
}

function setUIAvatar() {
	var en = UI_AVATAR_ENGLISH;
	var de = UI_AVATAR_DEUTCH;
	var es = UI_AVATAR_ESPANOL;
	var fr = UI_AVATAR_FRANCAIS;

	substituteLanguage("uiAvatar", en, de, es, fr);
}

function setUIAvatarList(){
	setUIDefault();
	setUIRemote();
	setUILocal();
}

function setUIDefault() {
	var en = UI_DEFAULT_ENGLISH;
	var de = UI_DEFAULT_DEUTCH;
	var es = UI_DEFAULT_ESPANOL;
	var fr = UI_DEFAULT_FRANCAIS;

	substituteLanguage("uiDefault", en, de, es, fr);
}

function setUIRemote() {
	var en = UI_REMOTE_ENGLISH;
	var de = UI_REMOTE_DEUTCH;
	var es = UI_REMOTE_ESPANOL;
	var fr = UI_REMOTE_FRANCAIS;

	substituteLanguage("uiRemote", en, de, es, fr);
}

function setUILocal() {
	var en = UI_LOCAL_ENGLISH;
	var de = UI_LOCAL_DEUTCH;
	var es = UI_LOCAL_ESPANOL;
	var fr = UI_LOCAL_FRANCAIS;

	substituteLanguage("uiLocal", en, de, es, fr);
}

function setUIStatsSection(){
	setUIStatsGroup();
}

function setUIStatsGroup(){
	setUILanguageControlSTR();
	setUILanguageControlARM();
	setUILanguageControlRNG();
	setUILanguageControlWILL();
	setUILanguageControlDEX();
	
	setUILanguageControlWounds();
	setUILanguageControlSkullPoints();
	setUILanguageControlPotions();
	setUILanguageControlPetCost();
}

function setUILanguageControlSTR() {
	var en = UI_STR_ENGLISH;
	var de = UI_STR_DEUTCH;
	var es = UI_STR_ESPANOL;
	var fr = UI_STR_FRANCAIS;

	substituteLanguage("controlSTR", en, de, es, fr);
}

function setUILanguageControlARM() {
	var en = UI_ARM_ENGLISH;
	var de = UI_ARM_DEUTCH;
	var es = UI_ARM_ESPANOL;
	var fr = UI_ARM_FRANCAIS;

	substituteLanguage("controlARM", en, de, es, fr);
}

function setUILanguageControlRNG() {
	var en = UI_RNG_ENGLISH;
	var de = UI_RNG_DEUTCH;
	var es = UI_RNG_ESPANOL;
	var fr = UI_RNG_FRANCAIS;

	substituteLanguage("controlRNG", en, de, es, fr);
}

function setUILanguageControlWILL() {
	var en = UI_WILL_ENGLISH;
	var de = UI_WILL_DEUTCH;
	var es = UI_WILL_ESPANOL;
	var fr = UI_STR_FRANCAIS;

	substituteLanguage("controlWILL", en, de, es, fr);
}

function setUILanguageControlDEX() {
	var en = UI_DEX_ENGLISH;
	var de = UI_DEX_DEUTCH;
	var es = UI_DEX_ESPANOL;
	var fr = UI_DEX_FRANCAIS;

	substituteLanguage("controlDEX", en, de, es, fr);
}

function setUILanguageControlWounds() {
	var en = UI_WOUNDS_ENGLISH;
	var de = UI_WOUNDS_DEUTCH;
	var es = UI_WOUNDS_ESPANOL;
	var fr = UI_WOUNDS_FRANCAIS;

	substituteLanguage("controlWounds", en, de, es, fr);
}

function setUILanguageControlSkullPoints() {
	var en = UI_SKULL_POINTS_ENGLISH;
	var de = UI_SKULL_POINTS_DEUTCH;
	var es = UI_SKULL_POINTS_ESPANOL;
	var fr = UI_SKULL_POINTS_FRANCAIS;

	substituteLanguage("controlSkullPoints", en, de, es, fr);
}

function setUILanguageControlPotions() {
	var en = UI_POTIONS_ENGLISH;
	var de = UI_POTIONS_DEUTCH;
	var es = UI_POTIONS_ESPANOL;
	var fr = UI_POTIONS_FRANCAIS;

	substituteLanguage("controlPotions", en, de, es, fr);
}

function setUILanguageControlPetCost() {
	var en = UI_PET_COST_ENGLISH;
	var de = UI_PET_COST_DEUTCH;
	var es = UI_PET_COST_ESPANOL;
	var fr = UI_PET_COST_FRANCAIS;

	substituteLanguage("controlPetCost", en, de, es, fr);
}

function setUIKeywordSection(){
	setUIAffinity();
	setUIAffinityList();
	setUIKeywords();
}

function setUIAffinity() {
	var en = UI_AFFINITY_ENGLISH;
	var de = UI_AFFINITY_DEUTCH;
	var es = UI_AFFINITY_ESPANOL;
	var fr = UI_AFFINITY_FRANCAIS;

	substituteLanguage("uiAffinity", en, de, es, fr);
}

function setUIAffinityList(){
	setUIAmethyst();
	setUIAmethystCitrine();
	setUIAmethystEmerald();
	setUIAmethystRuby();
	setUIAmethystSapphire();
	
	setUICitrine();
	setUICitrineAmethyst();
	setUICitrineEmerald();
	setUICitrineRuby();
	setUICitrineSapphire();
	
	setUIEmerald();
	setUIEmeraldAmethyst();
	setUIEmeraldCitrine();
	setUIEmeraldRuby();
	setUIEmeraldSapphire();
	
	setUIRuby();
	setUIRubyAmethyst();
	setUIRubyCitrine();
	setUIRubyEmerald();
	setUIRubySapphire();
	
	setUISapphire();
	setUISapphireAmethyst();
	setUISapphireCitrine();
	setUISapphireEmerald();
	setUISapphireRuby();
	
	setUIAllAffinity();
	
	setUIAll();
	setUINone();
}

function setUIAmethyst() {
	var en = UI_AFFINITY_AMETHYST_ENGLISH;
	var de = UI_AFFINITY_AMETHYST_DEUTCH;
	var es = UI_AFFINITY_AMETHYST_ESPANOL;
	var fr = UI_AFFINITY_AMETHYST_FRANCAIS;

	substituteLanguage("uiAmethyst", en, de, es, fr);
}

function setUIAmethystCitrine() {
	var en = UI_AFFINITY_AMETHYST_CITRINE_ENGLISH;
	var de = UI_AFFINITY_AMETHYST_CITRINE_DEUTCH;
	var es = UI_AFFINITY_AMETHYST_CITRINE_ESPANOL;
	var fr = UI_AFFINITY_AMETHYST_CITRINE_FRANCAIS;

	substituteLanguage("uiAmethystCitrine", en, de, es, fr);
}

function setUIAmethystEmerald() {
	var en = UI_AFFINITY_AMETHYST_EMERALD_ENGLISH;
	var de = UI_AFFINITY_AMETHYST_EMERALD_DEUTCH;
	var es = UI_AFFINITY_AMETHYST_EMERALD_ESPANOL;
	var fr = UI_AFFINITY_AMETHYST_EMERALD_FRANCAIS;

	substituteLanguage("uiAmethystEmerald", en, de, es, fr);
}

function setUIAmethystRuby() {
	var en = UI_AFFINITY_AMETHYST_RUBY_ENGLISH;
	var de = UI_AFFINITY_AMETHYST_RUBY_DEUTCH;
	var es = UI_AFFINITY_AMETHYST_RUBY_ESPANOL;
	var fr = UI_AFFINITY_AMETHYST_RUBY_FRANCAIS;

	substituteLanguage("uiAmethystRuby", en, de, es, fr);
}

function setUIAmethystSapphire() {
	var en = UI_AFFINITY_AMETHYST_SAPPHIRE_ENGLISH;
	var de = UI_AFFINITY_AMETHYST_SAPPHIRE_DEUTCH;
	var es = UI_AFFINITY_AMETHYST_SAPPHIRE_ESPANOL;
	var fr = UI_AFFINITY_AMETHYST_SAPPHIRE_FRANCAIS;

	substituteLanguage("uiAmethystSapphire", en, de, es, fr);
}

function setUICitrine() {
	var en = UI_AFFINITY_CITRINE_ENGLISH;
	var de = UI_AFFINITY_CITRINE_DEUTCH;
	var es = UI_AFFINITY_CITRINE_ESPANOL;
	var fr = UI_AFFINITY_CITRINE_FRANCAIS;

	substituteLanguage("uiCitrine", en, de, es, fr);
}

function setUICitrineAmethyst() {
	var en = UI_AFFINITY_CITRINE_AMETHYST_ENGLISH;
	var de = UI_AFFINITY_CITRINE_AMETHYST_DEUTCH;
	var es = UI_AFFINITY_CITRINE_AMETHYST_ESPANOL;
	var fr = UI_AFFINITY_CITRINE_AMETHYST_FRANCAIS;

	substituteLanguage("uiCitrineAmethyst", en, de, es, fr);
}

function setUICitrineEmerald() {
	var en = UI_AFFINITY_CITRINE_EMERALD_ENGLISH;
	var de = UI_AFFINITY_CITRINE_EMERALD_DEUTCH;
	var es = UI_AFFINITY_CITRINE_EMERALD_ESPANOL;
	var fr = UI_AFFINITY_CITRINE_EMERALD_FRANCAIS;

	substituteLanguage("uiCitrineEmerald", en, de, es, fr);
}

function setUICitrineRuby() {
	var en = UI_AFFINITY_CITRINE_RUBY_ENGLISH;
	var de = UI_AFFINITY_CITRINE_RUBY_DEUTCH;
	var es = UI_AFFINITY_CITRINE_RUBY_ESPANOL;
	var fr = UI_AFFINITY_CITRINE_RUBY_FRANCAIS;

	substituteLanguage("uiCitrineRuby", en, de, es, fr);
}

function setUICitrineSapphire() {
	var en = UI_AFFINITY_CITRINE_SAPPHIRE_ENGLISH;
	var de = UI_AFFINITY_CITRINE_SAPPHIRE_DEUTCH;
	var es = UI_AFFINITY_CITRINE_SAPPHIRE_ESPANOL;
	var fr = UI_AFFINITY_CITRINE_SAPPHIRE_FRANCAIS;

	substituteLanguage("uiCitrineSapphire", en, de, es, fr);
}

function setUIEmerald() {
	var en = UI_AFFINITY_EMERALD_ENGLISH;
	var de = UI_AFFINITY_EMERALD_DEUTCH;
	var es = UI_AFFINITY_EMERALD_ESPANOL;
	var fr = UI_AFFINITY_EMERALD_FRANCAIS;

	substituteLanguage("uiEmerald", en, de, es, fr);
}

function setUIEmeraldAmethyst() {
	var en = UI_AFFINITY_EMERALD_AMETHYST_ENGLISH;
	var de = UI_AFFINITY_EMERALD_AMETHYST_DEUTCH;
	var es = UI_AFFINITY_EMERALD_AMETHYST_ESPANOL;
	var fr = UI_AFFINITY_EMERALD_AMETHYST_FRANCAIS;

	substituteLanguage("uiEmeraldAmethyst", en, de, es, fr);
}

function setUIEmeraldCitrine() {
	var en = UI_AFFINITY_EMERALD_CITRINE_ENGLISH;
	var de = UI_AFFINITY_EMERALD_CITRINE_DEUTCH;
	var es = UI_AFFINITY_EMERALD_CITRINE_ESPANOL;
	var fr = UI_AFFINITY_EMERALD_CITRINE_FRANCAIS;

	substituteLanguage("uiEmeraldCitrine", en, de, es, fr);
}

function setUIEmeraldRuby() {
	var en = UI_AFFINITY_EMERALD_RUBY_ENGLISH;
	var de = UI_AFFINITY_EMERALD_RUBY_DEUTCH;
	var es = UI_AFFINITY_EMERALD_RUBY_ESPANOL;
	var fr = UI_AFFINITY_EMERALD_RUBY_FRANCAIS;

	substituteLanguage("uiEmeraldRuby", en, de, es, fr);
}

function setUIEmeraldSapphire() {
	var en = UI_AFFINITY_EMERALD_SAPPHIRE_ENGLISH;
	var de = UI_AFFINITY_EMERALD_SAPPHIRE_DEUTCH;
	var es = UI_AFFINITY_EMERALD_SAPPHIRE_ESPANOL;
	var fr = UI_AFFINITY_EMERALD_SAPPHIRE_FRANCAIS;

	substituteLanguage("uiEmeraldSapphire", en, de, es, fr);
}

function setUIRuby() {
	var en = UI_AFFINITY_RUBY_ENGLISH;
	var de = UI_AFFINITY_RUBY_DEUTCH;
	var es = UI_AFFINITY_RUBY_ESPANOL;
	var fr = UI_AFFINITY_RUBY_FRANCAIS;

	substituteLanguage("uiRuby", en, de, es, fr);
}

function setUIRubyAmethyst() {
	var en = UI_AFFINITY_RUBY_AMETHYST_ENGLISH;
	var de = UI_AFFINITY_RUBY_AMETHYST_DEUTCH;
	var es = UI_AFFINITY_RUBY_AMETHYST_ESPANOL;
	var fr = UI_AFFINITY_RUBY_AMETHYST_FRANCAIS;

	substituteLanguage("uiRubyAmethyst", en, de, es, fr);
}

function setUIRubyCitrine() {
	var en = UI_AFFINITY_RUBY_CITRINE_ENGLISH;
	var de = UI_AFFINITY_RUBY_CITRINE_DEUTCH;
	var es = UI_AFFINITY_RUBY_CITRINE_ESPANOL;
	var fr = UI_AFFINITY_RUBY_CITRINE_FRANCAIS;

	substituteLanguage("uiRubyCitrine", en, de, es, fr);
}

function setUIRubyEmerald() {
	var en = UI_AFFINITY_RUBY_EMERALD_ENGLISH;
	var de = UI_AFFINITY_RUBY_EMERALD_DEUTCH;
	var es = UI_AFFINITY_RUBY_EMERALD_ESPANOL;
	var fr = UI_AFFINITY_RUBY_EMERALD_FRANCAIS;

	substituteLanguage("uiRubyEmerald", en, de, es, fr);
}

function setUIRubySapphire() {
	var en = UI_AFFINITY_RUBY_SAPPHIRE_ENGLISH;
	var de = UI_AFFINITY_RUBY_SAPPHIRE_DEUTCH;
	var es = UI_AFFINITY_RUBY_SAPPHIRE_ESPANOL;
	var fr = UI_AFFINITY_RUBY_SAPPHIRE_FRANCAIS;

	substituteLanguage("uiRubySapphire", en, de, es, fr);
}

function setUISapphire() {
	var en = UI_AFFINITY_SAPPHIRE_ENGLISH;
	var de = UI_AFFINITY_SAPPHIRE_DEUTCH;
	var es = UI_AFFINITY_SAPPHIRE_ESPANOL;
	var fr = UI_AFFINITY_SAPPHIRE_FRANCAIS;

	substituteLanguage("uiSapphire", en, de, es, fr);
}

function setUISapphireAmethyst() {
	var en = UI_AFFINITY_SAPPHIRE_AMETHYST_ENGLISH;
	var de = UI_AFFINITY_SAPPHIRE_AMETHYST_DEUTCH;
	var es = UI_AFFINITY_SAPPHIRE_AMETHYST_ESPANOL;
	var fr = UI_AFFINITY_SAPPHIRE_AMETHYST_FRANCAIS;

	substituteLanguage("uiSapphireAmethyst", en, de, es, fr);
}

function setUISapphireCitrine() {
	var en = UI_AFFINITY_SAPPHIRE_CITRINE_ENGLISH;
	var de = UI_AFFINITY_SAPPHIRE_CITRINE_DEUTCH;
	var es = UI_AFFINITY_SAPPHIRE_CITRINE_ESPANOL;
	var fr = UI_AFFINITY_SAPPHIRE_CITRINE_FRANCAIS;

	substituteLanguage("uiSapphireCitrine", en, de, es, fr);
}

function setUISapphireEmerald() {
	var en = UI_AFFINITY_SAPPHIRE_EMERALD_ENGLISH;
	var de = UI_AFFINITY_SAPPHIRE_EMERALD_DEUTCH;
	var es = UI_AFFINITY_SAPPHIRE_EMERALD_ESPANOL;
	var fr = UI_AFFINITY_SAPPHIRE_EMERALD_FRANCAIS;

	substituteLanguage("uiSapphireEmerald", en, de, es, fr);
}

function setUISapphireRuby() {
	var en = UI_AFFINITY_SAPPHIRE_RUBY_ENGLISH;
	var de = UI_AFFINITY_SAPPHIRE_RUBY_DEUTCH;
	var es = UI_AFFINITY_SAPPHIRE_RUBY_ESPANOL;
	var fr = UI_AFFINITY_SAPPHIRE_RUBY_FRANCAIS;

	substituteLanguage("uiSapphireRuby", en, de, es, fr);
}

function setUIAllAffinity() {
	var en = UI_AFFINITY_ALL_ENGLISH;
	var de = UI_AFFINITY_ALL_DEUTCH;
	var es = UI_AFFINITY_ALL_ESPANOL;
	var fr = UI_AFFINITY_ALL_FRANCAIS;

	substituteLanguage("uiAllAffinity", en, de, es, fr);
}

function setUIAll() {
	var en = UI_ALL_ENGLISH;
	var de = UI_ALL_DEUTCH;
	var es = UI_ALL_ESPANOL;
	var fr = UI_ALL_FRANCAIS;

	substituteLanguage("uiAll", en, de, es, fr);
}

function setUINone() {
	var en = UI_NONE_ENGLISH;
	var de = UI_NONE_DEUTCH;
	var es = UI_NONE_ESPANOL;
	var fr = UI_NONE_FRANCAIS;

	substituteLanguage("uiNone", en, de, es, fr);
}

function setUIKeywords() {
	var en = UI_KEYWORDS_ENGLISH;
	var de = UI_KEYWORDS_DEUTCH;
	var es = UI_KEYWORDS_ESPANOL;
	var fr = UI_KEYWORDS_FRANCAIS;

	substituteLanguage("uiKeywords", en, de, es, fr);
}

function setUIAbilitySection() {
	setUIAbilityHelp();
	//setUIType();
	setUIAbilityTypeList();
	setUICost();
	setUIName();
	setUIDefinition();
	setUIAddAbility();
}

function setUIAbilityHelp() {
	//Dice Types and Modifiers coverd under setUIStatsHelp()
	setUILanguageControlStrengthSTR();
	setUILanguageControlArmorARM();
	setUILanguageControlWillpowerWILL();
	setUILanguageControlDexterityDEX();
}

function setUILanguageControlStrengthSTR() {
	var en = UI_LC_STRENGTH_ENGLISH;
	var de = UI_LC_STRENGTH_DEUTCH;
	var es = UI_LC_STRENGTH_ESPANOL;
	var fr = UI_LC_STRENGTH_FRANCAIS;

	substituteLanguage("controlStrengthSTR", en, de, es, fr);
}

function setUILanguageControlArmorARM() {
	var en = UI_LC_ARMOR_ENGLISH;
	var de = UI_LC_ARMOR_DEUTCH;
	var es = UI_LC_ARMOR_ESPANOL;
	var fr = UI_LC_ARMOR_FRANCAIS;

	substituteLanguage("controlArmorARM", en, de, es, fr);
}

function setUILanguageControlWillpowerWILL() {
	var en = UI_LC_WILLPOWER_ENGLISH;
	var de = UI_LC_WILLPOWER_DEUTCH;
	var es = UI_LC_WILLPOWER_ESPANOL;
	var fr = UI_LC_WILLPOWER_FRANCAIS;

	substituteLanguage("controlWillpowerWILL", en, de, es, fr);
}

function setUILanguageControlDexterityDEX() {
	var en = UI_LC_DEXTERITY_ENGLISH;
	var de = UI_LC_DEXTERITY_DEUTCH;
	var es = UI_LC_DEXTERITY_ESPANOL;
	var fr = UI_LC_DEXTERITY_FRANCAIS;

	substituteLanguage("controlDexterityDEX", en, de, es, fr);
}

function setUIAbilityTypeList() {
	setUIAttack();
	setUISupport();
	setUIOffensivePotion();
	setUISupportPotion();
	setUIEmergencyPotion();
	setUISpecial();
	
	setUIListArcade();
	setUISignatureAttack();
	setUISignatureSupport();
	setUIOverchargeAttack();
	setUIOverchargeSupport();
}

function setUIAttack() {
	var en = UI_ATTACK_ENGLISH;
	var de = UI_ATTACK_DEUTCH;
	var es = UI_ATTACK_ESPANOL;
	var fr = UI_ATTACK_FRANCAIS;

	substituteLanguage("uiAttack", en, de, es, fr);
}

function setUISupport() {
	var en = UI_SUPPORT_ENGLISH;
	var de = UI_SUPPORT_DEUTCH;
	var es = UI_SUPPORT_ESPANOL;
	var fr = UI_SUPPORT_FRANCAIS;

	substituteLanguage("uiSupport", en, de, es, fr);
}

function setUIOffensivePotion() {
	var en = UI_OFFENSIVE_POTION_ENGLISH;
	var de = UI_OFFENSIVE_POTION_DEUTCH;
	var es = UI_OFFENSIVE_POTION_ESPANOL;
	var fr = UI_OFFENSIVE_POTION_FRANCAIS;

	substituteLanguage("uiOffensivePotion", en, de, es, fr);
}

function setUISupportPotion() {
	var en = UI_SUPORT_POTION_ENGLISH;
	var de = UI_SUPORT_POTION_DEUTCH;
	var es = UI_SUPORT_POTION_ESPANOL;
	var fr = UI_SUPORT_POTION_FRANCAIS;

	substituteLanguage("uiSupportPotion", en, de, es, fr);
}

function setUIEmergencyPotion() {
	var en = UI_EMERGENCY_POTION_ENGLISH;
	var de = UI_EMERGENCY_POTION_DEUTCH;
	var es = UI_EMERGENCY_POTION_ESPANOL;
	var fr = UI_EMERGENCY_POTION_FRANCAIS;

	substituteLanguage("uiEmergencyPotion", en, de, es, fr);
}

function setUISpecial() {
	var en = UI_SPECIAL_ENGLISH;
	var de = UI_SPECIAL_DEUTCH;
	var es = UI_SPECIAL_ESPANOL;
	var fr = UI_SPECIAL_FRANCAIS;

	substituteLanguage("uiSpecial", en, de, es, fr);
}

function setUIListArcade() {
	var en = UI_LIST_ARCADE_ENGLISH;
	var de = UI_LIST_ARCADE_DEUTCH;
	var es = UI_LIST_ARCADE_ESPANOL;
	var fr = UI_LIST_ARCADE_FRANCAIS;

	substituteLanguage("uiListArcade", en, de, es, fr);
}

function setUISignatureAttack() {
	var en = UI_SIGNATURE_ATTACK_ENGLISH;
	var de = UI_SIGNATURE_ATTACK_DEUTCH;
	var es = UI_SIGNATURE_ATTACK_ESPANOL;
	var fr = UI_SIGNATURE_ATTACK_FRANCAIS;

	substituteLanguage("uiSignatureAttack", en, de, es, fr);
}

function setUISignatureSupport() {
	var en = UI_SIGNATURE_SUPPORT_ENGLISH;
	var de = UI_SIGNATURE_SUPPORT_DEUTCH;
	var es = UI_SIGNATURE_SUPPORT_ESPANOL;
	var fr = UI_SIGNATURE_SUPPORT_FRANCAIS;

	substituteLanguage("uiSignatureSupport", en, de, es, fr);
}

function setUIOverchargeAttack() {
	var en = UI_OVERCHARGE_ATTACK_ENGLISH;
	var de = UI_OVERCHARGE_ATTACK_DEUTCH;
	var es = UI_OVERCHARGE_ATTACK_ESPANOL;
	var fr = UI_OVERCHARGE_ATTACK_FRANCAIS;

	substituteLanguage("uiOverchargeAttack", en, de, es, fr);
}

function setUIOverchargeSupport() {
	var en = UI_OVERCHARGE_SUPPORT_ENGLISH;
	var de = UI_OVERCHARGE_SUPPORT_DEUTCH;
	var es = UI_OVERCHARGE_SUPPORT_ESPANOL;
	var fr = UI_OVERCHARGE_SUPPORT_FRANCAIS;

	substituteLanguage("uiOverchargeSupport", en, de, es, fr);
}

function setUICost() {
	var en = UI_COST_ENGLISH;
	var de = UI_COST_DEUTCH;
	var es = UI_COST_ESPANOL;
	var fr = UI_COST_FRANCAIS;

	substituteLanguage("uiCost", en, de, es, fr);
}

function setUIName() {
	var en = UI_NAME_ENGLISH;
	var de = UI_NAME_DEUTCH;
	var es = UI_NAME_ESPANOL;
	var fr = UI_NAME_FRANCAIS;

	substituteLanguage("uiName", en, de, es, fr);
}

function setUIDefinition() {
	var en = UI_DEFINITION_ENGLISH;
	var de = UI_DEFINITION_DEUTCH;
	var es = UI_DEFINITION_ESPANOL;
	var fr = UI_DEFINITION_FRANCAIS;

	substituteLanguage("uiDefinition", en, de, es, fr);
}

function setUIAddAbility() {
	var en = UI_ADD_ABILITY_ENGLISH;
	var de = UI_ADD_ABILITY_DEUTCH;
	var es = UI_ADD_ABILITY_ESPANOL;
	var fr = UI_ADD_ABILITY_FRANCAIS;

	substituteLanguage("uiAddAbility", en, de, es, fr);
}

//function setUIFlavorTextSection(){}

function setUICardModifierSection(){
	setUIDuplicateCard();
	setUIMoveCardUp();
	setUIMoveCardDown();
	setUIDeleteCard();
}

function setUIDuplicateCard() {
	var en = UI_DUPLICATE_CARD_ENGLISH;
	var de = UI_DUPLICATE_CARD_DEUTCH;
	var es = UI_DUPLICATE_CARD_ESPANOL;
	var fr = UI_DUPLICATE_CARD_FRANCAIS;

	substituteLanguage("uiDuplicateCard", en, de, es, fr);
}

function setUIMoveCardUp() {
	var en = UI_MOVE_CARD_UP_ENGLISH;
	var de = UI_MOVE_CARD_UP_DEUTCH;
	var es = UI_MOVE_CARD_UP_ESPANOL;
	var fr = UI_MOVE_CARD_UP_FRANCAIS;

	substituteLanguage("uiMoveCardUp", en, de, es, fr);
}

function setUIMoveCardDown() {
	var en = UI_MOVE_CARD_DOWN_ENGLISH;
	var de = UI_MOVE_CARD_DOWN_DEUTCH;
	var es = UI_MOVE_CARD_DOWN_ESPANOL;
	var fr = UI_MOVE_CARD_DOWN_FRANCAIS;

	substituteLanguage("uiMoveCardDown", en, de, es, fr);
}

function setUIDeleteCard() {
	var en = UI_DELETE_CARD_ENGLISH;
	var de = UI_DELETE_CARD_DEUTCH;
	var es = UI_DELETE_CARD_ESPANOL;
	var fr = UI_DELETE_CARD_FRANCAIS;

	substituteLanguage("uiDeleteCard", en, de, es, fr);
}

function setUILegendSection() {
	setUILegend();	
	setUIDiceTypesGroup();
	setUIModifiersGroup();
	setUIStatusesGroup();
	setUIImmunitiesGroup();
	setUIAffinitiesGroup();
}

function setUILegend() {
	var en = UI_LEGEND_ENGLISH;
	var de = UI_LEGEND_DEUTCH;
	var es = UI_LEGEND_ESPANOL;
	var fr = UI_LEGEND_FRANCAIS;

	substituteLanguage("uiLegend", en, de, es, fr);
}

function setUIDiceTypesGroup(){
	setUIDiceTypes();
	setUILanguageLegendStar();
	setUILanguageLegendBlue();
	setUILanguageLegendRed();
	setUILanguageLegendGreen();
	setUILanguageLegendOrange();
	setUILanguageLegendPurple();	
}

function setUIDiceTypes() {
	var en = UI_DICE_TYPES_ENGLISH;
	var de = UI_DICE_TYPES_DEUTCH;
	var es = UI_DICE_TYPES_ESPANOL;
	var fr = UI_DICE_TYPES_FRANCAIS;

	substituteLanguage("uiDiceTypes", en, de, es, fr);
}

function setUILanguageLegendStar() {
	var en = UI_LEGEND_STAR_ENGLISH;
	var de = UI_LEGEND_STAR_DEUTCH;
	var es = UI_LEGEND_STAR_ESPANOL;
	var fr = UI_LEGEND_STAR_FRANCAIS;

	substituteLanguage("legendStar", en, de, es, fr);
}

function setUILanguageLegendBlue() {
	var en = UI_LEGEND_BLUE_ENGLISH;
	var de = UI_LEGEND_BLUE_DEUTCH;
	var es = UI_LEGEND_BLUE_ESPANOL;
	var fr = UI_LEGEND_BLUE_FRANCAIS;

	substituteLanguage("legendBlue", en, de, es, fr);
}

function setUILanguageLegendRed() {
	var en = UI_LEGEND_RED_ENGLISH;
	var de = UI_LEGEND_RED_DEUTCH;
	var es = UI_LEGEND_RED_ESPANOL;
	var fr = UI_LEGEND_RED_FRANCAIS;

	substituteLanguage("legendRed", en, de, es, fr);
}

function setUILanguageLegendGreen() {
	var en = UI_LEGEND_GREEN_ENGLISH;
	var de = UI_LEGEND_GREEN_DEUTCH;
	var es = UI_LEGEND_GREEN_ESPANOL;
	var fr = UI_LEGEND_GREEN_FRANCAIS;

	substituteLanguage("legendGreen", en, de, es, fr);
}

function setUILanguageLegendOrange() {
	var en = UI_LEGEND_ORANGE_ENGLISH;
	var de = UI_LEGEND_ORANGE_DEUTCH;
	var es = UI_LEGEND_ORANGE_ESPANOL;
	var fr = UI_LEGEND_ORANGE_FRANCAIS;

	substituteLanguage("legendOrange", en, de, es, fr);
}

function setUILanguageLegendPurple() {
	var en = UI_LEGEND_PURPLE_ENGLISH;
	var de = UI_LEGEND_PURPLE_DEUTCH;
	var es = UI_LEGEND_PURPLE_ESPANOL;
	var fr = UI_LEGEND_PURPLE_FRANCAIS;

	substituteLanguage("legendPurple", en, de, es, fr);
}

function setUIModifiersGroup(){
	setUIModifiers();
	setUILanguageLegendMelee();
	setUILanguageLegendMissile();
	setUILanguageLegendMagic();
	setUILanguageLegendRange();
	setUILanguageLegendAction();
	setUILanguageLegendMove();
	setUILanguageLegendShield();
	setUILanguageLegendHeart();
	setUILanguageLegendPotion();
}

function setUIModifiers() {
	var en = UI_MODIFIERS_ENGLISH;
	var de = UI_MODIFIERS_DEUTCH;
	var es = UI_MODIFIERS_ESPANOL;
	var fr = UI_MODIFIERS_FRANCAIS;

	substituteLanguage("uiModifiers", en, de, es, fr);
}

function setUILanguageLegendMelee() {
	var en = UI_LEGEND_MELEE_ENGLISH;
	var de = UI_LEGEND_MELEE_DEUTCH;
	var es = UI_LEGEND_MELEE_ESPANOL;
	var fr = UI_LEGEND_MELEE_FRANCAIS;

	substituteLanguage("legendMelee", en, de, es, fr);
}

function setUILanguageLegendMissile() {
	var en = UI_LEGEND_MISSILE_ENGLISH;
	var de = UI_LEGEND_MISSILE_DEUTCH;
	var es = UI_LEGEND_MISSILE_ESPANOL;
	var fr = UI_LEGEND_MISSILE_FRANCAIS;

	substituteLanguage("legendMissile", en, de, es, fr);
}

function setUILanguageLegendMagic() {
	var en = UI_LEGEND_MAGIC_ENGLISH;
	var de = UI_LEGEND_MAGIC_DEUTCH;
	var es = UI_LEGEND_MAGIC_ESPANOL;
	var fr = UI_LEGEND_MAGIC_FRANCAIS;

	substituteLanguage("legendMagic", en, de, es, fr);
}

function setUILanguageLegendRange() {
	var en = UI_LEGEND_RANGE_ENGLISH;
	var de = UI_LEGEND_RANGE_DEUTCH;
	var es = UI_LEGEND_RANGE_ESPANOL;
	var fr = UI_LEGEND_RANGE_FRANCAIS;

	substituteLanguage("legendRange", en, de, es, fr);
}

function setUILanguageLegendAction() {
	var en = UI_LEGEND_ACTION_ENGLISH;
	var de = UI_LEGEND_ACTION_DEUTCH;
	var es = UI_LEGEND_ACTION_ESPANOL;
	var fr = UI_LEGEND_ACTION_FRANCAIS;

	substituteLanguage("legendAction", en, de, es, fr);
}

function setUILanguageLegendMove() {
	var en = UI_LEGEND_MOVEMENT_ENGLISH;
	var de = UI_LEGEND_MOVEMENT_DEUTCH;
	var es = UI_LEGEND_MOVEMENT_ESPANOL;
	var fr = UI_LEGEND_MOVEMENT_FRANCAIS;

	substituteLanguage("legendMove", en, de, es, fr);
}

function setUILanguageLegendShield() {
	var en = UI_LEGEND_SHIELD_ENGLISH;
	var de = UI_LEGEND_SHIELD_DEUTCH;
	var es = UI_LEGEND_SHIELD_ESPANOL;
	var fr = UI_LEGEND_SHIELD_FRANCAIS;

	substituteLanguage("legendShield", en, de, es, fr);
}

function setUILanguageLegendHeart() {
	var en = UI_LEGEND_HEART_ENGLISH;
	var de = UI_LEGEND_HEART_DEUTCH;
	var es = UI_LEGEND_HEART_ESPANOL;
	var fr = UI_LEGEND_HEART_FRANCAIS;

	substituteLanguage("legendHeart", en, de, es, fr);
}

function setUILanguageLegendPotion() {
	var en = UI_LEGEND_POTION_ENGLISH;
	var de = UI_LEGEND_POTION_DEUTCH;
	var es = UI_LEGEND_POTION_ESPANOL;
	var fr = UI_LEGEND_POTION_FRANCAIS;

	substituteLanguage("legendPotion", en, de, es, fr);
}

function setUIStatusesGroup(){
	setUIStatuses();
	setUILanguageLegendAugment();
	setUILanguageLegendDangerous();
	setUILanguageLegendBane();
	setUILanguageLegendHex();
	setUILanguageLegendFire();
	setUILanguageLegendKnockdown();
	setUILanguageLegendIce();
	setUILanguageLegendImmobile();
	setUILanguageLegendPoison();
	setUILanguageLegendSlow();
	setUILanguageLegendAll();
}

function setUIStatuses() {
	var en = UI_STATUSES_ENGLISH;
	var de = UI_STATUSES_DEUTCH;
	var es = UI_STATUSES_ESPANOL;
	var fr = UI_STATUSES_FRANCAIS;

	substituteLanguage("uiStatuses", en, de, es, fr);
}

function setUILanguageLegendAugment() {
	var en = UI_LEGEND_AUGMENT_ENGLISH;
	var de = UI_LEGEND_AUGMENT_DEUTCH;
	var es = UI_LEGEND_AUGMENT_ESPANOL;
	var fr = UI_LEGEND_AUGMENT_FRANCAIS;

	substituteLanguage("legendAugment", en, de, es, fr);
}

function setUILanguageLegendDangerous() {
	var en = UI_LEGEND_DANGEROUS_ENGLISH;
	var de = UI_LEGEND_DANGEROUS_DEUTCH;
	var es = UI_LEGEND_DANGEROUS_ESPANOL;
	var fr = UI_LEGEND_DANGEROUS_FRANCAIS;

	substituteLanguage("legendDangerous", en, de, es, fr);
}

function setUILanguageLegendBane() {
	var en = UI_LEGEND_BANE_ENGLISH;
	var de = UI_LEGEND_BANE_DEUTCH;
	var es = UI_LEGEND_BANE_ESPANOL;
	var fr = UI_LEGEND_BANE_FRANCAIS;

	substituteLanguage("legendBane", en, de, es, fr);
}

function setUILanguageLegendHex() {
	var en = UI_LEGEND_HEX_ENGLISH;
	var de = UI_LEGEND_HEX_DEUTCH;
	var es = UI_LEGEND_HEX_ESPANOL;
	var fr = UI_LEGEND_HEX_FRANCAIS;

	substituteLanguage("legendHex", en, de, es, fr);
}

function setUILanguageLegendFire() {
	var en = UI_LEGEND_FIRE_ENGLISH;
	var de = UI_LEGEND_FIRE_DEUTCH;
	var es = UI_LEGEND_FIRE_ESPANOL;
	var fr = UI_LEGEND_FIRE_FRANCAIS;

	substituteLanguage("legendFire", en, de, es, fr);
}

function setUILanguageLegendKnockdown() {
	var en = UI_LEGEND_KNOCKDOWN_ENGLISH;
	var de = UI_LEGEND_KNOCKDOWN_DEUTCH;
	var es = UI_LEGEND_KNOCKDOWN_ESPANOL;
	var fr = UI_LEGEND_KNOCKDOWN_FRANCAIS;

	substituteLanguage("legendKnockdown", en, de, es, fr);
}

function setUILanguageLegendIce() {
	var en = UI_LEGEND_ICE_ENGLISH;
	var de = UI_LEGEND_ICE_DEUTCH;
	var es = UI_LEGEND_ICE_ESPANOL;
	var fr = UI_LEGEND_ICE_FRANCAIS;

	substituteLanguage("legendIce", en, de, es, fr);
}

function setUILanguageLegendImmobile() {
	var en = UI_LEGEND_IMMOBILE_ENGLISH;
	var de = UI_LEGEND_IMMOBILE_DEUTCH;
	var es = UI_LEGEND_IMMOBILE_ESPANOL;
	var fr = UI_LEGEND_IMMOBILE_FRANCAIS;

	substituteLanguage("legendImmobile", en, de, es, fr);
}

function setUILanguageLegendPoison() {
	var en = UI_LEGEND_POISON_ENGLISH;
	var de = UI_LEGEND_POISON_DEUTCH;
	var es = UI_LEGEND_POISON_ESPANOL;
	var fr = UI_LEGEND_POISON_FRANCAIS;

	substituteLanguage("legendPoison", en, de, es, fr);
}

function setUILanguageLegendSlow() {
	var en = UI_LEGEND_SLOW_ENGLISH;
	var de = UI_LEGEND_SLOW_DEUTCH;
	var es = UI_LEGEND_SLOW_ESPANOL;
	var fr = UI_LEGEND_SLOW_FRANCAIS;

	substituteLanguage("legendSlow", en, de, es, fr);
}

function setUILanguageLegendAll() {
	var en = UI_LEGEND_ALL_ENGLISH;
	var de = UI_LEGEND_ALL_DEUTCH;
	var es = UI_LEGEND_ALL_ESPANOL;
	var fr = UI_LEGEND_ALL_FRANCAIS;

	substituteLanguage("legendAll", en, de, es, fr);
}

function setUIImmunitiesGroup(){
	setUIImmunities();
	
	setUILanguageLegendImmuneBane();
	setUILanguageLegendImmuneHex();
	setUILanguageLegendImmuneFire();
	setUILanguageLegendImmuneKnockdown();
	setUILanguageLegendImmuneIce();
	setUILanguageLegendImmuneImmobile();
	setUILanguageLegendImmunePoison();
	setUILanguageLegendImmuneSlow();
	setUILanguageLegendImmuneAll();
}

function setUIImmunities() {
	var en = UI_IMMUNITIES_ENGLISH;
	var de = UI_IMMUNITIES_DEUTCH;
	var es = UI_IMMUNITIES_ESPANOL;
	var fr = UI_IMMUNITIES_FRANCAIS;

	substituteLanguage("uiImmunities", en, de, es, fr);
}

function setUILanguageLegendImmuneBane() {
	var en = UI_LEGEND_IMMUNE_BANE_ENGLISH;
	var de = UI_LEGEND_IMMUNE_BANE_DEUTCH;
	var es = UI_LEGEND_IMMUNE_BANE_ESPANOL;
	var fr = UI_LEGEND_IMMUNE_BANE_FRANCAIS;

	substituteLanguage("legendImmuneBane", en, de, es, fr);
}

function setUILanguageLegendImmuneHex() {
	var en = UI_LEGEND_IMMUNE_HEX_ENGLISH;
	var de = UI_LEGEND_IMMUNE_HEX_DEUTCH;
	var es = UI_LEGEND_IMMUNE_HEX_ESPANOL;
	var fr = UI_LEGEND_IMMUNE_HEX_FRANCAIS;

	substituteLanguage("legendImmuneHex", en, de, es, fr);
}

function setUILanguageLegendImmuneFire() {
	var en = UI_LEGEND_IMMUNE_FIRE_ENGLISH;
	var de = UI_LEGEND_IMMUNE_FIRE_DEUTCH;
	var es = UI_LEGEND_IMMUNE_FIRE_ESPANOL;
	var fr = UI_LEGEND_IMMUNE_FIRE_FRANCAIS;

	substituteLanguage("legendImmuneFire", en, de, es, fr);
}

function setUILanguageLegendImmuneKnockdown() {
	var en = UI_LEGEND_IMMUNE_KNOCKDOWN_ENGLISH;
	var de = UI_LEGEND_IMMUNE_KNOCKDOWN_DEUTCH;
	var es = UI_LEGEND_IMMUNE_KNOCKDOWN_ESPANOL;
	var fr = UI_LEGEND_IMMUNE_KNOCKDOWN_FRANCAIS;

	substituteLanguage("legendImmuneKnockdown", en, de, es, fr);
}

function setUILanguageLegendImmuneIce() {
	var en = UI_LEGEND_IMMUNE_ICE_ENGLISH;
	var de = UI_LEGEND_IMMUNE_ICE_DEUTCH;
	var es = UI_LEGEND_IMMUNE_ICE_ESPANOL;
	var fr = UI_LEGEND_IMMUNE_ICE_FRANCAIS;

	substituteLanguage("legendImmuneIce", en, de, es, fr);
}

function setUILanguageLegendImmuneImmobile() {
	var en = UI_LEGEND_IMMUNE_IMMOBILE_ENGLISH;
	var de = UI_LEGEND_IMMUNE_IMMOBILE_DEUTCH;
	var es = UI_LEGEND_IMMUNE_IMMOBILE_ESPANOL;
	var fr = UI_LEGEND_IMMUNE_IMMOBILE_FRANCAIS;

	substituteLanguage("legendImmuneImmobile", en, de, es, fr);
}

function setUILanguageLegendImmunePoison() {
	var en = UI_LEGEND_IMMUNE_POISON_ENGLISH;
	var de = UI_LEGEND_IMMUNE_POISON_DEUTCH;
	var es = UI_LEGEND_IMMUNE_POISON_ESPANOL;
	var fr = UI_LEGEND_IMMUNE_POISON_FRANCAIS;

	substituteLanguage("legendImmunePoison", en, de, es, fr);
}

function setUILanguageLegendImmuneSlow() {
	var en = UI_LEGEND_IMMUNE_SLOW_ENGLISH;
	var de = UI_LEGEND_IMMUNE_SLOW_DEUTCH;
	var es = UI_LEGEND_IMMUNE_SLOW_ESPANOL;
	var fr = UI_LEGEND_IMMUNE_SLOW_FRANCAIS;

	substituteLanguage("legendImmuneSlow", en, de, es, fr);
}

function setUILanguageLegendImmuneAll() {
	var en = UI_LEGEND_IMMUNE_ALL_ENGLISH;
	var de = UI_LEGEND_IMMUNE_ALL_DEUTCH;
	var es = UI_LEGEND_IMMUNE_ALL_ESPANOL;
	var fr = UI_LEGEND_IMMUNE_ALL_FRANCAIS;

	substituteLanguage("legendImmuneAll", en, de, es, fr);
}

function setUIAffinitiesGroup(){
	setUIAffinities();
	
	setUILanguageLegendAllAffinity();
	
	setUILanguageLegendAmethyst();
	setUILanguageLegendAmethystCitrine();
	setUILanguageLegendAmethystEmerald();
	setUILanguageLegendAmethystRuby();
	setUILanguageLegendAmethystSapphire();
	
	setUILanguageLegendCitrine();
	setUILanguageLegendCitrineAmethyst();
	setUILanguageLegendCitrineEmerald();
	setUILanguageLegendCitrineRuby();
	setUILanguageLegendCitrineSapphire();
	
	setUILanguageLegendEmerald();
	setUILanguageLegendEmeraldAmethyst();
	setUILanguageLegendEmeraldCitrine();
	setUILanguageLegendEmeraldRuby();
	setUILanguageLegendEmeraldSapphire();
	
	setUILanguageLegendRuby();
	setUILanguageLegendRubyAmethyst();
	setUILanguageLegendRubyCitrine();
	setUILanguageLegendRubyEmerald();
	setUILanguageLegendRubySapphire();
	
	setUILanguageLegendSapphire();
	setUILanguageLegendSapphireAmethyst();
	setUILanguageLegendSapphireCitrine();
	setUILanguageLegendSapphireEmerald();
	setUILanguageLegendSapphireRuby();
}

function setUIAffinities() {
	var en = UI_AFFINITIES_ENGLISH;
	var de = UI_AFFINITIES_DEUTCH;
	var es = UI_AFFINITIES_ESPANOL;
	var fr = UI_AFFINITIES_FRANCAIS;

	substituteLanguage("uiAffinities", en, de, es, fr);
}

function setUILanguageLegendAllAffinity() {
	var en = UI_LEGEND_AFFINITY_ALL_ENGLISH;
	var de = UI_LEGEND_AFFINITY_ALL_DEUTCH;
	var es = UI_LEGEND_AFFINITY_ALL_ESPANOL;
	var fr = UI_LEGEND_AFFINITY_ALL_FRANCAIS;

	substituteLanguage("legendAllAffinity", en, de, es, fr);
}

function setUILanguageLegendAmethyst() {
	var en = UI_LEGEND_AMETHYST_ENGLISH;
	var de = UI_LEGEND_AMETHYST_DEUTCH;
	var es = UI_LEGEND_AMETHYST_ESPANOL;
	var fr = UI_LEGEND_AMETHYST_FRANCAIS;

	substituteLanguage("legendAmethyst", en, de, es, fr);
}

function setUILanguageLegendAmethystCitrine() {
	var en = UI_LEGEND_AMETHYST_CITRINE_ENGLISH;
	var de = UI_LEGEND_AMETHYST_CITRINE_DEUTCH;
	var es = UI_LEGEND_AMETHYST_CITRINE_ESPANOL;
	var fr = UI_LEGEND_AMETHYST_CITRINE_FRANCAIS;

	substituteLanguage("legendAmethystCitrine", en, de, es, fr);
}

function setUILanguageLegendAmethystEmerald() {
	var en = UI_LEGEND_AMETHYST_EMERALD_ENGLISH;
	var de = UI_LEGEND_AMETHYST_EMERALD_DEUTCH;
	var es = UI_LEGEND_AMETHYST_EMERALD_ESPANOL;
	var fr = UI_LEGEND_AMETHYST_EMERALD_FRANCAIS;

	substituteLanguage("legendAmethystEmerald", en, de, es, fr);
}

function setUILanguageLegendAmethystRuby() {
	var en = UI_LEGEND_AMETHYST_RUBY_ENGLISH;
	var de = UI_LEGEND_AMETHYST_RUBY_DEUTCH;
	var es = UI_LEGEND_AMETHYST_RUBY_ESPANOL;
	var fr = UI_LEGEND_AMETHYST_RUBY_FRANCAIS;

	substituteLanguage("legendAmethystRuby", en, de, es, fr);
}

function setUILanguageLegendAmethystSapphire() {
	var en = UI_LEGEND_AMETHYST_SAPPHIRE_ENGLISH;
	var de = UI_LEGEND_AMETHYST_SAPPHIRE_DEUTCH;
	var es = UI_LEGEND_AMETHYST_SAPPHIRE_ESPANOL;
	var fr = UI_LEGEND_AMETHYST_SAPPHIRE_FRANCAIS;

	substituteLanguage("legendAmethystSapphire", en, de, es, fr);
}

function setUILanguageLegendCitrine() {
	var en = UI_LEGEND_CITRINE_ENGLISH;
	var de = UI_LEGEND_CITRINE_DEUTCH;
	var es = UI_LEGEND_CITRINE_ESPANOL;
	var fr = UI_LEGEND_CITRINE_FRANCAIS;

	substituteLanguage("legendCitrine", en, de, es, fr);
}

function setUILanguageLegendCitrineAmethyst() {
	var en = UI_LEGEND_CITRINE_AMETHYST_ENGLISH;
	var de = UI_LEGEND_CITRINE_AMETHYST_DEUTCH;
	var es = UI_LEGEND_CITRINE_AMETHYST_ESPANOL;
	var fr = UI_LEGEND_CITRINE_AMETHYST_FRANCAIS;

	substituteLanguage("legendCitrineAmethyst", en, de, es, fr);
}

function setUILanguageLegendCitrineEmerald() {
	var en = UI_LEGEND_CITRINE_EMERALD_ENGLISH;
	var de = UI_LEGEND_CITRINE_EMERALD_DEUTCH;
	var es = UI_LEGEND_CITRINE_EMERALD_ESPANOL;
	var fr = UI_LEGEND_CITRINE_EMERALD_FRANCAIS;

	substituteLanguage("legendCitrineEmerald", en, de, es, fr);
}

function setUILanguageLegendCitrineRuby() {
	var en = UI_LEGEND_CITRINE_RUBY_ENGLISH;
	var de = UI_LEGEND_CITRINE_RUBY_DEUTCH;
	var es = UI_LEGEND_CITRINE_RUBY_ESPANOL;
	var fr = UI_LEGEND_CITRINE_RUBY_FRANCAIS;

	substituteLanguage("legendCitrineRuby", en, de, es, fr);
}

function setUILanguageLegendCitrineSapphire() {
	var en = UI_LEGEND_CITRINE_SAPPHIRE_ENGLISH;
	var de = UI_LEGEND_CITRINE_SAPPHIRE_DEUTCH;
	var es = UI_LEGEND_CITRINE_SAPPHIRE_ESPANOL;
	var fr = UI_LEGEND_CITRINE_SAPPHIRE_FRANCAIS;

	substituteLanguage("legendCitrineSapphire", en, de, es, fr);
}

function setUILanguageLegendEmerald() {
	var en = UI_LEGEND_EMERALD_ENGLISH;
	var de = UI_LEGEND_EMERALD_DEUTCH;
	var es = UI_LEGEND_EMERALD_ESPANOL;
	var fr = UI_LEGEND_EMERALD_FRANCAIS;

	substituteLanguage("legendEmerald", en, de, es, fr);
}

function setUILanguageLegendEmeraldAmethyst() {
	var en = UI_LEGEND_EMERALD_AMETHYST_ENGLISH;
	var de = UI_LEGEND_EMERALD_AMETHYST_DEUTCH;
	var es = UI_LEGEND_EMERALD_AMETHYST_ESPANOL;
	var fr = UI_LEGEND_EMERALD_AMETHYST_FRANCAIS;

	substituteLanguage("legendEmeraldAmethyst", en, de, es, fr);
}

function setUILanguageLegendEmeraldCitrine() {
	var en = UI_LEGEND_EMERALD_CITRINE_ENGLISH;
	var de = UI_LEGEND_EMERALD_CITRINE_DEUTCH;
	var es = UI_LEGEND_EMERALD_CITRINE_ESPANOL;
	var fr = UI_LEGEND_EMERALD_CITRINE_FRANCAIS;

	substituteLanguage("legendEmeraldCitrine", en, de, es, fr);
}

function setUILanguageLegendEmeraldRuby() {
	var en = UI_LEGEND_EMERALD_RUBY_ENGLISH;
	var de = UI_LEGEND_EMERALD_RUBY_DEUTCH;
	var es = UI_LEGEND_EMERALD_RUBY_ESPANOL;
	var fr = UI_LEGEND_EMERALD_RUBY_FRANCAIS;

	substituteLanguage("legendEmeraldRuby", en, de, es, fr);
}

function setUILanguageLegendEmeraldSapphire() {
	var en = UI_LEGEND_EMERALD_SAPPHIRE_ENGLISH;
	var de = UI_LEGEND_EMERALD_SAPPHIRE_DEUTCH;
	var es = UI_LEGEND_EMERALD_SAPPHIRE_ESPANOL;
	var fr = UI_LEGEND_EMERALD_SAPPHIRE_FRANCAIS;

	substituteLanguage("legendEmeraldSapphire", en, de, es, fr);
}

function setUILanguageLegendRuby() {
	var en = UI_LEGEND_RUBY_ENGLISH;
	var de = UI_LEGEND_RUBY_DEUTCH;
	var es = UI_LEGEND_RUBY_ESPANOL;
	var fr = UI_LEGEND_RUBY_FRANCAIS;

	substituteLanguage("legendRuby", en, de, es, fr);
}

function setUILanguageLegendRubyAmethyst() {
	var en = UI_LEGEND_RUBY_AMETHYST_ENGLISH;
	var de = UI_LEGEND_RUBY_AMETHYST_DEUTCH;
	var es = UI_LEGEND_RUBY_AMETHYST_ESPANOL;
	var fr = UI_LEGEND_RUBY_AMETHYST_FRANCAIS;

	substituteLanguage("legendRubyAmethyst", en, de, es, fr);
}

function setUILanguageLegendRubyCitrine() {
	var en = UI_LEGEND_RUBY_CITRINE_ENGLISH;
	var de = UI_LEGEND_RUBY_CITRINE_DEUTCH;
	var es = UI_LEGEND_RUBY_CITRINE_ESPANOL;
	var fr = UI_LEGEND_RUBY_CITRINE_FRANCAIS;

	substituteLanguage("legendRubyCitrine", en, de, es, fr);
}

function setUILanguageLegendRubyEmerald() {
	var en = UI_LEGEND_RUBY_EMERALD_ENGLISH;
	var de = UI_LEGEND_RUBY_EMERALD_DEUTCH;
	var es = UI_LEGEND_RUBY_EMERALD_ESPANOL;
	var fr = UI_LEGEND_RUBY_EMERALD_FRANCAIS;

	substituteLanguage("legendRubyEmerald", en, de, es, fr);
}

function setUILanguageLegendRubySapphire() {
	var en = UI_LEGEND_RUBY_SAPPHIRE_ENGLISH;
	var de = UI_LEGEND_RUBY_SAPPHIRE_DEUTCH;
	var es = UI_LEGEND_RUBY_SAPPHIRE_ESPANOL;
	var fr = UI_LEGEND_RUBY_SAPPHIRE_FRANCAIS;

	substituteLanguage("legendRubySapphire", en, de, es, fr);
}

function setUILanguageLegendSapphire() {
	var en = UI_LEGEND_SAPPHIRE_ENGLISH;
	var de = UI_LEGEND_SAPPHIRE_DEUTCH;
	var es = UI_LEGEND_SAPPHIRE_ESPANOL;
	var fr = UI_LEGEND_SAPPHIRE_FRANCAIS;

	substituteLanguage("legendSapphire", en, de, es, fr);
}

function setUILanguageLegendSapphireAmethyst() {
	var en = UI_LEGEND_SAPPHIRE_AMETHYST_ENGLISH;
	var de = UI_LEGEND_SAPPHIRE_AMETHYST_DEUTCH;
	var es = UI_LEGEND_SAPPHIRE_AMETHYST_ESPANOL;
	var fr = UI_LEGEND_SAPPHIRE_AMETHYST_FRANCAIS;

	substituteLanguage("legendSapphireAmethyst", en, de, es, fr);
}

function setUILanguageLegendSapphireCitrine() {
	var en = UI_LEGEND_SAPPHIRE_CITRINE_ENGLISH;
	var de = UI_LEGEND_SAPPHIRE_AMETHYST_DEUTCH;
	var es = UI_LEGEND_SAPPHIRE_CITRINE_ESPANOL;
	var fr = UI_LEGEND_SAPPHIRE_CITRINE_FRANCAIS;

	substituteLanguage("legendSapphireCitrine", en, de, es, fr);
}

function setUILanguageLegendSapphireEmerald() {
	var en = UI_LEGEND_SAPPHIRE_EMERALD_ENGLISH;
	var de = UI_LEGEND_SAPPHIRE_EMERALD_DEUTCH;
	var es = UI_LEGEND_SAPPHIRE_EMERALD_ESPANOL;
	var fr = UI_LEGEND_SAPPHIRE_EMERALD_FRANCAIS;

	substituteLanguage("legendSapphireEmerald", en, de, es, fr);
}

function setUILanguageLegendSapphireRuby() {
	var en = UI_LEGEND_SAPPHIRE_RUBY_ENGLISH;
	var de = UI_LEGEND_SAPPHIRE_RUBY_DEUTCH;
	var es = UI_LEGEND_SAPPHIRE_RUBY_ESPANOL;
	var fr = UI_LEGEND_SAPPHIRE_RUBY_FRANCAIS;

	substituteLanguage("legendSapphireRuby", en, de, es, fr);
}