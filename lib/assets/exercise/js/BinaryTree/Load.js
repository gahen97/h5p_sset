function load (cb){
/*	reset ({rebuild: false});
	$.get("/skiplist/exercise", function(d){
	    var rows = JSON.parse(d);
	    if (build)
	    	build.rebuild (rows, cb);
	    else
	    	build = new Build(rows, {callback: cb});
	});

	resize ();

	jsPlumb.repaintEverything ();*/


	//random size
	//array of ints in range (# = size)
	//default position
	var i = rand.between(7,25,undefined);
	if (DEBUG)
		console.log("this is i:", i, "\n");
	var myRandN = new RandN(_BinaryTreeMinValue, _BinaryTreeMaxValue, undefined);
	var binaryTreeArr = myRandN.generateUniqueArray(i);
	if (DEBUG)
		console.log("binaryTreeArr: ", binaryTreeArr);

	var binaryTree = new BinaryTree().populate(i, binaryTreeArr);
}

function reset (opts) {
	if (!opts) opts={};

	searchPath = new NodesArray ();
	currentNode = null;

	// reset leading, trailing, and new nodes ... if they exist
	if (exists ("leadingNodes"))  leadingNodes  = new NodesArray ();
	if (exists ("trailingNodes")) trailingNodes = new NodesArray ();
	if (exists ("newNodes"))      newNodes      = new NodesArray ();

	// rebuild if opts.rebuild
	if (build && opts.rebuild !== false)
		build.rebuild (undefined, opts.callback);
}
