var hat = require('hat');

// note: lower case ... should be optional
const A_ASCII = 97;
const Z_ASCII = 122;

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

// i love ooks
function ook (){
	return hat();
}

module.exports.between = randBetween;
module.exports.boolean = randBool;
module.exports.letter  = randLetter;
module.exports.index   = randIndex;
module.exports.element = randElement;
module.exports.ook     = ook;
