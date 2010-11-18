level = {
    background : "assets/background.jpg",
    bounds : [-1500, -2100, 3000, 4200],
    startPoint : [0, 0],
    balloonStand : [-700, -1500],
    sprites : {
	monkey : {
	    image : "assets/trees/monkey.png",
	    velocity : [3, -2],
	    acceleration : [0, 0.2]
	}
    },
    spawnZones : {
	forest : {
	    bounds : [-1500, -2100, 3000, 4200],
	    items : ["monkey"]
	}
    }
};