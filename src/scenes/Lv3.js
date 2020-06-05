class Lv3 extends Phaser.Scene {
	constructor() {
		super('Level3');
	}

	preload() {
		this.load.image('level3box', 'assets/TextBoxes/LevelThreeTextBox.PNG');
		this.load.audio('level3music', 'assets/audio/bensound-sweet.mp3');

		//mementos for level3 (temp)
		this.load.image('signtemp', 'assets/mementos/signtemp.png');
		this.load.image('dogtemp', 'assets/mementos/dogtemp.png');
		this.load.image('parenttemp', 'assets/mementos/parenttemp.png');
		this.load.image('registertemp', 'assets/mementos/registertemp.png');
		this.load.image('breadtemp', 'assets/mementos/breadtemp.png');
		this.load.image('continuebutton', 'assets/TextBoxes/ContinueButton.PNG');
		//load progress bar 
		this.load.image('progressbar', 'assets/UI/progressBar/BallAndBar.PNG');
		this.load.image('progressbarlong', 'assets/UI/progressBar/KarmaBar.PNG');
		//load x button
		this.load.image('xbutton', 'assets/TextBoxes/xbutton.png');
		//load progress bar 
		this.load.image('progressbar', 'assets/UI/progressBar/BallAndBar.PNG');
		this.load.image('progressbarlong', 'assets/UI/progressBar/KarmaBar.PNG');
		this.load.image('progressBall', 'assets/UI/progressBar/KarmaBall.PNG');
		this.load.image('progress1', 'assets/UI/progressBar/Progress1.PNG');
		this.load.image('progress2', 'assets/UI/progressBar/Progress4.PNG');
		this.load.image('progress3', 'assets/UI/progressBar/Progress7.PNG');
		this.load.image('progress4', 'assets/UI/progressBar/Progress10.PNG');
		this.load.image('progress5', 'assets/UI/progressBar/Progress13.PNG')

	   
	}


	create() {
		mementoGroup = []; //reset collection of mementos

		//create music
		this.music = this.sound.add('level3music');
		this.music = this.sound.add('level2music');
		this.clickSFX = this.sound.add('mouseclick');
		this.turningpage = this.sound.add('turningpage');


		 //play music if unmuted
		 if(mute == false) { 
			this.music.play({ 
				loop: true, 
				volume: 0.005
			}); 
		} 

		//camera fade in n out 
		this.cameras.main.once('camerafadeoutcomplete', function (camera) {
			this.add.image(1260, 590, 'black').setOrigin(0, 0);
			camera.fadeIn(1000, 0,0,0);	




		//dialogue box art
		this.dialogueBox = this.add.sprite(game.config.width/3.5, 0, 'level3box').setOrigin(0).setScale(.32,.32);
		this.dialogueBox.y = game.config.height/1.07 - this.dialogueBox.displayHeight;

		//create x button
		let xbutton = this.add.sprite('xbutton');
		xbutton= this.add.sprite(game.config.width*.74,game.config.height*.743, 'xbutton').setOrigin(0, 0).setScale(.25,.25);
		
		// //exit button switches scenes to Credit (end scene)  
		// this.tempcreditsbutton = this.add.sprite(game.config.width/4,game.config.height/4, 'exitbutton').setScale(0.25,0.25).setOrigin(0);
		// this.tempcreditsbutton.setInteractive();
		// //RESTART SCENE
		// this.tempcreditsbutton.on('pointerdown',()=> {
		// 	console.log('RESTARTING THE LEVEL'); 
		// 	this.scene.start('Level3'); 
		// 	this.music.stop();
		// });

		//text
		boxText = this.add.text(480, this.dialogueBox.y + 15, '', {font: "12pt Baskerville", fill: "#000000", stroke: "#000000", wordWrap: { width: 450, useAdvancedWrap: true } });
		boxText.setText('YOU\'VE MADE IT TO THE LAST REINCARNATION');
		boxText.visible = true;

		//create continue button
		addContinue(this);

		//clickable picture of family
		this.picture= new memento(this, game.config.width*.75, game.config.height*.25, 'catbed').setOrigin(0).setScale(.3);
		this.picture.text = ['My beautiful family. My sister and I kept this picture here as a constant reminder of who we did this for.  It took us years to look at this picture without feeling overcome by grief.  In time, we learned to make sure we always smiled back at our parents and grandmother.',
					'...',
					'.... We knew that they would have wanted us to continue living happy and healthy lives after their ____________.  Natalia and I did our best to fulfil their wishes.',
					'...'];
		this.picture.options = ['loss', 'end', 'death'];
		this.picture.makeInteractive();

		//clickable concha
		this.concha = new memento(this, game.config.width*.7, game.config.height*.1, 'signtemp').setOrigin(0).setScale(.3);
		this.concha.text = ['I remember fondly how our Abuelita refused to eat a concha unless she had coffee to go with it. It’s actually what inspired us to expand the panadería to sell coffee too. ',
					'...',
					'.... Abuelita always looked after us, even after her passing.  In the ____________ months following her loss, my sister and I always took comfort in sitting down together to have conchas with coffee.  I remember how it felt as if she were sitting right there with us. ',
					'...'];
		this.concha.options = ['heavy', 'empty', 'silent'];
		this.concha.makeInteractive();

		//clickable updated menu
		this.menu = new memento(this, game.config.width*.5, game.config.height*.25, 'parenttemp').setOrigin(0).setScale(.3);
		this.menu.text = ['I remember the day we redesigned the menu.  It was one of my darkest days, the first anniversary of our parents’ passing, the panadería was suffering due to our negligence, and we were falling under, fast. ',
					'...',
					'.... Natalia forced me out of bed, and into our new reality.  We cried, we yelled, we screamed, we laughed, and we held each other tight.  By the end of the night, we were in a feverish passion, working out how we could save the shop, for ____________. We began making plans for renovations, menu expansion, and a whole new outlook.',
					'...'];
		this.menu.options = ['them', 'her', 'us'];
		this.menu.makeInteractive();

		//clickable family dog
		this.dog= new memento(this, game.config.width*.1, game.config.height*.2, 'registertemp').setOrigin(0).setScale(.3);
		this.dog.text = ['This is our sweet, ol’ pup, Oso.  I could never forget the Christmas our Dad brought him home, and how small he used to be! It turns out my Dad chose a name that fit our soon-to-be huge pup all too well.',
					'...',
					'.... We let him laze about the store in his old age, keeping us company. As silly as it may sound, my sister and I knew that Oso missed our family too, and it was also for him that we needed to ____________. We always made sure to give him extra lovin, extra belly rubs, and extra extra snacks.',
					'...'];
		this.dog.options = ['carry on', 'continue', 'stay afloat'];
		this.dog.makeInteractive();

		//clickable sign w family name
		this.sign = new memento(this, game.config.width*.15, game.config.height*.15, 'dogtemp').setOrigin(0).setScale(.3);
		this.sign.text = ['When my Abuelos opened up the panadería in the late 70’s, they did so with the intention of giving generations of Castillos a piece of the family legacy. I always took pride in our shop, and its deeply rooted connection to our loved ones.',
					'...',
					'.... Though we had lost ourselves in our grief, when the business was threatened, Natalia and I knew we had to do whatever was necessary to keep our family’s ____________.',
					'...'];
		this.sign.options = ['memory', 'legacy', 'wish alive'];
		this.sign.makeInteractive();


		 //progressbar
		//let progressbar = this.add.sprite('progressbar');
		//progressbar= this.add.sprite(game.config.width/3.58,0, 'progressbar').setOrigin(0, 0).setScale(.35,.32); //this is when its on top
		let progressbar= this.add.sprite(game.config.width*.3, game.config.height*.93, 'progressbarlong').setOrigin(0, 0).setScale(.35,.2); //this is when its at bottom 
		//color bar
		this.progress1= this.add.sprite(game.config.width*.3, game.config.height*.92, 'progress1').setOrigin(0, 0).setScale(.35,.2);
		this.progress1.visible = false;
		this.progress2= this.add.sprite(game.config.width*.3, game.config.height*.92, 'progress2').setOrigin(0, 0).setScale(.35,.2);
		this.progress2.visible = false;
		this.progress3= this.add.sprite(game.config.width*.3, game.config.height*.92, 'progress3').setOrigin(0, 0).setScale(.35,.2);
		this.progress3.visible = false;
		this.progress4= this.add.sprite(game.config.width*.3, game.config.height*.92, 'progress4').setOrigin(0, 0).setScale(.35,.2);
		this.progress4.visible = false;
		this.progress5= this.add.sprite(game.config.width*.3, game.config.height*.92, 'progress5').setOrigin(0, 0).setScale(.35,.2);
		this.progress5.visible = false;
		//little ball for the progress bar!
		this.progressBall = this.add.sprite(366, 538, 'progressBall').setOrigin(0).setScale(.2, .2);
		this.progressBall.visible = true;
		//this.progressBall.texture.key = 'progressBall';
		//this.progressBall.setInteractive();



	// 	//create continue text prompt
	// 	this.continueButton = this.add.text(720, 555, '[CLICK TO CONTINUE]', { font: "15pt Courier", fill: "#ff0000", stroke: "#ff0000", strokeThickness: 1 });
	// 	this.continueButton.alpha = 0; 	
	// 	this.continueON = false;
	// 	this.continueButton.setInteractive();
	// 	this.continueButton.on('pointerdown', (pointer, gameObject) => {
	// 		console.log('conditional met');
	// 		if(this.selectedMemento.continueCount <=1) {
	// 			typeText(this, this.selectedMemento.text[2] + '\n\n' + this.selectedMemento.text[3]);
	// 		}
	// 		else {
	// 			this.selectedMemento.displayOptions();
	// 		}
	// 	});		

	}, this);
  
	this.cameras.main.fadeOut(1000, 0,0,0);

	}

	update() {
		//switch to cut scene when all options have been chosen from mementos
		if(mementoGroup.length >= 5) {
			console.log('Switching scenes!'); 
			this.scene.start('Credits'); 
			this.music.stop();
		}	
		//boxText._text == 'Oh, c\'mon, no need to throw a fit!' ? this.memento.angle = 135 : this.memento.angle = 0;
	}
}
