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