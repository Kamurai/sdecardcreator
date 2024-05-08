/**
 *   SDE Card Creator source file HasKeywordListControl,
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
 * Keyword List Control.
 * @mixin
 */
function HasKeywordListControl(){
  this.keywordSettings = this.node.find('.keywordSettings');
  this.keywordList = this.node.find('input[name="keywordsList"]');
  this.keyDialog=undefined;


  /**
   * Keyword settings click.
   */
  this.keywordSettings.click(function(event){
    event.preventDefault();
    this.showSettings();
  }.bind(this));


  /**
   * Opens the settings dialog.
   */
  this.showSettings=function(){
    if(this.keyDialog===undefined){
      var keywordStore = $('.page').data('keywordStore');
      this.keyDialog = new KeywordSettings(keywordStore);
    }

    //set the controls state
    this.keyDialog.setupList();
    this.keyDialog.reset();

    //display the dialog @todo convert this a standard dialog.
    this.keyDialog.node.dialog({dialogClass: "keywordSettingsDialog", width: 500});
  };


  /**
   * Keyord text input.
   */
  this.keywordList.on('input',$.proxy(function(coreNode,event){
    coreNode.setKeywords($(this).val().toUpperCase());
  },null,this));


  /**
   * Set card keywords.
   * @param {string} keywords - Card keywords.
   */
  this.setKeywords=function(keywords){
    var cardNode = $('.cardGroup.selected').data('node');
    cardNode.setKeywords(keywords);
  };


  /**
   * Sync keywords from selected card.
   */
  this.syncKeywords=function(data){
    if(data.keywordsList!==undefined){
      this.keywordList.val(data.keywordsList);
    }
  };
}
