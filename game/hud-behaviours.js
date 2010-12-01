
Behaviours.placeAltitudeSlider = function()
{
    Game.hudElements.altitudeslider.place(
			      ( (canvas.width - (Game.hudElements.altitudeslider.image.width / 2) ) - 20)
			      ,
			      ( (canvas.height / 2) + (425 / (level.bounds[3] / balloon.pos[0].y) ) ) );	
}


