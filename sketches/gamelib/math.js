function Point(_x, _y) {
    this.x = _x;
    this.y = _y;
}

Point.prototype.add = function(point) {
    return new Point(this.x + point.x, this.y + point.y);
}

Point.prototype.sub = function(point) {
    return new Point(this.x - point.x, this.y - point.y);
}

Point.prototype.mult = function(scalar) {
    return new Point(this.x*scalar, this.y*scalar);
};

Point.prototype.div = function(scalar) {
    return new Point(scalar/this.x, scalar/this.y);
}

Point.prototype.dot = function(point) {
    return this.x*point.x+this.y*point.y;
}

Point.prototype.hat = function() {
    return new Point(-this.y, this.x);
};

Point.prototype.squared = function() {
    return this.dot(this);
}

Point.prototype.squaredDistance = function(point) {
    distVec = this.sub(point);
    return distVec.squared();
}

// returns angle between vector (point1 - point2)
Point.prototype.angle = function(point)
{
	var result;
	var v1_l = Math.sqrt(this.dot(this));
	var v2_l = Math.sqrt(point.dot(point));
	var v1_dot_v2 = this.dot(point);
	result = Math.asin( (v1_dot_v2) / (v1_l * v2_l) );
	return result;
}

// returns negative angle between vector (point1 - point2) to make up for sign error if angle is < 90°
Point.prototype.angle2 = function(point)
{
	var result;
	var v1_l = Math.sqrt(this.dot(this));
	var v2_l = Math.sqrt(point.dot(point));
	var v1_dot_v2 = this.dot(point);
	result = - Math.asin( (v1_dot_v2) / (v1_l * v2_l) );
	return result;
}

//Takes a variable with derivatives as an array, like this:
//[x, dx, ddx, dddx ... ]
function euler(values) {
    result = Array();
    n = values.length-1;
	result[n] = values[n];
    for(i = n; i>0; i--)  {
	result[i-1] = add(values[i-1], values[i]);
    }
    return result;
}

function add(a, b) {
    map = Array();
    map[["number", "number"]] = function(a, b) { return a+b };
    map[["Point", "Point"]] = function(a, b) { 
	return new Point(a.x+b.x, a.y+b.y);
    }
    addition_function = map[[classof(a), classof(b)]];
    if(addition_function) return addition_function(a, b);
    return undefined;
}

function zero(a) {
    if(classof(a) == "number") return 0;
    if(classof(a) == "Point") return new Point(0, 0);
}