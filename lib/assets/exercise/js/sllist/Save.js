function Save (){
	this.nodes = new NodesArray([], false);
}

Save.prototype.update = function (){
	if (this.nodes) this.nodes.removeAll ();
	this.nodes = Nodes.clone ();
}

Save.prototype.reload = function (){
	// remove the old nodes ...
	Nodes.removeAll ();
	Nodes = this.nodes;
	Nodes.setMain (true);

	Nodes.each (function (node){
		node.attach (DOM.question());
	});

	Nodes.each(function(n){ n.applyConnections(); });
	reloadPlumbs();
	updateMainPointers ();

	this.nodes = null;
	this.update ();

	updateActive ();
}