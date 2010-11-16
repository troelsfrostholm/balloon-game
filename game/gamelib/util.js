function require_input(input, type, message)
{
    if(classof(input) != type) {
	if(!message) message = "Wrong type given!";
	console.log(message);
	return false;
    }
    return true;
}

/*function prototype_classof(object)
{
    var getType = Object.prototype.toString;
    prototypeString =  getType.apply(object);
    classname = prototypeString.match(/\[object ([a-zA-Z]*)\]/)[1];
    return classname;
    }*/

/* Returns the class name of the argument or undefined if
   it's not a valid JavaScript object.
*/
function classof(obj) {
    if(typeof(obj) != "object") return typeof(obj);
    if (obj && obj.constructor && obj.constructor.toString) {
        var arr = obj.constructor.toString().match(
						   /function\s*(\w+)/);
        if (arr && arr.length == 2) {
            return arr[1];
        }
    }
    return undefined;
};


var loadedYet = false;

function loadScript(filename)
{
    var head = document.getElementsByTagName('head')[0];
    var fileref=document.createElement('script');
    fileref.setAttribute("type","text/javascript");
    fileref.setAttribute("src", filename);

    //    var loadedYet = false;
    fileref.onload = function () {
	alert("loaded!");
	loadedYet = true;
	console.log(loadedYet);
    }
    head.appendChild(fileref);
    //    while(!loadedYet) {
	for(i = 0; i< 10000000; i++) {}
	console.log(loadedYet);
	//blocking for script to load the evil `I hate my cpu` way
	//    }
}

function createImage(filename)
{
    img = new Image();
    img.src = filename;
    return img;
}