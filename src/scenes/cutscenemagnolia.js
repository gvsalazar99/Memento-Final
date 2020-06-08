class cutscenemagnolia extends Phaser.Scene {
	constructor() {
		super('cutsceneyellow');    
  }

  preload() {
    this.load.image('pink', './assets/FullScreen/pink.png');
    this.load.spritesheet('cutscene1', './assets/cutscenes/CutScene1SpriteSheet.png', {frameWidth: 1260, frameHeight: 590, startFrame: 0, endFrame: 35});
  }

  create() {
    console.log('We are in the cutscene!');    

    var style = { font: "16pt Baskerville", fill: "#ffffff", stroke: "#ffffff", wordWrap: { width: 570, useAdvancedWrap: true } };
		//text
	 // boxText = this.add.text(game.config.height/2, game.config.height/2, '', { font: "14pt Courier", fill: "#00ff00", stroke: "#00ff00", wordWrap: { width: 570, useAdvancedWrap: true } });
    boxText = this.add.text(game.config.height/2, game.config.height/2, '', style );
    boxText.setText('[CUT SCENE 1]');
  	boxText.visible = true;

    this.secCount = 10;
    this.textTimer = this.time.addEvent({
      delay: 1300, //ms
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


    //make the cut scene work!
    this.cutscene = this.add.sprite(0, 0, 'cutscene1').setOrigin(0,0);
    console.log('animation loaded into scene');
    this.anims.create({
      key: 'cutscene1',
      frames: this.anims.generateFrameNumbers('cutscene1', {start: 0, end: 35, first: 0}),
      frameRate: 5
    });
    console.log('animation has been configured')
    this.cutscene.anims.play('cutscene1', true);
    console.log('animation has started to play!');
    

    //create text for 1st level's chosen options
    this.magnoliaChoice = this.add.text(game.config.width/2, game.config.height/4, '', style);
    this.carvingChoice = this.add.text(game.config.width/2, game.config.height/4, '', style);
    this.squirrelChoice = this.add.text(game.config.width/2, game.config.height/4 + 20, '', style);
    this.girlChoice = this.add.text(game.config.width/2, game.config.height/4 + 20, '', style);
    this.butterflyChoice = this.add.text(game.config.width/2, game.config.height/4 + 40, '', style); 
   
    //MAGNOLIA HAIKU
    //Through MagnoliaOption, InitialsOption   (2 syl, 2 syl)
    //I won’t SquirrelOption my GirlOption   (2 syl, 2 syl)
    //I will ButterflyOption   (3 syl)

    //find chosen options for their respective memento
    //find chosen options for their respective memento
    this.magnoliaChoice.setText('Through  ' + mementoGroup.find(mementos => mementos.texture.key == 'magnolianew').chosenOption + ',  ');
    this.carvingChoice.setText('   ' + mementoGroup.find(mementos => mementos.texture.key == 'treecarving').chosenOption);
    this.squirrelChoice.setText('I wont  ' + mementoGroup.find(mementos => mementos.texture.key == 'squirrel').chosenOption + '  my  ');
    this.girlChoice.setText(mementoGroup.find(mementos => mementos.texture.key == 'girlsmall').chosenOption);
    this.butterflyChoice.setText('I will  ' + mementoGroup.find(mementos => mementos.texture.key == 'butterflysmall').chosenOption);
    
    //setting widths for haiku format
    this.carvingChoice.x += this.magnoliaChoice.width + 3;
    this.girlChoice.x += this.squirrelChoice.width + 3;
    
    //make all chosen options  invisible
    this.magnoliaChoice.alpha = 0;
    this.carvingChoice.alpha = 0;
    this.squirrelChoice.alpha = 0;
    this.girlChoice.alpha = 0;
    this.butterflyChoice.alpha = 0;

    //fade in all chosen options with a tween
    this.tweens.add({
      targets: [this.magnoliaChoice,this.carvingChoice, this.squirrelChoice, this.girlChoice, this.butterflyChoice],
      alpha: 1,
      duration: 3000,
      delay: this.tweens.stagger(2000)
  });




  }

  update() {
    //this.cutscene.anims.play('cutscene1', true);

    if(this.secCount == -1) {
      this.scene.start('Level2');
    }

		var enterKey= this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ENTER);
		if(Phaser.Input.Keyboard.JustDown(enterKey)) {
			this.music.stop();
			//this.scene.start('Level2');
			this.scene.start('Level2');
		}
  }
}