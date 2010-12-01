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

Behaviours.impassableToBalloon = function(obj)
{
	// Only do something if there is a collision.
	if (obj.getBoundingBox().collidesWith( balloon.getBoundingBox() ))
	{
		var bw = balloon.getBoundingBox().width/2;
		var bh =  balloon.getBoundingBox().height/2;
		var ow = obj.getBoundingBox().width/2;
		var oh = obj.getBoundingBox().height/2;

		balloonTopLeft = new Point(balloon.pos[0].x - bw , balloon.pos[0].y - bh);
		balloonTopRight = new Point(balloon.pos[0].x + bw , balloon.pos[0].y - bh);
		balloonBottomLeft = new Point(balloon.pos[0].x - bw , balloon.pos[0].y + bh);
		balloonBottomRight = new Point(balloon.pos[0].x + bw , balloon.pos[0].y + bh);
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
							balloon.pos[0].x = objTopLeft.x - bw ;

							if ( balloon.pos[1].x > 0)
								balloon.pos[1].x *= -1;
						}
						// Bounce off TOP
						else
						{
							balloon.pos[0].y = objTopLeft.y - bh ;

							if ( balloon.pos[1].y > 0)
								balloon.pos[1].y *= -1;
						}
					}
					// Collission in object's RIGHT half
					else
					{
						// Bounce off LEFT SIDE
						if (corners[i].angle(obj.pos[0]) > objTopRight.angle(obj.pos[0]))					
						{
							balloon.pos[0].x = objTopRight.x + bw ;

							if ( balloon.pos[1].x < 0)
								balloon.pos[1].x *= -1;
						}
						else
						// Bounce off TOP
						{
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
							balloon.pos[0].x = objBottomLeft.x - bw ;

							if ( balloon.pos[1].x > 0)
								balloon.pos[1].x *= -1;
						}
						else
						// Bounce off BOTTOM
						{
							balloon.pos[0].y = objBottomLeft.y + bh ;

							if ( balloon.pos[1].y < 0)
								balloon.pos[1].y *= -1;
						}
					}
					else
					{
						// Bounce off RIGHT SIDE
						if (corners[i].angle(obj.pos[0]) > objBottomRight.angle(obj.pos[0]))					
						{
							balloon.pos[0].x = objBottomRight.x + bw ;

							if ( balloon.pos[1].x < 0)
								balloon.pos[1].x *= -1;
						}
						else
						// Bounce off BOTTOM
						{
							balloon.pos[0].y = objBottomLeft.y + bh ;

							if ( balloon.pos[1].y > 0)
								balloon.pos[1].y *= -1;
						}
					}
				}
				break;
			}
		}		
	}
}
