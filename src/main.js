//https://hannemann.itch.io/ui-button-pack-free
//https://www.bensound.com/royalty-free-music/acoustic-folk
//http://soundbible.com/1976-Fast-Heel-Walk.html
//https://www.freesoundeffects.com/searches/chatter/
//https://www.zapsplat.com/?s=mouse+click&post_type=music&sound-effect-category-id=


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
   scene: [ Menu , Credits, Lv1, cutscenemagnolia, Lv2, cutscenejellyfish, Lv3, cutsceneperson ] 

   
};


let game = new Phaser.Game(config);

var mute = false;


//collection of mementos in each scene, meant to be erased at the beginning of each scene
var mementoGroup = [];


//this is the text that is positioned within the dialogue box!
var boxText;


//this method will add a glow when the object is hovered over with the mouse pointer
//assumes that the regular and glow image have the same dimensions
function addGlow(scene, og, glowKey) {
    //create glowing image
    let glow = scene.add.sprite(og.x, og.y, glowKey).setScale(og.scale).setOrigin(0);
    glow.visible = false;
    //highlight play button with glow when mouse hovers
    og.on('pointerover', (pointer, gameObject) => {
        glow.visible = true;
    });
    //remove highlight when mouse moves sway
    og.on('pointerout', (pointer, gameObject) => {
        glow.visible = false;
    });
}


//this function adds the continue button to the scene it is called in
var continueButton;
function addContinue(scene) {
    continueButton = scene.add.sprite(game.config.width*.66, game.config.height*.88,'continuebutton').setOrigin(0).setScale(.35,.35);
    continueButton.alpha = 0; 	
    //this.continueButton.visible = false;
    //this.continueON = false;
    continueButton.setInteractive();
    //define what happens when continue is clicked
    continueButton.on('pointerdown', (pointer, gameObject) => {
        //console.log('conditional met');
        scene.turningpage.play();
        if(scene.selectedMemento.continueCount <=1) {
            typeText(scene, scene.selectedMemento.text[2] + '\n\n' + scene.selectedMemento.text[3]);
        }
        else {
            scene.selectedMemento.displayOptions();
        }
    });
}


//this function adds the x button to chat boxes in their respective scene
var xbutton;
var xClicked = false;
function addXButton(scene) {
    xbutton = scene.add.sprite(game.config.width*.74, game.config.height*.743, 'xbutton').setOrigin(0).setScale(.25,.25).setInteractive();
    xbutton.on('pointerdown', (pointer, gameObject) => {
        xClicked = true;
        eraseDialogueBox(scene);
    });
    //THIS LINE IS BEING ADDED TO REMOVE THE X BUTTON, IT CAUSES TOO MANY BUGS
    //xbutton.visible = false;
}


//this function erases the textBox, continue button, x button, and option text
function eraseDialogueBox(scene) {
    boxText.setText("");
    continueButton.visible = false;
    //xbutton.visible = false;
    scene.dialogueBox.visible = false;
    if(scene.selectedMemento.continueCount >= 2) { //if 2 continues have been used, options have been displayed
        scene.selectedMemento.eraseOptions();     //and we need to erase those too
    }
} 


//this function types text into the dialoguebox
function typeText(scene, str) {
    let memento = null;
    // if a memento has been clicked, remember which one it was when typeText() starts
    if(scene.selectedMemento != null) {
        memento = scene.selectedMemento; 
    }
    continueButton.alpha = 0; //make continue button disappear
    boxText.setText('');
    let currentChar = 0;   
    this.textTimer = scene.time.addEvent({
        delay: 30, //ms
        repeat: str.length -1,
        callback: () => {
            console.log('typing!');

            //check if xbutton is clicked
            if(xClicked == true) {
                xClicked = false;         //reset x button
                boxText.setText("");      //erase text
                this.textTimer.destroy(); //end typeText()
                console.log("x button has ended typing");
            }
            
            //Keep typing if a new memento hasn't been clicked
            if(memento != null){ //typing for a memento
                //check if a new memento has been selected
                if(memento.texture.key == scene.selectedMemento.texture.key) {
                    //if no new memento has been selected, type next char in string
                    boxText.setText(boxText.text + str[currentChar]);
                    currentChar++;
                }
                else {
                    //new memento has been clicked
                    this.textTimer.destroy();

                }
            }
            //if no memento has been selected in the scene AT ALL, then type text
            //typeText is for levels' welcome text
            else {
                boxText.setText(boxText.text + str[currentChar]);
                currentChar++;
            }
     
            //finished printing
            if(this.textTimer.getRepeatCount() == 0) {
                console.log('done typing!');
                if(scene.selectedMemento != null) {    //if printing text for a memento
                    //console.log(scene.selectedMemento.texture.key + '\'s continues used = ' + scene.selectedMemento.continueCount);
                   if(scene.selectedMemento.continueCount <= 1) { //options have not been displayed yet if displaying memento
                        console.log('MADE CONTINUE BUTTON VISIBLE');
                        continueButton.alpha = 1; //make continue button visible
                        scene.selectedMemento.continueCount ++;
                   }
                   else { 
                       //if 2 continues have been displayed, then options are being memento's options are on display
                       //and no continue is needed
                       continueButton.alpha = 0;
                   }
                }
                this.textTimer.destroy();
            }
        },
        callbackScope: game
    });
}