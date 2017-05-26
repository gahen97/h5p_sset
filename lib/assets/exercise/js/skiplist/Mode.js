/*
	This is more for II & III.
	Keeps track of current mode based on a list of modes,
		inc moves to the next mode.
*/

var Mode = function (possibilities){
	this.modes = possibilities;
	this.cur   = 0;
};

Mode.prototype.match = function (cases){
	var g = this.get ();
	return cases [g];

	// why DO they always send the poor? they always send the poor. they always send the poor
}

Mode.prototype.run = function (cases, from) {
	var f = this.match(cases);
	if (!f) return false;
	return f.apply (from, Array.prototype.slice.call (arguments, 2));
}

Mode.prototype.get = function(){
	return this.modes [this.cur].name;
}

Mode.prototype.set = function (mode){
	var c = this.indexOf (mode);
	if (c === -1) return false;

	this.update (c);
	return true;
}

Mode.prototype.inc = function(){
	this.update ((this.cur + 1) % this.modes.length);
}

Mode.prototype.indexOf = function (name){
	var modes = this.modes;
	for (var i in modes) {
		if (modes[i].name === name)
			return i;
	}
	return -1;
}

Mode.prototype.update = function (n){
	var m = this.modes [n];
	if (!m) return;
	
	this.cur = n;
	if (m.setup)
		m.setup ();
}

Mode.prototype.setModes = function(m){
	this.modes = m;
}
