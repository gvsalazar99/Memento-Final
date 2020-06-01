class Credits extends Phaser.Scene {
	constructor() {
		super('Credits');
	}

	create() {

		//camera fade in n out
		this.cameras.main.once('camerafadeoutcomplete', function (camera) {
			this.add.image(1260, 590, 'credits').setOrigin(0, 0);
			camera.fadeIn(1000, 0,0,0);

		//endscreen
		let credits = this.add.sprite('credits');
		credits = this.add.sprite(0, 0, 'credits').setOrigin(0, 0);

		//play again button
		let playagainbutton = this.add.sprite('playagainbutton');
		this.playagainbutton = this.add.sprite(385,game.config.height/3, 'playagainbutton').setScale(0.9,0.9).setOrigin(0);
		this.playagainbutton.setInteractive();
		this.playagainbutton.on('pointerdown',()=> this.scene.start('menuScene'))
		addGlow(this, this.playagainbutton, 'playagainGlow');
	

		}, this);
  
		this.cameras.main.fadeOut(1000, 0,0,0);
	}

	update() {

	}
}
