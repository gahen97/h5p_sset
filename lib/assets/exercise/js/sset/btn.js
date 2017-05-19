/*
	This code runs Buttons and some of the general stuff they should do.
	More in-depth code is in the other script files
*/

// When the Reset button is clicked
function resetBtn (b){
	var set = getSetFromBtn (b);
	doReset (set);
}

// When the Check button is clicked
function btnClick(b){
	var p = $(b).parent();
	if (correctAnswer(p)){
		markAsCorrect(p);
		shiftToNext(getElements(p), getIndex(p))
	}
	else
		markAsIncorrect(p);
}

// Trigger a set to reset. If arg is provided, will send with the reset
function doReset (set, arg){
	$(set).trigger("reset", arg);
}

// Find the set of elements (and get their elements), given parent
function getElements(p){
	var set = $("ul.items", p);
	return set.children();
}

// Find the index of some data
function getIndex(p){
	var tr = $(p).closest("tr");
	return tr.data("index");
}

// Find the set, given a button in the set
function getSetFromBtn (btn){
	var p = $(btn).parent();
	return $("ul.items", p);
}
// Find the set, given index of the row
function getSetWithIndex (id){
	return $("#set" + id);
}
// Find a row, given index
function getRowWithIndex (id){
	return $("#row" + id);
}

// When a row is completed, shift its elements down to the next row
function shiftToNext(elements, index){
	var next = index + 1;
	var nextSet = getSetWithIndex(next);
	var nextRow = getRowWithIndex(next);

	// is the next row already completed? if so, this shouldn't overwrite it ...
	if (nextRow.data("correct") === 1) return;

    // reset the contents of the next set ....
    // this will require regrabbing the set afterwards
    doReset (nextSet, true);

    // regrab the set & add the children
	var newSet  = getSetWithIndex(next);
	newSet.append(elements.clone());
}

function resize(){
	parent.resizeIframe ();
}
