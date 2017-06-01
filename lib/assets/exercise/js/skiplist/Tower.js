function Tower (d) {
	this.nodes = new NodesArray ();
	this.data  = d;

	this.lastNode = null;
}

Tower.prototype.push = function (n){
	if (!n) return;

	this.nodes.push (n);
	n.setDown (this.lastNode);
	n.setData (this.data);

	this.lastNode = n;
}

Tower.prototype.index = function () {
	return build.indexOfTower (this);
}

Tower.prototype.get = function(index){
	if (!index && index !== 0)
		return this.nodes;
	return this.nodes.get (index);
}

Tower.prototype.getHeight = function(){
	// few ways to do this ... but node stores it, so most accurate
	return this.getTopNode ().getHeight();
}

Tower.prototype.getElem = function(){ return this; }
Tower.prototype.getData = function(){ return this.data; }
Tower.prototype.getId   = function(){ return this.id; }
Tower.prototype.setId   = function(d){ this.id = d; return this; }

Tower.prototype.getTopNode = function(){
	return this.nodes.last()
}

Tower.prototype.each = function(f){
	this.nodes.each(f);
}

Tower.prototype.contains = function (node){
	return this.nodes.contains (node);
}

Tower.prototype.addClass = function(c){ this.nodes.addClass(c); }
Tower.prototype.removeClass = function(c){ this.nodes.removeClass(c); }

Tower.prototype.remove = function (){
	this.nodes.removeAll ();
}
