class cutsceneperson extends Phaser.Scene {
    constructor() {
      super('cutsceneperson');    
    }
  
    preload() {
      this.load.image('pink', './assets/FullScreen/pink.png');
      this.load.spritesheet('cutscene3', './assets/cutscenes/CutScene3SpriteSheet.png', {frameWidth: 1260, frameHeight: 590, startFrame: 0, endFrame: 39});
    }
  
    create() {
      console.log('We are in the cutscene!');    
  
      var style = { font: "16pt Baskerville", fill: "#ffffff", stroke: "#ffffff", strokeThickness: 1.0 , wordWrap: { width: 570, useAdvancedWrap: true } };
      //text
     // boxText = this.add.text(game.config.height/2, game.config.height/2, '', { font: "14pt Courier", fill: "#00ff00", stroke: "#00ff00", wordWrap: { width: 570, useAdvancedWrap: true } });
      boxText = this.add.text(game.config.height/2, game.config.height/2, '', style );
      boxText.setText('[CUT SCENE 3]');
      boxText.visible = true;
  
      this.secCount = 10;
      this.textTimer = this.time.addEvent({
        delay: 1300, //ms
        repeat: this.secCount,
        callback: () => {
            boxText.setText('');
           // boxText.setText('[CUT SCENE 3]\nEnds in ' + this.secCount);
            this.secCount--;
        },
        callbackScope: game
      });  
      
    //make the cut scene work!
    this.cutscene = this.add.sprite(0, 0, 'cutscene3').setOrigin(0,0);
    console.log('animation loaded into scene');
    this.anims.create({
      key: 'cutscene3',
      frames: this.anims.generateFrameNumbers('cutscene3', {start: 0, end: 39, first: 0}),
      frameRate: 5
    });
    console.log('animation has been configured')
    this.cutscene.anims.play('cutscene3', true);
    console.log('animation has started to play!');
  
      //create text for 1st level's chosen options
      this.familyframeChoice = this.add.text(game.config.width/2, game.config.height/4, '', style);
      this.panChoice = this.add.text(game.config.width/2, game.config.height/4, '', style);
      this.menuChoice = this.add.text(game.config.width/2, game.config.height/4 + 20, '', style);
      this.dogChoice = this.add.text(game.config.width/2, game.config.height/4 + 20, '', style);
      this.signChoice = this.add.text(game.config.width/2, game.config.height/4 + 40, '', style); 
  
  
      //MAGNOLIA HAIKU
      //Through MagnoliaOption, InitialsOption   (2 syl, 2 syl)
      //I won’t SquirrelOption my GirlOption   (2 syl, 2 syl)
      //I will ButterflyOption   (3 syl)
  
      //find chosen options for their respective memento
      this.familyframeChoice.setText('Their  ' + mementoGroup.find(mementos => mementos.texture.key == 'familyframe').chosenOption);
      this.panChoice.setText('  feels  ' + mementoGroup.find(mementos => mementos.texture.key == 'pan').chosenOption);
      this.menuChoice.setText('For  ' + mementoGroup.find(mementos => mementos.texture.key == 'menu').chosenOption + '  you  must  ');
      this.dogChoice.setText(mementoGroup.find(mementos => mementos.texture.key == 'dog').chosenOption);
      this.signChoice.setText('Keep  their  ' + mementoGroup.find(mementos => mementos.texture.key == 'sign').chosenOption);
      
      //setting widths for haiku format
      this.panChoice.x += this.familyframeChoice.width + 3;
      this.dogChoice.x += this.menuChoice.width + 3;
      
      //make all chosen options near invisible
      this.familyframeChoice.alpha = 0;
      this.panChoice.alpha = 0;
      this.menuChoice.alpha = 0;
      this.dogChoice.alpha = 0;
      this.signChoice.alpha = 0;
  
      //fade in all chosen options with a tween
      this.tweens.add({
        targets: [this.familyframeChoice, this.panChoice, this.menuChoice, this.dogChoice, this.signChoice],
        alpha: 1,
        duration: 3000,
        delay: this.tweens.stagger(2000)
    });
  
    }
  
    update() {
      if(this.secCount == -1) {
        this.scene.start('Credits'); //should be "endscene?"
      }
    }
  }