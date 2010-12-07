var canvas;
var ctx;
var framerate = 60;
var sprites = Array();
var hudElements = Array();
var behaviours = Array();
var triggers = Array();
var debugMode = true;
var scrollPoint = new Point(0, 0);
var paused = false;

function runGame() {
    initdraw();
    bindMouseEvents();
};

function initdraw()
{
    canvas = document.getElementById("canvas");
    if (canvas.getContext)
	{
		ctx = canvas.getContext("2d");
		animate();
    }
}

function BoundingBox(x, y, width, height)
{
    this.x = x;
    this.y = y;
    this.width=width;
    this.height=height;

    this.collidesWith = function(bbox)
	{
		dx = bbox.x - this.x;
		dy = bbox.y - this.y;
		overlaps_on_x_axis = (dx > 0 && dx <= this.width) ||
							 (dx <=0 && -dx <= bbox.width)
		overlaps_on_y_axis = (dy > 0 && dy <= this.height) ||
							 (dy <=0 && -dy <= bbox.height)
							 
		if (overlaps_on_y_axis && overlaps_on_x_axis == true)
        {
            var x = Math.max(this.x,bbox.x);
            var y = Math.max(this.y,bbox.y);
            var w = Math.abs(Math.min(this.x + this.width,bbox.x + bbox.width) - x );
            var h = Math.abs(Math.min(this.y+this.height,bbox.y+bbox.height) - y );
            
            return ( new BoundingBox(x,y,w,h) );
        }
        else
        {
            return false;
        }
	}

	this.collidesWithPoint = function(point)
	{
		if (	( point.x > this.x ) &&
				( point.x < (this.x + this.width) ) &&
				( point.y > this.y ) &&
				( point.y < (this.y + this.height) )
			)
		{
			return true;
		}
		else
		{
			return false;
		}	
		
	}

    this.debugDraw = function(canvas)
	{
		sideScrollTransform();
		canvas.strokeRect(this.x, this.y, this.width, this.height);
    }
}

function Trigger(object, bbox, onEnter, onInside, onExit)
{
    this.object = object;
    this.bbox = bbox;    
    this.onEnter = onEnter;
    this.onExit = onExit;
    this.onInside = onInside;
    this.alreadyInside = false;
};

Trigger.prototype.evaluate = function()
{
    insideNow = this.bbox.collidesWith(this.object.getBoundingBox());
    if(!this.alreadyInside && insideNow) this.onEnter();
    if(this.alreadyInside && !insideNow) this.onExit();
    if(insideNow) this.onInside();
    this.alreadyInside = insideNow;
};

function Sprite()
{
    this.image = new Image();
    this.image.src = "assets/missing.gif"
    this.angle = [0, 0, 0];
    o = new Point(0, 0);
    this.pos = [o, o, o];
    this.scale = 1;
    this.depth = 0;
    this.behaviours = Array();
    
    this.step = function()
	{
	    this.angle = euler(this.angle)
	    this.pos = euler(this.pos)
	    for(i in this.behaviours)
		{
		//A sprite's behaviours may be removed during the 
		//game. If this happens while in this loop, 
		//this.behaviours[i] may point to an element that has been
		//removed. So we only execute it, if it is a function
		//This is in stead of proper thread safety and locking
		if(typeof(this.behaviours[i])=="function")
		    this.behaviours[i](this);
	    }
	}

    this.getBoundingBox = function()
    {
	width = this.image.width*this.scale;
	height = this.image.height*this.scale;
	pos = this.pos[0]
	return new BoundingBox( pos.x - width/2, 
				pos.y - height/2, 
				width, 
				height );
    };

    this.copy = function()
	{
	    s = new Sprite();
	    for(i in this) {
		s[i] = this[i];
	    }
	    return s;
	}
}

Sprite.prototype.draw = function()
{
    ctx.translate(this.pos[0].x, this.pos[0].y);
    ctx.scale(this.scale, this.scale);
    ctx.rotate(this.angle[0]);
    ctx.drawImage(this.image, (-this.image.width)/2.0, -this.image.height/2.0);
};

Sprite.prototype.setImg = function(image)
{
    this.image = new Image();
    this.image.src = image;
};

Sprite.prototype.require_two_nums = function(a, b, func)
{
    error_msg = "Input error: Sprite."+func+"(number, number)";
    return ( require_input(a, 
			   "number", 
			   error_msg) &&
	     require_input(b, 
			   "number", 
			   error_msg) );
};

Sprite.prototype.require_one_num = function(a, func)
{
    error_msg = "Input error: Sprite."+func+"(number)";
    return require_input(a, "number", error_msg);
}

Sprite.prototype.place = function(x, y)
{
    if(!this.require_two_nums(x, y, "place"))  return;
    this.pos[0] = new Point(x, y);
};

Sprite.prototype.move = function(x, y)
{
    if(!this.require_two_nums(x, y, "move"))  return;
    this.pos[1] = new Point(x, y);
};

Sprite.prototype.acc = function(x, y)
{
    if(!this.require_two_nums(x, y, "acc"))  return;
    this.pos[2] = new Point(x, y);
};

Sprite.prototype.direction = function(angle)
{
    if(!this.require_one_num(angle, "direction")) return;
    this.angle[0] = angle;
};

Sprite.prototype.spin = function(angular_velocity)
{
    if(!this.require_one_num(angular_velocity, "spin")) return;
    this.angle[1] = angular_velocity;
};

Sprite.prototype.accSpin = function(angular_acceleration)
{
    if(!this.require_one_num(angular_acceleration, "accSpin")) return;
    this.angle[2] = angular_acceleration;
};

Sprite.prototype.behave = function(behaviour_function)
{
    if(!require_input(behaviour_function, 
		      "function", 
		      "Input error: Sprite.behave(function)"))
	return;
    this.behaviours.push(behaviour_function);
}

Sprite.prototype.reset = function()
{
    o = new Point(0, 0);
    this.pos = new Array(o, o, o);
    this.angle = new Array(0, 0, 0);
};

function TextElement(text, pos)
{
    this.text = text;
    this.pos = pos;
    
    this.draw = function() {
	ctx.font = "bold 20px sans-serif";
	ctx.fillText(this.text, this.pos.x, this.pos.y);
    }
}


function draw()
{
    clear();
	
    for (var i in sprites)
	{
		sideScrollTransform();
		sprites[i].draw();
    }
	
	var slider = hudElements[4];
	slider.place(((canvas.width - (slider.image.width / 2)) - 45) , ((canvas.height / 2) + 20) + (425 / (levelBounds.height / balloon.pos[0].y)));	
		
    for (var i in hudElements)
	{
		ctx.setTransform(1, 0, 0, 1, 0, 0);
		hudElements[i].draw();
    }

    if(debugMode)
	{
		for(var i in sprites)
		{
			sprites[i].getBoundingBox().debugDraw(ctx);
		}
		for(i in spawnZones)
		{
			spawnZones[i].boundingBox.debugDraw(ctx);
		}
		for(i in triggers)
		{
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
    if(!paused)
	{
		step();
		evalTriggers();
    }

    document.onkeydown = KeyCheck;       

    draw();

    setTimeout(animate, waitTime());
}

function KeyCheck()
{

   var KeyID = event.keyCode;

   switch(KeyID)
   {

      case 16: // SHIFT
        buoyancy -= .1;
        break; 

      case 17:  // CTRL
        buoyancy += .1;
        break;

      case 18:
        break;

      case 19:
        break;

      case 37:
        balloon.pos[2].x -= 2;
        break;

      case 38:
        balloon.pos[2].y -= 2;
        break;

      case 39:
        balloon.pos[2].x += 2;
        break;

      case 40:
        balloon.pos[2].y += 2;
        break;
   }

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
    for(var i in sprites)
	{
		if(classof(sprites[i]) == "Sprite")
			sprites[i].step();
    }
    for(i in behaviours)
	{
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
