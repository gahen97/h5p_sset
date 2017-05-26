/*
	Generate a random Skiplist to use with the Skiplist exercise.

	Well, I won't back down - no, I won't back down.
	You can stand me up at the gates of hell but I won't back down
*/

var modules   = "./Skiplist";
var helpers   = "./helpers";

var rand      = require(helpers + "/random.js");
var Skiplist  = require(modules + "/Skiplist.js");

const MIN_NUM = 1;
const MAX_NUM = 99;
const N       = 6;

// Generates a series of up to N elements to be used as the bottom row of the skiplist
function bottomRow (){
	return rand.uniqArray (MIN_NUM, MAX_NUM, N, {}).sort (function (a, b){
		return a-b;
	});
}

// main generator
function SkiplistExercise (){
	return new Skiplist(bottomRow()).toJson ();
}

module.exports.create = SkiplistExercise;
