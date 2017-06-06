/*
	General helper functions
*/

isArray = function (e) { return e instanceof Array; }

cutArgs = function (args, i){
	return Array.prototype.slice.call (args, i);
}
addArg  = function (args, newArg) {
	return Array.prototype.splice.call (args, args.length, 0, newArg);
}

each = function (list, f) {
	for (var i in list)
		f(list[i]);
};

function exists (element) {
	return this.hasOwnProperty (element);
}

function midpoint(a,b){ return (a+b)/2; }
function btw (m, a, b, o){
	if (o.strict && (m === a || m === b))
		return false;
	else if (o.check && !o.check (m, a, b))
		return false;

	return m >= a && m <= b;
}

// match smallest number excluding given numbers
function matchSmallest (min, max, excluding){
	for (var i = min; i < max; i++)
		if (excluding.indexOf (i) === -1)
			return i;
	return undefined;
}

// push an element into an array ....
// if the element is an array itself, will push each element separately
function checkAdd (arr, elements){
	if (!elements) return;

	if ((typeof (elements) !== "object") || !isArray (elements))
		arr.push (elements);
	else{
		for (var i in elements)
			checkAdd (arr, elements[i]);
	}
}

// get ... either ElementArray variant (has get) or primitive array (has [])
function getFromArr (arr, index){
	if (arr.get) return arr.get(index);
	else return arr[index];
}

// Get from a 2D Array ... assuming using ElementArray or variant
get2D = function (arr, row, col){
	var e = getFromArr (arr, row);
	if (!e || !col) return e;

	return getFromArr(e, col);
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
	var args = arguments;
	var v = variable;
	if (isArray (v))
		$(v).each (function (i, e){
			Array.prototype.splice.call (args, 0, 1, e);
			runCases.apply (this, args);
		});
	else{
		var f = cases [v] || cases.def;
		if (!f) return;

		f.apply (from, cutArgs (arguments, 3));
	}
};
