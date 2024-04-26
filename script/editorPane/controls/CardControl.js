/**
 *   SDE Card Creator source file CardControl,
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
 * Card Control.
 * @class
 */
function CardControl(){
  BaseControl.call(this);
  this.template='<div class="cardOverall">'+
  '<h2><a class="toggleDisplay" href=""><span class="uiCard">Card</span></a></h2>'+
  '<div class="controlContent hide">'+
  	'<span class="uiType">Type</span> <select name="cardType">'+
  		'<option value="hero" class="uiHero">Hero</option>'+
  		'<option value="monster" class="uiMonster">Monster</option>'+
  		'<option value="pet" class="uiPet">Pet</option>'+
  		'<option disabled>----------</option>'+
  		'<option value="loot" class="uiLoot">Loot</option>'+
  		'<option value="treasure" class="uiTreasure">Treasure</option>'+
  		'<option value="wonder" class="uiWonder">Wonder</option>'+
      '<option value="explore" class="uiExplore">Explore</option>'+
  		'<option disabled>----------</option>'+
  		'<option value="timeout" class="uiTimeout">Timeout</option>'+
      '<option disabled>----------</option>'+
      '<option value="command" class="uiCommand">Command</option>'+
      '<option disabled>----------</option>'+
  		'<option disabled class="uiExperimental">-Experimental-</option>'+
  		'<option value="arcadeSolo" class="uiArcadeSolo">Arcade Solo</option>'+
      '<option value="arcadeGang" class="uiArcadeGang">Arcade Gang</option>'+
  	'</select>'+

  	'<div class="cardScale">'+
  		'<span class="uiScale">Scale</span> <input class="number" name="cardScale" value="1.0" type="number" step="0.1" min="0.1" />'+
  	'</div>'+

    '<div class="author">'+
      '<span class="uiAuthor">Author</span> <input class="text" name="author" />'+
    '</div>'+

  	'<div class="monster hero pet timeout">'+
  		'<span class="uiBorder">Border</span> '+
  		'<select name="region">'+
  			'<option value="blue" class="uiBlue">Blue</option>'+
			'<option value="red" class="uiRed">Red</option>'+
  			'<option value="green" class="uiGreen">Green</option>'+
  			'<option value="purple" class="uiPurple">Purple</option>'+
  			'<option value="yellow" class="uiYellow">Yellow</option>'+
			'<option value="orange" class="uiOrange">Orange</option>'+
			'<option value="brown" class="uiBrown">Brown</option>'+
			'<option value="pink" class="uiPink">Pink</option>'+
			'<option value="gray" class="uiGray">Gray</option>'+
			'<option value="white" class="uiWhite">White</option>'+
			'<option value="black" class="uiBlack">Black</option>'+
			
			'<option value="classicBlue" class="uiClassicBlue">Classic Blue</option>'+
			'<option value="classicRed" class="uiClassicRed">Classic Red</option>'+
  			'<option value="classicGreen" class="uiClassicGreen">Classic Green</option>'+
  			'<option value="classicPurple" class="uiClassicPurple">Classic Purple</option>'+
  			'<option value="classicYellow" class="uiClassicYellow">Classic Yellow</option>'+
  		'</select>'+
  	'</div>'+

  	'<div class="treasure loot">'+
  		'Orientation '+
  		'<select name="orientation">'+
  			'<option value="ruby">Top</option>'+
  			'<option value="emerald">Right</option>'+
  			'<option value="sapphire">Bottom</option>'+
  			'<option value="citrine">Left</option>'+
  		'</select>'+
  	'</div>'+
    '</div>'+
  '</div>';


  /**
   * Setup card control.
   */
  this.setup=function(){
    HasToggleDisplay.call(this);
    HasCardTypeControl.call(this);
    HasScaleControl.call(this);
    HasRegionControl.call(this);
    HasOrientationControl.call(this);
  };

  /**
   * Sync card type, scale, region, and orientation from selected card.
   */
  this.sync=function(data){
    this.syncCardType(data);
    this.syncScale(data);
    this.syncAuthor(data);
    this.syncRegion(data);
    this.syncOrientation(data);
  };

  this._constructor();
}
