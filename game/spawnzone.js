function SpawnZone(bbox, objects, spawnsPerSecond)
{
    this.boundingBox = bbox;
    this.spawnObjects = objects;
    this.spawnsPerSecond = spawnsPerSecond;
    
    this.spawn = function(spawnPoint)
	{
	    obj = pickAtRandom(this.spawnObjects).copy();
	    obj.pos[0] = spawnPoint;
	    obj.behave(collisionTest);
	    obj.behave(dieWhenFarAway);
	    return obj;
	};

    this.inZone = function()
	{
	    return this.boundingBox.collidesWith(balloon.getBoundingBox());
	}
};