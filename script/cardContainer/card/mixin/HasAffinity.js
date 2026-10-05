/**
 *   SDE Card Creator source file HasAffinity,
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
 * Affinity Card mixin.
 * @mixin
 */
function HasAffinity(){
  /**
   * Set Affinity on the card.
   * @param {string} affinity - affinity keyword.
   */
  this.setAffinity=function(affinity){
    this.data.affinity = affinity;
    this.node.find('.cardAffinity').removeClass('ALL ALLAFFINITY AMETHYST AMETHYSTCITRINE AMETHYSTEEMERALD AMETHYSTRUBY AMETHYSTSAPPHIRE CITRINE CITRINEAMETHYST CITRINEEMERALD CITRINERUBY CITRINESAPPHIRE EMERALD EMERALDAMETHYST EMERALDCITRINE EMERALDRUBY EMERALDSAPPHIRE RUBY RUBYAMETHYST RUBYCITRINE RUBYEMERALD RUBYSAPPHIRE SAPPHIRE SAPPHIREAMETHYST SAPPHIRECITRINE SAPPHIREEMERALD SAPPHIRERUBY');
    this.node.find('.cardAffinity').addClass(affinity);
  };


  /**
   * Load affinity from card data.
   * @param {object} data - Card Data.
   */
  this.loadCardAffinity=function(data){
    if(data.affinity !== undefined){
      this.setAffinity(data.affinity);
    }
  };
}
