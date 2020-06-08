class Lv2 extends Phaser.Scene {
	constructor() {
		super('Level2');
	}

	preload() {
		this.load.image('level2box', './assets/TextBoxes/LevelTwoTextBox.PNG');
		this.load.image('leveltwo', './assets/FullScreen/LevelTwoBackground.png');
		this.load.audio('level2music', './assets/audio/level2relaxing.mp3');

		//mementos for level2 (temp)
		this.load.image('seahorses', './assets/mementos/twoseahorses.png');
		this.load.image('seaweed', './assets/mementos/seaweed.png');
		this.load.image('shell', './assets/mementos/shell.png');
		this.load.image('starfish', './assets/mementos/starfish.png');
		 this.load.image('fish', './assets/mementos/fishsmall.png');
		//load progress bar 
		this.load.image('progressbar', 'assets/UI/progressBar/BallAndBar.PNG');
		this.load.image('progressbarlong', 'assets/UI/progressBar/KarmaBar.PNG');
		//load x button
		this.load.image('xbutton', 'assets/TextBoxes/xbutton.png');
		//memento glows
		this.load.image('seahorsesGlow', './assets/mementos/glow/twoseahorseswglow.png');
		this.load.image('seaweedGlow', './assets/mementos/glow/seaweedwglow.png');
		this.load.image('shellGlow', './assets/mementos/glow/shellwglow.png');
		this.load.image('starfishGlow', './assets/mementos/glow/starfishwglow.png');
		this.load.image('fishGlow', './assets/mementos/glow/fishsmallwglow.png');
		//load progress bar 
		this.load.image('progressbar', 'assets/UI/progressBar/BallAndBar.PNG');
		this.load.image('progressbarlong', 'assets/UI/progressBar/KarmaBar.PNG');
		this.load.image('progressBall', 'assets/UI/progressBar/KarmaBall.PNG');
		this.load.image('progress1', 'assets/UI/progressBar/Progress1.PNG');
		this.load.image('progress2', 'assets/UI/progressBar/Progress4.PNG');
		this.load.image('progress3', 'assets/UI/progressBar/Progress7.PNG');
		this.load.image('progress4', 'assets/UI/progressBar/Progress10.PNG');
		this.load.image('progress5', 'assets/UI/progressBar/Progress13.PNG')
		//loud memento sounds
		this.load.audio('seahorsesound', './assets/audio/seahorsesound.mp3');
		this.load.audio('fishsound', './assets/audio/fishsound.mp3');
		this.load.audio('starfishsound', './assets/audio/starfishsound.mp3');
		this.load.audio('seaweedsound', './assets/audio/seaweedsound.mp3');
		this.load.audio('shellsound', './assets/audio/shellsound.mp3');


	}

	create() {
		mementoGroup = []; //reset collection of mementos
		this.previousMemento = null; //memento that was selected before the current
		this.selectedMemento = null; //current memento being interacted with

		//create audio
		this.music = this.sound.add('level2music');
		this.clickSFX = this.sound.add('mouseclick');
		this.turningpage = this.sound.add('turningpage');


		 //play music if unmuted
		 if(mute == false) { 
			this.music.play({ 
				loop: true, 
				volume: 0.1
			}); 
		} 

		//camera fade in n out
		this.cameras.main.once('camerafadeoutcomplete', function (camera) {
			this.add.image(1260, 590, 'mementomenu').setOrigin(0, 0);
			camera.fadeIn(1000, 0,0,0);

		//create background
		let background = this.add.sprite(0,0, 'leveltwo').setOrigin(0, 0);

		//create sound effects for mementos 
		this.seahorsesound = this.sound.add('seahorsesound');
		this.fishsound = this.sound.add('fishsound');
		this.starfishsound = this.sound.add('starfishsound');
		this.seaweedsound = this.sound.add('seaweedsound');
		this.shellsound = this.sound.add('shellsound');

	




		// //exit button switches to level 3 
		// this.templevl3button = this.add.sprite(game.config.width/4,game.config.height/4, 'exitbutton').setScale(0.25,0.25).setOrigin(0);
		// this.templevl3button.setInteractive();

		// //RESTART SCENE
		// this.templevl3button.on('pointerdown',()=> {
		// 	console.log('RESTARTING THE LEVEL'); 
		// 	this.scene.start('Level2'); 
		// 	this.music.stop();
		// });
		
		//dialogue box art
		this.dialogueBox = this.add.sprite(game.config.width/3.5, game.config.height*.2, 'level2box').setOrigin(0).setScale(.32,.32);
		this.dialogueBox.y = game.config.height/1.07 - this.dialogueBox.displayHeight;	

		//create continue button
		addContinue(this);

		//create x button
		//addXButton(this);		

		//Welcoming text!
		boxText = this.add.text(480, this.dialogueBox.y + 15, '', { font: "12pt Baskerville", fill: "#000000", stroke: "#000000", wordWrap: { width: 450, useAdvancedWrap: true } });
		boxText.setText('Again, a distant but familiar place. This is another one of the many lives that I have lived. I should explore the scene and remember what I can about this life.');
		boxText.visible = true;
		console.log(boxText);

		//progressbar
		//progressbar= this.add.sprite(game.config.width/3.58,0, 'progressbar').setOrigin(0, 0).setScale(.35,.32); //this is when its on top
		let progressbar= this.add.sprite(game.config.width*.3, game.config.height*.93, 'progressbarlong').setOrigin(0, 0).setScale(.35,.2); //this is when its at bottom 
		//color bar
		this.progress1= this.add.sprite(game.config.width*.3, game.config.height*.92, 'progress1').setOrigin(0, 0).setScale(.35,.2);
		this.progress1.visible = false;
		this.progress2= this.add.sprite(game.config.width*.3, game.config.height*.92, 'progress2').setOrigin(0, 0).setScale(.35,.2);
		this.progress2.visible = false;
		this.progress3= this.add.sprite(game.config.width*.3, game.config.height*.92, 'progress3').setOrigin(0, 0).setScale(.35,.2);
		this.progress3.visible = false;
		this.progress4= this.add.sprite(game.config.width*.3, game.config.height*.92, 'progress4').setOrigin(0, 0).setScale(.35,.2);
		this.progress4.visible = false;
		this.progress5= this.add.sprite(game.config.width*.3, game.config.height*.92, 'progress5').setOrigin(0, 0).setScale(.35,.2);
		this.progress5.visible = false;
		//little ball for the progress bar!
		this.progressBall = this.add.sprite(366, 538, 'progressBall').setOrigin(0).setScale(.2, .2);
		this.progressBall.visible = true;
		//this.progressBall.texture.key = 'progressBall';
		//this.progressBall.setInteractive();


		// //create continue text prompt
		// this.continueButton = this.add.text(720, 555, '[CLICK TO CONTINUE]', { font: "15pt Courier", fill: "#ff0000", stroke: "#ff0000", strokeThickness: 1 });
		// this.continueButton.alpha = 0; 	
		// this.continueON = false;
		// this.continueButton.setInteractive();
		// this.continueButton.on('pointerdown', (pointer, gameObject) => {
		// 	console.log('conditional met');
		// 	if(this.selectedMemento.continueCount <=1) {
		// 		typeText(this, this.selectedMemento.text[2] + '\n\n' + this.selectedMemento.text[3]);
		// 	}
		// 	else {
		// 		this.selectedMemento.displayOptions();
		// 	}
		// }); 

		//clickable seahorses
		this.seahorses = new memento(this, 130, 150, 'seahorses').setOrigin(0);
		this.seahorses.text = ['I remember how deeply I craved companionship in my youth, but how equally terrifying I found it.  I feared attachment, for the possibility of pain, shutting out the world around me for most of my life.',
					'...',
					'.... In trying to protect myself, I deprived myself of this pleasure in life for so long. Companionship, comfort, trust. I felt that if I let someone in, it was inevitable that they would ____________ me.  In time, and through courage, I was able to experience the joy of linking tails with a loved one.',
					'...'];
		this.seahorses.options = ['lose', 'leave', 'fail'];
		this.seahorses.makeInteractive();
		addGlow(this, this.seahorses, 'seahorsesGlow');
		this.seahorses.on('pointerdown',()=> {
			this.seahorsesound.play();
	});

		//clickable seaweed
		this.seaweed = new memento(this, 700, 187, 'seaweed').setOrigin(0);
		this.seaweed.text = ['In my youth, I spent many an afternoon, tail attached to the coral, watching the seaweed sway in the tide.  They were peaceful days, but never as fulfilling as I hoped.',
					'...',
					'....  Though I knew what I lacked was someone to share its beauty with, I kept that desire buried down deep, afraid to say it out loud.  It took a lot of self-reflection to realize that I ____________ a bond like that.',
					'...'];
		this.seaweed.options = ['deserve', 'merit', 'warrant'];
		this.seaweed.makeInteractive();
		addGlow(this, this.seaweed, 'seaweedGlow');
		this.seaweed.on('pointerdown',()=> {
			this.seaweedsound.play();
	});

		//clickable shell
		this.shell = new memento(this, 811, 245, 'shell').setOrigin(0).setScale(.56,.56);
		 this.shell.text = ['I used to idealize and romanticize the hermit crab’s life, thinking that if they could live such content lives of solitude, then so could I.',
					'...',
					'....  I was in for a surprise the day I learned that despite their name, hermit crabs actually travel with their friends.  They need socialization and companionship to feel whole. They want to be ____________.',
					'...'];
		this.shell.options = ['known', 'seen', 'loved'];
		this.shell.makeInteractive();
		addGlow(this, this.shell, 'shellGlow');
		this.shell.on('pointerdown',()=> {
			this.shellsound.play();
	});

		//clickable fish
		this.fish = new memento(this, 500, 120, 'fish').setOrigin(0).setScale(.8,.8);
		this.fish.text = ['I remember thinking how incredulous it was that this school of fish was always together. I wondered how they could trust so many others. Cynically, I used to comfort myself in knowing that their bonds could not last forever.',
					'...',
					'....  It is shameful to think about those thoughts now after growing out of that negative mindset.  I know that they, like me, seek ____________.',
					'...'];
		this.fish.options = ['love', 'warmth', 'light'];
		this.fish.makeInteractive();
		addGlow(this, this.fish, 'fishGlow');
		this.fish.on('pointerdown',()=> {
			this.fishsound.play();
	});


		//clickable starfish
		this.starfish = new memento(this, 784, 68, 'starfish').setOrigin(0).setScale(.7,.7);
		this.starfish.text = ['I remember when the starfish initiated conversation with me, noticing how I never swam with a partner, even though it was in my nature as a seahorse to do so.  She simply wanted to know if I was doing okay.',
		'...',
		'....  Her genuine concern for me touched my heart, and in time, I learned to let her in. She encouraged me to reach out and make other friends, acknowledging the ____________ it takes to let others in.',
		'...'];
		this.starfish.options = ['bravery', 'fearlessness','gutsiness'];
		this.starfish.makeInteractive();
		addGlow(this, this.starfish, 'starfishGlow');
		this.starfish.on('pointerdown',()=> {
			this.starfishsound.play();
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
		var enterKey= this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ENTER);
		if(Phaser.Input.Keyboard.JustDown(enterKey)) {
			this.music.stop();
			this.scene.start('Level3');
		}
		this.checkProgressBar();
	}

	checkProgressBar() {
		let optionsCount = mementoGroup.length;

		if (optionsCount == 1) {
			this.progress1.visible = true;
			this.progressBall.x = 401;
		}
		else if (optionsCount == 2) {
			this.progress1.visible = false;
			this.progress2.visible = true;
			this.progressBall.x = 503;
		}
		else if (optionsCount == 3) {
			this.progress2.visible = false;
			this.progress3.visible = true;
			this.progressBall.x = 606;
		}
		else if (optionsCount == 4) {
			this.progress3.visible = false;
			this.progress4.visible = true;
			this.progressBall.x = 735;
		}
	}
}

