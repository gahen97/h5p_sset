/*
	It's a pretty sad day at the funeral... Norman Osbourne has bitten the dust.
	And I heard Harry said, he wants Spiderman dead - oh, but his buddy Pete, he can trust.
*/

function checkP2 () {
	var valid = true;
	var my    = this;

	if (!this.elems){
		return false;
	}

	this.elems.each (function (node) {
		var id = node.getId ();
		if (my.ans[id] != node.getNext()){
			valid = false;
			return false;
		}
	});

	return valid;
};

function checkR (){
	// Check the search path is correct
	// NOTE: This overloads Answer-ii which overloads Answer. Going to base.base goes straight down to the initial check,
	//       under Answer, which is what we want here ...
	if (!this.headFunction.call (this))
		return false;

	return this.checkP2();
};

function getData (node){ return node.getData(); }

function initAnswer () {
	this.elems = new NodesArray ();
	this.ans   = { };

	this.calculateAnswer ();
};

function calculateAnswer () {
	// the logic here .... go through every node, one by one, and get the answer for that node
	var a = this;
	Nodes.each (function (node){
		if (a.dataOf (node) === a.searchingFor)
			return true;

		a.elems.push (node);
		a.ans [node.getId ()] = a.answerFrom (node); 
	});
};

Answer.prototype.answerFrom = function(e){
	// Three cases:
	//   1) No next => do nothing ....
	//   2) Next isn't being removed => do nothing ...
	//   3) Next is removed => Should shift to next's next
	if (!e.getNext())
		return null;

	if (this.dataOf (e.getNext()) !== this.searchingFor)
		return e.getNext();

	return e.getNext().getNext();
};

// overload check for removals
overload({name: "check", env: Answer, id: "checkRemove"}, function(){ return op.get() === "remove"; }, checkR);
overload({name: "checkP2", env: Answer, id: "removePart2"}, function(){ return op.get() === "remove"; }, checkP2);
overload({name: "dataOf", env: Answer}, function(){ return op.get() === "remove"; }, getData);
overload({name: "init", env: Answer, id: "initPointerCheck"}, function(){ return op.get() === "remove"; }, initAnswer);
overload({name: "calculateAnswer", env: Answer, id: "calculatePointers"}, function(){ return op.get() === "remove"; }, calculateAnswer);

