class Lv2 extends Phaser.Scene {
	constructor() {
		super('Level2');
	}

	create() {

		//camera fade in n out
		this.cameras.main.once('camerafadeoutcomplete', function (camera) {
			this.add.image(1260, 590, 'mementomenu').setOrigin(0, 0);
			camera.fadeIn(300, 0,0,0);


		//create music
		this.music = this.sound.add('level2music');
		this.music.play( {loop:true} );

		//create background
		let background = this.add.sprite(0,0, 'purple').setOrigin(0, 0).setScale(5); 
		
		//exit button switches to level 3 
		this.templevl3button = this.add.sprite(game.config.width/4,game.config.height/4, 'exitbutton').setScale(0.25,0.25).setOrigin(0);
		this.templevl3button.setInteractive();
		this.templevl3button.on('pointerdown',()=> {this.scene.start('Level3');this.music.stop()});
		
		//dialogue box art
		this.dialogueBox = this.add.sprite(game.config.width/4.5, 0, 'yellow2').setOrigin(0).setScale(.55,.4);
		this.dialogueBox.y = game.config.height/1.01 - this.dialogueBox.displayHeight;
		

		//text
		boxText = this.add.text(410, this.dialogueBox.y + 15, '', { font: "15pt Courier", fill: "#ff0000", stroke: "#ff0000", strokeThickness: 1, wordWrap: { width: 700, useAdvancedWrap: true } });
		boxText.setText('Rule #2: Don\'t trust anything you\'re told');
		boxText.visible = true;
		console.log(boxText);
		
		//clickable necklace
		this.memento = new memento(this, 1024, 400, 'necklace').setOrigin(0).setScale(.3);
		this.memento.text = 'Thief! I saw you snatch my jewelry!';
		this.memento.makeInteractive();

		//clickable seaweed
		this.memento = new memento(this, 1024, 200, 'seaweedtemp').setOrigin(0).setScale(.3);
		this.memento.text = 'Thief! I saw you snatch my jewelry!';
		this.memento.makeInteractive();

		//clickable clam
		this.memento = new memento(this, 100, 100, 'clamtemp').setOrigin(0).setScale(.3);
		this.memento.text = 'Thief! I saw you snatch my jewelry!';
		this.memento.makeInteractive();

		//clickable crab
		this.memento = new memento(this, 500, 100, 'crabtemp').setOrigin(0).setScale(.3);
		this.memento.text = 'Thief! I saw you snatch my jewelry!';
		this.memento.makeInteractive();

		//clickable seahorse
		this.memento = new memento(this, 700, 20, 'seahorse').setOrigin(0).setScale(.3);
		this.memento.text = 'Thief! I saw you snatch my jewelry!';
		this.memento.makeInteractive();

	}, this);
  
	this.cameras.main.fadeOut(300, 0,0,0);
	}
	

	update() {
		// console.log(boxText._text != 'Rule #2: Don\'t trust anything you\'re told');
		// boxText._text != 'Rule #2: Don\'t trust anything you\'re told' ? this.memento.alpha = 0 : this.memento.alpha = 1;
	}
}

