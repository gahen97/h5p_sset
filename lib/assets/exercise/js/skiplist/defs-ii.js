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
		setup: function(){ initAddRemove(); }
	}
];

var operations = [
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

// for overloading ... check function helpers
function retTrue (){ return true; }
function isRem () { return op.get() === "remove"; }
function isAdd () { return op.get() === "add"; }
function isSP () { return mode.get() === "searchPath"; }
function isAR () { return mode.get() === "addRemove"; }

