function Save (){
	this.nodes = new NodesArray([], false);
}

Save.prototype.update = function (){
	if (this.nodes) this.nodes.removeAll ();
	this.nodes = Nodes.clone ();
}

Save.prototype.reload = function (){
	prevNodes = Nodes;

	Nodes = this.nodes;
	Nodes.setMain (true);

	Nodes.each (function (node){
		// error case: if the element has been cleaned up,
		// no longer exists => parent to inners div (is a node)
		// otherwise, can parent to the original element's parent
		var n = node.getClonedFrom ();
		var p = n && n.getParent ();
		var c = (p != null && p.length > 0) ? p : DOM.inners ();

		node.attach (c);
	});

	Nodes.each(function(n){ n.applyConnections(); });
	reloadPlumbs();
	updateMainPointers ();

	prevNodes.removeAll ();

	this.nodes = null;
	this.update ();

	updateActive ();
}
