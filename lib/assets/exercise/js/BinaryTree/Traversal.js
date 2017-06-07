/*
	Handles traversing a tree in different ways.
*/

/* ------- CONSTRUCTOR ----------- */
function Traversal (tree) {
	this.tree = tree;
}

/* ------ STATIC VARIABLES -------- */
var uniqTraversCount = 1201;

/* ------- STATIC FUNCTIONS ----------- */
Traversal.checked = function (node, counter) {
	if (!node || node.prop ('checked') === counter) return true;
	return false;
}
Traversal.setChecked = function (node, counter){
	node.prop ('checked', counter);
}


/* ---------- TRAVERSALS ----------- */
Traversal.prototype.inOrder = function (f) {
	// In order traversal: Left, parent, right
	var tree     = this.tree;
	var curNode  = tree && tree.getRoot ();
	var c        = uniqTraversCount ++;
	while (curNode !== null) {
		// if we've already checked it, skip to the next node up
		if (Traversal.checked (curNode, c, false))
			curNode = curNode.getParent ();
		else {
			// first check if we can move left
			var left = curNode.getLeft ();
			if (!Traversal.checked (left, c))
				curNode = left;
			else {
				// we can't, so use this node
				f (curNode);
				Traversal.setChecked (curNode, c);

				// and check if we can move right
				var right = curNode.getRight ();
				if (!Traversal.checked (right, c))
					curNode = right;
				else
					curNode = curNode.getParent ();
			};
		}
	};
};

