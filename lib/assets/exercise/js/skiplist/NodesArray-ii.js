/*
	1) Adds a new function, determineActiveAdd, which:
	     - If a Node is already disabled, stays disabled;
	     - If a Node is enabled but leads right, will be disabled;
	     - If a Node is above given height, will be disabled;
	     - If a Node is within height and is last enabled in row, will stay enabled.
	     Then, can edit only those Nodes which would be edited to add an element.
	2) determineActiveRemove
	     - Oh? Your Metapod is evolving!

	NOTE: This assumes that this is the search path.
*/

NodesArray.prototype.active = function (node, index, maxHeight){
	var nextNode = this.get (index + 1);
	var height   = node.getHeight ();
	var nxt      = node.getNext ();
		
	console.log (nextNode, nxt, height, maxHeight);

	if (height > maxHeight) return false;
	if (nxt === nextNode) return false;

	return true;
}

NodesArray.prototype.determineActiveAdd = function (maxHeight)
{
	var searchPath = this;
	var results    = [ ];

	this.each (function (node, index){
		var enabled = searchPath.active (node, index, maxHeight);
		if (enabled){
			results.push (node);
			var n = node.getNext ();
			if (n){
				results.push (n.enable ());
				$(n.getElem ()).addClass ("searchPath");
			}
		} else
			$(node.getElem()).removeClass ("searchPath");
	});

	console.log (results);

	this.setActive (results);
}
