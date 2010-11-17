function BoundingBox(x, y, width, height)
{
    this.x = x;
    this.y = y;
    this.width=width;
    this.height=height;

    this.collidesWith = function(bbox) {
	dx = bbox.x - this.x;
	dy = bbox.y - this.y;
	overlaps_on_x_axis = (dx > 0 && dx <= this.width) ||
	                     (dx <=0 && -dx <= bbox.width)
	overlaps_on_y_axis = (dy > 0 && dy <= this.height) ||
	                     (dy <=0 && -dy <= bbox.height)
	return overlaps_on_x_axis && overlaps_on_y_axis;
    }

    this.debugDraw = function(canvas) {
	sideScrollTransform();
	canvas.strokeRect(this.x, this.y, this.width, this.height);
    }
}