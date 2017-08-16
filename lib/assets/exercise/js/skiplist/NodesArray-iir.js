// Active nodes to remove a node.
// Leading should be the nodes just before the node,
//	This one's harder: we don't have a previous, so we can't just go to it.
//	What we can do takes a bit more work ... for each row, find the closest element
//	  that's just smaller than ours => this would be the one connecting to ours.
//	Spread your wings, and learn to fly
// Trailing should be the nodes after.
//	This one's simple: for each node in the tower, we just remove that node.
var activeAfterRemove = function (maxHeight, data)
{
	var results = [ ];
	leadingNodes = new NodesArray ();
	newNodes     = new NodesArray ();
	trailingNodes = new NodesArray ();

	for (var i = 0; i <= maxHeight; i++) {
		var nodes = build.getNode (i);

		var leading = nodes.closest (data-1);
		var self    = nodes.closest (data);
		var next    = self && self.getNext ();

		// push all into their own arrays
		checkAdd (leadingNodes, leading);
		checkAdd (trailingNodes, next);
		checkAdd (newNodes, self);

		// push all into results
		checkAdd (results, [leading, next, self]);

		// update the classes on everything ....
		new NodesArray(results).each(function(node){
			node.removeClass ("searchPath");
		});
	}

	return results;
}

overload ({name: "activeAfterOp", env: NodesArray}, function(){ return op.get() === "remove"; }, activeAfterRemove);

