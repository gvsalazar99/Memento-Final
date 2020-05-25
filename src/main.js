//https://hannemann.itch.io/ui-button-pack-free
//https://www.bensound.com/royalty-free-music/acoustic-folk

let config = {
    type: Phaser.CANVAS,
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
    boxText.setText('');

    let currentChar = 0;
    console.log(this);
    //console.log(Phaser.Scene.time);
    this.textTimer = scene.time.addEvent({
        delay: 100, //ms
        repeat: str.length -1,
        callback: () => {
            boxText.setText(boxText.text + str[currentChar]);
            currentChar++;
            if(this.textTimer.getRepeatCount() == 0) {
                //insert next text prompt
                this.textTimer.destroy();
            }
        },
        callbackScope: game
    });
}

var mute = true;

