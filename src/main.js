///////////////////////////////////////////////////////////////
//                                                           //
//                        Memento                            //
//                  Completed: 06/08/2020                    //
//                                                           //
//                                                           //
//  Created by:      Grecia Salazar B)                       //
//                   Gabrielle Serna C:                      //
//                   Derek Gomez ;P                          //
//                                                           //
//  Created for:     CMPM 120 Game Design Experience         //
//                   UCSC Spring 2020                        //     
//                                                           //                      
///////////////////////////////////////////////////////////////
//                                                           //
//            WE STOLE CODE FROM THESE PLACES                // 
//                                                           //       
//            https://github.com/nathanaltice                //
//            https://phaser.io/examples/v3                  //
//            https://github.com/photonstorm/phaser          //
//                                                           //
//                                                           //
//           Audio:                                          //
//           https://hannemann.itch.io/                      // 
//           https://www.bensound.com/                       //
//           http://soundbible.com/                          //
//           https://www.freesoundeffects.com/               //
//           https://www.zapsplat.com/                       //
//                                                           //       
///////////////////////////////////////////////////////////////



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
//the player has chosen words for these mementos
var mementoGroup = [];

//populate mementoGroup with ALL mementos in scene
function fillMementoGroup(mem1, mem2, mem3, mem4, mem5) {
    mementoGroup.push(mem1);
    mementoGroup.push(mem2);
    mementoGroup.push(mem3);
    mementoGroup.push(mem4);
    mementoGroup.push(mem5);
}
    

//this function updates the progress bar AND vignettes by checking how many memento's have had options chosen
function checkProgressBar(scene) {
	let optionsCount = mementoGroup.length;


	if (optionsCount == 1) {
		scene.vignette1.visible = true;

		scene.progress1.visible = true;
		scene.progressBall.x = 401;
				}
	else if (optionsCount == 2) {
        scene.vignette2.visible = true;
        
		scene.progress1.visible = false;
		scene.progress2.visible = true;
        scene.progressBall.x = 503;
    
    }
    
    else if (optionsCount == 3) {
		scene.vignette3.visible = true;

		scene.progress2.visible = false;
		scene.progress3.visible = true;
		scene.progressBall.x = 606;
	}
	else if (optionsCount == 4) {
		scene.vignette4.visible = true;

		scene.progress3.visible = false;
		scene.progress4.visible = true;
		scene.progressBall.x = 735;
    }
    
    else if (optionsCount == 5) {
        scene.progress4.visible = false;
        scene.progress5.visible = true;
        scene.progressBall.x = 900;
    }

 }


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
        if(!mute) { scene.turningpage.play();}
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

//this function assigns a random word choice to all the scene's mementos
//called after fillMementoGroup()
function autoPick() {
    mementoGroup.forEach( memento => {
        randIndex = Math.floor(Math.random() * 3);          //pick a random index between (0-2)
        memento.chosenOption = memento.options[randIndex]; //use random index to choose an option
        //DEBUGGING
        //console.log(memento.texture.key + ' - ' + memento.chosenOption); //print what option each memento was assigned
    });
}

function autoPick2(scene) {
    randIndex = Math.floor(Math.random() * 3);
    scene.selectedMemento.chosenOption = scene.selectedMemento.options[randIndex];
    mementoGroup.push(scene.selectedMemento);
    //execute code as if the x button was pressed
    xClicked = true;
    eraseDialogueBox(scene);
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

var levelOver = false;
function endScene(scene, nextScene) {
    levelOver = true;
    //take a random image, make it black, and comletely transparent
    let blackout = scene.add.sprite(0,0, 'mementomenu').setOrigin(0,0);
    blackout.setTint('ffffff');
    blackout.alpha = 0;

    //fade in the blackout screen
    this.blackoutTimer = scene.time.addEvent({
        delay: 2000, 
        callback: () => {
            scene.tweens.add({
                targets: blackout,
                alpha: 1,
                duration: 3000
            });
        }
    });

    //switch scenes in 5 sec
    this.switchTimer = scene.time.addEvent({
        delay: 5000, //ms
        callback: () => {
            scene.music.stop();
            scene.scene.start(nextScene);
        },
          callbackScope: game
    });  


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
            //DEBUGGING
            //console.logconsole.log('typing!');

            //check if xbutton is clicked
            if(xClicked == true) {
                xClicked = false;         //reset x button
                boxText.setText("");      //erase text
                this.textTimer.destroy(); //end typeText()
                //DEBUGGING
                //console.log("x button has ended typing");
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
                //DEBUGGING
                //console.log('done typing!');
                if(scene.selectedMemento != null) {    //if printing text for a memento
                    //console.log(scene.selectedMemento.texture.key + '\'s continues used = ' + scene.selectedMemento.continueCount);
                   if(scene.selectedMemento.continueCount <= 1) { //options have not been displayed yet if displaying memento
                        //DEBUGGING
                        //console.log('MADE CONTINUE BUTTON VISIBLE');
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