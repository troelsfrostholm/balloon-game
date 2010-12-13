levels[4] = {
    background : "assets/level5/background.jpg",
    bounds : [-1500, -2100, 3000, 4200],
    startPoint : [-954, 1288],
    balloonStandPosition : [-912, -1160],

    parameters : {
        guestCount : 0
    },

   dialogue : {
	    meetFirstTime : {
	        image : "assets/level5/dialogue/02meetingwithouttourists/01.png",
	        animation : {
		        frames : [["assets/level5/dialogue/02meetingwithouttourists/01.png", 2000],
			          ["assets/level5/dialogue/02meetingwithouttourists/02.png",2000],
			          ["assets/level5/dialogue/02meetingwithouttourists/03.png",2000],
			          ["assets/level5/dialogue/02meetingwithouttourists/04.png",2000],
			          ["assets/level5/dialogue/02meetingwithouttourists/05.png",2000],
			          ["assets/level5/dialogue/02meetingwithouttourists/06.png",2000],
			          ["assets/level5/dialogue/02meetingwithouttourists/07.png",2000]],
		        looping : false
	        },
	        position : [-912, -1160]
	    },
        returnWithoutSailors : {
	        image : "assets/level5/dialogue/04returnwithouttourists/01.png",
	        animation : {
		        frames : [["assets/level5/dialogue/04returnwithouttourists/01.png", 2000],
			          ["assets/level5/dialogue/04returnwithouttourists/02.png",2000],
			          ["assets/level5/dialogue/04returnwithouttourists/03.png",2000],
			          ["assets/level5/dialogue/04returnwithouttourists/04.png",2000],
			          ["assets/level5/dialogue/04returnwithouttourists/05.png",2000],
                      ["assets/level5/dialogue/04returnwithouttourists/06.png",2000]],
		        looping : false
	        },
	        position : [-912, -1160]
	    },
        returnWithSailors : {
	        image : "assets/level5/dialogue/03returnwithtourists/01.png",
	        animation : {
		        frames : [["assets/level5/dialogue/03returnwithtourists/01.png", 2000],
			          ["assets/level5/dialogue/03returnwithtourists/02.png",2000],
			          ["assets/level5/dialogue/03returnwithtourists/03.png",2000],
			          ["assets/level5/dialogue/03returnwithtourists/04.png",2000],
			          ["assets/level5/dialogue/03returnwithtourists/05.png",2000]],
		        looping : false
	        },
	        position : [-912, -1160]
	    }
    },

    triggers : {
	    balloonStand : {
	        bounds : [-1259, -1283, 500, 417],
	        onEnter : "Level.Scripts.meetRobot",
	        onInside : "hoverBalloon",
	        onLeave : "girlShutup",
                object : "balloon"
	    }
    },

    staticSprites : {
	bathing_beauty : {
	    image : "assets/level5/static/bathing_beauty.png",
	    position : [170, 1327],
	    behaviours : ["touristPickup", "collisionTest"],
		weight : + 0.1
	},
	bully : {
	    image : "assets/level5/static/bully.png",
	    position : [405, 1303],
	    behaviours : ["touristPickup", "collisionTest"],
		weight : + 0.1
	},
	flexing : {
	    image : "assets/level5/static/flexing.png",
	    position : [-45, 1284],
	    behaviours : ["touristPickup", "collisionTest"],
		weight : + 0.1
	},
	human_pyramid : {
	    image : "assets/level5/static/human_pyramid.png",
	    position : [-740, 1225],
	    behaviours : ["touristPickup", "collisionTest"],
		weight : + 0.1
	},
	kid_splashing_water : {
	    image : "assets/level5/static/kid_splashing_water.png",
	    position : [559, 1301],
	    behaviours : ["touristPickup", "collisionTest"],
		weight : + 0.1
	},
	plant1 : {
	    image : "assets/level5/static/plant1.png",
	    position : [-58, 280],
	    behaviours : ["collisionTest"],
		weight : + 0.1
	},
	plant2 : {
	    image : "assets/level5/static/plant2.png",
	    position : [521, 270],
	    behaviours : ["collisionTest"],
		weight : + 0.1
	},
	plant3 : {
	    image : "assets/level5/static/plant3.png",
	    position : [1068, 275],
	    behaviours : ["collisionTest"],
		weight : + 0.1
	},
	photographer : {
	    image : "assets/level5/animated/photographer/photographer01.png",
	    animation : {
		frames : [["assets/level5/animated/photographer/photographer01.png", 150], 
			  ["assets/level5/animated/photographer/photographer02.png", 300],],
		looping : true
	    },
	    position : [707, 354],
	    behaviours : ["touristPickup", "collisionTest"],
	    weight : + 0.1
	},
	school_kids : {
	    image : "assets/level5/static/school_kids.png",
	    position : [365, -830],
	    behaviours : ["touristPickup", "collisionTest"],
		weight : + 0.1
	},
	screaming_kid : {
	    image : "assets/level5/static/screaming_kid.png",
	    position : [550, -843],
	    behaviours : ["touristPickup", "collisionTest"],
		weight : + 0.1
	},
	splashing_girl : {
	    image : "assets/level5/static/splashing_girl.png",
	    position : [700, 1300],
	    behaviours : ["touristPickup", "collisionTest"],
		weight : + 0.1
	},
	sunburned_man : {
	    image : "assets/level5/static/sunburned_man.png",
	    position : [-326, 1314],
	    behaviours : ["touristPickup", "collisionTest"],
		weight : + 0.1
	},
	supermodel : {
	    image : "assets/level5/static/supermodel.png",
	    position : [300, 300],
	    behaviours : ["touristPickup", "collisionTest"],
		weight : + 0.1
	},
	swimming_pool : {
	    image : "assets/level5/static/swimming_pool.png",
	    position : [580, 1348],
	    behaviours : ["collisionTest"],
		weight : + 0.1
	},
	tall_girl : {
	    image : "assets/level5/static/tall_girl.png",
	    position : [751, -875],
	    behaviours : ["touristPickup", "collisionTest"],
		weight : + 0.1
	},
	robotic_waitress : {
	    image : "assets/level5/static/robotic_waitress.png",
	    position : [858, 310],
	    behaviours : ["collisionTest"],
		weight : + 0.1
	},
	hotel_column : {
	    image : "assets/level5/static/hotel_column.png",
	    position : [1034, 910],
	    behaviours : ["impassableToBalloon"]
	},
	hotel_platform : {
	    image : "assets/level5/static/hotel_platform.png",
	    position : [540, 469],
	    behaviours : ["impassableToBalloon"]
	},
	hotel_pool : {
	    image : "assets/level5/static/hotel_pool.png",
	    position : [100, 1450],
	    behaviours : ["impassableToBalloon"]
	},
    },
	
	spawnableSprites : {
	milky_way_tours : {
	    image : "assets/level5/animated/milky_way_tours/milky_way_tours01.png",
	    animation : {
		frames : [["assets/level5/animated/milky_way_tours/milky_way_tours01.png", 150], 
			  ["assets/level5/animated/milky_way_tours/milky_way_tours02.png", 300],],
		looping : true
	    },
	    velocity : [2.5, 0],
	    weight : + 0.1
	},
	mr_optimistic : {
	    image : "assets/level5/animated/mr_optimistic/mr_optimistic01.png",
	    animation : {
		frames : [["assets/level5/animated/mr_optimistic/mr_optimistic01.png", 50], 
			  ["assets/level5/animated/mr_optimistic/mr_optimistic02.png", 100],
			  ["assets/level5/animated/mr_optimistic/mr_optimistic03.png", 150],
			  ["assets/level5/animated/mr_optimistic/mr_optimistic04.png", 200],
			  ["assets/level5/animated/mr_optimistic/mr_optimistic05.png", 250],
			  ["assets/level5/animated/mr_optimistic/mr_optimistic06.png", 300],
			  ["assets/level5/animated/mr_optimistic/mr_optimistic07.png", 350],],
		looping : true
	    },
	    velocity : [1.5, 2],
		spin : 0.05,
	    weight : + 0.1
	},
	photographer : {
	    image : "assets/level5/animated/photographer/photographer01.png",
	    animation : {
		frames : [["assets/level5/animated/photographer/photographer01.png", 150], 
			  ["assets/level5/animated/photographer/photographer02.png", 300],],
		looping : true
	    },
	    velocity : [0, 0],
	    weight : + 0.1
	},
	asteroid : {
	    image : "assets/level5/spawnable/asteroid.png",
		velocity : [5, 4],
		spin : 0.05,
	    weight : + 0.1
	},
	beach_ball : {
	    image : "assets/level5/spawnable/beach_ball.png",
		velocity : [-2, -1],
		spin : -0.005,
	    weight : + 0.1
	},
	black_hole : {
	    image : "assets/level5/spawnable/black_hole.png",
		velocity : [-7, 5],
	    weight : + 0.1
	},
	comet : {
	    image : "assets/level5/spawnable/comet.png",
		velocity : [-6, 2],
	    weight : + 0.1
	},
	flying_spaghetti_monster : {
	    image : "assets/level5/spawnable/flying_spaghetti_monster.png",
		velocity : [2, -2],
	    weight : + 0.1
	},
	space_shuttle : {
	    image : "assets/level5/spawnable/space_shuttle.png",
		velocity : [6, 0],
	    weight : + 0.1
	},
	star1 : {
	    image : "assets/level5/spawnable/star1.png",
		velocity : [0, 0],
		weight : + 0.1
	},
	star2 : {
	    image : "assets/level5/spawnable/star2.png",
		velocity : [0, 0],
		weight : + 0.1
	},
	star3 : {
	    image : "assets/level5/spawnable/star3.png",
		velocity : [0, 0],
		weight : + 0.1
	},
	star4 : {
	    image : "assets/level5/spawnable/star4.png",
		velocity : [0, 0],
		weight : + 0.1
	},
	timetravelers : {
	    image : "assets/level5/spawnable/timetravelers.png",
		velocity : [0, -5],
		weight : + 0.1
	},
	ufo : {
	    image : "assets/level5/spawnable/ufo.png",
		velocity : [-4, 0],
	    weight : + 0.1
	},
	},

   spawnZones : {
   space : {
	    bounds : [-1500, -2100, 3000, 4200],
	    items : ["milky_way_tours", "mr_optimistic", "asteroid", "beach_ball", "black_hole", "comet", "flying_spaghetti_monster", "space_shuttle", "timetravelers", "star1", "star2", "star3", "star4", "ufo"],
	    frequency : 0.5
	},
    }
};
