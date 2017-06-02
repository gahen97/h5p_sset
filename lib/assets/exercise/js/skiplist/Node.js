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

	opts.target = (data === true);
	this.nextPtr = new Pointer(nextPointer, opts);

	var s = this;

	this.setData (data);

	if (opts.hasEndpoint !== false)
		this.attachTarget ({centered: (data === true)});

	if (opts.height || opts.height === 0)
		this.setHeight (opts.height);

	this.enabled = !opts.disabled;
	this.down = null;

	this.activate = new Activation (this);

	if (opts.edge)
		this.edge = new Edge(this);

	if (opts.disabled)
		this.disable (opts.disableOpts);
}

Node.prototype.repaint = function(){
	this.getNextPtr().repaint ();
}

Node.prototype.setPosition = function(p){
	this.elem.css (p);
}
Node.prototype.getPosition = function(){ return DOM.positionOf (this.elem); }

Node.prototype.size = function () {
	var e = $(this.getElem ());
	return {
		width: parseInt(e.width ()),
		height: parseInt(e.height ())
	};
}

Node.prototype.index = function () {
	return build.indexOf (this);
};

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

Node.prototype.fire = function () {
	if (!this.activate) return;
	this.activate.check ();
}

Node.prototype.isEnabled = function(){ return this.enabled; }
Node.prototype.isNextEnabled = function(){ return this.getNextPtr().isEnabled(); }

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

// These are some helper functions used below. Ugly if defined within the function ....
// The options that can be used, kind of.
const NXT_OPTS_FUNCTIONS = {
	[CODES.DISABLE] : function (np) { np.setEnabled (false); },
	[CODES.ENABLE]:   function (np) { np.setEnabled (true); },
	[CODES.DOM_ACTIVE]: function (np) { np.showEnabled (); },
	[CODES.DOM_INACTIVE]: function (np) { np.showDisabled (); },
	def: function (np, n){
		if (!n) return;
		return np.setEnabled (n);
	}
}

const TARG_OPTS_FUNCTIONS = {
	[CODES.DISABLE]: function (t) { t.setTargEnabled (false); },
	[CODES.ENABLE]:  function (t) { t.setTargEnabled (true); },
	def:           function (t, n) { t.setTargEnabled (n); }
}

Node.prototype.setEnabled = function(n, opts){
	if (!opts) opts = { };

	// this is a bit hacky...
	var f = (n === true) ? "removeClass" : "addClass";
	
	var myElem = $(this.getElem ());
	var myNPtr  = $(this.getNextPointer ());
	runFunction (myElem, myElem, f, "disabled");
	runFunction (myNPtr, myNPtr, f, "disabled");

	var np = this.getNextPtr ();
	if (np)
		runCases (opts.next, NXT_OPTS_FUNCTIONS, undefined, np, n);

	var targ = this.getTarg ();
	if (targ)
		runCases (opts.ptr, TARG_OPTS_FUNCTIONS, undefined, targ, n);

	if (opts.addClass)
		this.addClass (opts.addClass);
	if (opts.removeClass)
		this.removeClass (opts.removeClass);

	this.detachable (opts.detachable === true || opts.detachable === CODES.ENABLE);

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
	$(this.getElem ())[f] (className);
	this.getNextPtr () [f] (className);

	return this;
}

// addClass: Add the class to this.getElem (), new pointers
Node.prototype.addClass = function (className){
	this.getNextPtr ().addClass (className);
	return this.addRemClass (className, "addClass");
}

// removeClass: Remove the class from this.getElem(), new pointers
Node.prototype.removeClass = function (className){
	this.getNextPtr ().removeClass (className);
	return this.addRemClass (className, "removeClass");
}

// hasClass: Run the jQuery hasClass operation on our element ...
Node.prototype.hasClass = function(c){
	return $(this.getElem ()).hasClass (c);
}

// Show / Hide the node
Node.prototype.show = function(){ return this.removeClass ("hidden"); }
Node.prototype.hide = function(){ return this.addClass ("hidden"); }
Node.prototype.hidden = function(){ return this.hasClass ("hidden"); }

// Clone the node, including pointers, etc.
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
