Behaviours.collisionTest = function (obj) 
{
    if(balloon.getBoundingBox().collidesWith(obj.getBoundingBox())) {
	obj.behaviours = [createFollowBehaviour(balloon, new Point(20, 110))];
	obj.scale = 0.25;
	setTimeout(function () {Game.removeSprite(obj);}, 1500);
	score+=obj.weight;
	scoreElement.text = score + "";
//	balloon.acc(0, obj.weight);
    buoyancy += obj.weight;
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
                        balloon.pos[1].y *= -.1;
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
                        balloon.pos[1].y *= -.1;
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

Behaviours.hover = function(obj)
{
    obj.pos[0].y -= 1.5 * Math.sin((new Date().getTime() ) / 1000)
}
