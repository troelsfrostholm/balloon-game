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
}

Animation.prototype.play = function()
{
    this.playing = true;
    this.playFrames();
}

Animation.prototype.stop = function()
{
    this.playing = false;
}

Animation.prototype.getCurrentImage = function()
{
    return this.frames[this.currentFrame].image;
}

Animation.prototype.playFrames = function()
{
    if(!this.playing) return;
    if(this.frames.length <= 1) return;
    if(!this.looping && this.currentFrame >= this.frames.length) return;
    this.currentFrame = (this.currentFrame + 1) % this.frames.length;
    //    setTimeout(this.playFrames, this.frames[this.currentFrame].duration);
};

Animation.prototype.step = function(gametime)
{
    var now = new Date().getTime();
    var playTime = (now - this.startTime) % this.frameTimes[this.frameTimes.length-1];
    for(var i=0; i<this.frameTimes.length; i++) {
	if(playTime < this.frameTimes[i]) {
	    this.currentFrame = i;
	    break;
	}
    }
    //    this.currentFrame = Math.floor(gametime/60) % this.frames.length;    
}