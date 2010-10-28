var mousepos = null;

function mouseclick(point) {}
function mouserelease(point) {}
function mouseisdown(point) {}

function begin()
{
    initdraw();
    canvas.onmousedown = function(evt) {
	downpos = new Point(evt.offsetX, evt.offsetY);
	mouseclick(new Point(downpos));
    }

    canvas.onmousemove = function(evt) {
	if(downpos) downpos = new Point(evt.offsetX, evt.offsetY);
    }

    canvas.onmouseup = function(evt) {
	mouserelease(new Point(evt.offsetX, evt.offsetY));
	downpos = false;
    }

    behaviours.push(function() { if(downpos) mouseisdown(downpos); });
};