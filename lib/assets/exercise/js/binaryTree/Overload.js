/*
	Overload a function with a new one, running only when a given check function is true.

	Takes three arguments:
		opts - Object containing:
			name		MANDATORY		The name of the function to overload
			env		OPTIONAL		The environment of the function.
								  Defaults to global.
			id		OPTIONAL		An ID to save the function under.
								  See the note on parents below.

		check - Takes the same arguments as the function.
			Returns true if the given function should be called.

		f     - The function to call when check is true.
			Any arguments passed in will be provided to the function.

	When a function is called that has been overloaded, it will be provided with some helper properties:
		base		The parent of the given function
		head		The head of the function - the first declaration of the function
		parents		A dictionary of ID : function for each ID provided within opts.
				  Calling a function here will go straight to the function without a check.
				
*/

/* ---------- MAIN FUNCTION -------------- */
function overload (opts, check, f)
{
	if (!opts) opts = { };
	if (!opts.env) opts.env = window;

	var def         = getDefaultFunction (opts);
	opts.def        = def;

	var newFunction = createFunction (opts, check, f);
	
	addPointers ([f, check, newFunction], def, opts, f);
	
	redefine (opts, newFunction);
};

/* ---- MAIN HELPERS -------- */

// Add pointers to an array of functions, with default, options, and the new function
function addPointers (arr, def, opts, newF)
{
	var head    = findHead (def);
	var parents = getParents (def, opts, newF);

	toArray (arr).each (function (p) {
		if (!p) return;

		p.base = def;
		p.head = head;
		p.parents = parents;
	});
};

// Redefine the function with given name specified in options to point to f
function redefine (opts, f) {
	var name   = opts.name;
	var env    = findEnvironment (opts.env);
	env [name] = f;
};

// Create a new function to handle checking & running given mainFunction
function createFunction (opts, check, mainFunction) {
	var def  = opts.def;
	var newF = function () {
		var f = checkIfTrue (check, mainFunction, opts.def, this, arguments);

		addPointers ([f, this], def, opts, mainFunction);
		
		return runFunction (f, this, arguments);
	};

	return newF;
};

/* ---- HELPER SUB 2 -------- */

// Get the function already specified with given name & environment
function getDefaultFunction (opts) {
	var name = opts.name;
	var env  = findEnvironment (opts.env);
	return env [name];
}

// Find the head from a given parent function
function findHead (f) {
	if (!f) return null;
	if (f.head) return f.head;
	return f;
}

// Get the list of parents for a given function
function getParents (f, opts, newF) {
	var p = f && f.parents;
	if (!p) p = { };

	if (opts.id)
		p[opts.id] = newF;
	return p;
}

// Find the environment - class, global, or instance
function findEnvironment (env) {
	// if not given, it's global ...
	if (!env) return window;

	// if it has a prototype, it's a class and should redefine class
	if (env.prototype) return env.prototype;

	// otherwise it's just whatever was passed in
	return env;
}

/* ------ NEW FUNCTION HELPERS ------- */

// Run a function in a given environment with given arguments
function runFunction (f, env, args) {
	return f.apply (env, args);
}

// Check if a given function returns true within given environment, args;
//    Return t if true or f if false
function checkIfTrue (c, t, f, env, args) {
	if (typeof (c) !== "function") return c;
	if (runFunction (c, env, args)) return t;
	return f;
};
