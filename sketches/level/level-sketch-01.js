var windpower = -100;
var resistance = 0.9;
var downpos = null;
var buoyancy = -0.3;
var sideScrollSpeed = 0.05;
var levelBounds;

var background;
var balloon;
var pig;

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

    pig = new Sprite();
    pig.setImg("assets/pig.gif");
    pig.scale = 0.5;
    pig.place(500, 100);
    pig.move(-2, 0.5);

    return [background, balloon, pig];
}

function setBehaviours()
{
    //sprite behaviours
    balloon.behave(bouncy);
    balloon.behave(resisting);
    balloon.behave(buoyant);
    pig.behave(bouncy);
    
    //global behaviours
    mouseisdown = blowAtBalloon;
    behaviours.push(collisionTest);
    behaviours.push(sideScrollAfterBalloon);
}

function setWindpower(value)
{
    if(isNaN(value)) return;
    windpower = value*1;
}

function setResistance(value)
{
    if(isNaN(value)) return;
    resistance = 1 - value*1/100;
}

function setBuoyancy(value)
{
    if(isNaN(value)) return;
    buoyancy = value*1;
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

function collisionTest() {
    if(balloon.getBoundingBox().collidesWith(pig.getBoundingBox())) {
	pig.behaviours = [followBalloon];
	balloon.acc(0, 10);
    }
}

function followBalloon(obj) {
    obj.pos[0] = balloon.pos[0].add(new Point(0, 100));
}

function sideScrollAfterBalloon() {
    screenCenter = new Point(scrollPoint.x + canvas.width/2, scrollPoint.y + canvas.height/2);
    scrollPoint = scrollPoint.add(balloon.pos[0].sub(screenCenter).mult(sideScrollSpeed));
}