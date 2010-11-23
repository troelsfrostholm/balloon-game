var Level = {
    bounds : new BoundingBox(),
    images : {},
    staticSprites : {},
    spawnableSprites : {},
    spawnZones : {},
};

LevelLoader = {

    /*
      leveldata : Object
      continuation : function
      Loads a level from leveldata. When it is done, 
      continuation is called back with the loaded level as parameter. 
    */
    load : function(leveldata, continuation)
    {
	LevelLoader.images = this.loadImages(this.extractImageFiles(leveldata),
					     function () {
						 LevelLoader.continueLoadingLevel(leveldata, continuation);
					     });
    },
    
    continueLoadingLevel : function(leveldata, continuation)
    {
	Level.startPoint = leveldata.startPoint;
	Level.background = this.loadBackground(leveldata.background);
	Level.bounds = this.loadBounds(leveldata.bounds);
	Level.staticSprites = this.loadSprites(leveldata.staticSprites);
	Level.spawnableSprites = this.loadSprites(leveldata.spawnableSprites);
	Level.spawnZones = this.loadSpawnZones(leveldata.spawnZones);
	Level.balloonStand = new BoundingBox(leveldata.balloonStand[0],
					     leveldata.balloonStand[1],
					     leveldata.balloonStand[2],
					     leveldata.balloonStand[3]);
	continuation(Level);
    },
    
    /*
      imageFiles : Array of string file names
      continuation : 0-ary function
      Loads images into Level.image
      Loading happens assyncroniously
      Calls continuation back without arguments, when last image has loaded.
    */
    
    loadImages : function(imageFiles, continuation)
    {
	this.imagesToGo = imageFiles.length;
	loadfunc = function(file) {
	    var img = new Image();
	    done = function() {
		if(--LevelLoader.imagesToGo <= 0)
		    if(typeof(continuation) == "function")
			continuation();
	    }
	    img.onload = function () {
		Level.images[file] = img;
		done();
	    }
	    img.onerror = function () {
		console.log("Warning: Error loading image "+file);
		done();
	    }
	    img.onabort = function () {
		console.log("Warning: Loading of image "+file+" aborted");
		done();
	    }
	    img.src = file;
	}
	imageFiles.map(loadfunc);
    },
    
    /*
      Extracts file names for all images in level. 
      returns : array of strings without duplications
    */
    extractImageFiles : function(leveldata)
    {
	var images = [];
	var temp = {}
	temp[leveldata.background] = leveldata.background;
	var sprites = leveldata.spawnableSprites;
	for(var i in sprites) {
	    temp[sprites[i].image] = sprites[i].image;
	}
	var moresprites = leveldata.staticSprites;
	for(var i in moresprites) {
	    temp[moresprites[i].image] = moresprites[i].image;
	}
	for(i in temp) {
	    images.push(temp[i]);
	}	
	return images
    },

    loadSprites : function(spritesData)
    {
	return mapObject(LevelLoader.loadSprite, spritesData);
    },

    loadSprite : function(spriteData)
    {
	sprite = new Sprite();
	if(spriteData.image) sprite.image = Level.images[spriteData.image];
	if(spriteData.position) sprite.place(spriteData.position[0], spriteData.position[1]);
	if(spriteData.velocity) sprite.move(spriteData.velocity[0], spriteData.velocity[1]);
	if(spriteData.acceleration) sprite.acc(spriteData.acceleration[0], spriteData.acceleration[1]);
	if(spriteData.spin) sprite.spin(spriteData.spin);
	if(spriteData.behaviours) sprite.behaviours = spriteData.behaviours.map(LevelLoader.loadBehaviour);
	if(spriteData.weight) sprite.weight = spriteData.weight;
	return sprite;
    },

    loadBehaviour : function(behaviour)
    {
	return Behaviours[behaviour];
    },

    loadSpawnZones : function(spawnZoneData)
    {
	return mapObject(LevelLoader.loadSpawnZone, spawnZoneData);
    },

    loadSpawnZone : function(spawnZoneData)
    {
	bounds = spawnZoneData.bounds;
	sprites =  spawnZoneData.items.map(LevelLoader.lookupSprite);
	bbox = new BoundingBox(bounds[0], bounds[1], bounds[2], bounds[3]);
	spawnZone = new SpawnZone(bbox, sprites,spawnZoneData.frequency);
	return spawnZone;
    },

    lookupSprite : function(spriteName)
    {
	return Level.spawnableSprites[spriteName];
    },

    loadBounds : function(boundsData)
    {
	return new BoundingBox(boundsData[0], boundsData[1], boundsData[2], boundsData[3]);
    },

    loadBackground : function(backgroundData)
    {
	var background = new Sprite();
	background.setImg(backgroundData);
	background.scale = 1;
	background.place(0, 0);
	return background;
    }

};