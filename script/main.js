/**
 *   SDE Card Creator source file main,
 *   Copyright (C) 2015  James M Adams
 *
 *   This program is free software: you can redistribute it and/or modify
 *   it under the terms of the GNU Lesser General Public License as published by
 *   the Free Software Foundation, either version 3 of the License, or
 *   any later version.
 *
 *   This program is distributed in the hope that it will be useful,
 *   but WITHOUT ANY WARRANTY; without even the implied warranty of
 *   MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 *   GNU Lesser General Public License for more details.
 *
 *   You should have received a copy of the GNU Lesser General Public License
 *   along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

/**
 * Extension to jquery to apply a css animation class and remove it when the animation is finished.
 * @param {string} animationName - css class name to the added to the domnode.
 */
$.fn.extend({
    animateCss: function (animationName) {
        var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
        $(this).addClass('animated ' + animationName).one(animationEnd, function() {
            $(this).removeClass('animated ' + animationName);
        });
    }
});


var languageChoice = "en";
function changeLanguage() {
	var previousLanguage = languageChoice;
	languageChoice = document.getElementById('languageSelection').value;
	
	changeLanguageFromTo(previousLanguage, languageChoice);
}

function changeLanguageFromTo(previousLanguage, nextLanguage) {
	updateKeywordLanguage();
	updateStatLanguage(previousLanguage, nextLanguage);
}

function updateKeywordLanguage() {
	stripStatsFromKeywords();
	
	applyLanguageToDefinitions();
	switchKeywordLanguages();
	applyLanguageToDescriptions();
	
	setUILanguage();
}

function stripStatsFromKeywords() {
	stripFromKeywords('STR');
	stripFromKeywords('ARM');
	stripFromKeywords('WILL');
	stripFromKeywords('DEX');
}

function stripFromKeywords(stat) {
	var elements = document.getElementsByClassName(stat);
	while(elements.length > 0) {
		var element = elements[0];
		element.classList.remove('stat');
		element.classList.remove(stat);
	}
}

function applyLanguageToDefinitions() {
	var elements = document.getElementsByClassName('definition');
	for(var x=0; x < elements.length; x++) {
		var element = elements[x];
		
		var eValue = element.innerHTML;
		element.innerHTML = findStats(eValue);
		var test = "";
	}
}

function switchKeywordLanguages() {
	switchKeywordLanguageFile();
	clearKeywordDefinitions();
	reScanKeywords();
}

function switchKeywordLanguageFile() {
	var en = 'sde_keywords_english.json';
	var de = 'sde_keywords_deutch.json';
	var es = 'sde_keywords_espanol.json';
	var fr = 'sde_keywords_francais.json';

	if(languageChoice == "en") {
		re = en;
	} else if(languageChoice == "de") {
		re = de;
	} else if(languageChoice == "es") {
		re = es;
	} else if(languageChoice == "fr") {
		re = fr;
	} else {
		re = en;
	}
	
	var promises = [];
	promises.push($.getJSON('./json/'+re));	
	
	$.when.apply($, promises).done(function(keywords){
		var keywordStore = new KeywordStore(keywords);
		keywordStore.setupKeywordsForm();
		$('.page').data('keywordStore',keywordStore);
	});
	
	//setLanguageFile(re);
}

function setLanguageFile(re){
	//fetch('./json/'+re)
    //.then((response) => response.json());
	
	var keywordStore = new KeywordStore(fetch('./json/'+re));//$.getJSON('./json/'+re));
		keywordStore.setupKeywordsForm();
		$('.page').data('keywordStore',keywordStore);
}

function clearKeywordDefinitions() {
	var elements = document.getElementsByClassName('definedKeyword');
	while(elements.length > 0) {
		var element = elements[0];
		element.remove();
	}
}

function reScanKeywords() {
	var elements = document.getElementsByClassName('definition');
	
	for(var x=0; x < elements.length; x++) {
		var element = elements[x];
		checkKeywords(element);		
	}
}

function checkKeywords(node) {
	var keysFound = [];
    //clear keywords
    $('.cardGroup.selected .card .keywords').empty();

    $(node).find('.keyword').each(function(index, element){
      keysFound.push($(element).data('key'));
    });

    //sort keysfound - should be case sensitive
    keysFound = keysFound.sort(function(a,b){
      return a.localeCompare(b);
    });
	
	keywordStore = createKeywordStore();
	
	//loop through keysfound
    for(var i=0;i<keysFound.length;i++){
		var key = keysFound[i];
		
		this.addKeyword(key,keywordStore.data[key]);
    }
}

function createKeywordStore(){
	var keywordStore = $('.page').data('keywordStore');
	//var keywordStore = new KeywordStore(keywords);
	keywordStore.setupKeywordsForm();
	return keywordStore;
}

function addKeyword(key,data) {
	if(data != undefined){
		//var lKey = key.toLowerCase();
		var keyClass = resolveKeyClass(key);

		//check to see if the keyword is already added, and if the display flag does not equal false
		if( data.displayBack !== false && data.displayBack !== 'false'  && $('.cardGroup.selected .card .keywords .'+keyClass.toUpperCase()).length ===0){
		  //console.log(key,data);

		  var description = data.description;//data.get(keyClass).description;

		  if(data.selectedVersion !== undefined){
			if(data.selectedVersion !== data.version ){
			  for(var i=0,e;(e=data.errata[i]);i++){
				if(data.selectedVersion === e.version.toString()){
				  description=e.description;
				  break;
				}
			  }
			}
		  }else if(data.hasErrata === "true" || data.hasErrata === true){
			description = data.errata[data.errata.length-1].description;
		  }

			var parsedDescription = "";
			if(description != undefined){
				parsedDescription = this.parseDescription(description);
			}
			
			if(parsedDescription != "" && parsedDescription != undefined){
				var backTemplate = '<div class="keyword definedKeyword '+keyClass.toUpperCase()+'" data-key="'+key+'">'+
				'<span class="keyword '+keyClass.toUpperCase()+'"></span>'+
				'<span class="name">'+key+'</span>:'+
				'<span class="description">'+parsedDescription+'</span>'+
				'</div>';

				var itemTemplate = '<div class="keyword '+keyClass.toUpperCase()+'" data-key="'+key+'">'+
				'<span class="keyword '+keyClass.toUpperCase()+'"></span>'+
				'<span class="name">'+key+'</span> '+
				'<span class="description">'+parsedDescription+'</span>'+
				'</div>';

				$(".cardGroup.selected .card .back .keywords").append(backTemplate);

				$(".cardGroup.selected .card .item .keywords").append(itemTemplate);
			}
		}
	}
}

function resolveKeyClass(key) {
	var parts = key.split(' ');
    var returner ='';

    for(var i=0,item;(item=parts[i]);i++){
      if(i==0){
        //item = item.toLowerCase();
        item = item.replace('\'','');

        if($.isNumeric(item[0])){
          item="key-"+item;
        }
      }

      returner+=item;
    }
    return returner;
}

  function parseDescription(description){
    var keywordDescription = this.findKeywords(description);
    var affinityDescription = this.findAffinity(keywordDescription);
    var diceDescription = this.findDice(affinityDescription);
    var statDescription = this.findStats(diceDescription);
    return statDescription;
  };


 /**
   *search function that returns a modified version of the text passed into with the keywords highlighted.
   */
  this.findKeywords=function(text){
	var secondaryRe = /\b(ALL|IMMUNEBANE|IMMUNEHEX|IMMUNEFIRE|IMMUNEKNOCKDOWN|IMMUNEICE|IMMUNEIMMOBILE|IMMUNEPOISON|IMMUNESLOW|IMMUNEALL)\b/g;
    
    text = text.replace(secondaryRe,function(match){
		var result = '<span class="keyword '+match+'" data-key="'+match+'">'+match+'</span>';
		
		return result;
    }.bind(this));
	
	//console.log(this.re);
	//console.log(secondaryRe);
	
	//var combinedRegex = this.re + "|" + secondaryRe;
	
	//console.log(combinedRegex);
	
	text = text.replace(this.re,function(match){
		var key = this.lookup[match.toLowerCase()];
		var keyClass = this.resolveKeyClass(key);
		return '<span class="keyword '+keyClass.toUpperCase()+'" data-key="'+key+'">'+key+'</span>';
    }.bind(this));
	
	//console.log(text);
	
	return text;
  };

function findAffinity(description){
	var re = /\b(ALLAFFINITY|AMETHYST|AMETHYSTCITRINE|AMETHYSTEMERALD|AMETHYSTRUBY|AMETHYSTSAPPHIRE|CITRINE|CITRINEAMETHYST|CITRINEEMERALD|CITRINERUBY|CITRINESAPPHIRE|EMERALD|EMERALDAMETHYST|EMERALDCITRINE|EMERALDRUBY|EMERALDSAPPHIRE|RUBY|RUBYAMETHYST|RUBYCITRINE|RUBYEMERALD|RUBYSAPPHIRE|SAPPHIRE|SAPPHIREAMETHYST|SAPPHIRECITRINE|SAPPHIREEMERALD|SAPPHIRERUBY)\b/g;

    description = description.replace(re,function(match){
    return '<div class="affinity '+match+'" title="'+match+'"></div>';
    });
    return description;
}

function findDice(text){
	//regular expression - https://regex101.com/#javascript
    var re = /(([+-]?[0-9]+)(RG|[RBGOP]|ST|SW|MI|MA|AC|MO|HE|SH|PO))\b/g;

    text = text.replace(re,function(match,p1,p2,p3,p4){
      var c="";
      //var v = p3.toLowerCase();

      if(p3==='R'){
        c+="dice red";
      }else if(p3==='B'){
        c+="dice blue";
      }else if(p3==='G'){
        c+="dice green";
      }else if(p3==='O'){
        c+="dice orange";
      }else if(p3==='P'){
        c+="dice purple";
      }else if(p3==='ST'){
        c+="dice star";
      }else if(p3==='MA'){
        c+="offense magic";
      }else if(p3==='MI'){
        c+="offense missile";
      }else if(p3==='SW'){
        c+="offense melee";
      }else if(p3==='RG'){
        c+="offense range";
      }else if(p3==='AC'){
        c+="actionMod";
      }else if(p3==='MO'){
        c+="moveMod";
      }else if(p3==='HE'){
        c+="heartMod";
      }else if(p3==='SH'){
        c+="shieldMod";
      }else if(p3==='PO'){
        c+="potionMod";
      }
      return '<span class="'+c+'">'+(p2==='0'?'&nbsp;':p2)+'</span>';
    });
    return text;
}

function findStats(){
	var re;
	var en = /\b(STR|ARM|WILL|DEX)\b/g;
	var de = /\b(STR|RUS|WILL|DEX)\b/g;
	var es = /\b(FUE|ARM|VOL|DES)\b/g;
	var fr = /\b(FOR|ARM|VOL|DEX)\b/g;

	if(languageChoice == "en") {
		re = en;
	} else if(languageChoice == "de") {
		re = de;
	} else if(languageChoice == "es") {
		re = es;
	} else if(languageChoice == "fr") {
		re = fr;
	} else {
		re = en;
	}
	
    text = text.replace(re,'<span class="stat $1">$1</span>');
    return text;
}

function replace1(match){
	var result = '<span class="keyword '+match+'" data-key="'+match+'">'+match+'</span>';
		
	return result;
 }
  
 function replace2(match){
	var key = this.lookup[match.toLowerCase()];
	var keyClass = this.resolveKeyClass(key);
	return '<span class="keyword '+keyClass.toUpperCase()+'" data-key="'+key+'">'+key+'</span>';
 }

function applyLanguageToDescriptions() {
	var elements = document.getElementsByClassName('description');
	for(var x=0; x < elements.length; x++) {
		var element = elements[x];
		
		var eValue = element.innerHTML;
		element.innerHTML = findStats(eValue);
		var test = "";
	}
}

 function findStats(text){
    var re;
	var en = /\b(STR|ARM|WILL|DEX)\b/g;
	var de = /\b(STR|RUS|WILL|DEX)\b/g;
	var es = /\b(FUE|ARM|VOL|DES)\b/g;
	var fr = /\b(FOR|ARM|VOL|DEX)\b/g;

	if(languageChoice == "en") {
		re = en;
	} else if(languageChoice == "de") {
		re = de;
	} else if(languageChoice == "es") {
		re = es;
	} else if(languageChoice == "fr") {
		re = fr;
	} else {
		re = en;
	}
	
    text = text.replace(re,'<span class="stat $1">$1</span>');
    return text;
  };

//Test phrase: STR WILL DEX ARM FOR RUS FUE VOL DES GES

function updateStatLanguage(previousLanguage, nextLanguage) {
	var elements = document.getElementsByClassName(previousLanguage);
	var stat = 0;
	
	while(elements.length > 0) {
		var element = elements[0];
		element.classList.add('stat');
		element.classList.replace(previousLanguage, nextLanguage);		
		if(stat == 0) {
			element.classList.add('STR');
		} else if(stat == 1) {
			element.classList.add('ARM');
		} else if(stat == 2) {
			element.classList.add('WILL');
		} else if(stat == 3) {
			element.classList.add('DEX');
		}
		stat++;
	}
}

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
}

function setUIButtonBar(){
	setUISaveButton();
	setUILoadButton();
	setUIAddCardButton();
	setUIHelpButton();
	setUIHelpDialog();
}

function setUISaveButton() {
	var en = "Save";
	var de = "Speichern";
	var es = "Ahorrar";
	var fr = "Sauvegarder";

	substituteLanguageControl("uiSave", en, de, es, fr);
}

function setUILoadButton() {
	var en = "Load";
	var de = "Belastung";
	var es = "Carga";
	var fr = "Charger";

	substituteLanguageControl("uiLoad", en, de, es, fr);
}

function setUIAddCardButton() {
	var en = "Add Card";
	var de = "Karte hinzufügen";
	var es = "Agregar tarjeta";
	var fr = "Ajouter une carte";

	substituteLanguageControl("uiAddCard", en, de, es, fr);
}

function setUIHelpButton() {
	var en = "Help";
	var de = "Helfen";
	var es = "Ayuda";
	var fr = "Aide";

	substituteLanguageControl("uiHelp", en, de, es, fr);
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
	var en = "Medication For All";
	var de = "Medikamente für alle";
	var es = "Medicamentos para todos";
	var fr = "Des médicaments pour tous";

	substituteLanguageControl("uiMedicationForAll", en, de, es, fr);
}

function setUIGithub() {
	var en = "GitHub";
	var de = "GitHub";
	var es = "GitHub";
	var fr = "GitHub";

	substituteLanguageControl("uiGitHub", en, de, es, fr);
}

function setUIFAQ() {
	var en = "FAQ";
	var de = "FAQ";
	var es = "Preguntas más frecuentes";
	var fr = "FAQ";

	substituteLanguageControl("uiFAQ", en, de, es, fr);
}

function setUIChanges() {
	var en = "Changes";
	var de = "Änderungen";
	var es = "Cambios";
	var fr = "Changements";

	substituteLanguageControl("uiChanges", en, de, es, fr);
}

function setUIToDo() {
	var en = "ToDo";
	var de = "Machen";
	var es = "Hacer";
	var fr = "Faire";

	substituteLanguageControl("uiToDo", en, de, es, fr);
}

function setUIAbout() {
	var en = "About";
	var de = "Um";
	var es = "Acerca de";
	var fr = "À propos";

	substituteLanguageControl("uiAbout", en, de, es, fr);
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
	var en = "Card";
	var de = "Karte";
	var es = "Tarjeta";
	var fr = "Card";

	substituteLanguageControl("uiCard", en, de, es, fr);
}

function setUIHeaderHeader() {
	var en = "Header";
	var de = "Header";
	var es = "Encabezamiento";
	var fr = "Entête";

	substituteLanguageControl("uiHeader", en, de, es, fr);
}

function setUIImageHeader() {
	var en = "Image";
	var de = "Bild";
	var es = "Imagen";
	var fr = "Image";

	substituteLanguageControl("uiImage", en, de, es, fr);
}

function setUIStatsHeader() {
	var en = "Stats";
	var de = "Statistiken";
	var es = "Estadísticas";
	var fr = "Statistiques";

	substituteLanguageControl("uiStats", en, de, es, fr);
}

function setUIKeywordHeader() {
	var en = "Keyword";
	var de = "Stichwort";
	var es = "Palabra clave";
	var fr = "Mot-clé";

	substituteLanguageControl("uiKeyword", en, de, es, fr);
}

function setUIAbilityHeader() {
	var en = "Ability";
	var de = "Fähigkeit";
	var es = "Capacidad";
	var fr = "Capacité";

	substituteLanguageControl("uiAbility", en, de, es, fr);
}

function setUIFlavorTextHeader() {
	var en = "Flavor Text";
	var de = "Geschmackstext";
	var es = "Texto de Sabor";
	var fr = "Texte de Saveur";

	substituteLanguageControl("uiFlavorText", en, de, es, fr);
}

function setUICardModifierHeader() {
	var en = "Card Modifier";
	var de = "Kartenmodifikator";
	var es = "Modificador de tarjeta";
	var fr = "Modificateur de carte";

	substituteLanguageControl("uiCardModifier", en, de, es, fr);
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
	var en = "Type";
	var de = "Typ";
	var es = "Tipo";
	var fr = "Taper";

	substituteLanguageControl("uiType", en, de, es, fr);
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
	var en = "Hero";
	var de = "Held";
	var es = "Héroe";
	var fr = "Héros";

	substituteLanguageControl("uiHero", en, de, es, fr);
}

function setUIMonster() {
	var en = "Monster";
	var de = "Monster";
	var es = "Monstruo";
	var fr = "Monstre";

	substituteLanguageControl("uiMonster", en, de, es, fr);
}

function setUIPet() {
	var en = "Pet";
	var de = "Haustier";
	var es = "Mascota";
	var fr = "Animal de compagnie";

	substituteLanguageControl("uiPet", en, de, es, fr);
}

function setUILoot() {
	var en = "Loot";
	var de = "Beute";
	var es = "Botín";
	var fr = "Butin";

	substituteLanguageControl("uiLoot", en, de, es, fr);
}

function setUITreasure() {
	var en = "Treasure";
	var de = "Schatz";
	var es = "Tesoro";
	var fr = "Trésor";

	substituteLanguageControl("uiTreasure", en, de, es, fr);
}

function setUIWonder() {
	var en = "Wonder";
	var de = "Wunder";
	var es = "Preguntarse";
	var fr = "Merveille";

	substituteLanguageControl("uiWonder", en, de, es, fr);
}

function setUIExplore() {
	var en = "Explore";
	var de = "Erkunden";
	var es = "Explorar";
	var fr = "Explorer";

	substituteLanguageControl("uiExplore", en, de, es, fr);
}

function setUITimeout() {
	var en = "Timeout";
	var de = "Auszeit";
	var es = "Se acabó el tiempo";
	var fr = "Temps mort";

	substituteLanguageControl("uiTimeout", en, de, es, fr);
}

function setUICommand() {
	var en = "Command";
	var de = "Befehl";
	var es = "Dominio";
	var fr = "Commande";

	substituteLanguageControl("uiCommand", en, de, es, fr);
}

function setUIExperimental() {
	var en = "-Experimental-";
	var de = "-Experimental-";
	var es = "-Experimental-";
	var fr = "-Expérimental-";

	substituteLanguageControl("uiExperimental", en, de, es, fr);
}

function setUIArcadeSolo() {
	var en = "Arcade Solo";
	var de = "Arcade Solo";
	var es = "Arcade En solitario";
	var fr = "Arcade Solo";

	substituteLanguageControl("uiArcadeSolo", en, de, es, fr);
}

function setUIArcadeGang() {
	var en = "Arcade Gang";
	var de = "Arcade-Gang";
	var es = "Pandilla arcade";
	var fr = "Gang d'arcade";

	substituteLanguageControl("uiArcadeGang", en, de, es, fr);
}

function setUIScale() {
	var en = "Scale";
	var de = "Skala";
	var es = "Escala";
	var fr = "Échelle";

	substituteLanguageControl("uiScale", en, de, es, fr);
}

function setUIAuthor() {
	var en = "Author";
	var de = "Autor";
	var es = "Autor";
	var fr = "Auteur";

	substituteLanguageControl("uiAuthor", en, de, es, fr);
}

function setUIBorder() {
	var en = "Border";
	var de = "Grenze";
	var es = "Borde";
	var fr = "Frontière";

	substituteLanguageControl("uiBorder", en, de, es, fr);
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
	var en = "Blue";
	var de = "Klassisches Blau";
	var es = "Azul Clásico";
	var fr = "Bleu Classique";

	substituteLanguageControl("uiBlue", en, de, es, fr);
}

function setUIRed() {
	var en = "Red";
	var de = "Klassisches Rot";
	var es = "Rojo Clásico";
	var fr = "Rouge Classique";

	substituteLanguageControl("uiRed", en, de, es, fr);
}

function setUIGreen() {
	var en = "Green";
	var de = "Klassisches Grün";
	var es = "Verde Clásico";
	var fr = "Vert Classique";

	substituteLanguageControl("uiGreen", en, de, es, fr);
}

function setUIPurple() {
	var en = "Purple";
	var de = "Klassisches Lila";
	var es = "Púrpura Clásico";
	var fr = "Violet Classique";

	substituteLanguageControl("uiPurple", en, de, es, fr);
}

function setUIYellow() {
	var en = "Yellow";
	var de = "Klassisches Gelb";
	var es = "Amarillo Clásico";
	var fr = "Jaune Classique";

	substituteLanguageControl("uiYellow", en, de, es, fr);
}

function setUIOrange() {
	var en = "Orange";
	var de = "Orange";
	var es = "Naranja";
	var fr = "Orange";

	substituteLanguageControl("uiOrange", en, de, es, fr);
}

function setUIBrown() {
	var en = "Brown";
	var de = "Braun";
	var es = "Marrón";
	var fr = "Brun";

	substituteLanguageControl("uiBrown", en, de, es, fr);
}

function setUIPink() {
	var en = "Pink";
	var de = "Rosa";
	var es = "Rosa";
	var fr = "Rose";

	substituteLanguageControl("uiPink", en, de, es, fr);
}

function setUIGray() {
	var en = "Gray";
	var de = "Grau";
	var es = "Gris";
	var fr = "Gris";

	substituteLanguageControl("uiGray", en, de, es, fr);
}

function setUIWhite() {
	var en = "White";
	var de = "Weiß";
	var es = "Blanco";
	var fr = "Blanc";

	substituteLanguageControl("uiWhite", en, de, es, fr);
}

function setUIBlack() {
	var en = "Black";
	var de = "Schwarz";
	var es = "Negro";
	var fr = "Noir";

	substituteLanguageControl("uiBlack", en, de, es, fr);
}

function setUIClassicBlue() {
	var en = "Classic Blue";
	var de = "Klassisches Blau";
	var es = "Azul Clásico";
	var fr = "Bleu Classique";

	substituteLanguageControl("uiClassicBlue", en, de, es, fr);
}

function setUIClassicRed() {
	var en = "Classic Red";
	var de = "Klassisches Rot";
	var es = "Rojo Clásico";
	var fr = "Rouge Classique";

	substituteLanguageControl("uiClassicRed", en, de, es, fr);
}

function setUIClassicGreen() {
	var en = "Classic Green";
	var de = "Klassisches Grün";
	var es = "Verde Clásico";
	var fr = "Vert Classique";

	substituteLanguageControl("uiClassicGreen", en, de, es, fr);
}

function setUIClassicPurple() {
	var en = "Classic Purple";
	var de = "Klassisches Lila";
	var es = "Púrpura Clásico";
	var fr = "Violet Classique";

	substituteLanguageControl("uiClassicPurple", en, de, es, fr);
}

function setUIClassicYellow() {
	var en = "Classic Yellow";
	var de = "Klassisches Gelb";
	var es = "Amarillo Clásico";
	var fr = "Jaune Classique";

	substituteLanguageControl("uiClassicYellow", en, de, es, fr);
}

function setUIHeaderSection(){
	setUITitle();
	setUISubTitle();
	setUIMove();
	setUIActions();
}

function setUITitle() {
	var en = "Title";
	var de = "Titel";
	var es = "Título";
	var fr = "Titre";

	substituteLanguageControl("uiTitle", en, de, es, fr);
}

function setUISubTitle() {
	var en = "Sub-Title";
	var de = "Untertitel";
	var es = "Subtitular";
	var fr = "Sous-titre";

	substituteLanguageControl("uiSubTitle", en, de, es, fr);
}

function setUIMove() {
	var en = "Move";
	var de = "Bewegen";
	var es = "Mover";
	var fr = "Se déplacer";

	substituteLanguageControl("uiMove", en, de, es, fr);
}

function setUIActions() {
	var en = "Actions";
	var de = "Aktionen";
	var es = "Comportamiento";
	var fr = "Actions";

	substituteLanguageControl("uiAction", en, de, es, fr);
}

function setUIImageSection(){
	setUIBackground();
	setUIBackgroundList();
	setUIAvatar();
	setUIAvatarList();
}

function setUIBackground() {
	var en = "Background";
	var de = "Hintergrund";
	var es = "Fondo";
	var fr = "Arrière-plan";

	substituteLanguageControl("uiBackground", en, de, es, fr);
}

function setUIBackgroundList(){
	
	//colors are handled in setUIBorderList()
	setUITransparent();
}





function setUITransparent() {
	var en = "Transparent";
	var de = "Transparent";
	var es = "Transparente";
	var fr = "Transparent";

	substituteLanguageControl("uiTransparent", en, de, es, fr);
}

function setUIAvatar() {
	var en = "Avatar";
	var de = "Benutzerbild";
	var es = "Avatar";
	var fr = "Avatar";

	substituteLanguageControl("uiAvatar", en, de, es, fr);
}

function setUIAvatarList(){
	setUIDefault();
	setUIRemote();
	setUILocal();
}

function setUIDefault() {
	var en = "Default";
	var de = "Standard";
	var es = "Por defecto";
	var fr = "Défaut";

	substituteLanguageControl("uiDefault", en, de, es, fr);
}

function setUIRemote() {
	var en = "Remote";
	var de = "Fernbedienung";
	var es = "Remoto";
	var fr = "Télécommande";

	substituteLanguageControl("uiRemote", en, de, es, fr);
}

function setUILocal() {
	var en = "Local";
	var de = "Lokal";
	var es = "Local";
	var fr = "Local";

	substituteLanguageControl("uiLocal", en, de, es, fr);
}

function setUIStatsSection(){
	setUIStatsHelp();
	setUIStats();
}

function setUIStatsHelp(){
	
	setUIDiceTypes();
	setUILanguageControlStar();
	setUILanguageControlBlue();
	setUILanguageControlRed();
	setUILanguageControlGreen();
	setUILanguageControlOrange();
	setUILanguageControlPurple();
	
	setUIModifiers();
	setUILanguageControlMelee();
	setUILanguageControlMissile();
	setUILanguageControlMagic();
	setUILanguageControlRange();
	setUILanguageControlAction();
	setUILanguageControlMove();
	setUILanguageControlShield();
	setUILanguageControlHeart();
	setUILanguageControlPotion();
}

function setUIStats(){
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

function setUIDiceTypes() {
	var en = "Dice Types";
	var de = "Würfeltypen";
	var es = "Tipos de dados";
	var fr = "Types de dés";

	substituteLanguageControl("uiDiceTypes", en, de, es, fr);
}

function setUILanguageControlStar() {
	var en = "Star: 1ST";
	var de = "Star: 1ST";
	var es = "Estrella: 1ES";
	var fr = "Star: 1ST";

	substituteLanguageControl("controlStar", en, de, es, fr);
}

function setUILanguageControlBlue() {
	var en = "Blue: 1B";
	var de = "Blue: 1B";
	var es = "Azul: 1A";
	var fr = "Blue: 1B";

	substituteLanguageControl("controlBlue", en, de, es, fr);
}

function setUILanguageControlRed() {
	var en = "Red: 1R";
	var de = "Red: 1R";
	var es = "Rojo: 1R";
	var fr = "Red: 1R";

	substituteLanguageControl("controlRed", en, de, es, fr);
}

function setUILanguageControlGreen() {
	var en = "Green: 1G";
	var de = "Green: 1G";
	var es = "Verde: 1V";
	var fr = "Green: 1G";

	substituteLanguageControl("controlGreen", en, de, es, fr);
}

function setUILanguageControlOrange() {
	var en = "Orange: 1O";
	var de = "Orange: 1O";
	var es = "Naranja: 1N";
	var fr = "Orange: 1O";

	substituteLanguageControl("controlOrange", en, de, es, fr);
}

function setUILanguageControlPurple() {
	var en = "Purple: 1P";
	var de = "Purple: 1P";
	var es = "Morado: 1M";
	var fr = "Purple: 1P";

	substituteLanguageControl("controlPurple", en, de, es, fr);
}

function setUIModifiers() {
	var en = "Modifiers";
	var de = "Modifikatoren";
	var es = "Modificadores";
	var fr = "Modificateurs";

	substituteLanguageControl("uiModifiers", en, de, es, fr);
}

function setUILanguageControlMelee() {
	var en = "Melee: 1SW";
	var de = "Melee: 1SW";
	var es = "Cuerpo a Cuerpo: 1CC";
	var fr = "Melee: 1SW";

	substituteLanguageControl("controlMelee", en, de, es, fr);
}

function setUILanguageControlMissile() {
	var en = "Missile: 1MI";
	var de = "Missile: 1MI";
	var es = "Distancia: 1DI";
	var fr = "Missile: 1MI";

	substituteLanguageControl("controlMissile", en, de, es, fr);
}

function setUILanguageControlMagic() {
	var en = "Magic: 1MA";
	var de = "Magic: 1MA";
	var es = "Magico: 1MA";
	var fr = "Magic: 1MA";

	substituteLanguageControl("controlMagic", en, de, es, fr);
}

function setUILanguageControlRange() {
	var en = "Range: 1RG";
	var de = "Range: 1RG";
	var es = "Alcance: 1AL";
	var fr = "Range: 1RG";

	substituteLanguageControl("controlRange", en, de, es, fr);
}

function setUILanguageControlAction() {
	var en = "Action: 1AC";
	var de = "Action: 1AC";
	var es = "Accion: 1AC";
	var fr = "Action: 1AC";

	substituteLanguageControl("controlAction", en, de, es, fr);
}

function setUILanguageControlMove() {
	var en = "Move: 1MO";
	var de = "Move: 1MO";
	var es = "Movimiento: 1MO";
	var fr = "Move: 1MO";

	substituteLanguageControl("controlMove", en, de, es, fr);
}

function setUILanguageControlShield() {
	var en = "Shield: 0SH";
	var de = "Shield: 0SH";
	var es = "Escudo: 0EC";
	var fr = "Shield: 0SH";

	substituteLanguageControl("controlShield", en, de, es, fr);
}

function setUILanguageControlHeart() {
	var en = "Heart: 1HE";
	var de = "Heart: 1HE";
	var es = "Herida: 1HE";
	var fr = "Heart: 1HE";

	substituteLanguageControl("controlHeart", en, de, es, fr);
}

function setUILanguageControlPotion() {
	var en = "Potion: 1PO";
	var de = "Potion: 1PO";
	var es = "Pocion: 1PO";
	var fr = "Potion: 1PO";

	substituteLanguageControl("controlPotion", en, de, es, fr);
}

function setUILanguageControlSTR() {
	var en = "STR ";
	var de = "STR ";
	var es = "FUE ";
	var fr = "STR ";

	substituteLanguageControl("controlSTR", en, de, es, fr);
}

function setUILanguageControlARM() {
	var en = "ARM ";
	var de = "ARM ";
	var es = "ARM ";
	var fr = "ARM ";

	substituteLanguageControl("controlARM", en, de, es, fr);
}

function setUILanguageControlRNG() {
	var en = "RNG ";
	var de = "RNG ";
	var es = "AL ";
	var fr = "RNG ";

	substituteLanguageControl("controlRNG", en, de, es, fr);
}

function setUILanguageControlWILL() {
	var en = "WILL ";
	var de = "WILL ";
	var es = "VOL ";
	var fr = "WILL ";

	substituteLanguageControl("controlWILL", en, de, es, fr);
}

function setUILanguageControlDEX() {
	var en = "DEX ";
	var de = "DEX ";
	var es = "DES ";
	var fr = "DEX ";

	substituteLanguageControl("controlDEX", en, de, es, fr);
}

function setUILanguageControlWounds() {
	var en = "Wounds ";
	var de = "Wounds ";
	var es = "Heridas ";
	var fr = "Wounds ";

	substituteLanguageControl("controlWounds", en, de, es, fr);
}

function setUILanguageControlSkullPoints() {
	var en = "Skull Points ";
	var de = "Skull Points ";
	var es = "Puntos del Cráneo ";
	var fr = "Skull Points ";

	substituteLanguageControl("controlSkullPoints", en, de, es, fr);
}

function setUILanguageControlPotions() {
	var en = "Potions ";
	var de = "Potions ";
	var es = "Pociones ";
	var fr = "Potions ";

	substituteLanguageControl("controlPotions", en, de, es, fr);
}

function setUILanguageControlPetCost() {
	var en = "Pet Cost ";
	var de = "Pet Cost ";
	var es = "Costo de Mascota ";
	var fr = "Pet Cost ";

	substituteLanguageControl("controlPetCost", en, de, es, fr);
}

function setUIKeywordSection(){
	setUIAffinity();
	setUIAffinityList();
	setUIKeywords();
}

function setUIAffinity() {
	var en = "Affinity";
	var de = "Affinität";
	var es = "Afinidad";
	var fr = "Affinité";

	substituteLanguageControl("uiAffinity", en, de, es, fr);
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
	var en = "Amethyst";
	var de = "Amethyst";
	var es = "Amatista";
	var fr = "Amethyst";

	substituteLanguageControl("uiAmethyst", en, de, es, fr);
}

function setUIAmethystCitrine() {
	var en = "Amethyst Amethyst";
	var de = "Amethyst Amethyst";
	var es = "Amatista Citrino";
	var fr = "Amethyst Amethyst";

	substituteLanguageControl("uiAmethystCitrine", en, de, es, fr);
}

function setUIAmethystEmerald() {
	var en = "Amethyst Emerald";
	var de = "Amethyst Emerald";
	var es = "Amatista Esmeralda";
	var fr = "Amethyst Emerald";

	substituteLanguageControl("uiAmethystEmerald", en, de, es, fr);
}

function setUIAmethystRuby() {
	var en = "Amethyst Ruby";
	var de = "Amethyst Ruby";
	var es = "Amatista Rubi";
	var fr = "Amethyst Ruby";

	substituteLanguageControl("uiAmethystRuby", en, de, es, fr);
}

function setUIAmethystSapphire() {
	var en = "Amethyst Sapphire";
	var de = "Amethyst Sapphire";
	var es = "Amatista Zafiro";
	var fr = "Amethyst Sapphire";

	substituteLanguageControl("uiAmethystSapphire", en, de, es, fr);
}

function setUICitrine() {
	var en = "Citrine";
	var de = "Citrine";
	var es = "Citrino";
	var fr = "Citrine";

	substituteLanguageControl("uiCitrine", en, de, es, fr);
}

function setUICitrineAmethyst() {
	var en = "Citrine Amethyst";
	var de = "Citrine Amethyst";
	var es = "Citrino Amatista";
	var fr = "Citrine Amethyst";

	substituteLanguageControl("uiCitrineAmethyst", en, de, es, fr);
}

function setUICitrineEmerald() {
	var en = "Citrine Emerald";
	var de = "Citrine Emerald";
	var es = "Citrino Esmeralda";
	var fr = "Citrine Emerald";

	substituteLanguageControl("uiCitrineEmerald", en, de, es, fr);
}

function setUICitrineRuby() {
	var en = "Citrine Ruby";
	var de = "Citrine Ruby";
	var es = "Citrino Rubi";
	var fr = "Citrine Ruby";

	substituteLanguageControl("uiCitrineRuby", en, de, es, fr);
}

function setUICitrineSapphire() {
	var en = "Citrine Sapphire";
	var de = "Citrine Sapphire";
	var es = "Citrino Zafiro";
	var fr = "Citrine Sapphire";

	substituteLanguageControl("uiCitrineSapphire", en, de, es, fr);
}

function setUIEmerald() {
	var en = "Emerald";
	var de = "Emerald";
	var es = "Esmeralda";
	var fr = "Emerald";

	substituteLanguageControl("uiEmerald", en, de, es, fr);
}

function setUIEmeraldAmethyst() {
	var en = "Emerald Amethyst";
	var de = "Emerald Amethyst";
	var es = "Esmeralda Amatista";
	var fr = "Emerald Amethyst";

	substituteLanguageControl("uiEmeraldAmethyst", en, de, es, fr);
}

function setUIEmeraldCitrine() {
	var en = "Emerald Citrine";
	var de = "Emerald Citrine";
	var es = "Esmeralda Citrino";
	var fr = "Emerald Citrine";

	substituteLanguageControl("uiEmeraldCitrine", en, de, es, fr);
}

function setUIEmeraldRuby() {
	var en = "Emerald Ruby";
	var de = "Emerald Ruby";
	var es = "Esmeralda Rubi";
	var fr = "Emerald Ruby";

	substituteLanguageControl("uiEmeraldRuby", en, de, es, fr);
}

function setUIEmeraldSapphire() {
	var en = "Emerald Sapphire";
	var de = "Emerald Sapphire";
	var es = "Esmeralda Zafiro";
	var fr = "Emerald Sapphire";

	substituteLanguageControl("uiEmeraldSapphire", en, de, es, fr);
}

function setUIRuby() {
	var en = "Ruby";
	var de = "Ruby";
	var es = "Rubi";
	var fr = "Ruby";

	substituteLanguageControl("uiRuby", en, de, es, fr);
}

function setUIRubyAmethyst() {
	var en = "Ruby Amethyst";
	var de = "Ruby Amethyst";
	var es = "Rubi Amatista";
	var fr = "Ruby Amethyst";

	substituteLanguageControl("uiRubyAmethyst", en, de, es, fr);
}

function setUIRubyCitrine() {
	var en = "Ruby Citrine";
	var de = "Ruby Citrine";
	var es = "Rubi Citrino";
	var fr = "Ruby Citrine";

	substituteLanguageControl("uiRubyCitrine", en, de, es, fr);
}

function setUIRubyEmerald() {
	var en = "Ruby Emerald";
	var de = "Ruby Emerald";
	var es = "Rubi Esmeralda";
	var fr = "Ruby Emerald";

	substituteLanguageControl("uiRubyEmerald", en, de, es, fr);
}

function setUIRubySapphire() {
	var en = "Ruby Sapphire";
	var de = "Ruby Sapphire";
	var es = "Rubi Zafiro";
	var fr = "Ruby Sapphire";

	substituteLanguageControl("uiRubySapphire", en, de, es, fr);
}

function setUISapphire() {
	var en = "Sapphire";
	var de = "Sapphire";
	var es = "Zafiro";
	var fr = "Sapphire";

	substituteLanguageControl("uiSapphire", en, de, es, fr);
}

function setUISapphireAmethyst() {
	var en = "Sapphire Amethyst";
	var de = "Sapphire Amethyst";
	var es = "Zafiro Amatista";
	var fr = "Sapphire Amethyst";

	substituteLanguageControl("uiSapphireAmethyst", en, de, es, fr);
}

function setUISapphireCitrine() {
	var en = "Sapphire Citrine";
	var de = "Sapphire Citrine";
	var es = "Zafiro Citrino";
	var fr = "Sapphire Citrine";

	substituteLanguageControl("uiSapphireCitrine", en, de, es, fr);
}

function setUISapphireEmerald() {
	var en = "Sapphire Emerald";
	var de = "Sapphire Emerald";
	var es = "Zafiro Esmeralda";
	var fr = "Sapphire Emerald";

	substituteLanguageControl("uiSapphireEmerald", en, de, es, fr);
}

function setUISapphireRuby() {
	var en = "Sapphire Ruby";
	var de = "Sapphire Ruby";
	var es = "Zafiro Rubi";
	var fr = "Sapphire Ruby";

	substituteLanguageControl("uiSapphireRuby", en, de, es, fr);
}

function setUIAllAffinity() {
	var en = "All Affinity";
	var de = "Alle Affinität";
	var es = "Toda la afinidad";
	var fr = "Toute Affinité";

	substituteLanguageControl("uiAllAffinity", en, de, es, fr);
}

function setUIAll() {
	var en = "All";
	var de = "Alle";
	var es = "Todo";
	var fr = "Tout";

	substituteLanguageControl("uiAll", en, de, es, fr);
}

function setUINone() {
	var en = "None";
	var de = "Keiner";
	var es = "Ninguno";
	var fr = "Aucun";

	substituteLanguageControl("uiNone", en, de, es, fr);
}

function setUIKeywords() {
	var en = "Keywords";
	var de = "Schlüsselwörter";
	var es = "Palabras clave";
	var fr = "Mots clés";

	substituteLanguageControl("uiKeywords", en, de, es, fr);
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
	var en = "Strength: STR";
	var de = "Strength: STR";
	var es = "Fuerza: FUE";
	var fr = "Strength: STR";

	substituteLanguageControl("controlStrengthSTR", en, de, es, fr);
}

function setUILanguageControlArmorARM() {
	var en = "Armor: ARM";
	var de = "Armor: ARM";
	var es = "Armadura: ARM";
	var fr = "Armor: ARM";

	substituteLanguageControl("controlArmorARM", en, de, es, fr);
}

function setUILanguageControlWillpowerWILL() {
	var en = "Willpower: WILL";
	var de = "Willpower: WILL";
	var es = "Fuerza de Voluntad: VOL";
	var fr = "Willpower: WILL";

	substituteLanguageControl("controlWillpowerWILL", en, de, es, fr);
}

function setUILanguageControlDexterityDEX() {
	var en = "Dexterity: DEX";
	var de = "Dexterity: DEX";
	var es = "Destreza: DES";
	var fr = "Dexterity: DEX";

	substituteLanguageControl("controlDexterityDEX", en, de, es, fr);
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
	var en = "Attack";
	var de = "Attacke";
	var es = "Ataque";
	var fr = "Attaque";

	substituteLanguageControl("uiAttack", en, de, es, fr);
}

function setUISupport() {
	var en = "Support";
	var de = "Unterstützung";
	var es = "Apoyo";
	var fr = "Soutien";

	substituteLanguageControl("uiSupport", en, de, es, fr);
}

function setUIOffensivePotion() {
	var en = "Offensive Potion";
	var de = "Angriffstrank";
	var es = "Poción ofensiva";
	var fr = "Potion offensive";

	substituteLanguageControl("uiOffensivePotion", en, de, es, fr);
}

function setUISupportPotion() {
	var en = "Support Potion";
	var de = "Unterstützungstrank";
	var es = "Poción de apoyo";
	var fr = "Potion de soutien";

	substituteLanguageControl("uiSupportPotion", en, de, es, fr);
}

function setUIEmergencyPotion() {
	var en = "Emergency Potion";
	var de = "Notfalltrank";
	var es = "Poción de emergencia";
	var fr = "Potion d'urgence";

	substituteLanguageControl("uiEmergencyPotion", en, de, es, fr);
}

function setUISpecial() {
	var en = "Special";
	var de = "Besonders";
	var es = "Especial";
	var fr = "Spécial";

	substituteLanguageControl("uiSpecial", en, de, es, fr);
}

function setUIListArcade() {
	var en = "---Arcade---";
	var de = "Arkade";
	var es = "Arcada";
	var fr = "Arcade";

	substituteLanguageControl("uiListArcade", en, de, es, fr);
}

function setUISignatureAttack() {
	var en = "Signature Attack";
	var de = "Signaturangriff";
	var es = "Ataque característico";
	var fr = "Attaque de signature";

	substituteLanguageControl("uiSignatureAttack", en, de, es, fr);
}

function setUISignatureSupport() {
	var en = "Signature Support";
	var de = "Signaturunterstützung";
	var es = "Soporte de firma";
	var fr = "Prise en charge des signatures";

	substituteLanguageControl("uiSignatureSupport", en, de, es, fr);
}

function setUIOverchargeAttack() {
	var en = "Overcharge Attack";
	var de = "Überladungsangriff";
	var es = "Ataque de sobrecarga";
	var fr = "Attaque de surcharge";

	substituteLanguageControl("uiOverchargeAttack", en, de, es, fr);
}

function setUIOverchargeSupport() {
	var en = "Overcharge Support";
	var de = "Überladungsunterstützung";
	var es = "Soporte de sobrecarga";
	var fr = "Prise en charge des surcharges";

	substituteLanguageControl("uiOverchargeSupport", en, de, es, fr);
}

function setUICost() {
	var en = "Cost";
	var de = "Kosten";
	var es = "Costo";
	var fr = "Coût";

	substituteLanguageControl("uiCost", en, de, es, fr);
}

function setUIName() {
	var en = "Name";
	var de = "Name";
	var es = "Nombre";
	var fr = "Nom";

	substituteLanguageControl("uiName", en, de, es, fr);
}

function setUIDefinition() {
	var en = "Definition";
	var de = "Definition";
	var es = "Definición";
	var fr = "Définition";

	substituteLanguageControl("uiDefinition", en, de, es, fr);
}

function setUIAddAbility() {
	var en = "Add Ability";
	var de = "Fähigkeit hinzufügen";
	var es = "Agregar habilidad";
	var fr = "Ajouter une capacité";

	substituteLanguageControl("uiAddAbility", en, de, es, fr);
}

//function setUIFlavorTextSection(){}

function setUICardModifierSection(){
	setUIDuplicateCard();
	setUIMoveCardUp();
	setUIMoveCardDown();
	setUIDeleteCard();
}

function setUIDuplicateCard() {
	var en = "Duplicate Card";
	var de = "Doppelte Karte";
	var es = "Duplicar Carte";
	var fr = "Carte en double";

	substituteLanguageControl("uiDuplicateCard", en, de, es, fr);
}

function setUIMoveCardUp() {
	var en = "Move Card Up";
	var de = "Karte nach oben verschieben";
	var es = "Mover tarjeta hacia arriba";
	var fr = "Déplacer la carte vers le haut";

	substituteLanguageControl("uiMoveCardUp", en, de, es, fr);
}

function setUIMoveCardDown() {
	var en = "Move Card Down";
	var de = "Karte nach unten bewegen";
	var es = "Mover tarjeta hacia abajo";
	var fr = "Déplacer la carte vers le bas";

	substituteLanguageControl("uiMoveCardDown", en, de, es, fr);
}

function setUIDeleteCard() {
	var en = "Delete Card";
	var de = "Karte löschen";
	var es = "Eliminar tarjeta";
	var fr = "Supprimer la carte";

	substituteLanguageControl("uiDeleteCard", en, de, es, fr);
}

function substituteLanguageControl(className, en, de, es, fr) {
	var elements = document.getElementsByClassName(className);
	for(var x=0; x < elements.length; x++) {
		var element = elements[x];
		var eValue = element.innerHTML;
			
		if(languageChoice == "en") {
			element.innerText = en;
		} else if(languageChoice == "de") {
			element.innerText = de;
		} else if(languageChoice == "es") {
			element.innerText = es;
		} else if(languageChoice == "fr") {
			element.innerText = fr;
		} else {
			element.innerText = en;
		}
	}
}

/**
 * Application main method.
 */
$(document).ready(function(){
//objects

  //Initialize mainMenu
  var promises = [];
  promises.push($.getJSON('./json/sde_keywords_english.json'));

  //resolve the templates
  $.when.apply($, promises).done(function(keywords){
      var mainMenu = new MainMenu();
      var keywordStore = new KeywordStore(keywords);
      var editorPain = new EditorPane();
      var sdeCreate = new CardContainer();
      keywordStore.setupKeywordsForm();
      $('.page').data('keywordStore',keywordStore);

      var card = new Card(false);
      card.initFirstCard();
  });

  //remove noscript block
  $('.noScript').remove();
});
