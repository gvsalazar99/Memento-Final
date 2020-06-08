class cutscenemagnolia extends Phaser.Scene {
	constructor() {
		super('cutsceneyellow');    
  }

  preload() {
    this.load.image('pink', './assets/FullScreen/pink.png');
  }

  create() {
    console.log('We are in the cutscene!');    

    var style = { font: "16pt Courier", fill: "#00ff00", stroke: "#00ff00", strokeThickness: 1.5 , wordWrap: { width: 570, useAdvancedWrap: true } };
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
    this.magnoliaChoice = this.add.text(game.config.width/2, game.config.height/4 + 60, '', style);
    this.carvingChoice = this.add.text(game.config.width/2, game.config.height/4 + 20, '', style);
    this.squirrelChoice = this.add.text(game.config.width/2, game.config.height/4, '', style);
    this.girlChoice = this.add.text(game.config.width/2, game.config.height/4 + 80, '', style); 
    this.butterflyChoice = this.add.text(game.config.width/2, game.config.height/4 + 40, '', style);

    //MAGNOLIA HAIKU
    //Through MagnoliaOption, InitialsOption   (2 syl, 2 syl)
    //I won’t SquirrelOption my GirlOption   (2 syl, 2 syl)
    //I will ButterflyOption   (3 syl)

    //find chosen options for their respective memento
    this.magnoliaChoice.setText('Through  ' + mementoGroup.find(mementos => mementos.texture.key == 'magnolianew').chosenOption);
    this.carvingChoice.setText('   ' + mementoGroup.find(mementos => mementos.texture.key == 'treecarving').chosenOption);
    this.squirrelChoice.setText('I wont  ' + mementoGroup.find(mementos => mementos.texture.key == 'squirrel').chosenOption);
    this.girlChoice.setText('  ' + mementoGroup.find(mementos => mementos.texture.key == 'girlsmall').chosenOption);
    this.butterflyChoice.setText('I will  ' + mementoGroup.find(mementos => mementos.texture.key == 'butterflysmall').chosenOption);
    
    
    
    //make all chosen options near invisible
    this.magnoliaChoice.alpha = .1;
    this.carvingChoice.alpha = .1;
    this.squirrelChoice.alpha = .1;
    this.girlChoice.alpha = .1;
    this.butterflyChoice.alpha = .1;

    //fade in all chosen options with a tween
    this.tweens.add({
      targets: [this.magnoliaChoice,this.carvingChoice, this.squirrelChoice, this.girlChoice, this.butterflyChoice],
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