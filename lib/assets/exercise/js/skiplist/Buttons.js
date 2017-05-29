var Buttons = { };

var resetBtnDb = new Debounce (function (cb) {
	reset ({callback: cb});
	
	Nodes.setActive ([sentinel.getTopNode()])
	Nodes.each (function (n){
		n.getElem ().removeClass ("searchPath")
			    .removeClass ("new");
	})
});

Buttons.reset = function (cb){
	resetBtnDb.call ();
}

Buttons.restart = function (cb){
	load (function(){
		answer.newPath (); 
		if (cb)
			cb();
	});
}

Buttons.check = function (){
	if (answer.check ()){
		Buttons.next ();
	}
}

Buttons.next = function(cb){
	load (function(){ 
		answer.newPath (); 
		if (cb) cb();
	});
}
