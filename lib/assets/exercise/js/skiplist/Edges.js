function Edges (ele) {
	this.elements = ele || [ ];
}

Edges.prototype = new ElementArray ([], Edge);

Edges.prototype.repaint = function () {
	this.each (function (edge) {
		edge.reposition ();
	});	
};
