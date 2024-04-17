/**
 *   SDE Card Creator source file KeywordStore,
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
 * Keyword Store
 * @class
 */
function KeywordStore(keywords){
  Core.call(this);
  //DATA
  this.data=undefined;
  this.ordered=undefined;
  this.byLength=undefined;
  this.lookup=undefined;
  this.re=undefined;
  this.reN=undefined;
  this.customKeywords=undefined;

  //CONSTRUCTOR
  /**
   * Initializes the store.
   */
  this._constuctor = function(){
    //this._getData();
    this.customKeywords = {};
    this._setup(keywords);
  };

  /**
   * Setup the store.
   * @param {object} data - Keyword data.
   */
  this._setup=function(data){
    this.data = data;

    var raw = [];
    var rawOrder = [];
    this.lookup = {};

    //loop though data keys
    for(var key in data){
      if(data.hasOwnProperty(key)){
        raw.push(key);
        rawOrder.push(key);
        this.lookup[key.toLowerCase()]=key;
      }
    }

    this.ordered = rawOrder.sort(function (a, b) {
      return a.localeCompare(b);
    });

    this.byLength = raw.sort(function(a, b){
      return b.length - a.length; // ASC -> a - b; DESC -> b - a
    });

    this.setupRegularExpression();
  };


  /**
   * Setup regular expressions.
   */
  this.setupRegularExpression=function(){
    var reText = '';
    var reXText = '';

    var re = /(\b\w+\s?\w+\b) \bX\b/;

    for(var i=0,key;(key = this.byLength[i]);i++){
      var results = re.exec(key);

      //check to see if X variable is involved
      if(results){
        reXText+=results[1];
        reXText+='|';
      }else{
        reText+=key;
        reText+='|';
      }
    }

    reXText = reXText.slice(0,-1);
    reText = reText.slice(0,-1);

    //console.log(reText);
    //console.log('\\b('+reText+')\\b','gi');
    this.re = new RegExp('\\b('+reText+')\\b','gi');
    //console.log('\\b('+reXText+')\\b \\b\\d+\\b');
    this.reN = new RegExp('\\b('+reXText+')\\b \\b(\\d+)\\b','gi');
  };


  /**
   *search function that returns a modified version of the text passed into with the keywords highlighted.
   */
  this.findKeywords=function(text){
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
  
function replaceEnglishImmunities(secondaryRe, text) {
	return text.replace(secondaryRe,function(match){
		var result = '<span class="keyword '+match+'" data-key="'+match+'">'+match+'</span>';
		
		return result;
    }.bind(this));
}

function replaceDeutchImmunities(secondaryRe, text) {
	return text.replace(secondaryRe,function(match){
		if(match == 'ALL') {
			match = 'ALL';
		} else if(match == 'IMMUNEBANE') {
			match = 'IMMUNEBANE';
		} else if(match == 'IMMUNEHEX') {
			match = 'IMMUNEHEX';
		} else if(match == 'IMMUNEFIRE') {
			match = 'IMMUNEFIRE';
		} else if(match == 'IMMUNEKNOCKDOWN') {
			match = 'IMMUNEKNOCKDOWN';
		} else if(match == 'IMMUNEICE') {
			match = 'IMMUNEICE';
		} else if(match == 'IMMUNEIMMOBILE') {
			match = 'IMMUNEIMMOBILE';
		} else if(match == 'IMMUNEPOISON') {
			match = 'IMMUNEPOISON';
		} else if(match == 'IMMUNESLOW') {
			match = 'IMMUNESLOW';
		} else if(match == 'IMMUNEALL') {
			match = 'IMMUNEALL';
		}
		
		var result = '<span class="keyword '+match+'" data-key="'+match+'">'+match+'</span>';
		
		return result;
    }.bind(this));
}

function replaceEspanolImmunities(secondaryRe, text) {
	return text.replace(secondaryRe,function(match){
		if(match == 'TODO') {
			match = 'ALL';
		} else if(match == 'INMUNEAESTRAGO') {
			match = 'IMMUNEBANE';
		} else if(match == 'INMUNEAMALEFICIO') {
			match = 'IMMUNEHEX';
		} else if(match == 'INMUNEAFUEGO') {
			match = 'IMMUNEFIRE';
		} else if(match == 'INMUNEADERRIBO') {
			match = 'IMMUNEKNOCKDOWN';
		} else if(match == 'INMUNEAHIELO') {
			match = 'IMMUNEICE';
		} else if(match == 'INMUNEAINMOVIL') {
			match = 'IMMUNEIMMOBILE';
		} else if(match == 'INMUNEAVENENO') {
			match = 'IMMUNEPOISON';
		} else if(match == 'INMUNEARALENTIZAR') {
			match = 'IMMUNESLOW';
		} else if(match == 'INMUNEATODO') {
			match = 'IMMUNEALL';
		}
		
		var result = '<span class="keyword '+match+'" data-key="'+match+'">'+match+'</span>';
		
		return result;
    }.bind(this));
}

function replaceFrancaisImmunities(secondaryRe, text) {
	return text.replace(secondaryRe,function(match){
		if(match == 'ALL') {
			match = 'ALL';
		} else if(match == 'IMMUNEBANE') {
			match = 'IMMUNEBANE';
		} else if(match == 'IMMUNEHEX') {
			match = 'IMMUNEHEX';
		} else if(match == 'IMMUNEFIRE') {
			match = 'IMMUNEFIRE';
		} else if(match == 'IMMUNEKNOCKDOWN') {
			match = 'IMMUNEKNOCKDOWN';
		} else if(match == 'IMMUNEICE') {
			match = 'IMMUNEICE';
		} else if(match == 'IMMUNEIMMOBILE') {
			match = 'IMMUNEIMMOBILE';
		} else if(match == 'IMMUNEPOISON') {
			match = 'IMMUNEPOISON';
		} else if(match == 'IMMUNESLOW') {
			match = 'IMMUNESLOW';
		} else if(match == 'IMMUNEALL') {
			match = 'IMMUNEALL';
		}
		
		var result = '<span class="keyword '+match+'" data-key="'+match+'">'+match+'</span>';
		
		return result;
    }.bind(this));
}

  /**
   * Find keywords that can contain other keywords.
   */
  this.findNKeywords=function(text){
    text = text.replace(this.reN,function(match,key,number){
      //console.log('findNKeywords',match,arguments);
      var dataKey = this.resolveNKey(key);
      var keyClass = this.resolveKeyClass(key);

      return '<span class="keyword '+keyClass.toUpperCase()+'" data-key="'+dataKey+'">'+key+' '+number+'</span>';
    }.bind(this));
    return text;
  };


  /**
   *
   */
  this.resolveNKey=function(key){
    //key = this.ucFirstAllWords(key)+' X';
    return key;
  };


  /**
   *http://stackoverflow.com/a/8330107
   */
  //this.ucFirstAllWords=function(str){
    //str = str.toLowerCase();
    //var pieces = str.split(" ");
    //for ( var i = 0; i < pieces.length; i++ ) {
    //  var j = pieces[i].charAt(0).toUpperCase();
    //  pieces[i] = j + pieces[i].substr(1);
    //}
    //return pieces.join(" ");
	//return str;
  //};


  /**
   *
   */
  this.addKeyword=function(key,data){
	if(data != undefined){
		//var lKey = key.toLowerCase();
		var keyClass = this.resolveKeyClass(key);

		//check to see if the keyword is already added, and if the display flag does not equal false
		if( data.displayBack !== false && data.displayBack !== 'false'  && $('.cardGroup.selected .card .keywords .'+keyClass.toUpperCase()).length ===0){
		  //console.log(key,data);

		  var description = data.description;

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

		  var parsedDescription = this.parseDescription(description);

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
  };


  /**
   *
   */
  this.parseDescription=function(description){
    var keywordDescription = this.findKeywords(description);
    var affinityDescription = this.findAffinity(keywordDescription);
    var diceDescription = this.findDice(affinityDescription);
    var statDescription = this.findStats(diceDescription);
    return statDescription;
  };


  /**
   *
   */
  this.findStats=function(text){
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

  /**
   *
   */
  this.findDice=function(text){
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

  /**
   *
   */
  this.findAffinity=function(description){
    var re;
	var en = /\b(ALLAFFINITY|AMETHYST|AMETHYSTCITRINE|AMETHYSTEMERALD|AMETHYSTRUBY|AMETHYSTSAPPHIRE|CITRINE|CITRINEAMETHYST|CITRINEEMERALD|CITRINERUBY|CITRINESAPPHIRE|EMERALD|EMERALDAMETHYST|EMERALDCITRINE|EMERALDRUBY|EMERALDSAPPHIRE|RUBY|RUBYAMETHYST|RUBYCITRINE|RUBYEMERALD|RUBYSAPPHIRE|SAPPHIRE|SAPPHIREAMETHYST|SAPPHIRECITRINE|SAPPHIREEMERALD|SAPPHIRERUBY)\b/g;
	var de = /\b(ALLAFFINITY|AMETHYST|AMETHYSTCITRINE|AMETHYSTEMERALD|AMETHYSTRUBY|AMETHYSTSAPPHIRE|CITRINE|CITRINEAMETHYST|CITRINEEMERALD|CITRINERUBY|CITRINESAPPHIRE|EMERALD|EMERALDAMETHYST|EMERALDCITRINE|EMERALDRUBY|EMERALDSAPPHIRE|RUBY|RUBYAMETHYST|RUBYCITRINE|RUBYEMERALD|RUBYSAPPHIRE|SAPPHIRE|SAPPHIREAMETHYST|SAPPHIRECITRINE|SAPPHIREEMERALD|SAPPHIRERUBY)\b/g;
	var es = /\b(AFINIDADATODO|AMATISTA|AMATISTACITRINO|AMATISTAESMERALDA|AMATISTARUBI|AMATISTAZAFIRO|CITRINO|CITRINOAMATISTA|CITRINOESMERALDA|CITRINORUBI|CITRINOZAFIRO|ESMERALDA|ESMERALDAAMATISTA|ESMERALDACITRINO|ESMERALDARUBI|ESMERALDAZAFIRO|RUBI|RUBIAMATISTA|RUBICITRINO|RUBIESMERALDA|RUBIZAFIRO|ZAFIRO|ZAFIROAMATISTA|ZAFIROCITRINO|ZAFIROESMERALDA|ZAFIRORUBI)\b/g;
	var fr = /\b(ALLAFFINITY|AMETHYST|AMETHYSTCITRINE|AMETHYSTEMERALD|AMETHYSTRUBY|AMETHYSTSAPPHIRE|CITRINE|CITRINEAMETHYST|CITRINEEMERALD|CITRINERUBY|CITRINESAPPHIRE|EMERALD|EMERALDAMETHYST|EMERALDCITRINE|EMERALDRUBY|EMERALDSAPPHIRE|RUBY|RUBYAMETHYST|RUBYCITRINE|RUBYEMERALD|RUBYSAPPHIRE|SAPPHIRE|SAPPHIREAMETHYST|SAPPHIRECITRINE|SAPPHIREEMERALD|SAPPHIRERUBY)\b/g;

	if(languageChoice == "en") {
		re = en;
		description = replaceEnglishAffinities(re, description);
	} else if(languageChoice == "de") {
		re = de;
		description = replaceDeutchAffinities(re, description);
	} else if(languageChoice == "es") {
		re = es;
		description = replaceEspanolAffinities(re, description);
	} else if(languageChoice == "fr") {
		re = fr;
		description = replaceFrancaisAffinities(re, description);
	} else {
		re = en;
		description = replaceEnglishAffinities(re, description);
	}
    
    return description;
  };
  
function replaceEnglishAffinities(re, description) {
	return description.replace(re,function(match){
		return '<div class="affinity '+match+'" title="'+match+'"></div>';
    });
}
  
function replaceDeutchAffinities(re, description) {
	return description.replace(re,function(match){
		if(match == 'ALLAFFINITY') {
			match = 'ALLAFFINITY';
		} else if(match == 'AMETHYST') {
			match = 'AMETHYST';
		} else if(match == 'AMETHYSTCITRINE') {
			match = 'AMETHYSTCITRINE';
		} else if(match == 'AMETHYSTEMERALD') {
			match = 'AMETHYSTEMERALD';
		} else if(match == 'AMETHYSTRUBY') {
			match = 'AMETHYSTRUBY';
		} else if(match == 'AMETHYSTSAPPHIRE') {
			match = 'AMETHYSTSAPPHIRE';
		} else if(match == 'CITRINE') {
			match = 'CITRINE';
		} else if(match == 'CITRINEAMETHYST') {
			match = 'CITRINEAMETHYST';
		} else if(match == 'CITRINEEMERALD') {
			match = 'CITRINEEMERALD';
		} else if(match == 'CITRINERUBY') {
			match = 'CITRINERUBY';
		} else if(match == 'CITRINESAPPHIRE') {
			match = 'CITRINESAPPHIRE';
		} else if(match == 'EMERALD') {
			match = 'EMERALD';
		} else if(match == 'EMERALDAMETHYST') {
			match = 'EMERALDAMETHYST';
		} else if(match == 'EMERALDCITRINE') {
			match = 'EMERALDCITRINE';
		} else if(match == 'EMERALDRUBY') {
			match = 'EMERALDRUBY';
		} else if(match == 'EMERALDSAPPHIRE') {
			match = 'EMERALDSAPPHIRE';
		} else if(match == 'RUBY') {
			match = 'RUBY';
		} else if(match == 'RUBYAMETHYST') {
			match = 'RUBYAMETHYST';
		} else if(match == 'RUBYCITRINE') {
			match = 'RUBYCITRINE';
		} else if(match == 'RUBYEMERALD') {
			match = 'RUBYEMERALD';
		} else if(match == 'RUBYSAPPHIRE') {
			match = 'RUBYSAPPHIRE';
		} else if(match == 'SAPPHIRE') {
			match = 'SAPPHIRE';
		} else if(match == 'SAPPHIREAMETHYST') {
			match = 'SAPPHIREAMETHYST';
		} else if(match == 'SAPPHIRECITRINE') {
			match = 'SAPPHIRECITRINE';
		} else if(match == 'SAPPHIREEMERALD') {
			match = 'SAPPHIREEMERALD';
		} else if(match == 'SAPPHIRERUBY') {
			match = 'SAPPHIRERUBY';
		}
		
		return '<div class="affinity '+match+'" title="'+match+'"></div>';
    });
}

function replaceEspanolAffinities(re, description) {
	return description.replace(re,function(match){
		if(match == 'AFINIDADATODO') {
			match = 'ALLAFFINITY';
		} else if(match == 'AMATISTA') {
			match = 'AMETHYST';
		} else if(match == 'AMATISTACITRINO') {
			match = 'AMETHYSTCITRINE';
		} else if(match == 'AMATISTAESMERALDA') {
			match = 'AMETHYSTEMERALD';
		} else if(match == 'AMATISTARUBI') {
			match = 'AMETHYSTRUBY';
		} else if(match == 'AMATISTAZAFIRO') {
			match = 'AMETHYSTSAPPHIRE';
		} else if(match == 'CITRINO') {
			match = 'CITRINE';
		} else if(match == 'CITRINOAMATISTA') {
			match = 'CITRINEAMETHYST';
		} else if(match == 'CITRINOESMERALDA') {
			match = 'CITRINEEMERALD';
		} else if(match == 'CITRINORUBI') {
			match = 'CITRINERUBY';
		} else if(match == 'CITRINOZAFIRO') {
			match = 'CITRINESAPPHIRE';
		} else if(match == 'ESMERALDA') {
			match = 'EMERALD';
		} else if(match == 'ESMERALDAAMATISTA') {
			match = 'EMERALDAMETHYST';
		} else if(match == 'ESMERALDACITRINO') {
			match = 'EMERALDCITRINE';
		} else if(match == 'ESMERALDARUBI') {
			match = 'EMERALDRUBY';
		} else if(match == 'ESMERALDAZAFIRO') {
			match = 'EMERALDSAPPHIRE';
		} else if(match == 'RUBI') {
			match = 'RUBY';
		} else if(match == 'RUBIAMATISTA') {
			match = 'RUBYAMETHYST';
		} else if(match == 'RUBICITRINO') {
			match = 'RUBYCITRINE';
		} else if(match == 'RUBIESMERALDA') {
			match = 'RUBYEMERALD';
		} else if(match == 'RUBIZAFIRO') {
			match = 'RUBYSAPPHIRE';
		} else if(match == 'ZAFIRO') {
			match = 'SAPPHIRE';
		} else if(match == 'ZAFIROAMATISTA') {
			match = 'SAPPHIREAMETHYST';
		} else if(match == 'ZAFIROCITRINO') {
			match = 'SAPPHIRECITRINE';
		} else if(match == 'ZAFIROESMERALDA') {
			match = 'SAPPHIREEMERALD';
		} else if(match == 'ZAFIRORUBI') {
			match = 'SAPPHIRERUBY';
		}
		
		return '<div class="affinity '+match+'" title="'+match+'"></div>';
    });
}
  
function replaceFrancaisAffinities(re, description) {
	return description.replace(re,function(match){
		if(match == 'ALLAFFINITY') {
			match = 'ALLAFFINITY';
		} else if(match == 'AMETHYST') {
			match = 'AMETHYST';
		} else if(match == 'AMETHYSTCITRINE') {
			match = 'AMETHYSTCITRINE';
		} else if(match == 'AMETHYSTEMERALD') {
			match = 'AMETHYSTEMERALD';
		} else if(match == 'AMETHYSTRUBY') {
			match = 'AMETHYSTRUBY';
		} else if(match == 'AMETHYSTSAPPHIRE') {
			match = 'AMETHYSTSAPPHIRE';
		} else if(match == 'CITRINE') {
			match = 'CITRINE';
		} else if(match == 'CITRINEAMETHYST') {
			match = 'CITRINEAMETHYST';
		} else if(match == 'CITRINEEMERALD') {
			match = 'CITRINEEMERALD';
		} else if(match == 'CITRINERUBY') {
			match = 'CITRINERUBY';
		} else if(match == 'CITRINESAPPHIRE') {
			match = 'CITRINESAPPHIRE';
		} else if(match == 'EMERALD') {
			match = 'EMERALD';
		} else if(match == 'EMERALDAMETHYST') {
			match = 'EMERALDAMETHYST';
		} else if(match == 'EMERALDCITRINE') {
			match = 'EMERALDCITRINE';
		} else if(match == 'EMERALDRUBY') {
			match = 'EMERALDRUBY';
		} else if(match == 'EMERALDSAPPHIRE') {
			match = 'EMERALDSAPPHIRE';
		} else if(match == 'RUBY') {
			match = 'RUBY';
		} else if(match == 'RUBYAMETHYST') {
			match = 'RUBYAMETHYST';
		} else if(match == 'RUBYCITRINE') {
			match = 'RUBYCITRINE';
		} else if(match == 'RUBYEMERALD') {
			match = 'RUBYEMERALD';
		} else if(match == 'RUBYSAPPHIRE') {
			match = 'RUBYSAPPHIRE';
		} else if(match == 'SAPPHIRE') {
			match = 'SAPPHIRE';
		} else if(match == 'SAPPHIREAMETHYST') {
			match = 'SAPPHIREAMETHYST';
		} else if(match == 'SAPPHIRECITRINE') {
			match = 'SAPPHIRECITRINE';
		} else if(match == 'SAPPHIREEMERALD') {
			match = 'SAPPHIREEMERALD';
		} else if(match == 'SAPPHIRERUBY') {
			match = 'SAPPHIRERUBY';
		}
		
		return '<div class="affinity '+match+'" title="'+match+'"></div>';
    });
}


  /**
   *
   */
  this.resolveKeyClass=function(key){
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
  };


  /**
   *
   */
  this.split=function(val){
    return val.split( /,\s*/ );
  };


  /**
   *
   */
  this.extractLast=function(term){
    return this.split(term).pop();
  };


  /**
   *
   */
  this.setupKeywordsForm=function(){
    var that = this;
    $('.form input[name=keywordsList]').autocomplete({
      minLength: 0,
      source: function( request, response ) {
      // delegate back to autocomplete, but extract the last term
      response( $.ui.autocomplete.filter(this.ordered, this.extractLast( request.term ) ) );
      }.bind(this),
      focus: function() {
        // prevent value inserted on focus
        return false;
      },
      select: function( event, ui ) {
      var terms = that.split( this.value );
      // remove the current input
      terms.pop();
      // add the selected item
      terms.push( ui.item.value );
      // add placeholder to get the comma-and-space at the end
      terms.push( "" );
      this.value = terms.join( ", " );
      $('.form input[name=keywordsList]').trigger('input');
        return false;
      }
    });
  };


  /**
   *
   */
  this.checkKeywords=function(node){
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

    //loop through keysfound
    for(var i=0,key;(key=keysFound[i]);i++){
      this.addKeyword(key,this.data[key]);
    }
  };


  /**
   * params: name, description, version, hasErrata, displayBack
   */
  this.setCustomKey=function(p){
    if(this.data.hasOwnProperty(p.name)===false){
      this.data[p.name]={};
      this.data[p.name].errata=[];
    }

    if(p.hasErrata){
      //console.log('has errata');
      this.data[p.name].errata = p.errata;
    }else{
      p.hasErrata = false;
    }

    if(p.hasOwnProperty('displayBack')===false){
      p.displayBack = true;
    }

    if(p.hasOwnProperty('selectedVersion')){
      this.data[p.name].selectedVersion=p.selectedVersion;
    }

    this.data[p.name].description = p.description;
    this.data[p.name].version = p.version;
    this.data[p.name].hasErrata = p.hasErrata;
    this.data[p.name].displayBack = p.displayBack;

    //setup Custom keyword
    this.customKeywords[p.name] = this.data[p.name];

    this._setup(this.data);
  };


  /**
   *
   */
  this.setCustomKeywords=function(customKeywords){
    this.customKeywords = customKeywords;

    for(var key in customKeywords){
      if(customKeywords.hasOwnProperty(key)){
        this.data[key]= customKeywords[key];
      }
    }

    this._setup(this.data);
    //this.checkKeywords();
  };


  //main
  this._constuctor();
}

KeywordStore.prototype = new Core();
KeywordStore.prototype.constructor = KeywordStore;
