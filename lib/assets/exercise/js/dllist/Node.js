var nodeId = 1001;

function Node (elem, data, opts){
	var s = this;

	if (!opts.parent) opts.parent = DOM.question();
	if (!elem)
		elem = DOM.newNode (opts);

	if (opts.text)
		this.txt = opts.text;

	this.uniqId = nodeId++;
	this.elem = $(elem).appendTo (opts.parent).attr ("id", "Node" + this.uniqId);

	if (opts.hasPointers !== false) {
		var prevPointer = DOM.prevFrom (elem);
		var nextPointer = DOM.nextFrom (elem);

		this.nextPtr = new Pointer(nextPointer, opts, "next");
		this.prevPtr = new Pointer(prevPointer, opts, "prev");

		this.nextPtr.nextChanged = function(n, u){ s.nextChanged (n, u); }
		this.prevPtr.nextChanged = function(n, u){ s.prevChanged (n, u); }
	}

	this.isDummy = opts.isDummy;
	if (this.isDummy){
		this.txt = "◘";
 	}

	if (opts.hasEndpoint !== false)
		this.attachTarget ();

	this.setData (data);

	this.enabled = true;

	if (opts.activates !== false)
		this.activator = new Activation (this);

	if (opts.index !== false)
		this.indexCon  = new Index (this, opts);
}

Node.prototype = new Element(null);

Node.prototype.getClonedFrom = function(){ return this.clonedFrom; }
Node.prototype.setClonedFrom = function(n){ this.clonedFrom = n; }
Node.prototype.setData = function(d){
	this.data = d;

	if (this.txt) d = this.txt;
	DOM.dataFrom (this.elem).text(d);
}

Node.prototype.getId = function(){ return this.uniqId; }
Node.prototype.getData = function(){ return this.data; }
Node.prototype.getIndex = function(){ return this.indexCon.getIndex(); }
Node.prototype.setIndex = function(n){ this.indexCon.setIndex(n); }
Node.prototype.getNextPtr = function (){ return this.nextPtr; }
Node.prototype.getPrevPtr = function (){ return this.prevPtr; }
Node.prototype.getTarget = function (){ return this.plumb; }
Node.prototype.getNextPointer = function(){ return this.getNextPtr().getElem(); }
Node.prototype.getPrevPointer = function(){ return this.getPrevPtr().getElem(); }
Node.prototype.getNextEndpoint = function(){ return this.getNextPtr().getEndpoint(); }
Node.prototype.getPrevEndpoint = function(){ return this.getPrevPtr().getEndpoint(); }
Node.prototype.getPrev = function(){ return this.getPrevPtr().getNext (); }
Node.prototype.getNext = function(){ return this.getNextPtr().getNext (); }
Node.prototype.setPrev = function(n, opts){
	this.getPrevPtr().setNext (n, opts);

	if (opts && opts.drawConnection)
		this.getPrevPtr ().connectTo (n);
}
Node.prototype.setNext = function(n, opts){
	this.getNextPtr().setNext (n, opts);

	if (opts && opts.drawConnection)
		this.getNextPtr ().connectTo (n);
}
Node.prototype.connectNext = function(n){
	if (!n) return;
	this.getNextPtr ().connectTo (n, {update: false});
}
Node.prototype.connectPrev = function(n){
	if (!n) return;
	this.getPrevPtr ().connectTo (n, {update: false});
}

Node.prototype.nextChanged = function(n, u){ 
	if (u && u.update === false) return;
	update();
	this.indexCon.onNextChanged(n);
}
Node.prototype.prevChanged = function(n, u){
	if (u && u.update === false) return;
	update();
	this.indexCon.onPrevChanged(n); 
}

Node.prototype.attachTarget = function (){
	this.plumb = new Plumbify(this, {hasEndpoint: false}).draggable().target(); 
}
Node.prototype.attachPlumbs = function (){
	this.getNextPtr ().plumbify ();
	this.getPrevPtr ().plumbify ();
}
Node.prototype.attach = function (){
	$(this.getElem ()).appendTo (DOM.question ());
	this.attachTarget ();
	this.attachPlumbs ();
}
Node.prototype.applyConnections = function (){
	this.connectNext (this.getNext ());
	this.connectPrev (this.getPrev ());
}

Node.prototype.isEnabled = function(){ return this.enabled; }

Node.prototype.findPointerFrom = function(e){
	e = $(e);

	if (e.is (this.getNextPointer())) return this.getNextPtr();
	if (e.is (this.getPrevPointer())) return this.getPrevPtr();

	return null;
}
Node.prototype.isTarget = function (targElem){
	return $(this.getElem()).is (targElem);
}

// Toggle enabled/disabled based on n
Node.prototype.setEnabled = function(n){
	var next = this.getNextEndpoint();
	var prev = this.getPrevEndpoint();
	var targ = this.getTarget();

	if (!next || !prev || !targ) return;
	next.setEnabled (n);
	prev.setEnabled (n); 
	targ.setTargEnabled (n);

	// this is a bit hacky...
	var f = (n === true) ? "removeClass" : "addClass";

	next[f]("disabled");
	prev[f]("disabled");
	this.getElem()[f]("disabled");

	// record it for later
	this.getNextPtr ().setEnabled (n);
	this.getPrevPtr ().setEnabled (n);

	this.enabled = n;
}

// Makes these two simple
Node.prototype.enable = function(){
	this.setEnabled (true);
}
Node.prototype.disable = function(){
	this.setEnabled (false);
}


Node.prototype.clone = function (){
	var myElem = $(this.getElem());
	var clone = new Node (myElem.clone(), this.getData (), {
		parent: DOM.clone (),
		hasEndpoint: false,
		index: this.getIndex(),
		isDummy: this.isDummy
	});

	clone.setClonedFrom (this);

	return clone;
}

Node.prototype.remove = function (){
	this.getNextPtr ().remove ();
	this.getPrevPtr ().remove ();

	if (this.getTarget())
		this.getTarget ().remove();
}


Node.prototype.toString = function(){
	return this.getData ();
}
