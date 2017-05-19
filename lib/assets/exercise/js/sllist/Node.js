var nodeCtr = 0;

function Node(e, data, isListNode, bigger, hp){
	this.uniId = nodeCtr;

	if (!e) e = makeNewNode(bigger);
	e = $(e);

	e.appendTo($("div#question"))
	e.attr("id", "Node" + nodeCtr++);

	this.node = e;
	this.isListNode = isListNode !== false;

	if (isListNode !== false) {
		if (hp !== false){
			this.targ = new Plumbify (this, "target", false);
			this.targ.target().draggable();
		}

		// Allow the node to be activated & deactivated
		this.a = new Activation(this);
	}

	this.ptr = new Pointer(this.node, hp !== false);

	this.setData (data);
	this.setClonedFrom (null);

	this.position = null;

	return this;
}

Node.prototype.getId = function(){ return this.uniId; }
Node.prototype.getData = function(){ return this.data; }
Node.prototype.getPtr = function(){ return this.ptr; }
Node.prototype.getElem = function(){ return this.node; }
Node.prototype.getSrc = function(){ return this.ptr.getSrc(); }
Node.prototype.getSrcEndpoint = function(){ return this.ptr.getEndpoint(); }
Node.prototype.getTargEndpoint = function(){ return this.getTarg(); }
Node.prototype.getTarget = function(){ return this.targ; }
Node.prototype.getTarg = function(){ return this.targ && this.targ.getSource(); }
Node.prototype.getNext = function(){ return this.ptr && this.ptr.getNext(); }
Node.prototype.getPrev = function(){ return this.ptr && this.ptr.getPrev(); }
Node.prototype.getClonedFrom = function(){ return this.clonedFrom; }
Node.prototype.isPlaceholder = function(){ return !this.isListNode; }
Node.prototype.isEnabled = function(){ return !this.node.hasClass ("disabled"); }
Node.prototype.isDragging = function(){ return this.ptr.isDragging(); }
Node.prototype.getPosition = function(){ return this.position; } // for detach & attach
Node.prototype.setAuto = function(f){ this.auto = f; }

// Position Node in same place as another, mainly for reattaching
Node.prototype.reposition = function(n){
	DOM.moveTo (this.getElem(), n.getPosition());
}


// Detach a node from the DOM, but save it for later
Node.prototype.detach = function(){
	this.position = DOM.positionOf (this.getElem());
	$(this.getElem()).detach();
}

Node.prototype.attach = function(p){
	this.node.appendTo (p);

	this.ptr.plumbify();
	if (!this.isPlaceholder())
		this.targ = new Plumbify(this, "target", false).draggable().target();

	if (this.auto)
		this.ptr.setAuto();
	else
		this.ptr.setActive ();

	return this;
}

Node.prototype.applyConnections = function(){
	if (this.getNext())
		this.ptr.connectTo (this.getNext(), true)
}

// Has reference if:
//   - Pointed at by head
//   - Pointed at by tail
//   - Pointed at by current node
Node.prototype.hasDefReference = function(){
	if (head.getNext() === this) return true;
	if (tail.getNext() === this) return true;
	if (cur.getNext() === this) return true;
	if (newN.getNext() === this) return true;
	return false;
}

Node.prototype.setClonedFrom = function(n){ this.clonedFrom = n; }
Node.prototype.setDragging = function(z){ this.ptr.setDragging (z); }
Node.prototype.setData = function(value){
	if (!value) value = "";
	this.data = value;

	// update the DOM element
	var data = DOM.dataFrom (this.node);
	if (!data || data.length === 0) return;

	$(data).text(value);
}

Node.prototype.setNext = function(el){
	this.ptr.setNext (el);
	if (this.isPlaceholder()) updateActive();
}
Node.prototype.setPrev = function(el){
	this.ptr.setPrev (el);
}

Node.prototype.disconnect = function(){
	this.ptr.disconnect ();
	this.setNext (null);
}

// Connect without any DOM manipulation ... for cloning
Node.prototype.connectNextCloning = function(n){
	this.ptr.connectNext (n);
}
Node.prototype.connectTo = function (n, forced){
	if (!n) return;
	if (n.isPlaceholder()) return;
	if (!forced && newN.getNext() === n && !n.getPrev() && !n.getNext()) return;

	this.ptr.connectTo (n, false);
	this.ptr.connectNext (n);

	if (this.isPlaceholder()) updateActive();
}

Node.prototype.setEnabled = function (n){
	var srcEndpoint = this.getSrcEndpoint();
	var targ = this.getTarget();

	if (!srcEndpoint || !targ) return;
	srcEndpoint.setEnabled (n);
	targ.setTargEnabled (n);

	// hacks
	var f = (n === true) ? "removeClass" : "addClass";
	srcEndpoint[f] ("disabled");
	this.node[f] ("disabled");

	this.getPtr ().setEnabled (n);
}

Node.prototype.disable = function(forced){
	// check if the node can be disabled
	// can't if:
	//    1) Node is a placeholder => HEAD, TAIL, CUR
    //    2) Node can be reached at any time => is head, is tail, isCurrentNode, or isCurrentNode's next
    //    3) node is the current node and has not been connected to the grid yet
    //    4) node is currently being dragged (would represent setting this.next, which would NOT involve making any changes)
    if (this.isPlaceholder()) return;
    if (this.hasDefReference()) return;
    if (currentNode === this && !this.getPrev() && !this.getNext()) return;
    if (this.isDragging ()) return;

    // past all that, it can be disabled, so go do that
    this.setEnabled (false);
}

Node.prototype.enable = function(){
    this.setEnabled (true);
}

Node.prototype.remove = function (){
	if (this.ptr) this.ptr.remove();
	if (this.targ) this.targ.remove();

	$(this.getElem()).remove();
}


// Clone the Node into a new Node
Node.prototype.clone = function (){
	var myElem = $(this.getElem());
	var clone = new Node (myElem.clone(), this.getData (), this.isListNode, false, false);

	if (this.ptr.isAuto())
		clone.setAuto (true);

	clone.setClonedFrom (this);

	return clone;
}

// make a new node
function makeNewNode (isBig){
	var n = DOM.newNode(isBig);
	n.appendTo (DOM.question());
	return n;
}
