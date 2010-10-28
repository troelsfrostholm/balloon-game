//level properties
var levelBounds;

//Sprites
var background;
var balloon;
var pig;

//game parameters
var windpower = -100;
var resistance = 0.9;
var downpos = null;
var buoyancy = -0.3;
var sideScrollSpeed = 0.05;
var pigsPerSecond = 0.5;
var pigDieDistance = 600*600;

function begin()
{
    sprites = createSprites();
    setBehaviours();
    levelBounds = background.getBoundingBox();
    runGame();
}

function createSprites() 
{
    background = new Sprite();
    background.setImg("assets/Level-background-4.png");
    background.scale = 2;
    background.place(840, 300);
    
    balloon = new Sprite();
    balloon.setImg("assets/balloon.gif");
    balloon.scale = 0.5;
    balloon.place(100, 200);

    pig = makePig(new Point(500, 100));

    return [background, balloon, pig];
};

function makePig(pos)
{
    pig = new Sprite();
    pig.setImg("assets/pig.gif");
    pig.scale = 0.5;
    pig.place(pos.x, pos.y);
    pig.move(-2, 0.5);
    pig.weight = 20;
    pig.behave(bouncy);
    pig.behave(collisionTest);
    pig.behave(dieWhenFarAway);

    return pig;
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
    behaviours.push(spawnPigsAtRandomTimes);
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
	obj.behaviours = [followBalloon];
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

function spawnPig() {
    pig = makePig(randomSpawnPoint());
    sprites.push(pig);
}

function spawnPigsAtRandomTimes() {
    chanceOfPigThisSecond = pigsPerSecond * 1.0/framerate;
    if(Math.random()<chanceOfPigThisSecond)
	spawnPig();
}