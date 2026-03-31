/**
 *   SDE Card Creator source file HasLoadMenu,
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
 * Load Menu Controls.
 * @mixin
 */
function HasLoadMenu(){
  this.loadMenu = $('.load.subMenu');


  /**
   * import
   */
  this.loadMenu.find('.importFile').change($.proxy(function(event){
    event.preventDefault();

    if (window.File && window.FileReader && window.FileList && window.Blob) {
      //do your stuff!

      var file = $('.importFile')[0].files[0];
      var reader = new FileReader();

      reader.onload = $.proxy(function(e) {
        var text = reader.result;

        var data = jQuery.parseJSON(text);
        this.loadData(data);
        //form.setData(data);
      },this);
      reader.readAsText(file);
    } else {
      console.warn('The File APIs are not fully supported by your browser.');
    }
  },this));


  /**
   *
   */
  this.loadData=function(data){
    if(data.versionSpec && data.versionSpec === '2.0'){
      this.loadDataVersion2(data);
    } else {
      this.loadDataVersion1(data);
    }
  };


  /**
   *
   */
  this.loadDataVersion1=function(data){
    if(data.customKeywords){
      var keywordStore = $('.page').data('keywordStore');
      if(keywordStore){
        keywordStore.setCustomKeywords(data.customKeywords);
      }
    }

    var cardContainer = $('.cardContainer').data('node');
    cardContainer.loadCard(data);
  };


  /**
   *
   */
  this.loadDataVersion2=function(data){
    if(data.customKeywords){
      var keywordStore = $('.page').data('keywordStore');
      if(keywordStore){
        keywordStore.setCustomKeywords(data.customKeywords);
      }
    }

    var cardContainer = $('.cardContainer').data('node');
    cardContainer.loadData(data);
  };


  /**
   * Load template button.
   */
  this.loadMenu.find('.loadTemplateButton').click($.proxy(function(menu,event){
    event.preventDefault();
    var file = $(this).data('file');

    $.getJSON('template/'+file,$.proxy(function(data){
      this.loadData(data);
    },menu));
  },null,this));


  /**
   * clear
   */
  this.loadMenu.find('.resetForm').click(function(event){
    event.preventDefault();
    $('.form form').trigger('reset');
  });


  /**
   * Toggle template group header.
   */
  this.loadMenu.on('click','.templateGroupHeader',$.proxy(function(coreNode,event){
    event.preventDefault();
    var parent = $(this).parent();
    if(parent.hasClass('inactive')){
      parent.removeClass('inactive').addClass('active');
    } else {
      parent.removeClass('active').addClass('inactive');
    }
  },null,this));
}
