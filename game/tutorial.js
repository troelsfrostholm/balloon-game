tutorial = function()
{
    Game.behaviours = {};
    Game.sprites = [];
    Game.hudElements = {};
    frames = [];
    var imgName = "assets/tutorial/tutorial1000";
    var imgExtention = ".jpg";
    var numFrames = 4;
    var frame;
    var img;
    var duration = 1000;
    for(var i=0; i<numFrames; i++) {
	img = new Image();
	img.src = imgName+(i+1)+imgExtention;
	frame = new Frame(img, duration);
	frames.push(frame);
    }

    var s = new Sprite();
    s.place(canvas.width/2, canvas.height/2);
    s.setAnimation(new Animation(frames));
    Game.clear();
    Game.sprites.push(s);
    s.animation.play();
}