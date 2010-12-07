level = {
    background : "assets/background.jpg",
    bounds : [-1500, -2100, 3000, 4200],
    startPoint : [0, 1300],
    balloonStand : [-1300, -1050, 400, 300],

    staticSprites : {
	monkey : {
	    image : "assets/trees/monkey.png",
	    position : [30, 20],
	    behaviours : ["collisionTest"] },
	arrow1 : {
	    image : "assets/arrow_1.png",
	    position : [300, 220],
	    direction : 20
	}
    },

    spawnableSprites : {
	monkey : {
	    image : "assets/trees/monkey.png",
	    animation : {
		frames : [["assets/trees/monkey.png", 100], 
			  ["assets/sky/flying_pig.png", 200] ],
		looping : true
	    },
	    velocity : [3, -2],
	    acceleration : [0, 0.2],
	    spin : 0.1,
	    weight : 30
	},

	pig : {
	    image : "assets/sky/flying_pig.png",
	    weight : 50
	}
    },

    spawnZones : {
	forest : {
	    bounds : [-1500, -2100, 3000, 4200],
	    items : ["monkey", "pig"],
	    frequency : 0.5
	}
    }
};
