class Menu extends Phaser.Scene {
    constructor() {
        super("menuScene");
        
    }

    preload() {
      //this.load.image('background', './assets/cosmowanda.png'); 
      this.load.image('playbutton', 'assets/UI/PlayButtonNew.PNG'); 
      //this.load.image('pink', './assets/pink.png'); 
      //this.load.image('character', './assets/Shadow.PNG'); 
      //this.load.image('box', './assets/box.png'); 
      this.load.image('exitbutton', 'assets/UI/ExitButton.png'); 
      //this.load.image('popup', './assets/box.png'); 
      
      //this.load.image('necklace', './assets/Necklace.PNG'); 
      //this.load.image('catbed', './assets/Cat bed.PNG'); 
      // this.load.image('purple', './assets/wallpaper.png'); 
      
      //dialogue boxes
      this.load.image('blue1', './assets/TextBoxes/BlueLevel1.PNG');
      this.load.image('blue2', './assets/TextBoxes/BlueLevel2.PNG');
      this.load.image('blue3', './assets/TextBoxes/BlueLevel3.PNG');
      this.load.image('yellow1', './assets/TextBoxes/YellowLevel1.PNG');
      this.load.image('yellow2', './assets/TextBoxes/YellowLevel2.PNG');
      this.load.image('yellow3', './assets/TextBoxes/YellowLevel3.PNG');
     // this.load.image('mementomenu', './assets/FullScreen/MenuScreen.PNG');

///////////////////////////////////////////////////////////////////////////////////////////////
      this.load.image('credits', './assets/FullScreen/EndScreen (1).PNG'); 
      this.load.image('playagainbutton', './assets/UI/PlayAgainButton.PNG'); 
      this.load.image('creditsbutton', './assets/UI/CreditsButton.PNG'); 
      this.load.image('mutebutton', './assets/UI/MuteButton.PNG'); 
     
      //dialogue boxes
      this.load.image('mementomenu', './assets/FullScreen/MenuScreen.PNG');
      
      //level backgrounds


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
      this.button = this.add.sprite(460,game.config.height/3, 'playbutton').setScale(1).setOrigin(0);
      this.button.setInteractive();
      this.button.on('pointerdown',()=> this.scene.start('Level1'))

      //mute button
      this.button = this.add.sprite(60,game.config.height*.7, 'mutebutton').setScale(1).setOrigin(0);
      this.button.setInteractive();
      this.button.on('pointerdown',()=> this.scene.start(''))
      
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

  


