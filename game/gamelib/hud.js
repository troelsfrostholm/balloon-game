function TextElement(text, pos)
{
    this.text = text;
    this.pos = pos;
    
    this.draw = function() {
	    Game.ctx.font = "bold 20px sans-serif";
        var text = this.text.split("\n");
        for(var i in text) {
    	    Game.ctx.fillText(text[i], this.pos.x, this.pos.y+20*i);
        }
    }
}
