const SPACE_CHAR = ' ';

function ArrayStack (){
	this.len = 1;
	this.arr = [ ]; // javascript!
}

ArrayStack.prototype.add = function (index, element){
	this.arr.splice(index, 0, element);
	if (this.arr.length > this.len)
		this.len *= 2;
}

ArrayStack.prototype.remove = function(index){
	this.arr.splice(index, 1);
	if (this.arr.length * 3 <= this.len)
		this.len = this.len / 2;
}

ArrayStack.prototype.set = function(index, el){
	this.arr[index] = el;
}

ArrayStack.prototype.size = function(){ return this.arr.length; }

ArrayStack.prototype.toString = function(){
	if (this.arr.length === 0) return " ";
	return this.arr.join("") + SPACE_CHAR.repeat(this.len - this.arr.length);
}

module.exports = ArrayStack;
