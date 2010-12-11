var Tutorial = {}

//imgNames : [filename, duration, skip forward to frame, skip back to frame] 
Tutorial.imgNames = [
	"tutorial10001.jpg", 2500, 21, 0,
	"tutorial10002.jpg", 200, 21, 0,
	"tutorial10003.jpg", 200, 21, 0,
	"tutorial10004.jpg", 200, 21, 0,
	"tutorial10005.jpg", 200, 21, 0,
	"tutorial10006.jpg", 200, 21, 0,
	"tutorial10007.jpg", 200, 21, 0,
	"tutorial10001.jpg", 200, 21, 0,
	"tutorial10002.jpg", 200, 21, 0,
	"tutorial10003.jpg", 200, 21, 0,
	"tutorial10004.jpg", 200, 21, 0,
	"tutorial10005.jpg", 200, 21, 0,
	"tutorial10006.jpg", 200, 21, 0,
	"tutorial10007.jpg", 200, 21, 0,
	"tutorial10001.jpg", 200, 21, 0,
	"tutorial10002.jpg", 200, 21, 0,
	"tutorial10003.jpg", 200, 21, 0,
	"tutorial10004.jpg", 200, 21, 0,
	"tutorial10005.jpg", 200, 21, 0,
	"tutorial10006.jpg", 200, 21, 0,
	"tutorial10007.jpg", 200, 21, 0,
		"tutorial12001.jpg", 2500, 48, 0,
		"tutorial12002.jpg", 200, 48, 0,
		"tutorial12003.jpg", 200, 48, 0,
		"tutorial12004.jpg", 200, 48, 0,
		"tutorial12005.jpg", 200, 48, 0,
		"tutorial12006.jpg", 200, 48, 0,
		"tutorial12007.jpg", 200, 48, 0,
		"tutorial12008.jpg", 200, 48, 0,
		"tutorial12009.jpg", 1000, 48, 0,
		"tutorial12001.jpg", 1000, 48, 0,
		"tutorial12002.jpg", 200, 48, 0,
		"tutorial12003.jpg", 200, 48, 0,
		"tutorial12004.jpg", 200, 48, 0,
		"tutorial12005.jpg", 200, 48, 0,
		"tutorial12006.jpg", 200, 48, 0,
		"tutorial12007.jpg", 200, 48, 0,
		"tutorial12008.jpg", 200, 48, 0,
		"tutorial12009.jpg", 1000, 48, 0,
		"tutorial12001.jpg", 1000, 48, 0,
		"tutorial12002.jpg", 200, 48, 0,
		"tutorial12003.jpg", 200, 48, 0,
		"tutorial12004.jpg", 200, 48, 0,
		"tutorial12005.jpg", 200, 48, 0,
		"tutorial12006.jpg", 200, 48, 0,
		"tutorial12007.jpg", 200, 48, 0,
		"tutorial12008.jpg", 200, 48, 0,
		"tutorial12009.jpg", 1000, 48, 0,
			"tutorial20001.jpg", 1500, 69, 21,
			"tutorial20002.jpg", 200, 69, 21,
			"tutorial20003.jpg", 200, 69, 21,
			"tutorial20004.jpg", 200, 69, 21,
			"tutorial20005.jpg", 200, 69, 21,
			"tutorial20006.jpg", 200, 69, 21,
			"tutorial20007.jpg", 1500, 69, 21,
			"tutorial20001.jpg", 1500, 69, 21,
			"tutorial20002.jpg", 200, 69, 21,
			"tutorial20003.jpg", 200, 69, 21,
			"tutorial20004.jpg", 200, 69, 21,
			"tutorial20005.jpg", 200, 69, 21,
			"tutorial20006.jpg", 200, 69, 21,
			"tutorial20007.jpg", 1500, 69, 21,
			"tutorial20001.jpg", 1500, 69, 21,
			"tutorial20002.jpg", 200, 69, 21,
			"tutorial20003.jpg", 200, 69, 21,
			"tutorial20004.jpg", 200, 69, 21,
			"tutorial20005.jpg", 200, 69, 21,
			"tutorial20006.jpg", 200, 69, 21,
			"tutorial20007.jpg", 1500, 69, 21,
		"tutorial21001.jpg", 1500, 120, 48,
		"tutorial21002.jpg", 200, 120, 48,
		"tutorial21003.jpg", 200, 120, 48,
		"tutorial21004.jpg", 200, 120, 48,
		"tutorial21005.jpg", 200, 120, 48,
		"tutorial21006.jpg", 200, 120, 48,
		"tutorial21007.jpg", 200, 120, 48,
		"tutorial21008.jpg", 200, 120, 48,
		"tutorial21009.jpg", 200, 120, 48,
		"tutorial21010.jpg", 200, 120, 48,
		"tutorial21011.jpg", 200, 120, 48,
		"tutorial21012.jpg", 200, 120, 48,
		"tutorial21013.jpg", 200, 120, 48,
		"tutorial21014.jpg", 200, 120, 48,
		"tutorial21015.jpg", 200, 120, 48,
		"tutorial21016.jpg", 200, 120, 48,
		"tutorial21017.jpg", 1500, 120, 48,
		"tutorial21001.jpg", 1500, 120, 48,
		"tutorial21002.jpg", 200, 120, 48,
		"tutorial21003.jpg", 200, 120, 48,
		"tutorial21004.jpg", 200, 120, 48,
		"tutorial21005.jpg", 200, 120, 48,
		"tutorial21006.jpg", 200, 120, 48,
		"tutorial21007.jpg", 200, 120, 48,
		"tutorial21008.jpg", 200, 120, 48,
		"tutorial21009.jpg", 200, 120, 48,
		"tutorial21010.jpg", 200, 120, 48,
		"tutorial21011.jpg", 200, 120, 48,
		"tutorial21012.jpg", 200, 120, 48,
		"tutorial21013.jpg", 200, 120, 48,
		"tutorial21014.jpg", 200, 120, 48,
		"tutorial21015.jpg", 200, 120, 48,
		"tutorial21016.jpg", 200, 120, 48,
		"tutorial21017.jpg", 1500, 120, 48,
		"tutorial21001.jpg", 1500, 120, 48,
		"tutorial21002.jpg", 200, 120, 48,
		"tutorial21003.jpg", 200, 120, 48,
		"tutorial21004.jpg", 200, 120, 48,
		"tutorial21005.jpg", 200, 120, 48,
		"tutorial21006.jpg", 200, 120, 48,
		"tutorial21007.jpg", 200, 120, 48,
		"tutorial21008.jpg", 200, 120, 48,
		"tutorial21009.jpg", 200, 120, 48,
		"tutorial21010.jpg", 200, 120, 48,
		"tutorial21011.jpg", 200, 120, 48,
		"tutorial21012.jpg", 200, 120, 48,
		"tutorial21013.jpg", 200, 120, 48,
		"tutorial21014.jpg", 200, 120, 48,
		"tutorial21015.jpg", 200, 120, 48,
		"tutorial21016.jpg", 200, 120, 48,
		"tutorial21017.jpg", 1500, 120, 48,
	"tutorial30001.jpg", 2000, 135, 69,
	"tutorial30002.jpg", 200, 135, 69,
	"tutorial30003.jpg", 200, 135, 69,
	"tutorial30004.jpg", 200, 135, 69,
	"tutorial30005.jpg", 200, 135, 69,
	"tutorial30006.jpg", 200, 135, 69,
	"tutorial30007.jpg", 200, 135, 69,
	"tutorial30008.jpg", 200, 135, 69,
	"tutorial30009.jpg", 100, 135, 69,
	"tutorial30010.jpg", 200, 135, 69,
	"tutorial30011.jpg", 200, 135, 69,
	"tutorial30012.jpg", 200, 135, 69,
	"tutorial30013.jpg", 200, 135, 69,
	"tutorial30014.jpg", 200, 135, 69,
	"tutorial30015.jpg", 2000, 135, 69,
		"tutorial31001.jpg", 1000, 141, 120,
		"tutorial31002.jpg", 100, 141, 120,
		"tutorial31003.jpg", 100, 141, 120,
		"tutorial31004.jpg", 100, 141, 120,
		"tutorial31005.jpg", 100, 141, 120,
		"tutorial31006.jpg", 1000, 141, 120,
	"tutorial40001.jpg", 1000, 151, 135,
	"tutorial40002.jpg", 100, 151, 135,
	"tutorial40003.jpg", 100, 151, 135,
	"tutorial40004.jpg", 100, 151, 135,
	"tutorial40005.jpg", 100, 151, 135,
	"tutorial40006.jpg", 100, 151, 135,
	"tutorial40007.jpg", 100, 151, 135,
	"tutorial40008.jpg", 100, 151, 135,
	"tutorial40009.jpg", 100, 151, 135,
	"tutorial40010.jpg", 2000, 151, 135,
"tutorial40011.jpg", 2000, 152, 141,
	"tutorial40012.jpg", 2000, 153, 151,
		"tutorial40013.jpg", 500, 159, 152,
		"tutorial40014.jpg", 500, 159, 152,
		"tutorial40013.jpg", 500, 159, 152,
		"tutorial40014.jpg", 500, 159, 152,
		"tutorial40013.jpg", 500, 159, 152,
		"tutorial40014.jpg", 500, 159, 152,
	"tutorial40015.jpg", 500, 165, 153,
	"tutorial40016.jpg", 500, 165, 153,
	"tutorial40015.jpg", 500, 165, 153,
	"tutorial40016.jpg", 500, 165, 153,
	"tutorial40015.jpg", 500, 165, 153,
	"tutorial40016.jpg", 500, 165, 153,
		"tutorial40017.jpg", 500, 171, 159,
		"tutorial40018.jpg", 500, 171, 159,
		"tutorial40017.jpg", 500, 171, 159,
		"tutorial40018.jpg", 500, 171, 159,
		"tutorial40017.jpg", 500, 171, 159,
		"tutorial40018.jpg", 500, 171, 159,
	"tutorial40019.jpg", 500, 177, 165,
	"tutorial40020.jpg", 500, 177, 165,
	"tutorial40019.jpg", 500, 177, 165,
	"tutorial40020.jpg", 500, 177, 165,
	"tutorial40019.jpg", 500, 177, 165,
	"tutorial40020.jpg", 500, 177, 165,
"tutorial40021.jpg", 500, 183, 171,
"tutorial40022.jpg", 500, 183, 171,
"tutorial40021.jpg", 500, 183, 171,
"tutorial40022.jpg", 500, 183, 171,
"tutorial40021.jpg", 500, 183, 171,
"tutorial40022.jpg", 500, 183, 171,
	"tutorial40023.jpg", 5000, 185, 177,
	"tutorial40024.jpg", 5000, 185, 177,
		"tutorial50001.jpg", 3000, 0, 183,
];


Tutorial.skipTo=[];
Tutorial.skipBackTo=[];

Tutorial.forward = function()
{
    var animation = Game.hudElements.tutorial.animation;
    if(animation.currentFrame == animation.frames.length-1) {
	mainMenu();
	return;
    }
    var to = Tutorial.skipTo[animation.currentFrame];
    var time = new Date().getTime()-animation.frameTimes[to];
    animation.startTime = time;
};

Tutorial.back = function()
{
    var animation = Game.hudElements.tutorial.animation;
    var to = Tutorial.skipBackTo[animation.currentFrame];
    var time = new Date().getTime()-animation.frameTimes[to];
    animation.startTime = time;
};

Tutorial.quit = function()
{
    mainMenu();
}


tutorial = function()
{
    var imgNames = Tutorial.imgNames;
    Game.behaviours = {};
    Game.sprites = [];
    Game.hudElements = {};
    frames = [];
    var imgName = "assets/tutorial/tutorial1000";
    var path = "assets/tutorial/";

    var imgExtention = ".jpg";
    var numFrames = 86;
    var frame;
    var img;
    var duration = 1000;

    for(var i=0; i<imgNames.length/4; i++) {
	img = new Image();
        img.src = path+imgNames[i*4];
	duration = imgNames[i*4+1];
	Tutorial.skipTo[i] = imgNames[i*4+2];
	Tutorial.skipBackTo[i] = imgNames[i*4+3];
	frame = new Frame(img, duration);
	frames.push(frame);
    }

    var s = new Sprite();
    s.place(canvas.width/2, canvas.height/2);
    s.setAnimation(new Animation(frames));
    s.scale = canvas.width/s.animation.frames[0].image.width;
    s.animation.onEnd = mainMenu;

    var forwardButton = new Sprite();
    forwardButton.setImg("assets/tutorial/tutorial-forward.png");
    forwardButton.onclick = Tutorial.forward;
    forwardButton.place(canvas.width*0.9, canvas.height*0.5);

    var backButton = new Sprite();
    backButton.setImg("assets/tutorial/tutorial-back.png");
    backButton.onclick = Tutorial.back;
    backButton.place(canvas.width*0.1, canvas.height*0.5);

    var quitButton = new Sprite();
    quitButton.setImg("assets/tutorial/tutorial-quit.png");
    quitButton.onclick = Tutorial.quit;
    quitButton.place(canvas.width*0.05, canvas.height*0.05);

    var cursor = new Sprite();
    cursor.setImg("assets/interface/cursor-click.png");
    
    Game.clear();
    Game.hudElements.tutorial = s;
    Game.hudElements.forwardButton = forwardButton;
    Game.hudElements.backButton = backButton;
    Game.hudElements.quitButton = quitButton;
    Game.hudElements.cursor = cursor;
    Game.hudElements.cursor.behave(Behaviours.followMouse);

    s.animation.play();
}
