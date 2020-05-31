class Lv2 extends Phaser.Scene {
	constructor() {
		super('Level2');
	}

	preload() {
		this.load.image('level2box', 'assets/TextBoxes/LevelTwoTextBox.PNG');
		this.load.image('leveltwo', 'assets/Fullscreen/LevelTwoBackground.png');
		this.load.audio('level2music', 'assets/audio/bensound-beyondtheline.mp3');

		//mementos for level2 (temp)
		this.load.image('seahorses', 'assets/mementos/twoseahorses.png');
		this.load.image('seaweed', 'assets/mementos/seaweed.png');
		this.load.image('shell', 'assets/mementos/shell.png');
		this.load.image('starfish', 'assets/mementos/starfish.png');
		 this.load.image('fish', 'assets/mementos/fishsmall.png');
	}

	create() {
		mementoGroup = []; //reset collection of mementos

		//create music
		this.music = this.sound.add('level2music');
		 //play music if unmuted
		 if(mute == false) { 
			this.music.play({ 
				loop: true, 
				volume: 0.005
			}); 
		} 

		//camera fade in n out
		this.cameras.main.once('camerafadeoutcomplete', function (camera) {
			this.add.image(1260, 590, 'mementomenu').setOrigin(0, 0);
			camera.fadeIn(1000, 0,0,0);

		//create background
		let background = this.add.sprite(0,0, 'leveltwo').setOrigin(0, 0);
	
		//progressbar
		let progressbar = this.add.sprite('progressbar');
		progressbar= this.add.sprite(game.config.width/3.58,0, 'progressbar').setOrigin(0, 0).setScale(.35,.32);
		
		//exit button switches to level 3 
		this.templevl3button = this.add.sprite(game.config.width/4,game.config.height/4, 'exitbutton').setScale(0.25,0.25).setOrigin(0);
		this.templevl3button.setInteractive();

		//RESTART SCENE
		this.tempLevl2button.on('pointerdown',()=> {
			console.log('RESTARTING THE LEVEL';); 
			this.scene.start('Level2'); 
			this.music.stop();
		});
		//dialogue box art
		this.dialogueBox = this.add.sprite(game.config.width/4.5, game.config.height/4.5, 'level2box').setOrigin(0).setScale(.4,.4);
		this.dialogueBox.y = game.config.height/1.01 - this.dialogueBox.displayHeight;	

		//text
		boxText = this.add.text(430, this.dialogueBox.y + 20, '', { font: "14pt Courier", fill: "#000000", stroke: "#000000", strokeThickness: 1, wordWrap: { width: 700, useAdvancedWrap: true } });
		boxText.setText('Rule #2: Don\'t trust anything you\'re told');
		boxText.visible = true;
		console.log(boxText);
		
		//clickable seahorses
		this.seahorses = new memento(this, 130, 150, 'seahorses').setOrigin(0);
		this.seahorses.text = ['Seahorse #1: Do you know who I am?!',
							'I am seahorse #1!',
							'Seahorse #2: Do you know who I am?!',
							'I am seahorse #2!'];
		this.seahorses.makeInteractive();

		//clickable seaweed
		this.seaweed = new memento(this, 700, 187, 'seaweed').setOrigin(0);
		this.seaweed.text = ['I am Mrs. Seaweed!',
							'I will tell you a story!',
							'Yo momma fine af',
							'Das a lot of cake'];
		this.seaweed.makeInteractive();

		//clickable shell
		this.shell = new memento(this, 811, 245, 'shell').setOrigin(0).setScale(.56,.56);
		this.shell.text = ['S',
				  		   'H',
						   'E',
						   'L'];
		this.shell.makeInteractive();

		//clickable fish
		this.fish = new memento(this, 500, 120, 'fish').setOrigin(0).setScale(.8,.8);;
		this.fish.text = ['f',
						  'i',
						  's',
						  'h'];
		this.fish.makeInteractive();

		//clickable starfish
		this.star = new memento(this, 784, 68, 'starfish').setOrigin(0).setScale(.7,.7);
		this.star.text = ['S',
						  'T',
					   	  'A',
						  'R'];
		this.star.makeInteractive();

		this.selectedMemento;

		//create continue text prompt
		this.continueButton = this.add.text(720, 555, '[CLICK TO CONTINUE]', { font: "15pt Courier", fill: "#ff0000", stroke: "#ff0000", strokeThickness: 1 });
		this.continueButton.alpha = 0; 	
		//this.continueON = false;
		this.continueButton.setInteractive();
		this.continueButton.on('pointerdown', (pointer, gameObject) => {
			console.log('continue clicked!');
			if(this.selectedMemento.continueCount <=1) {
				typeText(this, this.selectedMemento.text[2] + '\n\n' + this.selectedMemento.text[3]);
			}
			else {
				this.selectedMemento.displayOptions();
			}
		});

	}, this); 
	this.cameras.main.fadeOut(1000, 0,0,0);


	}
	

	update() {
		//switch to cut scene when all options have been chosen from mementos
		if(mementoGroup.length >= 5) {
			console.log('Switching scenes!'); 
			this.scene.start('cutsceneblue'); 

			this.music.stop();
		}
		// console.log(boxText._text != 'Rule #2: Don\'t trust anything you\'re told');
		// boxText._text != 'Rule #2: Don\'t trust anything you\'re told' ? this.memento.alpha = 0 : this.memento.alpha = 1;
	}
}

