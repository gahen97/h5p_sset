function checkTower (index, data, id) {
	var t = this.towers.get (index + 1, data);
	if (t.getId() !== id)
		return this.towers.add (index + 1, data).setId (id);
}

function addElementToRow (data, eleIndex, rowNum, id) {
	this.checkTower (eleIndex, data, id);

	var n      = this.n + 1;
	var height = this.getRowHeight (rowNum, this.numRows);
	var node   = this.makeNode (data, eleIndex, n, height, rowNum);

	node.addClass ("new");

	this.repositionRow (rowNum);
	return node;
};

function addElementIIIA (data, index) {
	addArg (arguments, {searchPath: false});

	var tower = this.headFunction.apply (this, arguments);
	tower.addClass ("hidden");

	return tower;
};

function updateRowIndices (rowNumber) {
	this.nodes.updateIndices (rowNumber);
};

overload({name: "addToRow", env: Build}, isAO, addElementToRow);
overload({name: "checkTower", env: Build}, isAO, checkTower);
overload({name: "add", env: Build}, isAO, addElementIIIA);
overload({name: "updateRowIndices", env: Build}, isAO, updateRowIndices);
