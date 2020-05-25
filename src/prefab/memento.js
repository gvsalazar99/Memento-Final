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
            console.log(this);
            this.isDisplayingText = true;
            console.log('before:');
            console.log(boxText);
            boxText.setText(this.text);
            console.log('after:');
            console.log(boxText);
        });
    }

    update() {
        
    }




}