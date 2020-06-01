class Lv1 extends Phaser.Scene {
	constructor() {
		super('Level1');
	}

	preload() {
		this.load.image('magnolia', 'assets/mementos/Magnolia.PNG'); 
      	//mementos for level1
    	this.load.image('treecarving', 'assets/mementos/treecarvingsmall.png');
     	this.load.image('squirrel', 'assets/mementos/squirrelsmall.png');
    	this.load.image('butterflysmall', 'assets/mementos/butterflysmall.png');
    	this.load.image('magnolianew', 'assets/mementos/glow/magnolianoglow.PNG');
		this.load.image('girlsmall', 'assets/mementos/girlsmall.png');
	  
		this.load.image('level1box', 'assets/TextBoxes/LevelOneTextBox.PNG');
		this.load.image('levelonenew', 'assets/FullScreen/LevelOneBackgroundResized.png');
		this.load.audio('level1music', 'assets/audio/bensound-tenderness.mp3');

	}

	create() {
		mementoGroup = []; //reset collection of mementos

		 //get music ready
		 this.music = this.sound.add('level1music');

		 //play music if unmuted
		 if(mute == false) { 
			this.music.play({ 
				loop: true, 
				volume: 0.005
			}); 
		} 

		//camera fade in n out 
		this.cameras.main.once('camerafadeoutcomplete', function (camera) {
			this.add.image(1260, 590, 'levelonenew').setOrigin(0, 0).setScale(.4,.4);;
			camera.fadeIn(2000, 0,0,0);


		//create background
		let background = this.add.sprite(0,0, 'levelonenew').setOrigin(0, 0);

		//progressbar
		let progressbar = this.add.sprite('progressbar');
		progressbar= this.add.sprite(game.config.width/3.58,0, 'progressbar').setOrigin(0, 0).setScale(.35,.32);
		
		//THIS EXIT BUTTON FUNCTIONS AS A RESTART BUTTON  
		this.tempLevl2button = this.add.sprite(game.config.width/4,game.config.height/4, 'exitbutton').setScale(0.25,0.25).setOrigin(0);
		this.tempLevl2button.setInteractive();

		//RESTART SCENE
		this.tempLevl2button.on('pointerdown',()=> {
			console.log('RESTARTING THE LEVEL'); 
			this.scene.start('Level1'); 
			this.music.stop();
		});

		//dialogue box art
		this.dialogueBox = this.add.sprite(game.config.width/4.5, 0, 'level1box').setOrigin(0).setScale(.4,.4);
		this.dialogueBox.y = game.config.height/1.01 - this.dialogueBox.displayHeight;

		//create continue text prompt
		this.continueButton = this.add.text(720, 555, '[CLICK TO CONTINUE]', { font: "15pt Courier", fill: "#ff0000", stroke: "#ff0000", strokeThickness: 1 });
		this.continueButton.alpha = 0; 	
		//this.continueON = false;
		this.continueButton.setInteractive();
		this.continueButton.on('pointerdown', (pointer, gameObject) => {
			//console.log('conditional met');
			if(this.selectedMemento.continueCount <=1) {
				typeText(this, this.selectedMemento.text[2] + '\n\n' + this.selectedMemento.text[3]);
			}
			else {
				this.selectedMemento.displayOptions();
			}
		});

		
		

		//clickable memento magnolia
		this.magnolia = new memento(this, game.config.width*.84, game.config.height*.000000000000000001, 'magnolianew').setOrigin(0).setScale(.7999);
		this.magnolia.text = ['I watched this magnolia flower in wonder, seeing it take its time to flourish and grow upon the branches of my friend.  She only revealed her true colors, her growth, and progress, to those who properly cared for her.',
							'...',
							'.... I remember the [MagnoliaOption] I endured, and the continued effort I made to persevere.',
							'...'];
		this.magnolia.options = ['struggles', 'hardships', 'tough times'];
		this.magnolia.makeInteractive();

		//tree carving
		this.carving = new memento(this, 10, 200, 'treecarving').setOrigin(0).setScale(.3);
		this.carving.text = ['X+A were carved into my bark years ago, yet I struggled for decades to recover from this wound. Their declaration of love marked me as property, but I would eventually learn that I belonged only to myself.',
							'...',
							'I remember how they set me back years in growth, but despite their disregard for my personal [CarvingOption] , I never gave up the effort to bloom my own flowers, and to be the best version of myself.',
							'...'];
							this.carving.options = ['trials', 'worries', 'battles']; 
		this.carving.makeInteractive();

		//squirrel
		this.squirrel = new memento(this, 638, 340, 'squirrel').setOrigin(0).setScale(.64);
		this.squirrel.text = ['This squirrel often came by and took fallen goods from my branches, even going so far as to take what had not yet fallen.  I secretly feared that once I bloomed my magnolias, it would take them from me too.', 
							'...',
							'Perhaps I struggled to grow my flowers during this time for fear of loss. I hoped and prayed the squirrel would [SquirrelOption] me, but during my long life, I eventually learned that even with setbacks, I would always find the strength to recover.',
							'...'];
							this.squirrel.options = ['ignore', 'forget', 'overlook']; 

		this.squirrel.makeInteractive();

		//text
		boxText = this.add.text(430, this.dialogueBox.y + 15, '', { font: "14pt Courier", fill: "#000000", stroke: "#000000", wordWrap: { width: 570, useAdvancedWrap: true } });
		//boxText.setText('Welcome to level 1! Click on the magnolia for instructions!');
		boxText.visible = true;
		typeText(this, 'Welcome to level 1! Take a look around and click on what piques your interest');
		
		//butterfly
		this.butterfly = new memento(this, game.config.width*.0455, game.config.height*.5, 'butterflysmall').setOrigin(0).setScale(.8);
		this.butterfly.text = ['In my lifetime, I housed, fed, and befriended generations of this butterfly family. These friends of mine never took more than they needed, though I always tried to offer them an abundance.',
							'...',
							'They all left me eventually, but I knew we needed different things, and I understood it was what they required in order to grow.  In my loneliest moments, I was able to [ButterflyOption] , knowing they would always come back to visit their old friend.',
							'...'];
							this.butterfly.options = ['persevere', 'overcome', 'remain strong']; 


		this.butterfly.makeInteractive();
<<<<<<< HEAD
		
=======

>>>>>>> refs/remotes/origin/master
		//girl
		this.girl = new memento(this, game.config.width*.44, game.config.height*.299, 'girlsmall').setOrigin(0).setScale(.87);
		this.girl.text = ['I remember how little Maya was when her family first moved into the house I was rooted beside.  At this age, she would always climb my branches and play pretend in my leaves.  As she got older, she began to read books in the shade I offered, and fall peacefully asleep at my roots.',
						'...',
						'She grew to be strong, intelligent, and beautiful. Her company healed me, and her transformation inspired me.  She was a girl with [GirlOption]',
						'...'];
						this.girl.options = ['power', 'vigor', 'passion']; 

		this.girl.makeInteractive();
	
		this.selectedMemento; //current memento being interacted with

		}, this);
  
		this.cameras.main.fadeOut(2000, 0,0,0);

		
		var pointer = this.input.activePointer;

		//I AM FOR DEBUGGING, IF YOU DO NOT COMMENT OUT THIS BLOCK, 
		//I WILL RUIN THE PLAYER EXPERIENCE
		//mementoGroup = [this.squirrel, this.girl, this.carving, this.butterfly, this.magnolia];


	}
	//end of create()
		
	update() {
		//switch to cut scene when all options have been chosen from mementos
		if(mementoGroup.length >= 5) {
			console.log('Switching scenes!'); 
			this.scene.start('cutsceneyellow'); 
			this.music.stop();
		}

		var pointer = this.input.activePointer;
		var enterKey= this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ENTER);
		//console.log('x: ' + pointer.x + '\ny: ' + pointer.y);

		//continue text

		if(Phaser.Input.Keyboard.JustDown(enterKey) && this.continueButton.alpha == 1) {
			console.log('conditional met');
			if(this.selectedMemento.continueCount <=1) {
				typeText(this, this.selectedMemento.text[2] + '\n\n' + this.selectedMemento.text[3]);
			}
			else {
				this.selectedMemento.displayOptions();
			}
		}
	}

//closes .Scene
}
