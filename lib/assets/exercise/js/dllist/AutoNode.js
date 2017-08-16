function AutomaticNode (e, data){
	Node.call (this, e, data, false);
	this.getPtr().setAuto ();
}

AutomaticNode.prototype = Object.create (Node.prototype);
AutomaticNode.prototype.constructor = AutomaticNode;