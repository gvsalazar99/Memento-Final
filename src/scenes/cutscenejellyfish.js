class cutscenejellyfish extends Phaser.Scene {
	constructor() {
		super('cutsceneblue');      
  }
  preload() {
    this.load.spritesheet('cutscene2', './assets/cutscenes/CutScene2SpriteSheet.png', {frameWidth: 1260, frameHeight: 590, startFrame: 0, endFrame: 39});
  }
  create() {
    console.log('Welcome to cutscene 2!\n');    

    //make the cut scene work!
    this.cutscene = this.add.sprite(0, 0, 'cutscene2').setOrigin(0,0);
    //console.log('animation loaded into scene');
    this.anims.create({
      key: 'cutscene2',
      frames: this.anims.generateFrameNumbers('cutscene2', {start: 0, end: 39, first: 0}),
      frameRate: 5
    });
    //console.log('animation has been configured')
    this.cutscene.anims.play('cutscene2', true);
    //console.log('animation has started to play!');
    
    //SEAHORSE HAIKU
    // I won’t SeahorsesOption myself  (1 syl)
    // To be HermitOption  takes StarfishOption  (1 syl, 3 syl)
    // I SeaweedOption    that FishOption   (2 syl, 1 syl)
    //create text for 1st level's chosen options

     //text style for fixed words in the haiku
     var style = { 
      font: "16pt Baskerville", 
      fill: "#ffffff", 
      stroke: "#ffffff",
      strokeThickness: 1.0, 
      wordWrap: { 
        width: 570, 
        useAdvancedWrap: true 
      } 
    };

    //text style for player's chosen words (it's green!)
    var style2 = { 
      font: "16pt Baskerville", 
      fill: "#00ff00", 
      stroke: "#00ff00",
      strokeThickness: 1.0, 
      wordWrap: { 
        width: 570, 
        useAdvancedWrap: true 
      } 
    };

    //create text objects for each word in the haiku
    //Haiku Line 1
    let IWont = this.add.text(game.config.width/2, game.config.height/4, 'I won\'t', style);
    let seahorsesChoice = this.add.text(game.config.width/2, game.config.height/4, '', style2);
    let myself = this.add.text(game.config.width/2, game.config.height/4, 'myself', style);

    //Haiku Line 2
    let ToBe = this.add.text(game.config.width/2, game.config.height/4 + 25, 'To be', style);
    let shellChoice = this.add.text(game.config.width/2, game.config.height/4 + 25, '', style2);
    let takes = this.add.text(game.config.width/2, game.config.height/4 + 25, 'takes', style);
    let starfishChoice = this.add.text(game.config.width/2, game.config.height/4 + 25, '', style2);

    //Haiku Line 3
    let I  = this.add.text(game.config.width/2, game.config.height/4 + 50, 'I', style);
    let seaweedChoice = this.add.text(game.config.width/2, game.config.height/4 + 50, '', style2);
    let that = this.add.text(game.config.width/2, game.config.height/4 + 50, 'that', style);
    let fishChoice = this.add.text(game.config.width/2, game.config.height/4 + 50, '', style2); 
    //console.log('ALL text objects created');

    let words = [ IWont, seahorsesChoice, myself,
                  ToBe, shellChoice, takes, starfishChoice,
                  I, seaweedChoice, that, fishChoice ];
    //console.log('words populated');

    //find chosen options for their respective memento
    seahorsesChoice.setText(mementoGroup.find(mementos => mementos.texture.key == 'seahorses').chosenOption);
    shellChoice.setText(mementoGroup.find(mementos => mementos.texture.key == 'shell').chosenOption);
    starfishChoice.setText(mementoGroup.find(mementos => mementos.texture.key == 'starfish').chosenOption);
    seaweedChoice.setText(mementoGroup.find(mementos => mementos.texture.key == 'seaweed').chosenOption);
    fishChoice.setText(mementoGroup.find(mementos => mementos.texture.key == 'fish').chosenOption);
    //console.log('assigned player choices to text boxes');
    //console.log(words);
    //console.log(mementoGroup);

    //appropriately space the haiku 
    let i = 1;
    while(i < words.length) {
      if( i!=3 && i!=7) {         //ignore the first word in each line
        words[i].x = words[i-1].x + words[i-1].width + 3; //assign position in haiku line
      }
      i++;
    }
    //console.log('Haiku spaced');
    
    //this timer counts down from the # of words + 5 sec
    this.seconds = words.length * 2 + 5;
    this.endCountdown = this.time.addEvent({
      delay: 1000, //ms
      repeat: this.seconds,
      callback: () => {
        this.seconds--;
      },
        callbackScope: game
    }); 

    //make all words invisible
    words.forEach(word => word.alpha = 0);

    //fade in all chosen options with a tween
    this.tweens.add({
      targets: words,
      alpha: 1,
      duration: 3000, //ms for each fade to complete
      delay: this.tweens.stagger(2000) //ms to wait between beginning to fade the next word
  });

  }

  update() {
    if(this.seconds == -1) {
      this.scene.start('Level3');
    }
		var enterKey= this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ENTER);
		if(Phaser.Input.Keyboard.JustDown(enterKey)) {
			this.music.stop();
			this.scene.start('Level3');
		}
  }
}



