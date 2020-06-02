class cutsceneperson extends Phaser.Scene {
	constructor() {
		super('cutsceneperson');
  }

  create() {
    console.log('We are in the cutscene!');    


    //text
    var style = { font: "14pt Courier", fill: "#00ff00", stroke: "#00ff00", wordWrap: { width: 570, useAdvancedWrap: true } };
    boxText = this.add.text(game.config.height/2, game.config.height/2, '', { font: "14pt Courier", fill: "#00ff00", stroke: "#00ff00", wordWrap: { width: 570, useAdvancedWrap: true } });
    boxText.setText('[CUT SCENE 3]');
    boxText.visible = true;
  

    // PERSON HAIKU
    // Their PictureframeOption feels ConchaOption   (1 syl, 2 syl)
    // For MenuOption you must DogOption   (1 syl, 3 syl)
    // Keep their SignOption   (3 syl)
    
    

    this.secCount = 10;
    this.textTimer = this.time.addEvent({
      delay: 1000, //ms
      repeat: this.secCount,
      callback: () => {
        boxText.setText('');
        boxText.setText('[CUT SCENE 3]\nEnds in ' + this.secCount);
        this.secCount--;
      },
        callbackScope: game
    });  
  }

  update() {
    if(this.secCount == -1) {
      this.scene.start('Credits');
    }
  }
}