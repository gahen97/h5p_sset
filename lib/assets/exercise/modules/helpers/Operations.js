var rand = require("./random.js");

function Operations(ops, count){
	this.operations = ops;
	this.count      = count;
}

Operations.prototype.getNext = function(){
	var num = rand.between (0, this.count);
	for (var i = 0; i < this.operations.length; i++){
		var op = this.operations[i];
		if (num < op.getChance())
			return op;
		num -= op.getChance();
	}
	return this.operations[this.operations.length - 1];
}

module.exports.operations = Operations;