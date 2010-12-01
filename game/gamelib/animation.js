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
    return this.frames[currentFrame];
}

Animation.prototype.playFrames = function()
{
    if(!this.playing) return;
    if(!looping && currentFrame >= frames.length) return;
    currentFrame = (currentFrame + 1) % frames.length;
    setTimeout(this.playFrames, frames[currentFrame].duration);
}