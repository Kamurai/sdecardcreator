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
        //this.lookup[key.toLowerCase()]=key;
        this.lookup[toCamelCase(key)]=key;
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
   * Find keywords that can contain other keywords.
   */
  this.findKeywords=function(text){
    text = text.replace(this.re,function(match){
      var key = this.lookup[toCamelCase(match)];
      var keyClass = this.resolveKeyClass(key);
      return '<span class="keyword '+keyClass.toUpperCase()+'" data-key="'+toCamelCase(key)+'">'+toCamelCase(key)+'</span>';
    }.bind(this));
    return text;
  };
  
  this.findNKeywords=function(text){
    text = text.replace(this.reN,function(match,key,number){
      //console.log('findNKeywords',match,arguments);
      var dataKey = this.resolveNKey(key);
      var keyClass = this.resolveKeyClass(key);

      return '<span class="keyword '+keyClass.toUpperCase()+'" data-key="'+toCamelCase(dataKey)+'">'+toCamelCase(key)+' '+number+'</span>';
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
	addKeyword(key,data);
  };

	this.parseDescription=function(description){
		return parseDescription(description);
	};
  
	/**
	*search function that returns a modified version of the text passed into with the keywords highlighted.
	*/
	this.findImmunities=function(text){
		return findImmunities(text);
	};
	
	this.findSymbols=function(text){
		return findSymbols(text);
	}

	this.findAffinities=function(description){
		return findAffinities(description);
	};

  	this.findStats=function(text){
		return findStats(text);
	};

	this.findDice=function(text){
		return findDice(text);
	};

  /**
   *
   */
  this.resolveKeyClass=function(key){
    var parts = '';
    var returner ='';
	
	if(key != undefined) {
		parts = key.split(' ');
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
	  checkKeywords(node);
  }
  /*
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
*/

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