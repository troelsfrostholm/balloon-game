var Intro = {}

//imgNames : [filename, duration, skip forward to frame, skip back to frame] 
Intro.imgNames = [
"scene 10001.jpg", 750,
"scene 10002.jpg", 750,
"scene 10001.jpg", 750,
"scene 10002.jpg", 750,
"scene 10001.jpg", 750,
"scene 10002.jpg", 750,
"scene 10001.jpg", 750,
"scene 10002.jpg", 750,
"scene 10001.jpg", 750,
	"scene 20001.jpg", 200,
"scene 20002.jpg", 200,
"scene 20003.jpg", 200,
"scene 20004.jpg", 200,
"scene 20005.jpg", 200,
"scene 20006.jpg", 200,
"scene 20007.jpg", 200,
"scene 20008.jpg", 200,
"scene 20009.jpg", 200,
"scene 20010.jpg", 200,
"scene 20011.jpg", 200,
"scene 20012.jpg", 200,
"scene 20013.jpg", 200,
"scene 20014.jpg", 200,
"scene 20015.jpg", 200,
"scene 20016.jpg", 200,
"scene 20017.jpg", 200,
"scene 20018.jpg", 200,
"scene 20019.jpg", 200,
"scene 20020.jpg", 200,
"scene 20021.jpg", 200,
"scene 20022.jpg", 200,
"scene 20023.jpg", 200,
"scene 20024.jpg", 200,
"scene 20025.jpg", 200,
	"scene 30001.jpg", 1000,
"scene 30002.jpg", 1000,
"scene 30003.jpg", 1000,
"scene 30004.jpg", 1000,
"scene 30005.jpg", 1000,
	"scene 40001.jpg",750,
"scene 40002.jpg", 750,
"scene 40003.jpg", 750,
"scene 40001.jpg", 750,
"scene 40002.jpg", 750,
"scene 40003.jpg", 750,
"scene 40001.jpg", 750,
"scene 40002.jpg", 750,
"scene 40003.jpg", 750,
	"scene 50001.jpg", 4000,
	"scene 60001.jpg", 4000,
"scene 70001.jpg", 3000,
"scene 70002.jpg", 200,
"scene 70003.jpg", 200,
"scene 70004.jpg", 200,
"scene 70005.jpg", 200,
"scene 70006.jpg", 200,
"scene 70007.jpg", 200,
"scene 70008.jpg", 200,
"scene 70009.jpg", 200,
"scene 70010.jpg", 200,
"scene 70011.jpg", 200,
"scene 70012.jpg", 200,
"scene 70013.jpg", 200,
"scene 70014.jpg", 200,
"scene 70015.jpg", 200,
"scene 70016.jpg", 200,
"scene 70017.jpg", 200,
"scene 70018.jpg", 200,
"scene 70019.jpg", 200,
"scene 70020.jpg", 200,
"scene 70021.jpg", 1500,
"scene 70001.jpg", 1000,
	"scene 80001.jpg", 300,
"scene 80002.jpg", 300,
"scene 80003.jpg", 300,
"scene 80004.jpg", 300,
"scene 80005.jpg", 300,
"scene 80006.jpg", 300,
"scene 80007.jpg", 300,
"scene 80008.jpg", 300,
"scene 80009.jpg", 300,
"scene 80010.jpg", 300,
"scene 80011.jpg", 300,
"scene 80012.jpg", 300,
"scene 80013.jpg", 3000,
"scene 80014.jpg", 200,
"scene 80015.jpg", 200,
"scene 80016.jpg", 3000];

intro = function()
{
    var imgNames = Intro.imgNames;
    Game.behaviours = [];
    Game.sprites = [];
    Game.hudElements = {};
    frames = [];
    var path = "assets/intro/";
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
    s.animation.onEnd = startGame;

    var cursor = new Sprite();
    cursor.setImg("assets/interface/cursor-click.png");
    
    Game.clear();
    Game.hudElements.intro = s;
    Game.hudElements.cursor = cursor;
    Game.hudElements.cursor.behave(Behaviours.followMouse);
    setTimeout("mouseclick = startGame", 200);
    window.onresize = function() { };

    s.animation.play();
};

function startGame(point) {
    startFirstLevel();
};
