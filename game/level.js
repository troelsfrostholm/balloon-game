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
	console.log(leveldata);
	Level.Scripts = leveldata.scripts;
	Level.startPoint = leveldata.startPoint;
	Level.background = this.loadBackground(leveldata.background);
	Level.bounds = this.loadBounds(leveldata.bounds);
	Level.staticSprites = this.loadStaticSprites(leveldata.staticSprites);
	Level.spawnableSprites = this.loadSprites(leveldata.spawnableSprites);
	Level.dialogue = this.loadSprites(leveldata.dialogue);
	Level.spawnZones = this.loadSpawnZones(leveldata.spawnZones);
	Level.triggers = this.loadTriggers(leveldata.triggers);
	Level.panHeight = leveldata.panHeight;
	Level.parameters = this.loadParameters(leveldata.parameters);
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
	this.extractImageFilesFromSprites(temp, leveldata.spawnableSprites);
	this.extractImageFilesFromSprites(temp, leveldata.staticSprites);
	this.extractImageFilesFromSprites(temp, leveldata.dialogue);

	for(i in temp) {
	    images.push(temp[i]);
	}
	return images
    },

    extractImageFilesFromSprites : function(destObj, sprites)
    {
	for(var i in sprites) {
	    destObj[sprites[i].image] = sprites[i].image;
	    if(sprites[i].animation && sprites[i].animation.frames) {
		for(var j=0; j<sprites[i].animation.frames.length; j++) {
		    destObj[sprites[i].animation.frames[j][0]] = sprites[i].animation.frames[j][0];
		}
	    }
	}	
    },

    loadSprites : function(spritesData)
    {
	return mapObject(LevelLoader.loadSprite, spritesData);
    },

    loadStaticSprites : function(spritesData)
    {
	return mapObject(LevelLoader.loadStaticSprite, spritesData);
    },

    loadSprite : function(spriteData)
    {
	sprite = new Sprite();
	if(spriteData.image)
    {
	    sprite.image = Level.images[spriteData.image];
	    sprite.animation = new Animation([new Frame(sprite.image, 0)]);
	}
	if(spriteData.animation && spriteData.animation.frames)
    {
	    var frames = spriteData.animation.frames.map(LevelLoader.loadFrame);
	    sprite.animation = new Animation(frames);
	    sprite.animation.looping = spriteData.animation.looping;
	    sprite.animation.playing = true;
	}

	if(spriteData.position) sprite.place(spriteData.position[0], spriteData.position[1]);
	if(spriteData.velocity) sprite.move(spriteData.velocity[0], spriteData.velocity[1]);
	if(spriteData.acceleration) sprite.acc(spriteData.acceleration[0], spriteData.acceleration[1]);
	if(spriteData.spin) sprite.spin(spriteData.spin);
	if(spriteData.behaviours) sprite.behaviours = spriteData.behaviours.map(LevelLoader.loadBehaviour);
	if(spriteData.weight) sprite.weight = spriteData.weight;
	if(spriteData.lotto) sprite.lotto = spriteData.lotto;
	return sprite;
    },

    loadStaticSprite : function(spriteData)
    {
    
	sprite = new Sprite();

    sprite.staticSprite = true;
    
	if(spriteData.image)
    {
	    sprite.image = Level.images[spriteData.image];
	    sprite.animation = new Animation([new Frame(sprite.image, 0)]);
	}
	if(spriteData.animation && spriteData.animation.frames)
    {
	    var frames = spriteData.animation.frames.map(LevelLoader.loadFrame);
	    sprite.animation = new Animation(frames);
	    sprite.animation.looping = spriteData.animation.looping;
	    sprite.animation.playing = true;
	}

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
	if(Behaviours[behaviour] != undefined)
	    return Behaviours[behaviour];

	if(Level.Scripts[behaviour] != undefined)
	    return Level.Scripts[behaviour];
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
    },

    loadFrame : function(frameData)
    {
	return new Frame(Level.images[frameData[0]], frameData[1]);
    }

};

LevelLoader.loadTriggers = function(triggerData)
{
    var triggers = {};
    var bbox, enter, inside, leave, bounds, object;
    for(var i in triggerData) {
	bounds = triggerData[i].bounds;
	bbox = new BoundingBox(bounds[0], bounds[1], bounds[2], bounds[3]);
	enter = LevelLoader.extractFunction(triggerData[i].onEnter);
	inside = LevelLoader.extractFunction(triggerData[i].onInside);
	leave = LevelLoader.extractFunction(triggerData[i].onLeave);
	object = LevelLoader.extractFunction(triggerData[i].object);
	triggers[i] = new Trigger(object, bbox, enter, inside, leave);
    }
    return triggers;
};

//Looks up the function object from a text string
//Eks. extractFunction("Game.sprites") == window.Game.sprites
LevelLoader.extractFunction = function(string)
{
    var obj = window;
    var tokenized = string.split(".");
    for(var i in tokenized) {
	obj = obj[tokenized[i]];
    }
    return obj;
};

LevelLoader.loadParameters = function(parameterData)
{
    return shallowCopy(parameterData);
}