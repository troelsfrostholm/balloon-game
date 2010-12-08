function TextElement(text, pos)
{
    this.text = text;
    this.pos = pos;
    
    this.draw = function() {
	Game.ctx.font = "bold 20px sans-serif";
	Game.ctx.fillText(this.text, this.pos.x, this.pos.y);
    }
}