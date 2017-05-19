function Row(elem){
	this.element   = $(elem);
	this.ans       = new Answer(this);
	this.set       = new Set(elem);
	this.isC       = false;
}

Row.prototype.correct = function(){
	return this.isC && this.ans.check (this.getAnswer(), true); // check without doing anything
}

Row.prototype.getAnswer = function (){
	var answer = "";
	Droppers.eachWithin(DOM.rowFrom(this.element), function(elem){
		answer  += elem.val();
	})
	return answer;
}

Row.prototype.setColor = function(c){
	this.isC = c;
}
Row.prototype.check = function(){
	var a = this.getAnswer();
	return this.ans.check (a);
}

Row.prototype.getElem = function(){
	return this.element;
}

Row.prototype.reset = function(){
	var rowIndex = DOM.indexOf (this.element);
	var indices  = DOM.indicesFromIndex (rowIndex);
	var resetRow = DOM.getReset (rowIndex);

	// reset the indices ...
	RowIndices.from(indices).reset ();

	// reset all the children of the row - elements, etc
	var newChildren = resetRow.children().clone();
	this.element.empty().append(newChildren);
	addNewElements (newChildren);

	this.set.reset ();

	return this;
}

Row.prototype.clonePrevious = function(){
	var previousRow = DOM.prevRowFrom (this.element);
	if (!previousRow || previousRow.length === 0) return;

	var previousRowObj = Rows.from(previousRow);
	if (!previousRowObj) return;

	if (previousRowObj.isC)
		previousRowObj.copyTo (this);

	return this;
}

Row.prototype.copyTo = function(r2){
	// if we're going to copy elements, remove all the elements of the row first
	if (r2.correct())
		return;
	r2.reset();

	var r2Elements = DOM.listFrom (r2.getElem()).parent();
	var clones     = this.copyDroppers (r2, r2Elements);
	addNewElements (clones);

	return this;
}

Row.prototype.copyDroppers = function(r2, newParent){
	r2.resize (this.set.getSize());

	var d1 = Droppers.within (this.element);
	var d2 = Droppers.within (r2.getElem());

	var newClones = [ ];

	d1.each (function (dropper){
		var nextDropper = d2.find (function (d){ return d.index() === dropper.index(); });
		var value       = dropper.getConnect();

		if (value && nextDropper){
			var newVal = value.clone().appendTo(newParent);
			nextDropper.connectTo (newVal);
			newClones.push (newVal[0]);
		}
	});

	Droppers.reposition();
	return $(newClones);
}

Row.prototype.updateDroppers = function(n){
	this.set.updateDroppers (n);
}
Row.prototype.resize = function(w){ this.set.resize(w); }