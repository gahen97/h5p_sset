var defaultBtn = {
	check: Buttons.check,
	reset: Buttons.reset,
	restart: Buttons.restart
};

Buttons.setup = function (){
	mode.setModes (["searchPath", "addRemove"]);
}

Buttons.check = function (){
	var correct = answer.check ();
	if (correct){
		mode.inc ();
		switch (mode.get ()){
			case "searchPath":
				Buttons.next ();
				return;
			case "addRemove":
				addElement (answer.getData ());
				return;
			default:
				console.log ("that's a whole bunch of cheese");
				return;
		}
	}
}

Buttons.reset = function (){
	if (mode.get() === "addRemove"){
		build.remove (answer.getData ());
	}
	mode.set ("searchPath");
	defaultBtn.reset ();
}

Buttons.restart = function (){
	mode.set ("searchPath");
	defaultBtn.restart ();
}

function addElement (x){
	var newNode = build.addElement (x);
	var n = searchPath.activeAfterAdd (newNode.getHeight ());

	// push all the new nodes in ...
	newNode.get().each (function (node){
		n.push (node);
		newNodes.push (node);
	});

	// activate the nodes that should be active
	Nodes.setActive (n, {ptr: true, detachable: true});

	// allow their pointers to be detached
	var nodes = new NodesArray(n);
	nodes.each (function (node){
		if (nodes.contains (node.getNext ()) || !node.getNext ())
			node.enable({ptr: true, next: true, detachable: true});
	});
}
