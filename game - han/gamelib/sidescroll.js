SideScroll = {

    scrollPoint : new Point(0,0),
    levelBounds : new BoundingBox(),

    transform : function()
    {
	Game.ctx.setTransform(1, 0, 0, 1, -SideScroll.scrollPoint.x, -SideScroll.scrollPoint.y);
    },

    followSprite : function(sprite)
    {
	this.followPoint(sprite.pos[0]);
    },

    followPoint : function(point)
    {
	screenCenter = new Point( SideScroll.scrollPoint.x + Game.canvas.width/2, SideScroll.scrollPoint.y + Game.canvas.height/2 + translationFromSpriteCenterToBalloonCenter);
        SideScroll.scrollPoint = SideScroll.scrollPoint.add(point.sub(screenCenter).mult(sideScrollSpeed));
        if(SideScroll.scrollPoint.y<Level.bounds.y) 
	    SideScroll.scrollPoint.y=Level.bounds.y;
        if(SideScroll.scrollPoint.y+canvas.height>Level.bounds.y+Level.bounds.height) 
	    SideScroll.scrollPoint.y=Level.bounds.y+
		Level.bounds.height-
		Game.canvas.height;
    },

//Converts a point from screen to world coordinates
    screenToWorldCoords : function(point)
    {
	return point.add(SideScroll.scrollPoint);
    },

    wrapping : function()
    {
	p = SideScroll.scrollPoint;
	b = Level.bounds;
	min = b.x-Game.canvas.width;
	max = b.x+b.width;
	t = 0;
	//	console.log("p.x : " + p.x + ", min : " + min + ", max : " + max);
	if(p.x<min)  { console.log("left"); t=b.width; }
	if(p.x>max)  { console.log("right"); t=-b.width; }
	SideScroll.scrollPoint = SideScroll.scrollPoint.add(new Point(t, 0));
	Game.translateEverything(new Point(t, 0));
	Level.background.pos[0] = Level.background.pos[0].add(new Point(-t, 0));
    },

    enableWrap : function()
    {
	Game.behaviours.push(SideScroll.wrapping);
    }
}