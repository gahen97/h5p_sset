/*
	Helper functions ...
*/

// Runs a function given function name, element, and what should be set as 'this'
// any arguments sent in get sent to the function ... ex. runFunc (this, elem, "something", 1, 2)
// would have 1, 2 transferred into the function
runFunction = function (from, element, functionName) {
	if (!element || !functionName) return;
	var f = element[functionName];

	var args = Array.prototype.slice.call (arguments, 2);
	f.apply (from, args);
}
