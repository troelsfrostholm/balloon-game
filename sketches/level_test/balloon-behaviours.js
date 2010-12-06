function impassable(obj)
{
	// Only do something if there is a collision.
	if (obj.getBoundingBox().collidesWith( balloon.getBoundingBox() ))
	{
        var collision = obj.getBoundingBox().collidesWith( balloon.getBoundingBox() );
        var collisionCentre = new Point(collision.x + collision.width/2,collision.y + collision.height/2);
        
        var bX = balloon.pos[0].x;
        var bY = balloon.pos[0].y;
		var bw = balloon.getBoundingBox().width/2;
		var bh = balloon.getBoundingBox().height/2;
		var ow = obj.getBoundingBox().width/2;
		var oh = obj.getBoundingBox().height/2;

		objTopLeft = new Point(obj.pos[0].x - ow, obj.pos[0].y - oh);
		objTopRight = new Point(obj.pos[0].x + ow, obj.pos[0].y - oh);
		objBottomLeft = new Point(obj.pos[0].x - ow, obj.pos[0].y + oh);
		objBottomRight = new Point(obj.pos[0].x + ow, obj.pos[0].y + oh);

        var c2b = collisionCentre.sub(obj.pos[0]);

        // If collission is in object's UPPER half
        if (collisionCentre.y < obj.pos[0].y)
        {
            // Collission in object's LEFT half
            if (collisionCentre.x < obj.pos[0].x)
            {
                var c2c = objTopLeft.sub(obj.pos[0]);
                // Bounce off LEFT SIDE
                if ( c2b.y/c2b.x < c2c.y/c2c.x )
                {
                    balloon.pos[0].x = objTopLeft.x - bw;

                    if ( balloon.pos[1].x > 0)
                        balloon.pos[1].x *= -1;
                }
                // Bounce off TOP
                else
                {
                    balloon.pos[0].y = objTopLeft.y - bh;

                    if ( balloon.pos[1].y > 0)
                        balloon.pos[1].y *= -.5;
                }
            }
            // Collission in object's RIGHT half
            else
            {
                var c2c = objTopRight.sub(obj.pos[0]);
                // Bounce off RIGHT SIDE
                if ( c2b.y/c2b.x > c2c.y/c2c.x )
                {
                    balloon.pos[0].x = objTopRight.x + bw;

                    if ( balloon.pos[1].x < 0)
                        balloon.pos[1].x *= -1;
                }
                else
                // Bounce off TOP
                {
                    balloon.pos[0].y = objTopLeft.y - bh;

                    if ( balloon.pos[1].y > 0)
                        balloon.pos[1].y *= -.5;
                }
            }
        }
        // BOTTOM half
        else
        {
            if (collisionCentre.x < obj.pos[0].x)
            {
                var c2c = objBottomLeft.sub(obj.pos[0]);
                // Bounce off LEFT SIDE
                if ( c2b.y/c2b.x > c2c.y/c2c.x )
                {
                    balloon.pos[0].x = objBottomLeft.x - bw;

                    if ( balloon.pos[1].x > 0)
                        balloon.pos[1].x *= -1;
                }
                else
                // Bounce off BOTTOM
                {
                    balloon.pos[0].y = objBottomLeft.y + bh;

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
                    balloon.pos[0].x = objBottomRight.x + bw;

                    if ( balloon.pos[1].x < 0)
                        balloon.pos[1].x *= -1;
                }
                else
                // Bounce off BOTTOM
                {
                    balloon.pos[0].y = objBottomRight.y + bh;

                    if ( balloon.pos[1].y < 0)
                        balloon.pos[1].y *= -1;
                }
            }
        }		
	}
}

/*
function impassable(obj)
{
	// Only do something if there is a collision.
	if (obj.getBoundingBox().collidesWith( balloon.getBoundingBox() ))
	{
        console.log(obj.getBoundingBox().collidesWith( balloon.getBoundingBox() ));
        
        var bX = balloon.pos[0].x;
        var bY = balloon.pos[0].y;
		var bw = balloon.getBoundingBox().width/2;
		var bh = balloon.getBoundingBox().height/2;
		var ow = obj.getBoundingBox().width/2;
		var oh = obj.getBoundingBox().height/2;

        var corners = new Array();
        
        corners.push(   new Point(bX - bw , bY - bh),
                        new Point(bX - bw , bY),
                        new Point(bX - bw , bY + bh),
                        new Point(bX + bw , bY - bh),
                        new Point(bX + bw , bY),
                        new Point(bX + bw , bY + bh)
                    );

		objTopLeft = new Point(obj.pos[0].x - ow, obj.pos[0].y - oh);
		objTopRight = new Point(obj.pos[0].x + ow, obj.pos[0].y - oh);
		objBottomLeft = new Point(obj.pos[0].x - ow, obj.pos[0].y + oh);
		objBottomRight = new Point(obj.pos[0].x + ow, obj.pos[0].y + oh);

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
							balloon.pos[0].x = objTopLeft.x - bw;

							if ( balloon.pos[1].x > 0)
								balloon.pos[1].x *= -1;
						}
						// Bounce off TOP
						else
						{
							balloon.pos[0].y = objTopLeft.y - bh;

							if ( balloon.pos[1].y > 0)
								balloon.pos[1].y *= -.5;
						}
					}
					// Collission in object's RIGHT half
					else
					{
                        var c2c = objTopRight.sub(obj.pos[0]);
						// Bounce off RIGHT SIDE
						if ( c2b.y/c2b.x > c2c.y/c2c.x )
						{
							balloon.pos[0].x = objTopRight.x + bw;

							if ( balloon.pos[1].x < 0)
								balloon.pos[1].x *= -1;
						}
						else
						// Bounce off TOP
						{
							balloon.pos[0].y = objTopLeft.y - bh;

							if ( balloon.pos[1].y > 0)
								balloon.pos[1].y *= -.5;
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
							balloon.pos[0].x = objBottomLeft.x - bw;

							if ( balloon.pos[1].x > 0)
								balloon.pos[1].x *= -1;
						}
						else
						// Bounce off BOTTOM
						{
							balloon.pos[0].y = objBottomLeft.y + bh;

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
							balloon.pos[0].x = objBottomRight.x + bw;

							if ( balloon.pos[1].x < 0)
								balloon.pos[1].x *= -1;
						}
						else
						// Bounce off BOTTOM
						{
							balloon.pos[0].y = objBottomRight.y + bh;

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
*/
function bouncy(obj)
{
    p = obj.pos[0];
    dp = obj.pos[1];
    halfwidth = obj.image.width/2*obj.scale;
    halfheight = obj.image.height/2*obj.scale;
	
    if(p.x<halfwidth && dp.x<0) dp.x=-dp.x;
    if(p.y<halfheight && dp.y<0) dp.y=-dp.y;
    if(p.x>canvas.width-halfwidth && dp.x>0) dp.x=-dp.x;
    if(p.y>canvas.height-halfheight && dp.y>0) dp.y=-dp.y;
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
//    background.pos[0] = background.pos[0].add(new Point(-t, 0));
};

function translateEverything(byPoint)
{
    for(var i in sprites)
	{
        if ( !levelBounds.collidesWithPoint(sprites[i].pos[0]) )
        {
            sprites[i].pos[0] = sprites[i].pos[0].add(byPoint);
        }
	}
};

function resisting(obj) {
    obj.pos[1] = obj.pos[1].mult(resistance);
};

function buoyant(obj) {
    obj.acc(0,buoyancy);
};

function swinging(obj)
{
	obj.angle[2] = -gravity*Math.sin(obj.angle[0]);
};

function dampened(obj)
{
	obj.angle[0] *= dampening;
	obj.angle[1] *= dampening;
	obj.angle[2] *= dampening;

};

function heightVulnerable(obj) {
    height = obj.pos[0].y;
    obj.image = obj.normalImage;
    if(height < obj.dangerHeight)  obj.image = obj.dangerImage;
    if(height < obj.deathHeight)   {
	obj.image = obj.kablouieImage;
	obj.scale=0.75;
	setTimeout(function () {
		obj.image = obj.blowUpImage;
		obj.behaviours = [falling];
		obj.scale=0.5;
	    }, 500);
    }
}

function falling(obj) {
    obj.acc(0,0.5);
}

function ancorAt(point)
{
    return function(obj) {
	obj.pos[1] = obj.pos[1].add(point.sub(obj.pos[0]).mult(0.001));
    }
}