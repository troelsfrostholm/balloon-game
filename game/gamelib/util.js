function require_input(input, type, message)
{
    if(classof(input) != type) {
	if(!message) message = "Wrong type given!";
	console.log(message);
	return false;
    }
    return true;
}

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

function createImage(filename)
{
    img = new Image();
    img.src = filename;
    return img;
};

function mapObject(func, obj) { 
    var copy = {}; 
    for(var i in obj) { 
	copy[i] = func(obj[i]);
    } 
    return copy; 
};

function arrayCopy(src)
{
    var dest = [];
    for(var i in src) {
	dest[i] = src[i];
    }
    return dest;
}

function shallowCopy(obj)
{
    var dest = {};
    for(var i in obj) {
	dest[i] = obj[i];
    }
    return dest;
}

function deepCopy(object, visited)
{
    if(typeof(object)!="object")
	return object;

    if(visited == undefined) {
	visited = [];
    }
    copy = {}
    for(var i in object) {
	console.log(i);
	if(visited.indexOf(object[i])<0) {
	    visited.push(object[i]);
	    copy[i] = deepcopy(object[i], visited);
	}
    }
    return copy;
}