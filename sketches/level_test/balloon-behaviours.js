function impassable(obj)
{    
	// Only do something if there is a collision.
	if (obj.getBoundingBox().collidesWith( balloon.getBoundingBox() ))
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
/*
function impassable(obj)
{
    
	// Only do something if there is a collision.
	if (obj.getBoundingBox().collidesWith( balloon.getBoundingBox() ))
	{
        var bX = balloon.pos[0].x;
        var bY = balloon.pos[0].y;
		var bw = balloon.getBoundingBox().width/2;
		var bh =  balloon.getBoundingBox().height/2;
		var ow = obj.getBoundingBox().width/2;
		var oh = obj.getBoundingBox().height/2;

		balloonTopLeft = new Point(bX - bw , bY - bh);
		balloonTopRight = new Point(bX + bw , bY - bh);
		balloonBottomLeft = new Point(bX - bw , bY + bh);
		balloonBottomRight = new Point(bX + bw , bY + bh);
		objTopLeft = new Point(obj.pos[0].x - ow, obj.pos[0].y - oh);
		objTopRight = new Point(obj.pos[0].x + ow, obj.pos[0].y - oh);
		objBottomLeft = new Point(obj.pos[0].x - ow, obj.pos[0].y + oh);
		objBottomRight = new Point(obj.pos[0].x + ow, obj.pos[0].y + oh);
		
		corners = new Array(balloonTopLeft, balloonTopRight, balloonBottomLeft, balloonBottomRight);

		// One of the balloon's corners will always collide if a collision is detected.
		for (var i in corners)
		{
			// Check for collission with current corner
			if ( obj.getBoundingBox().collidesWithPoint(corners[i]) == true)
			{
				// If collission is in object's UPPER half
				if (corners[i].y < obj.pos[0].y)
				{
					// Collission in object's LEFT half
					if (corners[i].x < obj.pos[0].x)
					{
						// Bounce off LEFT SIDE
						if (corners[i].angle2(obj.pos[0]) > objTopLeft.angle2(obj.pos[0]))					
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
						// Bounce off RIGHT SIDE
						if ( corners[i].angle(obj.pos[0]) > objTopRight.angle(obj.pos[0]) )					
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
						// Bounce off LEFT SIDE
						if (corners[i].angle(obj.pos[0]) < objBottomLeft.angle(obj.pos[0]))					
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
						// Bounce off RIGHT SIDE
						if (corners[i].angle(obj.pos[0]) < objBottomRight.angle(obj.pos[0]))					
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