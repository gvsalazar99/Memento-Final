class memento extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture, frame) {
        super(scene, x, y, texture, frame);

        scene.add.existing(this); //add object to existing scene
        this.setInteractive();    //it is clickable!
        this.text = null;         //memento's description to be displayed!
        this.options = null;      //text options for player to choose from
        this.selected = false;    //if memento has been clicked
        this.isDisplayingText = false;
    }

    create() {

    //    gameObject.setInteractive({
    //         cursor:'url(assets/butterflysmall.cur), pointer'
    //     });
 
    }
    makeInteractive() {
        
        this.on('pointerdown', (pointer, gameObject) => {
            this.isDisplayingText = true;
            // boxText.setText(this.text);
            typeText(this.scene, this.text[0]+'\n\n'+this.text[1]);

        });
    }

    update() {
        
    }




}