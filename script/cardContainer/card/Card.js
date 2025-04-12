/**
 *   SDE Card Creator source file Card,
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
 * An SDE Card.
 * @class
 */
function Card(animate,appendAfter){
  this.data={
    "cardType": "hero",
    "title": "title",
    "author":"",
    "subTitle": "subTitle",
    "move": "6",
    "actions": "3",
    "wounds": "5",
    "potions": "1",
    "petCost": "1",
    "keywordsList": "",
    "background": "fae_wood.jpg",
    "backgroundFlip": false,
    "imageSource": "default",
    "STR": "1SW 3B",
    "ARM": "2B 1R SH",
    "WILL": "3B",
    "DEX": "3B",
    "flavorText": "",
    "abilities": [],
    "affinity": "CITRINE"
  };

  this.template='<div class="cardGroup selected">'+
  	'<div class="cardDiv">'+
  		'<div class="card hero blue">'+

  			'<div class="front">'+
        '<div class="slot RUBY hero"></div>'+
        '<div class="slot EMERALD hero"></div>'+
        '<div class="slot SAPPHIRE hero"></div>'+
        '<div class="slot CITRINE hero"></div>'+
  				'<div class="model hero monster pet arcadeSolo">'+
  					'<div class="header">'+
  						'<div class="moveactions" >'+
  							'<span class="move">6</span>'+
  							'<span class="actions">3</span>'+
  						'</div>'+
  						'<div><span class="title">title</span></div>'+
  						'<div><span class="subTitle">subTitle</span></div>'+
  					'</div>'+

  					'<div class="stats">'+
  					'</div>'+

  					'<img class="character" src="" />'+
  					'<div class="background" style="background:url(\'image/background/fae_wood.jpg\') no-repeat;background-size:100% 100%"></div>'+

  					'<div class="keywordsSection">'+
  						'<span class="clown hero monster arcadeSolo affinity CITRINE"></span>'+
  						'<span class="keywordsList"></span>'+

  						'<div class="subStats">'+
  							'<span class="hero pet monster wounds">5</span>'+
  							'<span class="hero potions">1</span>'+
							'<span class="pet petCost">1</span>'+
							'<span class="monster skulls">1</span>'+
  						'</div>'+
  					'</div>'+

  					'<div class="abilities">'+
  						'<div class="monster bit eight"></div>'+
              '<div class="arcadeSolo arcadeGang arcadeMachineLogo"></div>'+
  					'</div>'+
  				'</div>'+

  				'<div class="item treasure wonder loot explore command timeout">'+
  					'<div class="contentBorder ruby">'+
  						'<div class="content">'+
  							'<div>'+
  								'<div class="explore creepNum"><span class="creepSpawn">3</span></div>'+
  								'<img class="character" src="" />'+
  							'</div>'+
  							'<div><span class="title">title</span></div>'+
  							'<span class="item treasure loot explore itemStats"><span class="dice star">+1</span></span>'+
  							'<div class="item treasure loot explore wonder command timeout abilities"></div>'+
  							'<span class="keywordsList"></span>'+
  							'<div class="treasure loot wonder keywords"></div>'+
  							'<span class="item treasure wonder loot explore flavorText"></span>'+
  						'</div>'+
  					'</div>'+
  					'<div class="treasure loot placeHolder ruby"></div>'+
  				'</div>'+

          '<div class="author"></div>'+
  			'</div>'+
  		'</div>'+
  	'</div>'+

  	'<div class="cardDiv">'+
  		'<div class="card hero blue">'+
  			'<div class="back">'+
  				'<div class="hero monster pet arcadeSolo header">'+
  					'<div class=""><span class="title">title</span></div>'+
  					'<div class=""><span class="subTitle">subTitle</span></div>'+
  				'</div>'+

  				'<div class="contentBorder ruby">'+
  					'<div class="content">'+
  						'<div class="timeout">'+
  							'<div class="explore creepNum"><span class="creepSpawn">3</span></div>'+
  							'<img class="character" src="" />'+
  						'</div>'+
  						'<div><span class="timeout title">title</span></div>'+
  						'<div class="timeout abilities"></div>'+
  						'<div class="monster pet hero arcadeSolo keywords definedKeywords"></div>'+

  						'<div class="monster pet hero arcadeSolo flavor">'+
  						'<div class="flavorBorder"></div>'+
  						'<span class=" flavorText"></span>'+
  						'<div class="flavorBorder"></div>'+
  						'</div>'+
  					'</div>'+
					'<div class="author hero monster arcadeSolo pet timeout"></div>'+
  				'</div>'+
  			'</div>'+
  		'</div>'+
  	'</div>'+
  '</div>';

  this.node=undefined;

  /**
   * Construct the Card Instance.
   */
  this._constructor=function(){
    var cardContainer = $('.cardContainer').data('node');
    if(appendAfter != null){
		if(appendAfter != undefined){
			this.node=$(this.template).insertAfter(appendAfter);
		}else{
			this.node=$(this.template).appendTo(cardContainer.node);
		}
	}else{
		this.node=$(this.template).appendTo(cardContainer.node);
	}
    this.node.data('node',this);

    HasSetTypeDisplay.call(this);
    HasCardTypeControls.call(this);
    HasCardHeader.call(this);
    HasCardImage.call(this);
    HasItemStats.call(this);
    HasStats.call(this);
    HasKeywords.call(this);
    HasAffinity.call(this);
    HasAbilities.call(this);
    HasFlavorText.call(this);
    HasBit.call(this);

    this.setCardType('hero');

    if(animate===true){
      this.node.animateCss('zoomInLeft');
    }
  };


  /**
   * Collect the json data for the card.
   */
  this.gatherData=function(){
    //clone the data
    var data = Object.assign({},this.data);

    if(this.abilities && this.abilities.length > 0){
      data.abilities = [];
      for(var i=0,ability;(ability=this.abilities[i]);i++){
        data.abilities.push(ability.gatherData());
      }
    }
    return data;
  };


  /**
   * Load card data into this card.
   * @param {object} data - Card data.
   */
  this.loadData=function(data){
    this.loadCardType(data);
    this.loadCardHeader(data);
    this.loadCardImage(data);
    this.loadCardItemStats(data);
    this.loadCardStats(data);
    this.loadCardKeywords(data);
    this.loadCardAffinity(data);
    this.loadAbilities(data);
    this.loadCardFlavorText(data);
    this.loadCardBit(data);
  };

  this.initFirstCard=function(){
    //hero
    var data = {"name":"Ability 1","costType":"attack","cost":1,"definition":"+1R -2B 3G 4O 5P 1ST 0MI 1MA 2SW 3RG STR WILL DEX ARM 1AC 2MO 2PO 0SH +1HE ALLAFFINITY AMETHYST AMETHYSTCITRINE CITRINE CITRINEEMERALD EMERALD EMERALDRUBY RUBY RUBYSAPPHIRE SAPPHIRE SAPPHIRECITRINE AUGMENT DANGEROUS BANE HEX FIRE KNOCKDOWN ICE IMMOBILE POISON SLOW IMMUNE: BANE IMMUNE: HEX IMMUNE: FIRE IMMUNE: KNOCKDOWN IMMUNE: ICE IMMUNE: IMMOBILE IMMUNE: POISON IMMUNE: SLOW IMMUNE: ALL"};

    //griefer
    //data = {"cardType": "command","title": "Griefer","imageSource": "default","remoteAvatar": "","abilities": [{"costType": "special","cost": "1","name": "Bully","definition": "All Commands target Hero with the least wrath."}, {"costType": "nameOnly","cost": "1","name": "Move x1","definition": ""}, {"costType": "nameOnly","cost": "1","name": "Fight x1","definition": ""}],"customKeywords": {}};

    var abilityNode = new Ability();
    var editForm = $('.editForm').data('node');
    editForm.abilityControl.addAbilityFromCard(abilityNode,data);
    this.addAbility(abilityNode);
    abilityNode.loadData(data);
  };


  this._constructor();
}
