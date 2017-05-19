function Element (e){
	this.elem  = $(e);
	this.clone = this.checkIfClone();

	var containment;
	if (this.clone)
		containment = this.elem.parent();
	
	Draggable (e, this.clone, containment);
}

Element.prototype.val = function(){
	var elem = this.getConnect();
	if (elem) return elem.val();
}

Element.prototype.getElem = function(){
	return this.elem;
}

Element.prototype.isClone = function(){
	return this.clone;
}

// ignoring the isClone data attribute, manually checks if this should be a clone ...
// should be a clone if parented with the list.
Element.prototype.checkIfClone = function(){
	var me = this.elem;
	var td = $(me).parent();

	var li = DOM.listFrom (td);
	if (li && li.length != 0)
		return true;

	return false;
}