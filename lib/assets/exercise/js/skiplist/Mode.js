/*
	This is more for II & III.
	Keeps track of current mode based on a list of modes,
		inc moves to the next mode.
*/

var Mode = function (possibilities, opts){
	if (!opts) opts={};

	this.modes = possibilities;
	this.cur   = 0;

	this.tracing = opts.tracing;
};

Mode.prototype.trace = function(){
	if (!this.tracing) return;
	console.trace();
}

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
	this.trace ();
	this.update ((this.cur + 1) % this.modes.length);
}

Mode.prototype.rand = function (){
	this.trace ();
	this.update (rand.index (this.modes));
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
	if (m.checkValid && !m.checkValid ()) return false;

	this.cur = n;
	if (m.setup)
		m.setup ();
}

Mode.prototype.setModes = function(m){
	this.modes = m;
}
