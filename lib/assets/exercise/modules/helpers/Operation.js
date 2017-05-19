var defaults = { };

function Operation (args){
	this.chance = args.chance;
	this.name   = args.name;
	this.f      = args.run;
	this.ans    = args.getAnswer;
	this.par    = args.params;
}

Operation.prototype.getChance = function(){ return this.chance; }
Operation.prototype.getName   = function(){ return this.name; }
Operation.prototype.run       = function(){
	this.f.apply(this, arguments);
}
Operation.prototype.getAnswer = function(){
	var a = this.ans || defaults.getAnswer;
	if (!a) return "'tis an error, joe";

	return a.apply(this, arguments);
}
Operation.prototype.getParams = function(){
	return this.par.apply(this, arguments);
}

module.exports.Operation = Operation;
module.exports.defaults  = defaults;