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
	
	//stripSymbolsFromKeywords();
	
	switchKeywordLanguages();
	
	applyLanguageToDefinitions();
	applyLanguageToDescriptions();
	
	setUILanguage();
	//updatebox();
}

function stripStatsFromKeywords() {
	if(languageChoice == "en") {
		stripStatsFromKeywordsEnglish();
	} else if(languageChoice == "de") {
		stripStatsFromKeywordsDeutch();
	} else if(languageChoice == "es") {
		stripStatsFromKeywordsEspanol();
	} else if(languageChoice == "fr") {
		stripStatsFromKeywordsFrancais();
	} else {
		stripStatsFromKeywordsEnglish();
	}
}

function stripStatsFromKeywordsEnglish() {
	stripStatFromKeywords('STR');
	stripStatFromKeywords('ARM');
	stripStatFromKeywords('WILL');
	stripStatFromKeywords('DEX');
}

function stripStatsFromKeywordsDeutch() {
	stripStatFromKeywords('STR');
	stripStatFromKeywords('RUS');
	stripStatFromKeywords('WILL');
	stripStatFromKeywords('DEX');
}

function stripStatsFromKeywordsEspanol() {
	stripStatFromKeywords('FUE');
	stripStatFromKeywords('ARM');
	stripStatFromKeywords('VOL');
	stripStatFromKeywords('DES');
}

function stripStatsFromKeywordsFrancais() {
	stripStatFromKeywords('FOR');
	stripStatFromKeywords('ARM');
	stripStatFromKeywords('VOL');
	stripStatFromKeywords('DEX');
}

function stripStatFromKeywords(stat) {
	var elements = document.getElementsByClassName(stat);
	while(elements.length > 0) {
		var element = elements[0];
		element.classList.remove('stat');
		element.classList.remove(stat);
	}
}

function stripSymbolsFromKeywords() {
	stripDiceFromKeywords();
	stripOffenseFromKeywords();
	stripModFromKeywords();
	
	stripKeySymoblsFromKeywords();
	stripImmunitiesFromKeywords();
	stripAffinitiesFromKeywords();
}

function stripDiceFromKeywords() {
	stripDiceFromKeywordsByColor('star');
	stripDiceFromKeywordsByColor('blue');
	stripDiceFromKeywordsByColor('red');
	stripDiceFromKeywordsByColor('green');
	stripDiceFromKeywordsByColor('orange');
	stripDiceFromKeywordsByColor('purple');
}

function stripDiceFromKeywordsByColor(color) {
	var elements = document.getElementsByClassName(color);
	for(var x = 0; x < elements.length; x++) {
		var element = elements[x];
		
		if(element.parentElement.classList.contains("definition") || element.parentElement.classList.contains("description")) {
			element.classList.remove('dice');
			element.classList.remove(color);
			if(color == 'star') {
				element.append(color.substr(0,2).toUpperCase());
			} else {
				element.append(color.substr(0,1).toUpperCase());
			}
		}
	}
}

function stripOffenseFromKeywords() {
	stripOffenseFromKeywordsByType('missile');
	stripOffenseFromKeywordsByType('magic');
	stripOffenseFromKeywordsByType('melee');
	stripOffenseFromKeywordsByType('range');
}

function stripOffenseFromKeywordsByType(type) {
	var elements = document.getElementsByClassName(type);
	for(var x = 0; x < elements.length; x++) {
		var element = elements[x];
		
		if(element.parentElement.classList.contains("definition") || element.parentElement.classList.contains("description")) {
			element.classList.remove('offense');
			element.classList.remove(type);
			element.append(type.substr(0,2).toUpperCase());
			x--;
		}
	}
}

function stripModFromKeywords() {
	stripModFromKeywordsByTarget('actionMod');
	stripModFromKeywordsByTarget('moveMod');
	stripModFromKeywordsByTarget('potionMod');
	stripModFromKeywordsByTarget('shieldMod');
	stripModFromKeywordsByTarget('heartMod');
}

function stripModFromKeywordsByTarget(target) {
	var elements = document.getElementsByClassName(target);
	for(var x = 0; x < elements.length; x++) {
		var element = elements[x];
		
		if(element.parentElement.classList.contains("definition") || element.parentElement.classList.contains("description")) {
			element.classList.remove(target);
			element.append(target.substr(0,2).toUpperCase());
			x--;
		}
	}
}

function stripKeySymoblsFromKeywords() {
	stripKeySymoblsFromKeywordsByType('AUGMENT');
	stripKeySymoblsFromKeywordsByType('DANGEROUS');
	stripKeySymoblsFromKeywordsByType('BANE');
	stripKeySymoblsFromKeywordsByType('HEX');
	stripKeySymoblsFromKeywordsByType('FIRE');
	stripKeySymoblsFromKeywordsByType('KNOCKDOWN');
	stripKeySymoblsFromKeywordsByType('ICE');
	stripKeySymoblsFromKeywordsByType('IMMOBILE');
	stripKeySymoblsFromKeywordsByType('POISON');
	stripKeySymoblsFromKeywordsByType('SLOW');
	stripKeySymoblsFromKeywordsByType('ALL');
}

function stripImmunitiesFromKeywords() {
	stripKeySymoblsFromKeywordsByType('IMMUNEBANE');
	stripKeySymoblsFromKeywordsByType('IMMUNEHEX');
	stripKeySymoblsFromKeywordsByType('IMMUNEFIRE');
	stripKeySymoblsFromKeywordsByType('IMMUNEKNOCKDOWN');
	stripKeySymoblsFromKeywordsByType('IMMUNEICE');
	stripKeySymoblsFromKeywordsByType('IMMUNEIMMOBILE');
	stripKeySymoblsFromKeywordsByType('IMMUNEPOISON');
	stripKeySymoblsFromKeywordsByType('IMMUNESLOW');
	stripKeySymoblsFromKeywordsByType('IMMUNEALL');
}

function stripKeySymoblsFromKeywordsByType(type) {
	var elements = document.getElementsByClassName(type);
	while(elements.length > 0) {
		var element = elements[0];
		element.classList.remove('keyword');
		element.classList.remove(type);
		//element.append(type.substr(0,2).toUpperCase());
		element.innerText = element.innerText.toUpperCase();
	}
}

function stripAffinitiesFromKeywords() {
	stripAffinitiesFromKeywordsByType('ALLAFFINITY');
	
	stripAffinitiesFromKeywordsByType('AMETHYST');
	stripAffinitiesFromKeywordsByType('AMETHYSTCITRINE');
	stripAffinitiesFromKeywordsByType('AMETHYSTEMERALD');
	stripAffinitiesFromKeywordsByType('AMETHYSTRUBY');
	stripAffinitiesFromKeywordsByType('AMETHYSTSAPPHIRE');
	
	stripAffinitiesFromKeywordsByType('CITRINE');
	stripAffinitiesFromKeywordsByType('CITRINEAMETHYST');
	stripAffinitiesFromKeywordsByType('CITRINEEMERALD');
	stripAffinitiesFromKeywordsByType('CITRINERUBY');
	stripAffinitiesFromKeywordsByType('CITRINESAPPHIRE');
	
	stripAffinitiesFromKeywordsByType('EMERALD');
	stripAffinitiesFromKeywordsByType('EMERALDAMETHYST');
	stripAffinitiesFromKeywordsByType('EMERALDCITRINE');
	stripAffinitiesFromKeywordsByType('EMERALDRUBY');
	stripAffinitiesFromKeywordsByType('EMERALDSAPPHIRE');
	
	stripAffinitiesFromKeywordsByType('RUBY');
	stripAffinitiesFromKeywordsByType('RUBYAMETHYST');
	stripAffinitiesFromKeywordsByType('RUBYCITRINE');
	stripAffinitiesFromKeywordsByType('RUBYEMERALD');
	stripAffinitiesFromKeywordsByType('RUBYSAPPHIRE');
	
	stripAffinitiesFromKeywordsByType('SAPPHIRE');
	stripAffinitiesFromKeywordsByType('SAPPHIREAMETHYST');
	stripAffinitiesFromKeywordsByType('SAPPHIRECITRINE');
	stripAffinitiesFromKeywordsByType('SAPPHIREEMERALD');
	stripAffinitiesFromKeywordsByType('SAPPHIRERUBY');
}

function stripAffinitiesFromKeywordsByType(type) {
	var elements = document.getElementsByClassName(type);
	for(var x = 0; x < elements.length; x++) {
		var element = elements[x];
		
		if(element.parentElement.classList.contains("definition") || element.parentElement.classList.contains("description")) {
			element.classList.remove('affinity');
			element.classList.remove(type);
			//element.append(type.substr(0,2).toUpperCase());
		//	element.innerText = type.toUpperCase();
			element.innerHTML = type.toUpperCase();
			x--;
		}
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
	
	var keywordStore = createKeywordStore(); //?
	
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

function addKeyword(displayKey,data) {
	if(data != undefined){
		//var lKey = displayKey.toLowerCase();
		var keyClass = resolveKeyClass(displayKey);

		//check to see if the keyword is already added, and if the display flag does not equal false
		if( data.displayBack !== false && data.displayBack !== 'false'  
		&& keyClass != null && keyClass != '' && $('.cardGroup.selected .card .keywords .'+keyClass.toUpperCase()).length ===0){
		  //console.log(displayKey,data);

		  var description = data.description;//data.get(keyClass.toUpperCase()).description;

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
				var backTemplate = '<div class="keyword definedKeyword '+keyClass.toUpperCase()+'" data-key="'+toCamelCaseLoop(displayKey)+'">'+
				'<span class="keyword '+translateToEnglish(keyClass.toUpperCase())+'"></span>'+
				'<span class="name">'+displayKey+'</span>:'+
				'<span class="description">'+parsedDescription+'</span>'+
				'</div>';

				var itemTemplate = '<div class="keyword '+keyClass.toUpperCase()+'" data-key="'+toCamelCaseLoop(displayKey)+'">'+
				'<span class="keyword '+translateToEnglish(keyClass.toUpperCase())+'"></span>'+
				'<span class="name">'+displayKey+'</span> '+
				'<span class="description">'+parsedDescription+'</span>'+
				'</div>';

				$(".cardGroup.selected .card .back .keywords").append(backTemplate);

				$(".cardGroup.selected .card .item .keywords").append(itemTemplate);
			}
		}
	}
}

function translateToEnglish(nonEnglish){
	var result = '';
	
	if(languageChoice == "en") {
		result = nonEnglish
	} else if(languageChoice == "de") {
		result = translateToEnglishFromDeutch(nonEnglish);
	} else if(languageChoice == "es") {
		result = translateToEnglishFromEspanol(nonEnglish);
	} else if(languageChoice == "fr") {
		result = translateToEnglishFromFrancais(nonEnglish);
	} else {
		result = nonEnglish
	}
		
	return result;
}

function translateToEnglishFromDeutch(nonEnglish){
	var result = '';
	
	if(nonEnglish == 'AUGMENT') {
		result = 'AUGMENT';
	} else if(nonEnglish == 'BANE') {
		result = 'BANE';
	} else if(nonEnglish == 'HEX') {
		result = 'HEX';
	} else if(nonEnglish == 'FIRE') {
		result = 'FIRE';
	} else if(nonEnglish == 'KNOCKDOWN') {
		result = 'KNOCKDOWN';
	} else if(nonEnglish == 'ICE') {
		result = 'ICE';
	} else if(nonEnglish == 'IMMOBILE') {
		result = 'IMMOBILE';
	} else if(nonEnglish == 'POISON') {
		result = 'POISON';
	} else if(nonEnglish == 'SLOW') {
		result = 'SLOW';
	} else if(nonEnglish == 'DANGEROUS') {
		result = 'DANGEROUS';
	} else if(nonEnglish == 'ALL') {
		result = 'ALL';
	} else if(nonEnglish == 'IMMUNEBANE') {
		result = 'IMMUNEBANE';
	} else if(nonEnglish == 'IMMUNEHEX') {
		result = 'IMMUNEHEX';
	} else if(nonEnglish == 'IMMUNEFIRE') {
		result = 'IMMUNEFIRE';
	} else if(nonEnglish == 'IMMUNEKNOCKDOWN') {
		result = 'IMMUNEKNOCKDOWN';
	} else if(nonEnglish == 'IMMUNEICE') {
		result = 'IMMUNEICE';
	} else if(nonEnglish == 'IMMUNEIMMOBILE') {
		result = 'IMMUNEIMMOBILE';
	} else if(nonEnglish == 'IMMUNEPOISON') {
		result = 'IMMUNEPOISON';
	} else if(nonEnglish == 'IMMUNESLOW') {
		result = 'IMMUNESLOW';
	} else if(nonEnglish == 'IMMUNEALL') {
		result = 'IMMUNEALL';
	} else if(nonEnglish == 'ALLAFFINITY') {
		result = 'ALLAFFINITY';
	} else if(nonEnglish == 'AMETHYST') {
		result = 'AMETHYST';
	} else if(nonEnglish == 'AMETHYSTCITRINE') {
		result = 'AMETHYSTCITRINE';
	} else if(nonEnglish == 'AMETHYSTEMERALD') {
		result = 'AMETHYSTEMERALD';
	} else if(nonEnglish == 'AMETHYSTRUBY') {
		result = 'AMETHYSTRUBY';
	} else if(nonEnglish == 'AMETHYSTSAPPHIRE') {
		result = 'AMETHYSTSAPPHIRE';
	} else if(nonEnglish == 'CITRINE') {
		result = 'CITRINE';
	} else if(nonEnglish == 'CITRINEAMETHYST') {
		result = 'CITRINEAMETHYST';
	} else if(nonEnglish == 'CITRINEEMERALD') {
		result = 'CITRINEEMERALD';
	} else if(nonEnglish == 'CITRINERUBY') {
		result = 'CITRINERUBY';
	} else if(nonEnglish == 'CITRINESAPPHIRE') {
		result = 'CITRINESAPPHIRE';
	} else if(nonEnglish == 'EMERALD') {
		result = 'EMERALD';
	} else if(nonEnglish == 'EMERALDAMETHYST') {
		result = 'EMERALDAMETHYST';
	} else if(nonEnglish == 'EMERALDCITRINE') {
		result = 'EMERALDCITRINE';
	} else if(nonEnglish == 'EMERALDRUBY') {
		result = 'EMERALDRUBY';
	} else if(nonEnglish == 'EMERALDSAPPHIRE') {
		result = 'EMERALDSAPPHIRE';
	} else if(nonEnglish == 'RUBY') {
		result = 'RUBY';
	} else if(nonEnglish == 'RUBYAMETHYST') {
		result = 'RUBYAMETHYST';
	} else if(nonEnglish == 'RUBYCITRINE') {
		result = 'RUBYCITRINE';
	} else if(nonEnglish == 'RUBYEMERALD') {
		result = 'RUBYEMERALD';
	} else if(nonEnglish == 'RUBYSAPPHIRE') {
		result = 'RUBYSAPPHIRE';
	} else if(nonEnglish == 'SAPPHIRE') {
		result = 'SAPPHIRE';
	} else if(nonEnglish == 'SAPPHIREAMETHYST') {
		result = 'SAPPHIREAMETHYST';
	} else if(nonEnglish == 'SAPPHIRECITRINE') {
		result = 'SAPPHIRECITRINE';
	} else if(nonEnglish == 'SAPPHIREEMERALD') {
		result = 'SAPPHIREEMERALD';
	} else if(nonEnglish == 'SAPPHIRERUBY') {
		result = 'SAPPHIRERUBY';
	}
		
	return result;
}

function translateToEnglishFromEspanol(nonEnglish){
	var result = '';
	
	if(nonEnglish == 'AUMENTO') {
		result = 'AUGMENT';
	} else if(nonEnglish == 'ESTRAGO') {
		result = 'BANE';
	} else if(nonEnglish == 'MALEFICIO') {
		result = 'HEX';
	} else if(nonEnglish == 'FUEGO') {
		result = 'FIRE';
	} else if(nonEnglish == 'DERRIBO') {
		result = 'KNOCKDOWN';
	} else if(nonEnglish == 'HIELO') {
		result = 'ICE';
	} else if(nonEnglish == 'INMOVIL') {
		result = 'IMMOBILE';
	} else if(nonEnglish == 'VENENO') {
		result = 'POISON';
	} else if(nonEnglish == 'RALENTIZAR') {
		result = 'SLOW';
	} else if(nonEnglish == 'PELIGROSO') {
		result = 'DANGEROUS';
	} else if(nonEnglish == 'TODO') {
		result = 'ALL';
	} else if(nonEnglish == 'INMUNEAESTRAGO') {
		result = 'IMMUNEBANE';
	} else if(nonEnglish == 'INMUNEAMALEFICIO') {
		result = 'IMMUNEHEX';
	} else if(nonEnglish == 'INMUNEAFUEGO') {
		result = 'IMMUNEFIRE';
	} else if(nonEnglish == 'INMUNEADERRIBO') {
		result = 'IMMUNEKNOCKDOWN';
	} else if(nonEnglish == 'INMUNEAHIELO') {
		result = 'IMMUNEICE';
	} else if(nonEnglish == 'INMUNEAINMOVIL') {
		result = 'IMMUNEIMMOBILE';
	} else if(nonEnglish == 'INMUNEAVENENO') {
		result = 'IMMUNEPOISON';
	} else if(nonEnglish == 'INMUNEARALENTIZAR') {
		result = 'IMMUNESLOW';
	} else if(nonEnglish == 'INMUNEATODO') {
		result = 'IMMUNEALL';
	} else if(nonEnglish == 'AFINIDADATODO') {
		result = 'ALLAFFINITY';
	} else if(nonEnglish == 'AMATISTA') {
		result = 'AMETHYST';
	} else if(nonEnglish == 'AMATISTACITRINO') {
		result = 'AMETHYSTCITRINE';
	} else if(nonEnglish == 'AMATISTAESMERALDA') {
		result = 'AMETHYSTEMERALD';
	} else if(nonEnglish == 'AMATISTARUBI') {
		result = 'AMETHYSTRUBY';
	} else if(nonEnglish == 'AMATISTAZAFIRO') {
		result = 'AMETHYSTSAPPHIRE';
	} else if(nonEnglish == 'CITRINO') {
		result = 'CITRINE';
	} else if(nonEnglish == 'CITRINOAMATISTA') {
		result = 'CITRINEAMETHYST';
	} else if(nonEnglish == 'CITRINOESMERALDA') {
		result = 'CITRINEEMERALD';
	} else if(nonEnglish == 'CITRINORUBI') {
		result = 'CITRINERUBY';
	} else if(nonEnglish == 'CITRINOZAFIRO') {
		result = 'CITRINESAPPHIRE';
	} else if(nonEnglish == 'ESMERALDA') {
		result = 'EMERALD';
	} else if(nonEnglish == 'ESMERALDAAMATISTA') {
		result = 'EMERALDAMETHYST';
	} else if(nonEnglish == 'ESMERALDACITRINO') {
		result = 'EMERALDCITRINE';
	} else if(nonEnglish == 'ESMERALDARUBI') {
		result = 'EMERALDRUBY';
	} else if(nonEnglish == 'ESMERALDAZAFIRO') {
		result = 'EMERALDSAPPHIRE';
	} else if(nonEnglish == 'RUBI') {
		result = 'RUBY';
	} else if(nonEnglish == 'RUBIAMATISTA') {
		result = 'RUBYAMETHYST';
	} else if(nonEnglish == 'RUBICITRINO') {
		result = 'RUBYCITRINE';
	} else if(nonEnglish == 'RUBIESMERALDA') {
		result = 'RUBYEMERALD';
	} else if(nonEnglish == 'RUBIZAFIRO') {
		result = 'RUBYSAPPHIRE';
	} else if(nonEnglish == 'ZAFIRO') {
		result = 'SAPPHIRE';
	} else if(nonEnglish == 'ZAFIROAMATISTA') {
		result = 'SAPPHIREAMETHYST';
	} else if(nonEnglish == 'ZAFIROCITRINO') {
		result = 'SAPPHIRECITRINE';
	} else if(nonEnglish == 'ZAFIROESMERALDA') {
		result = 'SAPPHIREEMERALD';
	} else if(nonEnglish == 'ZAFIRORUBI') {
		result = 'SAPPHIRERUBY';
	}
		
	return result;
}

function translateToEnglishFromFrancais(nonEnglish){
	var result = '';
	
	if(nonEnglish == 'AUGMENT') {
		result = 'AUGMENT';
	} else if(nonEnglish == 'BANE') {
		result = 'BANE';
	} else if(nonEnglish == 'HEX') {
		result = 'HEX';
	} else if(nonEnglish == 'FIRE') {
		result = 'FIRE';
	} else if(nonEnglish == 'KNOCKDOWN') {
		result = 'KNOCKDOWN';
	} else if(nonEnglish == 'ICE') {
		result = 'ICE';
	} else if(nonEnglish == 'IMMOBILE') {
		result = 'IMMOBILE';
	} else if(nonEnglish == 'POISON') {
		result = 'POISON';
	} else if(nonEnglish == 'SLOW') {
		result = 'SLOW';
	} else if(nonEnglish == 'DANGEROUS') {
		result = 'DANGEROUS';
	} else if(nonEnglish == 'ALL') {
		result = 'ALL';
	} else if(nonEnglish == 'IMMUNEBANE') {
		result = 'IMMUNEBANE';
	} else if(nonEnglish == 'IMMUNEHEX') {
		result = 'IMMUNEHEX';
	} else if(nonEnglish == 'IMMUNEFIRE') {
		result = 'IMMUNEFIRE';
	} else if(nonEnglish == 'IMMUNEKNOCKDOWN') {
		result = 'IMMUNEKNOCKDOWN';
	} else if(nonEnglish == 'IMMUNEICE') {
		result = 'IMMUNEICE';
	} else if(nonEnglish == 'IMMUNEIMMOBILE') {
		result = 'IMMUNEIMMOBILE';
	} else if(nonEnglish == 'IMMUNEPOISON') {
		result = 'IMMUNEPOISON';
	} else if(nonEnglish == 'IMMUNESLOW') {
		result = 'IMMUNESLOW';
	} else if(nonEnglish == 'IMMUNEALL') {
		result = 'IMMUNEALL';
	} else if(nonEnglish == 'ALLAFFINITY') {
		result = 'ALLAFFINITY';
	} else if(nonEnglish == 'AMETHYST') {
		result = 'AMETHYST';
	} else if(nonEnglish == 'AMETHYSTCITRINE') {
		result = 'AMETHYSTCITRINE';
	} else if(nonEnglish == 'AMETHYSTEMERALD') {
		result = 'AMETHYSTEMERALD';
	} else if(nonEnglish == 'AMETHYSTRUBY') {
		result = 'AMETHYSTRUBY';
	} else if(nonEnglish == 'AMETHYSTSAPPHIRE') {
		result = 'AMETHYSTSAPPHIRE';
	} else if(nonEnglish == 'CITRINE') {
		result = 'CITRINE';
	} else if(nonEnglish == 'CITRINEAMETHYST') {
		result = 'CITRINEAMETHYST';
	} else if(nonEnglish == 'CITRINEEMERALD') {
		result = 'CITRINEEMERALD';
	} else if(nonEnglish == 'CITRINERUBY') {
		result = 'CITRINERUBY';
	} else if(nonEnglish == 'CITRINESAPPHIRE') {
		result = 'CITRINESAPPHIRE';
	} else if(nonEnglish == 'EMERALD') {
		result = 'EMERALD';
	} else if(nonEnglish == 'EMERALDAMETHYST') {
		result = 'EMERALDAMETHYST';
	} else if(nonEnglish == 'EMERALDCITRINE') {
		result = 'EMERALDCITRINE';
	} else if(nonEnglish == 'EMERALDRUBY') {
		result = 'EMERALDRUBY';
	} else if(nonEnglish == 'EMERALDSAPPHIRE') {
		result = 'EMERALDSAPPHIRE';
	} else if(nonEnglish == 'RUBY') {
		result = 'RUBY';
	} else if(nonEnglish == 'RUBYAMETHYST') {
		result = 'RUBYAMETHYST';
	} else if(nonEnglish == 'RUBYCITRINE') {
		result = 'RUBYCITRINE';
	} else if(nonEnglish == 'RUBYEMERALD') {
		result = 'RUBYEMERALD';
	} else if(nonEnglish == 'RUBYSAPPHIRE') {
		result = 'RUBYSAPPHIRE';
	} else if(nonEnglish == 'SAPPHIRE') {
		result = 'SAPPHIRE';
	} else if(nonEnglish == 'SAPPHIREAMETHYST') {
		result = 'SAPPHIREAMETHYST';
	} else if(nonEnglish == 'SAPPHIRECITRINE') {
		result = 'SAPPHIRECITRINE';
	} else if(nonEnglish == 'SAPPHIREEMERALD') {
		result = 'SAPPHIREEMERALD';
	} else if(nonEnglish == 'SAPPHIRERUBY') {
		result = 'SAPPHIRERUBY';
	}
		
	return result;
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
    var symbolDescription = findSymbols(description);
    var immunityDescription = findImmunities(symbolDescription);
    var affinityDescription = findAffinities(immunityDescription);
    var diceDescription = findDice(affinityDescription);
    var statDescription = findStats(diceDescription);
    return statDescription;
  };
  
  function findSymbols(text){
	var secondaryRe;
	var en = /\b(AUGMENT|BANE|HEX|FIRE|KNOCKDOWN|ICE|IMMOBILE|POISON|SLOW|DANGEROUS)\b/g;
    var de = /\b(AUGMENT|BANE|HEX|FIRE|KNOCKDOWN|ICE|IMMOBILE|POISON|SLOW|DANGEROUS)\b/g;
    var es = /\b(AUMENTO|ESTRAGO|MALEFICIO|FUEGO|DERRIBO|HIELO|INMOVIL|VENENO|RALENTIZAR|PELIGROSO)\b/g;
    var fr = /\b(AUGMENT|BANE|HEX|FIRE|KNOCKDOWN|ICE|IMMOBILE|POISON|SLOW|DANGEROUS)\b/g;
    
	if(languageChoice == "en") {
		secondaryRe = en;
		text = replaceEnglishSymbols(secondaryRe, text);
	} else if(languageChoice == "de") {
		secondaryRe = de;
		text = replaceDeutchSymbols(secondaryRe, text);
	} else if(languageChoice == "es") {
		secondaryRe = es;
		text = replaceEspanolSymbols(secondaryRe, text);
	} else if(languageChoice == "fr") {
		secondaryRe = fr;
		text = replaceFrancaisSymbols(secondaryRe, text);
	} else {
		secondaryRe = en;
		text = replaceEnglishSymbols(secondaryRe, text);
	}
	/*
	text = text.replace(this.re,function(match){
		var displayKey = this.lookup[match.toLowerCase()];
		var keyClass = this.resolveKeyClass(displayKey);
		return '<span class="keyword '+keyClass.toUpperCase()+'" data-key="'+toCamelCaseLoop(dataKey)+'">'+displayKey+'</span>';
    }.bind(this));
	*/
	return text;
  }
    
  function replaceEnglishSymbols(secondaryRe, text) {
	return text.replace(secondaryRe,function(match){
		var result = '<span class="keyword '+match.toUpperCase()+'" data-key="'+toCamelCaseLoop(match)+'">'+toCamelCaseLoop(match)+'</span>';
		
		return result;
    }.bind(this));
}

function replaceDeutchSymbols(secondaryRe, text) {
	var translation = '';
	return text.replace(secondaryRe,function(match){
		if(match == 'AUGMENT') {
			translation = 'AUGMENT';
		} else if(match == 'BANE') {
			translation = 'BANE';
		} else if(match == 'HEX') {
			translation = 'HEX';
		} else if(match == 'FIRE') {
			translation = 'FIRE';
		} else if(match == 'KNOCKDOWN') {
			translation = 'KNOCKDOWN';
		} else if(match == 'ICE') {
			translation = 'ICE';
		} else if(match == 'IMMOBILE') {
			translation = 'IMMOBILE';
		} else if(match == 'POISON') {
			translation = 'POISON';
		} else if(match == 'SLOW') {
			translation = 'SLOW';
		} else if(match == 'DANGEROUS') {
			translation = 'DANGEROUS';
		}
		
		var result = '<span class="keyword '+translation.toUpperCase()+'" data-key="'+toCamelCaseLoop(match)+'">'+toCamelCaseLoop(match)+'</span>';
		
		return result;
    }.bind(this));
}

function replaceEspanolSymbols(secondaryRe, text) {
	var translation = '';
	return text.replace(secondaryRe,function(match){
		if(match == 'AUMENTO') {
			translation = 'AUGMENT';
		} else if(match == 'ESTRAGO') {
			translation = 'BANE';
		} else if(match == 'MALEFICIO') {
			translation = 'HEX';
		} else if(match == 'FUEGO') {
			translation = 'FIRE';
		} else if(match == 'DERRIBO') {
			translation = 'KNOCKDOWN';
		} else if(match == 'HIELO') {
			translation = 'ICE';
		} else if(match == 'INMOVIL') {
			translation = 'IMMOBILE';
		} else if(match == 'VENENO') {
			translation = 'POISON';
		} else if(match == 'RALENTIZAR') {
			translation = 'SLOW';
		} else if(match == 'PELIGROSO') {
			translation = 'DANGEROUS';
		}
		
		var result = '<span class="keyword '+translation.toUpperCase()+'" data-key="'+toCamelCaseLoop(match)+'">'+toCamelCaseLoop(match)+'</span>';
		
		return result;
    }.bind(this));
}

function replaceFrancaisSymbols(secondaryRe, text) {
	var translation = '';
	return text.replace(secondaryRe,function(match){
		if(match == 'AUGMENT') {
			translation = 'AUGMENT';
		} else if(match == 'BANE') {
			translation = 'BANE';
		} else if(match == 'HEX') {
			translation = 'HEX';
		} else if(match == 'FIRE') {
			translation = 'FIRE';
		} else if(match == 'KNOCKDOWN') {
			translation = 'KNOCKDOWN';
		} else if(match == 'ICE') {
			translation = 'ICE';
		} else if(match == 'IMMOBILE') {
			translation = 'IMMOBILE';
		} else if(match == 'POISON') {
			translation = 'POISON';
		} else if(match == 'SLOW') {
			translation = 'SLOW';
		} else if(match == 'DANGEROUS') {
			translation = 'DANGEROUS';
		}
		
		var result = '<span class="keyword '+translation.toUpperCase()+'" data-key="'+toCamelCaseLoop(match)+'">'+toCamelCaseLoop(match)+'</span>';
		
		return result;
    }.bind(this));
}

 /**
   *search function that returns a modified version of the text passed into with the keywords highlighted.
   */
function findImmunities(text){
	var secondaryRe;
	var en = /\b(ALL|IMMUNEBANE|IMMUNEHEX|IMMUNEFIRE|IMMUNEKNOCKDOWN|IMMUNEICE|IMMUNEIMMOBILE|IMMUNEPOISON|IMMUNESLOW|IMMUNEALL)\b/g;
    var de = /\b(ALL|IMMUNEBANE|IMMUNEHEX|IMMUNEFIRE|IMMUNEKNOCKDOWN|IMMUNEICE|IMMUNEIMMOBILE|IMMUNEPOISON|IMMUNESLOW|IMMUNEALL)\b/g;
    var es = /\b(TODO|INMUNEAESTRAGO|INMUNEAMALEFICIO|INMUNEAFUEGO|INMUNEADERRIBO|INMUNEAHIELO|INMUNEAINMOVIL|INMUNEAVENENO|INMUNEARALENTIZAR|INMUNEATODO)\b/g;
    var fr = /\b(ALL|IMMUNEBANE|IMMUNEHEX|IMMUNEFIRE|IMMUNEKNOCKDOWN|IMMUNEICE|IMMUNEIMMOBILE|IMMUNEPOISON|IMMUNESLOW|IMMUNEALL)\b/g;
    
	if(languageChoice == "en") {
		secondaryRe = en;
		text = replaceEnglishImmunities(secondaryRe, text);
	} else if(languageChoice == "de") {
		secondaryRe = de;
		text = replaceDeutchImmunities(secondaryRe, text);
	} else if(languageChoice == "es") {
		secondaryRe = es;
		text = replaceEspanolImmunities(secondaryRe, text);
	} else if(languageChoice == "fr") {
		secondaryRe = fr;
		text = replaceFrancaisImmunities(secondaryRe, text);
	} else {
		secondaryRe = en;
		text = replaceEnglishImmunities(secondaryRe, text);
	}
	/*
	text = text.replace(this.re,function(match){
		var displayKey = this.lookup[match.toLowerCase()];
		var keyClass = this.resolveKeyClass(displayKey);
		return '<span class="keyword '+keyClass.toUpperCase()+'" data-key="'+toCamelCaseLoop(dataKey)+'">'+displayKey+'</span>';
    }.bind(this));
	*/
	return text;
  };
  
  function replaceEnglishImmunities(secondaryRe, text) {
	return text.replace(secondaryRe,function(match){
		var result = '<span class="keyword '+match.toUpperCase()+'" data-key="'+toCamelCaseLoop(match)+'">'+toCamelCaseLoop(match)+'</span>';
		
		return result;
    }.bind(this));
}

function replaceDeutchImmunities(secondaryRe, text) {
	var translation = '';
	return text.replace(secondaryRe,function(match){
		if(match == 'ALL') {
			translation = 'ALL';
		} else if(match == 'IMMUNEBANE') {
			translation = 'IMMUNEBANE';
		} else if(match == 'IMMUNEHEX') {
			translation = 'IMMUNEHEX';
		} else if(match == 'IMMUNEFIRE') {
			translation = 'IMMUNEFIRE';
		} else if(match == 'IMMUNEKNOCKDOWN') {
			translation = 'IMMUNEKNOCKDOWN';
		} else if(match == 'IMMUNEICE') {
			translation = 'IMMUNEICE';
		} else if(match == 'IMMUNEIMMOBILE') {
			translation = 'IMMUNEIMMOBILE';
		} else if(match == 'IMMUNEPOISON') {
			translation = 'IMMUNEPOISON';
		} else if(match == 'IMMUNESLOW') {
			translation = 'IMMUNESLOW';
		} else if(match == 'IMMUNEALL') {
			translation = 'IMMUNEALL';
		}
		
		var result = '<span class="keyword '+translation.toUpperCase()+'" data-key="'+toCamelCaseLoop(match)+'">'+toCamelCaseLoop(match)+'</span>';
		
		return result;
    }.bind(this));
}

function replaceEspanolImmunities(secondaryRe, text) {
	var translation = '';
	return text.replace(secondaryRe,function(match){
		if(match == 'TODO') {
			translation = 'ALL';
		} else if(match == 'INMUNEAESTRAGO') {
			translation = 'IMMUNEBANE';
		} else if(match == 'INMUNEAMALEFICIO') {
			translation = 'IMMUNEHEX';
		} else if(match == 'INMUNEAFUEGO') {
			translation = 'IMMUNEFIRE';
		} else if(match == 'INMUNEADERRIBO') {
			translation = 'IMMUNEKNOCKDOWN';
		} else if(match == 'INMUNEAHIELO') {
			translation = 'IMMUNEICE';
		} else if(match == 'INMUNEAINMOVIL') {
			translation = 'IMMUNEIMMOBILE';
		} else if(match == 'INMUNEAVENENO') {
			translation = 'IMMUNEPOISON';
		} else if(match == 'INMUNEARALENTIZAR') {
			translation = 'IMMUNESLOW';
		} else if(match == 'INMUNEATODO') {
			translation = 'IMMUNEALL';
		}
		
		var result = '<span class="keyword '+translation.toUpperCase()+'" data-key="'+toCamelCaseLoop(match)+'">'+toCamelCaseLoop(match)+'</span>';
		
		return result;
    }.bind(this));
}

function replaceFrancaisImmunities(secondaryRe, text) {
	var translation = '';
	return text.replace(secondaryRe,function(match){
		if(match == 'ALL') {
			translation = 'ALL';
		} else if(match == 'IMMUNEBANE') {
			translation = 'IMMUNEBANE';
		} else if(match == 'IMMUNEHEX') {
			translation = 'IMMUNEHEX';
		} else if(match == 'IMMUNEFIRE') {
			translation = 'IMMUNEFIRE';
		} else if(match == 'IMMUNEKNOCKDOWN') {
			translation = 'IMMUNEKNOCKDOWN';
		} else if(match == 'IMMUNEICE') {
			translation = 'IMMUNEICE';
		} else if(match == 'IMMUNEIMMOBILE') {
			translation = 'IMMUNEIMMOBILE';
		} else if(match == 'IMMUNEPOISON') {
			translation = 'IMMUNEPOISON';
		} else if(match == 'IMMUNESLOW') {
			translation = 'IMMUNESLOW';
		} else if(match == 'IMMUNEALL') {
			translation = 'IMMUNEALL';
		}
		
		var result = '<span class="keyword '+translation.toUpperCase()+'" data-key="'+toCamelCaseLoop(match)+'">'+toCamelCaseLoop(match)+'</span>';
		
		return result;
    }.bind(this));
}

this.findAffinities=function(description){
    var re;
	var en = /\b(ALLAFFINITY|AMETHYST|AMETHYSTCITRINE|AMETHYSTEMERALD|AMETHYSTRUBY|AMETHYSTSAPPHIRE|CITRINE|CITRINEAMETHYST|CITRINEEMERALD|CITRINERUBY|CITRINESAPPHIRE|EMERALD|EMERALDAMETHYST|EMERALDCITRINE|EMERALDRUBY|EMERALDSAPPHIRE|RUBY|RUBYAMETHYST|RUBYCITRINE|RUBYEMERALD|RUBYSAPPHIRE|SAPPHIRE|SAPPHIREAMETHYST|SAPPHIRECITRINE|SAPPHIREEMERALD|SAPPHIRERUBY)\b/g;
	var de = /\b(ALLAFFINITY|AMETHYST|AMETHYSTCITRINE|AMETHYSTEMERALD|AMETHYSTRUBY|AMETHYSTSAPPHIRE|CITRINE|CITRINEAMETHYST|CITRINEEMERALD|CITRINERUBY|CITRINESAPPHIRE|EMERALD|EMERALDAMETHYST|EMERALDCITRINE|EMERALDRUBY|EMERALDSAPPHIRE|RUBY|RUBYAMETHYST|RUBYCITRINE|RUBYEMERALD|RUBYSAPPHIRE|SAPPHIRE|SAPPHIREAMETHYST|SAPPHIRECITRINE|SAPPHIREEMERALD|SAPPHIRERUBY)\b/g;
	var es = /\b(AFINIDADATODO|AMATISTA|AMATISTACITRINO|AMATISTAESMERALDA|AMATISTARUBI|AMATISTAZAFIRO|CITRINO|CITRINOAMATISTA|CITRINOESMERALDA|CITRINORUBI|CITRINOZAFIRO|ESMERALDA|ESMERALDAAMATISTA|ESMERALDACITRINO|ESMERALDARUBI|ESMERALDAZAFIRO|RUBI|RUBIAMATISTA|RUBICITRINO|RUBIESMERALDA|RUBIZAFIRO|ZAFIRO|ZAFIROAMATISTA|ZAFIROCITRINO|ZAFIROESMERALDA|ZAFIRORUBI)\b/g;
	var fr = /\b(ALLAFFINITY|AMETHYST|AMETHYSTCITRINE|AMETHYSTEMERALD|AMETHYSTRUBY|AMETHYSTSAPPHIRE|CITRINE|CITRINEAMETHYST|CITRINEEMERALD|CITRINERUBY|CITRINESAPPHIRE|EMERALD|EMERALDAMETHYST|EMERALDCITRINE|EMERALDRUBY|EMERALDSAPPHIRE|RUBY|RUBYAMETHYST|RUBYCITRINE|RUBYEMERALD|RUBYSAPPHIRE|SAPPHIRE|SAPPHIREAMETHYST|SAPPHIRECITRINE|SAPPHIREEMERALD|SAPPHIRERUBY)\b/g;

	if(languageChoice == "en") {
		re = en;
		description = this.replaceEnglishAffinities(re, description);
	} else if(languageChoice == "de") {
		re = de;
		description = this.replaceDeutchAffinities(re, description);
	} else if(languageChoice == "es") {
		re = es;
		description = this.replaceEspanolAffinities(re, description);
	} else if(languageChoice == "fr") {
		re = fr;
		description = this.replaceFrancaisAffinities(re, description);
	} else {
		re = en;
		description = this.replaceEnglishAffinities(re, description);
	}
    
    return description;
  };
  
this.replaceEnglishAffinities=function(re, description){
	return description.replace(re,function(match){
		return '<span class="affinity '+match.toUpperCase()+'" title="'+toCamelCaseLoop(match)+'"></span>';
    });
}
  
this.replaceDeutchAffinities=function(re, description){
	var translation = '';
	return description.replace(re,function(match){
		if(match == 'ALLAFFINITY') {
			translation = 'ALLAFFINITY';
		} else if(match == 'AMETHYST') {
			translation = 'AMETHYST';
		} else if(match == 'AMETHYSTCITRINE') {
			translation = 'AMETHYSTCITRINE';
		} else if(match == 'AMETHYSTEMERALD') {
			translation = 'AMETHYSTEMERALD';
		} else if(match == 'AMETHYSTRUBY') {
			translation = 'AMETHYSTRUBY';
		} else if(match == 'AMETHYSTSAPPHIRE') {
			translation = 'AMETHYSTSAPPHIRE';
		} else if(match == 'CITRINE') {
			translation = 'CITRINE';
		} else if(match == 'CITRINEAMETHYST') {
			translation = 'CITRINEAMETHYST';
		} else if(match == 'CITRINEEMERALD') {
			translation = 'CITRINEEMERALD';
		} else if(match == 'CITRINERUBY') {
			translation = 'CITRINERUBY';
		} else if(match == 'CITRINESAPPHIRE') {
			translation = 'CITRINESAPPHIRE';
		} else if(match == 'EMERALD') {
			translation = 'EMERALD';
		} else if(match == 'EMERALDAMETHYST') {
			translation = 'EMERALDAMETHYST';
		} else if(match == 'EMERALDCITRINE') {
			translation = 'EMERALDCITRINE';
		} else if(match == 'EMERALDRUBY') {
			translation = 'EMERALDRUBY';
		} else if(match == 'EMERALDSAPPHIRE') {
			translation = 'EMERALDSAPPHIRE';
		} else if(match == 'RUBY') {
			translation = 'RUBY';
		} else if(match == 'RUBYAMETHYST') {
			translation = 'RUBYAMETHYST';
		} else if(match == 'RUBYCITRINE') {
			translation = 'RUBYCITRINE';
		} else if(match == 'RUBYEMERALD') {
			translation = 'RUBYEMERALD';
		} else if(match == 'RUBYSAPPHIRE') {
			translation = 'RUBYSAPPHIRE';
		} else if(match == 'SAPPHIRE') {
			translation = 'SAPPHIRE';
		} else if(match == 'SAPPHIREAMETHYST') {
			translation = 'SAPPHIREAMETHYST';
		} else if(match == 'SAPPHIRECITRINE') {
			translation = 'SAPPHIRECITRINE';
		} else if(match == 'SAPPHIREEMERALD') {
			translation = 'SAPPHIREEMERALD';
		} else if(match == 'SAPPHIRERUBY') {
			translation = 'SAPPHIRERUBY';
		}
		
		return '<div class="affinity '+translation.toUpperCase()+'" title="'+toCamelCaseLoop(match)+'"></div>';
    });
}

this.replaceEspanolAffinities=function(re, description){
	var translation = '';
	return description.replace(re,function(match){
		if(match == 'AFINIDADATODO') {
			translation = 'ALLAFFINITY';
		} else if(match == 'AMATISTA') {
			translation = 'AMETHYST';
		} else if(match == 'AMATISTACITRINO') {
			translation = 'AMETHYSTCITRINE';
		} else if(match == 'AMATISTAESMERALDA') {
			translation = 'AMETHYSTEMERALD';
		} else if(match == 'AMATISTARUBI') {
			translation = 'AMETHYSTRUBY';
		} else if(match == 'AMATISTAZAFIRO') {
			translation = 'AMETHYSTSAPPHIRE';
		} else if(match == 'CITRINO') {
			translation = 'CITRINE';
		} else if(match == 'CITRINOAMATISTA') {
			translation = 'CITRINEAMETHYST';
		} else if(match == 'CITRINOESMERALDA') {
			translation = 'CITRINEEMERALD';
		} else if(match == 'CITRINORUBI') {
			translation = 'CITRINERUBY';
		} else if(match == 'CITRINOZAFIRO') {
			translation = 'CITRINESAPPHIRE';
		} else if(match == 'ESMERALDA') {
			translation = 'EMERALD';
		} else if(match == 'ESMERALDAAMATISTA') {
			translation = 'EMERALDAMETHYST';
		} else if(match == 'ESMERALDACITRINO') {
			translation = 'EMERALDCITRINE';
		} else if(match == 'ESMERALDARUBI') {
			translation = 'EMERALDRUBY';
		} else if(match == 'ESMERALDAZAFIRO') {
			translation = 'EMERALDSAPPHIRE';
		} else if(match == 'RUBI') {
			translation = 'RUBY';
		} else if(match == 'RUBIAMATISTA') {
			translation = 'RUBYAMETHYST';
		} else if(match == 'RUBICITRINO') {
			translation = 'RUBYCITRINE';
		} else if(match == 'RUBIESMERALDA') {
			translation = 'RUBYEMERALD';
		} else if(match == 'RUBIZAFIRO') {
			translation = 'RUBYSAPPHIRE';
		} else if(match == 'ZAFIRO') {
			translation = 'SAPPHIRE';
		} else if(match == 'ZAFIROAMATISTA') {
			translation = 'SAPPHIREAMETHYST';
		} else if(match == 'ZAFIROCITRINO') {
			translation = 'SAPPHIRECITRINE';
		} else if(match == 'ZAFIROESMERALDA') {
			translation = 'SAPPHIREEMERALD';
		} else if(match == 'ZAFIRORUBI') {
			translation = 'SAPPHIRERUBY';
		}
		
		return '<div class="affinity '+translation.toUpperCase()+'" title="'+toCamelCaseLoop(match)+'"></div>';
    });
}
  
this.replaceFrancaisAffinities=function(re, description){
	var translation = '';
	return description.replace(re,function(match){
		if(match == 'ALLAFFINITY') {
			translation = 'ALLAFFINITY';
		} else if(match == 'AMETHYST') {
			translation = 'AMETHYST';
		} else if(match == 'AMETHYSTCITRINE') {
			translation = 'AMETHYSTCITRINE';
		} else if(match == 'AMETHYSTEMERALD') {
			translation = 'AMETHYSTEMERALD';
		} else if(match == 'AMETHYSTRUBY') {
			translation = 'AMETHYSTRUBY';
		} else if(match == 'AMETHYSTSAPPHIRE') {
			translation = 'AMETHYSTSAPPHIRE';
		} else if(match == 'CITRINE') {
			translation = 'CITRINE';
		} else if(match == 'CITRINEAMETHYST') {
			translation = 'CITRINEAMETHYST';
		} else if(match == 'CITRINEEMERALD') {
			translation = 'CITRINEEMERALD';
		} else if(match == 'CITRINERUBY') {
			translation = 'CITRINERUBY';
		} else if(match == 'CITRINESAPPHIRE') {
			translation = 'CITRINESAPPHIRE';
		} else if(match == 'EMERALD') {
			translation = 'EMERALD';
		} else if(match == 'EMERALDAMETHYST') {
			translation = 'EMERALDAMETHYST';
		} else if(match == 'EMERALDCITRINE') {
			translation = 'EMERALDCITRINE';
		} else if(match == 'EMERALDRUBY') {
			translation = 'EMERALDRUBY';
		} else if(match == 'EMERALDSAPPHIRE') {
			translation = 'EMERALDSAPPHIRE';
		} else if(match == 'RUBY') {
			translation = 'RUBY';
		} else if(match == 'RUBYAMETHYST') {
			translation = 'RUBYAMETHYST';
		} else if(match == 'RUBYCITRINE') {
			translation = 'RUBYCITRINE';
		} else if(match == 'RUBYEMERALD') {
			translation = 'RUBYEMERALD';
		} else if(match == 'RUBYSAPPHIRE') {
			translation = 'RUBYSAPPHIRE';
		} else if(match == 'SAPPHIRE') {
			translation = 'SAPPHIRE';
		} else if(match == 'SAPPHIREAMETHYST') {
			translation = 'SAPPHIREAMETHYST';
		} else if(match == 'SAPPHIRECITRINE') {
			translation = 'SAPPHIRECITRINE';
		} else if(match == 'SAPPHIREEMERALD') {
			translation = 'SAPPHIREEMERALD';
		} else if(match == 'SAPPHIRERUBY') {
			translation = 'SAPPHIRERUBY';
		}
		
		return '<div class="affinity '+translation.toUpperCase()+'" title="'+toCamelCaseLoop(match)+'"></div>';
    });
}

function findDice(text){
	//regular expression - https://regex101.com/#javascript
    var re;	
	var en = /(([+-]?[0-9]+)(RG|[RBGOP]|ST|SW|MI|MA|AC|MO|HE|SH|PO))\b/g;
	var de = /(([+-]?[0-9]+)(RG|[RBGOP]|ST|SW|MI|MA|AC|MO|HE|SH|PO))\b/g;
	var es = /(([+-]?[0-9]+)(AL|[RAVNM]|ES|CC|DI|MA|AC|MO|HE|EC|PO))\b/g;
	var fr = /(([+-]?[0-9]+)(RG|[RBGOP]|ST|SW|MI|MA|AC|MO|HE|SH|PO))\b/g;

	if(languageChoice == "en") {
		re = en;
		text = replaceEnglishStats(re, text);
	} else if(languageChoice == "de") {
		re = de;
		text = replaceDeutchStats(re, text);
	} else if(languageChoice == "es") {
		re = es;
		text = replaceEspanolStats(re, text);
	} else if(languageChoice == "fr") {
		re = fr;
		text = replaceFrancaisStats(re, text);
	} else {
		re = en;
		text = replaceEnglishStats(re, text);
	}
	    
    return text;
  };
  
function replaceEnglishStats(re, text) {
	return text.replace(re,function(match,p1,p2,p3,p4){
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
}

function replaceDeutchStats(re, text) {
	return text.replace(re,function(match,p1,p2,p3,p4){
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
}

function replaceEspanolStats(re, text) {
	return text.replace(re,function(match,p1,p2,p3,p4){
      var c="";
      //var v = p3.toLowerCase();

      if(p3==='R'){
        c+="dice red";
      }else if(p3==='A'){
        c+="dice blue";
      }else if(p3==='V'){
        c+="dice green";
      }else if(p3==='N'){
        c+="dice orange";
      }else if(p3==='M'){
        c+="dice purple";
      }else if(p3==='ES'){
        c+="dice star";
      }else if(p3==='MA'){
        c+="offense magic";
      }else if(p3==='DI'){
        c+="offense missile";
      }else if(p3==='CC'){
        c+="offense melee";
      }else if(p3==='AL'){
        c+="offense range";
      }else if(p3==='AC'){
        c+="actionMod";
      }else if(p3==='MO'){
        c+="moveMod";
      }else if(p3==='HE'){
        c+="heartMod";
      }else if(p3==='EC'){
        c+="shieldMod";
      }else if(p3==='PO'){
        c+="potionMod";
      }
      return '<span class="'+c+'">'+(p2==='0'?'&nbsp;':p2)+'</span>';
    });
}

function replaceFrancaisStats(re, text) {
	return text.replace(re,function(match,p1,p2,p3,p4){
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
}

function replace1(match){
	var result = '<span class="keyword '+translation.toUpperCase()+'" data-key="'+toCamelCaseLoop(match)+'">'+toCamelCaseLoop(match)+'</span>';
		
	return result;
 }
  
 function replace2(match){
	var displayKey = this.lookup[match.toLowerCase()];
	var keyClass = this.resolveKeyClass(displayKey);
	return '<span class="keyword '+keyClass.toUpperCase()+'" data-key="'+toCamelCaseLoop(dataKey)+'">'+displayKey+'</span>';
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
	var en = "Save";
	var de = "Speichern";
	var es = "Ahorrar";
	var fr = "Sauvegarder";

	substituteLanguage("uiSave", en, de, es, fr);
}

function setUILoadButton() {
	var en = "Load";
	var de = "Belastung";
	var es = "Carga";
	var fr = "Charger";

	substituteLanguage("uiLoad", en, de, es, fr);
}

function setUIAddCardButton() {
	var en = "Add Card";
	var de = "Karte hinzufügen";
	var es = "Agregar tarjeta";
	var fr = "Ajouter une carte";

	substituteLanguage("uiAddCard", en, de, es, fr);
}

function setUIHelpButton() {
	var en = "Help";
	var de = "Helfen";
	var es = "Ayuda";
	var fr = "Aide";

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
	var en = "Medication For All";
	var de = "Medikamente für alle";
	var es = "Medicamentos para todos";
	var fr = "Des médicaments pour tous";

	substituteLanguage("uiMedicationForAll", en, de, es, fr);
}

function setUIGithub() {
	var en = "GitHub";
	var de = "GitHub";
	var es = "GitHub";
	var fr = "GitHub";

	substituteLanguage("uiGitHub", en, de, es, fr);
}

function setUIFAQ() {
	var en = "FAQ";
	var de = "FAQ";
	var es = "Preguntas más frecuentes";
	var fr = "FAQ";

	substituteLanguage("uiFAQ", en, de, es, fr);
}

function setUIChanges() {
	var en = "Changes";
	var de = "Änderungen";
	var es = "Cambios";
	var fr = "Changements";

	substituteLanguage("uiChanges", en, de, es, fr);
}

function setUIToDo() {
	var en = "ToDo";
	var de = "Machen";
	var es = "Hacer";
	var fr = "Faire";

	substituteLanguage("uiToDo", en, de, es, fr);
}

function setUIAbout() {
	var en = "About";
	var de = "Um";
	var es = "Acerca de";
	var fr = "À propos";

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
	var en = "Card";
	var de = "Karte";
	var es = "Tarjeta";
	var fr = "Card";

	substituteLanguage("uiCard", en, de, es, fr);
}

function setUIHeaderHeader() {
	var en = "Header";
	var de = "Header";
	var es = "Encabezamiento";
	var fr = "Entête";

	substituteLanguage("uiHeader", en, de, es, fr);
}

function setUIImageHeader() {
	var en = "Image";
	var de = "Bild";
	var es = "Imagen";
	var fr = "Image";

	substituteLanguage("uiImage", en, de, es, fr);
}

function setUIStatsHeader() {
	var en = "Stats";
	var de = "Statistiken";
	var es = "Estadísticas";
	var fr = "Statistiques";

	substituteLanguage("uiStats", en, de, es, fr);
}

function setUIKeywordHeader() {
	var en = "Keyword";
	var de = "Stichwort";
	var es = "Palabra clave";
	var fr = "Mot-clé";

	substituteLanguage("uiKeyword", en, de, es, fr);
}

function setUIAbilityHeader() {
	var en = "Ability";
	var de = "Fähigkeit";
	var es = "Capacidad";
	var fr = "Capacité";

	substituteLanguage("uiAbility", en, de, es, fr);
}

function setUIFlavorTextHeader() {
	var en = "Flavor Text";
	var de = "Geschmackstext";
	var es = "Texto de Sabor";
	var fr = "Texte de Saveur";

	substituteLanguage("uiFlavorText", en, de, es, fr);
}

function setUICardModifierHeader() {
	var en = "Card Modifier";
	var de = "Kartenmodifikator";
	var es = "Modificador de tarjeta";
	var fr = "Modificateur de carte";

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
	var en = "Type";
	var de = "Typ";
	var es = "Tipo";
	var fr = "Taper";

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
	var en = "Hero";
	var de = "Held";
	var es = "Héroe";
	var fr = "Héros";

	substituteLanguage("uiHero", en, de, es, fr);
}

function setUIMonster() {
	var en = "Monster";
	var de = "Monster";
	var es = "Monstruo";
	var fr = "Monstre";

	substituteLanguage("uiMonster", en, de, es, fr);
}

function setUIPet() {
	var en = "Pet";
	var de = "Haustier";
	var es = "Mascota";
	var fr = "Animal de compagnie";

	substituteLanguage("uiPet", en, de, es, fr);
}

function setUILoot() {
	var en = "Loot";
	var de = "Beute";
	var es = "Botín";
	var fr = "Butin";

	substituteLanguage("uiLoot", en, de, es, fr);
}

function setUITreasure() {
	var en = "Treasure";
	var de = "Schatz";
	var es = "Tesoro";
	var fr = "Trésor";

	substituteLanguage("uiTreasure", en, de, es, fr);
}

function setUIWonder() {
	var en = "Wonder";
	var de = "Wunder";
	var es = "Preguntarse";
	var fr = "Merveille";

	substituteLanguage("uiWonder", en, de, es, fr);
}

function setUIExplore() {
	var en = "Explore";
	var de = "Erkunden";
	var es = "Explorar";
	var fr = "Explorer";

	substituteLanguage("uiExplore", en, de, es, fr);
}

function setUITimeout() {
	var en = "Timeout";
	var de = "Auszeit";
	var es = "Se acabó el tiempo";
	var fr = "Temps mort";

	substituteLanguage("uiTimeout", en, de, es, fr);
}

function setUICommand() {
	var en = "Command";
	var de = "Befehl";
	var es = "Dominio";
	var fr = "Commande";

	substituteLanguage("uiCommand", en, de, es, fr);
}

function setUIExperimental() {
	var en = "-Experimental-";
	var de = "-Experimental-";
	var es = "-Experimental-";
	var fr = "-Expérimental-";

	substituteLanguage("uiExperimental", en, de, es, fr);
}

function setUIArcadeSolo() {
	var en = "Arcade Solo";
	var de = "Arcade Solo";
	var es = "Arcade En solitario";
	var fr = "Arcade Solo";

	substituteLanguage("uiArcadeSolo", en, de, es, fr);
}

function setUIArcadeGang() {
	var en = "Arcade Gang";
	var de = "Arcade-Gang";
	var es = "Pandilla arcade";
	var fr = "Gang d'arcade";

	substituteLanguage("uiArcadeGang", en, de, es, fr);
}

function setUIScale() {
	var en = "Scale";
	var de = "Skala";
	var es = "Escala";
	var fr = "Échelle";

	substituteLanguage("uiScale", en, de, es, fr);
}

function setUIAuthor() {
	var en = "Author";
	var de = "Autor";
	var es = "Autor";
	var fr = "Auteur";

	substituteLanguage("uiAuthor", en, de, es, fr);
}

function setUIBorder() {
	var en = "Border";
	var de = "Grenze";
	var es = "Borde";
	var fr = "Frontière";

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
	var en = "Blue";
	var de = "Blau";
	var es = "Azul";
	var fr = "Bleu";

	substituteLanguage("uiBlue", en, de, es, fr);
}

function setUIRed() {
	var en = "Red";
	var de = "Rot";
	var es = "Rojo";
	var fr = "Rouge";

	substituteLanguage("uiRed", en, de, es, fr);
}

function setUIGreen() {
	var en = "Green";
	var de = "Grün";
	var es = "Verde";
	var fr = "Vert";

	substituteLanguage("uiGreen", en, de, es, fr);
}

function setUIPurple() {
	var en = "Purple";
	var de = "Lila";
	var es = "Púrpura";
	var fr = "Violet";

	substituteLanguage("uiPurple", en, de, es, fr);
}

function setUIYellow() {
	var en = "Yellow";
	var de = "Gelb";
	var es = "Gelb";
	var fr = "Jaune";

	substituteLanguage("uiYellow", en, de, es, fr);
}

function setUIOrange() {
	var en = "Orange";
	var de = "Orange";
	var es = "Naranja";
	var fr = "Orange";

	substituteLanguage("uiOrange", en, de, es, fr);
}

function setUIBrown() {
	var en = "Brown";
	var de = "Braun";
	var es = "Marrón";
	var fr = "Brun";

	substituteLanguage("uiBrown", en, de, es, fr);
}

function setUIPink() {
	var en = "Pink";
	var de = "Rosa";
	var es = "Rosa";
	var fr = "Rose";

	substituteLanguage("uiPink", en, de, es, fr);
}

function setUIGray() {
	var en = "Gray";
	var de = "Grau";
	var es = "Gris";
	var fr = "Gris";

	substituteLanguage("uiGray", en, de, es, fr);
}

function setUIWhite() {
	var en = "White";
	var de = "Weiß";
	var es = "Blanco";
	var fr = "Blanc";

	substituteLanguage("uiWhite", en, de, es, fr);
}

function setUIBlack() {
	var en = "Black";
	var de = "Schwarz";
	var es = "Negro";
	var fr = "Noir";

	substituteLanguage("uiBlack", en, de, es, fr);
}

function setUIClassicBlue() {
	var en = "Classic Blue";
	var de = "Klassisches Blau";
	var es = "Azul Clásico";
	var fr = "Bleu Classique";

	substituteLanguage("uiClassicBlue", en, de, es, fr);
}

function setUIClassicRed() {
	var en = "Classic Red";
	var de = "Klassisches Rot";
	var es = "Rojo Clásico";
	var fr = "Rouge Classique";

	substituteLanguage("uiClassicRed", en, de, es, fr);
}

function setUIClassicGreen() {
	var en = "Classic Green";
	var de = "Klassisches Grün";
	var es = "Verde Clásico";
	var fr = "Vert Classique";

	substituteLanguage("uiClassicGreen", en, de, es, fr);
}

function setUIClassicPurple() {
	var en = "Classic Purple";
	var de = "Klassisches Lila";
	var es = "Púrpura Clásico";
	var fr = "Violet Classique";

	substituteLanguage("uiClassicPurple", en, de, es, fr);
}

function setUIClassicYellow() {
	var en = "Classic Yellow";
	var de = "Klassisches Gelb";
	var es = "Amarillo Clásico";
	var fr = "Jaune Classique";

	substituteLanguage("uiClassicYellow", en, de, es, fr);
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

	substituteLanguage("uiTitle", en, de, es, fr);
}

function setUISubTitle() {
	var en = "Sub-Title";
	var de = "Untertitel";
	var es = "Subtitular";
	var fr = "Sous-titre";

	substituteLanguage("uiSubTitle", en, de, es, fr);
}

function setUIMove() {
	var en = "Move";
	var de = "Bewegen";
	var es = "Mover";
	var fr = "Se déplacer";

	substituteLanguage("uiMove", en, de, es, fr);
}

function setUIActions() {
	var en = "Actions";
	var de = "Aktionen";
	var es = "Comportamiento";
	var fr = "Actions";

	substituteLanguage("uiAction", en, de, es, fr);
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

	substituteLanguage("uiBackground", en, de, es, fr);
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

	substituteLanguage("uiTransparent", en, de, es, fr);
}

function setUIAvatar() {
	var en = "Avatar";
	var de = "Benutzerbild";
	var es = "Avatar";
	var fr = "Avatar";

	substituteLanguage("uiAvatar", en, de, es, fr);
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

	substituteLanguage("uiDefault", en, de, es, fr);
}

function setUIRemote() {
	var en = "Remote";
	var de = "Fernbedienung";
	var es = "Remoto";
	var fr = "Télécommande";

	substituteLanguage("uiRemote", en, de, es, fr);
}

function setUILocal() {
	var en = "Local";
	var de = "Lokal";
	var es = "Local";
	var fr = "Local";

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
	var en = "STR ";
	var de = "STR ";
	var es = "FUE ";
	var fr = "STR ";

	substituteLanguage("controlSTR", en, de, es, fr);
}

function setUILanguageControlARM() {
	var en = "ARM ";
	var de = "ARM ";
	var es = "ARM ";
	var fr = "ARM ";

	substituteLanguage("controlARM", en, de, es, fr);
}

function setUILanguageControlRNG() {
	var en = "RNG ";
	var de = "RNG ";
	var es = "AL ";
	var fr = "RNG ";

	substituteLanguage("controlRNG", en, de, es, fr);
}

function setUILanguageControlWILL() {
	var en = "WILL ";
	var de = "WILL ";
	var es = "VOL ";
	var fr = "WILL ";

	substituteLanguage("controlWILL", en, de, es, fr);
}

function setUILanguageControlDEX() {
	var en = "DEX ";
	var de = "DEX ";
	var es = "DES ";
	var fr = "DEX ";

	substituteLanguage("controlDEX", en, de, es, fr);
}

function setUILanguageControlWounds() {
	var en = "Wounds ";
	var de = "Wounds ";
	var es = "Heridas ";
	var fr = "Wounds ";

	substituteLanguage("controlWounds", en, de, es, fr);
}

function setUILanguageControlSkullPoints() {
	var en = "Skull Points ";
	var de = "Skull Points ";
	var es = "Puntos del Cráneo ";
	var fr = "Skull Points ";

	substituteLanguage("controlSkullPoints", en, de, es, fr);
}

function setUILanguageControlPotions() {
	var en = "Potions ";
	var de = "Potions ";
	var es = "Pociones ";
	var fr = "Potions ";

	substituteLanguage("controlPotions", en, de, es, fr);
}

function setUILanguageControlPetCost() {
	var en = "Pet Cost ";
	var de = "Pet Cost ";
	var es = "Costo de Mascota ";
	var fr = "Pet Cost ";

	substituteLanguage("controlPetCost", en, de, es, fr);
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
	var en = "Amethyst";
	var de = "Amethyst";
	var es = "Amatista";
	var fr = "Amethyst";

	substituteLanguage("uiAmethyst", en, de, es, fr);
}

function setUIAmethystCitrine() {
	var en = "Amethyst Citrine";
	var de = "Amethyst Citrine";
	var es = "Amatista Citrino";
	var fr = "Amethyst Citrine";

	substituteLanguage("uiAmethystCitrine", en, de, es, fr);
}

function setUIAmethystEmerald() {
	var en = "Amethyst Emerald";
	var de = "Amethyst Emerald";
	var es = "Amatista Esmeralda";
	var fr = "Amethyst Emerald";

	substituteLanguage("uiAmethystEmerald", en, de, es, fr);
}

function setUIAmethystRuby() {
	var en = "Amethyst Ruby";
	var de = "Amethyst Ruby";
	var es = "Amatista Rubi";
	var fr = "Amethyst Ruby";

	substituteLanguage("uiAmethystRuby", en, de, es, fr);
}

function setUIAmethystSapphire() {
	var en = "Amethyst Sapphire";
	var de = "Amethyst Sapphire";
	var es = "Amatista Zafiro";
	var fr = "Amethyst Sapphire";

	substituteLanguage("uiAmethystSapphire", en, de, es, fr);
}

function setUICitrine() {
	var en = "Citrine";
	var de = "Citrine";
	var es = "Citrino";
	var fr = "Citrine";

	substituteLanguage("uiCitrine", en, de, es, fr);
}

function setUICitrineAmethyst() {
	var en = "Citrine Amethyst";
	var de = "Citrine Amethyst";
	var es = "Citrino Amatista";
	var fr = "Citrine Amethyst";

	substituteLanguage("uiCitrineAmethyst", en, de, es, fr);
}

function setUICitrineEmerald() {
	var en = "Citrine Emerald";
	var de = "Citrine Emerald";
	var es = "Citrino Esmeralda";
	var fr = "Citrine Emerald";

	substituteLanguage("uiCitrineEmerald", en, de, es, fr);
}

function setUICitrineRuby() {
	var en = "Citrine Ruby";
	var de = "Citrine Ruby";
	var es = "Citrino Rubi";
	var fr = "Citrine Ruby";

	substituteLanguage("uiCitrineRuby", en, de, es, fr);
}

function setUICitrineSapphire() {
	var en = "Citrine Sapphire";
	var de = "Citrine Sapphire";
	var es = "Citrino Zafiro";
	var fr = "Citrine Sapphire";

	substituteLanguage("uiCitrineSapphire", en, de, es, fr);
}

function setUIEmerald() {
	var en = "Emerald";
	var de = "Emerald";
	var es = "Esmeralda";
	var fr = "Emerald";

	substituteLanguage("uiEmerald", en, de, es, fr);
}

function setUIEmeraldAmethyst() {
	var en = "Emerald Amethyst";
	var de = "Emerald Amethyst";
	var es = "Esmeralda Amatista";
	var fr = "Emerald Amethyst";

	substituteLanguage("uiEmeraldAmethyst", en, de, es, fr);
}

function setUIEmeraldCitrine() {
	var en = "Emerald Citrine";
	var de = "Emerald Citrine";
	var es = "Esmeralda Citrino";
	var fr = "Emerald Citrine";

	substituteLanguage("uiEmeraldCitrine", en, de, es, fr);
}

function setUIEmeraldRuby() {
	var en = "Emerald Ruby";
	var de = "Emerald Ruby";
	var es = "Esmeralda Rubi";
	var fr = "Emerald Ruby";

	substituteLanguage("uiEmeraldRuby", en, de, es, fr);
}

function setUIEmeraldSapphire() {
	var en = "Emerald Sapphire";
	var de = "Emerald Sapphire";
	var es = "Esmeralda Zafiro";
	var fr = "Emerald Sapphire";

	substituteLanguage("uiEmeraldSapphire", en, de, es, fr);
}

function setUIRuby() {
	var en = "Ruby";
	var de = "Ruby";
	var es = "Rubi";
	var fr = "Ruby";

	substituteLanguage("uiRuby", en, de, es, fr);
}

function setUIRubyAmethyst() {
	var en = "Ruby Amethyst";
	var de = "Ruby Amethyst";
	var es = "Rubi Amatista";
	var fr = "Ruby Amethyst";

	substituteLanguage("uiRubyAmethyst", en, de, es, fr);
}

function setUIRubyCitrine() {
	var en = "Ruby Citrine";
	var de = "Ruby Citrine";
	var es = "Rubi Citrino";
	var fr = "Ruby Citrine";

	substituteLanguage("uiRubyCitrine", en, de, es, fr);
}

function setUIRubyEmerald() {
	var en = "Ruby Emerald";
	var de = "Ruby Emerald";
	var es = "Rubi Esmeralda";
	var fr = "Ruby Emerald";

	substituteLanguage("uiRubyEmerald", en, de, es, fr);
}

function setUIRubySapphire() {
	var en = "Ruby Sapphire";
	var de = "Ruby Sapphire";
	var es = "Rubi Zafiro";
	var fr = "Ruby Sapphire";

	substituteLanguage("uiRubySapphire", en, de, es, fr);
}

function setUISapphire() {
	var en = "Sapphire";
	var de = "Sapphire";
	var es = "Zafiro";
	var fr = "Sapphire";

	substituteLanguage("uiSapphire", en, de, es, fr);
}

function setUISapphireAmethyst() {
	var en = "Sapphire Amethyst";
	var de = "Sapphire Amethyst";
	var es = "Zafiro Amatista";
	var fr = "Sapphire Amethyst";

	substituteLanguage("uiSapphireAmethyst", en, de, es, fr);
}

function setUISapphireCitrine() {
	var en = "Sapphire Citrine";
	var de = "Sapphire Citrine";
	var es = "Zafiro Citrino";
	var fr = "Sapphire Citrine";

	substituteLanguage("uiSapphireCitrine", en, de, es, fr);
}

function setUISapphireEmerald() {
	var en = "Sapphire Emerald";
	var de = "Sapphire Emerald";
	var es = "Zafiro Esmeralda";
	var fr = "Sapphire Emerald";

	substituteLanguage("uiSapphireEmerald", en, de, es, fr);
}

function setUISapphireRuby() {
	var en = "Sapphire Ruby";
	var de = "Sapphire Ruby";
	var es = "Zafiro Rubi";
	var fr = "Sapphire Ruby";

	substituteLanguage("uiSapphireRuby", en, de, es, fr);
}

function setUIAllAffinity() {
	var en = "All Affinity";
	var de = "Alle Affinität";
	var es = "Toda la afinidad";
	var fr = "Toute Affinité";

	substituteLanguage("uiAllAffinity", en, de, es, fr);
}

function setUIAll() {
	var en = "All";
	var de = "Alle";
	var es = "Todo";
	var fr = "Tout";

	substituteLanguage("uiAll", en, de, es, fr);
}

function setUINone() {
	var en = "None";
	var de = "Keiner";
	var es = "Ninguno";
	var fr = "Aucun";

	substituteLanguage("uiNone", en, de, es, fr);
}

function setUIKeywords() {
	var en = "Keywords";
	var de = "Schlüsselwörter";
	var es = "Palabras clave";
	var fr = "Mots clés";

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
	var en = "Strength: STR";
	var de = "Strength: STR";
	var es = "Fuerza: FUE";
	var fr = "Strength: STR";

	substituteLanguage("controlStrengthSTR", en, de, es, fr);
}

function setUILanguageControlArmorARM() {
	var en = "Armor: ARM";
	var de = "Armor: ARM";
	var es = "Armadura: ARM";
	var fr = "Armor: ARM";

	substituteLanguage("controlArmorARM", en, de, es, fr);
}

function setUILanguageControlWillpowerWILL() {
	var en = "Willpower: WILL";
	var de = "Willpower: WILL";
	var es = "Fuerza de Voluntad: VOL";
	var fr = "Willpower: WILL";

	substituteLanguage("controlWillpowerWILL", en, de, es, fr);
}

function setUILanguageControlDexterityDEX() {
	var en = "Dexterity: DEX";
	var de = "Dexterity: DEX";
	var es = "Destreza: DES";
	var fr = "Dexterity: DEX";

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
	var en = "Attack";
	var de = "Attacke";
	var es = "Ataque";
	var fr = "Attaque";

	substituteLanguage("uiAttack", en, de, es, fr);
}

function setUISupport() {
	var en = "Support";
	var de = "Unterstützung";
	var es = "Apoyo";
	var fr = "Soutien";

	substituteLanguage("uiSupport", en, de, es, fr);
}

function setUIOffensivePotion() {
	var en = "Offensive Potion";
	var de = "Angriffstrank";
	var es = "Poción ofensiva";
	var fr = "Potion offensive";

	substituteLanguage("uiOffensivePotion", en, de, es, fr);
}

function setUISupportPotion() {
	var en = "Support Potion";
	var de = "Unterstützungstrank";
	var es = "Poción de apoyo";
	var fr = "Potion de soutien";

	substituteLanguage("uiSupportPotion", en, de, es, fr);
}

function setUIEmergencyPotion() {
	var en = "Emergency Potion";
	var de = "Notfalltrank";
	var es = "Poción de emergencia";
	var fr = "Potion d'urgence";

	substituteLanguage("uiEmergencyPotion", en, de, es, fr);
}

function setUISpecial() {
	var en = "Special";
	var de = "Besonders";
	var es = "Especial";
	var fr = "Spécial";

	substituteLanguage("uiSpecial", en, de, es, fr);
}

function setUIListArcade() {
	var en = "---Arcade---";
	var de = "---Arkade---";
	var es = "---Arcada---";
	var fr = "---Arcade---";

	substituteLanguage("uiListArcade", en, de, es, fr);
}

function setUISignatureAttack() {
	var en = "Signature Attack";
	var de = "Signaturangriff";
	var es = "Ataque característico";
	var fr = "Attaque de signature";

	substituteLanguage("uiSignatureAttack", en, de, es, fr);
}

function setUISignatureSupport() {
	var en = "Signature Support";
	var de = "Signaturunterstützung";
	var es = "Soporte de firma";
	var fr = "Prise en charge des signatures";

	substituteLanguage("uiSignatureSupport", en, de, es, fr);
}

function setUIOverchargeAttack() {
	var en = "Overcharge Attack";
	var de = "Überladungsangriff";
	var es = "Ataque de sobrecarga";
	var fr = "Attaque de surcharge";

	substituteLanguage("uiOverchargeAttack", en, de, es, fr);
}

function setUIOverchargeSupport() {
	var en = "Overcharge Support";
	var de = "Überladungsunterstützung";
	var es = "Soporte de sobrecarga";
	var fr = "Prise en charge des surcharges";

	substituteLanguage("uiOverchargeSupport", en, de, es, fr);
}

function setUICost() {
	var en = "Cost";
	var de = "Kosten";
	var es = "Costo";
	var fr = "Coût";

	substituteLanguage("uiCost", en, de, es, fr);
}

function setUIName() {
	var en = "Name";
	var de = "Name";
	var es = "Nombre";
	var fr = "Nom";

	substituteLanguage("uiName", en, de, es, fr);
}

function setUIDefinition() {
	var en = "Definition";
	var de = "Definition";
	var es = "Definición";
	var fr = "Définition";

	substituteLanguage("uiDefinition", en, de, es, fr);
}

function setUIAddAbility() {
	var en = "Add Ability";
	var de = "Fähigkeit hinzufügen";
	var es = "Agregar habilidad";
	var fr = "Ajouter une capacité";

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
	var en = "Duplicate Card";
	var de = "Doppelte Karte";
	var es = "Duplicar Carte";
	var fr = "Carte en double";

	substituteLanguage("uiDuplicateCard", en, de, es, fr);
}

function setUIMoveCardUp() {
	var en = "Move Card Up";
	var de = "Karte nach oben verschieben";
	var es = "Mover tarjeta hacia arriba";
	var fr = "Mover tarjeta hacia arriba";

	substituteLanguage("uiMoveCardUp", en, de, es, fr);
}

function setUIMoveCardDown() {
	var en = "Move Card Down";
	var de = "Karte nach unten bewegen";
	var es = "Mover tarjeta hacia abajo";
	var fr = "Déplacer la carte vers le bas";

	substituteLanguage("uiMoveCardDown", en, de, es, fr);
}

function setUIDeleteCard() {
	var en = "Delete Card";
	var de = "Karte löschen";
	var es = "Eliminar tarjeta";
	var fr = "Supprimer la carte";

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
	var en = "Legend";
	var de = "Legend";
	var es = "Leyenda";
	var fr = "Legend";

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
	var en = "Dice Types";
	var de = "Würfeltypen";
	var es = "Tipos de dados";
	var fr = "Types de dés";

	substituteLanguage("uiDiceTypes", en, de, es, fr);
}

function setUILanguageLegendStar() {
	var en = "Star: 1ST";
	var de = "Star: 1ST";
	var es = "Estrella: 1ES";
	var fr = "Star: 1ST";

	substituteLanguage("legendStar", en, de, es, fr);
}

function setUILanguageLegendBlue() {
	var en = "Blue: 1B";
	var de = "Blue: 1B";
	var es = "Azul: 1A";
	var fr = "Blue: 1B";

	substituteLanguage("legendBlue", en, de, es, fr);
}

function setUILanguageLegendRed() {
	var en = "Red: 1R";
	var de = "Red: 1R";
	var es = "Rojo: 1R";
	var fr = "Red: 1R";

	substituteLanguage("legendRed", en, de, es, fr);
}

function setUILanguageLegendGreen() {
	var en = "Green: 1G";
	var de = "Green: 1G";
	var es = "Verde: 1V";
	var fr = "Green: 1G";

	substituteLanguage("legendGreen", en, de, es, fr);
}

function setUILanguageLegendOrange() {
	var en = "Orange: 1O";
	var de = "Orange: 1O";
	var es = "Naranja: 1N";
	var fr = "Orange: 1O";

	substituteLanguage("legendOrange", en, de, es, fr);
}

function setUILanguageLegendPurple() {
	var en = "Purple: 1P";
	var de = "Purple: 1P";
	var es = "Morado: 1M";
	var fr = "Purple: 1P";

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
	var en = "Modifiers";
	var de = "Modifikatoren";
	var es = "Modificadores";
	var fr = "Modificateurs";

	substituteLanguage("uiModifiers", en, de, es, fr);
}

function setUILanguageLegendMelee() {
	var en = "Melee: 1SW";
	var de = "Melee: 1SW";
	var es = "Cuerpo a Cuerpo: 1CC";
	var fr = "Melee: 1SW";

	substituteLanguage("legendMelee", en, de, es, fr);
}

function setUILanguageLegendMissile() {
	var en = "Missile: 1MI";
	var de = "Missile: 1MI";
	var es = "Distancia: 1DI";
	var fr = "Missile: 1MI";

	substituteLanguage("legendMissile", en, de, es, fr);
}

function setUILanguageLegendMagic() {
	var en = "Magic: 1MA";
	var de = "Magic: 1MA";
	var es = "Magico: 1MA";
	var fr = "Magic: 1MA";

	substituteLanguage("legendMagic", en, de, es, fr);
}

function setUILanguageLegendRange() {
	var en = "Range: 1RG";
	var de = "Range: 1RG";
	var es = "Alcance: 1AL";
	var fr = "Range: 1RG";

	substituteLanguage("legendRange", en, de, es, fr);
}

function setUILanguageLegendAction() {
	var en = "Action: 1AC";
	var de = "Action: 1AC";
	var es = "Accion: 1AC";
	var fr = "Action: 1AC";

	substituteLanguage("legendAction", en, de, es, fr);
}

function setUILanguageLegendMove() {
	var en = "Move: 1MO";
	var de = "Move: 1MO";
	var es = "Movimiento: 1MO";
	var fr = "Move: 1MO";

	substituteLanguage("legendMove", en, de, es, fr);
}

function setUILanguageLegendShield() {
	var en = "Shield: 0SH";
	var de = "Shield: 0SH";
	var es = "Escudo: 0EC";
	var fr = "Shield: 0SH";

	substituteLanguage("legendShield", en, de, es, fr);
}

function setUILanguageLegendHeart() {
	var en = "Heart: 1HE";
	var de = "Heart: 1HE";
	var es = "Herida: 1HE";
	var fr = "Heart: 1HE";

	substituteLanguage("legendHeart", en, de, es, fr);
}

function setUILanguageLegendPotion() {
	var en = "Potion: 1PO";
	var de = "Potion: 1PO";
	var es = "Pocion: 1PO";
	var fr = "Potion: 1PO";

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
	var en = "Statuses";
	var de = "Statuses";
	var es = "Estados";
	var fr = "Statuses";

	substituteLanguage("uiStatuses", en, de, es, fr);
}

function setUILanguageLegendAugment() {
	var en = "Augment: AUGMENT";
	var de = "Augment: AUGMENT";
	var es = "Aumento: AUMENTO";
	var fr = "Augment: AUGMENT";

	substituteLanguage("legendAugment", en, de, es, fr);
}

function setUILanguageLegendDangerous() {
	var en = "Dangerous: DANGEROUS";
	var de = "Dangerous: DANGEROUS";
	var es = "Peligroso: PELIGROSO";
	var fr = "Dangerous: DANGEROUS";

	substituteLanguage("legendDangerous", en, de, es, fr);
}

function setUILanguageLegendBane() {
	var en = "Bane: BANE";
	var de = "Bane: BANE";
	var es = "Estrago: ESTRAGO";
	var fr = "Bane: BANE";

	substituteLanguage("legendBane", en, de, es, fr);
}

function setUILanguageLegendHex() {
	var en = "Hex: HEX";
	var de = "Hex: HEX";
	var es = "Maleficio: MALEFICIO";
	var fr = "Hex: HEX";

	substituteLanguage("legendHex", en, de, es, fr);
}

function setUILanguageLegendFire() {
	var en = "Fire: FIRE";
	var de = "Fire: FIRE";
	var es = "Fuego: FUEGO";
	var fr = "Fire: FIRE";

	substituteLanguage("legendFire", en, de, es, fr);
}

function setUILanguageLegendKnockdown() {
	var en = "Knockdown: KNOCKDOWN";
	var de = "Knockdown: KNOCKDOWN";
	var es = "Derribo: DERRIBO";
	var fr = "Knockdown: KNOCKDOWN";

	substituteLanguage("legendKnockdown", en, de, es, fr);
}

function setUILanguageLegendIce() {
	var en = "Ice: ICE";
	var de = "Ice: ICE";
	var es = "Hielo: HIELO";
	var fr = "Ice: ICE";

	substituteLanguage("legendIce", en, de, es, fr);
}

function setUILanguageLegendImmobile() {
	var en = "Immobile: IMMOBILE";
	var de = "Immobile: IMMOBILE";
	var es = "Inmovil: INMOVIL";
	var fr = "Immobile: IMMOBILE";

	substituteLanguage("legendImmobile", en, de, es, fr);
}

function setUILanguageLegendPoison() {
	var en = "Poison: POISON";
	var de = "Poison: POISON";
	var es = "Venemo: VENENO";
	var fr = "Poison: POISON";

	substituteLanguage("legendPoison", en, de, es, fr);
}

function setUILanguageLegendSlow() {
	var en = "Slow: SLOW";
	var de = "Slow: SLOW";
	var es = "Ralentizar: RALENTIZAR";
	var fr = "Slow: SLOW";

	substituteLanguage("legendSlow", en, de, es, fr);
}

function setUILanguageLegendAll() {
	var en = "ALL: All";
	var de = "ALL: All";
	var es = "Todo: TODO";
	var fr = "ALL: All";

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
	var en = "Immunities";
	var de = "Immunities";
	var es = "inmunidades";
	var fr = "Immunities";

	substituteLanguage("uiImmunities", en, de, es, fr);
}

function setUILanguageLegendImmuneBane() {
	var en = "Immune Bane: IMMUNEBANE";
	var de = "Immune Bane: IMMUNEBANE";
	var es = "Inmune A Estrago: INMUNEAESTRAGO";
	var fr = "Immune Bane: IMMUNEBANE";

	substituteLanguage("legendImmuneBane", en, de, es, fr);
}

function setUILanguageLegendImmuneHex() {
	var en = "Immune Hex: IMMUNEHEX";
	var de = "Immune Hex: IMMUNEHEX";
	var es = "Inmune A Maleficio: INMUNEAMALEFICIO";
	var fr = "Immune Hex: IMMUNEHEX";

	substituteLanguage("legendImmuneHex", en, de, es, fr);
}

function setUILanguageLegendImmuneFire() {
	var en = "Immune Fire: IMMUNEFIRE";
	var de = "Immune Fire: IMMUNEFIRE";
	var es = "Inmune A Fuego: INMUNEAFUEGO";
	var fr = "Immune Fire: IMMUNEFIRE";

	substituteLanguage("legendImmuneFire", en, de, es, fr);
}

function setUILanguageLegendImmuneKnockdown() {
	var en = "Immune Knockdown: IMMUNEKNOCKDOWN";
	var de = "Immune Knockdown: IMMUNEKNOCKDOWN";
	var es = "Inmune A Aderribo: INMUNEADERRIBO";
	var fr = "Immune Knockdown: IMMUNEKNOCKDOWN";

	substituteLanguage("legendImmuneKnockdown", en, de, es, fr);
}

function setUILanguageLegendImmuneIce() {
	var en = "Immune Ice: IMMUNEICE";
	var de = "Immune Ice: IMMUNEICE";
	var es = "Inmune A Hielo: INMUNEAHIELO";
	var fr = "Immune Ice: IMMUNEICE";

	substituteLanguage("legendImmuneIce", en, de, es, fr);
}

function setUILanguageLegendImmuneImmobile() {
	var en = "Immune Immobile: IMMUNEIMMOBILE";
	var de = "Immune Immobile: IMMUNEIMMOBILE";
	var es = "Inmune A Inmovil: INMUNEAINMOVIL";
	var fr = "Immune Immobile: IMMUNEIMMOBILE";

	substituteLanguage("legendImmuneImmobile", en, de, es, fr);
}

function setUILanguageLegendImmunePoison() {
	var en = "Immune Poison: IMMUNEPOISON";
	var de = "Immune Poison: IMMUNEPOISON";
	var es = "Inmune A Venemo: INMUNEAVENENO";
	var fr = "Immune Poison: IMMUNEPOISON";

	substituteLanguage("legendImmunePoison", en, de, es, fr);
}

function setUILanguageLegendImmuneSlow() {
	var en = "Immune Slow: IMMUNESLOW";
	var de = "Immune Slow: IMMUNESLOW";
	var es = "Inmune A Ralentizar: INMUNEAVENENO";
	var fr = "Immune Slow: IMMUNESLOW";

	substituteLanguage("legendImmuneSlow", en, de, es, fr);
}

function setUILanguageLegendImmuneAll() {
	var en = "Immune All: IMMUNEALL";
	var de = "Immune All: IMMUNEALL";
	var es = "Inmune A Todo: INMUNEATODO";
	var fr = "Immune All: IMMUNEALL";

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
	var en = "Affinities";
	var de = "Affinities";
	var es = "Afinidades";
	var fr = "Affinities";

	substituteLanguage("uiAffinities", en, de, es, fr);
}

function setUILanguageLegendAllAffinity() {
	var en = "All Affinity: ALLAFFINITY";
	var de = "All Affinity: ALLAFFINITY";
	var es = "Toda la afinidad: TODALAAFINIDAD";
	var fr = "All Affinity: ALLAFFINITY";

	substituteLanguage("legendAllAffinity", en, de, es, fr);
}

function setUILanguageLegendAmethyst() {
	var en = "Amethyst: AMETHYST";
	var de = "Amethyst: AMETHYST";
	var es = "Amatista: AMATISTA";
	var fr = "Amethyst: AMETHYST";

	substituteLanguage("legendAmethyst", en, de, es, fr);
}

function setUILanguageLegendAmethystCitrine() {
	var en = "Amethyst Citrine: AMETHYSTCITRINE";
	var de = "Amethyst Citrine: AMETHYSTCITRINE";
	var es = "Amatista Citrino: AMATISTACITRINO";
	var fr = "Amethyst Citrine: AMETHYSTCITRINE";

	substituteLanguage("legendAmethystCitrine", en, de, es, fr);
}

function setUILanguageLegendAmethystEmerald() {
	var en = "Amethyst Emerald: AMETHYSTEMERALD";
	var de = "Amethyst Emerald: AMETHYSTEMERALD";
	var es = "Amatista Esmeralda: AMATISTAESMERALDA";
	var fr = "Amethyst Emerald: AMETHYSTEMERALD";

	substituteLanguage("legendAmethystEmerald", en, de, es, fr);
}

function setUILanguageLegendAmethystRuby() {
	var en = "Amethyst Ruby: AMETHYSTRUBY";
	var de = "Amethyst Ruby: AMETHYSTRUBY";
	var es = "Amatista Rubi: AMATISTARUBI";
	var fr = "Amethyst Ruby: AMETHYSTRUBY";

	substituteLanguage("legendAmethystRuby", en, de, es, fr);
}

function setUILanguageLegendAmethystSapphire() {
	var en = "Amethyst Sapphire: AMETHYSTSAPPHIRE";
	var de = "Amethyst Sapphire: AMETHYSTSAPPHIRE";
	var es = "Amatista Zafiro: AMATISTAZAFIRO";
	var fr = "Amethyst Sapphire: AMETHYSTSAPPHIRE";

	substituteLanguage("legendAmethystSapphire", en, de, es, fr);
}

function setUILanguageLegendCitrine() {
	var en = "Citrine: CITRINE";
	var de = "Citrine: CITRINE";
	var es = "Citrino: CITRINO";
	var fr = "Citrine: CITRINE";

	substituteLanguage("legendCitrine", en, de, es, fr);
}

function setUILanguageLegendCitrineAmethyst() {
	var en = "Citrine Amethyst: CITRINEAMETHYST";
	var de = "Citrine Amethyst: CITRINEAMETHYST";
	var es = "Citrino Amatista: CITRINOAMATISTA";
	var fr = "Citrine Amethyst: CITRINEAMETHYST";

	substituteLanguage("legendCitrineAmethyst", en, de, es, fr);
}

function setUILanguageLegendCitrineEmerald() {
	var en = "Citrine Emerald: CITRINEEMERALD";
	var de = "Citrine Emerald: CITRINEEMERALD";
	var es = "Citrino Esmeralda: CITRINOESMERALDA";
	var fr = "Citrine Emerald: CITRINEEMERALD";

	substituteLanguage("legendCitrineEmerald", en, de, es, fr);
}

function setUILanguageLegendCitrineRuby() {
	var en = "Citrine Ruby: CITRINERUBY";
	var de = "Citrine Ruby: CITRINERUBY";
	var es = "Citrino Rubi: CITRINORUBI";
	var fr = "Citrine Ruby: CITRINERUBY";

	substituteLanguage("legendCitrineRuby", en, de, es, fr);
}

function setUILanguageLegendCitrineSapphire() {
	var en = "Citrine Sapphire: CITRINESAPPHIRE";
	var de = "Citrine Sapphire: CITRINESAPPHIRE";
	var es = "Citrino Zafiro: CITRINOZAFIRO";
	var fr = "Citrine Sapphire: CITRINESAPPHIRE";

	substituteLanguage("legendCitrineSapphire", en, de, es, fr);
}

function setUILanguageLegendEmerald() {
	var en = "Emerald: EMERALD";
	var de = "Emerald: EMERALD";
	var es = "Esmeralda: ESMERALDA";
	var fr = "Emerald: EMERALD";

	substituteLanguage("legendEmerald", en, de, es, fr);
}

function setUILanguageLegendEmeraldAmethyst() {
	var en = "Emerald Amethyst: EMERALDAMETHYST";
	var de = "Emerald Amethyst: EMERALDAMETHYST";
	var es = "Esmeralda Amatista: ESMERALDAAMATISTA";
	var fr = "Emerald Amethyst: EMERALDAMETHYST";

	substituteLanguage("legendEmeraldAmethyst", en, de, es, fr);
}

function setUILanguageLegendEmeraldCitrine() {
	var en = "Emerald Citrine: EMERALDCITRINE";
	var de = "Emerald Citrine: EMERALDCITRINE";
	var es = "Esmeralda Citrino: ESMERALDACITRINO";
	var fr = "Emerald Citrine: EMERALDCITRINE";

	substituteLanguage("legendEmeraldCitrine", en, de, es, fr);
}

function setUILanguageLegendEmeraldRuby() {
	var en = "Emerald Ruby: EMERALDRUBY";
	var de = "Emerald Ruby: EMERALDRUBY";
	var es = "Esmeralda Rubi: ESMERALDARUBI";
	var fr = "Emerald Ruby: EMERALDRUBY";

	substituteLanguage("legendEmeraldRuby", en, de, es, fr);
}

function setUILanguageLegendEmeraldSapphire() {
	var en = "Emerald Sapphire: EMERALDSAPPHIRE";
	var de = "Emerald Sapphire: EMERALDSAPPHIRE";
	var es = "Esmeralda Zafiro: ESMERALDAZAFIRO";
	var fr = "Emerald Sapphire: EMERALDSAPPHIRE";

	substituteLanguage("legendEmeraldSapphire", en, de, es, fr);
}

function setUILanguageLegendRuby() {
	var en = "Ruby: RUBY";
	var de = "Ruby: RUBY";
	var es = "Rubi: RUBI";
	var fr = "Ruby: RUBY";

	substituteLanguage("legendRuby", en, de, es, fr);
}

function setUILanguageLegendRubyAmethyst() {
	var en = "Ruby Amethyst: RUBYAMETHYST";
	var de = "Ruby Amethyst: RUBYAMETHYST";
	var es = "Rubi Amatista: RUBIAMATISTA";
	var fr = "Ruby Amethyst: RUBYAMETHYST";

	substituteLanguage("legendRubyAmethyst", en, de, es, fr);
}

function setUILanguageLegendRubyCitrine() {
	var en = "Ruby Citrine: RUBYCITRINE";
	var de = "Ruby Citrine: RUBYCITRINE";
	var es = "Rubi Citrino: RUBICITRINO";
	var fr = "Ruby Citrine: RUBYCITRINE";

	substituteLanguage("legendRubyCitrine", en, de, es, fr);
}

function setUILanguageLegendRubyEmerald() {
	var en = "Ruby Emerald: RUBYEMERALD";
	var de = "Ruby Emerald: RUBYEMERALD";
	var es = "Rubi Esmeralda: RUBIESMERALDA";
	var fr = "Ruby Emerald: RUBYEMERALD";

	substituteLanguage("legendRubyEmerald", en, de, es, fr);
}

function setUILanguageLegendRubySapphire() {
	var en = "Ruby Sapphire: RUBYSAPPHIRE";
	var de = "Ruby Sapphire: RUBYSAPPHIRE";
	var es = "Rubi Zafiro: RUBIZAFIRO";
	var fr = "Ruby Sapphire: RUBYSAPPHIRE";

	substituteLanguage("legendRubySapphire", en, de, es, fr);
}

function setUILanguageLegendSapphire() {
	var en = "Sapphire: SAPPHIRE";
	var de = "Sapphire: SAPPHIRE";
	var es = "Zafiro: ZAFIRO";
	var fr = "Sapphire: SAPPHIRE";

	substituteLanguage("legendSapphire", en, de, es, fr);
}

function setUILanguageLegendSapphireAmethyst() {
	var en = "Sapphire Amethyst: SAPPHIREAMETHYST";
	var de = "Sapphire Amethyst: SAPPHIREAMETHYST";
	var es = "Zafiro Amatista: ZAFIROAMATISTA";
	var fr = "Sapphire Amethyst: SAPPHIREAMETHYST";

	substituteLanguage("legendSapphireAmethyst", en, de, es, fr);
}

function setUILanguageLegendSapphireCitrine() {
	var en = "Sapphire Citrine: SAPPHIRECITRINE";
	var de = "Sapphire Citrine: SAPPHIRECITRINE";
	var es = "Zafiro Citrino: ZAFIROCITRINO";
	var fr = "Sapphire Citrine: SAPPHIRECITRINE";

	substituteLanguage("legendSapphireCitrine", en, de, es, fr);
}

function setUILanguageLegendSapphireEmerald() {
	var en = "Sapphire Emerald: SAPPHIREEMERALD";
	var de = "Sapphire Emerald: SAPPHIREEMERALD";
	var es = "Zafiro Esmeralda: ZAFIROESMERALDA";
	var fr = "Sapphire Emerald: SAPPHIREEMERALD";

	substituteLanguage("legendSapphireEmerald", en, de, es, fr);
}

function setUILanguageLegendSapphireRuby() {
	var en = "Sapphire Ruby: SAPPHIRERUBY";
	var de = "Sapphire Ruby: SAPPHIRERUBY";
	var es = "Zafiro Rubi: ZAFIRORUBI";
	var fr = "Sapphire Ruby: SAPPHIRERUBY";

	substituteLanguage("legendSapphireRuby", en, de, es, fr);
}

function substituteLanguage(className, en, de, es, fr) {
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

function updatebox(){
	var elements = document.getElementsByName("definition");
	for(var x = 0; x < elements.length; x++) {
		var element = elements[x];
		
		//element.value += ' ';
		element.value = element.value;
		//element.change();
		//element.get(0).change();
	}
}

function toCamelCaseLoop(input) {
	var result = '';
	var parts = input.split(' ');
	
	for(var x = 0; x < parts.length; x++) {
		result += toCamelCase(parts[x]);
		
		if(x != parts.length-1){
			result += ' ';
		}
		
	}
	
	return result;
}

function toCamelCase(input) {
	var result = '';
	var first = '';
	
	if(input != undefined && input.length > 0) {
		first = input.toString().substring(0,1); //get first character
		first = first.toUpperCase();
		
		result = input.toString().substring(1, input.length).toLowerCase();;
		result = first + result;		
	}
	
	return result;
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
