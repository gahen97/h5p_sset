function initSearchPath () {
	DOM.checkBtn ().hide ();
}

function initAddRemove () {
	DOM.checkBtn ().show ();
}

modes = [
	{
		name: "searchPath",
		setup: function(){ initSearchPath(); }
	}, 
	{
		name: "addRemove",
		setup: function(){ console.log("INITIALIZING"); initAddRemove(); }
	}
];

const ADD_REM_OPS = [
	{
		name: "add"
	},
	{
		name: "remove",
		checkValid: function(){
			return build.rowSize() > 1;
		}
	}
];

var currentOver;
