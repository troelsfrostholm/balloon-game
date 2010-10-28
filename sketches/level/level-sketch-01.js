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

sprites.push(background);
sprites.push(balloon);
sprites.push(pig);

var windpower = -100;
var resistance = 0.9;
var downpos = null;
var buoyancy = -0.3;
var sideScrollSpeed = 0.05;
var levelBounds;

balloon.behave(bouncy);
balloon.behave(resisting);
balloon.behave(buoyant);

pig.behave(bouncy);

mouseisdown = windblow;

behaviours.push(collisionTest);
behaviours.push(sideScrollAfterBalloon);

function documentLoaded()
{
    levelBounds = background.getBoundingBox();
    begin();
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

function bdist(point)
{
    return point.sub(balloon.pos[0]);
}

function pushpoint(point) { 
    d = bdist(point); 
    d2 = d.dot(d); 
    return d.mult(windpower/d2); 
}

function windblow(point) {
    balloon.pos[1] = balloon.pos[1].add(pushpoint(point));
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