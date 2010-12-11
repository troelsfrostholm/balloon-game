levels[1].scripts = {
    lookAtLady : function() {
        Game.removeBehaviour(sideScrollAfterBalloon);
        SideScroll.scrollPoint = Level.balloonStandPosition.sub(new Point(canvas.width/2, canvas.height/2));
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
		    balloon.setImg("assets/boy/02boy-normal01.png");
		    Level.parameters.won = true;
		    unsetDialogue();
		}
	    }
	
    },
    returnNoCat : function() {
	setDialogue(Level.dialogue.returnNoCat);
	Level.dialogue.returnNoCat.animation.stop();
	Level.dialogue.returnNoCat.animation.currentFrame = Math.floor(Math.random()*Level.dialogue.returnNoCat.animation.frames.length);
    },
    catPickup : function(obj) {
	if(balloon.getBoundingBox().collidesWith(obj.getBoundingBox()))
	    {
		Level.parameters.inventory.push("cat");
		Game.hudElements.cat = Level.staticSprites.happy_cat;
		// The next line fucks up if it is removed. Why?
		Game.hudElements.cat.place(canvas.width*0.9, canvas.height*0.9);
	    }
    },
    initialize : function() {
	Level.Scripts.lookAtLady();
    }
}
