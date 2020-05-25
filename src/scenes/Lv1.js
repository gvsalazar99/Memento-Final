class Lv1 extends Phaser.Scene {
	constructor() {
		super('Level1');
	}

	
	create() {


		//camera fade in n out 
		this.cameras.main.once('camerafadeoutcomplete', function (camera) {
			this.add.image(1260, 590, 'levelonenew').setOrigin(0, 0);
			camera.fadeIn(300, 0,0,0);
	
		 //create sounds
		 this.music = this.sound.add('level1music');
		 //this.music.play( {loop:true} );
		 //play if unmuted
		 if(mute == false) { this.music.play( { loop: true} ); }



		//create background
		let background = this.add.sprite(0,0, 'levelonenew').setOrigin(0, 0);
		
		//exit button switches scenes to level 2    
		this.tempLevl2button = this.add.sprite(game.config.width/4,game.config.height/4, 'exitbutton').setScale(0.25,0.25).setOrigin(0);
		this.tempLevl2button.setInteractive();
		this.tempLevl2button.on('pointerdown',()=> {this.scene.start('Level2'); this.music.stop()});
		

		//dialogue box art
		this.dialogueBox = this.add.sprite(game.config.width/4.5, 0, 'blue1').setOrigin(0).setScale(.55,.4);
		this.dialogueBox.y = game.config.height/1.01 - this.dialogueBox.displayHeight;

		//text
		boxText = this.add.text(410, this.dialogueBox.y + 15, '', { font: "15pt Courier", fill: "#ff0000", stroke: "#ff0000", strokeThickness: 1, wordWrap: { width: 600, useAdvancedWrap: true } });
		//boxText.setText('Welcome to level 1! Click on the magnolia for instructions!');
		boxText.visible = true;
		typeText(this, 'Welcome to level 1! Click on the magnolia for instructions!');
		
		//clickable memento magnolia
		this.memento = new memento(this, game.config.width*.84, game.config.height*.000000000000000001, 'magnolianew').setOrigin(0).setScale(.7999);
		this.memento.text = ['X+A, a romantic display of affection',
							'A contract ripped into the bark as a demonstration',
							'After the guilty often return to the crime scene',
							'Then visits stop & the gashes fade to scars to memory',
							'Sometimes we hurt each other and lose a shared, beloved sentiment'];
		this.memento.makeInteractive();

		//tree carving
		this.memento = new memento(this, game.config.width*.0000000000001, game.config.height*.069, 'treecarving').setOrigin(0).setScale(.75);
		this.memento.text = 'Rule #1: Don\'t click on the exit button!';
		this.memento.makeInteractive();
		
		//squirrel
		this.memento = new memento(this, game.config.width*.455, game.config.height*.49, 'squirrel').setOrigin(0).setScale(.6);
		this.memento.text = 'Rule #1: Don\'t click on the exit button!';
		this.memento.makeInteractive();
		
		//butterfly
		this.memento = new memento(this, game.config.width*.0455, game.config.height*.5, 'butterflysmall').setOrigin(0).setScale(.8);
		this.memento.text = 'Rule #1: Don\'t click on the exit button!';
		this.memento.makeInteractive();
		
		//girl
		this.memento = new memento(this, game.config.width*.44, game.config.height*.299, 'girlsmall').setOrigin(0).setScale(.87);
		this.memento.text = 'Rule #1: Don\'t click on the exit button!';
		this.memento.makeInteractive();
	



		//character
		//this.character = new Shadow(this, 0, 385, 'character').setOrigin(0,0).setScale(.7);
		//this.character.x = game.config.width/2;
		//this.character.y = game.config.height/2;

	}, this);
  
	this.cameras.main.fadeOut(300, 0,0,0);
	}



	keyPress(char) {

	}


	
	update() {
	
		console.log
	}

//closes .Scene
}
