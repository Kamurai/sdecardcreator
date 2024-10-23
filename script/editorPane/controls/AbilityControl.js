/**
 *   SDE Card Creator source file AbilityControl,
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
 * Ability Control.
 * @class
 */
function AbilityControl(){
  BaseControl.call(this);
  this.template=
	'<div class="hero monster pet loot treasure explore wonder command timeout arcadeSolo abilitySection">'+
		'<h2><a class="toggleDisplay" href=""><span class="uiAbility">Ability</span></a></h2>'+
		'<div class="controlContent hide">'+
    
			'<div class="abilities"></div>'+
			'<a href="" class="addAbility"><span class="uiAddAbility">Add Ability</span> +</a>'+
		'</div>'+
	'</div>';


  /**
   * Setup ability control
   */
  this.setup=function(){
    HasToggleDisplay.call(this);
    HasHelpButton.call(this);

    HasAddAbilityControl.call(this);
  };


  /**
   * Sync abilities from selected card.
   */
  this.sync=function(abilities){
    this.syncAbilities(abilities);
  };

  this._constructor();
}
