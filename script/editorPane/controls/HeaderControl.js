/**
 *   SDE Card Creator source file HeaderControl,
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
 * Header Control.
 * @class
 */
function HeaderControl(activeClass){
  BaseControl.call(this);
  this.template='<div class="header">'+
  	'<h2><a class="toggleDisplay" href=""><span class="uiHeader">Header</span></a></h2>'+
    '<div class="controlContent">'+
  	'<div class="hero monster pet treasure wonder loot explore command arcadeSolo timeout">*<span class="uiTitle">Title</span> <input name="title" required maxlength="30" /></div>'+
  	'<div class="hero monster pet arcadeSolo"><span class="uiSubTitle">Sub-Title</span> <input name="subTitle" maxlength="40" /></div>'+

  	'<div class="hero monster pet arcadeSolo">'+
  		'<span class="uiMove">Move</span> <input class="number" type="number" name="move" value="6" min="-9" max="99" />'+
  		'<span class="uiActions">Actions</span> <input class="number" type="number" name="actions" value="3" min="-9" max="99"  />'+
  	'</div>'+
  '</div>'+
  '</div>';

  /**
   * Setup header control.
   */
  this.setup=function(){
    HasToggleDisplay.call(this);
    HasTitleControl.call(this);
    HasSubTitleControl.call(this);
    HasMoveControl.call(this);
    HasActionsControl.call(this);

    if(activeClass){
      this.node.find('.displayArrow').removeClass('active inactive').addClass(activeClass);
    }
  };

  /**
   * Sync title, subTitle, move, and actions from selected card.
   */
  this.sync=function(data){
    this.syncTitle(data);
    this.syncSubTitle(data);
    this.syncMove(data);
    this.syncActions(data);
  };

  this._constructor();
}
