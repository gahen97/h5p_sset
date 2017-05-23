var NEXT_ID = 0;
function Pointer (element, hasPlumb){
	var pointer = DOM.pointerFrom (element);
	pointer.attr("id", "pointer" + NEXT_ID++);

	this.elem = pointer;
	if (hasPlumb)
		this.plumb = new Plumbify (this, "source");

	this.next = null;

	// stores prev for use with enable/disable. its a singly linked list based on a doubly linked one. sue me.
	this.prev = null;
}

Pointer.prototype.getElem = function(){ return this.elem; }
Pointer.prototype.getPlumb = function(){ return this.plumb; }
Pointer.prototype.getSrc = function(){ return this.plumb.getSource(); }
Pointer.prototype.getEndpoint = function(){ return this.plumb.endpoint; }
Pointer.prototype.getPrev = function(){ return this.prev; }
Pointer.prototype.getNext = function(){ return this.next; }
Pointer.prototype.isDragging = function(){ return this.plumb.isDragging(); }
Pointer.prototype.setDragging = function(d) { this.plumb.setDragging (d); }
Pointer.prototype.isAuto = function(){ return !this.getEndpoint().isEnabled(); }
Pointer.prototype.setNext = function(n){
	var newNext = findNodeFromTarg (n);
	this.next = newNext;

	// set the previous node
	if (newNext){
		// only if not HEAD/TAIL ...
		var myNode = findNodeFromPointer (this);
		if (myNode.isPlaceholder()) return;

		newNext.setPrev (myNode);
	}else{
		var m = this.getNext();
		if (m) m.setPrev (null);
	}
}

Pointer.prototype.plumbify = function(){
	if (this.plumb) this.plumb.remove();

	this.plumb = new Plumbify(this, "source");
}

Pointer.prototype.reposition = function(){ this.plumb.reposition(); }
Pointer.prototype.detach = function (){
	this.plumb.detach ();
}

Pointer.prototype.connectNext = function(node){
	this.next = node;
}

Pointer.prototype.setPrev = function(n){
	if (!n) this.prev = null;
	else this.prev = findNodeFromTarg (n);
}

Pointer.prototype.setEnabled = function (n){
	this.plumb.setEnabled (n);
}

Pointer.prototype.setAuto = function(){
	this.getEndpoint().setEnabled (false);
}
Pointer.prototype.setActive = function(){
	this.getEndpoint().setEnabled (true);
}

Pointer.prototype.disconnect = function(){
	this.connectNext (null);
	this.plumb.disconnect ();
}
Pointer.prototype.connectTo = function(n, notSticky){
	var a = (notSticky === true) ? true : !this.isAuto ();

	if (n){
		var t = n.getTarget ();
		var f = n.isEnabled ();

		n.enable();

		this.connectNext (n);
		this.plumb.connectTo (n.getTargEndpoint(), a);

		n.setEnabled (f);
	}


}

Pointer.prototype.remove = function (){
	if (this.plumb) this.plumb.remove ();
}

function findNodeFromPointer (t){
	if (t === null) return null;
	else{
		return Nodes.find (function (el){
			return (el.getPtr() === t);
		})
	}
}
function findNodeFromTarg (n){
	if (n === null) return null;
	else if (!DOM.contains(n)) return n;
	else{
		n = $(n);
		return Nodes.find (function (el){
			if (!el.getTarg()) return false;
			return n.is(el.getTarg())
		});
	}
}
