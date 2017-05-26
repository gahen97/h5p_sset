var Buttons = { };

var resetBtnDb = new Debounce (function () {
	reset ();
	
	Nodes.setActive ([sentinel.getTopNode()])
	Nodes.each (function (n){
		n.getElem ().removeClass ("searchPath")
			    .removeClass ("new");
	})
});

Buttons.reset = function (){
	resetBtnDb.call ();
}

Buttons.restart = function (){
	load (function(){ answer.newPath (); });
}

Buttons.check = function (){
	if (answer.check ()){
		Buttons.next ();
	}
}

Buttons.next = function(){
	load (function(){ 
		console.log ("FINDING NEW SEARCH PATH");
		answer.newPath (); 
	});
}
