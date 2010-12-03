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
	for(var i in Game.sprites) {
	    SideScroll.transform();
	    Game.sprites[i].draw();
	}
	for(var i in Game.hudElements) {
	    Game.ctx.setTransform(1, 0, 0, 1, 0, 0);
	    Game.hudElements[i].draw();
	}
	if(Game.debugMode) {
	    for(var i in Game.sprites) {
		Game.sprites[i].getBoundingBox().debugDraw(Game.ctx);
	}
	    for(i in Game.spawnZones) {
		Game.spawnZones[i].boundingBox.debugDraw(Game.ctx);
	    }
	    for(i in Game.triggers) {
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
    },
    
    
    impassable : function(obj)
    {
        if (obj.bbox.collidesWith( balloon.getBoundingBox() ))
        {
            var bX = balloon.pos[0].x;
            var bY = balloon.pos[0].y;
            var bw = balloon.getBoundingBox().width/2;
            var bh = balloon.getBoundingBox().height/2;
            var ow = obj.getBoundingBox().width/2;
            var oh = obj.getBoundingBox().height/2;

            balloonTopLeft = new Point(bX - bw , bY - bh);
            balloonCentreLeft = new Point(bX - bw , bY);
            balloonBottomLeft = new Point(bX - bw , bY + bh);
            balloonTopRight = new Point(bX + bw , bY - bh);
            balloonCentreRight = new Point(bX + bw , bY);
            balloonBottomRight = new Point(bX + bw , bY + bh);
            objTopLeft = new Point(obj.pos[0].x - ow, obj.pos[0].y - oh);
            objTopRight = new Point(obj.pos[0].x + ow, obj.pos[0].y - oh);
            objBottomLeft = new Point(obj.pos[0].x - ow, obj.pos[0].y + oh);
            objBottomRight = new Point(obj.pos[0].x + ow, obj.pos[0].y + oh);
            
            corners = new Array(balloonCentreLeft , balloonCentreRight , balloonBottomLeft, balloonBottomRight , balloonTopLeft, balloonTopRight);

            // One of the balloon's corners will always collide if a collision is detected.
            for (var i in corners)
            {
                // Check for collission with current corner
                if ( obj.getBoundingBox().collidesWithPoint(corners[i]) == true)
                {
                    var c2b = corners[i].sub(obj.pos[0]);
                    // If collission is in object's UPPER half
                    if (corners[i].y < obj.pos[0].y)
                    {
                        // Collission in object's LEFT half
                        if (corners[i].x < obj.pos[0].x)
                        {
                            var c2c = objTopLeft.sub(obj.pos[0]);
                            // Bounce off LEFT SIDE
                            if ( c2b.y/c2b.x < c2c.y/c2c.x )
                            {
                                console.log("corner " + i + " hit UPPER LEFT SIDE");
                                balloon.pos[0].x = objTopLeft.x - bw ;

                                if ( balloon.pos[1].x > 0)
                                    balloon.pos[1].x *= -1;
                            }
                            // Bounce off TOP
                            else
                            {
                                console.log("corner " + i + " hit TOP LEFT");
                                balloon.pos[0].y = objTopLeft.y - bh ;

                                if ( balloon.pos[1].y > 0)
                                    balloon.pos[1].y *= -1;
                            }
                        }
                        // Collission in object's RIGHT half
                        else
                        {
                            var c2c = objTopRight.sub(obj.pos[0]);
                            // Bounce off RIGHT SIDE
                            if ( c2b.y/c2b.x > c2c.y/c2c.x )
                            {
                                console.log("corner " + i + " hit UPPER RIGHT SIDE");
                                balloon.pos[0].x = objTopRight.x + bw ;

                                if ( balloon.pos[1].x < 0)
                                    balloon.pos[1].x *= -1;
                            }
                            else
                            // Bounce off TOP
                            {
                                console.log("corner " + i + " hit TOP RIGHT");
                                balloon.pos[0].y = objTopLeft.y - bh ;

                                if ( balloon.pos[1].y > 0)
                                    balloon.pos[1].y *= -1;
                            }
                        }
                    }
                    // BOTTOM half
                    else
                    {
                        if (corners[i].x < obj.pos[0].x)
                        {
                            var c2c = objBottomLeft.sub(obj.pos[0]);
                            // Bounce off LEFT SIDE
                            if ( c2b.y/c2b.x > c2c.y/c2c.x )
                            {
                                console.log("corner " + i + " hit LOWER LEFT SIDE");
                                balloon.pos[0].x = objBottomLeft.x - bw ;

                                if ( balloon.pos[1].x > 0)
                                    balloon.pos[1].x *= -1;
                            }
                            else
                            // Bounce off BOTTOM
                            {
                                console.log("corner " + i + " hit BOTTOM LEFT");
                                balloon.pos[0].y = objBottomLeft.y + bh ;

                                if ( balloon.pos[1].y < 0)
                                    balloon.pos[1].y *= -1;
                            }
                        }
                        else
                        {
                            var c2c = objBottomRight.sub(obj.pos[0]);
                            // Bounce off RIGHT SIDE
                            if ( c2b.y/c2b.x < c2c.y/c2c.x )
                            {
                                console.log("corner " + i + " hit LOWER RIGHT SIDE");
                                balloon.pos[0].x = objBottomRight.x + bw ;

                                if ( balloon.pos[1].x < 0)
                                    balloon.pos[1].x *= -1;
                            }
                            else
                            // Bounce off BOTTOM
                            {
                                console.log("corner " + i + " hit BOTTOM RIGHT");
                                balloon.pos[0].y = objBottomRight.y + bh ;

                                if ( balloon.pos[1].y < 0)
                                    balloon.pos[1].y *= -1;
                            }
                        }
                    }
                    break;
                }
            }		
        }
    }

}