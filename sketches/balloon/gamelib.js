var canvas;
var ctx;
var framerate = 60;
var sprites = Array();
var behaviours = Array();

function initdraw() {
    canvas = document.getElementById("canvas");
    if (canvas.getContext) {
	ctx = canvas.getContext("2d");
	animate();
    }
}

function Sprite()
{
    this.image = new Image();
    this.image.src = "missing.gif"
    this.angle = [0, 0, 0];
    o = new Point(0, 0);
    this.pos = [o, o, o];
    this.scale = 1;
    this.behaviours = Array();
    
    this.step = function()
	{
	    this.angle = euler(this.angle)
	    this.pos = euler(this.pos)
	    for(i in this.behaviours) {
		this.behaviours[i](this);
	    }
	}
}

Sprite.prototype.draw = function()
{
    ctx.setTransform(1, 0, 0, 1, 0, 0);
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

Sprite.prototype.boundingBox = function()
{
    rotate_around_origin = function(p, a) //point, angle 
    {
	cos = Math.cos;
	sin = Math.sin;
	return new Point( p.x*cos(a) - p.y*sin(a),
			  p.x*sin(a) - p.y*cos(a) );
    }
    
};


function draw()
{
    clear();
    for(var i in sprites) {
	sprites[i].draw();
    }
}

function clear()
{
    //    ctx.fillStyle = "rgb(255, 255, 255)";
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    //ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function animate()
{
    //    dirty_rects = calculateDirtyRects();
    step();
    //    clearRects(dirty_rects);
    draw();
    setTimeout(animate, 1.0/framerate);
}

function step()
{
    for(var i in sprites) {
	sprites[i].step();
    }
    for(i in behaviours) {
	behaviours[i]();
    }
}