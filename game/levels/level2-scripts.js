levels[1].scripts = {
    lookAtLady : function() {
        Game.removeBehaviour(sideScrollAfterBalloon);
        SideScroll.scrollPoint = Level.balloonStandPosition;//.sub(new Point(canvas.width/2, canvas.height/2));
        setTimeout("Level.Scripts.lookAtBalloon()", 6000);
    },
    lookAtBalloon : function() {
        SideScroll.scrollPoint = balloon.pos[0].sub(new Point(canvas.width/2, canvas.height/2));
        Game.addBehaviour(sideScrollAfterBalloon);
        balloon.place(Level.startPoint[0], Level.startPoint[1]);
    },
    meetLady : function() {
	if(Level.parameters.inventory.indexOf("cat") == -1) {
	    if(!Level.parameters.metLadyBefore) {
		setDialogue(Level.dialogue.metLadyFirstTime);
		Level.dialogue.metLadyFirstTime.animation.onEnd = function() {
		    unsetDialogue();
		    Level.parameters.metLadyBefore = true;
		}
	    }
	    else {
		Level.Scripts.returnNoCat();
	    }
	}
	else if(!Level.parameters.won)
	    {
		setDialogue(Level.dialogue.returnWithCat);
		Level.dialogue.returnWithCat.animation.onEnd = function() {
		    balloon.setImg("assets/level2/boy/02boy-normal01.png");
		    Level.parameters.won = true;
            delete Game.hudElements.cat;
		    unsetDialogue();
		}
	    }
	
    },
    returnNoCat : function() {
	setDialogue(Level.dialogue.returnNoCat);
	Level.dialogue.returnNoCat.animation.stop();
	Level.dialogue.returnNoCat.animation.currentFrame = Math.floor(Math.random()*Level.dialogue.returnNoCat.animation.frames.length);
    },
    
    catPickup : function(obj)
    {
	if(balloon.getBoundingBox().collidesWith(obj.getBoundingBox()))
	    {
            obj.behaviours = [];
            Level.parameters.inventory.push("cat");
            Game.hudElements.cat = obj.copy();
            Game.removeSprite(obj);
            Game.hudElements.cat.place(canvas.width*0.9, canvas.height*0.9);
            spawnZones.big_island.frequency = 0;
	    }
    },
    
    fadeToBossMusic : function()
    {
	    var center = new Point(1170 , 1280);
	    var distance = Math.sqrt( center.squaredDistance(balloon.pos[0]) );
	    var radius = 1000;
	    if (distance < radius)
		{
		    document.getElementById("level02_cat").volume = 1 - (distance / radius);
            document.getElementById("level02").volume = (distance / radius);
		}
        
    },
    
    initialize : function()
    {
        Game.behaviours.push(Level.Scripts.fadeToBossMusic);
        Level.Scripts.lookAtLady();
        buoyancy = -0.3;
        document.getElementById("level01_end").pause();
        document.getElementById("level02").volume = 1;
        document.getElementById("level02").play();
        document.getElementById("level02_cat").volume = 0;
        document.getElementById("level02_cat").play();
    }
    
}
