// next button ... here we would have an element to set to & an index
// so just set that index to that element
function nextBtnIIIS (cb) {
	build.set (answer.getIndex(), answer.getData());
	
	build.rebuild (undefined, function (){
		op.rand ();

		answer.newPath ();
		if (cb) cb ();
	});
};



overload ({name: "next", env: Buttons}, isSO, nextBtnIIIS);
