var NEXT_ID = 0;
function Pointer (pointer, opts){
	pointer.attr("id", "pointer" + NEXT_ID++);

	this.elem = pointer;
	if (opts.hasEndpoint !== false)
		this.plumb = new Plumbify (this, opts, true);

	this.next = null;
}

Pointer.prototype.getElem = function(){ return this.elem; }
Pointer.prototype.getPlumb = function(){ return this.plumb; }
Pointer.prototype.getSrc = function(){ return this.plumb && this.plumb.getSource(); }
Pointer.prototype.getEndpoint = function(){ return this.plumb && this.plumb.endpoint; }
Pointer.prototype.getPrev = function(){ return this.prev; }
Pointer.prototype.getNext = function(){ return this.next; }
Pointer.prototype.isDragging = function(){ return this.plumb.isDragging(); }
Pointer.prototype.setDragging = function(d) { this.plumb.setDragging (d); }
Pointer.prototype.isEnabled = function(){ return this.getEndpoint ().isEnabled (); }
Pointer.prototype.showEnabled = function(){ this.plumb.showEnabled (true); }
Pointer.prototype.showDisabled = function(){  this.plumb.showEnabled (false); }
Pointer.prototype.setNext = function(n, u){
	this.next = n;
}
Pointer.prototype.setDetachable = function (b){
	this.getPlumb ().setDetach (b);
}


Pointer.prototype.distance = function(d){
	this.getPlumb().setLabel(d);
}

Pointer.prototype.plumbify = function(){
	if (this.plumb) this.plumb.remove();

	this.plumb = new Plumbify(this, {hasEndpoint: true});
}

Pointer.prototype.repaint = function () {
	this.getPlumb().repaint ();
}
Pointer.prototype.reposition = function(){ this.plumb.reposition(); }
Pointer.prototype.detach = function (){
	this.plumb.detach ();
}

Pointer.prototype.setEnabled = function(n){
	this.getPlumb ().setEnabled (n);
}

Pointer.prototype.disconnect = function(){
	this.connectNext (null);
	this.plumb.disconnect ();
}
Pointer.prototype.connectTo = function(n, opts){
	this.setNext (n, opts);
	this.plumb.connectTo (n.getTarget(), opts);
}

Pointer.prototype.remove = function (){
	if (this.plumb) this.plumb.remove ();
}

Pointer.prototype.addClass = function (cls){
	this.getPlumb().addClass (cls);
}
Pointer.prototype.removeClass = function (cls){
	this.getPlumb().removeClass (cls);
}
