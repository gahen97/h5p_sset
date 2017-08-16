function Answer (data){
	if (data)
		this.searchingFor = data;
	else
		this.newPath ();

	this.init ();
}

Answer.prototype.init = function(){
};

Answer.prototype.update = function (c){
}

Answer.prototype.newPath = function (data){
	if (!data && data !== 0){
		var elems = build.getElements ();
		var rand  = elems.random ();
		data  = rand && rand.getData ();
	}

	this.searchingFor = data;
	setSearchingFor (data);
}


// Called to check if a given node is the final node being searched for
Answer.prototype.reachedEnd = function (node) {
	// note: should end in the node just before u.
	// so either no next, and next would be u;
	// or next is >= u while this node is < u.
	if (!node) return true;

	var next = node.getNext ();
	return node.isBottom () &&
		node.getData () < this.searchingFor &&
		(!next || next.getData() >= this.searchingFor);
}

// Called to find the next node from some other node
Answer.prototype.getNextMove = function (from) {
	if (!from.getNext() || from.getNext ().getData () >= this.searchingFor)
		return from.getDown ();
	else
		return from.getNext ();
}

// calculate search path for an element ...
Answer.prototype.calculateSearchPath = function (){
	var sentinel = build.getSentinel ();
	var t = sentinel.getTopNode ();

	var correctPath = new NodesArray();

	while (t) {
		correctPath.push (t);
		if (this.reachedEnd (t)) break;
		t = this.getNextMove (t);
	}

	return correctPath;
}

Answer.prototype.getData = function(){
	return this.searchingFor;
}

Answer.prototype.getAnswer = function(){
	return searchPath;
}

function checkAnswer (){
	var answer = this.getAnswer ();
	var optimal = this.calculateSearchPath ();

	var c = answer.equals (optimal);

	return c;
}

overload ({name: "check", env: Answer, id: "checkSearchPath"}, true, checkAnswer);
