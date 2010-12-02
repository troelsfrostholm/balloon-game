var mainmenu = {
    background : {
	image : "assets/main_menu/menu-background.jpg",
	position : [0, 0]
    },
    credits : {
	image : "assets/main_menu/credits.png",
	position : [850, 70]
    },
    cloud : {
	image : "assets/main_menu/rotating-cloud.png",
	position : [850, 600]
    },
    newgame : {
	image : "assets/main_menu/start-new-game.png",
	position : [800, 430],
	onclick : "newgame"
    },
    instructions : {
	image : "assets/main_menu/instructions.png",
	position : [800, 480]
    },
    resume : {
	image : "assets/main_menu/resume-inactive.png",
	position : [800, 530]
    },
    title : {
	image : "assets/main_menu/title.png",
	position : [300, 200]
    },
    cursor : {
	image : "assets/cursor.png",
	position : [400, 400]
    }
};

var Events = {
    newgame : function() {
	begin();
    }
}

function mainMenu()
{
    var sprites = loadHudElements(mainmenu);
    Game.hudElements = sprites;
    Game.hudElements.cloud.spin(0.01);
    Game.hudElements.cursor.behave(Behaviours.followMouse);
    Game.run();
    resizeMainMenu();
    window.onresize = resizeMainMenu;
}

//returs hud elements as sprites
//does not support text elements (yet)
function loadHudElements(hudJson)
{
    return mapObject(loadHudElement, hudJson);
}

function loadHudElement(element)
{
    var elm = new Sprite();
    elm.image.src = element.image;
    elm.pos[0] = new Point(element.position[0], element.position[1]);
    var onclick = loadEvent(element.onclick);
    if(onclick) elm.onclick = onclick;
    return elm;
}

function loadEvent(event)
{
    if(typeof(event) == "string") {
	if(typeof(Events[event]) == "function")
	    {
		return Events[event];
	    }
	else
	    {
		console.log("Warning: event " + event + " does not exist i Events. ");
		return undefined;
	    }
    }
}

function resizeMainMenu()
{
    canvas.height = document.documentElement.clientHeight-40;
    canvas.width = document.documentElement.clientWidth-20;
    Game.hudElements.background.place(canvas.width/2, canvas.height/2);

    Game.sprites
}