var mousepos = null;

function mouseclick(point) {}
function mouserelease(point) {}
function mouseisdown(point) {}

//Converts a point from screen to world coordinates
function screenToWorldCoords(point)
{
    return point.add(scrollPoint);
}

//Fetches click point from mouse event
function clickPoint(evt)
{
    return new Point(evt.offsetX, evt.offsetY);
}
//Fetches world coordinates from a mouse event
function getWorldCoords(evt)
{
    return screenToWorldCoords(clickPoint(evt));
};

function bindMouseEvents()
{
    canvas.onmousedown = function(evt) {
	downpos = getWorldCoords(evt);
	passClickToHudElements(evt);
	mouseclick(downpos);
    }

    canvas.onmousemove = function(evt) {
	if(downpos) downpos = getWorldCoords(evt);
    }

    canvas.onmouseup = function(evt) {
	mouserelease(getWorldCoords(evt));
	downpos = false;
    }

    behaviours.push(function() { if(downpos) mouseisdown(downpos); });
};

function passClickToHudElements(evt)
{
    cp = clickPoint(evt);
    bb = new BoundingBox(cp.x, cp.y, 1, 1);
    for(var i in hudElements) {
	if(typeof(hudElements[i].onclick) == "function") {
	    if(hudElements[i].getBoundingBox().collidesWith(bb))
		hudElements[i].onclick();
	}
    }
}