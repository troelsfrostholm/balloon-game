var canvas;
var ctx;
var framerate = 60;
var sprites = Array();
var hudElements = Array();
var behaviours = Array();
var triggers = Array();
var debugMode = false;
var scrollPoint = new Point(0, 0);
var paused = false;

function runGame() {
    initdraw();
    bindMouseEvents();
};

function initdraw() {
    canvas = document.getElementById("canvas");
    if (canvas.getContext) {
	ctx = canvas.getContext("2d");
	animate();
    }
}

function draw()
{
    clear();
    for(var i in sprites) {
	sideScrollTransform();
	sprites[i].draw();
    }
    for(var i in hudElements) {
	ctx.setTransform(1, 0, 0, 1, 0, 0);
	hudElements[i].draw();
    }
    if(debugMode) {
	for(var i in sprites) {
	    sprites[i].getBoundingBox().debugDraw(ctx);
	}
	for(i in spawnZones) {
	    spawnZones[i].boundingBox.debugDraw(ctx);
	}
	for(i in triggers) {
	    triggers[i].bbox.debugDraw(ctx);
	}
	levelBounds.debugDraw(ctx);
    }
}

function clear()
{
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function animate()
{
    if(!paused) {
	step();
	evalTriggers();
    }
    draw();

    setTimeout(animate, waitTime());
}

function evalTriggers()
{
    for(var i in triggers) {
	triggers[i].evaluate();
    };
};

function waitTime()
{
    frameWaitTime = (1000.0/framerate);
    return frameWaitTime;
}

function step()
{
    //Because resources are not locked (threading) we have to make sure
    //the contents of our game objects are what we think they are
    for(var i in sprites) {
	if(classof(sprites[i]) == "Sprite")
	    sprites[i].step();
    }
    for(i in behaviours) {
	if(typeof(behaviours[i]) == "function")
	   behaviours[i]();
    }
}

function sideScrollTransform()
{
    ctx.setTransform(1, 0, 0, 1, -scrollPoint.x, -scrollPoint.y);
}

function removeSprite(sprite)
{
    itAintMe = function(elm, index, arr) { return (elm != sprite) };
	sprites = sprites.filter(itAintMe);
}