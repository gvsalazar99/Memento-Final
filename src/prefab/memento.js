class memento extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture, frame) {
        super(scene, x, y, texture, frame);

        scene.add.existing(this); //add object to existing scene
        this.setInteractive();    //it is clickable!
        this.text = null;         //memento's description to be displayed!
        this.options = null;      //text options for player to choose from
        this.options = ['[OPTION]', '[OPTION 2]', '[OPTION 3]']; //temp file options
        this.continueCount = 0; //how many continues have been used when interacting with the memento
        this.chosenOption = null;
    }

    create() {    
    //    gameObject.setInteractive({
    //         cursor:'url(assets/butterflysmall.cur), pointer'
    //     });
 
    }
    makeInteractive() {
        
        this.enterKey = this.scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ENTER);

        this.on('pointerdown', (pointer, gameObject) => {
            console.log(this.texture.key + ' clicked!');
            this.scene.clickSFX.play();

            this.scene.dialogueBox.visible = true;
            continueButton.alpha = 0;
            this.scene.selectedMemento = this;
            if(this.chosenOption == null) {
                this.continueCount = 0;
                typeText(this.scene, this.text[0]+'\n\n'+this.text[1]);
            }
            else {
                typeText(this.scene, 'I\'ve already remembered this');
            }
            
        });
    }

    displayOptions() {
        continueButton.alpha = 0; //remove continue button
        boxText.setText(''); //erase current text

        //typeText(this.scene, '[OPTION 1]\n[OPTION 2]\n[OPTION 3]');
        this.option1 = this.scene.add.text(430, this.scene.dialogueBox.y + 15, this.options[0], { font: "14pt Courier", fill: "#000000", stroke: "#000000", wordWrap: { width: 570, useAdvancedWrap: true } }).setInteractive();
        this.option2 = this.scene.add.text(430, this.scene.dialogueBox.y + 45, this.options[1], { font: "14pt Courier", fill: "#000000", stroke: "#000000", wordWrap: { width: 570, useAdvancedWrap: true } }).setInteractive();
        this.option3 = this.scene.add.text(430, this.scene.dialogueBox.y + 75, this.options[2], { font: "14pt Courier", fill: "#000000", stroke: "#000000", wordWrap: { width: 570, useAdvancedWrap: true } }).setInteractive();
        this.makeOptionsClickable(this.option1);
        this.makeOptionsClickable(this.option2);
        this.makeOptionsClickable(this.option3);
    } 

    makeOptionsClickable(option) {
        //when option is clicked
        option.on('pointerdown', (pointer, gameObject) =>{
            console.log(option.text + ' clicked!');
            //erase options
            this.option1.visible = false;
            this.option2.visible = false;
            this.option3.visible = false;
            this.scene.dialogueBox.visible = false; //erase box

            mementoGroup.push(this);          //add memento to group
            this.chosenOption = option.text; //save the chosen option
            console.log('Mementos on the list:');
            mementoGroup.forEach(memento => console.log(memento.texture.key));
            console.log('Chosen options so far:');
            mementoGroup.forEach(memento => console.log(memento.chosenOption));
        });

        //highlight player option when mouse hovers
        option.on('pointerover', (pointer, gameObject) => {
            option.tintFill = true;
            option.setTintFill(0x00ff00, 0x00ff00, 0x00ff00, 0x00ff00);
            //option.tint = 0x00ff00;   
        });

        //remove highlight when player moves mouse away from text option
        option.on('pointerout', (pointer, gameObject) => {
            option.clearTint();
        });
    }

    update() {
        
    }




}