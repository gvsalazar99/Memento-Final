class Credits extends Phaser.Scene {
	constructor() {
		super('Credits');
	}

	create() {
		//this is the thank you for playing/ play again scene 
		//camera fade in n out
		this.cameras.main.once('camerafadeoutcomplete', function (camera) {
			this.add.image(1260, 590, 'finalcredits').setOrigin(0, 0);
			camera.fadeIn(1000, 0,0,0);

		//endscreen
		let credits = this.add.sprite('finalcredits');
		credits = this.add.sprite(0, 0, 'finalcredits').setOrigin(0, 0);

		this.add.text(160, game.config.height*.3, 'Derek Gomez:', { font: "35pt Baskerville", fill: "#FFFFFF", stroke: "#FFFFFF", strokeThickness:2, wordWrap: { width: 570, useAdvancedWrap: true } });
		this.add.text(500, game.config.height*.3, 'lalalla', { font: "35pt Baskerville", fill: "#FFFFFF", stroke: "#FFFFFF", strokeThickness:2, wordWrap: { width: 570, useAdvancedWrap: true } });

		
		this.add.text(160, game.config.height*.4, 'Gabi Serna:', { font: "35pt Baskerville", fill: "#FFFFFF", stroke: "#FFFFFF", strokeThickness:2, wordWrap: { width: 570, useAdvancedWrap: true } });
		this.add.text(500, game.config.height*.4, 'lalalala', { font: "35pt Baskerville", fill: "#FFFFFF", stroke: "#FFFFFF", strokeThickness:2, wordWrap: { width: 570, useAdvancedWrap: true } });

		
		this.add.text(160, game.config.height*.5, 'Grecia Salazar:', { font: "35pt Baskerville", fill: "#FFFFFF", stroke: "#FFFFFF", strokeThickness:2, wordWrap: { width: 570, useAdvancedWrap: true } });
		this.add.text(500, game.config.height*.5, 'Narrative, Music, Polish', { font: "35pt Baskerville", fill: "#FFFFFF", stroke: "#FFFFFF", strokeThickness:1, wordWrap: { width: 570, useAdvancedWrap: true } });


		this.add.text(160, game.config.height*.7, 'Music/Audio:', { font: "20pt Baskerville", fill: "#FFFFFF", stroke: "#FFFFFF", strokeThickness:1.5, wordWrap: { width: 570, useAdvancedWrap: true } });

		this.add.text(350, game.config.height*.7, 'www.bensound.com , soundbible.com , www.freesoundeffects.com , www.zapsplat.com ', { font: "20pt Baskerville", fill: "#FFFFFF", stroke: "#FFFFFF", strokeThickness:1, wordWrap: { width: 570, useAdvancedWrap: true } });

		}, this);
  
		this.cameras.main.fadeOut(1000, 0,0,0);
	}

	update() {

	}
}
