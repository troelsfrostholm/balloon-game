levels[0].scripts = {
	panToGirlWhenAboveHeight : function()
	{
	    if(balloon.pos[0].y < Level.parameters.panHeight) {
		console.log("Above!!");
		Game.removeBehaviour(sideScrollAfterBalloon);
		Game.addBehaviour(Level.Scripts.sideScrollAfterGirl);
		Game.addBehaviour(hoverBalloon);
		setDialogue(Level.dialogue.intro);
		Level.dialogue.intro.animation.onEnd = function()
        {
			Game.removeBehaviour(Level.Scripts.sideScrollAfterGirl);
			Game.removeBehaviour(hoverBalloon);
			Game.addBehaviour(sideScrollAfterBalloon);
			unsetDialogue();
		};
		Game.removeBehaviour(Level.Scripts.panToGirlWhenAboveHeight);
	    }
	}, 
	sideScrollAfterGirl : function()
	{
	    SideScroll.followPoint(girlPosition);
	},
	meetGirl : function()
	{
	    if(Level.parameters.inventory.indexOf("pony") == -1) {
		if(!Level.parameters.hasMetGirl) {
		    setDialogue(Level.dialogue.meetGirlFirstTime);
		    Level.dialogue.meetGirlFirstTime.animation.onEnd = function() {
			Level.parameters.hasMetGirl = true;
			unsetDialogue();
			document.getElementById("level01_start").pause(); 
			document.getElementById("level01").play();
		    }
		}
		else {
		    setDialogue(Level.dialogue.meetGirlAgain);
		    Level.dialogue.meetGirlAgain.animation.stop();
		    Level.dialogue.meetGirlAgain.animation.currentFrame = Math.floor(Math.random()*Level.dialogue.meetGirlAgain.animation.frames.length)
		}
	    }
	    else if(!Level.parameters.won) {
		setDialogue(Level.dialogue.giveGirlPony);
		Level.dialogue.giveGirlPony.animation.onEnd = function() {
		    balloon.setImg("assets/boy/02boy-normal01.png");
		    Level.parameters.won = true;
		    unsetDialogue();
		}

	    }
	},
	fadeToCrazyAssMusic : function()
	{
	    var center = new Point(200 , -700);
	    var distance = Math.sqrt( center.squaredDistance(balloon.pos[0]) );
	    var radius = 900;
	    if (distance < radius)
		{
		    document.getElementById("circus").volume = 1 - (distance / radius);
		    document.getElementById("level01").volume = (distance / radius);
		}
	},
	ponyPickup : function(obj) {
	  if(balloon.getBoundingBox().collidesWith(obj.getBoundingBox())) {
	      Level.parameters.inventory.push("pony");
	      Game.hudElements.pony = obj;
	      obj.place(canvas.width*0.9, canvas.height*0.9);
	  }
    },
	initialize : function() {
	Game.behaviours.push(Level.Scripts.fadeToCrazyAssMusic);
	Game.behaviours.push(Level.Scripts.panToGirlWhenAboveHeight);
	document.getElementById("circus").play();
	document.getElementById("level01_start").play();
	    //	    Game.behaviours.push(panToGirl...);
	    //	    Game.winCondition = Level.Scrits.winCondition;
    }
}