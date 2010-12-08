Level.Scripts = {
	panToGirlWhenAboveHeight : function()
	{
	    if(balloon.pos[0].y < Level.parameters.panHeight) {
		console.log("Above!!");
		Game.removeBehaviour(sideScrollAfterBalloon);
		Game.addBehaviour(Level.Scripts.sideScrollAfterGirl);
		Game.addBehaviour(hoverBalloon);
		setDialogue(Level.dialogue.intro);
		setTimeout(function() {
			Game.removeBehaviour(Level.Scripts.sideScrollAfterGirl);
			Game.removeBehaviour(hoverBalloon);
			Game.addBehaviour(sideScrollAfterBalloon);
			unsetDialogue();
		    }, 10000);
		Game.removeBehaviour(Level.Scripts.panToGirlWhenAboveHeight);
	    }
	}, 
	sideScrollAfterGirl : function()
	{
	    SideScroll.followPoint(girlPosition);
	},
	girlSpeak : function(session)
	{
	},
	meetGirl : function()
	{
	},
	panToBalloon : function()
	{
	}, 
	winCondition : function()
	{
	    
	},
	fadeToCrazyAssMusic : function()
	{
	    var center = new Point(200 , -700);
	    var distance = Math.sqrt( center.squaredDistance(balloon.pos[0]) );
	    var radius = 600;
	    if (distance < radius)
		{
		    document.getElementById("circus").volume = 1 - (distance / radius);
		    document.getElementById("audio").volume = (distance / radius);
		}
	},
	initialize : function() {
	Game.behaviours.push(Level.Scripts.fadeToCrazyAssMusic);
	Game.behaviours.push(Level.Scripts.panToGirlWhenAboveHeight);

	    //	    Game.behaviours.push(panToGirl...);
	    //	    Game.winCondition = Level.Scrits.winCondition;
	}
}