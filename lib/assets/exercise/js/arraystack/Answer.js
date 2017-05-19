function Answer(row){
	this.correctAnswer = $("#c", row.getElem()).text();
	this.list          = $("ul.items", row.getElem());
	this.row           = row;
}

Answer.prototype.remTrailingSpaces = function (txt){
	return txt.replace(/[ ]+$/, "");
}

Answer.prototype.check = function (givenAns, ign){
	var corrAns  = this.correctAnswer;

	if (givenAns === corrAns) return true;
	if (ign) return false;
	if (this.remTrailingSpaces(givenAns) != this.remTrailingSpaces(corrAns)) return false;

	// if they're the same when spacing is ignored, has to be a length issue.
	// remind the user of how array is expecting length to work for the exercise
	if (givenAns.length < corrAns.length)
		Colors.highlight (DOM.noteDoubled());
	else if (givenAns.length > corrAns.length)
		Colors.highlight (DOM.noteHalved())

	// and not correct answer, so return false ...
	return false;
}