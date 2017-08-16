var rand = require("../helpers/random.js");

function add (list, value){
	list.insert (value);
}
function push(list, value){
	list.insertFirst(value);
}
function remove (list){
	list.removeFirst();
}
function pop (list){
	list.removeFirst();
}

function addVals(){
	return rand.letter();
}
function pushVals(){
	return rand.letter();
}
function remVals(){
	return;
}
function popVals(){
	return;
}

module.exports.add = add;
module.exports.push = push;
module.exports.remove = remove;
module.exports.pop = pop;
module.exports.values = { };
module.exports.values.add = addVals;
module.exports.values.push = pushVals;
module.exports.values.remove = remVals;
module.exports.values.pop = popVals;