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
	check.update (c);
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

Answer.prototype.calculateSearchPath = function (){
	var t = sentinel.getTopNode ();
	var d = this.searchingFor;

	var correctPath = new NodesArray();
	while (t) {
		correctPath.push (t);
		if (t.isBottom() && t.getData() === d) break;

		if (!t.getNext() || t.getNext ().getData () > d)
			t = t.getDown ();
		else
			t = t.getNext ();
	}

	return correctPath;
}

Answer.prototype.getData = function(){
	return this.searchingFor;
}

Answer.prototype.getAnswer = function(){
	return searchPath;
}

Answer.prototype.check = function (){
	var answer = this.getAnswer ();
	var optimal = this.calculateSearchPath ();

	var c = answer.equals (optimal);
	this.update (c);

	return c;
}
