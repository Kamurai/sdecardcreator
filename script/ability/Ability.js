/**
 *   SDE Card Creator source file Ability,
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
 * Ability linked between the editForm and a Card.
 * @class
 * @todo should support ability reordering.
 */
function Ability(){
  HasAbilityCardNode.call(this);
  HasAbilityFormNode.call(this);
  this.data={};

  this._constructor=function(){
    Ability.counter++;
  };


  /**
   * Close/Delete an ability.
   */
  this.closeAbility=function(){
    var cardNode = $('.cardGroup.selected').data('node');
    cardNode.removeAbility(this);
    this.getCardAbilityNodes().remove();
    this.formNode.remove();
    this._checkKeywords();
  };


  /**
   * Set Name.
   * @param {string} name - Ability Name.
   */
  this.setName=function(name){
    this.data.name=name;
    this.getCardAbilityNodes().find('.name').text(name);
  };


  /**
   * Set Cost Type
   * @param {string} costType - Ability Cost Type.
   */
  this.setCostType=function(costType){
    this.data.costType=costType;

    this._resetCostType();
    this.getCardAbilityNodes().find('.cost').addClass(costType);
    this._cardAbilityDisplay(costType);
    this._formAbilityDisplay(costType);
  };


  /**
   * Reset.
   */
  this._resetCostType=function(){
    this.getCardAbilityNodes().find('.name, .colon, .definition').css('display','');
    this.formNode.find('input[name="name"],input[name="cost"], textarea[name="definition"]').parent().css('display','');
    this.getCardAbilityNodes().find('.cost').removeClass('attack support signature emergencyPotion supportPotion offensePotion special definitionOnly description nameOnly');
  };


  /**
   * Card ability display.
   * @param {object} cardNode - Selected card reference.
   * @param {string} costType - Ability Cost Type.
   */
  this._cardAbilityDisplay=function(costType){
    if(costType==='definitionOnly' || costType==='description'){
      this.getCardAbilityNodes().find('.name, .colon').css('display','none');
    }else if(costType==='nameOnly'){
      this.getCardAbilityNodes().find('.colon, .definition').css('display','none');
    }
  };


  /**
   * Form ability display.
   * @param {string} costType - Ability Cost Type.
   */
  this._formAbilityDisplay=function(costType){
    if(costType==='special'){
      this.formNode.find('input[name="cost"]').parent().css('display','none');
    } else if(costType==='definitionOnly' || costType==='description'){
      this.formNode.find('input[name="name"],input[name="cost"]').parent().css('display','none');
    } else if(costType==='nameOnly'){
      this.formNode.find('input[name="cost"],textarea[name="definition"]').parent().css('display','none');
    }
  };


  /**
   * Set Cost.
   * @param {string} cost - Ability Cost in action points.
   */
  this.setCost=function(cost){
    cost = $("<div>").text(cost).html();
    this.data.cost=cost;
    this.getCardAbilityNodes().find('.cost').html(this.parseAbilityCost(cost));
  };


  /**
   * Parse Ability Cost, if it's zero return an empty space.
   * @return {string}
   */
  this.parseAbilityCost=function(cost){
    if(cost==="0"){
      cost = '&nbsp;';
    }
    return cost;
  };


  /**
   * Set Definition.
   * @param {string} definition - Ability definition.
   */
  this.setDefinition=function(definition){
    definition = $("<div>").text(definition).html();

    this.data.definition=definition;
    this.getCardAbilityNodes().find('.definition').html(this.parseAbility(definition));

    this._checkKeywords();
  };


  /**
   * Parses a string for keywords, dice, affinity, and stats.
   * @param {string} text - string to be parsed.
   */
  this.parseAbility=function(text){
    var keywordStore = $('.page').data('keywordStore');
	var kText = keywordStore.findKeywords(text);
    //var yText = keywordStore.findSymbols(kText);
    //var iText = keywordStore.findImmunities(kText);
    var dText = keywordStore.findDice(kText);
    var aText = keywordStore.findAffinities(dText);
    var sText = keywordStore.findStats(aText);


    return sText;
  };


  /**
   * Force a keyword update on the selected card.
   */
  this._checkKeywords=function(){
    var cardNode = $('.cardGroup.selected').data('node');
    var keywordStore = $('.page').data('keywordStore');
    keywordStore.checkKeywords(cardNode.node.find('.front'));
  };


  /**
   * Collect the json data representation of the object.
   * @return {object} data
   */
  this.gatherData=function(){
    return this.data;
  };


  /**
   * Load Abilities from card data.
   * @param {object} data - Card data.
   */
  this.loadData=function(data){
    if(data.name !== undefined){
      this.setName(data.name);
    }

    if(data.costType !== undefined){
      if(data.costType==='description'){
        data.costType='definitionOnly';
      }

      this.setCostType(data.costType);
    }

    if(data.cost !== undefined){
      this.setCost(data.cost);
    }

    if(data.definition !== undefined){
      this.setDefinition(data.definition);
    }
  };


  //main
  this._constructor();
}

//static data
Ability.counter = 0;
