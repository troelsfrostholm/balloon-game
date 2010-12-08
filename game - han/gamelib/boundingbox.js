function BoundingBox(x, y, width, height)
{
    this.x = x;
    this.y = y;
    this.width=width;
    this.height=height;

    this.collidesWith = function(bbox)
	{
		dx = bbox.x - this.x;
		dy = bbox.y - this.y;
		overlaps_on_x_axis = (dx > 0 && dx <= this.width) ||
							 (dx <=0 && -dx <= bbox.width)
		overlaps_on_y_axis = (dy > 0 && dy <= this.height) ||
							 (dy <=0 && -dy <= bbox.height)
							 
		if (overlaps_on_y_axis && overlaps_on_x_axis == true)
        {
            var x = Math.max(this.x,bbox.x);
            var y = Math.max(this.y,bbox.y);
            var w = Math.abs(Math.min(this.x + this.width,bbox.x + bbox.width) - x );
            var h = Math.abs(Math.min(this.y+this.height,bbox.y+bbox.height) - y );
            
            return ( new BoundingBox(x,y,w,h) );
        }
        else
        {
            return false;
        }
	}
	
	this.collidesWithPoint = function(point)
	{
		if (	( point.x > this.x ) &&
				( point.x < (this.x + this.width) ) &&
				( point.y > this.y ) &&
				( point.y < (this.y + this.height) )
			)
		{
			return true;
		}
		else
		{
			return false;
        }			
    }

    this.debugDraw = function(canvas)
	{
	    SideScroll.transform();
		canvas.strokeRect(this.x, this.y, this.width, this.height);
    }
}