Behaviours.rotateToFaceBalloon = function (obj)
{	
	// Cursor's onscreen coordinates -> world coordinates
	cursorInWorld = SideScroll.scrollPoint.add(mousepos);
    
	// Vector from cursor position to balloon
	cursorToBalloon = cursorInWorld.sub( new Point( balloon.pos[0].x , balloon.pos[0].y - translationFromSpriteCenterToBalloonCenter ) );

	// Rotate cursor sprite
	if (cursorInWorld.y > balloon.pos[0].y - translationFromSpriteCenterToBalloonCenter)
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
	// Place sprite at mouse coordinates, move to fit pointer.
	obj.place(mousepos.x + 5,mousepos.y + obj.image.height/2 - 10);
};

Behaviours.followMouseCenter = function(obj)
{
	// Place sprite at mouse coordinates
	obj.place(mousepos.x,mousepos.y);
};