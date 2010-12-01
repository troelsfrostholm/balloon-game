function Sprite()
{
    this.animation = new Animation(Array());
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
	    for(i in this.behaviours) {
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
    Game.ctx.translate(this.pos[0].x, this.pos[0].y);
    Game.ctx.scale(this.scale, this.scale);
    Game.ctx.rotate(this.angle[0]);
    Game.ctx.drawImage(this.image, (-this.image.width)/2.0, -this.image.height/2.0);
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