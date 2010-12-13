levels[1] = {
    background : "assets/level2/background.jpg",
    bounds : [-1500, -2100, 3000, 4200],
    startPoint : [-1363, 1603],
    balloonStandPosition : [-580, 100],

    parameters : {
	inventory : []
    },

    triggers : {
	bagLady : {
	    object : "balloon",
	    bounds : [-900, -200, 600, 400],
	    onEnter : "Level.Scripts.meetLady",
	    onInside : "hoverBalloon",
	    onLeave : "girlShutup"
	}
    },

    dialogue : {
	metLadyFirstTime : {
	    image : "assets/level2/dialogue/01meeting/01.png",
	    animation : {
		frames : [["assets/level2/dialogue/01meeting/01.png", 2000],
			  ["assets/level2/dialogue/01meeting/02.png",2000],
			  ["assets/level2/dialogue/01meeting/03.png",2000],
			  ["assets/level2/dialogue/01meeting/04.png",2000],
			  ["assets/level2/dialogue/01meeting/05.png",2000],
			  ["assets/level2/dialogue/01meeting/06.png",2000],
			  ["assets/level2/dialogue/01meeting/07.png",2000],
			  ["assets/level2/dialogue/01meeting/08.png", 2000]],
		looping : false
	    },
	    position : [-530, 100]
	},
	returnNoCat : {
	    image : "assets/level2/dialogue/02returnnocat/01.png",
	    animation : {
		frames : [["assets/level2/dialogue/02returnnocat/01.png", 2000],
			  ["assets/level2/dialogue/02returnnocat/02.png",2000],
			  ["assets/level2/dialogue/02returnnocat/03.png",2000],
			  ["assets/level2/dialogue/02returnnocat/04.png",2000]],
		looping : false
	    },
	    position : [-530, 100]
	},
	returnWithCat : {
	    image : "assets/level2/dialogue/03returnwithcat/01.png",
	    animation : {
		frames : [["assets/level2/dialogue/03returnwithcat/01.png", 2000],
			  ["assets/level2/dialogue/03returnwithcat/02.png",2000],
			  ["assets/level2/dialogue/03returnwithcat/03.png",2000],
			  ["assets/level2/dialogue/03returnwithcat/04.png",2000],
			  ["assets/level2/dialogue/03returnwithcat/05.png",2000],
			  ["assets/level2/dialogue/03returnwithcat/06.png",2000],
			  ["assets/level2/dialogue/03returnwithcat/07.png",2000],
			  ["assets/level2/dialogue/03returnwithcat/08.png",2000],
			  ["assets/level2/dialogue/03returnwithcat/09.png",2000],
			  ["assets/level2/dialogue/03returnwithcat/10.png",2000]],
		looping : false
	    },
	    position : [-530, 100]
	},
    },


    staticSprites : {
	art_noveau_lamp : {
	    image : "assets/level2/static/art_noveau_lamp.png",
	    position : [-885, -1200],
	    behaviours : ["collisionTest"],
		weight : .3
	},
	bra : {
	    image : "assets/level2/static/bra.png",
	    position : [430, -275],
	    behaviours : ["collisionTest"],
		weight : .20
	},
	dress : {
	    image : "assets/level2/static/dress.png",
	    position : [613, -692],
	    behaviours : ["collisionTest"],
		weight : .30
    },
	hit_by_cactus : {
	    image : "assets/level2/static/hit_by_cactus.png",
	    position : [-750, -705],
	    behaviours : ["collisionTest"],
		weight : .45
    },
	king_kong : {
	    image : "assets/level2/static/king_kong.png",
	    position : [1219, -1320],
	    behaviours : ["collisionTest"],
		weight : .65
    },
	lurker : {
	    image : "assets/level2/static/lurker.png",
	    position : [-1425, -190],
	    behaviours : ["collisionTest"],
		weight : .40
    },
	nightie : {
	    image : "assets/level2/static/nightie.png",
	    position : [-440, -1110],
	    behaviours : ["collisionTest"],
		weight : .30
    },
	sexy_dress : {
	    image : "assets/level2/static/sexy_dress.png",
	    position : [287, -263],
	    behaviours : ["collisionTest"],
		weight : .30
    },
	sheet1 : {
	    image : "assets/level2/static/sheet1.png",
	    position : [-330, -920],
	    behaviours : ["collisionTest"],
		weight : .30
    },
	sheet2 : {
	    image : "assets/level2/static/sheet2.png",
	    position : [-345, -1280],
	    behaviours : ["collisionTest"],
		weight : .30
    },
	shirt : {
	    image : "assets/level2/static/shirt.png",
	    position : [256, -760],
	    behaviours : ["collisionTest"],
		weight : .30
    },
	shorts : {
	    image : "assets/level2/static/shorts.png",
	    position : [461, -725],
	    behaviours : ["collisionTest"],
		weight : .30
    },
	skirt : {
	    image : "assets/level2/static/skirt.png",
	    position : [110, -860],
	    behaviours : ["collisionTest"],
		weight : .30
    },
	socks1 : {
	    image : "assets/level2/static/socks1.png",
	    position : [-80, -1050],
	    behaviours : ["collisionTest"],
		weight : .02
    },
	socks2 : {
	    image : "assets/level2/static/socks2.png",
	    position : [80, -460],
	    behaviours : ["collisionTest"],
		weight : .030
    },
	swimsuit : {
	    image : "assets/level2/static/swimsuit.png",
	    position : [-55, -600],
	    behaviours : ["collisionTest"],
		weight : .30
    },
	the_husband : {
	    image : "assets/level2/static/the_husband.png",
	    position : [1021, 260],
	    behaviours : ["collisionTest"],
		weight : .40
    },
	the_lover : {
	    image : "assets/level2/static/the_lover.png",
	    position : [703, 565],
	    behaviours : ["collisionTest"],
		weight : .40
    },
	the_wife : {
	    image : "assets/level2/static/the_wife.png",
	    position : [813, 305],
	    behaviours : ["collisionTest"],
		weight : .40
    },
	tight_pants : {
	    image : "assets/level2/static/tight_pants.png",
	    position : [-195, -1130],
	    behaviours : ["collisionTest"],
		weight : .030
    },
	towel1 : {
	    image : "assets/level2/static/towel1.png",
	    position : [0, -930],
	    behaviours : ["collisionTest"],
		weight : .30
    },
	towel2 : {
	    image : "assets/level2/static/towel2.png",
	    position : [175, -350],
	    behaviours : ["collisionTest"],
		weight : .30
    },
	trousers1 : {
	    image : "assets/level2/static/trousers1.png",
	    position : [-215, -780],
	    behaviours : ["collisionTest"],
		weight : .30
    },
	trousers2 : {
	    image : "assets/level2/static/trousers2.png",
	    position : [560, -230],
	    behaviours : ["collisionTest"],
		weight : .30
    },
	tshirt : {
	    image : "assets/level2/static/tshirt.png",
	    position : [-5, -530],
	    behaviours : ["collisionTest"],
		weight : .30
    },
	underpants1 : {
	    image : "assets/level2/static/underpants1.png",
	    position : [-110, -700],
	    behaviours : ["collisionTest"],
		weight : .30
    },
	underpants2 : {
	    image : "assets/level2/static/underpants2.png",
	    position : [650, -320],
	    behaviours : ["collisionTest"],
		weight : .30
    },
	whistlers_mother : {
	    image : "assets/level2/static/whistlers_mother.png",
	    position : [1134, 535],
	    behaviours : ["collisionTest"],
		weight : .30
    },
		happy_cat : {
	    image : "assets/level2/animated/happy_cat/happy_cat01.png",
		position : [1146, 1330],
	    animation : {
		frames : [["assets/level2/animated/happy_cat/happy_cat01.png", 100], 
			  ["assets/level2/animated/happy_cat/happy_cat02.png", 200]],
		looping : true
	    },
	    behaviours : ["catPickup", "collisionTest"]
	},
	},

    spawnableSprites : {
	biking_boy : {
	    image : "assets/level2/animated/biking_boy/biking_boy01.png",
	    animation : {
		frames : [["assets/level2/animated/biking_boy/biking_boy01.png", 100], 
			  ["assets/level2/animated/biking_boy/biking_boy02.png", 200],
			  ["assets/level2/animated/biking_boy/biking_boy03.png", 300],
			  ["assets/level2/animated/biking_boy/biking_boy04.png", 400]],
		looping : true
	    },
	    velocity : [2, 0],
	    acceleration : [0.05, 0],
	    weight : - .40
	},
	rain_cloud : {
	    image : "assets/level2/animated/rain_cloud/rain_cloud01.png",
	    animation : {
		frames : [["assets/level2/animated/rain_cloud/rain_cloud01.png", 100], 
			  ["assets/level2/animated/rain_cloud/rain_cloud02.png", 200]],
		looping : true
	    },
	    velocity : [1, 0],
	    acceleration : [0.005, 0],
	    weight : - .30
	},
	windy_cloud : {
	    image : "assets/level2/animated/windy_cloud/windy_cloud01.png",
	    animation : {
		frames : [["assets/level2/animated/windy_cloud/windy_cloud01.png", 100], 
			  ["assets/level2/animated/windy_cloud/windy_cloud02.png", 200]],
		looping : true
	    },
	    velocity : [-1, 0],
	    acceleration : [0.005, 0],
	    weight : -.30
	},
	hovercar1 : {
		image : "assets/level2/spawnable/hovercar1.png",
		velocity : [5, 0],
		weight : -.50
	},
	hovercar2 : {
		image : "assets/level2/spawnable/hovercar2.png",
		velocity : [4, 0],
		weight : - .50
	},
	man_on_moped : {
		image : "assets/level2/spawnable/man_on_moped.png",
		velocity : [3, 0],
		weight : - .30
	},
	school_bus : {
		image : "assets/level2/spawnable/school_bus.png",
		velocity : [3, 0],
		weight : - .60
	},
	/*stork_with_baby : {
		image : "assets/level2/spawnable/stork_with_baby.png",
		velocity : [-2, 0],
		weight : - .25
	},*/
	superhero : {
		image : "assets/level2/spawnable/superhero.png",
		velocity : [6, 0],
		weight : -.40
	},
	woman_on_moped : {
		image : "assets/level2/spawnable/woman_on_moped.png",
		velocity : [2, 0],
		weight : -.35
	},
	yarn1 : {
		image : "assets/level2/spawnable/yarn1.png",
		velocity : [-1.5, -1.5],
		acceleration : [0, 0.05],
		spin : 0.15,
		weight : .030
	},
	yarn2 : {
		image : "assets/level2/spawnable/yarn2.png",
		velocity : [1.5, 1.5],
		acceleration : [0, 0.05],
		spin : 0.15,
		weight : .030
	},
	yarn3 : {
		image : "assets/level2/spawnable/yarn3.png",
		velocity : [-2, -2],
		acceleration : [0, 0.05],
		spin : 0.15,
		weight : .030
	},
	yarn4 : {
		image : "assets/level2/spawnable/yarn4.png",
		velocity : [2, 2],
		acceleration : [0, 0.05],
		spin : 0.15,
		weight : 0.030
	},
    },

    spawnZones : {
	big_island : {
	    bounds : [442, 1340, 1058 , 500],
	    items : ["yarn1", "yarn2", "yarn3", "yarn4"],
	    frequency : 20
	},
	sky : {
	    bounds : [-1500, -2100, 3000, 4200],
	    items : ["hovercar1", "hovercar2", "man_on_moped", "school_bus", /*"stork_with_baby"*/, "superhero", "woman_on_moped","biking_boy", "rain_cloud", "windy_cloud"],
	    frequency : 0.5
	}
    }
};
