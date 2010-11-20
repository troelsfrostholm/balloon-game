function cursorBehaviour()
{
	var cursor = hudElements[5];
	cursorInWorld = scrollPoint.add(mousepos);
	cursorToBalloon = cursorInWorld.sub(balloon.pos[0]);

	cursor.place(mousepos.x,mousepos.y);	
		
	// Sin(angle) is only defined for -90 < angle < 90... what about the rest?
	if (cursorInWorld.y > balloon.pos[0].y)
	{
		cursor.angle[0] = cursorToBalloon.angle(vectorXaxis);
	}
	else
	{
		cursor.angle[0] = Math.PI + cursorToBalloon.angle2(vectorXaxis);
	}
	
};

