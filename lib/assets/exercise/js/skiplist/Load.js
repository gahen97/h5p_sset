function load (cb){
	reset ();
	$.get("/skiplist/exercise", function(d){
	    var rows = JSON.parse(d);
	    if (build)
	    	build.rebuild (rows);
	    else
	    	build = new Build(rows);

		if (cb) cb ();
	});
	resize ();

	jsPlumb.repaintEverything ();
}

function reset () {
	searchPath = new NodesArray ();
	currentNode = null;
}
