// pizza angel please come to me... tomato sauce and cheese so gooey!
function Edge (n) {
	this.node = n;
	this.len  = 0;
}

Edge.prototype.getLength = function(){ return this.len; }
Edge.prototype.setLength = function(dist){
	this.len = dist;
	this.node.updateDistance (dist);
}

Edge.prototype.calcDistanceTo = function (targ) {
	var from = this.node;
	
	var i1   = from.index ();
	var i2   = targ.index ();

	return Math.abs (i2 - i1);
}

Edge.prototype.update = function (targ) {
	if (!targ)
		targ = this.node.getNext ();

	if (!targ) return;

	var dist = this.calcDistanceTo (targ);
	this.setLength (dist);
};
