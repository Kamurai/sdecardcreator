/**
 *   SDE Card Creator source file HasItemStats,
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
 * Item Stats Card mixin.
 * @mixin
 */
function HasItemStats(){

  /**
   * Set ItemStats.
   * @param {string} itemStats
   */
  this.setItemStats=function(itemStats){
    this.data.itemStats = itemStats;

    var keywordStore = $('.page').data('keywordStore');

    //set parsed text
    var tItemStats = keywordStore.findKeywords(itemStats);
    tItemStats = keywordStore.findDice(tItemStats);
    tItemStats = keywordStore.findAffinities(tItemStats);
    tItemStats = keywordStore.findStats(tItemStats);

    this.node.find('.itemStats').html(tItemStats);

    //place keywords on back of card.
    keywordStore.checkKeywords(this.node.find('.front'));
  };


  /**
   * Load card information stat information from card data.
   * @param {object} data - Card Data.
   */
  this.loadCardItemStats=function(data){
    if(data.itemStats !== undefined){
      this.setItemStats(data.itemStats);
    }
  };
}
