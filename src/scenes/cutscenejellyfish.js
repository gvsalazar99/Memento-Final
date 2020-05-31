class cutscenejellyfish extends Phaser.Scene {
	constructor() {
		super('cutsceneblue');      
  }

  create() {
    console.log('We are in the cutscene!');    

    //text
    boxText = this.add.text(game.config.height/2, game.config.height/2, '', { font: "14pt Courier", fill: "#00ff00", stroke: "#00ff00", wordWrap: { width: 570, useAdvancedWrap: true } });
    boxText.setText('[CUT SCENE 1]');
    boxText.visible = true;
  
    this.secCount = 5;
    this.textTimer = this.time.addEvent({
      delay: 1000, //ms
      repeat: this.secCount,
      callback: () => {
        boxText.setText('');
        boxText.setText('[CUT SCENE 2]\nEnds in ' + this.secCount);
        this.secCount--;
      },
        callbackScope: game
    });  
  }

  update() {
    if(this.secCount == -1) {
      this.scene.start('Level3');
    }
  }
}



