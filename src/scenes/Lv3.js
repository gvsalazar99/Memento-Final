class Lv3 extends Phaser.Scene {
	constructor() {
		super('Level3');
	}

	preload() {
		this.load.image('level3box', 'assets/TextBoxes/LevelThreeTextBox.PNG');
		this.load.audio('level3music', 'assets/audio/bensound-sweet.mp3');

		//mementos for level3 (temp)
		this.load.image('signtemp', 'assets/mementos/signtemp.png');
		this.load.image('dogtemp', 'assets/mementos/dogtemp.png');
		this.load.image('parenttemp', 'assets/mementos/parenttemp.png');
		this.load.image('registertemp', 'assets/mementos/registertemp.png');
		this.load.image('breadtemp', 'assets/mementos/breadtemp.png');
	   
	}


	create() {
		//camera fade in n out 
		this.cameras.main.once('camerafadeoutcomplete', function (camera) {
			this.add.image(1260, 590, 'black').setOrigin(0, 0);
			camera.fadeIn(300, 0,0,0);	

		//create music
		this.music = this.sound.add('level3music');
		this.music.play( {loop:true} );


		//dialogue box art
		this.dialogueBox = this.add.sprite(game.config.width/4.5, 0, 'level3box').setOrigin(0).setScale(.4,.4);
	this.dialogueBox.y = game.config.height/1.01 - this.dialogueBox.displayHeight;
		
		//exit button switches scenes to Credit (end scene)  
		this.tempcreditsbutton = this.add.sprite(game.config.width/4,game.config.height/4, 'exitbutton').setScale(0.25,0.25).setOrigin(0);
		this.tempcreditsbutton.setInteractive();
		this.tempcreditsbutton.on('pointerdown',()=> {this.scene.start('Credits'); this.music.stop()});
		

		//text
		boxText = this.add.text(430, this.dialogueBox.y + 15, '', {font: "14pt Courier", fill: "#000000", stroke: "#000000", wordWrap: { width: 700, useAdvancedWrap: true } });
		boxText.setText('Congratulations, you\'ve made it to purgatory with the rest of the ne\'er-do-wells. At least you got a comfy cat bed...');
		boxText.visible = true;

		//clickable catbed
		this.memento = new memento(this, game.config.width*.75, game.config.height*.25, 'catbed').setOrigin(0).setScale(.3);
		this.memento.text = 'Oh, c\'mon, no need to throw a fit!';
		this.memento.makeInteractive();

		//clickable signtemp
		this.memento = new memento(this, game.config.width*.7, game.config.height*.1, 'signtemp').setOrigin(0).setScale(.3);
		this.memento.text = 'Oh, c\'mon, no need to throw a fit!';
		this.memento.makeInteractive();

		//clickable parent temp
		this.memento = new memento(this, game.config.width*.5, game.config.height*.25, 'parenttemp').setOrigin(0).setScale(.3);
		this.memento.text = 'Oh, c\'mon, no need to throw a fit!';
		this.memento.makeInteractive();

		//clickable register temp
		this.memento = new memento(this, game.config.width*.1, game.config.height*.2, 'registertemp').setOrigin(0).setScale(.3);
		this.memento.text = 'Oh, c\'mon, no need to throw a fit!';
		this.memento.makeInteractive();

		//clickable dog temp
		this.memento = new memento(this, game.config.width*.15, game.config.height*.15, 'dogtemp').setOrigin(0).setScale(.3);
		this.memento.text = 'Oh, c\'mon, no need to throw a fit!';
		this.memento.makeInteractive();

		//clickable bread temp
		this.memento = new memento(this, game.config.width*.35, game.config.height*.35, 'breadtemp').setOrigin(0).setScale(.3);
		this.memento.text = 'Oh, c\'mon, no need to throw a fit!';
		this.memento.makeInteractive();

		//progressbar
		let progressbar = this.add.sprite('progressbar');
		progressbar= this.add.sprite(game.config.width/3.58,0, 'progressbar').setOrigin(0, 0).setScale(.35,.32);

	}, this);
  
	this.cameras.main.fadeOut(300, 0,0,0);
	}

	update() {
		//boxText._text == 'Oh, c\'mon, no need to throw a fit!' ? this.memento.angle = 135 : this.memento.angle = 0;
	}
}
