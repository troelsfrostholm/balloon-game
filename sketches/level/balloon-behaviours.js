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