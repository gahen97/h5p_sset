function findBtnR (x) {
	return build.find (x);
}

function onBtnCorrect () {
	build.removeFromRows (answer.getData ());
};

function nextBtnR (cb) {
	// skip over the extra mode and just go straight to next ...
	Buttons.correct ();
	mode.set (0);

	this.base (cb);
};

function isOR (){ return op.get() === "remove"; }
overload ({name: "find", env: Buttons}, isOR, findBtnR);
overload ({name: "correct", env: Buttons}, isOR, onBtnCorrect);
overload ({name: "next", env: Buttons}, isOR, nextBtnR);
