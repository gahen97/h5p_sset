function Node (data) {
	this.data = data;
	this.left = this.right = null;
};

Node.prototype.getLeft = function(){ return this.left; }
Node.prototype.getRight = function(){ return this.right; }
Node.prototype.setLeft = function(d){ this.left = d; }
Node.prototype.setRight = function(d){ this.right = d; }

Node.prototype.getData = function(){ return this.data; }
