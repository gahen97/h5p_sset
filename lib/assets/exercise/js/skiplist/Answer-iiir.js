function newDataIIIR () {
	return rand.index (build.getElements ().toArray ());
}

// moving right only if strictly <
function canMoveRightIIIR (next) {
	return next.index() < this.searchingFor;
}

// reached end when in the bottom row, element is one before removed element
function reachedEndIIIR (n) {
	return n.isBottom() && n.index() === answer.getIndex()-1;
};

function checkIIIR () {
	var searchPathCorrect = this.base.call (this, OVERLOAD_CODES.FORCE);
	if (!searchPathCorrect) return false;

	var removeCorrect = this.checkP2.parents.removePart2.call (this, OVERLOAD_CODES.FORCE);
	if (!removeCorrect) return false;

	return true;
};

function getDataIIIR (node) {
	return node.index();
}

overload ({name: "newData", env: Answer}, isRO, newDataIIIR);
overload ({name: "check", env: Answer}, isRO, checkIIIR);
overload ({name: "reachedEnd", env: Answer}, isRO, reachedEndIIIR);
overload ({name: "canMoveRight", env: Answer}, isRO, canMoveRightIIIR);
overload({name: "dataOf", env: Answer}, isRO, getDataIIIR);
