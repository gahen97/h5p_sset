var nodeId = 1001;

function Node (elem, data, opts){
	if (!opts.parent) opts.parent = DOM.question();
	if (!elem)
		elem = DOM.newNode (opts.big);

	this.uniqId = nodeId++;
	this.elem = $(elem).appendTo (opts.parent).attr ("id", "Node" + this.uniqId);

	if (opts.position)
		this.setPosition (opts.position);

	var nextPointer = DOM.nextFrom (elem);

	this.nextPtr = new Pointer(nextPointer, opts);

	var s = this;

	this.setData (data);

	if (opts.hasEndpoint !== false)
		this.attachTarget ({centered: (data === true)});

	if (opts.height || opts.height === 0)
		this.setHeight (opts.height);

	this.enabled = true;
	this.down = null;

	this.activate = new Activation (this);
}

Node.prototype.setPosition = function(p){
	this.elem.css (p);
}

Node.prototype.setHeight = function(h){ this.height = h; }
Node.prototype.getHeight = function(){ return this.height; }

Node.prototype.getElem = function(){ return this.elem; }

Node.prototype.getClonedFrom = function(){ return this.clonedFrom; }
Node.prototype.setClonedFrom = function(n){ this.clonedFrom = n; }
Node.prototype.hideData = function(){
	$(DOM.dataFrom (this.elem)).addClass ("hidden");
}

Node.prototype.setData = function(d){
	this.data = d;

	if (d === true)
		this.hideData ();
	else
		 $(DOM.dataFrom (this.elem)).text(d);
}

Node.prototype.isBottom = function(){ return this.getDown() === undefined || this.getDown () === null; }
Node.prototype.getId = function(){ return this.uniqId; }
Node.prototype.getData = function(){ return this.data; }
Node.prototype.getNextPtr = function (){ return this.nextPtr; }
Node.prototype.getTarget = function (){ return this.getElem(); }
Node.prototype.getTarg = function(){ return this.plumb; }
Node.prototype.getNextPointer = function(){ return this.getNextPtr().getElem(); }
Node.prototype.getNextEndpoint = function(){ return this.plumb.getSource(); }
Node.prototype.getDown = function(){ return this.down; }
Node.prototype.getNext = function(){ return this.getNextPtr().getNext (); }
Node.prototype.detachable = function(n){
	this.getNextPtr().setDetachable (n !== false); 
}
Node.prototype.setNext = function(n, opts){
	if (!opts) opts = { };

	this.getNextPtr().setNext (n, opts);

	if (opts && opts.drawConnection)
		this.getNextPtr ().connectTo (n);
}
Node.prototype.setDown = function(n){
	this.down = n;
}
Node.prototype.connectTo = function(n, opts){
	if (!n) return;
	if (!opts) opts = { };

	if (!opts.update)
		opts.update = false;

	this.getNextPtr ().connectTo (n, opts);
}

Node.prototype.attachTarget = function (opts){
	this.plumb = new Plumbify(this, {hasEndpoint: false}).target(opts);
	return this;
}
Node.prototype.attachPlumbs = function (){
	this.getNextPtr ().plumbify ();
	return this;
}

Node.prototype.attach = function (){
	$(this.getElem ()).appendTo (DOM.question ());
	this.attachTarget ();
	this.attachPlumbs ();
}
Node.prototype.applyConnections = function (opts){
	this.connectTo (this.getNext (), opts);
}

Node.prototype.isEnabled = function(){ return this.enabled; }

Node.prototype.hasPointer = function(e){
	e = $(e);

	if (e.is (this.getNextPointer())) return true;
	if (e.is (this.getTarget ())) return true;
	return false;
}
Node.prototype.isTarget = function (targElem){
	return $(this.getElem()).is (targElem);
}

// Toggle enabled/disabled based on n
Node.prototype.setEnabled = function(n, opts){
	if (!opts) opts = { };

	// this is a bit hacky...
	var f = (n === true) ? "removeClass" : "addClass";
	
	if (this.getElem())
		this.getElem()[f]("disabled");
	if (this.getNextPointer())
		this.getNextPointer()[f]("disabled");

	if ((!n || opts.next) && this.getNextPtr ())
		this.getNextPtr ().setEnabled (n, opts);

	if ((!n || opts.ptr) && this.getTarg ())
		this.getTarg ().setTargEnabled (n);

	this.detachable (opts.detachable === true);

	this.enabled = n;
}

// Makes these two simple
Node.prototype.enable = function(o){
	this.setEnabled (true, o);
	return this;
}
Node.prototype.disable = function(o){
	this.setEnabled (false, o);
	return this;
}

Node.prototype.addRemClass = function (className, f){
	// this is, again, very hacky.
	// basically ... since its an object ... we call it with the square brackets.
	$(this.getElem ())[f] (className);
	this.getNextPtr () [f] (className);
	
	return this;
}

// addClass: Add the class to this.getElem (), new pointers
Node.prototype.addClass = function (className){
	return this.addRemClass (className, "addClass");
}

// removeClass: Remove the class from this.getElem(), new pointers
Node.prototype.removeClass = function (className){
	return this.addRemClass (className, "removeClass");
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

	if (this.getTarget())
		this.getTarget ().remove();
}


Node.prototype.toString = function(){
	return this.getData ();
}
