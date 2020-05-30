//https://hannemann.itch.io/ui-button-pack-free
//https://www.bensound.com/royalty-free-music/acoustic-folk

let config = {
    type: Phaser.WebGL,
    width:1260,
    height:590,
    physics:{
        default: 'arcade',
        arcade: {
            debug: true,
        }
    },
   scene: [ Menu , Play, Credits, Lv1, Lv2, Lv3 ] 
};

let game = new Phaser.Game(config);

var boxText;

function typeText(scene, str) {
    scene.continueButton.alpha = 0; //make continue button disappear
    boxText.setText('');

    let currentChar = 0;
    console.log(this);
    //console.log(Phaser.Scene.time);
    this.textTimer = scene.time.addEvent({
        delay: 30, //ms
        repeat: str.length -1,
        callback: () => {
            boxText.setText(boxText.text + str[currentChar]);
            currentChar++;

            //printing finished!
            if(this.textTimer.getRepeatCount() == 0) {
                if(scene.selectedMemento != null) {    //if printing text for a memento
                   if(scene.selectedMemento.continueCount <= 1) { //options have not been displayed yet if displaying memento
                       scene.continueButton.alpha = 1; //make continue button visible
                       scene.selectedMemento.continueCount ++;
                   }
                   else { 
                       //if 2 continues have been displayed, then options are being memento's options are on display
                       //and no continue is needed
                       scene.continueButton.alpha = 0;
                   }
                }
                this.textTimer.destroy();
            }
        },
        callbackScope: game
    });
}

var mute = true;