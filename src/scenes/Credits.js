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
	

}, this);
  
this.cameras.main.fadeOut(1000, 0,0,0);
	}

	update() {

	}
}
