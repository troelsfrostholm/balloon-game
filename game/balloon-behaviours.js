Behaviours.resisting = function(obj) {
    obj.pos[1] = obj.pos[1].mult(resistance);
};

Behaviours.buoyant = function(obj) {
    obj.acc(0,buoyancy);
};

Behaviours.swinging = function(obj)
{
	obj.angle[2] = -gravity*Math.sin(obj.angle[0]);
};

Behaviours.dampened = function(obj)
{
	obj.angle[0] *= dampening;
	obj.angle[1] *= dampening;
	obj.angle[2] *= dampening;

};

Behaviours.heightVulnerable = function(obj)
{
    height = obj.pos[0].y;
    
    obj.animation = obj.normalAnimation;
    
    if (height < obj.dangerHeight01)
    {
        obj.animation = obj.dangerAnimation01;
    }
    if (height < obj.dangerHeight02)
    {
        obj.animation = obj.dangerAnimation02;
    }
    if (height < obj.dangerHeight03)
    {
        obj.animation = obj.dangerAnimation03;
    }
    if (height < obj.deathHeight)
    {
        obj.animation = obj.boomAnimation;
        obj.boomAnimation.play();
    }
};

Behaviours.ancorAt = function(point)
{
    return function(obj) {
	obj.pos[1] = obj.pos[1].add(point.sub(obj.pos[0]).mult(0.001));
    }
};

Behaviours.falling = function(obj)
{
    obj.acc(0, 0.5);
}