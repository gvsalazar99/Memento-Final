class memento extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture, frame) {
        super(scene, x, y, texture, frame);

        scene.add.existing(this); //add object to existing scene
        this.setInteractive();    //it is clickable!
        this.text = null;         //memento's description to be displayed!
        this.options = null;      //text options for player to choose from
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
            this.scene.continueButton.alpha = 0;
            this.scene.selectedMemento = this;
            typeText(this.scene, this.text[0]+'\n\n'+this.text[1]);
        });
    }

    displayOptions() {
        typeText(this.scene, '[OPTION 1]\n[OPTION 2]\n[OPTION 3]');
    }

    update() {
        
    }




}