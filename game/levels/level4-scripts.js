levels[3].scripts =
{
    initialize : function()
    {
        document.getElementById("level03").volume = 0;
        document.getElementById("level03").pause();
    	Level.Scripts.lookAtBalloonStand();
        buoyancy = -0.3;
    },
    
    lookAtBalloonStand: function()
    {
        Game.removeBehaviour(sideScrollAfterBalloon);
        SideScroll.scrollPoint = Level.balloonStandPosition.sub(new Point(canvas.width/2, canvas.height/2));
        setTimeout("Level.Scripts.lookAtBalloon()", 6000);
    },
    
    lookAtBalloon : function()
    {
        SideScroll.scrollPoint = balloon.pos[0].sub(new Point(canvas.width/2, canvas.height/2));
        Game.addBehaviour(sideScrollAfterBalloon);
        balloon.place(Level.startPoint[0], Level.startPoint[1]);
    },
    
    meetPirate : function()
    {
	    if(Level.parameters.pirateCount < 7) {
	        if(!Level.parameters.metBefore) {
		        setDialogue(Level.dialogue.meetFirstTime);
		        Level.dialogue.meetFirstTime.animation.onEnd = function() {
		            unsetDialogue();
		            Level.parameters.metBefore = true;
                    numPirates = new TextElement((7-Level.parameters.pirateCount)+" x", new Point(canvas.width*0.85, canvas.height*0.9));
                    Game.hudElements.numPirates = numPirates;
                    pirateIcon = new Sprite();
                    pirateIcon.setImg("assets/level4/static/sailor_icon.png");
                    pirateIcon.place(canvas.width*0.9, canvas.height*0.89);
                    Game.hudElements.pirateIcon = pirateIcon;
		        }
	        }
	        else {
		        Level.Scripts.returnWithoutSailors();
	        }
	    }
	    else if(!Level.parameters.won)
	    {
		    setDialogue(Level.dialogue.returnWithSailors);
		    Level.dialogue.returnWithSailors.animation.onEnd = function() {
		        balloon.setImg("assets/level4/boy/02boy-normal01.png");
		        Level.parameters.won = true;
		        unsetDialogue();
		    }
	    }
        else {
            
        }	
    },
    
    returnWithoutSailors : function()
    {
	    setDialogue(Level.dialogue.returnWithoutSailors);
	    Level.dialogue.returnWithoutSailors.animation.stop();
    	Level.dialogue.returnWithoutSailors.animation.currentFrame = Math.floor(Math.random()*Level.dialogue.returnWithoutSailors.animation.frames.length);
    },
    
    piratePickup : function(obj)
    {
	    if(balloon.getBoundingBox().collidesWith(obj.getBoundingBox()))
	    {
		    Level.parameters.pirateCount++;
            if(Game.hudElements.numPirates) {
                Game.hudElements.numPirates.text = (7-Level.parameters.pirateCount)+" x";
            }
	    }
    },
    
}
