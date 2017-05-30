/*
	It's a pretty sad day at the funeral... Norman Osbourne has bitten the dust.
	And I heard Harry said, he wants Spiderman dead - oh, but his buddy Pete, he can trust.
*/

function checkR (){
	// Check the search path is correct
	// NOTE: This overloads Answer-ii which overloads Answer. Going to base.base goes straight down to the initial check,
	//       under Answer, which is what we want here ...
	// weird: if not called with .call(this), this becomes the function itself. find a fix.
	if (!this.base.base.call (this))
		return false;

	var valid = true;
	var my    = this;

	if (!this.elems){
		console.log("somebody once told me the world was gonna roll me");
		console.log("i ain't the sharpest tool in the shed....");
		return false;
	}

	this.elems.each (function (node) {
		var id = node.getId ();
		if (my.ans[id] != node.getNext()){
			valid = false;
			return false;
		}
	});

	this.update (valid);
	return valid;
};

function initAnswer () {
	this.elems = new NodesArray ();
	this.ans   = { };

	this.calculateAnswer ();
};

function calculateAnswer () {
	// the logic here .... go through every node, one by one, and get the answer for that node
	var a = this;
	Nodes.each (function (node){
		if (node.getData () === this.searchingFor)
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

	if (e.getNext().getData() !== this.searchingFor)
		return e.getNext();

	return e.getNext().getNext();
};

// overload check for removals
overload({name: "check", env: Answer}, function(){ return op.get() === "remove"; }, checkR);
overload({name: "init", env: Answer}, function(){ return op.get() === "remove"; }, initAnswer);
overload({name: "calculateAnswer", env: Answer}, function(){ return op.get() === "remove"; }, calculateAnswer);

