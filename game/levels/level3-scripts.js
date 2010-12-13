levels[2].scripts = {

    lookAtDaedalus : function()
    {
        Game.removeBehaviour(sideScrollAfterBalloon);
        SideScroll.scrollPoint = Level.balloonStandPosition.sub(new Point(canvas.width/2, canvas.height/2));
        setTimeout("Level.Scripts.lookAtBalloon()", 6000);
    },
    
    meetDaedalus : function()
    {
        if (Level.parameters.won == false)
        {
            if (Level.parameters.metDaedalus == true)
            {
                if (Level.parameters.foundIcarus == true)
                {
                    setDialogue(Level.dialogue.meetingDaedalusLaterWithIcarus);
                    Level.dialogue.meetingDaedalusLaterWithIcarus.animation.onEnd = function ()
                    {
                        balloon.setImg("assets/level3/boy/02boy-normal01.png");
                        Level.parameters.won = true;
                        delete Game.hudElements.icarus;
                        unsetDialogue();
                    }
                }
                else
                {
                    setDialogue(Level.dialogue.meetingDaedalusLaterWithoutIcarus);
                    Level.dialogue.meetingDaedalusLaterWithoutIcarus.animation.stop();
                    Level.dialogue.meetingDaedalusLaterWithoutIcarus.animation.currentFrame = Math.floor(Math.random()*Level.dialogue.meetingDaedalusLaterWithoutIcarus.animation.frames.length)
                }
            }
            else
            {
                if (Level.parameters.foundIcarus == true)
                {
                    setDialogue(Level.dialogue.meetingDaedalusFirstTimeWithIcarus);
                    Level.dialogue.meetingDaedalusFirstTimeWithIcarus.animation.onEnd = function ()
                    {
                        balloon.setImg("assets/level3/boy/02boy-normal01.png");
                        Level.parameters.won = true;
                        unsetDialogue();
                    }
                }
                else
                {
                    setDialogue(Level.dialogue.meetingDaedalusFirstTimeWithoutIcarus);
                    Level.dialogue.meetingDaedalusFirstTimeWithoutIcarus.animation.onEnd = function ()
                    {
                        Level.parameters.metDaedalus = true;
                        unsetDialogue();
                    }
                }
            }
        }
    },

    DaedalusShutUp : function()
    {
        unsetDialogue();
        buoyancy = -0.2;
    },

    lookAtBalloon : function()
    {
        SideScroll.scrollPoint = balloon.pos[0].sub(new Point(canvas.width/2, canvas.height/2));
        Game.addBehaviour(sideScrollAfterBalloon);
        balloon.place(Level.startPoint[0], Level.startPoint[1]);
    },

	initialize : function()
    {
        buoyancy = -0.3;
        Level.Scripts.lookAtDaedalus();
		Level.parameters.won=false;	
	},

    icarus : function(obj)
    {
        obj.pos[0].x = 1500 * Math.cos(Game.frame/75);
        obj.pos[0].y = 200 * Math.sin(Game.frame/37) - 1700;
        icaruspos = obj.pos[0];
        if(balloon.getBoundingBox().collidesWith(obj.getBoundingBox()))
        {
            obj.behaviours = [];
            Level.parameters.foundIcarus = true;
            Game.hudElements.icarus = obj.copy();
            Game.removeSprite(obj);
            Game.hudElements.icarus.animation.looping = true;
            Game.hudElements.icarus.place(canvas.width*0.89, canvas.height*0.88);
            Game.hudElements.icarus.scale = 0.3;
            buoyancy += 0.3;
        }
    }
}
