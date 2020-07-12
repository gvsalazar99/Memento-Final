class cutsceneperson extends Phaser.Scene {
    constructor() {
      super('cutsceneperson');    
    }
  
    preload() {
      this.load.image('pink', './assets/FullScreen/pink.png');
      this.load.spritesheet('cutscene3', './assets/cutscenes/CutScene3SpriteSheet.png', {frameWidth: 1260, frameHeight: 590, startFrame: 0, endFrame: 39});
    }
  
    create() {
      console.log('Welcome to cutscene 3!\n');    
      
      //make the cut scene work!
      this.cutscene = this.add.sprite(0, 0, 'cutscene3').setOrigin(0,0);
      //console.log('animation loaded into scene');
      this.anims.create({
       key: 'cutscene3',
        frames: this.anims.generateFrameNumbers('cutscene3', {start: 0, end: 39, first: 0}),
        frameRate: 5
      });
      //console.log('animation has been configured')
      this.cutscene.anims.play('cutscene3', true);
      //console.log('animation has started to play!');
  
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
      
      //STORE HAIKU
      //Their familyFrameOption feels panOption 
      //For menuOption you must dogOption
      //Keep their signOption  
      
      //create text objects for each word in the haiku
      //Haiku Line 1
      let Their = this.add.text(game.config.width/2, game.config.height/4, 'Their', style)
      let familyframeChoice = this.add.text(game.config.width/2, game.config.height/4, '', style2);
      let feels = this.add.text(game.config.width/2, game.config.height/4, 'feels', style)
      let panChoice = this.add.text(game.config.width/2, game.config.height/4, '', style2);
      
      
      //Haiku Line 2
      let For = this.add.text(game.config.width/2, game.config.height/4 + 25, 'For', style)
      let menuChoice = this.add.text(game.config.width/2, game.config.height/4 + 25, '', style2);
      let youMust = this.add.text(game.config.width/2, game.config.height/4 + 25, 'you must', style)
      let dogChoice = this.add.text(game.config.width/2, game.config.height/4 + 25, '', style2);

      //Haiku Line 3
      let keepTheir = this.add.text(game.config.width/2, game.config.height/4 + 50, 'Keep their', style)
      let signChoice = this.add.text(game.config.width/2, game.config.height/4 + 50, '', style2); 
      //console.log('All text objects created!');

      //Put them all into an array in order
      let words = [ Their, familyframeChoice, feels, panChoice,
                    For, menuChoice, youMust, dogChoice,
                    keepTheir, signChoice ];
      //console.log('words populated');


      //find chosen options for their respective memento
      familyframeChoice.setText(mementoGroup.find(mementos => mementos.texture.key == 'familyframe').chosenOption);
      panChoice.setText(mementoGroup.find(mementos => mementos.texture.key == 'pan').chosenOption);
      menuChoice.setText(mementoGroup.find(mementos => mementos.texture.key == 'menu').chosenOption);
      dogChoice.setText(mementoGroup.find(mementos => mementos.texture.key == 'dog').chosenOption);
      signChoice.setText(mementoGroup.find(mementos => mementos.texture.key == 'sign').chosenOption);
      //console.log('assigned player choices to text boxes');
      //console.log(words);
      //console.log(mementoGroup);

      //appropriately space the haiku 
      let i = 1;
      while(i < words.length) {
        if( i!=4 && i!=8) {         //ignore the first word in each line
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
        this.scene.start('Credits'); //should be "endscene?"
      }
    }
  }