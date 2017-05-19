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

Tower.prototype.getElem = function(){ return this; }

Tower.prototype.getTopNode = function(){
	return this.nodes.last()
}

Tower.prototype.remove = function (){
	this.nodes.removeAll ();
}