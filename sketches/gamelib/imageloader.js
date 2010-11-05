ImageLoader = {
    imagesToLoad : [],
    imagesLoaded : 0,
    onLoadCallback : null,
    add : function(id, file) {
	this.imagesToLoad[id] = file;
    },
    preloadImages : function () {
	for(i in this.imagesToLoad) {
	    this[i] = new Image();
	    this[i].src = this.imagesToLoad[i];
	    this[i].onload = this.loadCallback;
	}
    },
    imgLoadCallback : function () {
	this.imagesLoaded+=1;
	if(imagesLoaded >= imagesToLoad.length)
	    this.onLoadCallback();
    }
}