// Rip. I made myself sad

var defs = {
	searchingFor: setSearchingFor
};

var isPointering, pointerDragging;

var op = new Mode(ADD_REM_OPS);

var leadingTexts = {
	add: "add",
	remove: "remove"
};

function getLeadingText () {
	return op.match (leadingTexts);
}

setSearchingFor = function (d){
	setOperText (getLeadingText() + "(" + d + ")");
}
