Game = {

    framerate : 60,
    sprites : Array(),
    hudElements : Array(),
    behaviours : Array(),
    triggers : Array(),
    debugMode : false,
    scrollPoint : new Point(0, 0),
    paused : false,

    runGame : function() {
	initdraw();
	bindMouseEvents();
    },

    initdraw : function() {
	canvas = document.getElementById("canvas");
	if (canvas.getContext) {
	    ctx = canvas.getContext("2d");
	    animate();
	}
    },

    draw : function()
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
    },

    clear : function()
    {
	ctx.setTransform(1, 0, 0, 1, 0, 0);
	ctx.clearRect(0, 0, canvas.width, canvas.height);
    },

    animate : function()
    {
	if(!paused) {
	    step();
	    evalTriggers();
	}
	draw();
	
	setTimeout(animate, waitTime());
    },

    evalTriggers : function()
    {
	for(var i in triggers) {
	    triggers[i].evaluate();
	};
    },

    waitTime : function()
    {
	frameWaitTime = (1000.0/framerate);
	return frameWaitTime;
    },

    step : function()
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
    },

    sideScrollTransform : function()
    {
	ctx.setTransform(1, 0, 0, 1, -scrollPoint.x, -scrollPoint.y);
    },

    removeSprite : function(sprite)
    {
	itAintMe = function(elm, index, arr) { return (elm != sprite) };
	sprites = sprites.filter(itAintMe);
    }
}