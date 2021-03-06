background = new Sprite();
background.setImg("gradient_example_1.jpg");
background.scale = 2;
background.place(440, 300);

balloon = new Sprite();
balloon.setImg("balloon.gif");
balloon.scale = 0.5;
balloon.place(440, 200);

sprites.push(background);
sprites.push(balloon);

var windpower = -100;
var resistance = 0.9;
var downpos = null;
var buoyancy = -0.3;
var dampening = 0.99;
var gravity = 0.003;

balloon.behave(bouncy);
balloon.behave(resisting);
balloon.behave(buoyant);
balloon.behave(swinging);
balloon.behave(dampened);
mouseisdown = windblow;

function bdist(point)
{
    return point.sub(balloon.pos[0]);
}

function pushpoint(point) { 
    d = bdist(point); 
    d2 = d.dot(d); 
    return d.mult(windpower/d2); 
}

function windblow(point) {
    balloon.pos[1] = balloon.pos[1].add(pushpoint(point));
}