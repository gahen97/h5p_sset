// Everybody's going to the party. Have a real good time.
// Dancing in the desert. Blowing up the sunshine.
// EVERYBODY'S GOING TO THE PARTY HAVE A REAL GOOD TIME
// DANCING IN THE DESERT BLOWING UP THE SUNSHINE

function Activation (node){
	if (!node) return false;

	this.n = node;
	this.ele = $(node.getElem());

	this.addConnections();
}

Activation.prototype.addConnections = function(){
	if (!this.ele || this.ele.length === 0) return;
	var me = this;

	this.ele.mouseenter(function(){
		me.mousedOver();
	})
}

Activation.prototype.mousedOver = function(){
	if (!this.n) return;
	if (!this.n.isEnabled()) return;
	if (!canBeCurrent (this.n)) return;

	// this is, like, a waffle
	if (this.n.getIndex() === questionIndex && !newNode)
		newNode = this.n;

	setActiveNode (this.n);
	update ();
}

function canBeCurrent (node){
	return true;
}
function setActiveNode (n){
	if (!canBeCurrent (n)) return;
	curNode = n;
}

function getReachableFrom (nodes){
	var res = [ ];
	for (var i in nodes){
		var c = nodes[i];
		var p = c && c.getPrev ();
		var n = c && c.getNext ();

		if (c && res.indexOf(c) === -1) res.push(c);
		if (p && res.indexOf(p) === -1) res.push(p);
		if (n && res.indexOf(n) === -1) res.push(n);
	}

	return res;
}

function update (){
	var active = [dummyNode, curNode, newNode];
	var all    = getReachableFrom ([curNode]);
	all.push (dummyNode);
	all.push (newNode);

	Nodes.setActive (all);
}
