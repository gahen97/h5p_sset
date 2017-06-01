var defaultBtn = {
	check: Buttons.check,
	reset: Buttons.reset,
	restart: Buttons.restart,
	next:  Buttons.next
};

var onCorrect = {
	"addRemove": function(){
		Buttons.correct ();
	}
}

var checkBtnDebounce = new Debounce(function (){
	var correct = answer.check ();
	check.update (correct);

	if (correct){
		mode.run (onCorrect);
		mode.inc ();

		return Buttons.next ();
	}
});

Buttons.correct = function () {
	build.updateRows (answer.getData ());
}

Buttons.find = function(x){
	return build.add (x);
}

function checkBtnNew () {
	checkBtnDebounce.call ();
}

function resetBtnNew (cb) {
	mode.set ("searchPath");
	this.baseFunction (cb);
}

function restartBtnNew (cb) {
	mode.set ("searchPath");
	op.rand ();
	this.baseFunction (cb);
}

function nextBtn (cb) {
	build.rebuild (undefined, function (){
		op.rand ();

		answer.newPath ();
		if (cb) cb ();
	});
}

function nextBtnAdd (cb) {
	var data = answer.getData ();
	newOp (data);
	setSearchingFor (data);

	if (cb) cb();
}

function updateAct (tower) {
	if (!tower) return false;
	if (!mode) return false;

	var n = searchPath.activeAfterOp (tower.getHeight (), tower.getData ());

	tower.get ().each (function (node){
		n.push (node);
		newNodes.push (node);
	});

	updateActive ();
}

function newOp (x){
	var newNode = Buttons.find (x);
	return updateAct (newNode);
}


function isAddRemove(){ return mode.get() === "addRemove"; }
function isSP(){ return mode.get() === "searchPath"; }
function rt(){ return true; }

overload ({name: "next", env: Buttons}, function(){ return true; }, nextBtn);
overload ({name: "next", env: Buttons}, isAddRemove, nextBtnAdd);
overload ({name: "check", env: Buttons}, rt, checkBtnNew);
overload ({name: "reset", env: Buttons}, rt, resetBtnNew);
overload ({name: "restart", env: Buttons}, rt, restartBtnNew);
