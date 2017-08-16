/*addRemClass
	Implements extra features on the Node class to support the SkiplistList:
		- Nodes have edges
			- controls distance from this node to next node
			- shown halfway between the connection of this node to next
			runs for:
				- setNext
		- setNext change
			- set edge's next
		- addClass
			- add class to the edge
		- setEnabled
			- run on the edge as well

		all would also fire the base function
*/

function setNext (n, opts) {
	this.base.apply (this, arguments);
	if (!this.edge)
		this.edge = new Edge(this);

	this.edge.update (n);
};

Node.prototype.updateIndex = function () {
	var myIndex = this.index ();
	var next    = this.getNext ();
	if (!next) return;

	var nextIndex = next.index ();
	var length    = nextIndex - myIndex;
	this.setLength (length);
}

Node.prototype.updateDistance = function (d) {
	this.nextPtr.distance (d);
};

Node.prototype.getLength = function() {
	if (!this.edge) return 0;
	return this.edge.getLength();
}
Node.prototype.setLength = function (len) {
	this.edge.setLength (len);
}

overload ({name: "setNext", env: Node}, retTrue, setNext);

