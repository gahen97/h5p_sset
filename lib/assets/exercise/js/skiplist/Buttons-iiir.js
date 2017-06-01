function onBtnCorrectIIIR () {
	build.removeFromRows (answer.getData (), answer.getIndex ());
};

function onBtnNextIIIR () {
	this.correct ();
	this.base.apply (this, arguments);
}

overload ({name: "correct", env: Buttons}, isRO, onBtnCorrectIIIR);
overload ({name: "next", env: Buttons}, isRO, onBtnNextIIIR);
