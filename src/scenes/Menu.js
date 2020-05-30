class Menu extends Phaser.Scene {
    constructor() {
        super("menuScene");
        
    }

    preload() {
      this.load.image('background', './assets/cosmowanda.png'); 
      this.load.image('playbutton', './assets/PlayButtonNew.PNG'); 
      this.load.image('pink', './assets/pink.png'); 
      this.load.image('character', './assets/Shadow.PNG'); 
      this.load.image('box', './assets/box.png'); 
      this.load.image('exitbutton', './assets/ExitButton.png'); 
      this.load.image('popup', './assets/box.png'); 
      this.load.image('magnolia', './assets/Magnolia.PNG'); 
      this.load.image('necklace', './assets/Necklace.PNG'); 
      this.load.image('catbed', './assets/Cat bed.PNG'); 
      this.load.image('purple', './assets/wallpaper.png'); 
      this.load.image('credits', './assets/EndScreen (1).PNG'); 
      this.load.image('playagainbutton', './assets/PlayAgainButton.PNG'); 
      this.load.image('creditsbutton', './assets/CreditsButton.PNG'); 
      this.load.image('mutebutton', './assets/MuteButton.PNG'); 
      //dialogue boxes
      this.load.image('level2box', './assets/LevelTwoTextBox.PNG');
      this.load.image('level1box', './assets/LevelOneTextBox.PNG');
      this.load.image('level3box', './assets/LevelThreeTextBox.PNG');
      this.load.image('mementomenu', './assets/MenuScreen.PNG');
      //level backgrounds
      this.load.image('levelone', './assets/LevelOneBackground.PNG');
      this.load.image('levelonenew', './assets/LevelOneBackgroundResized.png');
      this.load.image('leveltwo', './assets/LevelTwoBackground.png');

      //sounds
      this.load.audio('level1music', 'assets/bensound-tenderness.mp3');
      this.load.audio('level2music', 'assets/bensound-beyondtheline.mp3');
      this.load.audio('level3music', 'assets/bensound-sweet.mp3');
      this.load.audio('mouseclick', 'assets/mouseclick.mp3');

      //progress bar
      this.load.image('progressbar', './assets/ballAndBar.PNG');

      //mementos for level1
      this.load.image('treecarving', './assets/treecarvingsmall.png');
      this.load.image('squirrel', './assets/squirrelsmall.png');
      this.load.image('butterflysmall', './assets/butterflysmall.png');
      this.load.image('magnolianew', './assets/magnolianoglow.PNG');
      this.load.image('girlsmall', './assets/girlsmall.png');

       //mementos for level2 (temp)
       this.load.image('seahorses', './assets/twoseahorses.png');
       this.load.image('seaweed', './assets/seaweed.png');
       this.load.image('shell', './assets/shell.png');
       this.load.image('starfish', './assets/starfish.png');
       this.load.image('fish', './assets/fishsmall.png');

       //mementos for level3 (temp)
       this.load.image('signtemp', './assets/signtemp.png');
       this.load.image('dogtemp', './assets/dogtemp.png');
       this.load.image('parenttemp', './assets/parenttemp.png');
       this.load.image('registertemp', './assets/registertemp.png');
       this.load.image('breadtemp', './assets/breadtemp.png');
       
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

  


