class Lv1 extends Phaser.Scene {
	constructor() {
		super('Level1');
	}

	
	create() {

		//camera fade in n out 
		this.cameras.main.once('camerafadeoutcomplete', function (camera) {
			this.add.image(1260, 590, 'levelonenew').setOrigin(0, 0).setScale(.4,.4);;
			camera.fadeIn(300, 0,0,0);

		 //create sounds
		 this.music = this.sound.add('level1music');
		 this.music.play( {loop:true} );
		 if(mute == false) { this.music.play( { loop: true} ); } //play if unmuted



		//create background
		let background = this.add.sprite(0,0, 'levelonenew').setOrigin(0, 0);

		//progressbar
		let progressbar = this.add.sprite('progressbar');
		progressbar= this.add.sprite(game.config.width/3.58,0, 'progressbar').setOrigin(0, 0).setScale(.35,.32);
		
		//exit button switches scenes to level 2    
		this.tempLevl2button = this.add.sprite(game.config.width/4,game.config.height/4, 'exitbutton').setScale(0.25,0.25).setOrigin(0);
		this.tempLevl2button.setInteractive();
		this.tempLevl2button.on('pointerdown',()=> {this.scene.start('Level2'); this.music.stop()});

		//dialogue box art
		this.dialogueBox = this.add.sprite(game.config.width/4.5, 0, 'level1box').setOrigin(0).setScale(.4,.4);
		this.dialogueBox.y = game.config.height/1.01 - this.dialogueBox.displayHeight;

		//create continue text prompt
		this.continueButton = this.add.text(720, 555, '[CLICK TO CONTINUE]', { font: "15pt Courier", fill: "#ff0000", stroke: "#ff0000", strokeThickness: 1 });
		this.continueButton.alpha = 0; 	
		this.continueON = false;
		this.continueButton.setInteractive();
		this.continueButton.on('pointerdown', (pointer, gameObject) => {
			console.log('conditional met');
			if(this.selectedMemento.continueCount <=1) {
				typeText(this, this.selectedMemento.text[2] + '\n\n' + this.selectedMemento.text[3]);
			}
			else {
				this.selectedMemento.displayOptions();
			}
		});

		
		

		//clickable memento magnolia
		this.magnolia = new memento(this, game.config.width*.84, game.config.height*.000000000000000001, 'magnolianew').setOrigin(0).setScale(.7999);
		this.magnolia.text = ['I\'m a magnolia flower!',
							'...',
							'.... what, do you like me or something? Wtf are you looking at?',
							'...'];
		this.magnolia.makeInteractive();

		//tree carving
		this.carving = new memento(this, 10, 200, 'treecarving').setOrigin(0).setScale(.3);
		this.carving.text = ['X+A, a romantic display of affection',
			'A contract ripped into the bark as a demonstration',
			'After the guilty often return to the crime scene',
			'Then visits stop & the gashes fade to scars to memory',
			'Sometimes we hurt each other and lose a shared, beloved sentiment'];
		this.carving.makeInteractive();
		//squirrel
		this.squirrel = new memento(this, 638, 340, 'squirrel').setOrigin(0).setScale(.64);
		this.squirrel.text = ['[Squirrel sounds]', 
							'...',
							'[Squirrel sounds intensify]',
							'...'];
		this.squirrel.makeInteractive();

		//text
		boxText = this.add.text(430, this.dialogueBox.y + 15, '', { font: "14pt Courier", fill: "#000000", stroke: "#000000", wordWrap: { width: 570, useAdvancedWrap: true } });
		//boxText.setText('Welcome to level 1! Click on the magnolia for instructions!');
		boxText.visible = true;
		typeText(this, 'Welcome to level 1! Take a look around and click on what piques your interest');
		
		//butterfly
		this.butterfly = new memento(this, game.config.width*.0455, game.config.height*.5, 'butterflysmall').setOrigin(0).setScale(.8);
		this.butterfly.text = ['[oink, oink]',
							'...',
							'[oinking intensifies',
							'...'];
		this.butterfly.makeInteractive();
		//girl
		this.girl = new memento(this, game.config.width*.44, game.config.height*.299, 'girlsmall').setOrigin(0).setScale(.87);
		this.girl.text = ['\"Stranger danger!\"',
						'...',
						'I\"m getting my Daddy!',
						'...'];
		this.girl.makeInteractive();
	
		this.selectedMemento; //current memento being interacted with
		}, this);
  
		this.cameras.main.fadeOut(300, 0,0,0);

		
		var pointer = this.input.activePointer;


	}
	//end of create()
		
	update() {
		var pointer = this.input.activePointer;
		var enterKey= this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ENTER);
		console.log('x: ' + pointer.x + '\ny: ' + pointer.y);

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
