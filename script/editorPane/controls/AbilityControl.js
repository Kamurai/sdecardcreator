function AbilityControl(){
  this.template='<div class="hero monster pet loot treasure explore wonder command timeout abilitySection">'+
  	'<h2><a class="toggleDisplay" href="">Ability</a> <a href="" class="helpButton" title="Stats Help">?</a></h2>'+
    '<div class="controlContent hide">'+
  	'<div class="helpBlock">'+
  		'<div class="helpUnit">'+
  		'<h3>Dice Types</h3>'+
  		'<ul>'+
      '<li>Blue: 1b</li>'+
  			'<li>Star: 1st</li>'+
  			'<li>Red: 1r</li>'+
  			'<li>Green: 1g</li>'+
  			'<li>Purple: 1p</li>'+
        '<li>Orange: 1o</li>'+
  		'</ul>'+
  		'</div>'+

  		'<div class="helpUnit">'+
  		'<h3>Modifiers</h3>'+
  		'<ul>'+
  			'<li>Melee: 1sw</li>'+
  			'<li>Missile: 1mi</li>'+
  			'<li>Magic: 1ma</li>'+
  			'<li>Range: 1rg</li>'+
  			'<li>Action: 1ac</li>'+
  			'<li>Move: 1mo</li>'+
  			'<li>Shield: 0sh</li>'+
  			'<li>heart: 1he</li>'+
  		'</ul>'+
  		'</div>'+

  		'<h3>Stats</h3>'+
  		'<ul>'+
  			'<li>Strength: STR</li>'+
  			'<li>Armor: ARM</li>'+
  			'<li>Willpower: WILL</li>'+
  			'<li>Dexterity: DEX</li>'+
  		'</ul>'+
  	'</div>'+
  	'<div class="abilities"></div>'+
  	'<a href="" class="addAbility">Add Ability +</a>'+
    '</div>'+
  '</div>';

  this.node=undefined;

  this._constructor=function(){
    var form = $('.editForm').data('node');
    this.node=$(this.template).appendTo(form.node);
    this.node.data('node',this);

    HasToggleDisplay.call(this);
  };

  this._constructor();
}