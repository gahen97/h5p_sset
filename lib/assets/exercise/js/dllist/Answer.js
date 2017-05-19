var Answer = { };

Answer.setCorrect = function(c){ this.correctAnswer = c; return this; }

Answer.check = function (){
	// check correct forwards
	var forwards = Nodes.forwards ();
	var s        = forwards.nodes + "";
	if (s != this.correctAnswer.forwards) return false;

	// correct backwards
	var backwards = Nodes.backwards ();
	var b         = backwards.nodes + "";
	if (b != this.correctAnswer.backwards) return false;

	// here, if the answer is the empty string, just return true ...
	// don't bother with looping
	if (b === "" && s === "") return true;

	// is there a bad loop? i.e., not through dummy node
	if (forwards.isLoopingBad || backwards.isLoopingBad) return false;

	// is there not a good loop? i.e., loops through the dummy
	if (!forwards.isLooping || !backwards.isLooping) return false;
	
	// we're good here.
	return true;
}