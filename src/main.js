//https://hannemann.itch.io/ui-button-pack-free
//https://www.bensound.com/royalty-free-music/acoustic-folk

let config = {
    type: Phaser.WebGL,
    type: Phaser.AUTO,
    width:1260,
    height:590,
    physics:{
        default: 'arcade',
        arcade: {
           
            debug: true,
           
              
        }
    },
   scene: [ Menu , Play, Credits, Lv1, cutscenemagnolia, Lv2, cutscenejellyfish, Lv3, cutsceneperson ] 

   
};


let game = new Phaser.Game(config);

var mute = false;

//this is the text that is positioned within the dialogue box!
var boxText;

//this function types text into the dialoguebox
function typeText(scene, str) {
    scene.continueButton.alpha = 0; //make continue button disappear
    boxText.setText('');

    let currentChar = 0;
    //console.log(this);
    //console.log(Phaser.Scene.time);
    this.textTimer = scene.time.addEvent({
        delay: 30, //ms
        repeat: str.length -1,
        callback: () => {
            boxText.setText(boxText.text + str[currentChar]);
            currentChar++;
            if(this.textTimer.getRepeatCount() == 0) { //finished printing
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