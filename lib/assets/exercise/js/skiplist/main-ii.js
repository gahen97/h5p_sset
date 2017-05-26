// IT'S. GAME. DAY.

var defs = {
	searchingFor: setSearchingFor
};

var searchingForFuncs = {
	searchPath: defs.searchingFor,
	addRemove: function(txt){
		setOperText ("add(" + txt + ")");
	}
}

setSearchingFor = function (d){
	mode.run (searchingForFuncs, null, d);
}
