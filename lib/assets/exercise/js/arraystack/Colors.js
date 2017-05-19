/*
	Show the color change to track answer correct/incorrect
*/

var Colors = { };

const HIGHLIGHT_TIME = 1000;

Colors.set = function (row, isCorrect){
	// find everything
	var tr = row.getElem();
	var ul = DOM.listFrom (tr);
	var btn = DOM.buttonsFrom (tr);
	var elems = DOM.elementsFrom (tr);

	// Add or remove the class, based on isCorrect
	if (isCorrect === 1){
		ul.addClass("correct");
		btn.addClass("correct");
	} else {
		ul.removeClass("correct");
		btn.removeClass("correct");
	}

	row.setColor (isCorrect === 1);
	tr.data("correct", isCorrect);
}

Colors.correct = function (row){
	Colors.set (row, 1);
}

Colors.incorrect = function (row){
	Colors.set (row, 0);
}

Colors.highlight = function (el){
	if (el.hasClass("highlight")) return;
	el.addClass ("highlight");

	setTimeout(function(){
		el.removeClass ("highlight");
	}, HIGHLIGHT_TIME);
}