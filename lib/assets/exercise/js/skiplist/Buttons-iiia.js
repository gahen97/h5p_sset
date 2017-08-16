function onCorrectIIIA () {
	leadingNode = nextNode = trailingNode = null;

	build.updateRows (answer.getNewData (), answer.getNewIndex ());
}

function resetBtnIIIA (cb) {
	this.base.call (this, function(){
		answer.reset ();

		if (cb) cb();
	});
}

function btnIIIA(){
	leadingNode = newNode = trailingNode = null;
	this.base.apply (this, arguments);
}

function nextBtnIIIA(){
	// add the element ...
	this.correct ();

	// go through the rest of the blahblahblah chain.
	this.base.apply (this, arguments);
};

overload ({name: "correct", env: Buttons}, isAO, onCorrectIIIA);
overload ({name: "reset", env: Buttons}, isAO, btnIIIA);
overload ({name: "reset", env: Buttons}, isAO, resetBtnIIIA);
overload ({name: "restart", env: Buttons}, isAO, btnIIIA);
overload ({name: "next", env: Buttons}, isAO, btnIIIA);
overload ({name: "next", env: Buttons}, isAO, nextBtnIIIA);
