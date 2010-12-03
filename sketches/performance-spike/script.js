var canvas;
var ctx;
var img;

function begin()
{
    canvas = document.getElementById("canvas");
    ctx = canvas.getContext("2d");
    img = new Image();
    img.onload = function () { speedtest() };
    img.src = "bg.jpg";

}

function speedtest()
{
    var startTime = new Date().getTime();
    var df = 100;
    //ctx.translate(10, 10);
    ctx.rotate(1);
    for(var i=0; i<df; i++) {
	
	ctx.drawImage(img, 0, 0);
    }
    var endTime = new Date().getTime();
    var dt = endTime - startTime;
    console.log("Framerate: "+(df/dt*1000));
}