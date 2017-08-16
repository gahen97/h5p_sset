var Buttons = { };

Buttons.cleanup = function (){
	var nodesInList = getNodesInList ().nodes;
	Nodes.each (function (el){
		if (!el.isPlaceholder() && !nodesInList.contains (el))
			el.remove ();
	});
	Nodes.cleanup ();
}

Buttons.reset = function () {
	console.log ("reset");
}