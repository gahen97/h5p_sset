function Node (data){
	this.right = null;
	this.down  = null;
	this.data  = data;	
}

Node.prototype.getData = function(){ return this.data; }
Node.prototype.getNext = function(){ return this.right; }
Node.prototype.getDown = function(){ console.log("get down!"); return this.down; }

module.exports = Node;