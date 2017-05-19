var currentNode = null;

function NodesArray (elements, mainNodes){
	this.elements = elements || [ ];
	this.isMain   = mainNodes !== false;
}

NodesArray.prototype = new ElementArray([], Node)

NodesArray.prototype.main = function(){ return this.isMain; }
NodesArray.prototype.setMain = function(n){ this.isMain = n; }

// Sets given nodes to active, and other nodes to disabled,
// if not pointed to.
NodesArray.prototype.setActiveNodes = function(nodes){
	this.each (function (n){
		if (nodes.indexOf (n) === -1)
			n.disable ();
		else
			n.enable ();
	})
}

// Given a data value, adds it into the list as the new node
NodesArray.prototype.add = function (value, isList){
	var newNode = new Node(undefined, value, isList);
	this.push (newNode);
}

// Push a new element into the array ...
// Sets the new element as the current node & sets newN's pointer
NodesArray.prototype.push = function(n){
	this.elements.push (n);

	// everything below here has to do with updating the DOM
	// so if this isn't the main array, we can ignore that
	if (!this.main()) return;

	currentNode = n;
	newN.connectTo (currentNode);

	// update active nodes
	if (!head) return;
	setActiveNode (head.getNext())
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

	newNodes.each(function(n){ n.detach(); });

	return newNodes;
}

// Copies pairing data (next, prev) from each node to its clone
NodesArray.prototype.clonePairings = function (copies){
	function findCopy (el){
		if (!el) return null;
		return copies[el.getId()];
	}

	function copy (getF, setF){
		var h = getF();
		if (h){
			var cpy = findCopy (h);

			if (!cpy) return;
			setF(cpy);
		}
	}

	this.each (function (el){
		var or = el.getClonedFrom();
		if (!or) return;

		var h = or.getNext();
		if (h){
			var cpy = findCopy (h);
			if (!cpy) return;

			el.connectNextCloning(cpy);
		}

		var h = or.getPrev();
		if (h){
			var cpy = findCopy (h);

			if (!cpy) return;
			el.setPrev(cpy);
		}
	});


}

// Build the list of elements as if moving through a LinkedList.
// should return elements in the order they appeared.
NodesArray.prototype.inList = function () {
	// its possible to have a loop. check if it starts looping, and if it does, return elements that aren't involved in the loop
	// with a second argument, looping, set to true
	var nodesPassed = [ ];
	var curNode = head;
	while (curNode){
		if (nodesPassed.indexOf (curNode) != -1)
			return {
				nodes: makeNodesArray(nodesPassed),
				looping: true
			}

		nodesPassed.push (curNode);
		curNode = curNode.getNext();
	}

	return {
		nodes: makeNodesArray (nodesPassed),
		looping: false
	};
}

// Any Node that can be reached by some path.
// Would be all nodes in the list w/ all extra pointers (tail, new, cur)
NodesArray.prototype.accessible = function (){
	var valid = this.inList();
	var nodes = valid.nodes;
	nodes.pushUnique (tail.getNext());
	nodes.pushUnique (newN.getNext());
	nodes.pushUnique (cur.getNext());

	return valid;
}

NodesArray.prototype.save = function (){
	this.save.update ();
}

function makeNodesArray (from){
	return new NodesArray(from, false);
}
