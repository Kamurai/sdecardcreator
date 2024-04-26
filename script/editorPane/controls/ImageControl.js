/**
 *   SDE Card Creator source file ImageControl,
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
 * Image Control.
 * @class
 */
function ImageControl(){
  BaseControl.call(this);
  this.template='<div class="hero monster pet treasure wonder loot explore character command timeout arcadeSolo">'+
    '<h2><a class="toggleDisplay" href=""><span class="uiImage">Image</span></a></h2>'+
    '<div class="controlContent hide">'+
    '<div class="hero monster pet arcadeSolo"><span class="uiBackground">Background</span> '+
      '<select name="background">'+
        '<option value="fae_wood.jpg">Fae Wood</option>'+
        '<option value="arcadian_dunes_1.png">Arcadian Dunes 1</option>'+
        '<option value="arcadian_dunes_2.png">Arcadian Dunes 2</option>'+
        '<option value="arcadian_dunes_3.png">Arcadian Dunes 3</option>'+
        '<option value="clockwork_cove_1.png">Clockwork Cove 1</option>'+
        '<option value="clockwork_cove_2.png">Clockwork Cove 2</option>'+
        '<option value="clockwork_cove_3.png">Clockwork Cove 3</option>'+
        '<option value="crystalia_castle_1.png">Crystalia Castle 1</option>'+
        '<option value="crystalia_castle_2.png">Crystalia Castle 2</option>'+
        '<option value="crystalia_castle_3.png">Crystalia Castle 3</option>'+
        '<option value="crystalia_castle_4.png">Crystalia Castle 4</option>'+
        '<option value="forgotten-king.png">Forgotten King 1</option>'+
        '<option value="character-background.png">Forgotten King 2</option>'+
        '<option value="frostbyte_1.png">Frostbyte Peaks 1</option>'+
        '<option value="frostbyte_2.png">Frostbyte Peaks 2</option>'+
        '<option value="frostbyte_3.png">Frostbyte Peaks 3</option>'+
        '<option value="frostbyte_4.png">Frostbyte Peaks 4</option>'+
        '<option value="frostbyte_5.png">Frostbyte Peaks 5</option>'+
        '<option value="glauerdoom_moor_1.png">Glauerdoom Moor 1</option>'+
        '<option value="glauerdoom_moor_2.png">Glauerdoom Moor 2</option>'+
        '<option value="glauerdoom_moor_3.png">Glauerdoom Moor 3</option>'+
        '<option value="glauerdoom_moor_4.png">Glauerdoom Moor 4</option>'+
        '<option value="midnightTower_1.png">Midnight Tower 1</option>'+
        '<option value="midnightTower_2.png">Midnight Tower 2</option>'+
        '<option value="midnightTower_3.png">Midnight Tower 3</option>'+
        '<option value="midnightTower_4.png">Midnight Tower 4</option>'+
        '<option value="midnightTower_5.png">Midnight Tower 5</option>'+
        '<option value="midnightTower_6.png">Midnight Tower 6</option>'+
        '<option value="midnightTower_7.png">Midnight Tower 7</option>'+
        '<option value="midnightTower_8.png">Midnight Tower 8</option>'+
        '<option value="roxors-cavern.png">Roxor\'s Cavern</option>'+
        '<option value="von-drakk.png">Von Drakk 1</option>'+
        '<option value="vulcanis_forge_1.png">Vulcanis Forge 1</option>'+
        '<option value="vulcanis_forge_2.png">Vulcanis Forge 2</option>'+
        '<option value="vulcanis_forge_3.png">Vulcanis Forge 3</option>'+
        
		'<option value="arctic.jpg">Arctic</option>'+
        '<option value="castle_room.jpg">Castle Room</option>'+
        '<option value="city_street.jpg">City Street</option>'+
        '<option value="desert.jpg">Desert</option>'+
        '<option value="dragons_hoard.jpg">Dragon Hoard</option>'+
        '<option value="dungeon.jpg">Dungeon</option>'+
        '<option value="fantasy_tower.jpg">Fantasy Tower</option>'+
        '<option value="forrest_stream.jpg">Forrest Stream</option>'+
        '<option value="icy_throne.jpg">Icy Throne</option>'+
        '<option value="kings_throne.jpg">King\'s Throne</option>'+
		'<option value="ships_in_night.png">Ships in the Night</option>'+

        '<option value="kitchen.jpg">Kitchen</option>'+
        '<option value="lonely_tower.jpg">Lonely Tower</option>'+
        '<option value="market.jpg">Market</option>'+
        '<option value="meadow.jpg">Meadow</option>'+
        '<option value="minotaurs_throne_room.jpg">Minotaur\'s Throne Room</option>'+
        '<option value="pirate_cove.jpg">Pirates Cove</option>'+
        '<option value="prison_tower.jpg">Prison Tower</option>'+
        '<option value="queens_throne_room.jpg">Queen\'s Throne Room</option>'+
        '<option value="ruins.jpg">Ruins</option>'+
        '<option value="swamp.jpg">Swamp</option>'+

        '<option value="temple.jpg">Temple</option>'+
        '<option value="tundra.jpg">Tundra</option>'+
        '<option value="valley.jpg">Valley</option>'+
		
		'<option disabled>---NAS----</option>'+
        '<option value="nas_1.png">Ninja All-Stars</option>'+
        '<option value="nas_2.png">Ninja All-Stars 2</option>'+
		'<option value="nas_3.png">Ninja All-Stars 3</option>'+
		'<option value="nas_4.png">Ninja All-Stars 4</option>'+
		
		'<option disabled>---RRI----</option>'+
        '<option value="rri_1.png">Rail Raiders Infinite</option>'+
        '<option value="rri_2.png">Rail Raiders Infinite 2</option>'+
		
		'<option disabled>----------</option>'+
        '<option value="rocks_1.png">Rocks</option>'+
        '<option value="stone_tile.png">Stone Tile</option>'+
        '<option disabled>-Solids-</option>'+
		'<option value="black.png" class="uiBlack">Black</option>'+
        '<option value="white.png" class="uiWhite">White</option>'+
        '<option value="gray.png" class="uiGray">Gray</option>'+
        '<option value="brown.png" class="uiBrown">Brown</option>'+
        '<option value="blue.png" class="uiBlue">Blue</option>'+
        '<option value="red.png" class="uiRed">Red</option>'+
        '<option value="yellow.png" class="uiYellow">Yellow</option>'+
        '<option value="green.png" class="uiGreen">Green</option>'+
        '<option value="orange.png" class="uiOrange">Orange</option>'+
        '<option value="purple.png" class="uiPurple">Purple</option>'+
        '<option value="transparent.png" class="uiTransparent">Transparent</option>'+
        '<option disabled>----------</option>'+
      '</select>'+
      '<a class="backgroundFlip inactive" href="" title="Mirror Background">'+
      '<svg data-reactroot="" class="Icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" style="height: 32px; width: 32px;"><path d="M0 0h512v512H0z" fill="#ffffff" opacity="0"></path><g class="" transform="translate(0,0)" style="touch-action: none;"><path fill="#000000" d="M387.02 278.627v67.883L477.53 256l-90.51-90.51v67.883H124.98V165.49L34.47 256l90.51 90.51v-67.883h262.04z"></path></g><!-- react-empty: 6 --></svg>'+
      '</a>'+
    '</div>'+

    '<div>'+
      '<span class="uiAvatar">Avatar</span>'+
      '<div class="hero monster pet loot treasure wonder explore command timeout arcadeSolo">'+
      '<input type="radio" name="imageSource" value="default" checked="checked"><span class="uiDefault">Default</span>'+
      '</div>'+
      '<div class="explore">'+
      '<input type="radio" name="imageSource" value="creep" />Creep Spawn <input name="creepSpawn" class="number" type="number" min="0" max="99" value="3" />'+
      '</div>'+
      '<div><input type="radio" name="imageSource" value="remote"><span class="uiRemote">Remote</span> <input name="rCharacter" placeholder="http://" /></div>'+
      '<div><input type="radio" name="imageSource" value="local"><span class="uiLocal">Local</span> <input type="file" name="character" /></div>'+
    '</div>'+
  '</div>'+
  '</div>';


  /**
   * Setup image control.
   */
  this.setup=function(){
    HasToggleDisplay.call(this);
    HasBackgroundControl.call(this);
    HasImageSourceControl.call(this);
  };


  /**
   * Sync background and image source from selected card.
   */
  this.sync=function(data){
    this.syncBackground(data);
    this.syncImageSource(data);
  };

  this._constructor();
}
