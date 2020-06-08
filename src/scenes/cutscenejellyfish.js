class cutscenejellyfish extends Phaser.Scene {
	constructor() {
		super('cutsceneblue');      
  }
  preload() {
    this.load.spritesheet('cutscene2', './assets/cutscenes/CutScene2SpriteSheet.png', {frameWidth: 1260, frameHeight: 590, startFrame: 0, endFrame: 39});
  }
  create() {
    console.log('We are in the cutscene!');    

    //text
    var style = { font: "14pt Courier", fill: "#00ff00", stroke: "#00ff00",strokeThickness: 1.5, wordWrap: { width: 570, useAdvancedWrap: true } };
    boxText = this.add.text(game.config.height/2, game.config.height/2, '', style);
    boxText.setText('[CUT SCENE 2]');
    boxText.visible = true;
  
    this.secCount = 10;
    this.textTimer = this.time.addEvent({
      delay: 1000, //ms
      repeat: this.secCount,
      callback: () => {
        boxText.setText('');
        boxText.setText('[CUT SCENE 2]\nEnds in ' + this.secCount);
        this.secCount--;
      },
        callbackScope: game
    });  

    //make the cut scene work!
    this.cutscene = this.add.sprite(0, 0, 'cutscene2').setOrigin(0,0);
    console.log('animation loaded into scene');
    this.anims.create({
      key: 'cutscene2',
      frames: this.anims.generateFrameNumbers('cutscene2', {start: 0, end: 39, first: 0}),
      frameRate: 5
    });
    console.log('animation has been configured')
    this.cutscene.anims.play('cutscene2', true);
    console.log('animation has started to play!');
    
    //create text for 1st level's chosen options
    this.seahorsesChoice = this.add.text(game.config.width/2, game.config.height/4, '', style);
    this.seaweedChoice = this.add.text(game.config.width/2, game.config.height/4 + 20, '', style);
    this.shellChoice = this.add.text(game.config.width/2, game.config.height/4 + 40, '', style);
    this.starfishChoice = this.add.text(game.config.width/2, game.config.height/4 + 60, '', style);
    this.fishChoice = this.add.text(game.config.width/2, game.config.height/4 + 80, '', style); 

    //SEAHORSE HAIKU
    // I won’t SeahorsesOption myself  (1 syl)
    // To be HermitOption  takes StarfishOption  (1 syl, 3 syl)
    // I SeaweedOption    that FishOption   (2 syl, 1 syl)

    //find chosen options for their respective memento
    this.seahorsesChoice.setText('I wont ' + mementoGroup.find(mementos => mementos.texture.key == 'seahorses').chosenOption + 'myself');
    this.shellChoice.setText('To be  ' + mementoGroup.find(mementos => mementos.texture.key == 'shell').chosenOption);
    this.starfishChoice.setText(' takes ' + mementoGroup.find(mementos => mementos.texture.key == 'starfish').chosenOption);
    this.seaweedChoice.setText('I  ' + mementoGroup.find(mementos => mementos.texture.key == 'seaweed').chosenOption);
    this.fishChoice.setText('That ' + mementoGroup.find(mementos => mementos.texture.key == 'fish').chosenOption);
    
    
    //make all chosen options near invisible
    this.seahorsesChoice.alpha = .1;
    this.seaweedChoice.alpha = .1;
    this.shellChoice.alpha = .1;
    this.starfishChoice.alpha = .1;
    this.fishChoice.alpha = .1;

    //fade in all chosen options with a tween
    this.tweens.add({
      targets: [this.seahorsesChoice, this.seaweedChoice, this.shellChoice, this.starfishChoice, this.fishChoice],
      alpha: 1,
      duration: 3000,
      delay: this.tweens.stagger(2000)
  });

  }

  update() {
    if(this.secCount == -1) {
      this.scene.start('Level3');
    }
		var enterKey= this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ENTER);
		if(Phaser.Input.Keyboard.JustDown(enterKey)) {
			this.music.stop();
			this.scene.start('Level3');
		}
  }
}



