Behaviours.collisionTest = function (obj) 
{
    if(balloon.getBoundingBox().collidesWith(obj.getBoundingBox())) {
	obj.behaviours = [createFollowBehaviour(balloon, new Point(20, 110))];
	obj.scale = 0.25;
	setTimeout(function () {Game.removeSprite(obj);}, 1500);
	score+=1;
	scoreElement.text = score + "";
	balloon.acc(0, obj.weight);
    }
};

Behaviours.dieWhenFarAway = function(obj) 
{
    if(obj.pos[0].squaredDistance(balloon.pos[0])>squaredMaxItemDistance) {
    	Game.removeSprite(obj);
    }
}

function impassableToBalloon(obj)
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
