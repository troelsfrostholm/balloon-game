//level properties
var levelBounds;

//Sprites
var background;
var balloon;
var pig;
var carpetman;
var penguin;
var superhero;
var bear;


var spawnZones;
var scoreElement;

//game parameters
var windpower = -100;
var resistance = 0.9;
var downpos = null;
var buoyancy = -0.3;
var sideScrollSpeed = 0.05;
var pigsPerSecond = 0.5;
var pigDieDistance = 600*600;

var score = 0;

function begin()
{
    loadBackground();
    background.image.onLoad = initializeLevel();
}

function loadBackground()
{
    console.log("Loading background");
    background = new Sprite();
    background.setImg("assets/background-wrap2.png");
    background.scale = 1;
    background.place(0, 0);
}

function initializeLevel()
{  
    console.log("Background loaded");
    levelBounds = new BoundingBox(-1500, -2100, 3000, 4200);
    sprites = createSprites();
    setBehaviours();
    spawnZones = createSpawnZones();
    hud = new Sprite();
    hud.image.src = "assets/hud.png";
    canvas = document.getElementById("canvas");
    hud.place(canvas.width/2, canvas.height/2);
    hudElements.push(hud);
    scoreElement = new TextElement("0", new Point(810, 418));
    hudElements.push(scoreElement);
    runGame();
}

function createSprites() 
{
    balloon = new Sprite();
    balloon.setImg("assets/balloon.gif");
    balloon.scale = 0.5;
    balloon.place(500, 500);

    pig = makeFlatFlyer(new Point(500, 100), "pig.gif");
    carpetman = makeFlatFlyer(new Point(500, 100), "carpetman.png");
    penguin = makeFlatFlyer(new Point(500, 100), "penguin.png");;
    superhero = makeFlatFlyer(new Point(500, 100), "superhero.png");;
    bear = makeFlatFlyer(new Point(500, 100), "bear.png");

    return [background, balloon, pig];
};

function makeFlatFlyer(pos, image)
{
    flyer = new Sprite();
    flyer.setImg("assets/"+image);
    flyer.scale = 0.5;
    flyer.place(pos.x, pos.y);
    flyer.move(-2, 0.5);
    flyer.weight = 20;
    flyer.behave(bouncy);
    flyer.behave(collisionTest);
    flyer.behave(dieWhenFarAway);

    return flyer;
};

function createSpawnZones()
{
    zones = new Array();
    zones.push(new SpawnZone(levelBounds,
			     [pig, carpetman, penguin, superhero,bear],
			     1));
    return zones;
};

function SpawnZone(bbox, objects, spawnsPerSecond)
{
    this.boundingBox = bbox;
    this.spawnObjects = objects;
    this.spawnsPerSecond = spawnsPerSecond;
    
    this.spawn = function(spawnPoint)
	{
	    pickAtRandom = function(array) {
		index = Math.floor(Math.random()*array.length);
		return array[index];
	    };
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
    
    //global behaviours
    mouseisdown = blowAtBalloon;
    behaviours.push(sideScrollAfterBalloon);
    behaviours.push(spawnObjectsAtRandomTimes);
}

function distToBalloon(point)
{
    return point.sub(balloon.pos[0]);
}

function pushForce(point) { 
    d = distToBalloon(point); 
    d2 = d.dot(d); 
    return d.mult(windpower/d2); 
}

function blowAtBalloon(point) {
    balloon.pos[1] = balloon.pos[1].add(pushForce(point));
}

function collisionTest(obj) {
    if(balloon.getBoundingBox().collidesWith(obj.getBoundingBox())) {
	//obj.behaviours = [followBalloon];
	removeSprite(obj);
	score+=1;
	scoreElement.text = score + "";
	balloon.acc(0, obj.weight);
    }
};

function followBalloon(obj) {
    obj.pos[0] = balloon.pos[0].add(new Point(0, 100));
}

function dieWhenFarAway(obj) {
    if(obj.pos[0].squaredDistance(balloon.pos[0])>pigDieDistance) {
    	removeSprite(obj);
    }
}

function sideScrollAfterBalloon() {
    screenCenter = new Point(scrollPoint.x + canvas.width/2, scrollPoint.y + canvas.height/2);
    scrollPoint = scrollPoint.add(balloon.pos[0].sub(screenCenter).mult(sideScrollSpeed));
}

function randomSpawnPoint()
{
    spawnEdge = Math.floor(Math.random()*4);
    if(spawnEdge>2) {
	x = Math.random()*canvas.width;
	y = canvas.height*(spawnEdge%2);
    }
    if(spawnEdge<=2) {
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