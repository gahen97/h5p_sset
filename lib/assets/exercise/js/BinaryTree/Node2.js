/*
	A Node which holds pointers to its parent and child nodes.
	Also holds a data element which stores the data of the node.
*/

function Node(data) {
	this.data (data);
	this.left (null);
	this.right (null);
	this.parent (null);

	Properties.call (this);
};

Node.prototype = new Properties ();

Node.prototype.left = function(n){ return this.prop ("left", n); }
Node.prototype.right = function (n) { return this.prop ("right", n); }
Node.prototype.parent = function (n){ return this.prop ("parent", n); }
Node.prototype.data = function (d) { return this.prop ("data", d); }
