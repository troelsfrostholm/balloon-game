var mainmenu = {
    background : {
	image : "assets/main_menu/menu-background.jpg",
	position : [0, 0]
    },
    credits : {
	image : "assets/main_menu/credits.png",
	position : [190, 600]
    },
    cloud : {
	image : "assets/main_menu/rotating-cloud.png",
	position : [800, 620]
    },
    planet : {
	image : "assets/main_menu/planet.png",
	position : [810, 100]
    },
    newgame : {
	image : "assets/main_menu/start-new-game.png",
	position : [800, 470],
	onclick : "newgame"
    },
    instructions : {
	image : "assets/main_menu/instructions.png",
	position : [800, 520],
	onclick : "tutorial"
    },
    resume : {
	image : "assets/main_menu/resume-inactive.png",
	position : [800, 570]
    },
    title : {
	image : "assets/main_menu/title.png",
	position : [320, 230]
    },
    cursor : {
	image : "assets/interface/cursor-click.png",
	position : [400, 400]
    }
};

var Events = {
    newgame : function() {
	intro();
    },
    tutorial : function() {
	tutorial();
    }
}

function mainMenu()
{
    document.getElementById("circus").volume = 0;
    var sprites = loadHudElements(mainmenu);
    Game.hudElements = sprites;
    Game.hudElements.cloud.spin(0.01);
    Game.hudElements.cloud.behave(Behaviours.hover);
    Game.hudElements.cursor.behave(Behaviours.followMouse);
    if(stashedLevel)
    {
        Game.hudElements.resume.setImg("assets/main_menu/resume-active.png");
        Game.hudElements.resume.onclick = resume;
    }
    window.onresize = resizeMainMenu;
    resizeMainMenu();
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
    elm.setImg(element.image);
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
    console.log("Resizing menu...");
    canvas.height = document.documentElement.clientHeight-40;
    canvas.width = document.documentElement.clientWidth-20;
    Game.hudElements.background.place(canvas.width/2, canvas.height/2);
    // Scale menu items and place them according to resolution. Fix it! Fix it! Fix it! Fix it! Fix it! Fix it!
        Game.hudElements.title.pos[0].x = 320 * canvas.width/1200; //Math.max(1200, canvas.width);
        Game.hudElements.title.pos[0].y = 230 * canvas.height/800; //Math.max(800, canvas.width);
        Game.hudElements.title.scale = canvas.width/Math.max(1200, canvas.width);
    // Fix it! Fix it! Fix it! Fix it! Fix it! Fix it!
}