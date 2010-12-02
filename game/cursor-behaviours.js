Behaviours.rotateToFaceBalloon = function (obj)
{	
	// Cursor's onscreen coordinates -> world coordinates
	cursorInWorld = SideScroll.scrollPoint.add(mousepos);

	// Vector from cursor position to balloon
	cursorToBalloon = cursorInWorld.sub(balloon.pos[0]);

	// Rotate cursor sprite
	if (cursorInWorld.y > balloon.pos[0].y)
	{
		obj.angle[0] = cursorToBalloon.angle(vectorXaxis);
	}
	else
	{
		obj.angle[0] = cursorToBalloon.angle2(vectorXaxis) + Math.PI;
	}

};

Behaviours.followMouse = function(obj)
{
	// Place sprite at mouse coordinates
	obj.place(mousepos.x,mousepos.y);
};