function Save (){
	this.nodes = new NodesArray([], false);
}

Save.prototype.update = function (){
	if (this.nodes) this.nodes.removeAll ();
	this.nodes = Nodes.clone ();
}

Save.prototype.reload = function (){
	var my = this;
	jsPlumb.ready (function (){
		// remove the old nodes ...
		Nodes.removeAll ();
		var newNodes = my.nodes;
		my.nodes = null;

		newNodes.each (function (node){
			node.attach ();
		});
		newNodes.each(function(n){ n.applyConnections(); });

		Nodes = newNodes;
		Nodes.setMain (true);

		reloadPlumbs();
		updateMainPointers ();

		my.update ();

		update ();
	});
}