var hat = require('hat');

// note: lower case ... should be optional
const A_ASCII = 97;
const Z_ASCII = 122;

const MAX_ATTEMPTS = 10;

// Find a random number between min & max
function randBetween (min, max){
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

function randBool () {
	return Math.random () <= 0.5;
}

function randLetter (){
	return String.fromCharCode (randBetween (A_ASCII, Z_ASCII));
}

function randIndex (list){
	return randBetween(0, list.length - 1);
}

function randElement (list){
	return list[randIndex (list)];
}

// This one makes an array containing numElems elements between minN and maxN
// where any given element only appears once.
function pickUniqueNumber (f, t, arr, maxAttempts){
	var numAttempts = 0;
	while (numAttempts < maxAttempts){
		var n = randBetween (f, t);
		if (arr.indexOf (n) === -1)
			return n;
		numAttempts ++;
	}
}

function uniqArray (minN, maxN, numElems, opts){
	var maxAttempts = opts.maxAttempts || MAX_ATTEMPTS;

	// there's a few ways to do this. either:
	//   1) lots of preprocessing: make an array from minN to maxN, choose numElems elements.
	//        bad if there's a lot of numbers, ex. 1 to 100,000 ...
	//   2) pick a new number each time, if it's in the array, retry
	//        bad if there's a lot of elements in relation to the possible numbers,
        //        ex. 100 elements 1 from 100 will give a lot of retrying near the end
	//   3) a mix of both?
        //   4) if the number of elements can be UP TO n, but not exactly n, can take n numbers
        //        from the set and remove duplicates. could be a lot of removals.
	//   5) again, if numbers can be UP TO N, then can set a limit on number of retries;
	//        if it goes over this limit, skip the number
        //   5) math

	// for the sake of my sanity, i'm just going to go with #2
	var arr = [ ];
	for(var i = 0; i < numElems; i++){
		var n = pickUniqueNumber (minN, maxN, arr, maxAttempts);
		if (n) arr.push (n);
	}

	return arr;
}

// i love ooks
function ook (){
	return hat();
}

module.exports.between   = randBetween;
module.exports.boolean   = randBool;
module.exports.letter    = randLetter;
module.exports.index     = randIndex;
module.exports.element   = randElement;
module.exports.uniqArray = uniqArray; 
module.exports.ook       = ook;
