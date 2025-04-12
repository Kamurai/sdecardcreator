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
						'<h3><span class="uiDiceTypes">'+UI_DICE_TYPES_ENGLISH+'</span></h3>'+
						'<ul>'+
							//'<span class="dice star">1</span>' +
	
							'<li class="legendStar">'+UI_LEGEND_STAR_ENGLISH+'</li>'+
							'<li class="legendBlue">'+UI_LEGEND_BLUE_ENGLISH+'</li>'+
							'<li class="legendRed">'+UI_LEGEND_RED_ENGLISH+'</li>'+
							'<li class="legendGreen">'+UI_LEGEND_GREEN_ENGLISH+'</li>'+
							'<li class="legendOrange">'+UI_LEGEND_ORANGE_ENGLISH+'</li>'+
							'<li class="legendPurple">'+UI_LEGEND_PURPLE_ENGLISH+'</li>'+
						'</ul>'+
					'</div>'+
					'<div class="helpUnit">'+
						'<h3><span class="uiModifiers">'+UI_MODIFIERS_ENGLISH+'</span></h3>'+
						'<ul>'+
							'<li class="legendMelee">'+UI_LEGEND_MELEE_ENGLISH+'</li>'+
							'<li class="legendMissile">'+UI_LEGEND_MISSILE_ENGLISH+'</li>'+
							'<li class="legendMagic">'+UI_LEGEND_MAGIC_ENGLISH+'</li>'+
							'<li class="legendRange">'+UI_LEGEND_RANGE_ENGLISH+'</li>'+
							'<li class="legendAction">'+UI_LEGEND_ACTION_ENGLISH+'</li>'+
							'<li class="legendMove">'+UI_LEGEND_MOVEMENT_ENGLISH+'</li>'+
							'<li class="legendShield">'+UI_LEGEND_SHIELD_ENGLISH+'</li>'+
							'<li class="legendHeart">'+UI_LEGEND_HEART_ENGLISH+'</li>'+
							'<li class="legendPotion">'+UI_LEGEND_POTION_ENGLISH+'</li>'+
						'</ul>'+
					'</div>'+
				'</div>'+
				'<div class="helpUnit">'+
					'<h3><span class="uiStatuses">'+UI_STATUSES_ENGLISH+'</span></h3>'+
					'<ul>'+
						'<li class="legendAugment">'+UI_LEGEND_AUGMENT_ENGLISH+'</li>'+
						'<li class="legendBane">'+UI_LEGEND_BANE_ENGLISH+'</li>'+
						'<li class="legendDangerous">'+UI_LEGEND_DANGEROUS_ENGLISH+'</li>'+
						'<li class="legendFire">'+UI_LEGEND_FIRE_ENGLISH+'</li>'+
						'<li class="legendHex">'+UI_LEGEND_HEX_ENGLISH+'</li>'+
						'<li class="legendIce">'+UI_LEGEND_ICE_ENGLISH+'</li>'+
						'<li class="legendImmobile">'+UI_LEGEND_IMMOBILE_ENGLISH+'</li>'+
						'<li class="legendKnockdown">'+UI_LEGEND_KNOCKDOWN_ENGLISH+'</li>'+
						'<li class="legendPoison">'+UI_LEGEND_POISON_ENGLISH+'</li>'+
						'<li class="legendSlow">'+UI_LEGEND_SLOW_ENGLISH+'</li>'+
					'</ul>'+
				'</div>'+
				'<div class="helpUnit">'+
					'<h3><span class="uiImmunities">'+UI_IMMUNITIES_ENGLISH+'</span></h3>'+
					'<ul>'+
						'<li class="legendImmuneAll">'+UI_LEGEND_IMMUNE_ALL_ENGLISH+'</li>'+
						'<li class="legendImmuneBane">'+UI_LEGEND_IMMUNE_BANE_ENGLISH+'</li>'+
						'<li class="legendImmuneFire">'+UI_LEGEND_IMMUNE_FIRE_ENGLISH+'</li>'+
						'<li class="legendImmuneHex">'+UI_LEGEND_IMMUNE_HEX_ENGLISH+'</li>'+
						'<li class="legendImmuneIce">'+UI_LEGEND_IMMUNE_ICE_ENGLISH+'</li>'+
						'<li class="legendImmuneImmobile">'+UI_LEGEND_IMMUNE_IMMOBILE_ENGLISH+'</li>'+
						'<li class="legendImmuneKnockdown">'+UI_LEGEND_IMMUNE_KNOCKDOWN_ENGLISH+'</li>'+
						'<li class="legendImmunePoison">'+UI_LEGEND_IMMUNE_POISON_ENGLISH+'</li>'+
						'<li class="legendImmuneSlow">'+UI_LEGEND_IMMUNE_SLOW_ENGLISH+'</li>'+
					'</ul>'+
				'</div>'+
				'<div class="helpUnit">'+
					'<h3><span class="uiAffinities">'+UI_AFFINITIES_ENGLISH+'</span></h3>'+
					'<ul>'+
						'<li class="legendAllAffinity">'+UI_LEGEND_AFFINITY_ALL_ENGLISH+'</li>'+
						'<li class="legendAmethyst">'+UI_LEGEND_AMETHYST_ENGLISH+'</li>'+
						'<li class="legendAmethystCitrine">'+UI_LEGEND_AMETHYST_CITRINE_ENGLISH+'</li>'+
						'<li class="legendAmethystEmerald">'+UI_LEGEND_AMETHYST_EMERALD_ENGLISH+'</li>'+
						'<li class="legendAmethystRuby">'+UI_LEGEND_AMETHYST_RUBY_ENGLISH+'</li>'+
						'<li class="legendAmethystSapphire">'+UI_LEGEND_AMETHYST_SAPPHIRE_ENGLISH+'</li>'+
						
						'<li class="legendCitrine">'+UI_LEGEND_CITRINE_ENGLISH+'</li>'+
						'<li class="legendCitrineAmethyst">'+UI_LEGEND_CITRINE_AMETHYST_ENGLISH+'</li>'+
						'<li class="legendCitrineEmerald">'+UI_LEGEND_CITRINE_EMERALD_ENGLISH+'</li>'+
						'<li class="legendCitrineRuby">'+UI_LEGEND_CITRINE_RUBY_ENGLISH+'</li>'+
						'<li class="legendCitrineSapphire">'+UI_LEGEND_CITRINE_SAPPHIRE_ENGLISH+'</li>'+
						
						'<li class="legendEmerald">'+UI_LEGEND_EMERALD_ENGLISH+'</li>'+
						'<li class="legendEmeraldAmethyst">'+UI_LEGEND_EMERALD_AMETHYST_ENGLISH+'</li>'+
						'<li class="legendEmeraldCitrine">'+UI_LEGEND_EMERALD_CITRINE_ENGLISH+'</li>'+
						'<li class="legendEmeraldRuby">'+UI_LEGEND_EMERALD_RUBY_ENGLISH+'</li>'+
						'<li class="legendEmeraldSapphire">'+UI_LEGEND_EMERALD_SAPPHIRE_ENGLISH+'</li>'+
						
						'<li class="legendRuby">'+UI_LEGEND_RUBY_ENGLISH+'</li>'+
						'<li class="legendRubyAmethyst">'+UI_LEGEND_RUBY_AMETHYST_ENGLISH+'</li>'+
						'<li class="legendRubyCitrine">'+UI_LEGEND_RUBY_CITRINE_ENGLISH+'</li>'+
						'<li class="legendRubyEmerald">'+UI_LEGEND_RUBY_EMERALD_ENGLISH+'</li>'+
						'<li class="legendRubySapphire">'+UI_LEGEND_RUBY_SAPPHIRE_ENGLISH+'</li>'+
						
						'<li class="legendSapphire">'+UI_LEGEND_SAPPHIRE_ENGLISH+'</li>'+
						'<li class="legendSapphireAmethyst">'+UI_LEGEND_SAPPHIRE_AMETHYST_ENGLISH+'</li>'+
						'<li class="legendSapphireCitrine">'+UI_LEGEND_SAPPHIRE_CITRINE_ENGLISH+'</li>'+
						'<li class="legendSapphireEmerald">'+UI_LEGEND_SAPPHIRE_EMERALD_ENGLISH+'</li>'+
						'<li class="legendSapphireRuby">'+UI_LEGEND_SAPPHIRE_RUBY_ENGLISH+'</li>'+
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
