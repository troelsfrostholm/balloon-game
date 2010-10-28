var mousepos = null;

function mouseclick(point) {}
function mouserelease(point) {}
function mouseisdown(point) {}

//Converts a point from screen to world coordinates
function screenToWorldCoords(point)
{
    return point.add(scrollPoint);
}

//Fetches world coordinates from a mouse event
function getWorldCoords(evt)
{
    return screenToWorldCoords(new Point(evt.offsetX, evt.offsetY));
}

function begin()
{
    initdraw();
    canvas.onmousedown = function(evt) {
	downpos = getWorldCoords(evt);
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