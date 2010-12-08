level = {
    background : "assets/background.jpg",
    bounds : [-1500, -2100, 3000, 4200],
    startPoint : [0, 1300],

    parameters : {
	panHeight : -150
    },	

    triggers : {
	girl : {
	    object : "balloon",
	    bounds : [-1300, -1050, 400, 300],
	    onEnter : "girlSpeak",
	    onInside : "hoverBalloon",
	    onLeave : "girlShutup"
	}
    },

    dialogue : {
	intro : {
	    image : "assets/dialogue/01.png",
	    /*	    animation : {
		frames : [["assets/dialogue/01.png", 1000]],
		looping : false
		},*/
	    position : [-1000, -927]
	}
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
		weight : 35
	},
	ferriswheel_gondola2 : {
	    image : "assets/level1/static/ferriswheel_gondola2.png",
	    position : [296, -1289],
	    behaviours : ["collisionTest"],
		weight : 35
	},
	ferriswheel_gondola3 : {
	    image : "assets/level1/static/ferriswheel_gondola3.png",
	    position : [286, -1514],
	    behaviours : ["collisionTest"],
		weight : 35
	},
	ferriswheel_gondola4 : {
	    image : "assets/level1/static/ferriswheel_gondola4.png",
	    position : [401, -1736],
	    behaviours : ["collisionTest"],
		weight : 35
	},
	ferriswheel_gondola5 : {
	    image : "assets/level1/static/ferriswheel_gondola5.png",
	    position : [634, -1859],
	    behaviours : ["collisionTest"],
		weight : 35
	},
	ferriswheel_gondola6 : {
	    image : "assets/level1/static/ferriswheel_gondola1.png",
	    position : [909, -1851],
	    behaviours : ["collisionTest"],
		weight : 35
	},
	ferriswheel_gondola7 : {
	    image : "assets/level1/static/ferriswheel_gondola2.png",
	    position : [1162, -1665],
	    behaviours : ["collisionTest"],
		weight : 35
	},
	ferriswheel_gondola8 : {
	    image : "assets/level1/static/ferriswheel_gondola3.png",
	    position : [1230, -1412],
	    behaviours : ["collisionTest"],
		weight : 35
	},
	ferriswheel_gondola9 : {
	    image : "assets/level1/static/ferriswheel_gondola4.png",
	    position : [1122, -1088],
	    behaviours : ["collisionTest"],
		weight : 35
	},
	elephant : {
	    image : "assets/level1/static/elephant.png",
	    position : [400, -535],
	    behaviours : ["collisionTest"],
		weight : 50
	},
	circus_princess : {
	    image : "assets/level1/static/circus_princess.png",
	    position : [-115, -1290],
	    behaviours : ["collisionTest"],
		weight : 25
	},
	giraffe_head : {
	    image : "assets/level1/static/giraffe_head.png",
	    position : [-279, -915],
	    behaviours : ["collisionTest"],
		weight : 35
	},
	family : {
	    image : "assets/level1/static/family.png",
	    position : [1100, -920],
	    behaviours : ["collisionTest"],
		weight : 35
	},
	fat_circusdirector : {
	    image : "assets/level1/static/fat_circusdirector.png",
	    position : [-31, -540],
	    behaviours : ["collisionTest"],
		weight : 35
	},
	trapeze_artist1 : {
	    image : "assets/level1/static/trapeze_artist1.png",
	    position : [10, -10],
	    behaviours : ["collisionTest"],
		weight : 30
	},
	trapeze_artist2 : {
	    image : "assets/level1/static/trapeze_artist2.png",
	    position : [760, -230],
	    behaviours : ["collisionTest"],
		weight : 30
	},
	strongman : {
	    image : "assets/level1/static/strongman.png",
	    position : [780, -970],
	    behaviours : ["collisionTest"],
		weight : 40
	},
	rope_artist : {
	    image : "assets/level1/static/rope_artist.png",
	    position : [1240, -390],
	    behaviours : ["collisionTest"],
		weight : 25
	},
	treestump1 : {
	    image : "assets/level1/static/treestump.png",
	    position : [-554, 1500],
	    behaviours : ["collisionTest"],
		weight : 20
	},
	treestump2 : {
	    image : "assets/level1/static/treestump.png",
	    position : [844, 1927],
	    behaviours : ["collisionTest"],
		weight : 20
	},
	treehouse : {
	    image : "assets/level1/static/treehouse.png",
	    position : [-620, 720],
	    behaviours : ["collisionTest"],
		weight : 35
	},
	tree_lurker : {
	    image : "assets/level1/static/tree_lurker.png",
	    position : [882, 1358],
	    behaviours : ["collisionTest"],
		weight : 20
	},
	huge_apple1 : {
	    image : "assets/level1/static/huge_apple.png",
	    position : [-1278, 544],
	    behaviours : ["collisionTest"],
		weight : 15
	},
	huge_apple2 : {
	    image : "assets/level1/static/huge_apple.png",
	    position : [-754, 167],
	    behaviours : ["collisionTest"],
		weight : 15
	},
	huge_apple3 : {
	    image : "assets/level1/static/huge_apple.png",
	    position : [-1121, 232],
	    behaviours : ["collisionTest"],
		weight : 15
	},
	owl : {
	    image : "assets/level1/static/owl.png",
	    position : [319, 1290],
	    behaviours : ["collisionTest"],
		weight : 20
	},
	birdnest : {
	    image : "assets/level1/static/birdnest.png",
	    position : [705, 754],
	    behaviours : ["collisionTest"],
		weight : 15
	},
	lettuce1 : {
	    image : "assets/level1/static/lettuce.png",
	    position : [-1200, 1677],
	    behaviours : ["collisionTest"],
		weight : 10
	},
	lettuce2 : {
	    image : "assets/level1/static/lettuce.png",
	    position : [-484, 1917],
	    behaviours : ["collisionTest"],
		weight : 10
	},
	lettuce3 : {
	    image : "assets/level1/static/lettuce.png",
	    position : [1136, 1879],
	    behaviours : ["collisionTest"],
		weight : 10
	},
	deer1 : {
	    image : "assets/level1/static/deer.png",
	    position : [370, 1896],
	    behaviours : ["collisionTest"],
		weight : 35
	},
	deer2 : {
	    image : "assets/level1/static/deer.png",
	    position : [-987, 1862],
	    behaviours : ["collisionTest"],
		weight : 35
	},
	spy1 : {
	    image : "assets/level1/static/spy1.png",
	    position : [-50, 1906],
	    behaviours : ["collisionTest"],
		weight : 30
	},
	spy2 : {
	    image : "assets/level1/static/spy2.png",
	    position : [-750, 1342],
	    behaviours : ["collisionTest"],
		weight : 30
	},
	spy3 : {
	    image : "assets/level1/static/spy3.png",
	    position : [498, 1648],
	    behaviours : ["collisionTest"],
		weight : 30
	},
	angry_bear : {
	    image : "assets/level1/static/angry_bear.png",
	    position : [1350, 1900],
	    behaviours : ["collisionTest"],
		weight : 40
	},
	pink_pony : {
	    image : "assets/level1/static/pink_pony.png",
	    position : [1350, 1675],
	    behaviours : ["collisionTest"]
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
	    weight : 30
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
	    weight : 45
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
	    weight : 25
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
	    weight : 30
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
	    weight : 30
	},
	monkey : {
	    image : "assets/level1/spawnable/monkey.png",
	    velocity : [0, -2],
	    acceleration : [0, 0.2],
	    spin : 0.1,
	    weight : 25
	},
	flying_squirrel : {
	    image : "assets/level1/spawnable/flying_squirrel.png",
	    velocity : [-1, 0],
	    acceleration : [-0.01, 0],
	    weight : 25
	},
	floss_cloud1 : {
	    image : "assets/level1/spawnable/floss_cloud1.png", 
	    velocity : [-1, 0],
	    weight : 10
	},
	floss_cloud2 : {
	    image : "assets/level1/spawnable/floss_cloud2.png", 
	    velocity : [-1, 0],
	    weight : 10
	},
	floss_cloud3 : {
	    image : "assets/level1/spawnable/floss_cloud3.png", 
	    velocity : [-1, 0],
	    weight : 10
	},
	hotair_balloon1 : {
		image : "assets/level1/spawnable/hotair_balloon1.png",
		velocity : [0.5, 0],
		weight : 30
	},
	hotair_balloon2 : {
		image : "assets/level1/spawnable/hotair_balloon2.png",
		velocity : [1, 0],
		weight : 30
	},
	hotair_balloon3 : {
		image : "assets/level1/spawnable/hotair_balloon3.png",
		velocity : [-0.5, 0],
		weight : 30
	},
	hotair_balloon4 : {
		image : "assets/level1/spawnable/hotair_balloon4.png",
		velocity : [-1, 0],
		weight : 30
	},
	barbecue_chicken : {
	    image : "assets/level1/spawnable/barbecue_chicken.png",
	    velocity : [1, 0],
	    weight : 25
	},
	canon_king : {
	    image : "assets/level1/spawnable/canon_king.png",
	    velocity : [3, -2],
	    acceleration : [0, 0.5],
	    spin : 0.05,
	    weight : 40
	},
	magic_carpet_man : {
	    image : "assets/level1/spawnable/magic_carpet_man.png",
	    velocity : [-1, 0],
	    acceleration : [-0.01, 0],
	    weight : 30
	},
	music : {
	    image : "assets/level1/spawnable/music.png",
	    velocity : [0.5, -0.5],
	    weight : 20
    },
	},

   spawnZones : {
	forest : {
	    bounds : [-1500, -183, 3000, 1616],
	    items : ["monkey", "flying_squirrel", "bat", "flying_duck", "penguin", "swan"],
	    frequency : 1
	},
	sky : {
	    bounds : [-1500, -2100, 3000, 2000],
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