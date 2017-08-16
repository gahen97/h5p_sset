
const HELPERS = './helpers'
const MODS  = './dllist'

var Operations = require(HELPERS+'/Operations.js').operations;
var operation  = require(HELPERS+'/Operation.js');
var Operation  = operation.Operation;

var rand       = require(HELPERS+'/random.js');

var ops        = require(MODS+'/ops.js');
var Lists      = require(MODS+'/lists.js');
var lists      = new Lists();

function getAnsDef(stack){
	// compute the reverse of the answer ...
	// this is better than string.reverse() in case of any two-letter choices
	var b = "";
	for (var i = stack.length - 1; i >= 0; i--)
		b += stack[i];

	return {
		forwards: stack.join(""),
		backwards: b
	}
}

var addOperation = new Operation({
	chance: 65,
	name: "ADD",
	run: ops.add,
	params: ops.values.add
})
var remOperation = new Operation({
	chance: 35,
	name: "REM",
	run: ops.rem,
	params: ops.values.rem
})

var standardOperations = new Operations([addOperation, remOperation], 100);
var emptyOperations    = new Operations([addOperation], 5);

function determineOperation (list){
	if (list.length === 0) return emptyOperations.getNext();
	else return standardOperations.getNext();
}

function performOperation(list, operation){
	var value = operation.getParams(list);
	operation.run (list, value);
	return value;
}

function getAnswer(list, operation){
	return operation.getAnswer(list);
}

function parseExercise (list, operation, value){
	var answer = getAnswer(list, operation);
	var opType = operation.name;

	return JSON.stringify({
		answer: answer,
		value:  value,
		type:   opType
	});
}

function run(render, ook){
	operation.defaults.getAnswer = getAnsDef;
	if (!ook) ook = rand.ook();

	list = lists.get(ook);

	var o = determineOperation (list);
	var value = performOperation (list, o);

	lists.set (ook, list);

	var res = {
		exercise: parseExercise(list, o, value),
		ook:    ook
	};

	return res;
}

function reset(ook){
	lists.reset (ook);
}

module.exports.create = run;
module.exports.reset  = reset;
