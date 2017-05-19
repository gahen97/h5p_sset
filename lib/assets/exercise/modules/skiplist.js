/*
	Generate a random Skiplist to use with the Skiplist exercise.
*/

var modules   = "./Skiplist";
var Skiplist  = require(modules + "/Skiplist.js");

function SkiplistExercise (){
	return new Skiplist([1, 2, 3, 4, 5, 6, 7, 8, 9]).toJson ();
}

module.exports.create = SkiplistExercise;