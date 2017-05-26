function load (cb){
	reset ({rebuild: false});
	$.get("/skiplist/exercise", function(d){
	    var rows = JSON.parse(d);
	    if (build)
	    	build.rebuild (rows, cb);
	    else
	    	build = new Build(rows, {callback: cb});
	});

	resize ();

	jsPlumb.repaintEverything ();
}

function reset (opts) {
	if (!opts) opts={};

	searchPath = new NodesArray ();
	currentNode = null;
	if (build && opts.rebuild !== false)
		build.rebuild ();
}
