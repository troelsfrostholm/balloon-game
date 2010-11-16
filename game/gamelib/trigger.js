function Trigger(object, bbox, onEnter, onInside, onExit)
{
    this.object = object;
    this.bbox = bbox;    
    this.onEnter = onEnter;
    this.onExit = onExit;
    this.onInside = onInside;
    this.alreadyInside = false;
};

Trigger.prototype.evaluate = function()
{
    insideNow = this.bbox.collidesWith(this.object.getBoundingBox());
    if(!this.alreadyInside && insideNow) this.onEnter();
    if(this.alreadyInside && !insideNow) this.onExit();
    if(insideNow) this.onInside();
    this.alreadyInside = insideNow;
};