function stripStatsFromKeywords() {
	if(languageChoice == LANGUAGE_ENGLISH) {
		stripStatsFromKeywordsEnglish();
	} else if(languageChoice == LANGUAGE_DEUTCH) {
		stripStatsFromKeywordsDeutch();
	} else if(languageChoice == LANGUAGE_ESPANOL) {
		stripStatsFromKeywordsEspanol();
	} else if(languageChoice == LANGUAGE_FRANCAIS) {
		stripStatsFromKeywordsFrancais();
	} else {
		stripStatsFromKeywordsEnglish();
	}
}

function switchKeywordLanguageFile() {
	if(languageChoice == LANGUAGE_ENGLISH) {
		re = LANGUAGE_FILE_ENGLISH;
	} else if(languageChoice == LANGUAGE_DEUTCH) {
		re = LANGUAGE_FILE_DEUTCH;
	} else if(languageChoice == LANGUAGE_ESPANOL) {
		re = LANGUAGE_FILE_ESPANOL;
	} else if(languageChoice == LANGUAGE_FRANCAIS) {
		re = LANGUAGE_FILE_FRANCAIS;
	} else {
		re = LANGUAGE_FILE_ENGLISH;
	}
	
	var promises = [];
	promises.push($.getJSON('./json/'+re));	
	
	$.when.apply($, promises).done(function(keywords){
		var keywordStore = new KeywordStore(keywords);
		keywordStore.setupKeywordsForm();
		$('.page').data('keywordStore',keywordStore);
	});
}

function findStats(text){
    var re;
	
	if(languageChoice == LANGUAGE_ENGLISH) {
		re = REG_EX_STAT_ENGLISH;
	} else if(languageChoice == LANGUAGE_DEUTCH) {
		re = REG_EX_STAT_DEUTCH;
	} else if(languageChoice == LANGUAGE_ESPANOL) {
		re = REG_EX_STAT_ESPANOL;
	} else if(languageChoice == LANGUAGE_FRANCAIS) {
		re = REG_EX_STAT_FRANCAIS;
	} else {
		re = REG_EX_STAT_ENGLISH;
	}
	
    text = text.replace(re,'<span class="stat $1">$1</span>');
    return text;
};

function findAffinities(description){
    if(languageChoice == LANGUAGE_ENGLISH) {
		description = this.replaceEnglishAffinities(REG_EX_AFFINITY_ENGLISH, description);
	} else if(languageChoice == "de") {
		description = this.replaceDeutchAffinities(REG_EX_AFFINITY_DEUTCH, description);
	} else if(languageChoice == "es") {
		description = this.replaceEspanolAffinities(REG_EX_AFFINITY_ESPANOL, description);
	} else if(languageChoice == "fr") {
		description = this.replaceFrancaisAffinities(REG_EX_AFFINITY_FRANCAIS, description);
	} else {
		description = this.replaceEnglishAffinities(REG_EX_AFFINITY_ENGLISH, description);
	}
    
    return description;
};
  
function findSymbols(text){
	if(languageChoice == LANGUAGE_ENGLISH) {
		text = replaceEnglishSymbols(REG_EX_SYMBOL_ENGLISH, text);
	} else if(languageChoice == LANGUAGE_DEUTCH) {
		text = replaceDeutchSymbols(REG_EX_SYMBOL_DEUTCH, text);
	} else if(languageChoice == LANGUAGE_ESPANOL) {
		text = replaceEspanolSymbols(REG_EX_SYMBOL_ESPANOL, text);
	} else if(languageChoice == LANGUAGE_FRANCAIS) {
		text = replaceFrancaisSymbols(REG_EX_SYMBOL_FRANCAIS, text);
	} else {
		text = replaceEnglishSymbols(REG_EX_SYMBOL_ENGLISH, text);
	}

	return text;
};

/**
   *search function that returns a modified version of the text passed into with the keywords highlighted.
   */
function findImmunities(text){
	if(languageChoice == LANGUAGE_ENGLISH) {
		text = replaceEnglishImmunities(REG_EX_IMMUNITY_ENGLISH, text);
	} else if(languageChoice == LANGUAGE_DEUTCH) {
		text = replaceDeutchImmunities(REG_EX_IMMUNITY_DEUTCH, text);
	} else if(languageChoice == LANGUAGE_ESPANOL) {
		text = replaceEspanolImmunities(REG_EX_IMMUNITY_ESPANOL, text);
	} else if(languageChoice == LANGUAGE_FRANCAIS) {
		text = replaceFrancaisImmunities(REG_EX_IMMUNITY_FRANCAIS, text);
	} else {
		text = replaceEnglishImmunities(REG_EX_IMMUNITY_ENGLISH, text);
	}
	
	return text;
};

function findDice(text){
	//regular expression - https://regex101.com/#javascript
	
	if(languageChoice == LANGUAGE_ENGLISH) {
		text = replaceEnglishStats(REG_EX_DIE_ENGLISH, text);
	} else if(languageChoice == LANGUAGE_DEUTCH) {
		text = replaceDeutchStats(REG_EX_DIE_DEUTCH, text);
	} else if(languageChoice == LANGUAGE_ESPANOL) {
		text = replaceEspanolStats(REG_EX_DIE_ESPANOL, text);
	} else if(languageChoice == LANGUAGE_FRANCAIS) {
		text = replaceFrancaisStats(REG_EX_DIE_FRANCAIS, text);
	} else {
		text = replaceEnglishStats(REG_EX_DIE_ENGLISH, text);
	}
	    
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
			element.classList.add(STAT_STR_ENGLISH);
		} else if(stat == 1) {
			element.classList.add(STAT_ARM_ENGLISH);
		} else if(stat == 2) {
			element.classList.add(STAT_WILL_ENGLISH);
		} else if(stat == 3) {
			element.classList.add(STAT_DEX_ENGLISH);
		}
		stat++;
	}
}

function substituteLanguage(className, en, de, es, fr) {
	var elements = document.getElementsByClassName(className);
	for(var x=0; x < elements.length; x++) {
		var element = elements[x];
		var eValue = element.innerHTML;
			
		if(languageChoice == LANGUAGE_ENGLISH) {
			element.innerText = en;
		} else if(languageChoice == LANGUAGE_DEUTCH) {
			element.innerText = de;
		} else if(languageChoice == LANGUAGE_ESPANOL) {
			element.innerText = es;
		} else if(languageChoice == LANGUAGE_FRANCAIS) {
			element.innerText = fr;
		} else {
			element.innerText = en;
		}
	}
}
