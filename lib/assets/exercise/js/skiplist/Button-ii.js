var defaultBtn = {
	check: Buttons.check,
	reset: Buttons.reset,
	restart: Buttons.restart,
	next:  Buttons.next
};

var checkModes = {
	"searchPath" : Buttons.next,
	"addRemove": function(){
		var data = answer.getData ();
		newOp (data);
		setSearchingFor (data);
	}
};

var onCorrect = {
	"addRemove": function(){
		op.run (onCorrectOps);
	}
}

var onCorrectOps = {
	add: function(){ build.updateRows (answer.getData ()); },
	remove: function(){ build.removeFromRows (answer.getData ()); }
}

var checkBtnDebounce = new Debounce(function (){
	var correct = answer.check ();
	if (correct){
		mode.run (onCorrect);

		mode.inc ();
		return mode.run (checkModes);
	}
});

Buttons.check = function (){
	checkBtnDebounce.call ();
}

Buttons.reset = function (){
	mode.set ("searchPath");
	defaultBtn.reset ();
}

Buttons.restart = function (){
	mode.set ("searchPath");
	op.rand ();
	defaultBtn.restart ();
}

Buttons.next = function (){
	build.rebuild (undefined, function (){
		answer.newPath ();
	});
}

checkModes.searchPath = Buttons.next;

// NOTE: mode should be either "add" or "rem"
function updateAddRemove (tower, mode) {
	if (!tower) return false;
	if (!mode) return false;

	// again, ugly. if add, call activeAfterAdd; otherwise activeAfterRem
	var fName = (mode === "add") ? "activeAfterAdd" : "activeAfterRem";
	var n = searchPath[fName] (tower.getHeight (), tower.getData());

	tower.get ().each (function (node){
		n.push (node);
		newNodes.push (node);
	});

	updateActive ();
}

function addElement (x){
	var newNode = build.addElement (x);
	return updateAddRemove (newNode, "add");
}

function removeElement (x) {
	var removedTower = build.find (x);
	return updateAddRemove (removedTower, "rem");
}

function newOp (x) {
	var ops = {
		add: addElement,
		remove: removeElement
	};

	op.run (ops, undefined, x);
}
