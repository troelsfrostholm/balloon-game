function bouncy(obj) 
{
    /*    p = obj.pos[0];
    dp = obj.pos[1];
    halfwidth = obj.image.width/2*obj.scale;
    halfheight = obj.image.height/2*obj.scale;
	
    if(p.x<halfwidth && dp.x<0) dp.x=-dp.x;
    if(p.y<halfheight && dp.y<0) dp.y=-dp.y;
    if(p.x>canvas.width-halfwidth && dp.x>0) dp.x=-dp.x;
    if(p.y>canvas.height-halfheight && dp.y>0) dp.y=-dp.y;*/
};

function wrapping()
{
    p = scrollPoint;
    b = levelBounds;
    min = levelBounds.x-canvas.width;
    max = levelBounds.x+levelBounds.width;
    t = 0;
    if(p.x<min)      t=b.width;
    if(p.x>max)  t=-b.width;
    scrollPoint = scrollPoint.add(new Point(t, 0));
    translateEverything(new Point(t, 0));
    background.pos[0] = background.pos[0].add(new Point(-t, 0));
};

function translateEverything(byPoint)
{
    for(var i in sprites)
	{
	    sprites[i].pos[0] = sprites[i].pos[0].add(byPoint);
	}
};

function resisting(obj) {
    obj.pos[1] = obj.pos[1].mult(resistance);
};

function buoyant(obj) {
    obj.acc(0,buoyancy);
};

function swinging(obj) { 
    obj.angle[2] = -gravity*Math.sin(obj.angle[0]); 
};

function dampened(obj) { 
    obj.angle[1] *= dampening; 
}

function heightVulnerable(obj) {
    height = obj.pos[0].y;
    obj.image = obj.normalImage;
    if(height < obj.dangerHeight)  obj.image = obj.dangerImage;
    if(height < obj.deathHeight)   {
	obj.image = obj.blowUpImage;
	obj.behaviours = [falling];
    }
}

function falling(obj) {
    obj.acc(0,1);
}

function ancorAt(point)
{
    return function(obj) {
	obj.pos[1] = obj.pos[1].add(point.sub(obj.pos[0]).mult(0.001));
    }
}