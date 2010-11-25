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
	// if balloon collides with object
	if (obj.getBoundingBox().collidesWith(balloon.getBoundingBox()))
	{
		// balloon BELOW object
		if ( (balloon.pos[0].y) > (obj.pos[0].y + obj.image.height/2) )
		{
			balloon.pos[1].y *= -0.95;
		}
		// balloon RIGHT of object
		else if ( balloon.pos[0].x > (obj.pos[0].x + obj.image.width/2) )
		{
			balloon.pos[1].x *= -0.95;
		}
		// balloon LEFT of object
		else if ( balloon.pos[0].x < (obj.pos[0].x - obj.image.width/2) )
		{
			balloon.pos[1].x *= -0.95;
		}
	}
}
