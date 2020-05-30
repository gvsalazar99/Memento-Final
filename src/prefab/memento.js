class memento extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture, frame) {
        super(scene, x, y, texture, frame);

        scene.add.existing(this); //add object to existing scene
        this.setInteractive();    //it is clickable!
        this.text = null;         //memento's description to be displayed!
        this.options = null;      //text options for player to choose from
        this.options = ['[OPTION 1]', '[OPTION 2]', '[OPTION 3]']; //temp file options
        this.continueCount = 0; //how many continues have been used when interacting with the memento
        this.chosenOption;
    }

    create() {    
    //    gameObject.setInteractive({
    //         cursor:'url(assets/butterflysmall.cur), pointer'
    //     });
 
    }
    makeInteractive() {
        
        this.enterKey = this.scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ENTER);

        this.on('pointerdown', (pointer, gameObject) => {
            this.scene.dialogueBox.visible = true;
            this.scene.continueButton.alpha = 0;
            this.scene.selectedMemento = this;
            typeText(this.scene, this.text[0]+'\n\n'+this.text[1]);
        });
    }

    displayOptions() {
        this.scene.continueButton.alpha = 0; //remove continue button
        boxText.setText(''); //erase current text

        //typeText(this.scene, '[OPTION 1]\n[OPTION 2]\n[OPTION 3]');
        this.option1 = this.scene.add.text(410, this.scene.dialogueBox.y + 15, this.options[0], { font: "15pt Courier", strokeThickness: 1, wordWrap: { width: 570, useAdvancedWrap: true } }).setInteractive();
        this.option2 = this.scene.add.text(410, this.scene.dialogueBox.y + 45, this.options[1], { font: "15pt Courier", strokeThickness: 1, wordWrap: { width: 570, useAdvancedWrap: true } }).setInteractive();
        this.option3 = this.scene.add.text(410, this.scene.dialogueBox.y + 75, this.options[2], { font: "15pt Courier", strokeThickness: 1, wordWrap: { width: 570, useAdvancedWrap: true } }).setInteractive();
        this.makeOptionsClickable(this.option1);
        this.makeOptionsClickable(this.option2);
        this.makeOptionsClickable(this.option3);
    }

    makeOptionsClickable(option) {
        option.on('pointerdown', (pointer, gameObject) =>{
            console.log('option clicked!');
            this.option1.setText('');
            this.option2.setText('');
            this.option3.setText('');
            this.scene.dialogueBox.visible = false;
        });

        option.on('pointerover', (pointer, gameObject) => {
            //option.tintFill = true;
            //option.setTintFill(0x00ff00, 0x00ff00, 0x00ff00, 0x00ff00);
            option.tint = 0x00ff00;    
        });
    
        option.on('pointerout', (pointer, gameObject) => {
            option.clearTint();
        });
    }

    update() {
        
    }




}