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

		addElement (data);
		setSearchingFor (data);
	}
};

var onCorrect = {
	"addRemove": function(){
		build.updateRows (answer.getData ());
	}
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
	defaultBtn.restart ();
}

Buttons.next = function (){
	build.rebuild (undefined, function (){
		answer.newPath ();
	});
}

checkModes.searchPath = Buttons.next;

function addElement (x){
	var newNode = build.addElement (x);
	var n = searchPath.activeAfterAdd (newNode.getHeight ());

	// push all the new nodes in ...
	newNode.get().each (function (node){
		n.push (node);
		newNodes.push (node);
	});

	// update active nodes
	updateActive ();
}
