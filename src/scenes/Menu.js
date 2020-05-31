class Menu extends Phaser.Scene {
    constructor() {
        super("menuScene");
        
    }

    preload() {
      //buttons
      this.load.image('playbutton', 'assets/UI/PlayButtonNew.PNG'); 
      this.load.image('exitbutton', 'assets/UI/ExitButton.png'); 

      
      //dialogue boxes
      this.load.image('blue1', './assets/TextBoxes/BlueLevel1.PNG');
      this.load.image('blue2', './assets/TextBoxes/BlueLevel2.PNG');
      this.load.image('blue3', './assets/TextBoxes/BlueLevel3.PNG');
      this.load.image('yellow1', './assets/TextBoxes/YellowLevel1.PNG');
      this.load.image('yellow2', './assets/TextBoxes/YellowLevel2.PNG');
      this.load.image('yellow3', './assets/TextBoxes/YellowLevel3.PNG');

      this.load.image('credits', './assets/FullScreen/EndScreen (1).PNG'); 

      //buttons
      this.load.image('playagainbutton', './assets/UI/PlayAgainButton.PNG'); 
      this.load.image('creditsbutton', './assets/UI/CreditsButton.PNG'); 
      this.load.image('mutebutton', './assets/UI/MuteButton.PNG'); 
      this.load.image('unmutebutton', './assets/UI/UnmuteButton.PNG');
     

      this.load.image('mementomenu', './assets/FullScreen/MenuScreen.PNG');

      //sounds
      this.load.audio('mouseclick', './assets/audio/mouseclick.mp3');

      //progress bar
      this.load.image('progressbar', './assets/UI/BallAndBar.PNG');

    }



    create() {
     // this.add.image('purple');
     //camera fade in n out
      this.cameras.main.once('camerafadeoutcomplete', function (camera) {
        this.add.image(1260, 590, 'mementomenu').setOrigin(0, 0);
        camera.fadeIn(300, 0,0,0);

      let background = this.add.sprite('mementomenu');
      let button = this.add.sprite('playbutton');
      let mutebutton = this.add.sprite('mutebutton');
      let creditsbutton = this.add.sprite('creditsbutton');

      //button interactivity in menu 
      background = this.add.sprite(0, 0, 'mementomenu').setOrigin(0, 0);
  
      //background.x = game.config.height - background.width;


      //play button
      this.playButton = this.add.sprite(460,game.config.height/3, 'playbutton').setScale(1).setOrigin(0);
      this.playButton.setInteractive();
      this.playButton.on('pointerdown',()=> this.scene.start('Level1'))

      //muted button
      this.mutedButton = this.add.sprite(60,game.config.height*.7, 'mutebutton').setScale(1).setOrigin(0);
      this.mutedButton.setInteractive();
      this.mutedButton.alpha = 0; //not visible on launch
      //unmute the game if clicked
      this.mutedButton.on('pointerdown',()=> {
        mute = false;              
        this.mutedButton.alpha = 0;   //remove this button visibility
        this.unmutedButton.alpha = 1; //unmuted button is visible
      });
      
      //unmuted button
      this.unmutedButton = this.add.sprite(60, game.config.height*.7, 'unmutebutton').setOrigin(0);
      this.unmutedButton.setInteractive();
      //mute the game when clicked
      this.unmutedButton.on('pointerdown', () =>{
        mute = true;
        this.unmutedButton.alpha = 0; //remove this button's visibility
        this.mutedButton.alpha = 1;   //muted button is visible
    });

      //credits button
      this.button = this.add.sprite(900,game.config.height*.7, 'creditsbutton').setScale(1).setOrigin(0);
      this.button.setInteractive();
      this.button.on('pointerdown',()=> this.scene.start('Credits'))

      
      

      }, this);
  
      this.cameras.main.fadeOut(300, 0,0,0);
    //custom mouse (doesnt work)
    this.input.setDefaultCursor('./assets/butterflysmall.cur), pointer');
  


  

    }

    

    update() {

    }


  }

  


