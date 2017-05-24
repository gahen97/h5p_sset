/*
	This is more for II & III.
	Keeps track of current mode based on a list of modes,
		inc moves to the next mode.
*/

var Mode = function (possibilities){
	this.modes = possibilities;
	this.cur   = 0;
};

Mode.prototype.get = function(){
	return this.modes [this.cur];
}

Mode.prototype.set = function (mode){
	var c = this.modes.indexOf (mode);
	if (c === -1) return false;

	this.cur = c;
	return true;
}

Mode.prototype.inc = function(){
	this.cur = (this.cur + 1) % this.modes.length;
}

Mode.prototype.setModes = function(m){
	this.modes = m;
}
