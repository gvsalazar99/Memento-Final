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



