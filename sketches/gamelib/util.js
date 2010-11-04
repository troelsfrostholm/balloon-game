function require_input(input, type, message)
{
    if(classof(input) != type) {
	if(!message) message = "Wrong type given!";
	console.log(message);
	return false;
    }
    return true;
}

//this function is destructive on value. 
//It should be changed to be non-destructive
function inject(array, value, closure) {
   for(i in array) {
	value = closure(value, array[i]);
    }
    return value;
}

function prototype_classof(object)
{
    var getType = Object.prototype.toString;
    prototypeString =  getType.apply(object);
    classname = prototypeString.match(/\[object ([a-zA-Z]*)\]/)[1];
    return classname;
}

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

function onLoadImage(image, callback, pollFrequency)
{
    if(!pollFrequency) pollFrequency=100;
    if(!image.width || !image.height) {
	setTimeout(onLoadImage, pollFrequency);
    }
    return callback();
}

function loadScript(filename)
{
    var fileref=document.createElement('script');
    fileref.setAttribute("type","text/javascript");
    fileref.setAttribute("src", filename);
}

function createImage(filename)
{
    img = new Image();
    img.src = filename;
    return img;
}