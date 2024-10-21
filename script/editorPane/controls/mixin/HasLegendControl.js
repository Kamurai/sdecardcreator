/**
 *   SDE Card Creator source file HasLegendControl,
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
 * Legend Control.
 * @mixin
 */
function HasLegendControl(){
  this.legendButtons = this.node.find('.legend');


  /**
   * Legend click.
   
  this.legendButtons.on('click',$.proxy(function(coreNode,event){
    event.preventDefault();
    var action = $(this).data('action');
    coreNode.modifyCard(action);
  },null,this));*/


  /**
   * Modify card action.
   
  this.modifyCard=function(action){
    var cardContainer = $('.cardContainer').data('node');

    if(action==='delete'){
      cardContainer.deleteSelectedCard();
    }else if(action==='duplicate'){
      cardContainer.duplicateSelectedCard();
    }else if(action==='up'){
      cardContainer.moveSelectedCardUp();
    }else if(action==='down'){
      cardContainer.moveSelectedCardDown();
    }
  };*/
}
