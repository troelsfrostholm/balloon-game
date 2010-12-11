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
		"tutorial12009.jpg", 1000, 48, 0,  ////start of new tutorial sequence
			"tutorial20001.jpg", 3000, 53, 21,
			"tutorial20002.jpg", 500, 53, 21,
			"tutorial20003.jpg", 2000, 53, 21,
			"tutorial20004.jpg", 500, 53, 21,
			"tutorial20005.jpg", 500, 53, 21,
						"tutorial20006.jpg", 5000, 54, 48,
					"tutorial20007.jpg", 3000, 55, 53,
				"tutorial21001.jpg", 3000, 62, 54,
				"tutorial21002.jpg", 200, 62, 54,
				"tutorial21003.jpg", 200, 62, 54,
				"tutorial21004.jpg", 200, 62, 54,
				"tutorial21005.jpg", 200, 62, 54,
				"tutorial21006.jpg", 200, 62, 54,
				"tutorial21007.jpg", 200, 62, 54,
		"tutorial21008.jpg", 5000, 63, 55,
			"tutorial21009.jpg", 500, 70, 62,
			"tutorial21010.jpg", 500, 70, 62,
			"tutorial21011.jpg", 500, 70, 62,
			"tutorial21012.jpg", 500, 70, 62,
			"tutorial21013.jpg", 500, 70, 62,
			"tutorial21014.jpg", 500, 70, 62,
			"tutorial21015.jpg", 500, 70, 62,
				"tutorial21016.jpg", 750, 76, 63,
				"tutorial21017.jpg", 500, 76, 63,
				"tutorial21018.jpg", 500, 76, 63,
				"tutorial21019.jpg", 500, 76, 63,
				"tutorial21020.jpg", 500, 76, 63,
				"tutorial21021.jpg", 500, 76, 63,
	"tutorial30001.jpg", 3000, 91, 70, ////warning signs and the balloon moving too high up causing it to go BOOM
	"tutorial30002.jpg", 200, 91, 70,
	"tutorial30003.jpg", 200, 91, 70,
	"tutorial30004.jpg", 200, 91, 70,
	"tutorial30005.jpg", 200, 91, 70,
	"tutorial30006.jpg", 200, 91, 70,
	"tutorial30007.jpg", 200, 91, 70,
	"tutorial30008.jpg", 200, 91, 70,
	"tutorial30009.jpg", 100, 91, 70,
	"tutorial30010.jpg", 200, 91, 70,
	"tutorial30011.jpg", 200, 91, 70,
	"tutorial30012.jpg", 200, 91, 70,
	"tutorial30013.jpg", 200, 91, 70,
	"tutorial30014.jpg", 200, 91, 70,
	"tutorial30015.jpg", 2000, 91, 70,
		"tutorial31001.jpg", 1000, 97, 76,
		"tutorial31002.jpg", 100, 97, 76,
		"tutorial31003.jpg", 100, 97, 76,
		"tutorial31004.jpg", 100, 97, 76,
		"tutorial31005.jpg", 100, 97, 76,
		"tutorial31006.jpg", 1000, 97, 76,
	"tutorial40001.jpg", 1000, 107, 91,
	"tutorial40002.jpg", 100, 107, 91,
	"tutorial40003.jpg", 100, 107, 91,
	"tutorial40004.jpg", 100, 107, 91,
	"tutorial40005.jpg", 100, 107, 91,
	"tutorial40006.jpg", 100, 107, 91,
	"tutorial40007.jpg", 100, 107, 91,
	"tutorial40008.jpg", 100, 107, 91,
	"tutorial40009.jpg", 100, 107, 91,
	"tutorial40010.jpg", 2000, 107, 91,
"tutorial40011.jpg", 2000, 108, 97,
	"tutorial40012.jpg", 2000, 109, 107,
		"tutorial40013.jpg", 500, 115, 108,
		"tutorial40014.jpg", 500, 115, 108,
		"tutorial40013.jpg", 500, 115, 108,
		"tutorial40014.jpg", 500, 115, 108,
		"tutorial40013.jpg", 500, 115, 108,
		"tutorial40014.jpg", 500, 115, 108,
	"tutorial40015.jpg", 500, 121, 109,
	"tutorial40016.jpg", 500, 121, 109,
	"tutorial40015.jpg", 500, 121, 109,
	"tutorial40016.jpg", 500, 121, 109,
	"tutorial40015.jpg", 500, 121, 109,
	"tutorial40016.jpg", 500, 121, 109,
		"tutorial40017.jpg", 500, 127, 115,
		"tutorial40018.jpg", 500, 127, 115,
		"tutorial40017.jpg", 500, 127, 115,
		"tutorial40018.jpg", 500, 127, 115,
		"tutorial40017.jpg", 500, 127, 115,
		"tutorial40018.jpg", 500, 127, 115,
	"tutorial40019.jpg", 500, 133, 121,
	"tutorial40020.jpg", 500, 133, 121,
	"tutorial40019.jpg", 500, 133, 121,
	"tutorial40020.jpg", 500, 133, 121,
	"tutorial40019.jpg", 500, 133, 121,
	"tutorial40020.jpg", 500, 133, 121,
"tutorial40021.jpg", 500, 139, 127,
"tutorial40022.jpg", 500, 139, 127,
"tutorial40021.jpg", 500, 139, 127,
"tutorial40022.jpg", 500, 139, 127,
"tutorial40021.jpg", 500, 139, 127,
"tutorial40022.jpg", 500, 139, 127,
	"tutorial40023.jpg", 5000, 141, 133,
	"tutorial40024.jpg", 5000, 141, 133,
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
