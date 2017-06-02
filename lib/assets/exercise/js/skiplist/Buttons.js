var Buttons = { };

var resetBtnDb = new Debounce (function (cb) {
	reset ({callback: cb});
	
	var sentinel = build.getSentinel ();
	Nodes.setActive ([sentinel.getTopNode()])
	Nodes.each (function (n){
		n.getElem ().removeClass ("searchPath")
			    .removeClass ("new");
	})
});

Buttons.reset = function (cb){
	resetBtnDb.call (cb);
}

Buttons.restart = function (cb){
	load (function(){
		if (exists("op"))
			op.rand ();

		answer.newPath (); 
		if (cb)
			cb();
	});
}

Buttons.check = function (){
	var c = answer.check ();
	check.update (c);
	if (c)
		Buttons.next ();
}

Buttons.next = function(cb){
	load (function(){
		if (exists("op"))
			op.rand ();

		answer.newPath (); 
		if (cb) cb();
	});
}
