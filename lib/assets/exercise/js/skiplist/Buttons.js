var Buttons = { };

Buttons.reset = function (){
	reset ();
	
	Nodes.setActive ([sentinel.getTopNode()])
	Nodes.each (function (n){
		n.getElem ().removeClass ("searchPath")
			    .removeClass ("new");
	})
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
	load (function(){ answer.newPath (); });
}
