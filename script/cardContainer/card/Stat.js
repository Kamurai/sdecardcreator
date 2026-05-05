/**
 *   SDE Card Creator source file Stat,
 *   Copyright (C) 2015  James M Adams
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
 * Stat Diplayed on a card.
 * @param {string} name - Stat name.
 * @param {string} permissions - class view permissions.
 * @param {string} value - Stat value.
 * @class
 */
function Stat(parent, name, permissions, value){
  this.template='<div class="banner">' +
  '<div class="'+permissions+' stat '+languageChoice+' '+name+'">'+
  '<div class="offense">0</div>'+
  '<div class="defense"></div>'+
  '<div class="diceList">'+
  '<div class="dice star">0</div>'+
  '<div class="dice blue">0</div>'+
  '<div class="dice red">0</div>'+
  '<div class="dice green">0</div>'+
  '<div class="dice yellow">0</div>'+
  '<div class="dice purple">0</div>'+
  '<div class="dice orange">0</div>'+
  '<div class="dice black">0</div>'+
  '<div class="dice brown">0</div>'+
  '<div class="dice pink">0</div>'+
  '<div class="dice white">0</div>'+
  '</div>'+
  '</div>'+
  '</div>';

  this.parent=undefined;
  this.node=undefined;
  this.permissions=undefined;
  this.value="";

  /**
   * Creates the card stat.
   */
  this._constructor=function(){
    this.parent=parent;
    this.node=$(this.template).appendTo(this.parent.node.find('.stats'));
    this.node.data('node',this);

    //set permissions to this scope.
    if(permissions === undefined){
      this.permissions="";
    }else{
      this.permissions = permissions;
    }

    //set value to this scope.
    if(value === undefined){
      this.value="";
    }else{
      this.value = value;
    }

    //set initial value
    this.setValue(this.value);
  };


  /**
   * Set the Stat value.
   * @param {string} value
   */
  this.setValue = function(value){
    // empty hide logic
    if(value===""){
      this.node.css("display",'none');
    }else{
      this.node.css("display",'');
    }

    //reset state
    this.node.find('.offense').removeClass('melee missile magic').css("visibility","hidden");
    this.node.find('.defense').css("visibility","hidden");
    this.node.find('.diceList').find('div').css("display","none");

    //set the value
    var re = /\b(\d+)(SW|MA|MI|ST|B|R|G|Y|P|O|L|N|I|W)\b|\b(SH)\b/g;
    value.replace(re,$.proxy(this.parseValue,this));
  };


  /**
   * Handle the parsed value.
   * @param {array} match - The set of matches.
   * @param {string} number - Parsed number.
   * @param {string} type - Parsed type.
   * @param {string} shield - Parsed shield.
   */
  this.parseValue = function(match,number,type,shield){
    if(number !== undefined && type !== undefined){
      if(type==='B'){
        $(this.node).find('.blue').css("display","").text(number);
      }else if(type==='R'){
        $(this.node).find('.red').css("display","").text(number);
      }else if(type==='G'){
        $(this.node).find('.green').css("display","").text(number);
      }else if(type==='Y'){
        $(this.node).find('.yellow').css("display","").text(number);
      }else if(type==='P'){
        $(this.node).find('.purple').css("display","").text(number);
      }else if(type==='O'){
        $(this.node).find('.orange').css("display","").text(number);
      }else if(type==='L'){
        $(this.node).find('.black').css("display","").text(number);
      }else if(type==='N'){
        $(this.node).find('.brown').css("display","").text(number);
      }else if(type==='I'){
        $(this.node).find('.pink').css("display","").text(number);
      }else if(type==='W'){
        $(this.node).find('.white').css("display","").text(number);
      }else if(type==='ST'){
        $(this.node).find('.star').css("display","").text(number);
      }else if(type==='SW'){
        $(this.node).find('.offense').addClass('melee').css("visibility","").text(number);
      }else if(type==='MI'){
        $(this.node).find('.offense').addClass('missile').css("visibility","").text(number);
      }else if(type==='MA'){
        $(this.node).find('.offense').addClass('magic').css("visibility","").text(number);
      }
    } else if(shield !==undefined){
      $(this.node).find('.defense').css("visibility","");
    }
  };

  //main
  this._constructor();
}
