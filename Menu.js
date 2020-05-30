class Menu extends Phaser.Scene {
    constructor() {
        super("menuScene");
        
    }

    preload() {
      this.load.image('background', './assets/cosmowanda.png'); 
      this.load.image('playbutton', './assets/PlayButton.png'); 
      this.load.image('pink', './assets/pink.png'); 
      this.load.image('character', './assets/Shadow.PNG'); 
      this.load.image('box', './assets/box.png'); 
      this.load.image('exitbutton', './assets/ExitButton.png'); 
      this.load.image('popup', './assets/box.png'); 
      this.load.image('magnolia', './assets/Magnolia.PNG'); 
      this.load.image('necklace', './assets/Necklace.PNG'); 
      this.load.image('catbed', './assets/Cat bed.PNG'); 
      this.load.image('purple', './assets/wallpaper.png'); 
      //dialogue boxes
      this.load.image('blue1', './assets/TextBoxes/BlueLevel1.PNG');
      this.load.image('blue2', './assets/TextBoxes/BlueLevel2.PNG');
      this.load.image('blue3', './assets/TextBoxes/BlueLevel3.PNG');
      this.load.image('yellow1', './assets/TextBoxes/YellowLevel1.PNG');
      this.load.image('yellow2', './assets/TextBoxes/YellowLevel2.PNG');
      this.load.image('yellow3', './assets/TextBoxes/YellowLevel3.PNG');
      this.load.image('mementomenu', './assets/IMG_0094.PNG');




    }



    create() {

      
      let background = this.add.sprite('mementomenu');
      let button = this.add.sprite('playbutton');

      //button interactivity in menu 
      background = this.add.sprite(0, 0, 'mementomenu').setOrigin(0, 0).setScale(0.85,0.85);
      //background.x = game.config.height - background.width;

      this.button = this.add.sprite(game.config.width/2,game.config.height/2, 'playbutton').setScale(0.3,0.3).setOrigin(0);
      this.button.setInteractive();
      this.button.on('pointerdown',()=> this.scene.start('Level1'))
        

    }

    

    update() {

    }


  }


