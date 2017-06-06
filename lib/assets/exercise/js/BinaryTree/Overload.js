/*
	Overloader. Can overload global, prototype, and methods to a single instance of an object.

	To use:
		call overload({
			name: "FUNCTION NAME",
			env: SOME ENVIRONMENT [optional. defaults to the window],
			id: "SOME IDENTIFIER" [optional]
		}, check, newFunction);

	Will overload the function with given name within the given environment.
		If the environment is:
			window		Overloads global function
			Object		Overloads prototype. Copies to every instance.
			Instance	Overloads method within instance
	If provided, the given ID will be added to the list of parents for the function.
		It can then be called by ID:
			function.parents[ID].call (this, ARGUMENTS);
		Which will call the function with the given ID.

	Check should return true if newFunction should be used.
		If check is false, will call the default function.
	newFunction should be the new function to use.

	Note also, when the function is called, this will add a few properties:
		baseFunction			The parent of the function
		base				Alias to baseFunction
		parents				A list of parent functions, {ID: function}
*/

// overload force ... force the overload function to run regardless of check
const OVERLOAD_CODES = {
	FORCE: {HARD_FORCE : true}
}

// default overload function .... if there is no base function, just return false
const DEF_OVERLOADER = function(){ return false; }

// Get the current function, within given environment, under given name
function getDef (env, name) {
	if (env[name]) return env[name];
	if (env.prototype)
		return env.prototype[name];
	return DEF_OVERLOADER;
};

// Redefine a function in some environment with given name to be func.
function redefine (env, name, func){
	if (env[name])
		env[name] = func;
	if (env.prototype)
		env.prototype[name] = func;
};

// Main overload function
function overload (opts, check, f) {
	if (!opts) return false;

	if (!opts.env)
		opts.env = window;

	var def = getDef (opts.env, opts.name);
	var newF = function (force) {
		var func = def;

		if (force === OVERLOAD_CODES.FORCE){
			arguments = cutArgs (arguments, 1);
			func      = f;
		} else if (check===true || check.apply (this, arguments))
			func = f;


		// set the base ...
		var prevBase = this.baseFunction;
		this.baseFunction = this.base = def;
		this.headFunction = newF.headFunction;
		this.parents = newF.parents;

		// run the function ...
		if (!func) return false;
		var result = func.apply (this, arguments);

		// reset old base & return the result
		this.baseFunction = this.base = prevBase;
		return result;
	};

	var head = def && def.headFunction;
	if (!head) head = def;

	f.base = f.baseFunction = def;
	newF.base = newF.baseFunction = def;
	newF.headFunction = f.headFunction = head;

	// initialize the list of parents
	var parents = { };
	if (def && def.parents)
		parents = def.parents;

	// if there's an id attached to this function, add it ...
	if (opts.id)
		parents [opts.id] = f;

	// and set the parents
	f.parents = newF.parents = parents;
	


	redefine (opts.env, opts.name, newF);
};
