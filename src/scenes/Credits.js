class Credits extends Phaser.Scene {
	constructor() {
		super('Credits');
	}

	preload() {
		this.load.image('playagainbutton', './assets/UI/PlayAgainButton.PNG'); 
		this.load.image('playagainGlow', './assets/UI/glow/PlayAgainButtonGlow.PNG');
	}

	create() {
		//this is the thank you for playing/ play again scene 

		this.clickSFX = this.sound.add('mouseclick');

		//camera fade in n out
		this.cameras.main.once('camerafadeoutcomplete', function (camera) {
			this.add.image(1260, 590, 'finalcredits').setOrigin(0, 0);
			camera.fadeIn(1000, 0,0,0);

		//endscreen
		let credits = this.add.sprite('finalcredits');
		credits = this.add.sprite(0, 0, 'finalcredits').setOrigin(0, 0);

		this.add.text(160, game.config.height*.3, 'Derek Gomez:', { font: "25pt Baskerville", fill: "#FFFFFF", stroke: "#FFFFFF", strokeThickness:1.5, wordWrap: { width: 570, useAdvancedWrap: true } });
		this.add.text(500, game.config.height*.3, 'Lead Programmer', { font: "25pt Baskerville", fill: "#FFFFFF", stroke: "#FFFFFF", strokeThickness:1.5, wordWrap: { width: 570, useAdvancedWrap: true } });

		
		this.add.text(160, game.config.height*.44, 'Gabi Serna:', { font: "25pt Baskerville", fill: "#FFFFFF", stroke: "#FFFFFF", strokeThickness:1.5, wordWrap: { width: 570, useAdvancedWrap: true } });
		this.add.text(500, game.config.height*.44, 'Game Artist: Menu, End Screen, Level Backgrounds, Objects, Textboxes', { font: "25pt Baskerville", fill: "#FFFFFF", stroke: "#FFFFFF", strokeThickness:1.5, wordWrap: { width: 570, useAdvancedWrap: true } });

		
		this.add.text(160, game.config.height*.58, 'Grecia Salazar:', { font: "25pt Baskerville", fill: "#FFFFFF", stroke: "#FFFFFF", strokeThickness:1.5, wordWrap: { width: 570, useAdvancedWrap: true } });
		this.add.text(500, game.config.height*.58, 'Narrative, Music, Polish', { font: "25pt Baskerville", fill: "#FFFFFF", stroke: "#FFFFFF", strokeThickness:1.5, wordWrap: { width: 570, useAdvancedWrap: true } });


		this.add.text(160, game.config.height*.7, 'Music/Audio:', { font: "20pt Baskerville", fill: "#FFFFFF", stroke: "#FFFFFF", strokeThickness:1.5, wordWrap: { width: 570, useAdvancedWrap: true } });
		this.add.text(350, game.config.height*.7, 'www.bensound.com , soundbible.com , www.freesoundeffects.com , www.zapsplat.com ', { font: "20pt Baskerville", fill: "#FFFFFF", stroke: "#FFFFFF", strokeThickness:1, wordWrap: { width: 570, useAdvancedWrap: true } });
		
		
		//playagainbutton
		this.playButton = this.add.sprite(game.config.width/2, game.config.height, 'playagainbutton').setScale(.9).setOrigin(0);
		this.playButton.x -= this.playButton.width/2;
		this.playButton.y -= this.playButton.height/1.25;
		this.playButton.visible = true;
		this.playButton.setInteractive();
		this.playButton.on('pointerdown',()=> {
			//console.log('button clicked!');
			if(mute == false) { this.clickSFX.play(); }
			this.scene.start('menuScene');
		  });
		//add glow to muted button
		addGlow(this, this.playButton, 'playagainGlow');


		}, this);


  
		this.cameras.main.fadeOut(1000, 0,0,0);



	}

	update() {
		//this.playButton.visible = true;
	}
}
