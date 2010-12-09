
Behaviours.placeAltitudeSlider = function()
{
    Game.hudElements.altitudeslider.place(
			      ( (canvas.width - (Game.hudElements.altitudeslider.image.width / 2) ) - 20)
			      ,
			      ( (canvas.height / 2) + (425 / (Level.bounds.height / balloon.pos[0].y) ) ) );	
}


