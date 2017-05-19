function Resizable (list){
	$(list).resizable({
		handles: 'e',
		grid: 20,
		maxWidth: 220,
		minWidth: ELEMENT_LEN*2,
		resize: function(e, u){
			Resizable.updateIndices (list);
			Resizable.updateDroppers (list);
			checkIncorrect (list);
		}
	})
}

const ELEMENT_LEN = 20; // each index has a width of 20px ...

Resizable.calculateLength = function (list, w){
	w = DOM.width (list);
	return (w / ELEMENT_LEN) - 1;
}

Resizable.updateIndices = function (list){
	// make sure its valid .....
	var index       = DOM.indexOf (list);
	var indices     = DOM.indicesFromIndex (index);
	var indicesObj  = RowIndices.from (indices);
	if (!indicesObj) return;

	// get the updated text & update it
	var len         = Resizable.calculateLength (list);
	var newIndices  = Resizable.getNewIndices (len);

	indicesObj.update (newIndices);
}

Resizable.updateDroppers = function (list){
	var numDroppers = Resizable.calculateLength (list);
	var row         = DOM.rowFrom (list);
	var rowObj      = Rows.from (row);

	rowObj.updateDroppers (numDroppers);
	Droppers.reposition();
}

Resizable.getNewIndices = function(len){
	var indices = "";
	for (var i = 0; i < len; i++)
		indices += i;
	return indices;
}

Resizable.setMinItems = function (list, numItems){
	$(list).resizable('option', 'minWidth', numItems * ELEMENT_LEN);
}