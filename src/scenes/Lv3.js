class Lv3 extends Phaser.Scene {
	constructor() {
		super('Level3');
	}

	preload() {
		this.load.image('level3box', 'assets/TextBoxes/LevelThreeTextBox.PNG');
		this.load.audio('level3music', 'assets/audio/level3relaxing.mp3');

		//mementos for level3 (glow)
		this.load.image('dogGlow', 'assets/mementos/glow/dogGlow.PNG');
		this.load.image('familyframeGlow', 'assets/mementos/glow/familyframeGlow.PNG');
		this.load.image('menuGlow', 'assets/mementos/glow/menuGlow.PNG');
		this.load.image('panGlow', 'assets/mementos/glow/panGlow.PNG');
		this.load.image('signGlow', 'assets/mementos/glow/signGlow.PNG');
		//no glow
		this.load.image('sign', 'assets/mementos/sign.PNG');
		this.load.image('dog', 'assets/mementos/dog.PNG');
		this.load.image('familyframe', 'assets/mementos/familyframe.PNG');
		this.load.image('menu', 'assets/mementos/menu.PNG');
		this.load.image('pan', 'assets/mementos/pan.PNG');
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
		//load background
		this.load.image('level3background', 'assets/FullScreen/LevelThreeBackground.png');
		//loud sounds
		this.load.audio('menusound', './assets/audio/moneysound.mp3');
		this.load.audio('familysound', './assets/audio/familysound.mp3');
		this.load.audio('signsound', './assets/audio/signsound.mp3');
		this.load.audio('breadsound', './assets/audio/breadsound.mp3');
		this.load.audio('dogsound', './assets/audio/dogsound.mp3');






	   
	}


	create() {
		mementoGroup = []; //reset collection of mementos
		this.previousMemento = null; //memento that was selected before the current
		this.selectedMemento = null; //current memento being interacted with

		//create music
		this.music = this.sound.add('level3music');
		this.clickSFX = this.sound.add('mouseclick');
		this.turningpage = this.sound.add('turningpage');
		this.menusound = this.sound.add('menusound');
		this.familysound = this.sound.add('familysound');
		this.signsound = this.sound.add('signsound');
		this.breadsound = this.sound.add('breadsound');
		this.dogsound = this.sound.add('dogsound');





		
		 //play music if unmuted
		 if(mute == false) { 
			this.music.play({ 
				loop: true, 
				volume: 0.1
			}); 
		} 

		//camera fade in n out 
		this.cameras.main.once('camerafadeoutcomplete', function (camera) {
			this.add.image(1260, 590, 'black').setOrigin(0, 0);
			camera.fadeIn(1000, 0,0,0);	


			let level3background = this.add.sprite(0,0, 'level3background').setOrigin(0, 0);


			//clickable family dog
			this.dog= new memento(this, game.config.width*.47, game.config.height*.45, 'dog').setOrigin(0);
			addGlow(this, this.dog, 'dogGlow');
			this.dog.makeInteractive();
			this.dog.text = ['This is our sweet, ol’ pup, Oso.  I could never forget the Christmas our Dad brought him home, and how small he used to be! It turns out my Dad chose a name that fit our soon-to-be huge pup all too well.',
					'...',
					'.... We let him laze about the store in his old age, keeping us company. As silly as it may sound, my sister and I knew that Oso missed our family too, and it was also for him that we needed to ____________. We always made sure to give him extra lovin, extra belly rubs, and extra extra snacks.',
					'...'];
			this.dog.options = ['carry on', 'continue', 'stay afloat'];
			this.dog.on('pointerdown',()=> {
			this.dogsound.play();
			});


		//dialogue box art
		this.dialogueBox = this.add.sprite(game.config.width/3.5, 0, 'level3box').setOrigin(0).setScale(.32,.32);
		this.dialogueBox.y = game.config.height/1.07 - this.dialogueBox.displayHeight;


		//text
		boxText = this.add.text(480, this.dialogueBox.y + 15, '', {font: "12pt Baskerville", fill: "#000000", stroke: "#000000", wordWrap: { width: 450, useAdvancedWrap: true } });
		boxText.setText('Another distant but familiar place. This is yet another one of the lives that I have lived. I should explore the scene and remember what I can about the life I lived.');
		boxText.visible = true;

		//create continue button
		addContinue(this);

		//create x button
		addXButton(this);	

		//clickable picture of family
		this.picture= new memento(this, game.config.width*.23, game.config.height*.4, 'familyframe').setOrigin(0);
		addGlow(this, this.picture, 'familyframeGlow');
		this.picture.makeInteractive();
		this.picture.text = ['My beautiful family. My sister and I kept this picture here as a constant reminder of who we did this for.  It took us years to look at this picture without feeling overcome by grief.  In time, we learned to make sure we always smiled back at our parents and grandmother.',
					'...',
					'.... We knew that they would have wanted us to continue living happy and healthy lives after their ____________.  Natalia and I did our best to fulfil their wishes.',
					'...'];
		this.picture.options = ['loss', 'end', 'death'];
		this.picture.on('pointerdown',()=> {
		this.familysound.play();
		});

		//clickable concha
		this.concha = new memento(this, game.config.width*.73, game.config.height*.201, 'pan').setOrigin(0);
		addGlow(this, this.concha, 'panGlow');
		this.concha.makeInteractive();
		this.concha.text = ['I remember fondly how our Abuelita refused to eat a concha unless she had coffee to go with it. It’s actually what inspired us to expand the panadería to sell coffee too. ',
					'...',
					'.... Abuelita always looked after us, even after her passing.  In the ____________ months following her loss, my sister and I always took comfort in sitting down together to have conchas with coffee.  I remember how it felt as if she were sitting right there with us. ',
					'...'];
		this.concha.options = ['heavy', 'empty', 'silent'];
		this.concha.on('pointerdown',()=> {
		this.breadsound.play();
		});


		//clickable updated menu
		this.menu = new memento(this, game.config.width*.012, game.config.height*.001, 'menu').setOrigin(0);
		addGlow(this, this.menu, 'menuGlow');
		this.menu.makeInteractive();
		this.menu.text = ['I remember the day we redesigned the menu.  It was one of my darkest days, the first anniversary of our parents’ passing, the panadería was suffering due to our negligence, and we were falling under, fast. ',
					'...',
					'.... Natalia forced me out of bed, and into our new reality.  We cried, we yelled, we screamed, we laughed, and we held each other tight.  By the end of the night, we were in a feverish passion, working out how we could save the shop, for ____________. We began making plans for renovations, menu expansion, and a whole new outlook.',
					'...'];
		this.menu.options = ['them', 'her', 'us'];
		this.menu.on('pointerdown',()=> {
		this.menusound.play();
		});


		

		//clickable sign w family name
		this.sign = new memento(this, game.config.width*.62, game.config.height*.001, 'sign').setOrigin(0);
		addGlow(this, this.sign, 'signGlow');
		this.sign.makeInteractive();
		this.sign.text = ['When my Abuelos opened up the panadería in the late 70’s, they did so with the intention of giving generations of Castillos a piece of the family legacy. I always took pride in our shop, and its deeply rooted connection to our loved ones.',
					'...',
					'.... Though we had lost ourselves in our grief, when the business was threatened, Natalia and I knew we had to do whatever was necessary to keep our family’s ____________.',
					'...'];
		this.sign.options = ['memory', 'legacy', 'wish alive'];
		this.sign.on('pointerdown',()=> {
		this.signsound.play();
		});



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
			this.scene.start('cutsceneperson'); 
			this.music.stop();
		}	
		this.checkProgressBar();

		var enterKey= this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ENTER);
		if(Phaser.Input.Keyboard.JustDown(enterKey)) {
			this.music.stop();
			this.scene.start('EndScreen');
		}
	}

	checkProgressBar() {
		let optionsCount = mementoGroup.length;

		if (optionsCount == 1) {
			this.progress1.visible = true;
			this.progressBall.x = 401;
		}
		else if (optionsCount == 2) {
			this.progress1.visible = false;
			this.progress2.visible = true;
			this.progressBall.x = 503;
		}
		else if (optionsCount == 3) {
			this.progress2.visible = false;
			this.progress3.visible = true;
			this.progressBall.x = 606;
		}
		else if (optionsCount == 4) {
			this.progress3.visible = false;
			this.progress4.visible = true;
			this.progressBall.x = 735;
		}
	}
}
