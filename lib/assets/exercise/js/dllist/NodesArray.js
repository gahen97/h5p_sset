var currentNode = null;

function NodesArray (elements, mainNodes){
	this.elements = elements || [ ];
	this.isMain   = mainNodes !== false;
}

NodesArray.prototype = new ElementArray([], Node)

NodesArray.prototype.main = function(){ return this.isMain; }
NodesArray.prototype.setMain = function(n){ this.isMain = n; }

NodesArray.prototype.findPointer = function(elem){
	return this.find (function (node){
		return node.findPointerFrom (elem);
	});
}

// Sets given nodes to active, and other nodes to disabled,
// if not pointed to.
NodesArray.prototype.setActive = function(nodes){
	this.each (function (n){
		if (!n) return;

		if (nodes.indexOf (n) === -1)
			n.disable ();
		else
			n.enable ();
	})
}

// Given a data value, adds it into the list as the new node
NodesArray.prototype.add = function (value){
	var newNode = new Node(undefined, value, {});
	this.push (newNode);
}

// Push a new element into the array ...
// Sets the new element as the current node & sets newN's pointer
NodesArray.prototype.push = function(n){
	if (this.main ())
		newNode = n;
	this.elements.push (n);
}

NodesArray.prototype.clone = function(){
	var me = ElementArray.prototype.clone.call (this);
	var newNodes = new NodesArray(me.toArray(), false);

	// Turn the nodes into a dictionary of {origId: obj} pairs that can be referenced
	var nodeCopies = newNodes.toDict (
		function (n){ return n.getClonedFrom() && n.getClonedFrom().getId(); },
		function (n){ return n; }
	);

	// Make the next & prev pairings
	newNodes.clonePairings (nodeCopies);

	return newNodes;
}

// Copies pairing data (next, prev) from each node to its clone
NodesArray.prototype.clonePairings = function (copies){
	function findCopy (el){
		if (!el) return null;
		return copies[el.getId()];
	}

	this.each (function (el){
		var or = el.getClonedFrom();
		if (!or) return;

		var h = or.getNext();
		if (h){
			var cpy = findCopy (h);
			if (!cpy) return;

			el.setNext(cpy, {update: false, drawConnection: false, updateIndices: false});
		}

		var h = or.getPrev();
		if (h){
			var cpy = findCopy (h);

			if (!cpy) return;
			el.setPrev(cpy, {update: false, drawConnection: false, updateIndices: false});
		}
	});
}

// Build the list of elements as if moving through a LinkedList.
// should return elements in the order they appeared.
NodesArray.prototype.inList = function (direction) {
	// its possible to have a loop. check if it starts looping, and if it does, return elements that aren't involved in the loop
	// with a second argument, looping, set to true
	var nodesPassed = [ ];
	var curNode = dummyNode;
	while (curNode){
		if (nodesPassed.indexOf (curNode) != -1)
			return {
				nodes: makeNodesArray(nodesPassed),
				looping: curNode !== dummyNode
			}

		nodesPassed.push (curNode);
		curNode = curNode.getNext();
	}

	return {
		nodes: makeNodesArray (nodesPassed),
		looping: false
	};
}

// Determine the Nodes from a given order
NodesArray.prototype.loopOverList = function (f){
	var nodes = [ ];
	var curNode = dummyNode;
	while (curNode){
		if (nodes.indexOf (curNode) != -1)
			return {
				nodes: makeNodesArray(nodes),
				isLoopingBad: curNode !== dummyNode,
				isLooping: true
			};

		nodes.push (curNode);
		curNode = f (curNode);
	}

	return {
		nodes: makeNodesArray (nodes),
		isLoopingBad: false,
		isLooping: false
	};
}

NodesArray.prototype.forwards = function (){
	return this.loopOverList (function (n){ return n.getNext(); });
}
NodesArray.prototype.backwards = function (){
	return this.loopOverList (function (n){ return n.getPrev(); });
}

// Check if some node appears in the list
NodesArray.prototype.isInList = function (n){
	var res = false;
	this.loopOverList (function (node){
		if (node === n)
			res = true;
		return node.getNext ();
	});
	return res;
}

// Any Node that can be reached by some path.
// Would be all nodes in the list w/ all extra pointers (tail, new, cur)
NodesArray.prototype.accessible = function (){
	var valid = this.inList();
	var nodes = valid.nodes;
	nodes.push (curNode);
	nodes.push (newNode);

	return valid;
}

NodesArray.prototype.save = function (){
	this.save.update ();
}

NodesArray.prototype.toString = function (){
	var s = "";
	this.each (function (n){
		s += n;
	});
	return s;
}

function makeNodesArray (from){
	return new NodesArray(from, false);
}
