/**
 *   SDE Card Creator source file FlavorTextControl,
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
 * Flavor Text Control.
 * @class
 */
function FlavorTextControl(){
  BaseControl.call(this);
  this.template='<div class="hero monster loot treasure wonder explore arcadeSolo flavorText">'+
    '<h2><a class="toggleDisplay" href=""><span class="uiFlavorText">Flavor Text</span></a></h2>'+
    '<div class="controlContent hide">'+
    '<textarea name="flavorText" /></textarea>'+
    '</div>'+
  '</div>';

  /**
   * Setup flavor text control.
   */
  this.setup=function(){
    HasToggleDisplay.call(this);
    HasFlavorTextControl.call(this);
  };


  /**
   * Sync flavor text from selected card.
   */
  this.sync=function(data){
    this.syncFlavorText(data);
  };

  this._constructor();
}
