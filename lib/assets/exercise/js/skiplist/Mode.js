/*
	This is more for II & III.
	Keeps track of current mode based on a list of modes,
		inc moves to the next mode.
*/

var Mode = function (possibilities, opts){
	if (!opts) opts={};

	this.modes = possibilities;
	this.cur   = 0;

	this.update (this.cur);

	this.tracing = opts.tracing;
};

Mode.prototype.trace = function(){
	if (!this.tracing) return;
	console.trace();
}

Mode.prototype.match = function (cases){
	var g = this.get ();
	return cases [g] || cases.def;

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
	var c = parseInt (mode);
	if (!c && c !== 0)
		c = this.indexOf (mode);

	if (c === -1) return false;

	this.update (c);
	return true;
}

Mode.prototype.inc = function(){
	this.trace ();

	// repeat until a valid mode is found
	var i = this.cur;
	while (1) {
		i = (i + 1) % this.modes.length;
		if (this.update (i))
			break;
	}
}

Mode.prototype.rand = function (){
	this.trace ();

	// this is kind of interesting. if you take three mudkipz, you get an ostrich
	var validModes = [ ];
	for (var i in this.modes){
		var mode = this.modes [i];
		if (this.valid(mode))
			validModes.push (mode);
	}

	var e = rand.elem (validModes);
	var i = this.modes.indexOf (e); // not using this.indexOf because this is fas, eh?
	this.update (i);
}

Mode.prototype.valid = function (element) {
	return !element.checkValid || element.checkValid ();
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
	if (!this.valid (m)) return false;

	this.cur = n;
	if (m.setup)
		m.setup ();

	return true;
}

Mode.prototype.setModes = function(m){
	this.modes = m;
}
