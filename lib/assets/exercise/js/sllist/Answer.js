var Answer = { };

Answer.setCorrect = function(c){ this.correctAnswer = c; return this; }

Answer.getAnswer = function (){
	var a = "";

	var nodes = Nodes.inList ();
	if (nodes.looping) return false;

	nodes.nodes.each(function(n){
		if (!n.isPlaceholder())
			a += n.getData();
	});

	// tail should point at last element. make sure it does ...
	if (!tail.getNext() || tail.getNext () === nullN) return "";
	if (tail.getNext().getData() != lastChar (a)) return false;

	return a;
}

Answer.check = function (){
	return this.correctAnswer === this.getAnswer();
}

function lastChar (str){
	return str.charAt (str.length - 1);
}
