function newPathIIIA() {
	var index = this.newIndex ( );
	var newElement = rand.between (MIN_N, MAX_N);

	this.searchingFor = index;
	this.newData      = newElement;
	this.elemHeight   = null;

	this.reset ();

	setSearchingFor (this.searchingFor, this.newData);
};

function getNewElement () {
	return this.newElem;
}

function getNewData () {
	return this.newData;
}

function getNewIndex () {
	return this.searchingFor;
}

function resetIIIA () {
	this.newElem    = build.add (this.newData, this.searchingFor, {height: this.elemHeight, update: true});
	this.elemHeight = this.newElem.getHeight ();
}

function checkIIIA () {
	// two things to check - was search path correct, are nodes pointed correctly?
	// search path is simple: call the head function.
	// other one is also simple: we have build.nodes, so check if node in each row ...
	// has next set to the next node in that row. if not, wrong
	if (!this.parents.checkSearchPath.apply (this, arguments)) return false;
	
	// so onto the second part ... making sure every node's next is set correctly
	var my = this;
	return this.checkP2 ();
};

// check if nodes are in correct order
function checkP2IIIA () {
	var result = true;
	var nodes  = build.nodes;
	nodes.each (function (node, row, col) {
		if (node.getNext () != nodes.get (row, col + 1)) {
			result = false;
			return false;
		}
		return true;
	});

	return result;
}


// NOTE: We have to overload two functions, reachedEnd(t) and getNextMove(t)
function reachedEndIIIA (node) {
	return node.isBottom () && node.getNext() && node.getNext().index() === this.searchingFor;
}

function getNextMoveIIIA (from) {
	if (!from.getNext() || from.getNext ().index () >= this.searchingFor)
		return from.getDown ();
	return from.getNext ();
}

overload({name: "reset", env: Answer}, isAO, resetIIIA);
overload({name: "newPath", env: Answer}, isAO, newPathIIIA);

overload({name: "getTower", env: Answer}, isAO, getNewElement);
overload({name: "getNewData", env: Answer}, isAO, getNewData);
overload({name: "getNewIndex", env: Answer}, isAO, getNewIndex);

overload ({name: 'reachedEnd', env: Answer}, isAO, reachedEndIIIA);
overload ({name: 'getNextMove', env: Answer}, isAO, getNextMoveIIIA);


overload ({name: 'check', env: Answer}, isAO, checkIIIA);
overload ({name: 'checkP2', env: Answer}, isAO, checkP2IIIA);
