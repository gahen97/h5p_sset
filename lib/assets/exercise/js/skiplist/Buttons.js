var Buttons = { };

Buttons.reset = function (){
	reset ();
	
	Nodes.setActive ([sentinel.getTopNode()])
	Nodes.each (function (n){
		n.getElem ().removeClass ("searchPath");
	})
}

Buttons.restart = function (){
	load ();
}

Buttons.check = function (){
	if (answer.check ()){
		load (function(){ answer.newPath (); });
	}
}