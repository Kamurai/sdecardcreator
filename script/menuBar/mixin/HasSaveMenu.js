/**
 *   SDE Card Creator source file HasSaveMenu,
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
 * Save Menu Controls.
 * @mixin
 */
function HasSaveMenu(){
  this.saveMenu = $('.save.subMenu');


  /**
   * Save Json
   */
  this.saveMenu.find('.saveAsJson').click($.proxy(function(coreNode,event){
    event.preventDefault();
	
	var temp = $('input[name="title"]')[0];

    if(temp.checkValidity()){
      var data = coreNode.gatherData();
      coreNode.saveAsFile(JSON.stringify(data),$('.form input[name="title"]').val()+'.json',"text/plain;charset=utf-8");
    }else{
      $('input[name="title"]').addClass('fail');
    }
  },null,this));


  /**
   *
   */
  this.gatherData=function(){
    var data = {};
    data.versionSpec = "2.0";
    data.cards = $('.cardContainer').data('node').gatherData();

    var keywordStore = $('.page').data('keywordStore');
    if(keywordStore && keywordStore.customKeywords && Object.keys(keywordStore.customKeywords).length > 0){
      data.customKeywords = JSON.parse(JSON.stringify(keywordStore.customKeywords));
    }

    return data;
  };


  /**
   * Save png image.
   * @todo should do a check to make sure the image has a title. Or default out the output name if the title is missing.
   */
  this.saveMenu.find('.saveAsImage').click(function(event){
    event.preventDefault();
    var selectedCard = $('.cardGroup.selected');
    selectedCard.find('.card').css('box-shadow','none');
    var title = selectedCard.data('node').data.title;
    domtoimage.toBlob(selectedCard[0])
    .then(function (blob) {
        window.saveAs(blob, title+'.png');
        selectedCard.find('.card').css('box-shadow','');
    });
  });


  /**
   * Used for the save functionality.
   */
  this.saveAsFile=function(t,f,m) {
      try {
    var b = new Blob([t],{type:m});
          saveAs(b, f);
      } catch (e) {
          window.open("data:"+m+"," + encodeURIComponent(t), '_blank','');
      }
  };
}
