/**
 *   SDE Card Creator source file LegendControl,
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
function LegendControl(){
  BaseControl.call(this);
  
  this.template=
	'<div class="legend">'+
		'<h2><a class="toggleDisplay" href=""><span class="uiLegend">Legend</span></a></h2>'+
		'<div class="controlContent hide">'+
			'<div>'+
				'<div>'+
					'<div class="helpUnit">'+
						'<h3><span class="uiDiceTypes">Dice Types</span></h3>'+
						'<ul>'+
							//'<span class="dice star">1</span>' +
	
							'<li class="legendStar">Star: 1ST</li>'+
							'<li class="legendBlue">Blue: 1B</li>'+
							'<li class="legendRed">Red: 1R</li>'+
							'<li class="legendGreen">Green: 1G</li>'+
							'<li class="legendOrange">Orange: 1O</li>'+
							'<li class="legendPurple">Purple: 1P</li>'+
						'</ul>'+
					'</div>'+
					'<div class="helpUnit">'+
						'<h3><span class="uiModifiers">Modifiers</span></h3>'+
						'<ul>'+
							'<li class="legendMelee">Melee: 1SW</li>'+
							'<li class="legendMissile">Missile: 1MI</li>'+
							'<li class="legendMagic">Magic: 1MA</li>'+
							'<li class="legendRange">Range: 1RG</li>'+
							'<li class="legendAction">Action: 1AC</li>'+
							'<li class="legendMove">Move: 1MO</li>'+
							'<li class="legendShield">Shield: 0SH</li>'+
							'<li class="legendHeart">Heart: 1HE</li>'+
							'<li class="legendPotion">Potion: 1PO</li>'+
						'</ul>'+
					'</div>'+
				'</div>'+
				'<div class="helpUnit">'+
					'<h3><span class="uiStatuses">Statuses</span></h3>'+
					'<ul>'+
						'<li class="legendAugment">Augment: AUGMENT</li>'+
						'<li class="legendDangerous">Dangerous: DANGEROUS</li>'+
						'<li class="legendBane">Bane: BANE</li>'+
						'<li class="legendHex">Hex: HEX</li>'+
						'<li class="legendFire">Fire: FIRE</li>'+
						'<li class="legendKnockdown">Knockdown: KNOCKDOWN</li>'+
						'<li class="legendIce">Ice: ICE</li>'+
						'<li class="legendImmobile">Immobile: IMMOBILE</li>'+
						'<li class="legendPoison">Poison: POISON</li>'+
						'<li class="legendSlow">Slow: SLOW</li>'+
						'<li class="legendAll">All: ALL</li>'+
						
					'</ul>'+
				'</div>'+
				'<div class="helpUnit">'+
					'<h3><span class="uiImmunities">Immunities</span></h3>'+
					'<ul>'+
						'<li class="legendImmuneBane">Immune Bane: IMMUNEBANE</li>'+
						'<li class="legendImmuneHex">Immune Hex: IMMUNEHEX</li>'+
						'<li class="legendImmuneFire">Immune Fire: IMMUNEFIRE</li>'+
						'<li class="legendImmuneKnockdown">Immune Knockdown: IMMUNEKNOCKDOWN</li>'+
						'<li class="legendImmuneIce">Immune Ice: IMMUNEICE</li>'+
						'<li class="legendImmuneImmobile">Immune Immobile: IMMUNEIMMOBILE</li>'+
						'<li class="legendImmunePoison">Immune Poison: IMMUNEPOISON</li>'+
						'<li class="legendImmuneSlow">Immune Slow: IMMUNESLOW</li>'+
						'<li class="legendImmuneAll">Immune All: IMMUNEALL</li>'+
						
					'</ul>'+
				'</div>'+
				'<div class="helpUnit">'+
					'<h3><span class="uiAffinities">Affinities</span></h3>'+
					'<ul>'+
						'<li class="legendAllAffinity">All Affinity: ALLAFFINITY</li>'+
						'<li class="legendAmethyst">Amethyst: AMETHYST</li>'+
						'<li class="legendAmethystCitrine">Amethyst Citrine: AMETHYSTCITRINE</li>'+
						'<li class="legendAmethystEmerald">Amethyst Emerald: AMETHYSTEMERALD</li>'+
						'<li class="legendAmethystRuby">Amethyst Ruby: AMETHYSTRUBY</li>'+
						'<li class="legendAmethystSapphire">Amethyst Sapphire: AMETHYSTSAPPHIRE</li>'+
						
						'<li class="legendCitrine">Citrine: CITRINE</li>'+
						'<li class="legendCitrineAmethyst">Citrine Amethyst: CITRINEAMETHYST</li>'+
						'<li class="legendCitrineEmerald">Citrine Emerald: CITRINEEMERALD</li>'+
						'<li class="legendCitrineRuby">Citrine Ruby: CITRINERUBY</li>'+
						'<li class="legendCitrineSapphire">Citrine Sapphire: CITRINESAPPHIRE</li>'+
						
						'<li class="legendEmerald">Emerald: EMERALD</li>'+
						'<li class="legendEmeraldAmethyst">Emerald Amethyst: EMERALDAMETHYST</li>'+
						'<li class="legendEmeraldCitrine">Emerald Citrine: EMERALDCITRINE</li>'+
						'<li class="legendEmeraldRuby">Emerald Ruby: EMERALDRUBY</li>'+
						'<li class="legendEmeraldSapphire">Emerald Sapphire: EMERALDSAPPHIRE</li>'+
						
						'<li class="legendRuby">Ruby: RUBY</li>'+
						'<li class="legendRubyAmethyst">Ruby Amethyst: RUBYAMETHYST</li>'+
						'<li class="legendRubyCitrine">Ruby Citrine: RUBYCITRINE</li>'+
						'<li class="legendRubyEmerald">Ruby Emerald: RUBYEMERALD</li>'+
						'<li class="legendRubySapphire">Ruby Sapphire: RUBYSAPPHIRE</li>'+
						
						'<li class="legendSapphire">Sapphire: SAPPHIRE</li>'+
						'<li class="legendSapphireAmethyst">Sapphire Amethyst: SAPPHIREAMETHYST</li>'+
						'<li class="legendSapphireCitrine">Sapphire Citrine: SAPPHIRECITRINE</li>'+
						'<li class="legendSapphireEmerald">Sapphire Emerald: SAPPHIREEMERALD</li>'+
						'<li class="legendSapphireRuby">Sapphire Ruby: SAPPHIRERUBY</li>'+
					'</ul>'+
				'</div>'+
			'</div>'+
		'</div>'+
	'</div>';

  /**
   * Setup legend control.
   */
  this.setup=function(){
    HasToggleDisplay.call(this);
    HasLegendControl.call(this);
  };

  this._constructor();
}
