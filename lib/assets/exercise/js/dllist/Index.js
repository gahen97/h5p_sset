/*
	NOTE: Its very possible to break the indices.
	However, because this should only happen when there's already an error in your graph,
		I'll say this is more by design than actual error.
*/
function Index (node, opts){
	if (!node) return false;

	this.mainNode = node;
	this.elem     = DOM.indexFrom (node.getElem ());
	this.index    = undefined

	if (opts.isDummy){
		opts.index = -1;
		this.text  = "dummy";
	}

	this.setIndex (opts.index);
}

Index.prototype.getIndex = function(){ return this.index; }

Index.prototype.setIndex = function(n){
	if (n === undefined) return;
	if (this.index === n) return;
	
	var t = this.text ? this.text : n;
	$(this.elem).text (t);

	this.index = n;
}

Index.prototype.onPrevChanged = function (p){
	if (!p) return;
	this.updateIndices (p.getIndex() + 1);	
}

Index.prototype.onNextChanged = function (p){
	if (!p) return;
	this.updateIndices (this.getIndex ())
}

Index.prototype.updateIndices = function (index){
	if (index === undefined || isNaN(index)) return; // only update if actual number

	var nodes = [dummyNode];
	var curNode = this.mainNode;

	// if this is the dummy node, we want to check everything else to make sure it fits
	// so we have to make sure this isn't the dummy node.
	if (curNode === dummyNode){
		// and skip ahead if it is
		curNode = curNode.getNext ();
		index = 0; // first element after dummy is always 0.
	} else if (!Nodes.isInList (curNode))
		return false;

	while (curNode && nodes.indexOf(curNode) === -1){
		//if (curNode.isDummy) break;

		nodes.push (curNode);
		curNode.setIndex (index ++);
		curNode = curNode.getNext();
	}
}
