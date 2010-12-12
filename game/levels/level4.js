levels[3] = {
    background : "assets/level4/background.jpg",
    bounds : [-1500, -2100, 3000, 4200],
    startPoint : [592, 1787],
    balloonStandPosition : [-1013, 1674],

    parameters : {
        pirateCount : 0
    },

    dialogue : {
	    meetFirstTime : {
	        image : "assets/level4/dialogue/02meetingwithoutsailors/01.png",
	        animation : {
		        frames : [["assets/level4/dialogue/02meetingwithoutsailors/01.png", 2000],
			          ["assets/level4/dialogue/02meetingwithoutsailors/02.png",2000],
			          ["assets/level4/dialogue/02meetingwithoutsailors/03.png",2000],
			          ["assets/level4/dialogue/02meetingwithoutsailors/04.png",2000],
			          ["assets/level4/dialogue/02meetingwithoutsailors/05.png",2000],
			          ["assets/level4/dialogue/02meetingwithoutsailors/06.png",2000],
			          ["assets/level4/dialogue/02meetingwithoutsailors/07.png",2000],
			          ["assets/level4/dialogue/02meetingwithoutsailors/08.png", 2000],
                        ["assets/level4/dialogue/02meetingwithoutsailors/09.png", 2000],
                        ["assets/level4/dialogue/02meetingwithoutsailors/10.png", 500],
                        ["assets/level4/dialogue/02meetingwithoutsailors/12.png", 2000],
                        ["assets/level4/dialogue/02meetingwithoutsailors/13.png", 2000],
                        ["assets/level4/dialogue/02meetingwithoutsailors/15.png", 2000],
                        ["assets/level4/dialogue/02meetingwithoutsailors/16.png", 2000],
                        ["assets/level4/dialogue/02meetingwithoutsailors/17.png", 2000],
                        ["assets/level4/dialogue/02meetingwithoutsailors/18.png", 2000]],
		        looping : false
	        },
	        position : [-900, 1600]
	    },
        returnWithoutSailors : {
	        image : "assets/level4/dialogue/03returnwithoutsailors/01.png",
	        animation : {
		        frames : [["assets/level4/dialogue/03returnwithoutsailors/01.png", 2000],
			          ["assets/level4/dialogue/03returnwithoutsailors/02.png",2000],
			          ["assets/level4/dialogue/03returnwithoutsailors/03.png",2000],
			          ["assets/level4/dialogue/03returnwithoutsailors/04.png",2000],
			          ["assets/level4/dialogue/03returnwithoutsailors/05.png",2000]],
		        looping : false
	        },
	        position : [-900, 1600]
	    },
        returnWithSailors : {
	        image : "assets/level4/dialogue/04returnwithsailors/01.png",
	        animation : {
		        frames : [["assets/level4/dialogue/04returnwithsailors/01.png", 2000],
			          ["assets/level4/dialogue/04returnwithsailors/02.png",2000],
			          ["assets/level4/dialogue/04returnwithsailors/03.png",2000],
			          ["assets/level4/dialogue/04returnwithsailors/04.png",2000],
			          ["assets/level4/dialogue/04returnwithsailors/05.png",2000],
			          ["assets/level4/dialogue/04returnwithsailors/06.png",2000],
			          ["assets/level4/dialogue/04returnwithsailors/07.png",2000],
			          ["assets/level4/dialogue/04returnwithsailors/08.png",2000],
			          ["assets/level4/dialogue/04returnwithsailors/09.png",2000]],
		        looping : false
	        },
	        position : [-900, 1600]
	    }
    },

    triggers : {
	balloonStand : {
	    bounds : [-1250, 1431, 442, 384],
	    onEnter : "Level.Scripts.meetPirate",
	    onInside : "hoverBalloon",
	    onLeave : "girlShutup",
            object : "balloon"
	}
    },

    staticSprites : {
	butch_pirate : {
	    image : "assets/level4/static/butch_pirate.png",
	    position : [-800, -1306],
	    behaviours : ["collisionTest"],
		weight : + 0.1
	},
	captain_morgan : {
	    image : "assets/level4/static/captain_morgan.png",
	    position : [350, 655],
	    behaviours : ["piratePickup", "collisionTest"],
		weight : + 0.1
	},
	lookout : {
	    image : "assets/level4/static/lookout.png",
	    position : [163, -134],
	    behaviours : ["piratePickup", "collisionTest"],
		weight : + 0.1
	},
	monkey_sailor : {
	    image : "assets/level4/static/monkey_sailor.png",
	    position : [65, 612],
	    behaviours : ["piratePickup", "collisionTest"],
		weight : + 0.1
	},
	red_pirate : {
	    image : "assets/level4/static/red_pirate.png",
	    position : [-533, -1325],
	    behaviours : ["collisionTest"],
		weight : + 0.1
	},
	rope_sailor : {
	    image : "assets/level4/static/rope_sailor.png",
	    position : [-249, 345],
	    behaviours : ["piratePickup", "collisionTest"],
		weight : + 0.1
	},
	terrified_sailor : {
	    image : "assets/level4/static/terrified_sailor.png",
	    position : [549, 289],
	    behaviours : ["piratePickup", "collisionTest"],
		weight : + 0.1
	},
	scared_sailor : {
	    image : "assets/level4/animated/scared_sailor/scared_sailor01.png",
	    animation : {
		frames : [["assets/level4/animated/scared_sailor/scared_sailor01.png", 100], 
			  ["assets/level4/animated/scared_sailor/scared_sailor02.png", 200],],
		looping : true
	    },
	    position : [480, 685],
	    behaviours : ["piratePickup", "collisionTest"],
	    weight : + 0.1
	},
	waldie : {
	    image : "assets/level4/animated/waldie/waldie01.png",
	    animation : {
		frames : [["assets/level4/animated/waldie/waldie01.png", 150], 
			  ["assets/level4/animated/waldie/waldie02.png", 300],],
		looping : true
	    },
	 	position : [334, -198],
	    behaviours : ["piratePickup", "collisionTest"],
	    weight : + 0.1
	},
	big_ship_box_01 : {
	    image : "assets/level4/static/big_ship_box_01.png",
	    position : [-369, 598],
	    behaviours : ["impassableToBalloon"]
	},
	big_ship_box_02 : {
	    image : "assets/level4/static/big_ship_box_02.png",
	    position : [-250, 822],
	    behaviours : ["impassableToBalloon"]
	},
	big_ship_box_03 : {
	    image : "assets/level4/static/big_ship_box_03.png",
	    position : [-120, 925],
	    behaviours : ["impassableToBalloon"]
	},
	big_ship_box_04 : {
	    image : "assets/level4/static/big_ship_box_04.png",
	    position : [184, 1179],
	    behaviours : ["impassableToBalloon"]
	},
	big_ship_box_05 : {
	    image : "assets/level4/static/big_ship_box_05.png",
	    position : [488, 1016],
	    behaviours : ["impassableToBalloon"]
	},
	big_ship_box_06 : {
	    image : "assets/level4/static/big_ship_box_06.png",
	    position : [645, 913],
	    behaviours : ["impassableToBalloon"]
	},
	big_ship_box_07 : {
	    image : "assets/level4/static/big_ship_box_07.png",
	    position : [735, 821],
	    behaviours : ["impassableToBalloon"]
	},
	big_ship_box_08 : {
	    image : "assets/level4/static/big_ship_box_08.png",
	    position : [182, 820],
	    behaviours : ["impassableToBalloon"]
	},
    },
	
	spawnableSprites : {
	parrot : {
	    image : "assets/level4/animated/parrot/parrot01.png",
	    animation : {
		frames : [["assets/level4/animated/parrot/parrot01.png", 50], 
			  ["assets/level4/animated/parrot/parrot02.png", 100],
			  ["assets/level4/animated/parrot/parrot03.png", 150],
			  ["assets/level4/animated/parrot/parrot04.png", 200],],
		looping : true
	    },
	    velocity : [-1.5, 0],
	    weight : + 0.1
	},
	pilot : {
	    image : "assets/level4/animated/pilot/pilot01.png",
	    animation : {
		frames : [["assets/level4/animated/pilot/pilot01.png", 50], 
			  ["assets/level4/animated/pilot/pilot02.png", 100],],
		looping : true
	    },
	    velocity : [-2, 0],
	    weight : + 0.1
	},
	robomonkey : {
	    image : "assets/level4/animated/robomonkey/robomonkey01.png",
	    animation : {
		frames : [["assets/level4/animated/robomonkey/robomonkey01.png", 50], 
			  ["assets/level4/animated/robomonkey/robomonkey02.png", 100],],
		looping : true
	    },
	    velocity : [-2, -1],
	    weight : + 0.1
	},
	scared_sailor : {
	    image : "assets/level4/animated/scared_sailor/scared_sailor01.png",
	    animation : {
		frames : [["assets/level4/animated/scared_sailor/scared_sailor01.png", 100], 
			  ["assets/level4/animated/scared_sailor/scared_sailor02.png", 200],],
		looping : true
	    },
	    velocity : [0, 0],
	    weight : + 0.1
	},
	waldie : {
	    image : "assets/level4/animated/waldie/waldie01.png",
	    animation : {
		frames : [["assets/level4/animated/waldie/waldie01.png", 150], 
			  ["assets/level4/animated/waldie/waldie02.png", 300],],
		looping : true
	    },
	    velocity : [0, 0],
	    weight : + 0.1
	},
	anchor : {
	    image : "assets/level4/spawnable/anchor.png",
		velocity : [0, 8],
	    weight : + 0.1
	},
	cannonball : {
	    image : "assets/level4/spawnable/cannonball.png",
		velocity : [-10, 0],
	    weight : + 0.1
	},
	huge_apple : {
	    image : "assets/level4/spawnable/huge_apple.png",
		velocity : [0, 2],
	    weight : + 0.1
	},
	impact : {
	    image : "assets/level4/spawnable/impact.png",
		velocity : [0, 0],
	    weight : + 0.1
	},
	kamikaze_missile : {
	    image : "assets/level4/spawnable/kamikaze_missile.png",
		velocity : [6, 0],
	    weight : + 0.1
	},
	ninja_pirate1 : {
	    image : "assets/level4/spawnable/ninja_pirate1.png",
		velocity : [3, -3],
	    weight : + 0.1
	},
	ninja_pirate2 : {
	    image : "assets/level4/spawnable/ninja_pirate2.png",
		velocity : [5, 1],
	    weight : + 0.1
	},
	pineapple : {
	    image : "assets/level4/spawnable/pineapple.png",
		velocity : [0, 2],
	    weight : + 0.1
	},
	},

   spawnZones : {
   sky : {
	    bounds : [-1500, -2100, 3000, 3160],
	    items : ["anchor", "cannonball", "huge apple", "impact", "kamikaze_missile", "ninja_pirate1", "ninja_pirate2", "pineapple", "parrot", "pilot", "robomonkey"],
	    frequency : 0.5
	},
    }
};
