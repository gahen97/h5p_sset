
const HELPERS = './helpers'
const SLMODS  = './sllist'

var Operations = require(HELPERS+'/Operations.js').operations;
var operation  = require(HELPERS+'/Operation.js');
var Operation  = operation.Operation;

var rand       = require(HELPERS+'/random.js');

var ops        = require(SLMODS+'/ops.js');
var Lists      = require(SLMODS+'/lists.js');
var lists      = new Lists();

function getAnswerDefault(stack){ return stack.toArray().join(""); }

var addOperation = new Operation({
	chance: 35,
	name: "ADD",
	run: ops.add,
	params: ops.values.add
})
var pushOperation = new Operation({
	chance: 35,
	name: "PUSH",
	run: ops.push,
	params: ops.values.push
})
var remOperation = new Operation({
	chance: 15,
	name: "REM",
	run: ops.remove,
	params: ops.values.remove
})
var popOperation = new Operation({
	chance: 15,
	name: "POP",
	run: ops.pop,
	params: ops.values.pop
})

var standardOperations = new Operations([addOperation, pushOperation, remOperation, popOperation], 100);
var emptyOperations    = new Operations([addOperation, pushOperation], 50);

function determineOperation (list){
	if (list.isEmpty()) return emptyOperations.getNext();
	else return standardOperations.getNext();
}

function performOperation(list, operation){
	var value = operation.getParams();
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
	operation.defaults.getAnswer = getAnswerDefault;
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
