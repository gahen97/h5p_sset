var rand = require("../helpers/random.js");

function add (list, params){
	var value = params.x;
	var index = params.i;

	list.splice (index, 0, value);
}
function rem (list, params){
	list.splice (params.i, 1);
}

function addVals(list){
	return {x: rand.letter() + "" + rand.letter(), i: rand.index (list)};
}
function remVals(list){
	return {i: rand.index (list)};
}

module.exports.add = add;
module.exports.rem = rem;
module.exports.values = { };
module.exports.values.add = addVals;
module.exports.values.rem = remVals;