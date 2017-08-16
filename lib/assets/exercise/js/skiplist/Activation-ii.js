/*
	This basically handles updating active when the operation is add.
*/

// options for activating the trailing, leading, new nodes in updateActiveII
const NXT_ACTIVE_OPTIONS = {
	DISABLE: {ptr: CODES.DISABLE, next: CODES.DISABLE, detachable: CODES.DISABLE, removeClass: "active"},
	ENABLE: {ptr: CODES.ENABLE, next: [CODES.DISABLE, CODES.DOM_ACTIVE], detachable: CODES.DISABLE, addClass: "active"}
}
const NEW_ACTIVE_OPTIONS = {
	DISABLE: {removeClass: "active", next: CODES.DISABLE},
	ENABLE: {ptr: CODES.ENABLE, next: CODES.ENABLE, detachable: CODES.ENABLE, addClass: "active"}
}
const LEAD_ACTIVE_OPTIONS = {
	DISABLE: {removeClass: "active"},
	ENABLE: {ptr: CODES.DISABLE, next: CODES.ENABLE, detachable: CODES.ENABLE, addClass: "active"}
}

// update active in three groups ... for when pointer manip
function updateActiveII () {
	var nodes = getActiveII ();

	Nodes.setActive (nodes.next, NXT_ACTIVE_OPTIONS.ENABLE, 
                                     NXT_ACTIVE_OPTIONS.DISABLE);
	nodes.newNodes.setActive (nodes.newNodes, NEW_ACTIVE_OPTIONS.ENABLE,
                                                  NEW_ACTIVE_OPTIONS.DISABLE);
	nodes.leading.setActive (nodes.leading, LEAD_ACTIVE_OPTIONS.ENABLE,
                                                LEAD_ACTIVE_OPTIONS.DISABLE);
}

// get active from ...
// new node, current node, new's next, current's next
// note: all are NodeArrays, not just nodes
function getActiveII () {
	var nextNodes = new NodesArray ();
	var connNodes = getConnectedNodes ();
	
	// if you take the similar elements between two arrays, that's called.. uhh..
	// bacon.
	results = trailingNodes.baconify (connNodes);

	// split them into three groups so they can be enabled separately ...
	// trailing need next disabled, targets enabled;
	// new need both next, targets enabled;
	// leading needs next enabled, target disabled
	return {
		next: results,
		newNodes: newNodes,
		leading: leadingNodes
	}
}

// make a new array of every next from a series of nodes
function getNextFrom (arr){
	return arr.eachToArray (function (n){
		return n.getNext ();
	}).filter (function (el) {
		return el !== null;
	});
}

// get everything connected to active nodes:
//   if from is not given, would be next from each of leading + next of new nodes
//   otherwise, next from whatever from contains
function getConnectedNodes (from){
	if (!from)
		return getConnectedNodes (leadingNodes).append (getConnectedNodes (newNodes));
	else
		return new NodesArray (getNextFrom (from));
}

// overload the default functions. if adding/removing, will call these functions; otherwise call the defaults
overload({name: "getActive"}, function(){ return mode.get() === "addRemove"; }, getActiveII);
overload({name: "updateActive"}, function(){ return mode.get() === "addRemove"; }, updateActiveII);

