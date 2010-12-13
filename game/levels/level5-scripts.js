levels[4].scripts = {
    lookAtBalloonStand: function() {
        Game.removeBehaviour(sideScrollAfterBalloon);
        SideScroll.scrollPoint = Level.balloonStandPosition.sub(new Point(canvas.width/2, canvas.height/2));
        setTimeout("Level.Scripts.lookAtBalloon()", 6000);
    },
    lookAtBalloon : function() {
        SideScroll.scrollPoint = balloon.pos[0].sub(new Point(canvas.width/2, canvas.height/2));
        Game.addBehaviour(sideScrollAfterBalloon);
        balloon.place(Level.startPoint[0], Level.startPoint[1]);
    },
    meetRobot : function() {
	    if(Level.parameters.guestCount < 12) {
	        if(!Level.parameters.metBefore) {
		        setDialogue(Level.dialogue.meetFirstTime);
		        Level.dialogue.meetFirstTime.animation.onEnd = function() {
		            unsetDialogue();
		            Level.parameters.metBefore = true;
                    numGuests = new TextElement((12-Level.parameters.guestCount)+" x", new Point(canvas.width*0.83, canvas.height*0.9));
                    Game.hudElements.numGuests = numGuests;
                    pirateIcon = new Sprite();
                    pirateIcon.setImg("assets/level5/static/tourist_icon.png");
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
		        Level.parameters.won = true;
		        unsetDialogue();
                ending();
		    }
	    }
        else {
            
        }	
    },
    returnWithoutSailors : function() {
	    setDialogue(Level.dialogue.returnWithoutSailors);
	    Level.dialogue.returnWithoutSailors.animation.stop();
    	Level.dialogue.returnWithoutSailors.animation.currentFrame = Math.floor(Math.random()*Level.dialogue.returnWithoutSailors.animation.frames.length);
    },
    touristPickup : function(obj) {
	    if(balloon.getBoundingBox().collidesWith(obj.getBoundingBox()))
	    {
		    Level.parameters.guestCount++;
            if(Game.hudElements.numGuests) {
                Game.hudElements.numGuests.text = (12-Level.parameters.guestCount)+" x";
            }
	    }
    },
    initialize : function() {
    	Level.Scripts.lookAtBalloonStand();
    }
}
