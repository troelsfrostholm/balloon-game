//level properties
var levelBounds;

//Sprites
var background;
var balloon;
var betterBalloon;
var boy;
var pig;
var carpetman;
var penguin;
var superhero;
var bear;

var spawnZones;

var scoreElement;
var pauseButton;
var soundButton;

//game parameters
var windpower = -100;
var resistance = 0.9;
var downpos = null;
var buoyancy = -0.3;
var sideScrollSpeed = 0.05;
var squaredMaxItemDistance = 1000*1000;

var score = 0;

var soundOn = true;

var girlPosition = new Point(-1000, -927);

var poorDialogue = ["02", "04", "06"].map(createDialogueSprite);
var richDialogue = ["25", "29"].map(createDialogueSprite);
var activeDialogue = null;

function begin()
{
    canvas = document.getElementById("canvas");
    context = canvas.getContext("2d");
    context.font = "bold 20px sans-serif";
    context.fillText("loading ...", canvas.width/2, canvas.height/2);
    loadBackground();
    if(background.image.width) {
	console.log("Background already loaded");
	initializeLevel();
    }
    else {
	console.log("Background not loaded yet");
	background.image.onload = initializeLevel;
    }
}

function loadBackground()
{
    console.log("Loading background");
    background = new Sprite();
    background.setImg("assets/background.jpg");
    background.scale = 1;
    background.place(0, 0);
}

function initializeLevel()
{  
    levelBounds = new BoundingBox(-1500, -2100, 3000, 4200);
    hudElements = createHudElements();
    createSprites();
    setBehaviours();
    spawnZones = createSpawnZones();
    createTriggers();
    scrollPoint = balloon.pos[0].add(new Point(-300, 0));
    runGame();
}

function createHudElements()
{
    hud = new Sprite();
    hud.image.src = "assets/hud-02.png";
    canvas = document.getElementById("canvas");
    hud.place(canvas.width/2, canvas.height/2);
    hudElements.push(hud);
    scoreElement = new TextElement("0", new Point(720, 558));
    soundButton = new Sprite();
    soundButton.image.src = "assets/sound-on-button.png";
    soundButton.place(100, 33);
    soundButton.onclick = toggleSound;
    pauseButton = new Sprite();
    pauseButton.image.src = "assets/pause-button.png";
    pauseButton.place(50, 33);
    pauseButton.onclick = togglePause;
    return [hud, scoreElement, soundButton, pauseButton];
}

function createSprites() 
{
    balloon = new Sprite();
    balloon.setImg("assets/balloon.png");
    balloon.scale = 0.5;
    balloon.place(0, 1900);
    balloon.dangerHeight = -3000/2;
    balloon.deathHeight = -4000/2;
    balloon.normalImage = createImage("assets/balloon.png");
    balloon.dangerImage = createImage("assets/balloon-danger2.png");
    balloon.kablouieImage = createImage("assets/balloon-kablouie.png");
    balloon.blowUpImage = createImage("assets/balloon-blown.png");

    betterBalloon = new Sprite();
    betterBalloon.setImg("assets/better-balloon.png");
    betterBalloon.scale=0.5;

    boy = new Sprite();
    boy.setImg("assets/boy.png");
    boy.scale=0.5;

    pig = makeFlatFlyer(new Point(500, 100), "pig.gif");
    carpetman = makeFlatFlyer(new Point(500, 100), "carpetman.png");
    penguin = makeFlatFlyer(new Point(500, 100), "penguin.png");;
    superhero = makeFlatFlyer(new Point(500, 100), "superhero.png");;
    bear = makeFlatFlyer(new Point(500, 100), "bear.png");

    sprites.push(background);
    createStaticObjects();
    sprites.push(balloon);
    sprites.push(boy);
};

function createStaticObjects()
{
    addStaticObject("assets/arrow_4.png", new Point(-800, -230), 0.2);
    addStaticObject("assets/arrow_1.png", new Point(-160, -530), -0.3);
    addStaticObject("assets/arrow_3.png", new Point(710, -1454), -1);
    addStaticObject("assets/arrow_2.png", new Point(-285, -1512), -1.4);
}

function addStaticObject(image, position, rotation)
{
    if(!rotation) rotation = 0;
    object = new Sprite();
    object.image.src = image;
    object.pos[0] = position;
    object.angle[0] = rotation;
    sprites.push(object);
};

function addStaticItem(image, position, rotation)
{
    item = createStaticObject(image, position, rotation);
    item.behave(collisionTest);
    sprites.push(item);
};

function createTriggers()
{
    bbox = new BoundingBox(-1300, -1050, 400, 300);
    trigger = new Trigger(balloon, bbox, girlSpeak, hoverBalloon, girlShutup);
    triggers.push(trigger);
}

function girlSpeak()
{
    //pick a scenario: Does player have enough points to win?
    win = score >= 30;
    //pick a line of dialogue
    if(win) dialogueLines = richDialogue;
    else dialogueLines = poorDialogue;
    dialogue = pickAtRandom(dialogueLines);
    //say it. Play the win sequence if the player has enough
    //points to buy a better balloon
    if(win) {	
	setDialogue(pickAtRandom(richDialogue));
	balloon.behave(ancorAt(girlPosition));
	setTimeout(playWinSequence, 5000);
    }
    else {
	setDialogue(poorDialogue[0]);
	setTimeout(function () { 
		girlShutup();
		setDialogue(poorDialogue[1]); }, 2000);
    }
    setTimeout(girlShutup, 5000);
}

function playWinSequence()
{
    betterBalloon.pos = balloon.pos;
    removeSprite(balloon);
    sprites.push(betterBalloon);
    followNewBalloon = function(obj) {
	obj.pos[0] = betterBalloon.pos[0].add(new Point(0, 100));
    }
    boy.behaviours = [createFollowBehaviour(betterBalloon, new Point(0, 60))];
}

function girlShutup()
{
    unsetDialogue();
}

function hoverBalloon()
{
    balloon.pos[2] = balloon.pos[2].add(new Point(0, 0.3));
}

function setDialogue(dialogue)
{
    sprites.push(dialogue);
    activeDialogue = dialogue;
}

function unsetDialogue()
{
    if(activeDialogue)
	{
	    removeSprite(activeDialogue);
	    activeDialogue = null;
	}
}

function createDialogueSprite(dialogueNumber)
{
    position = girlPosition;
    img = new Image();
    img.src = "assets/dialogue/"+dialogueNumber+".png";
    dialogueSprite = new Sprite();
    dialogueSprite.image = img;
    dialogueSprite.pos[0] = position;
    return dialogueSprite;
}

function makeFlatFlyer(image, speed)
{
    flyer = new Sprite();
    flyer.setImg("assets/"+image);
    flyer.scale = 0.5;
    flyer.place(0, 0);
    flyer.move(speed.x, speed.y);
    flyer.weight = 20;
    flyer.behave(bouncy);
    flyer.behave(collisionTest);
    flyer.behave(dieWhenFarAway);

    return flyer;
};

function makeStillItem(image_file)
{
    item = new Sprite();
    item.setImg("assets/"+image_file);
    item.scale = 0.5;
    item.place(0, 0);
    item.move(0, 0);
    item.weight = 20;
    item.behave(collisionTest);
    item.behave(dieWhenFarAway);
    return item;
    
};

function makeCannonBall(img, vel, acc, spin)
{
    if(spin == undefined) spin = 0;
    item = makeStillItem(img);
    item.pos[1] = vel;
    item.pos[2] = acc;
    item.spin(spin);
    return item;
}

function createSpawnZones()
{
    zones = new Array();
    hillItems = ["hills/spy_1.png", "hills/spy_2.png", "hills/spy_3.png", "hills/lumberjack_1.png", "hills/lumberjack_2.png", "hills/lumberjack_3.png", "hills/riding_hood.png", "hills/deer.png"].map(makeStillItem);
    makeLeftFlyer = function(img) { 
	return makeFlatFlyer(img, new Point(-2,0));
    };
    makeRightFlyer = function(img) { 
	return makeFlatFlyer(img, new Point(2,0));
    };
    leftFlyers = ["trees/duck.png", "trees/flying_squirrel.png", "trees/stork_with_baby.png", "trees/tucan.png"].map(makeLeftFlyer);
    rightFlyers = ["trees/bat.png", "trees/penguin.png", "trees/swan.png"].map(makeRightFlyer);

    monkey = makeCannonBall("trees/monkey.png", new Point(-3, -2), new Point(0, 0.2), 0.1);
    forestItems = leftFlyers.concat(rightFlyers).concat([monkey]);
    
    bear = makeFlatFlyer("circus/flying_circus_bear.png", new Point(-1,0));
    carpet_man = makeFlatFlyer("circus/magic_carpet_man.png", new Point(-1,0));
    chicken = makeFlatFlyer("circus/barbecue_chicken.png", new Point(1,0));
    cannon_king = makeCannonBall("circus/canon_king.png", new Point(10, -4), new Point(0, 0.5), 0.05);
    circusItems = [bear, carpet_man, chicken, cannon_king];

    leftFlyers = ["sky/flying_pig.png", "sky/hotair_balloon_1.png", "sky/hotair_balloon_2.png"].map(makeLeftFlyer);
    rightFlyers = ["sky/hotair_balloon_3.png", "sky/hotair_balloon_4.png", "sky/superhero.png"].map(makeRightFlyer);
    music = makeFlatFlyer("sky/music.png", new Point(0.1, -1));
    skyItems = leftFlyers.concat(rightFlyers).concat(music);

    hillBounds = new BoundingBox(-2000, 1500, 4000, 960);
    forestBounds = new BoundingBox(-2000, -200, 4000, 1600);
    circusBounds = new BoundingBox(-600, -1500, 3000, 1300);
    skyBounds = new BoundingBox(-2000, -2400, 4000, 900);
    //    forestItems = ...;
    //    circusItems = ...;
    //    airItems = ....;
    zones.push(new SpawnZone(hillBounds, hillItems, 1.2));
    zones.push(new SpawnZone(forestBounds, forestItems, 1.2));
    //    			     [pig, carpetman, penguin, superhero,bear],
    zones.push(new SpawnZone(circusBounds, circusItems, 1.2));
    zones.push(new SpawnZone(skyBounds, skyItems, 1.2));
    return zones;
};

function pickAtRandom(array) 
{
    index = Math.floor(Math.random()*array.length);
    return array[index];
};

function SpawnZone(bbox, objects, spawnsPerSecond)
{
    this.boundingBox = bbox;
    this.spawnObjects = objects;
    this.spawnsPerSecond = spawnsPerSecond;
    
    this.spawn = function(spawnPoint)
	{
	    obj = pickAtRandom(this.spawnObjects).copy();
	    obj.pos[0] = spawnPoint;
	    return obj;
	};

    this.inZone = function()
	{
	    return this.boundingBox.collidesWith(balloon.getBoundingBox());
	}
};

function setBehaviours()
{
    //sprite behaviours
    balloon.behave(bouncy);
    balloon.behave(resisting);
    balloon.behave(buoyant);
    balloon.behave(heightVulnerable);

    betterBalloon.behave(buoyant);
    betterBalloon.behave(resisting);

    boy.behave(createFollowBehaviour(balloon, new Point(0, 60)));
    
    //global behaviours
    mouseisdown = blowAtBalloon;
    behaviours.push(sideScrollAfterBalloon);
    behaviours.push(spawnObjectsAtRandomTimes);
    behaviours.push(wrapping);
}

function distToBalloon(point)
{
    return point.sub(balloon.pos[0]);
}

function pushForce(point) { 
    d = distToBalloon(point); 
    d2 = d.dot(d); 
    pushforce = d.mult(windpower/d2);
    return new Point(pushforce.x, pushforce.y*0.2);
}

function blowAtBalloon(point) {
    balloon.pos[1] = balloon.pos[1].add(pushForce(point));
}

function collisionTest(obj) {
    if(balloon.getBoundingBox().collidesWith(obj.getBoundingBox())) {
	obj.behaviours = [createFollowBehaviour(balloon, new Point(20, 110))];
	obj.scale = 0.25;
	setTimeout(function () {removeSprite(obj);}, 1500);
	score+=1;
	scoreElement.text = score + "";
	balloon.acc(0, obj.weight);
    }
};

function followBalloon(obj) {
    obj.pos[0] = balloon.pos[0].add(new Point(0, 100));
}

function createFollowBehaviour(object, offset) {
    return function(obj) {
	obj.pos[0] = object.pos[0].add(offset);
    }
}

function dieWhenFarAway(obj) {
    if(obj.pos[0].squaredDistance(balloon.pos[0])>squaredMaxItemDistance) {
    	removeSprite(obj);
    }
}

function sideScrollAfterBalloon() {
    screenCenter = new Point(scrollPoint.x + canvas.width/2, scrollPoint.y + canvas.height/2);
    scrollPoint = scrollPoint.add(balloon.pos[0].sub(screenCenter).mult(sideScrollSpeed));
    if(scrollPoint.y<levelBounds.y) scrollPoint.y=levelBounds.y;
    if(scrollPoint.y+canvas.height>levelBounds.y+levelBounds.height) scrollPoint.y=levelBounds.y+levelBounds.height-canvas.height;
}

function randomSpawnPoint()
{
    spawnEdge = Math.floor(Math.random()*3);
    if(spawnEdge>=2) {
	x = Math.random()*canvas.width;
	y = 0;//canvas.height;//*(spawnEdge%2);
    }
    if(spawnEdge<2) {
	x = canvas.width*(spawnEdge%2);
	y = Math.random()*canvas.height;
    }
    return (new Point(x, y)).add(scrollPoint);
}

function spawnObjectsAtRandomTimes() {
    for(i in spawnZones) {
	if(!spawnZones[i].inZone()) continue;
	chanceOfObjThisSecond = spawnZones[i].spawnsPerSecond * 1.0/framerate;
	if(Math.random()<chanceOfObjThisSecond)
	    sprites.push(spawnZones[i].spawn(randomSpawnPoint()));
    }
}

function togglePause()
{
    paused = !paused;
    if(paused) pauseButton.setImg("assets/play-button.png");
    if(!paused) pauseButton.setImg("assets/pause-button.png");
}

function toggleSound()
{
    soundOn = !soundOn;
    soundElm = document.getElementById("audio");
    if(soundOn) {
	soundElm.play();
	soundButton.setImg("assets/sound-on-button.png");
    }
    if(!soundOn) {
	soundElm.pause();
	soundButton.setImg("assets/sound-off-button.png");
    }
}