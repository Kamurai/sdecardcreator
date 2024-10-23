/**
 *   SDE Card Creator source file StatsControl,
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
 * Stats Control.
 * @class
 */
function StatsControl(){
	BaseControl.call(this);
	this.template='<div class="hero monster pet arcadeSolo stats">'+
		'<h2><a class="toggleDisplay" href=""><span class="uiStats">Stats</span></a></h2>'+
    
		'<div class="controlContent hide">'+
			'<div class="hero monster pet arcadeSolo"><span class="controlSTR">STR </span><input name="STR" value="1SW 3B" /></div>'+
			'<div class="hero monster pet arcadeSolo"><span class="controlARM">ARM </span><input name="ARM" value="2B 1R SH" /></div>'+
			'<div class="arcadeSolo"><span class="controlRNG">RNG </span><input name="RNG" value="6RG"/></div>'+
			'<div class="hero monster pet"><span class="controlWILL">WILL </span><input name="WILL" value="3B" /></div>'+
			'<div class="hero monster pet"><span class="controlDEX">DEX </span><input name="DEX" value="3B" /></div>'+
			'<div class="hero pet monster arcadeSolo displayInline"><span class="controlWounds">Wounds </span><input class="number" type="number" name="wounds" value="5" min="-9" max="99" /></div>'+
			'<div class="monster displayInline"><span class="controlSkullPoints">Skull Points </span><input class="number" type="number" name="skulls" value="1" min="-9" max="99" /></div>'+
			'<div class="hero displayInline"><span class="controlPotions">Potions </span><input class="number" type="number" name="potions" value="1" min="-9" max="99" /></div>'+
			'<div class="pet displayInline"><span class="controlPetCost">Pet Cost </span><input class="number" type="number" name="petCost" value="1" min="-9" max="99" /></div>'+
		'</div>'+
	'</div>';


  /**
   * Setup stats control.
   */
  this.setup=function(){
    HasToggleDisplay.call(this);
    HasHelpButton.call(this);
    HasStatsControl.call(this);
  };


  /**
   * Sync stats from selected card.
   */
  this.sync=function(data){
    this.syncStats(data);
  };

  this._constructor();
}
