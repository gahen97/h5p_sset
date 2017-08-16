/*
	Basically, here, we're not using operations.
	We want a tree - any number of elements between 7 - 20? - and send that back as:
		size=X,
		[1, 2, 3, 4, 5, 6, 7, 8, 9, ...]
	(do we even need size here?)

	So to randomly generate that:
		Take X number of elements - we want these to be numbers - where no two elements are the same.
		That's all handled by the Random module, so there's not really much to do here.

	forgive me father... why should ya bother?
*/

var rand = require ("./helpers/random.js");

const N = {
	MIN: 99,
	MAX: 99
};

const VALUES = {
	MIN: 0,
	MAX: 99 // we can change this. mainly depends on the size of the nodes
};


function generate (f) {
	// note: f is useless here.
	var n     = rand.between (N.MIN, N.MAX);
	var array = rand.uniqArray (VALUES.MIN, VALUES.MAX, n);
	
	var result = {
		size: n,
		items: array
	};

	return JSON.stringify (result);
};

module.exports.create = generate;
