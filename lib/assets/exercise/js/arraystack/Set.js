const START_LEN = 7;
const ELEM_LEN  = ELEMENT_LEN; // from the other program. gah.

function Set(row){
	this.row  = row;
	this.reset ();
}

Set.prototype.getLen = function(){ return DOM.droppersFrom(this.row).length; }
Set.prototype.getSize = function(){ return parseInt(this.elem.css("width")); }

Set.prototype.reset = function(){
	this.elem = $(DOM.listFrom (this.row));

	Resizable (this.elem);
}

Set.prototype.addDropper = function (index){
	var newLi = DOM.makeListItem();
	var newDr = DOM.makeDropperElement();
	newDr.data("index", index);

	newLi.append(newDr).appendTo(this.elem);

	return newDr;
}

Set.prototype.addDroppers = function(numDroppers){
	var droppers = [ ];
	for (var i = this.getLen(); i < numDroppers; i++){
		var n = this.addDropper (i);
		droppers.push (n[0]);
	}

	return droppers;
}

Set.prototype.removeDroppers = function(numDroppers){
	var droppers    = Droppers.within (this.row).findAll (function (d){ return d.index() >= numDroppers });
	droppers.removeAll ();

	return droppers;
}

Set.prototype.updateDroppers = function (num){
	num = Math.ceil(num);

	var droppers = [ ];
	if (this.getLen() > num)
		droppers = this.removeDroppers (num);
	else
		droppers = this.addDroppers (num);

	addNewElements (droppers);
}

Set.prototype.resize = function (newWidth){
	this.elem.css("width", newWidth);

	this.updateDroppers ((newWidth / ELEMENT_LEN) - 1);
	Resizable.updateIndices (this.elem);
}