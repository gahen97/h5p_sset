/*
	Main code... implements the three array elements and functions that use all three together.

	NTS:
		Copying from row to next row needs to be added;
		Array resizing needs to be added.

	NTS[2]:
		Copying to the next row works, but the system goes down. All objects seem to be getting removed on cleanup, not just the few that should be.
*/

var Rows, Elements, Droppers, RowIndices;

$(function(){
	reload ();
});

function checkIncorrect (d){
	var row = DOM.rowFrom (d);
	var r   = Rows.from (row);
	if (!r.correct ())
		Colors.incorrect(r);
}

function addNewElements (elements) {
	// Clean up anything that no longer exists ...
	Rows.cleanup();
	Elements.cleanup();
	Droppers.cleanup();

	// Add the new elements. Split these up into row, element, and droppers, and add individually
	Rows.add (DOM.rowFrom (elements)); // if there are any!
	Elements.add (DOM.elementsFrom (elements)); // elements from elements. hmm
	Droppers.add (DOM.droppersFrom (elements)); // k
	Trash.add (DOM.trashFrom (elements));
}

function loadNew (){
	Rows     = new ElementArray(DOM.rows(), Row);
	Elements = new ElementArray(DOM.elements(), Element);
	Droppers = new DropArray();
	RowIndices = new ElementArray(DOM.indices(), Indices);
	Trash.add (DOM.trash());

	parent.resizeIframe ();
}
function reload (){
	$.get("/arraystack/exercise", function(res){
		var tbody = $("tbody");
		tbody.empty().append(res);
		loadNew();
	})
}
