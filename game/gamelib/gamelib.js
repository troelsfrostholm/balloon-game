Behaviours = {};

Game = {

    framerate : 60,
    frame : 0.0,
    sprites : Array(),
    hudElements : Array(),
    behaviours : Array(),
    triggers : Array(),
    debugMode : false,
    paused : false,
    
    run : function() {
	Game.initdraw();
	bindMouseEvents();
    },
    
    initdraw : function() {
	Game.canvas = document.getElementById("canvas");
	if (Game.canvas.getContext) {
	    Game.ctx = canvas.getContext("2d");
	    Game.animate();
	    setInterval(Game.animate, Game.waitTime());
	    
	}
    },

    draw : function()
    {
	for(var i in Game.sprites)
	    {
		SideScroll.transform();
		Game.sprites[i].draw();
	    }
	
	for(var i in Game.hudElements)
	    {
		Game.ctx.setTransform(1, 0, 0, 1, 0, 0);
		
		// Is there a better way of placing the altitude slider?
		if (i == 4)
		    {
			Game.hudElements[i].place(
						  ( (canvas.width - (Game.hudElements[i].image.width / 2) ) - 45)
						  ,
						  ( (canvas.height / 2) + (425 / (level.bounds[3] / balloon.pos[0].y) ) ) );	
		    }
		
		// Is there a better way of .step'ing the cursor sprite?
			if (i == 5)
			    {
				Game.hudElements[i].step();
			    }
		
		
		Game.hudElements[i].draw();
	    }
	
	if(Game.debugMode)
	    {
		for(var i in Game.sprites)
		    {
			Game.sprites[i].getBoundingBox().debugDraw(Game.ctx);
		    }
		
		for(i in Game.spawnZones)
		    {
			Game.spawnZones[i].boundingBox.debugDraw(Game.ctx);
		    }
		
		for(i in Game.triggers)
		    {
			Game.triggers[i].bbox.debugDraw(Game.ctx);
		    }
		Game.levelBounds.debugDraw(Game.ctx);
	    }
    },

    clear : function()
    {
	Game.ctx.setTransform(1, 0, 0, 1, 0, 0);
	Game.ctx.clearRect(0, 0, Game.canvas.width, Game.canvas.height);
    },

    animate : function()
    {
	if(!Game.paused) {
	    Game.step();
	    Game.evalTriggers();
	}
	Game.draw();
	Game.frame++;

	//setTimeout(Game.animate, Game.waitTime());
    },

    evalTriggers : function()
    {
	for(var i in Game.triggers) {
	    Game.triggers[i].evaluate();
	};
    },

    waitTime : function()
    {
	frameWaitTime = (1000.0/Game.framerate);
	return frameWaitTime;
    },

    step : function()
    {
	//Because resources are not locked (threading) we have to make sure
	//the contents of our game objects are what we think they are
	for(var i in Game.sprites) {
	    if(classof(Game.sprites[i]) == "Sprite")
		Game.sprites[i].step();
	}
	for(i in Game.behaviours) {
	    if(typeof(Game.behaviours[i]) == "function")
		Game.behaviours[i]();
	}
    },

    addSprite : function(sprite)
    {
	Game.sprites.push(sprite);
    },

    /*
      sprites : Array or object of sprites
    */
    addSprites : function(sprites)
    {
	for(var i in sprites) {
	    if(classof(sprites[i]) == "Sprite")
	       this.addSprite(sprites[i]);
	}	    
    },

    removeSprite : function(sprite)
    {
	itAintMe = function(elm, index, arr) { return (elm != sprite) };
	Game.sprites = Game.sprites.filter(itAintMe);
    },

    translateEverything : function(byPoint)
    {
	for(var i in Game.sprites)
	    {
		Game.sprites[i].pos[0] = Game.sprites[i].pos[0].add(byPoint);
	    }
    },

    /*
      Measures framerate and passes it to callback
      in frames per second. 
    */
    measureFramerate : function(callback)
    {
	var t1 = new Date().getTime();
	var f1 = Game.frame;
	setTimeout(function() {
		var t2 = new Date().getTime();
		var f2 = Game.frame;
		callback(1000.0*(f2 - f1)/(t2 - t1));
	    }, 1000 );
    }

}