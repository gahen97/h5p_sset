// set

function ansRandIndex () {
	return rand.index (build.getElements ().toArray ());
}

function getIndexIIIS(){ return this.searchingFor; }
function getDataIIIS (){ return this.setToElement; }

function canMoveRight (next){
	return (next.index () <= this.searchingFor)
}

function nextForIIIS (n) {
	// we want to compare indices ....
	if (!n) return null;
	if (!n.getNext()) return n.getDown ();

	// check the next element to see if we can move right
	var next = n.getNext ();
	if (this.canMoveRight (next)) return next;

	// otherwise we can't, so move down
	return n.getDown ()
};

// check if a given node is the final node
function reachedEndIIIS (n) {
	if (!n) return true;
	return (n.isBottom () && n.index() === this.searchingFor);
};

// determine a new path to follow for the set operation ... requires an index & element
function newPathIIIS () {
	// so... for setting .........................
	// we need a random index && something to set it to.
	var index = this.newIndex ( );
	var newElement = rand.between (MIN_N, MAX_N);

	this.searchingFor = index;
	this.setToElement = newElement;

	setSearchingFor (index, newElement);
};

// check
function checkIIIS () {
	return (this.headFunction.call (this))
};

overload ({name: "newIndex", env: Answer}, retTrue, ansRandIndex);
overload ({name: "newPath", env: Answer}, retTrue, newPathIIIS);
overload ({name: "check", env: Answer}, retTrue, checkIIIS);
overload ({name: "canMoveRight", env: Answer}, retTrue, canMoveRight);
overload ({name: "getNextMove", env: Answer}, retTrue, nextForIIIS);
overload ({name: "reachedEnd", env: Answer}, retTrue, reachedEndIIIS);
overload ({name: "getIndex", env: Answer}, retTrue, getIndexIIIS);
overload ({name: "getData", env: Answer}, retTrue, getDataIIIS);
