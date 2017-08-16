/*
	A 2D Array of Nodes.
	Basically, an ElementArray storing NodesArray as the element.

	Note, however, that because this stores NodesArrays, some of the methods provided
		by ElementArray will not be usable and will throw errors. Namely those that edit elements,
		because NodesArray does not have an element.
*/

function Nodes2D (nodes) {
	this.elements = nodes || [ ];
}

Nodes2D.prototype = new ElementArray ([], NodesArray);

// Return the index to add the new element
//   given the new element (Node) and row (NodesArray)
Nodes2D.prototype.findNewIndex = function (newElement, row) {
	return row.size();
};

Nodes2D.prototype.addNewNode = function (element, rowIndex) {
	var row   = this.get (rowIndex);
	var index = this.findNewIndex (element, row);
	row.push (element, index);
};

Nodes2D.prototype.updateIndices = function (i) {
	var row = this.get (i);
	row.each (function (n){
		n.updateIndex ();
	});
};

function get2D (row, col) {
	var r = this.get (row);
	if (!r) return null;
	return r.get (col);
}

function each2D (f) {
	var exit = true; // kind of backwards. returning false for each ends it, so ... exit = false
	this.base.call (this, function (arr, row) {
		arr.each (function (node, col) {
			if (f (node, row, col) === false){
				exit = false;
				return false;
			}
		});
		return exit;
	});
};

overload({name: "each", env: Nodes2D}, true, each2D);
overload({name: "get", env: Nodes2D}, function(a,b){ return b != null || b === 0; }, get2D);
