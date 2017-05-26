/*
	1) Adds a new function, determineActiveAdd, which:
	     - If a Node is already disabled, stays disabled;
	     - If a Node is enabled but leads right, will be disabled;
	     - If a Node is above given height, will be disabled;
	     - If a Node is within height and is last enabled in row, will stay enabled.
	     Then, can edit only those Nodes which would be edited to add an element.
	2) activeAfterAdd
	     - Oh? Your Metapod is evolving!
		OH HO HO WOW! MY METAPOD EVOLVED INTO A BUTTERFREE!
		https://www.youtube.com/watch?v=kzwHs9PhJwY

	NOTE: This assumes that this is the search path.
*/
var newNodes, leadingNodes, trailingNodes;

NodesArray.prototype.active = function (node, index, maxHeight){
	var nextNode = this.get (index + 1);
	var height   = node.getHeight ();
	var nxt      = node.getNext ();

	if (height > maxHeight) return false;
	if (nxt === nextNode) return false;

	return true;
}

// Active nodes after a new node is added ....
NodesArray.prototype.activeAfterAdd = function (maxHeight)
{
	var searchPath = this;
	var results    = [ ];

	newNodes       = new NodesArray ();
	leadingNodes   = new NodesArray ();
	trailingNodes  = new NodesArray ();
	
	this.each (function (node, index){
		var enabled = searchPath.active (node, index, maxHeight);
		if (enabled){
			// leading nodes
			results.push (node);
			leadingNodes.push (node);

			// next node
			var n = node.getNext ();
			if (n){
				results.push (n.enable ());
				trailingNodes.push (n);
				n.addClass ("searchPath");
			}
		} else
			$(node.getElem()).removeClass ("searchPath");
	});

	return results;
}


// Active nodes to remove a node.
// Leading should be the nodes just before the node,
//	This one's harder: we don't have a previous, so we can't just go to it.
//	What we can do takes a bit more work ... for each row, find the closest element
//	  that's just smaller than ours => this would be the one connecting to ours.
//	Spread your wings, and learn to fly
// Trailing should be the nodes after.
//	This one's simple: for each node in the tower, we just remove that node.
NodesArray.prototype.activeAfterRem = function (maxHeight, data)
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
