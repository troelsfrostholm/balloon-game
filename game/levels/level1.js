var levels = [];
levels[0] = {
    background : "assets/background.jpg",
    bounds : [-1500, -2100, 3000, 4200],
    startPoint : [0, 1300],
    balloonStandPosition : [-1000, -927],

    parameters : {
	panHeight : -150,
	inventory : []
    },

    triggers : {
	girl : {
	    object : "balloon",
	    bounds : [-1300, -1050, 400, 300],
	    onEnter : "Level.Scripts.meetGirl",
	    onInside : "hoverBalloon",
	    onLeave : "girlShutup"
	}
    },

    dialogue : {
	intro : {
	    image : "assets/dialogue/01.png",
	    animation : {
		frames : [["assets/level1/dialogue/01meeting/01.png", 2000],
			  ["assets/level1/dialogue/01meeting/02.png", 2000]],
		looping : false,
		playing : true
		},
	    position : [-990, -977],
	},
	meetGirlFirstTime : {
	    image : "assets/dialogue/02.png",
	    animation : {
		frames : [["assets/level1/dialogue/01meeting/03.png", 3000],
				["assets/level1/dialogue/01meeting/04.png", 3000],
				["assets/level1/dialogue/01meeting/06.png", 3000],
				["assets/level1/dialogue/01meeting/07.png", 4000],
				["assets/level1/dialogue/01meeting/08.png", 4000],
				["assets/level1/dialogue/01meeting/09.png", 4000],
				["assets/level1/dialogue/01meeting/10.png", 2000],
				["assets/level1/dialogue/01meeting/11.png", 4000],
				["assets/level1/dialogue/05tutorial/01.png", 4000],
				["assets/level1/dialogue/05tutorial/02.png", 4000],
				["assets/level1/dialogue/05tutorial/03.png", 3000],
				["assets/level1/dialogue/05tutorial/04.png", 3000],
				["assets/level1/dialogue/05tutorial/05.png", 4000],
				["assets/level1/dialogue/05tutorial/06.png", 4000],
				["assets/level1/dialogue/05tutorial/08.png", 4000],
				["assets/level1/dialogue/05tutorial/09.png", 3000],
				["assets/level1/dialogue/05tutorial/10.png", 3000],
				["assets/level1/dialogue/05tutorial/11.png", 3000],
				["assets/level1/dialogue/05tutorial/12.png", 2000],
				["assets/level1/dialogue/05tutorial/13.png", 2000],
				["assets/level1/dialogue/05tutorial/14.png", 2000]],
		looping : false
		},
	    position : [-990, -977],
	},
	meetGirlAgain : {
	    image : "assets/dialogue/03.png",
	    animation : {
		frames : [["assets/level1/dialogue/02returnnopony/01.png", 2000],
				["assets/level1/dialogue/02returnnopony/02.png", 2000],
				["assets/level1/dialogue/02returnnopony/03.png", 2000],
				["assets/level1/dialogue/02returnnopony/04.png", 2000],
				["assets/level1/dialogue/02returnnopony/05.png", 2000],
				["assets/level1/dialogue/02returnnopony/06.png", 4000],
				["assets/level1/dialogue/02returnnopony/07.png", 2000],
				["assets/level1/dialogue/02returnnopony/08.png", 2000],
				["assets/level1/dialogue/02returnnopony/09.png", 2000]],
		looping : false
		},
	    position : [-990, -977],
	},
	giveGirlPony : {
	    image : "assets/dialogue/04.png",
	    animation : {
		frames : [["assets/level1/dialogue/03returnwithpony/01.png", 3000],
				["assets/level1/dialogue/03returnwithpony/02.png", 2000],
				["assets/level1/dialogue/03returnwithpony/06.png", 3000],
				["assets/level1/dialogue/03returnwithpony/07.png", 4000],
				["assets/level1/dialogue/03returnwithpony/08.png", 2000]],
		looping : false
		},
	    position : [-990, -977],
	},
    },

    staticSprites : {
	arrow1 : {
	    image : "assets/level1/static/arrow1.png",
	    position : [280, 1590],
	    direction : 20
	},
	arrow2 : {
	    image : "assets/level1/static/arrow2.png",
	    position : [-150, -500],
	    direction : 20
	},
	ferriswheel_gondola1 : {
	    image : "assets/level1/static/ferriswheel_gondola1.png",
	    position : [395, -1083],
	    behaviours : ["collisionTest"],
		weight : .2
	},
	ferriswheel_gondola2 : {
	    image : "assets/level1/static/ferriswheel_gondola2.png",
	    position : [296, -1289],
	    behaviours : ["collisionTest"],
		weight : .2
	},
	ferriswheel_gondola3 : {
	    image : "assets/level1/static/ferriswheel_gondola3.png",
	    position : [286, -1514],
	    behaviours : ["collisionTest"],
		weight : .2
	},
	ferriswheel_gondola4 : {
	    image : "assets/level1/static/ferriswheel_gondola4.png",
	    position : [401, -1736],
	    behaviours : ["collisionTest"],
		weight : .2
	},
	ferriswheel_gondola5 : {
	    image : "assets/level1/static/ferriswheel_gondola5.png",
	    position : [634, -1859],
	    behaviours : ["collisionTest"],
		weight : .2
	},
	ferriswheel_gondola6 : {
	    image : "assets/level1/static/ferriswheel_gondola1.png",
	    position : [909, -1851],
	    behaviours : ["collisionTest"],
		weight : .2
	},
	ferriswheel_gondola7 : {
	    image : "assets/level1/static/ferriswheel_gondola2.png",
	    position : [1162, -1665],
	    behaviours : ["collisionTest"],
		weight : .2
	},
	ferriswheel_gondola8 : {
	    image : "assets/level1/static/ferriswheel_gondola3.png",
	    position : [1230, -1412],
	    behaviours : ["collisionTest"],
		weight : .2
	},
	ferriswheel_gondola9 : {
	    image : "assets/level1/static/ferriswheel_gondola4.png",
	    position : [1122, -1088],
	    behaviours : ["collisionTest"],
		weight : .2
	},
	elephant : {
	    image : "assets/level1/static/elephant.png",
	    position : [400, -535],
	    behaviours : ["collisionTest"],
		weight : .4
	},
	circus_princess : {
	    image : "assets/level1/static/circus_princess.png",
	    position : [-115, -1290],
	    behaviours : ["collisionTest"],
		weight : .1
	},
	giraffe_head : {
	    image : "assets/level1/static/giraffe_head.png",
	    position : [-279, -915],
	    behaviours : ["collisionTest"],
		weight : .3
	},
	family : {
	    image : "assets/level1/static/family.png",
	    position : [1100, -920],
	    behaviours : ["collisionTest"],
		weight : .2
	},
	fat_circusdirector : {
	    image : "assets/level1/static/fat_circusdirector.png",
	    position : [-31, -540],
	    behaviours : ["collisionTest"],
		weight : .33
	},
	trapeze_artist1 : {
	    image : "assets/level1/static/trapeze_artist1.png",
	    position : [10, -10],
	    behaviours : ["collisionTest"],
		weight : .1
	},
	trapeze_artist2 : {
	    image : "assets/level1/static/trapeze_artist2.png",
	    position : [760, -230],
	    behaviours : ["collisionTest"],
		weight : .1
	},
	strongman : {
	    image : "assets/level1/static/strongman.png",
	    position : [780, -970],
	    behaviours : ["collisionTest"],
		weight : .25
	},
	rope_artist : {
	    image : "assets/level1/static/rope_artist.png",
	    position : [1240, -390],
	    behaviours : ["collisionTest"],
		weight : .05
	},
	treestump1 : {
	    image : "assets/level1/static/treestump.png",
	    position : [-554, 1500],
	    behaviours : ["collisionTest"],
		weight : .05
	},
	treestump2 : {
	    image : "assets/level1/static/treestump.png",
	    position : [844, 1927],
	    behaviours : ["collisionTest"],
		weight : .05
	},
	treehouse : {
	    image : "assets/level1/static/treehouse.png",
	    position : [-620, 720],
	    behaviours : ["collisionTest"],
		weight : .12
	},
	tree_lurker : {
	    image : "assets/level1/static/tree_lurker.png",
	    position : [882, 1358],
	    behaviours : ["collisionTest"],
		weight : .1
	},
	huge_apple1 : {
	    image : "assets/level1/static/huge_apple.png",
	    position : [-1278, 544],
	    behaviours : ["collisionTest"],
		weight : .05
	},
	huge_apple2 : {
	    image : "assets/level1/static/huge_apple.png",
	    position : [-754, 167],
	    behaviours : ["collisionTest"],
		weight : .05
	},
	huge_apple3 : {
	    image : "assets/level1/static/huge_apple.png",
	    position : [-1121, 232],
	    behaviours : ["collisionTest"],
		weight : .05
	},
	owl : {
	    image : "assets/level1/static/owl.png",
	    position : [319, 1290],
	    behaviours : ["collisionTest"],
		weight : -.2
	},
	birdnest : {
	    image : "assets/level1/static/birdnest.png",
	    position : [705, 754],
	    behaviours : ["collisionTest"],
		weight : 0.0666
	},
	lettuce1 : {
	    image : "assets/level1/static/lettuce.png",
	    position : [-1200, 1677],
	    behaviours : ["collisionTest"],
		weight : .05
	},
	lettuce2 : {
	    image : "assets/level1/static/lettuce.png",
	    position : [-484, 1917],
	    behaviours : ["collisionTest"],
		weight : .05
	},
	lettuce3 : {
	    image : "assets/level1/static/lettuce.png",
	    position : [1136, 1879],
	    behaviours : ["collisionTest"],
		weight : .05
	},
	deer1 : {
	    image : "assets/level1/static/deer.png",
	    position : [370, 1896],
	    behaviours : ["collisionTest"],
		weight : .1
	},
	deer2 : {
	    image : "assets/level1/static/deer.png",
	    position : [-987, 1862],
	    behaviours : ["collisionTest"],
		weight : .1
	},
	spy1 : {
	    image : "assets/level1/static/spy1.png",
	    position : [-50, 1906],
	    behaviours : ["collisionTest"],
		weight : .1
	},
	spy2 : {
	    image : "assets/level1/static/spy2.png",
	    position : [-750, 1342],
	    behaviours : ["collisionTest"],
		weight : .1
	},
	spy3 : {
	    image : "assets/level1/static/spy3.png",
	    position : [498, 1648],
	    behaviours : ["collisionTest"],
		weight : .1
	},
	angry_bear : {
	    image : "assets/level1/static/angry_bear.png",
	    position : [1350, 1900],
	    behaviours : ["collisionTest"],
		weight : -.2
	},
	pink_pony : {
	    image : "assets/level1/static/pink_pony.png",
	    position : [1350, 1675],
	    behaviours : ["ponyPickup", "collisionTest"]
	},
	circus_island_box_01 : {
	    image : "assets/level1/static/circus_island_box_01.png",
	    position : [-103, -397],
	    behaviours : ["impassableToBalloon"]
	},
	circus_island_box_02 : {
	    image : "assets/level1/static/circus_island_box_02.png",
	    position : [18, -372],
	    behaviours : ["impassableToBalloon"]
	},
	circus_island_box_03 : {
	    image : "assets/level1/static/circus_island_box_03.png",
	    position : [202, -337],
	    behaviours : ["impassableToBalloon"]
	},
	circus_island_box_04 : {
	    image : "assets/level1/static/circus_island_box_04.png",
	    position : [387, -378],
	    behaviours : ["impassableToBalloon"]
	},
	circus_island_box_05 : {
	    image : "assets/level1/static/circus_island_box_05.png",
	    position : [513, -403],
	    behaviours : ["impassableToBalloon"]
	},
	ferris_whee_island_box_01 : {
	    image : "assets/level1/static/ferris_whee_island_box_01.png",
	    position : [721, -709],
	    behaviours : ["impassableToBalloon"]
	},
	ferris_whee_island_box_02 : {
	    image : "assets/level1/static/ferris_whee_island_box_02.png",
	    position : [971, -730],
	    behaviours : ["impassableToBalloon"]
	},
	ferris_whee_island_box_03 : {
	    image : "assets/level1/static/ferris_whee_island_box_03.png",
	    position : [1190, -749],
	    behaviours : ["impassableToBalloon"]
	},
	girl_island_box_01 : {
	    image : "assets/level1/static/girl_island_box_01.png",
	    position : [-1173, -734],
	    behaviours : ["impassableToBalloon"]
	},
	girl_island_box_02 : {
	    image : "assets/level1/static/girl_island_box_02.png",
	    position : [-1100, -720],
	    behaviours : ["impassableToBalloon"]
	},
	girl_island_box_03 : {
	    image : "assets/level1/static/girl_island_box_03.png",
	    position : [-1031, -737],
	    behaviours : ["impassableToBalloon"]
	},
    },
	
	spawnableSprites : {
	bat : {
	    image : "assets/level1/animated/bat/bat01.png",
	    animation : {
		frames : [["assets/level1/animated/bat/bat01.png", 100], 
			  ["assets/level1/animated/bat/bat02.png", 200],
			  ["assets/level1/animated/bat/bat03.png", 300]],
		looping : true
	    },
	    velocity : [1, 0],
	    acceleration : [0.005, 0],
	    weight : -.1
	},
	biker_bear : {
	    image : "assets/level1/animated/biker_bear/biker_bear01.png",
	    animation : {
		frames : [["assets/level1/animated/biker_bear/biker_bear01.png", 100], 
			  ["assets/level1/animated/biker_bear/biker_bear02.png", 200],
			  ["assets/level1/animated/biker_bear/biker_bear03.png", 300],
			  ["assets/level1/animated/biker_bear/biker_bear04.png", 400]],
		looping : true
	    },
	    velocity : [-2, 0],
	    acceleration : [-0.005, 0],
	    weight : .2
	},
	flying_duck : {
	    image : "assets/level1/animated/flying_duck/flying_duck01.png",
	    animation : {
		frames : [["assets/level1/animated/flying_duck/flying_duck01.png", 1000], 
			  ["assets/level1/animated/flying_duck/flying_duck02.png", 2000],
			  ["assets/level1/animated/flying_duck/flying_duck03.png", 3000]],
		looping : true
	    },
	    velocity : [-1, 0],
	    acceleration : [-0.005, 0],
	    weight : -.1
	},
	penguin : {
	    image : "assets/level1/animated/penguin/penguin01.png",
	    animation : {
		frames : [["assets/level1/animated/penguin/penguin01.png", 100], 
			  ["assets/level1/animated/penguin/penguin02.png", 200],
			  ["assets/level1/animated/penguin/penguin03.png", 300]],
		looping : true
	    },
	    velocity : [2, 0],
	    acceleration : [0.005, 0],
	    weight : -.15
	},
	swan : {
	    image : "assets/level1/animated/swan/swan01.png",
	    animation : {
		frames : [["assets/level1/animated/swan/swan01.png", 1000], 
			  ["assets/level1/animated/swan/swan02.png", 2000],
			  ["assets/level1/animated/swan/swan03.png", 3000]],
		looping : true
	    },
	    velocity : [1.5, 0],
	    weight : -.12
	},
	monkey : {
	    image : "assets/level1/spawnable/monkey.png",
	    velocity : [0, -2],
	    acceleration : [0, 0.2],
	    spin : 0.1,
	    weight : .25,
        lotto : 60
	},
	flying_squirrel : {
	    image : "assets/level1/spawnable/flying_squirrel.png",
	    velocity : [-1, 0],
	    acceleration : [-0.01, 0],
	    weight : -.07
	},
	floss_cloud1 : {
	    image : "assets/level1/spawnable/floss_cloud1.png", 
	    velocity : [-1, 0],
	    weight : -.21
	},
	floss_cloud2 : {
	    image : "assets/level1/spawnable/floss_cloud2.png", 
	    velocity : [-1, 0],
	    weight : -.18
	},
	floss_cloud3 : {
	    image : "assets/level1/spawnable/floss_cloud3.png", 
	    velocity : [-1, 0],
	    weight : -.2
	},
	hotair_balloon1 : {
		image : "assets/level1/spawnable/hotair_balloon1.png",
		velocity : [0.5, 0],
		weight : -.25
	},
	hotair_balloon2 : {
		image : "assets/level1/spawnable/hotair_balloon2.png",
		velocity : [1, 0],
		weight : -.2
	},
	hotair_balloon3 : {
		image : "assets/level1/spawnable/hotair_balloon3.png",
		velocity : [-0.5, 0],
		weight : -.2
	},
	hotair_balloon4 : {
		image : "assets/level1/spawnable/hotair_balloon4.png",
		velocity : [-1, 0],
		weight : -.3
	},
	barbecue_chicken : {
	    image : "assets/level1/spawnable/barbecue_chicken.png",
	    velocity : [1, 0],
	    weight : .15
	},
	canon_king : {
	    image : "assets/level1/spawnable/canon_king.png",
	    velocity : [3, -2],
	    acceleration : [0, 0.5],
	    spin : 0.05,
	    weight : .45,
        lotto : 100
	},
	magic_carpet_man : {
	    image : "assets/level1/spawnable/magic_carpet_man.png",
	    velocity : [-1, 0],
	    acceleration : [-0.01, 0],
	    weight : .15
	},
	music : {
	    image : "assets/level1/spawnable/music.png",
	    velocity : [0.5, -0.5],
	    weight : -.15
    },
	},

   spawnZones : {
       	forest_left : {
	    bounds : [-1500, 145, 1600, 2245],
	    items : ["monkey", "flying_squirrel", "bat", "flying_duck", "penguin", "swan"],
	    frequency : 0.5
	},
	forest_right : {
	    bounds : [250, 145, 1250, 2245],
	    items : ["monkey", "flying_squirrel", "bat", "flying_duck", "penguin", "swan"],
	    frequency : 0.5
	},
	forest_middle : {
	    bounds : [100, 145, 150, 1150],
	    items : ["monkey", "flying_squirrel", "bat", "flying_duck", "penguin", "swan"],
	    frequency : 0.5
	},
	sky : {
	    bounds : [-636, -2100, 2136, 2000],
	    items : ["floss_cloud1", "floss_cloud2", "floss_cloud3", "hotair_balloon1", "hotair_balloon2", "hotair_balloon3", "hotair_balloon4"],
	    frequency : 0.5
	},
	sky_above_girl : {
	    bounds : [-1500, -2100, 1500, 650],
	    items : ["floss_cloud1", "floss_cloud2", "floss_cloud3", "hotair_balloon1", "hotair_balloon2", "hotair_balloon3", "hotair_balloon4"],
	    frequency : 0.5
	},
	circus : {
	    bounds : [-787, -1805, 2110, 1980],
	    items : ["barbecue_chicken", "biker_bear", "canon_king", "magic_carpet_man", "music"],
	    frequency : 0.5
	    }
    }
};
