//vars for rotating cursor
//
// *** SHOULD THESE GO SOMEWHERE ELSE? ***
//
var vectorXaxis = new Point(-1,0);
var vectorYaxis = new Point(1,1);
var cursorInWorld = new Point();
var cursorToBalloon = new Point();
var cursor;

Behaviours.rotateToFaceBalloon = function (obj)
{
	// select cursor sprite
	var cursor = hudElements[5];
	
	// Cursor's onscreen coordinates -> world coordinates
	cursorInWorld = scrollPoint.add(mousepos);
	
	// Vector from cursor position to balloon
	cursorToBalloon = cursorInWorld.sub(balloon.pos[0]);

	// Rotate cursor sprite
	if (cursorInWorld.y > balloon.pos[0].y)
	{
		cursor.angle[0] = cursorToBalloon.angle(vectorXaxis);
	}
	else
	{
		cursor.angle[0] = cursorToBalloon.angle2(vectorXaxis) + Math.PI;
	}

	// Place cursor sprite at mouse coordinates
	cursor.place(mousepos.x,mousepos.y);

};

