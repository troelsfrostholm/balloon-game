levels[0].scripts = {

    lookAtDaedalus : function()
    {
        Game.removeBehaviour(sideScrollAfterBalloon);
        SideScroll.scrollPoint = Level.balloonStandPosition.sub(new Point(canvas.width/2, canvas.height/2));
        setTimeout("Level.Scripts.lookAtBalloon()", 6000);
    },
    
    meetDaedalus : function()
    {
        if (Level.parameters.metDaedalus == true)
        {
            if (Level.parameters.foundIcarus == true)
            {
            }
            else
            {
            }
        }
        else
        {
            if (Level.parameters.foundIcarus == true)
            {
            }
            else
            {
                setDialogue(Level.dialogue.meetingDaedalusWithoutIcarus);
                Level.dialogue.meetingDaedalusWithoutIcarus.onEnd = function ()
                {
                    Level.parameters.metDaedalus = true;
                    unsetDialogue();
                }
            }
        }
    },

    DaedalusShutUp : function()
    {
        
        console.log("Vi ses, fætter!");
    },

    lookAtBalloon : function()
    {
        SideScroll.scrollPoint = balloon.pos[0].sub(new Point(canvas.width/2, canvas.height/2));
        Game.addBehaviour(sideScrollAfterBalloon);
        balloon.place(Level.startPoint[0], Level.startPoint[1]);
    },

	initialize : function()
    {
        Level.Scripts.lookAtDaedalus();
		Level.parameters.won=true;	
	}
}
