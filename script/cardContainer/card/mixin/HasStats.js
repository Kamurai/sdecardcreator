/**
 *   SDE Card Creator source file HasStats,
 *   Copyright (C) 2017  James M Adams
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
 * Card Stats mixin.
 * @mixin
 */
function HasStats(){
  this.STRStat = new Stat(this,"STR", 'hero monster pet', '3B 1SW');
  this.ARMStat = new Stat(this, "ARM", 'hero monster pet', '2B 1R SH');
  this.WILLStat = new Stat(this, "WILL", 'hero monster pet', '3B');
  this.DEXStat = new Stat(this, "DEX", 'hero monster pet', '3B');


  /**
   * Set stat.
   * @param {string} stat - Stat name.
   * @param {string} value - Stat Value.
   */
  this.setStat=function(stat,value){
    var statObject = this[stat+"Stat"];
    this.data[stat]=value;
    statObject.setValue(value);
  };


  /**
   * Set wounds.
   * @param {string} wounds
   */
  this.setWounds=function(wounds){
    this.data.wounds = wounds;
    this.node.find('.wounds').text(wounds);
  };


  /**
   * Set potions.
   * @param {string} potions
   */
  this.setPotions=function(potions){
    this.data.potions = potions;
    this.node.find('.potions').text(potions);
  };


  /**
   * Set petCost.
   * @param {string} petCost
   */
  this.setPetCost=function(petCost){
    this.data.petCost = petCost;
    this.node.find('.petCost').text(petCost);
  };


  /**
   * Set skulls.
   * @param {string} skulls
   */
  this.setSkulls=function(skulls){
    this.data.skulls = skulls;
    this.node.find('.skulls').text(skulls);
  };


  /**
   * Load card stat information from card data.
   * @param {object} data - Card Data.
   */
  this.loadCardStats=function(data){
    if(data.STR !== undefined){
      this.setStat('STR',data.STR);
    }

    if(data.ARM !== undefined){
      this.setStat('ARM',data.ARM);
    }

    if(data.DEX !== undefined){
      this.setStat('DEX',data.DEX);
    }

    if(data.WILL !== undefined){
      this.setStat('WILL',data.WILL);
    }

    if(data.wounds !== undefined){
      this.setWounds(data.wounds);
    }

    if(data.potions !== undefined){
      this.setPotions(data.potions);
    }

    if(data.petCost !== undefined){
      this.setPetCost(data.petCost);
    }

    if(data.skulls !== undefined){
      this.setSkulls(data.skulls);
    }
  };
}
