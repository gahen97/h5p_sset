var rand = require("./helpers/random.js");

function cook(t){
	return t + "-ook";
}

function send(res, name, val){
	res.cookie(name, val);
}

function reset(res, name){
	var newVal = rand.ook();
	send(res, name, newVal);
}

module.exports.getName = cook;
module.exports.reset   = reset;
module.exports.send    = send;