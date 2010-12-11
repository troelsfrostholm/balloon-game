levels[2].scripts = {

    lookAtDaedalus : function()
    {
        Game.removeBehaviour(sideScrollAfterBalloon);
        SideScroll.scrollPoint = Level.balloonStandPosition.sub(new Point(canvas.width/2, canvas.height/2));
        setTimeout("Level.Scripts.lookAtBalloon()", 6000);
    },
    
    meetDaedalus : function()
    {
        console.log("Godaw fætter, mit navn er Daedalus.");
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

    daedalusSpeak :  function()
    {
        console.log("You have met daedalus.");
    },

	initialize : function()
    {
//      Level.Scripts.lookAtDaedalus();
		Level.parameters.won=true;	
	}
}
