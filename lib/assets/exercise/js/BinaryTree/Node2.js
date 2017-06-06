/*
	A Node which holds pointers to its parent and child nodes.
	Also holds a data element which stores the data of the node.

	Note: Supports cascading on all 'set' operations
*/

function Node(data) {
	this.data = data;
	this.left = this.right = this.parent = null;
};

Node.prototype.getLeft = function () { return this.left; }
Node.prototype.getRight = function () { return this.right; }
Node.prototype.getParent = function () { return this.parent; }
Node.prototype.getData = function () { return this.data; }

Node.prototype.setLeft = function (n) { this.left = n; return this; }
Node.prototype.setRight = function (n) { this.right = n; return this; }
Node.prototype.setParent = function (n) { this.parent = n; return this; }
Node.prototype.setData = function (d) { this.data = d; return this; }

