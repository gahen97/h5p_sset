function DropArray (elements){
	if (!elements) elements = DOM.droppers();
	else elements=[]

	this.add (elements);
}

DropArray.prototype = new ElementArray([], Dropper)
DropArray.prototype.reposition = function(){
	this.each (function(drop){
		var c = drop.getConnect();
		if (c)
			DOM.pushOnTop(c, drop.getElem());
	});
}