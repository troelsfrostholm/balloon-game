var Ending = {}

//imgNames : [filename, duration, skip forward to frame, skip back to frame] 
Ending.imgNames = [
"scene 10001.jpg", 500,
"scene 10002.jpg", 500,
"scene 10003.jpg", 500,
"scene 10004.jpg", 500,
"scene 10001.jpg", 500,
"scene 10002.jpg", 500,
"scene 10003.jpg", 500,
"scene 10004.jpg", 500,
"scene 10001.jpg", 500,
"scene 10002.jpg", 500,
"scene 10003.jpg", 500,
"scene 10004.jpg", 500,
"scene 10001.jpg", 500,
"scene 10002.jpg", 500,
"scene 10003.jpg", 500,
"scene 10004.jpg", 500,
	"scene 20001.jpg", 500,
	"scene 20002.jpg", 500,
	"scene 20003.jpg", 500,
	"scene 20004.jpg", 500,
	"scene 20005.jpg", 500,
	"scene 20006.jpg", 500,
	"scene 20007.jpg", 500,
	"scene 20008.jpg", 500,
	"scene 20009.jpg", 500,
	"scene 20010.jpg", 500,
	"scene 20011.jpg", 500,
	"scene 20012.jpg", 500,
	"scene 20013.jpg", 500,
	"scene 20014.jpg", 500,
		"scene 30001.jpg", 1000,
		"scene 30002.jpg", 1000,
		"scene 30003.jpg", 2000,
		"scene 30004.jpg", 1000,
		"scene 30005.jpg", 1000,
		"scene 30006.jpg", 2000,
		"scene 40001.jpg", 3000,


];

ending = function()
{
//    document.getElementById("intro").volume = 1;
  //  document.getElementById("intro").play();    

    canvas.height = document.documentElement.clientHeight-40;
    canvas.width = document.documentElement.clientWidth-20;

    var imgNames = Ending.imgNames;
    Game.behaviours = [];
    Game.sprites = [];
    Game.hudElements = {};
    frames = [];
    var path = "assets/cutscene/ending/";
    var numFrames = 86;
    var frame;
    var img;
    var duration = 1000;

    for(var i=0; i<imgNames.length/2; i++) {
	img = new Image();
        img.src = path+imgNames[i*2];
	duration = imgNames[i*2+1];
	frame = new Frame(img, duration);
	frames.push(frame);
    }

    var s = new Sprite();
    s.place(canvas.width/2, canvas.height/2);
    s.setAnimation(new Animation(frames));
    s.scale = canvas.width/s.animation.frames[0].image.width;
    s.animation.onEnd = endGame;

    var cursor = new Sprite();
    cursor.setImg("assets/interface/cursor-click.png");
    
    Game.clear();
    Game.hudElements.intro = s;
    Game.hudElements.cursor = cursor;
    Game.hudElements.cursor.behave(Behaviours.followMouse);
    setTimeout("mouseclick = endGame", 200);
    window.onresize = function() { };

    s.animation.play();
    document.getElementById("ending").play();
    document.getElementById("level01_start").pause();
    document.getElementById("level01").pause();
};

function endGame(point)
{
    mainMenu();
    document.getElementById("ending").pause(); 
};
