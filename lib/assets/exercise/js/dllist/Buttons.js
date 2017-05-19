var Buttons = { };

Buttons.cleanup = function (){
	var nodesInList = Nodes.accessible ().nodes;

	Nodes.each (function (el){
		if (!nodesInList.contains (el))
			el.remove ();
	});
	Nodes.cleanup ();
}

Buttons.reset = function () {
	save.reload ();
}

Buttons.check = function(){
	if (Answer.check()){
		checkmark.show ();
		load();
	}
}

Buttons.restart = function() {
	Nodes.removeAll (function(n){ return n !== dummyNode; });
	restart();
}