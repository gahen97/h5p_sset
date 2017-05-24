var defActive = getActive;
getActive = function (){
	switch (mode.get ()) {
		case "searchPath":
			return defActive ();
		case "addRemove":
			return getActiveII ();
	}
}

// get active from ...
// new node, current node, new's next, current's next
// note: all are NodeArrays, not just nodes
function getActiveII () {
	var nextNodes = new NodesArray ();
	var connNodes = getConnectedNodes ();
	
	// if you take the similar elements between two arrays, that's called.. uhh..
	// bacon.
	results = trailingNodes.baconify (connNodes).append (newNodes).append (leadingNodes);
	
	return results.toArray ();
}

function getNextFrom (arr){
	return arr.eachToArray (function (n){
		return n.getNext ();
	}).filter (function (el) {
		return el !== null;
	});
}

function getConnectedNodes (){
	var res = new NodesArray ();
	var c1  = getNextFrom (leadingNodes);
	var c2  = getNextFrom (newNodes);
	return res.append(c1).append(c2);
}

