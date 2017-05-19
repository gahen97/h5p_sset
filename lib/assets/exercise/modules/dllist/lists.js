function Lists(){
	this.lists = { };
}

Lists.prototype.get = function(ook){
	if (this.lists[ook]) return this.lists[ook];
	
	if (!ook) ook = rand.ook();

	var list = [ ];
	this.lists[ook] = list;

	return list;
}

Lists.prototype.set = function(ook, list){
	this.lists[ook] = list;
}

Lists.prototype.reset = function(ook){
	this.lists[ook] = null;
}

module.exports = Lists;
