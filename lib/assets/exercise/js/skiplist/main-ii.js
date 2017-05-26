// IT'S. GAME. DAY.

var defs = {
	searchingFor: setSearchingFor
};

var op = new Mode(ADD_REM_OPS);

var searchingForFuncs = {
	searchPath: defs.searchingFor,
	addRemove: function(txt){
		var leading = getLeadingText ();
		setOperText (leading + "(" + txt + ")");
	}
}

var leadingTexts = {
	add: "add",
	remove: "remove"
};

function getLeadingText () {
	return op.match (leadingTexts);
}

setSearchingFor = function (d){
	setOperText (getLeadingText() + "(" + d + ")");
	//mode.run (searchingForFuncs, null, d);
}
