var ArrayStack = require("./ArrayStack/ArrayStack.js");

const ADD = 'add';
const REM = 'rem';
const SET = 'set';

// some values for adding, removing, setting for use with the getRandOp
const ADD_OP = 1;
const REM_OP = 0;
const SET_OP = 2;

const NUM_OPS = 20;

// random chances of getting each operation ...
const OPS = [
	{
		OP: ADD_OP,
		CHANCE: 50
	},
	{
		OP: REM_OP,
		CHANCE: 40
	},
	{
		OP: SET_OP,
		CHANCE: 10
	}
];


// maximum number of elements that can be in the stack ... makes it easier to work with the HTML
// because of doubling, anything > 8 elements ends up being > 9, which doesn't read well.. so leaving at 8 for now
const MAX_LENGTH = 8;

// letters
const A = 97;
const Z = 122;

// Find a random number between min & max
function randBetween (min, max){
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Get a random value & index for the operation
function getValue (op, stack){
	if (op === ADD_OP){
		return {
			value: String.fromCharCode(randBetween(A, Z)),
			index: randBetween(0, stack.size())
		}
	} else if (op === REM_OP) {
		return {
			index: randBetween(0, stack.size()-1)
		}
	} else {
		return {
			value: String.fromCharCode(randBetween(A, Z)),
			index: randBetween(0, stack.size()-1)
		}
	}
}

// Determine a random operation based on the randomness chart above
function determineRandomOp() {
	var n = randBetween(0, 100);
	for (var i = 0; i < OPS.length; i++){
		if (n <= OPS[i].CHANCE)
			return OPS[i].OP;
		n -= OPS[i].CHANCE;
	}
	return OPS[0].OP;
}

// Determines a random operation to be performed.
// Checks if set is empty and should be added to;
// set is full (based on MAX_LENGTH) and something should be removed;
// or a random number
function getRandOp (stack){
	switch (stack.size()){
		case 0:
			return ADD_OP;
		case MAX_LENGTH:
			return REM_OP;
		default:
			return determineRandomOp();
	}
}

// Determines next operation to perform on the set
function getOperation (stack){
	var l = getRandOp(stack);
	switch(l){
		case REM_OP:
			return REM;
		case ADD_OP:
			return ADD;
		default:
			return SET;
	}
}

// Actually performs the operation, changing the set
function performOperation (op, stack, val){
	switch (op) {
		case ADD:
			stack.add (val.index, val.value);
			break;
		case REM:
			stack.remove (val.index);
			break;
		case SET:
			stack.set (val.index, val.value);
			break;
		default:
			break;
	};
}

// Returns what a user should answer for the operation
function getCorrectAnswer (stack){
	return stack.toString();
}

// Renders the HTML for the given operation
function getPugValues (op, val, ans, i){
	switch (op) {
		case ADD:
			return {op: "add", value: val.value, index: val.index, answer: ans, qNum: i};
		case REM:
			return {op: "remove", index: val.index, answer: ans, qNum: i};
		default:
			return {op: "set", value: val.value, index: val.index, answer: ans, qNum: i};
	}
}


// Main function to actually create the exercise
function StackExercise(f){
	var stack = new ArrayStack();
	var result = "";
	for (var i = 0; i < NUM_OPS; i++){
		var op      = getOperation(stack);
		var val     = getValue (op, stack);

		performOperation (op, stack, val);
		var corrAns = getCorrectAnswer(stack);

		result += f(getPugValues(op, val, corrAns, i));
	}

	return result;
}

module.exports.create = StackExercise;