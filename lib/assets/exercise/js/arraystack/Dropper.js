function Dropper (e){
	this.elem = $(e);
	this.drop = new Droppable (e);
}

Dropper.prototype.connectTo = function(d){
	this.elem.data("connected", d);

	checkIncorrect (this.elem);
}
Dropper.prototype.getConnect = function(){
	return this.elem.data("connected");
}
Dropper.prototype.removeConnect = function(){
	this.connectTo(null);
}

Dropper.prototype.val = function(){
	var elem = this.getConnect();
	if (elem) return elem.text();
	else return " ";
}
Dropper.prototype.index = function() {
	return this.elem.data("index");
}

Dropper.prototype.getElem = function(){
	return this.elem;
}

Dropper.prototype.remove = function (){
	// if there's anything connected to the dropper, remove it ...
	var c = this.getConnect();
	if (c)
		c.remove();

	// remove the dropper itself (with the li tag)
	this.elem.parent().remove();
}