/*
	Uhh, just some weird stuff, ig
*/

isArray = function (e) { return e instanceof Array; }

cutArgs = function (args, i){
	return Array.prototype.slice.call (args, i);
}

each = function (list, f) {
	for (var i in list)
		f(list[i]);
};

// Runs a function given function name, element, and what should be set as 'this'
// any arguments sent in get sent to the function ... ex. runFunc (this, elem, "something", 1, 2)
// would have 1, 2 transferred into the function
runFunction = function (from, element, functionName) {
	if (!element || !functionName) return;
	var f = element[functionName];

	var args = cutArgs (arguments, 3);
	f.apply (from, args);
}


// Run functions based on some variable.
runCases = function (variable, cases, from) {
	var v = variable;
	if (isArray (v))
		$(v).each (function (i, e){
			Array.prototype.splice.call (arguments, 0, 1, e);
			runCases.apply (this, arguments);
		});
	else{
		var f = cases [v] || cases.def;
		if (!f) return;

		f.apply (from, cutArgs (arguments, 3));
	}
};
