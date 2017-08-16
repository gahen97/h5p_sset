/*
	Controls the Reset and Check buttons
*/

var Button = { };

Button.reset = function(btn){
	var row = DOM.rowFrom (btn);
	Rows.from (row).reset().clonePrevious();
}

Button.check = function (btn){
	var rowElem = DOM.rowFrom (btn);
	var row     = Rows.from (rowElem);

	if (row.check()){
		Colors.correct (row);

		var nextRow = DOM.nextRowFrom (row.getElem());
		if (!nextRow || nextRow.length === 0) return;

		var rowObj  = Rows.from (nextRow);

		if (!rowObj.isC)
			row.copyTo (rowObj);
	}
	else
		Colors.incorrect (row);
}

Button.reload = function(){
	reload();
}