class Menu extends Phaser.Scene {
    constructor() {
        super("menuScene");
        
    }

    preload() {
      
      //dialogue boxes
      this.load.image('blue1', './assets/TextBoxes/BlueLevel1.PNG');
      this.load.image('blue2', './assets/TextBoxes/BlueLevel2.PNG');
      this.load.image('blue3', './assets/TextBoxes/BlueLevel3.PNG');
      this.load.image('yellow1', './assets/TextBoxes/YellowLevel1.PNG');
      this.load.image('yellow2', './assets/TextBoxes/YellowLevel2.PNG');
      this.load.image('yellow3', './assets/TextBoxes/YellowLevel3.PNG');

      //buttons
      this.load.image('playbutton', 'assets/UI/PlayButtonNew.PNG');
      this.load.image('playagainbutton', './assets/UI/PlayAgainButton.PNG'); 
      this.load.image('creditsbutton', './assets/UI/CreditsButton.PNG'); 
      this.load.image('mutebutton', './assets/UI/MuteButton.PNG'); 
      this.load.image('unmutebutton', './assets/UI/UnmuteButton.PNG');

      //button glows
      this.load.image('playGlow', './assets/UI/glow/PlayButtonGlow.PNG');
      this.load.image('muteGlow', './assets/UI/glow/MuteButtonGlow.PNG');
      this.load.image('unmuteGlow', './assets/UI/glow/UnmuteButtonGlow.PNG');
      this.load.image('creditsGlow', './assets/UI/glow/CreditsButtonGlow.PNG');
      this.load.image('playagainGlow', './assets/UI/glow/PlayAgainButtonGlow.PNG');

      //screens
      this.load.image('mementomenu', './assets/FullScreen/MenuScreen.PNG');
      this.load.image('credits', './assets/FullScreen/EndScreen (1).PNG');

      //sounds
      this.load.audio('mouseclick', './assets/audio/mouseclick.mp3');

    }



    create() {
      //create sound effect
      this.clickSFX = this.sound.add('mouseclick');


      //camera fade in n out
      this.cameras.main.once('camerafadeoutcomplete', function (camera) {
        this.add.image(1260, 590, 'mementomenu').setOrigin(0, 0);
        camera.fadeIn(1000, 0,0,0);


      //display background
      let background = this.add.sprite('mementomenu');
      background = this.add.sprite(0, 0, 'mementomenu').setOrigin(0, 0);


      //create play button
      this.playButton = this.add.sprite(460,game.config.height/3, 'playbutton').setScale(1).setOrigin(0);
      this.playButton.setInteractive();
      //switch scenes if play is clicked
      this.playButton.on('pointerdown',()=> {
        this.clickSFX.play();
        this.scene.start('Level1');
      });
      //add glow to playButton
      addGlow(this, this.playButton, 'playGlow');


      //create muted button
      this.mutedButton = this.add.sprite(60,game.config.height*.7, 'mutebutton').setScale(1).setOrigin(0);
      this.mutedButton.setInteractive();
      this.mutedButton.alpha = 0; //not visible on launch
      //unmute the game if clicked
      this.mutedButton.on('pointerdown',()=> {
        this.clickSFX.play();
        mute = false;              
        this.mutedButton.alpha = 0;   //remove this button visibility
        this.unmutedButton.alpha = 1; //unmuted button is visible
      });
      //add glow to muted button
      addGlow(this, this.mutedButton, 'muteGlow');

      //create unmuted button
      this.unmutedButton = this.add.sprite(60, game.config.height*.7, 'unmutebutton').setOrigin(0);
      this.unmutedButton.setInteractive();
      //mute the game when clicked
      this.unmutedButton.on('pointerdown', () =>{
        this.clickSFX.play();
        mute = true;
        this.unmutedButton.alpha = 0; //remove this button's visibility
        this.mutedButton.alpha = 1;   //muted button is visible
      });
      //add glow to unmuted button
      addGlow(this, this.unmutedButton, 'unmuteGlow');


      //credits button
      this.creditsButton = this.add.sprite(900,game.config.height*.7, 'creditsbutton').setScale(1).setOrigin(0);
      this.creditsButton.setInteractive();
      //when credits button is clicked
      this.creditsButton.on('pointerdown',()=> {
        this.clickSFX.play();
        this.scene.start('Credits');
      });      
      //add glow to credits button
      addGlow(this, this.creditsButton, 'creditsGlow');


      
      console.log(this);

      }, this);
  
      this.cameras.main.fadeOut(1000, 0,0,0);
    //custom mouse (doesnt work)
    this.input.setDefaultCursor('./assets/butterflysmall.cur), pointer');
  


  

    }



    update() {
      //this.creditsButton.rotation += .5;

    }


  }

  


