levels[0] = {
    background : "assets/level3/background.jpg",
    bounds : [-1500, -2100, 3000, 4200],
    startPoint : [-954, 1288],
    balloonStandPosition : [410, -920],

    parameters :
    {
        metDaedalus : false,
        foundIcarus : false
    },

    triggers : {
	daedalus : {
	    object : "balloon",
	    bounds : [380, -1130, 400, 400],
	    onEnter : "Level.Scripts.meetDaedalus",
	    onInside : "hoverBalloon",
	    onLeave : "Level.Scripts.DaedalusShutUp"
	}
    },

    dialogue : {
	meetingDaedalusWithoutIcarus : {
	    image : "assets/level3/dialogue/01meetingdaedalus/01.png",
	    animation : {
		frames : [["assets/level3/dialogue/01meetingdaedalus/01.png", 2000],
				["assets/level3/dialogue/01meetingdaedalus/02.png", 2000],
				["assets/level3/dialogue/01meetingdaedalus/03.png", 2000],
				["assets/level3/dialogue/01meetingdaedalus/04.png", 2000],
				["assets/level3/dialogue/01meetingdaedalus/05.png", 2000],
				["assets/level3/dialogue/01meetingdaedalus/06.png", 2000],
				["assets/level3/dialogue/01meetingdaedalus/07.png", 2000],
				["assets/level3/dialogue/01meetingdaedalus/08.png", 2000],
				["assets/level3/dialogue/01meetingdaedalus/09.png", 2000],
				["assets/level3/dialogue/01meetingdaedalus/10.png", 2000],
				["assets/level3/dialogue/01meetingdaedalus/11.png", 2000],
				["assets/level3/dialogue/01meetingdaedalus/12.png", 2000],
				["assets/level3/dialogue/01meetingdaedalus/13.png", 2000],
				["assets/level3/dialogue/01meetingdaedalus/14.png", 2000],
				["assets/level3/dialogue/01meetingdaedalus/15.png", 2000],
				["assets/level3/dialogue/01meetingdaedalus/16.png", 2000],
				["assets/level3/dialogue/01meetingdaedalus/17.png", 2000],
				["assets/level3/dialogue/01meetingdaedalus/18.png", 2000]],
		looping : false
		},
	    position : [710, -1080],
	},
	meetingDaedalusWithIcarus : {
	    image : "assets/level3/dialogue/01meetingdaedalus/01.png",
	    animation : {
		frames : [["assets/level3/dialogue/01meetingdaedalus/01.png", 2000],
				["assets/level3/dialogue/01meetingdaedalus/02.png", 2000],
				["assets/level3/dialogue/01meetingdaedalus/03.png", 2000],
				["assets/level3/dialogue/01meetingdaedalus/04.png", 2000],
				["assets/level3/dialogue/01meetingdaedalus/05.png", 2000],
				["assets/level3/dialogue/01meetingdaedalus/06.png", 2000],
				["assets/level3/dialogue/01meetingdaedalus/07.png", 2000],
				["assets/level3/dialogue/01meetingdaedalus/08.png", 2000],
				["assets/level3/dialogue/01meetingdaedalus/09.png", 2000],
				["assets/level3/dialogue/01meetingdaedalus/10.png", 2000],
				["assets/level3/dialogue/01meetingdaedalus/11.png", 2000],
				["assets/level3/dialogue/01meetingdaedalus/12.png", 2000],
				["assets/level3/dialogue/01meetingdaedalus/13.png", 2000],
				["assets/level3/dialogue/01meetingdaedalus/14.png", 2000],
				["assets/level3/dialogue/01meetingdaedalus/15.png", 2000],
				["assets/level3/dialogue/01meetingdaedalus/16.png", 2000],
				["assets/level3/dialogue/01meetingdaedalus/17.png", 2000],
				["assets/level3/dialogue/01meetingdaedalus/18.png", 2000]],
		looping : false
		},
	    position : [410, -920],
	}    
    },
    
    staticSprites : {
	birdnest1 : {
	    image : "assets/level3/static/birdnest.png",
	    position : [1200, 593],
	    behaviours : ["collisionTest"],
		weight : 0.35
	},
	birdnest2 : {
	    image : "assets/level3/static/birdnest.png",
	    position : [-1319, -566],
	    behaviours : ["collisionTest"],
		weight : .35
	},
	centaur : {
	    image : "assets/level3/static/centaur.png",
		position : [-113, 1013],
		behaviours : ["collisionTest"],
	    weight : .45
	},
	elf_girl : {
	    image : "assets/level3/static/elf_girl.png",
	    position : [566, 1087],
	    behaviours : ["collisionTest"],
		weight : .45
	},
	lion : {
	    image : "assets/level3/static/lion.png",
	    position : [-570, -250],
	    behaviours : ["collisionTest"],
		weight : .55
	},
	twig1 : {
	    image : "assets/level3/static/twig1.png",
	    position : [1400, 300],
	    behaviours : ["collisionTest"],
		weight : .2
	},
	twig2 : {
	    image : "assets/level3/static/twig1.png",
	    position : [-459, -1063],
	    behaviours : ["collisionTest"],
		weight : .2
	},
	twig3 : {
	    image : "assets/level3/static/twig2.png",
	    position : [-300, 873],
	    behaviours : ["collisionTest"],
		weight : .2
	},
	twig4 : {
	    image : "assets/level3/static/twig2.png",
	    position : [400, -2],
	    behaviours : ["collisionTest"],
		weight : .2
	},
	twig5 : {
	    image : "assets/level3/static/twig2.png",
	    position : [-1200, -1120],
	    behaviours : ["collisionTest"],
		weight : .2
	},
	twig6 : {
	    image : "assets/level3/static/twig3.png",
	    position : [-225, -1739],
	    behaviours : ["collisionTest"],
		weight : .2
	},
	twig7 : {
	    image : "assets/level3/static/twig3.png",
	    position : [994, -69],
	    behaviours : ["collisionTest"],
		weight : .2
	},
	big_island_box_01 : {
	    image : "assets/level3/static/big_island_box_01.png",
	    position : [-200, 1265],
	    behaviours : ["impassableToBalloon"]
	},
	big_island_box_02 : {
	    image : "assets/level3/static/big_island_box_02.png",
	    position : [213, 1329],
	    behaviours : ["impassableToBalloon"]
	},
	big_island_box_03 : {
	    image : "assets/level3/static/big_island_box_03.png",
	    position : [640, 1297],
	    behaviours : ["impassableToBalloon"]
	},
	big_island_box_04 : {
	    image : "assets/level3/static/big_island_box_04.png",
	    position : [1061, 1267],
	    behaviours : ["impassableToBalloon"]
	},
	small_island_box_01 : {
	    image : "assets/level3/static/small_island_box_01.png",
	    position : [-1105, -120],
	    behaviours : ["impassableToBalloon"]
	},
	small_island_box_02 : {
	    image : "assets/level3/static/small_island_box_02.png",
	    position : [-956, -68],
	    behaviours : ["impassableToBalloon"]
	},
	small_island_box_03 : {
	    image : "assets/level3/static/small_island_box_03.png",
	    position : [-763, -18],
	    behaviours : ["impassableToBalloon"]
	},
	small_island_box_04 : {
	    image : "assets/level3/static/small_island_box_04.png",
	    position : [-582, -72],
	    behaviours : ["impassableToBalloon"]
	},
	icarus : {
	    image : "assets/level3/animated/icarus/icarus01.png",
	    animation :
        {
            frames : [["assets/level3/animated/icarus/icarus01.png", 50], 
                  ["assets/level3/animated/icarus/icarus02.png", 100],
                  ["assets/level3/animated/icarus/icarus03.png", 150],
                  ["assets/level3/animated/icarus/icarus04.png", 200],
                  ["assets/level3/animated/icarus/icarus05.png", 250],],
            looping : true
	    },
//	    velocity : [-1, 0],
	    position : [200, 160],
	    behaviours : ["icarus","collisionTest"]
	},
    },
	
	spawnableSprites : {
	flying_bunny : {
	    image : "assets/level3/animated/flying_bunny/flying_bunny01.png",
	    animation : {
		frames : [["assets/level3/animated/flying_bunny/flying_bunny01.png", 250], 
			  ["assets/level3/animated/flying_bunny/flying_bunny02.png", 500],
			  ["assets/level3/animated/flying_bunny/flying_bunny03.png", 750],],
		looping : true
	    },
	    velocity : [-1, 0],
	    weight : -.3,
	},
	lemming : {
	    image : "assets/level3/animated/lemming/lemming01.png",
	    animation : {
		frames : [["assets/level3/animated/lemming/lemming01.png", 50], 
			  ["assets/level3/animated/lemming/lemming02.png", 100],
			  ["assets/level3/animated/lemming/lemming03.png", 150],
			  ["assets/level3/animated/lemming/lemming04.png", 200],
			  ["assets/level3/animated/lemming/lemming05.png", 250],],
		looping : true
	    },
	    velocity : [1.5, 1.5],
		spin : 0.05,
		weight : .1,
	},
	lumberjack : {
	    image : "assets/level3/animated/lumberjack/lumberjack01.png",
	    animation : {
		frames : [["assets/level3/animated/lumberjack/lumberjack01.png", 50], 
			  ["assets/level3/animated/lumberjack/lumberjack02.png", 100],
			  ["assets/level3/animated/lumberjack/lumberjack03.png", 150],
			  ["assets/level3/animated/lumberjack/lumberjack04.png", 200],
			  ["assets/level3/animated/lumberjack/lumberjack05.png", 250],
			  ["assets/level3/animated/lumberjack/lumberjack06.png", 300],
			  ["assets/level3/animated/lumberjack/lumberjack07.png", 350],
			  ["assets/level3/animated/lumberjack/lumberjack08.png", 400],],
		looping : true
	    },
	    velocity : [-1.5,0],
		weight : .4,
	},
	pegasus : {
	    image : "assets/level3/animated/pegasus/pegasus01.png",
	    animation : {
		frames : [["assets/level3/animated/pegasus/pegasus01.png", 50], 
			  ["assets/level3/animated/pegasus/pegasus02.png", 100],
			  ["assets/level3/animated/pegasus/pegasus03.png", 150],
			  ["assets/level3/animated/pegasus/pegasus04.png", 200],
			  ["assets/level3/animated/pegasus/pegasus05.png", 250],],
		looping : true
	    },
	    velocity : [-1.5, -1.5],
		weight : -.6,
	},
	red_riding_hood : {
	    image : "assets/level3/animated/red_riding_hood/red_riding_hood01.png",
	    animation : {
		frames : [["assets/level3/animated/red_riding_hood/red_riding_hood01.png", 50], 
			  ["assets/level3/animated/red_riding_hood/red_riding_hood02.png", 100],
			  ["assets/level3/animated/red_riding_hood/red_riding_hood03.png", 150],],
		looping : true
	    },
	    velocity : [-1, 0],
	    weight : .2
	},
	tucan : {
	    image : "assets/level3/animated/tucan/tucan01.png",
	    animation : {
		frames : [["assets/level3/animated/tucan/tucan01.png", 250], 
			  ["assets/level3/animated/tucan/tucan02.png", 500],
			  ["assets/level3/animated/tucan/tucan03.png", 750],],
		looping : true
	    },
	    velocity : [-1, 0],
	    weight : -.40
	},
	bathing_angel : {
	    image : "assets/level3/spawnable/bathing_angel.png",
		velocity : [1, 0],
	    weight : -.60
	},
	bored_angel1 : {
	    image : "assets/level3/spawnable/bored_angel1.png",
		velocity : [-1, 0],
	    weight : -.50
	},
	bored_angel2 : {
	    image : "assets/level3/spawnable/bored_angel2.png",
		velocity : [1, 0],
	    weight : -.55
	},
	flying_fish_blue : {
	    image : "assets/level3/spawnable/flying_fish_blue.png",
		velocity : [1.5, 1],
	    weight : .10
	},
	flying_fish_green : {
	    image : "assets/level3/spawnable/flying_fish_green.png",
		velocity : [1.5, 1],
	    weight : .10
	},
	flying_fish_red : {
	    image : "assets/level3/spawnable/flying_fish_red.png",
		velocity : [1.5, 1],
	    weight : .10
	},
	},

   spawnZones : {
	waterfall : {
	    bounds : [-546, -897, 1002, 1284],
	    items : ["flying_fish_blue", "flying_fish_green", "flying_fish_red"],
	    frequency : 0.5
	},
	big_island : {
	    bounds : [-491, 598, 1802, 573],
	    items : ["red_riding_hood"],
	    frequency : 0.5
	},
	small_island : {
	    bounds : [-1166, -398, 756, 233],
	    items : ["lumberjack"],
	    frequency : 0.5
	},
	sky : {
	    bounds : [-1500, -2100, 3000, 4200],
	    items : ["bored_angel_1", "bored_angel_2", "flying_bunny", "lemming", "pegasus", "tucan"],
	    frequency : 0.5
	},
    }
};
