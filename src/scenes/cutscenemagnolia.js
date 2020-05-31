class cutscenemagnolia extends Phaser.Scene {
	constructor() {
		super('cutsceneyellow');    
  }

  preload() {
    this.load.image('pink', './assets/FullScreen/pink.png');
  }

  create() {
    console.log('We are in the cutscene!');    

    var style = { font: "14pt Courier", fill: "#00ff00", stroke: "#00ff00", wordWrap: { width: 570, useAdvancedWrap: true } };
		//text
	 // boxText = this.add.text(game.config.height/2, game.config.height/2, '', { font: "14pt Courier", fill: "#00ff00", stroke: "#00ff00", wordWrap: { width: 570, useAdvancedWrap: true } });
    boxText = this.add.text(game.config.height/2, game.config.height/2, '', style );
    boxText.setText('[CUT SCENE 1]');
  	boxText.visible = true;

    this.secCount = 10;
    this.textTimer = this.time.addEvent({
      delay: 1000, //ms
      repeat: this.secCount,
      callback: () => {
          boxText.setText('');
          boxText.setText('[CUT SCENE 1]\nEnds in ' + this.secCount);
          this.secCount--;
      },
      callbackScope: game
    });  

    // //THIS BLOCK IS FOR DEBUGGING ONLY
    // mementoGroup.forEach(memento => console.log(memento.texture.key));
    // mementoGroup.find(mementos => mementos.texture.key == 'squirrel').chosenOption = 'I crave the nut';
    // console.log(mementoGroup.find(mementos => mementos.texture.key == 'squirrel').chosenOption);
    // mementoGroup.find(mementos => mementos.texture.key == 'treecarving').chosenOption = 'I speak lies';
    // console.log(mementoGroup.find(mementos => mementos.texture.key == 'treecarving').chosenOption);
    // mementoGroup.find(mementos => mementos.texture.key == 'butterflysmall').chosenOption = 'vibes';
    // console.log(mementoGroup.find(mementos => mementos.texture.key == 'butterflysmall').chosenOption);
    // mementoGroup.find(mementos => mementos.texture.key == 'magnolianew').chosenOption = 'flower power';
    // console.log(mementoGroup.find(mementos => mementos.texture.key == 'magnolianew').chosenOption);
    // mementoGroup.find(mementos => mementos.texture.key == 'girlsmall').chosenOption = 'bush did 9/11';
    // console.log(mementoGroup.find(mementos => mementos.texture.key == 'girlsmall').chosenOption);

    //create text for 1st level's chosen options
    this.squirrelChoice = this.add.text(game.config.width/2, game.config.height/4, '', style);
    this.carvingChoice = this.add.text(game.config.width/2, game.config.height/4 + 20, '', style);
    this.butterflyChoice = this.add.text(game.config.width/2, game.config.height/4 + 40, '', style);
    this.magnoliaChoice = this.add.text(game.config.width/2, game.config.height/4 + 60, '', style);
    this.girlChoice = this.add.text(game.config.width/2, game.config.height/4 + 80, '', style); 

    //find chosen options for their respective memento
    this.squirrelChoice.setText('Squirrel -> ' + mementoGroup.find(mementos => mementos.texture.key == 'squirrel').chosenOption);
    this.carvingChoice.setText('Carving -> ' + mementoGroup.find(mementos => mementos.texture.key == 'treecarving').chosenOption);
    this.butterflyChoice.setText('Butterfly -> ' + mementoGroup.find(mementos => mementos.texture.key == 'butterflysmall').chosenOption);
    this.magnoliaChoice.setText('Magnolia -> ' + mementoGroup.find(mementos => mementos.texture.key == 'magnolianew').chosenOption);
    this.girlChoice.setText('Girl -> ' + mementoGroup.find(mementos => mementos.texture.key == 'girlsmall').chosenOption);
    
    
    //make all chosen options near invisible
    this.squirrelChoice.alpha = .1;
    this.carvingChoice.alpha = .1;
    this.butterflyChoice.alpha = .1;
    this.magnoliaChoice.alpha = .1;
    this.girlChoice.alpha = .1;

    //fade in all chosen options with a tween
    this.tweens.add({
      targets: [this.squirrelChoice, this.carvingChoice, this.butterflyChoice, this.magnoliaChoice, this.girlChoice],
      alpha: 1,
      duration: 3000,
      delay: this.tweens.stagger(2000)
  });

  }

  update() {

    if(this.secCount == -1) {
      this.scene.start('Level2');
    }

 
  }
}