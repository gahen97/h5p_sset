modes = [
	{
		name: "searchPath",
		setup: function(){ DOM.checkBtn().hide (); }
	}, 
	{
		name: "addRemove",
		setup: function(){ DOM.checkBtn().show (); }
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
