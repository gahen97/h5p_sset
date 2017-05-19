var currentNode = null;

function NodesArray (elements){
	this.elements = elements || [ ];
}

NodesArray.prototype = new ElementArray([], Node)

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
NodesArray.prototype.add = function (value, index){
	var newNode = new Node(undefined, value, {});
	this.push (newNode, index);
}

// Push a new element into the array ...
// Sets the new element as the current node & sets newN's pointer
NodesArray.prototype.push = function(n, index){
	var e = this.elements;
	if ((!index && index !== 0) || index<0)
		index = e.length;
	
	e.splice(index, 0, n);
}