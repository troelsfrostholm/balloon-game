var mousepos = new Point();

function mouseclick(point) {}
function mouserelease(point) {}
function mouseisdown(point) {}

//Fetches click point from mouse event
function clickPoint(evt)
{
    return new Point(evt.offsetX, evt.offsetY);
}
//Fetches world coordinates from a mouse event
function getWorldCoords(evt)
{
    return SideScroll.screenToWorldCoords(clickPoint(evt));
};

function bindMouseEvents()
{
    Game.canvas.onmousedown = function(evt) {
	downpos = getWorldCoords(evt);
	passClickToHudElements(evt);
	mouseclick(downpos);
	return false;
    }

    Game.canvas.onmousemove = function(evt) {
	if(downpos) downpos = getWorldCoords(evt);
	mousepos = clickPoint(evt);
	return false;
    }

    Game.canvas.onmouseup = function(evt) {
	mouserelease(getWorldCoords(evt));
	downpos = false;
	return false;
    }

    Game.behaviours.push(function() { if(downpos) mouseisdown(downpos); });
};

function passClickToHudElements(evt)
{
    cp = clickPoint(evt);
    bb = new BoundingBox(cp.x, cp.y, 1, 1);
    for(var i in Game.hudElements) {
	if(typeof(Game.hudElements[i].onclick) == "function") {
	    if(Game.hudElements[i].getBoundingBox().collidesWith(bb))
		Game.hudElements[i].onclick();
	}
    }
}