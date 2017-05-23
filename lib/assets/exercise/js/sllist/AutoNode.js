function AutomaticNode (e, data, opts){
	Node.call (this, e, data, false, undefined, undefined, opts);
	this.getPtr().setAuto ();
}

AutomaticNode.prototype = Object.create (Node.prototype);
AutomaticNode.prototype.constructor = AutomaticNode;
