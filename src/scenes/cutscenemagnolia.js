class cutscenemagnolia extends Phaser.Scene {
	constructor() {
		super('cutsceneyellow');    
  }

  preload() {
    this.load.image('pink', './assets/FullScreen/pink.png');
    this.load.spritesheet('cutscene1', './assets/cutscenes/CutScene1SpriteSheet.png', {frameWidth: 1260, frameHeight: 590, startFrame: 0, endFrame: 35});
  }

  create() {
    console.log('Welcome to cutscene 1!\n');    

    //MAKE THE CUTSCENE ANIMATION WORK
    this.cutscene = this.add.sprite(0, 0, 'cutscene1').setOrigin(0,0);
    // console.log('animation loaded into scene');
    this.anims.create({
      key: 'cutscene1',
      frames: this.anims.generateFrameNumbers('cutscene1', {start: 0, end: 35, first: 0}),
      frameRate: 5
    });
    //console.log('animation has been configured')
    this.cutscene.anims.play('cutscene1');
    // console.log('animation has started to play!');
    
    //MAGNOLIA HAIKU
    //Through MagnoliaOption, InitialsOption   (2 syl, 2 syl)
    //I won’t SquirrelOption my GirlOption   (2 syl, 2 syl)
    //I will ButterflyOption   (3 syl)

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
    let Through = this.add.text(game.config.width/2, game.config.height/4, 'Through', style);
    let magnoliaChoice = this.add.text(game.config.width/2, game.config.height/4, '', style2);
    let carvingChoice = this.add.text(game.config.width/2, game.config.height/4, '', style2);

    //Haiku line 2
    let IWont = this.add.text(game.config.width/2, game.config.height/4 + 25, 'I won\'t', style);
    let squirrelChoice = this.add.text(game.config.width/2, game.config.height/4 + 25, '', style2);
    let my = this.add.text(game.config.width/2, game.config.height/4 + 25, ' my ', style);
    let girlChoice = this.add.text(game.config.width/2, game.config.height/4 + 25, '', style2);

    //Haiku Line 3
    let IWill = this.add.text(game.config.width/2, game.config.height/4 + 50, 'I will', style);
    let butterflyChoice = this.add.text(game.config.width/2, game.config.height/4 + 50, '', style2); 
    //console.log('All text objects created!');

    //Put them all into an array in order
    let words = [ Through, magnoliaChoice, carvingChoice,
                  IWont, squirrelChoice, my, girlChoice,
                  IWill, butterflyChoice ];
    //console.log('words populated');

    //assign the mementos' chosenOptions to the text objects in the haiku
    magnoliaChoice.setText(mementoGroup.find(mementos => mementos.texture.key == 'magnolianew').chosenOption);
    carvingChoice.setText(mementoGroup.find(mementos => mementos.texture.key == 'treecarving').chosenOption);
    squirrelChoice.setText(mementoGroup.find(mementos => mementos.texture.key == 'squirrel').chosenOption);
    girlChoice.setText(mementoGroup.find(mementos => mementos.texture.key == 'girlsmall').chosenOption);
    butterflyChoice.setText(mementoGroup.find(mementos => mementos.texture.key == 'butterflysmall').chosenOption);
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
    //switch to level 2 when countdown ends
    if(this.seconds == -1) {
      this.scene.start('Level2');
    }

    //Press ENTER to skip this entire scene
		var enterKey= this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ENTER);
		if(Phaser.Input.Keyboard.JustDown(enterKey)) {
			//this.music.stop();
			//this.scene.start('Level2');
			this.scene.start('Level2');
		}
  }
}