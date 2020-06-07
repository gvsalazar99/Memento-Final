class Lv1 extends Phaser.Scene {
	constructor() {
		super('Level1');
	}

	preload() {
      	//mementos for level1
    	this.load.image('treecarving', 'assets/mementos/treecarvingsmall.png');
     	this.load.image('squirrel', 'assets/mementos/squirrelsmall.png');
    	this.load.image('butterflysmall', 'assets/mementos/butterflysmall.png');
    	this.load.image('magnolianew', 'assets/mementos/glow/magnolianoglow.PNG');
		this.load.image('girlsmall', 'assets/mementos/girlsmall.png');
		//memento glows
		this.load.image('carvingGlow', 'assets/mementos/glow/treecarvingsmallglow.png');
		this.load.image('squirrelGlow', 'assets/mementos/glow/squirrelsmallglow.png');
		this.load.image('butterflyGlow', 'assets/mementos/glow/butterflysmallglow.png');
		this.load.image('magnoliaGlow', 'assets/mementos/glow/magnoliawglow.png');
		this.load.image('girlGlow', 'assets/mementos/glow/girlsmallwglow.png');
		//load text box art
		this.load.image('level1box', 'assets/TextBoxes/LevelOneTextBox.PNG');
		this.load.image('continuebutton', 'assets/TextBoxes/ContinueButton.PNG');
		//load x button
		this.load.image('xbutton', 'assets/TextBoxes/xbutton.png');
		//load progress bar 
		this.load.image('progressbar', 'assets/UI/progressBar/BallAndBar.PNG');
		this.load.image('progressbarlong', 'assets/UI/progressBar/KarmaBar.PNG');
		this.load.image('progressBall', 'assets/UI/progressBar/KarmaBall.PNG');
		this.load.image('progress1', 'assets/UI/progressBar/Progress1.PNG');
		this.load.image('progress2', 'assets/UI/progressBar/Progress4.PNG');
		this.load.image('progress3', 'assets/UI/progressBar/Progress7.PNG');
		this.load.image('progress4', 'assets/UI/progressBar/Progress10.PNG');
		this.load.image('progress5', 'assets/UI/progressBar/Progress13.PNG')
		//load background
		this.load.image('levelonenew', 'assets/FullScreen/LevelOneBackgroundResized.png');
		//load background music
		this.load.audio('level1music', 'assets/audio/bensound-tenderness.mp3');
		//memento click sounds 
		this.load.audio('woodsound', './assets/audio/woodsound.mp3');
		this.load.audio('starsound', './assets/audio/starsound.mp3');
		this.load.audio('squirrelsound', './assets/audio/squirrelsound.mp3');
		this.load.audio('flowersound', './assets/audio/forflower.mp3'); //maybe change
		this.load.audio('littlegirlsound', './assets/audio/kidlaugh.mp3'); 


	}

	create() {
		
		mementoGroup = []; //reset collection of mementos

		 //get audio ready
		this.music = this.sound.add('level1music');
		this.clickSFX = this.sound.add('mouseclick');
		this.turningpage = this.sound.add('turningpage');



		 //play music if unmuted
		 if(mute == false) { 
			this.music.play({ 
				loop: true, 
				volume: 0.1
			}); 
		} 

		this.previousMemento = null; //memento that was selected before the current

		this.selectedMemento = null; //current memento being interacted with

		//camera fade in n out 
		this.cameras.main.once('camerafadeoutcomplete', function (camera) {
			this.add.image(1260, 590, 'levelonenew').setOrigin(0, 0).setScale(.4,.4);;
			camera.fadeIn(2000, 0,0,0);



		//create background
		let background = this.add.sprite(0,0, 'levelonenew').setOrigin(0, 0);


		 //create sound effects for mementos 
		 this.woodsound = this.sound.add('woodsound');
		 this.starsound = this.sound.add('starsound');
		 this.squirrelsound = this.sound.add('squirrelsound');
		 this.flowersound = this.sound.add('flowersound');
		 this.littlegirlsound = this.sound.add('littlegirlsound');



		
		// //THIS EXIT BUTTON FUNCTIONS AS A RESTART BUTTON  
		// this.tempLevl2button = this.add.sprite(game.config.width/4,game.config.height/4, 'exitbutton').setScale(0.25,0.25).setOrigin(0);
		// this.tempLevl2button.setInteractive();

		// //RESTART SCENE
		// this.tempLevl2button.on('pointerdown',()=> {
		// 	console.log('RESTARTING THE LEVEL'); 
		// 	this.scene.start('Level1'); 
		// 	this.music.stop();
		// });

		//squirrel
		this.squirrel = new memento(this, 638, 340, 'squirrel').setOrigin(0).setScale(.64);
		addGlow(this, this.squirrel, 'squirrelGlow');
		this.squirrel.makeInteractive();
		this.squirrel.text = ['This squirrel often came by and took fallen goods from my branches, even going so far as to take what had not yet fallen.  I secretly feared that once I bloomed my magnolias, it would take them from me too.', 
							'...',
							'Perhaps I struggled to grow my flowers during this time for fear of loss. I hoped and prayed the squirrel would ____________ me, but during my long life, I eventually learned that even with setbacks, I would always find the strength to recover.',
							'...'];
		this.squirrel.options = ['ignore', 'forget', 'overlook']; 
		this.squirrel.on('pointerdown',()=> {
		this.squirrelsound.play();
	});
	
		//create dialogue box art
		this.dialogueBox = this.add.sprite(game.config.width/3.5, game.config.height*.2, 'level1box').setOrigin(0).setScale(.32,.32);
		this.dialogueBox.y = game.config.height/1.07 - this.dialogueBox.displayHeight;

		//create text box
		boxText = this.add.text(480, this.dialogueBox.y + 15, '', { font: "12pt Baskerville", fill: "#000000", stroke: "#000000", wordWrap: { width: 450, useAdvancedWrap: true } });
		boxText.visible = true;
		
		addContinue(this); //create continue button
		addXButton(this); //create x button
		
		
		//Welcoming text
		typeText(this, 'I am your first reincarnation, the magnolia tree. Take a look around and I will tell you of the life I live.');	

		//progressbar
		//let progressbar = this.add.sprite('progressbar');
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


		//clickable memento magnolia
		this.magnolia = new memento(this, game.config.width*.84, game.config.height*.000000000000000001, 'magnolianew').setOrigin(0).setScale(.7999);
		addGlow(this, this.magnolia, 'magnoliaGlow');
		this.magnolia.makeInteractive();
		this.magnolia.text = ['I watched this magnolia flower in wonder, seeing it take its time to flourish and grow upon the branches of my friend.  She only revealed her true colors, her growth, and progress, to those who properly cared for her.',
							'...',
							'.... I remember the ____________ I endured, and the continued effort I made to persevere.',
							'...'];
		this.magnolia.options = ['struggles', 'hardships', 'tough times'];
		this.magnolia.on('pointerdown',()=> {
			this.flowersound.play();
	});

		
		//tree carving
		this.carving = new memento(this, 10, 200, 'treecarving').setOrigin(0).setScale(.3);
		addGlow(this, this.carving, 'carvingGlow');
		this.carving.makeInteractive();
		this.carving.text = ['X+A were carved into my bark years ago, yet I struggled for decades to recover from this wound. Their declaration of love marked me as property, but I would eventually learn that I belonged only to myself.',
							'...',
							'I remember how they set me back years in growth, but despite their disregard for my personal ____________ , I never gave up the effort to bloom my own flowers, and to be the best version of myself.',
							'...'];
		this.carving.options = ['trials', 'worries', 'battles']; 
		this.carving.on('pointerdown',()=> {
		this.woodsound.play();
	});

		

		//butterfly
		this.butterfly = new memento(this, game.config.width*.0455, game.config.height*.5, 'butterflysmall').setOrigin(0).setScale(.8);
		addGlow(this, this.butterfly, 'butterflyGlow');
		this.butterfly.makeInteractive();
		this.butterfly.text = ['In my lifetime, I housed, fed, and befriended generations of this butterfly family. These friends of mine never took more than they needed, though I always tried to offer them an abundance.',
							'...',
							'They all left me eventually, but I knew we needed different things, and I understood it was what they required in order to grow.  In my loneliest moments, I was able to ____________ , knowing they would always come back to visit their old friend.',
							'...'];
		this.butterfly.options = ['persevere', 'overcome', 'remain strong']; 
		this.butterfly.on('pointerdown',()=> {
		this.starsound.play();
	});

		
		
		//girl
		this.girl = new memento(this, game.config.width*.44, game.config.height*.299, 'girlsmall').setOrigin(0).setScale(.87);
		this.girl.makeInteractive();
		addGlow(this, this.girl, 'girlGlow');
		this.girl.text = ['I remember how little Maya was when her family first moved into the house I was rooted beside.  At this age, she would always climb my branches and play pretend in my leaves.  As she got older, she began to read books in the shade I offered, and fall peacefully asleep at my roots.',
						'...',
						'She grew to be strong, intelligent, and beautiful. Her company healed me, and her transformation inspired me.  She was a girl with ____________',
						'...'];
		this.girl.options = ['power', 'vigor', 'passion']; 
		this.girl.on('pointerdown',()=> {
			this.littlegirlsound.play();
		});

	

		}, this);
  
		this.cameras.main.fadeOut(2000, 0,0,0);

		
		var pointer = this.input.activePointer;

		//I AM FOR DEBUGGING, IF YOU DO NOT COMMENT OUT THIS BLOCK, 
		//I WILL RUIN THE PLAYER EXPERIENCE
		//mementoGroup = [this.squirrel, this.girl, this.carving, this.butterfly, this.magnolia];

	

	}
	//end of create()
		
	update() {
		//console.log('Ball: (' + this.progressBall.x + ', ' + this.progressBall.y + ')');
		this.checkProgressBar();

		//switch to cut scene when all options have been chosen from mementos
		if(mementoGroup.length >= 5) {
			console.log('Switching scenes!'); 
			this.scene.start('cutsceneyellow'); 
			this.music.stop();
		}


		var pointer = this.input.activePointer;
		
		//console.log('x: ' + pointer.x + '\ny: ' + pointer.y);

		//continue text

		// if(Phaser.Input.Keyboard.JustDown(enterKey) && this.continueButton.alpha == 1) {
		// 	console.log('conditional met');
		// 	if(this.selectedMemento.continueCount <=1) {
		// 		typeText(this, this.selectedMemento.text[2] + '\n\n' + this.selectedMemento.text[3]);
		// 	}
		// 	else {
		// 		this.selectedMemento.displayOptions();
		// 	}
		// }
		var enterKey= this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ENTER);
		if(Phaser.Input.Keyboard.JustDown(enterKey)) {
			this.music.stop();
			this.scene.start('Level2');
		}
	
	
	
	}

//this function updates the progress bar by checking how many memento's have had options chosen
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

//closes .Scene
}
