function updateBuild () {
	// remove the indices from before
	if (this.indices)
		this.indices.removeAll ();

	// add new ones
	this.makeIndices ();

	// do other updates
	this.base.apply (this, arguments);
};

function makeIndices () {
	// NOTE: For any hidden nodes, the offset will increase;
	// This basically hides the index until that node is shown
	var indices = new ElementArray ([], Index);
	var offset = 0;

	this.towers.each (function (tower) {
		var node  = tower.get (0);
		var index = node.index() - offset;
		var hidden = tower.hidden ();
		if (hidden)
			offset++;

		indices.push (new Index (node, {
                                                  hidden: !hidden,
                                                  index: index
                                               }));
	});

	this.indices = indices;
};

// overloaders ... if this script is included, these should be included
overload ({name: "makeIndices", env: Build}, true, makeIndices);
overload ({name: "update", env: Build}, true, updateBuild);

