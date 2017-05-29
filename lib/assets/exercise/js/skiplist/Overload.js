/*
	Overloader. Can overload global, prototype, and methods to a single instance of an object.

	To use:
		call overload({
			name: "FUNCTION NAME",
			env: SOME ENVIRONMENT [optional. defaults to the window]
		}, check, newFunction);

	Will overload the function with given name within the given environment.
		If the environment is:
			window		Overloads global function
			Object		Overloads prototype. Copies to every instance.
			Instance	Overloads method within instance
	Check should return true if newFunction should be used.
		If check is false, will call the default function.
	newFunction should be the new function to use.

	Note also, when the function is called, this will add a single property:
		baseFunction
	That points to the function which was overloaded - can then call
		this.baseFunction (arguments)
	to call the initial function.
*/

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
	var newF = function () {
		var func = def;
		if (check.apply (this, arguments))
			func = f;

		// set the base ...
		var prevBase = this.baseFunction;
		this.baseFunction = this.base = def;

		// run the function ...
		var result = func.apply (this, arguments);

		// reset old base & return the result
		this.baseFunction = this.base = prevBase;
		return result;
	};

	f.base = f.baseFunction = def;
	newF.base = newF.baseFunction = def;

	redefine (opts.env, opts.name, newF);
};
