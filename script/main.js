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

var languageChoice = LANGUAGE_ENGLISH;
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
	
	stripKeySymbolsFromKeywords();
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

function stripKeySymbolsFromKeywords() {
	stripKeySymbolsFromKeywordsByType(SYMBOL_AUGMENT_ENGLISH);
	stripKeySymbolsFromKeywordsByType(SYMBOL_DANGEROUS_ENGLISH);
	stripKeySymbolsFromKeywordsByType(SYMBOL_BANE_ENGLISH);
	stripKeySymbolsFromKeywordsByType(SYMBOL_HEX_ENGLISH);
	stripKeySymbolsFromKeywordsByType(SYMBOL_FIRE_ENGLISH);
	stripKeySymbolsFromKeywordsByType(SYMBOL_KNOCKDOWN_ENGLISH);
	stripKeySymbolsFromKeywordsByType(SYMBOL_ICE_ENGLISH);
	stripKeySymbolsFromKeywordsByType(SYMBOL_IMMOBILE_ENGLISH);
	stripKeySymbolsFromKeywordsByType(SYMBOL_POISON_ENGLISH);
	stripKeySymbolsFromKeywordsByType(SYMBOL_SLOW_ENGLISH);
	stripKeySymbolsFromKeywordsByType(SYMBOL_ALL_ENGLISH);
}

function stripImmunitiesFromKeywords() {
	stripKeySymbolsFromKeywordsByType(SYMBOL_IMMUNE_BANE_ENGLISH);
	stripKeySymbolsFromKeywordsByType(SYMBOL_IMMUNE_HEX_ENGLISH);
	stripKeySymbolsFromKeywordsByType(SYMBOL_IMMUNE_FIRE_ENGLISH);
	stripKeySymbolsFromKeywordsByType(SYMBOL_IMMUNE_KNOCKDOWN_ENGLISH);
	stripKeySymbolsFromKeywordsByType(SYMBOL_IMMUNE_ICE_ENGLISH);
	stripKeySymbolsFromKeywordsByType(SYMBOL_IMMUNE_IMMOBILE_ENGLISH);
	stripKeySymbolsFromKeywordsByType(SYMBOL_IMMUNE_POISON_ENGLISH);
	stripKeySymbolsFromKeywordsByType(SYMBOL_IMMUNE_SLOW_ENGLISH);
	stripKeySymbolsFromKeywordsByType(SYMBOL_IMMUNE_ALL_ENGLISH);
}

function stripKeySymbolsFromKeywordsByType(type) {
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
	stripAffinitiesFromKeywordsByType(SYMBOL_AFFINITY_ALL_ENGLISH);
	
	stripAffinitiesFromKeywordsByType(SYMBOL_AFFINITY_AMETHYST_ENGLISH);
	stripAffinitiesFromKeywordsByType(SYMBOL_AFFINITY_AMETHYST_CITRINE_ENGLISH);
	stripAffinitiesFromKeywordsByType(SYMBOL_AFFINITY_AMETHYST_EMERALD_ENGLISH);
	stripAffinitiesFromKeywordsByType(SYMBOL_AFFINITY_AMETHYST_RUBY_ENGLISH);
	stripAffinitiesFromKeywordsByType(SYMBOL_AFFINITY_AMETHYST_SAPPHIRE_ENGLISH);
	
	stripAffinitiesFromKeywordsByType(SYMBOL_AFFINITY_CITRINE_ENGLISH);
	stripAffinitiesFromKeywordsByType(SYMBOL_AFFINITY_CITRINE_AMETHYST_ENGLISH);
	stripAffinitiesFromKeywordsByType(SYMBOL_AFFINITY_CITRINE_EMERALD_ENGLISH);
	stripAffinitiesFromKeywordsByType(SYMBOL_AFFINITY_CITRINE_RUBY_ENGLISH);
	stripAffinitiesFromKeywordsByType(SYMBOL_AFFINITY_CITRINE_SAPPHIRE_ENGLISH);
	
	stripAffinitiesFromKeywordsByType(SYMBOL_AFFINITY_EMERALD_ENGLISH);
	stripAffinitiesFromKeywordsByType(SYMBOL_AFFINITY_EMERALD_AMETHYST_ENGLISH);
	stripAffinitiesFromKeywordsByType(SYMBOL_AFFINITY_EMERALD_CITRINE_ENGLISH);
	stripAffinitiesFromKeywordsByType(SYMBOL_AFFINITY_EMERALD_RUBY_ENGLISH);
	stripAffinitiesFromKeywordsByType(SYMBOL_AFFINITY_EMERALD_SAPPHIRE_ENGLISH);
	
	stripAffinitiesFromKeywordsByType(SYMBOL_AFFINITY_RUBY_ENGLISH);
	stripAffinitiesFromKeywordsByType(SYMBOL_AFFINITY_RUBY_AMETHYST_ENGLISH);
	stripAffinitiesFromKeywordsByType(SYMBOL_AFFINITY_RUBY_CITRINE_ENGLISH);
	stripAffinitiesFromKeywordsByType(SYMBOL_AFFINITY_RUBY_EMERALD_ENGLISH);
	stripAffinitiesFromKeywordsByType(SYMBOL_AFFINITY_RUBY_SAPPHIRE_ENGLISH);
	
	stripAffinitiesFromKeywordsByType(SYMBOL_AFFINITY_SAPPHIRE_ENGLISH);
	stripAffinitiesFromKeywordsByType(SYMBOL_AFFINITY_SAPPHIRE_AMETHYST_ENGLISH);
	stripAffinitiesFromKeywordsByType(SYMBOL_AFFINITY_SAPPHIRE_CITRINE_ENGLISH);
	stripAffinitiesFromKeywordsByType(SYMBOL_AFFINITY_SAPPHIRE_EMERALD_ENGLISH);
	stripAffinitiesFromKeywordsByType(SYMBOL_AFFINITY_SAPPHIRE_RUBY_ENGLISH);
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
		var keyClass = resolveKeyClass(displayKey);

		//check to see if the keyword is already added, and if the display flag does not equal false
		if( data.displayBack !== false && data.displayBack !== 'false'  
		&& keyClass != null && keyClass != '' && $('.cardGroup.selected .card .keywords .'+keyClass.toUpperCase()).length ===0){
		
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

function resolveKeyClass(key) {
	var parts = '';
    var returner ='';
	
	if(key != undefined) {
		parts = key.split(' ');
		for(var i=0,item;(item=parts[i]);i++){
		  if(i==0){
			//item = item.toLowerCase();
			item = item.replace('\'','');
			item = item.replace(':','');

			if($.isNumeric(item[0])){
			  item="key-"+item;
			}
		  }

		  returner+=item;
		}
	}
    return returner;
}

function parseDescription(description){
    var symbolDescription 	= findSymbols(description);
    var immunityDescription = findImmunities(symbolDescription);
    var affinityDescription = findAffinities(immunityDescription);
    var diceDescription 	= findDice(affinityDescription);
    var statDescription 	= findStats(diceDescription);
    return statDescription;
};
  
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
	
	if(isNotEmpty(input)) {
		var parts = input.split(' ');
		for(var x = 0; x < parts.length; x++) {
			result += toCamelCase(parts[x]);
			result += ' ';		
		}
	}
	return result.trim();
}

function toCamelCase(input) {
	var result = '';
	var first = '';
	
	if(isNotEmpty(input)) {
		first = input.toString().substring(0,1); //get first character
		first = first.toUpperCase();
		
		result = input.toString().substring(1, input.length).toLowerCase();
		result = first + result;
		
		if(checkForSuffix(result)){
			result = upperCaseSuffix(result);
		}
		
	}
	
	return result;
}

function checkForSuffix(input) {
	var result = false;
	var potentialSuffix = '';
	
	if(input.length > 1) {
		potentialSuffix = input.toString().substring(input.length-2, input.length);
		
		if(potentialSuffix === '-e' || potentialSuffix === '-a') {
			result = true;
		}
	}
	
	return result;
}

function upperCaseSuffix(input) {
	var result = input;
	var potentialSuffix = '';
	var suffix = '';
	
	if(input.length > 1) {
		result = input.toString().substring(0, input.length-2);
		potentialSuffix = input.toString().substring(input.length-2, input.length);
	
		if(potentialSuffix === '-e') {
			suffix = '-E';
		} else if(potentialSuffix === '-a') {
			suffix = '-A';
		}
		result += suffix;
	}
		
	return result;
}

function isNotEmpty(input) {
	var result = false;
	
	if(input == undefined || input.trim() === "") {
		result = false;
	} else {
		result = true;
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
