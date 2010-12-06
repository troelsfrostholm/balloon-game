function Frame(image, duration)
{
    this.image = image;
    this.duration = duration;
}

function Animation(frameArray)
{
    this.frames = frameArray;
    this.looping = false;
    this.currentFrame = 0;
    this.playing = false;
    this.startTime = new Date().getTime();
    this.frameTimes = [];
    var d = 0;
    for(var i in this.frames) {
	this.frameTimes.push(d);
	d+= this.frames[i].duration;
    }
    this.frameTimes.push(d);
}

Animation.prototype.play = function()
{
    this.playing = true;
}

Animation.prototype.stop = function()
{
    this.playing = false;
}

Animation.prototype.getCurrentImage = function()
{
    return this.frames[this.currentFrame].image;
}

Animation.prototype.step = function(gametime)
{
    if(!this.playing) return;
    var now = new Date().getTime();
    var animationTime = now - this.startTime;
    var animationDuration = this.frameTimes[this.frameTimes.length-1];
    if(animationTime > animationDuration && this.looping == false) {
	this.stop();
	this.onEnd();
	return;
    }
    var playTime = animationTime % animationDuration;
    for(var i=0; i<this.frameTimes.length-1; i++) {
	if(playTime < this.frameTimes[i+1]) {
	    this.currentFrame = i;
	    break;
	}
    }
};

Animation.prototype.onEnd = function() {};