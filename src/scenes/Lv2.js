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
		let background = this.add.sprite(0,0, 'leveltwo').setOrigin(0, 0);

		
		//progressbar
		let progressbar = this.add.sprite('progressbar');
		progressbar= this.add.sprite(game.config.width/3.58,0, 'progressbar').setOrigin(0, 0).setScale(.35,.32);
		
		//exit button switches to level 3 
		this.templevl3button = this.add.sprite(game.config.width/4,game.config.height/4, 'exitbutton').setScale(0.25,0.25).setOrigin(0);
		this.templevl3button.setInteractive();
		this.templevl3button.on('pointerdown',()=> {this.scene.start('Level3');this.music.stop()});
		
		//dialogue box art
		this.dialogueBox = this.add.sprite(game.config.width/4.5, game.config.height/4.5, 'level2box').setOrigin(0).setScale(.4,.4);
		this.dialogueBox.y = game.config.height/1.01 - this.dialogueBox.displayHeight;
		

		//text
		boxText = this.add.text(430, this.dialogueBox.y + 20, '', { font: "14pt Courier", fill: "#000000", stroke: "#000000", strokeThickness: 1, wordWrap: { width: 700, useAdvancedWrap: true } });
		boxText.setText('Rule #2: Don\'t trust anything you\'re told');
		boxText.visible = true;
		console.log(boxText);
		
		//clickable seahorses
		this.memento = new memento(this, 130, 150, 'seahorses').setOrigin(0);
		this.memento.text = 'Thief! I saw you snatch my jewelry!';
		this.memento.makeInteractive();

		//clickable seaweed
		this.memento = new memento(this, 700, 187, 'seaweed').setOrigin(0);
		this.memento.text = 'Thief! I saw you snatch my jewelry!';
		this.memento.makeInteractive();

		//clickable shell
		this.memento = new memento(this, 811, 245, 'shell').setOrigin(0).setScale(.56,.56);
		this.memento.text = 'Thief! I saw you snatch my jewelry!';
		this.memento.makeInteractive();

		//clickable fish
		this.memento = new memento(this, 500, 120, 'fish').setOrigin(0).setScale(.8,.8);;
		this.memento.text = 'Thief! I saw you snatch my jewelry!';
		this.memento.makeInteractive();

		//clickable starfish
		this.memento = new memento(this, 784, 68, 'starfish').setOrigin(0).setScale(.7,.7);
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

