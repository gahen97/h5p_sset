// my dog would much rather play fetch by itself... i still live with my mom and i'm 42 :/

var lastOn;

function Activation (node){
	if (!node) return;

	this.node    = node;

	var my = this;
	var e = $(this.node.getElem ());
	e.hover (function(){
		if (lastOn === e) return;
		lastOn = e;

		my.check ();
	}, function (){
		my.left ();
	});

	e.click (function(){
		Buttons.check ();
	})
}

Activation.prototype.left = function(){ };
Activation.prototype.check = function (){
	if (mode.get() !== "searchPath") return;
	if (!this.node.isEnabled()) return;
	if (currentNode === this.node) return;
	if (searchPath.contains (this.node)) return;

	currentNode = this.node;
	searchPath.pushUnique (currentNode);
	currentNode.getElem ().addClass (SEARCH_PATH_CLASS);

	updateActive ();
}

function getOpts(opts){
	if (mode.get () === "addRemove")
		opts.detachable = true;
}

function getActive () {
	var res = searchPath.toArray();
	if (!currentNode) return res;


	function check (c){
		if (c) res.push(c);
	}

	check (currentNode);
	check (currentNode.getDown ());
	check (currentNode.getNext ());

	return res;
}

function updateActive (nodes){
	if (!nodes)
		nodes = getActive ();

	opts = {
		next: CODES.DOM_ACTIVE
	};
	var optsDisabled = {
		next: CODES.DISABLE
	}

	getOpts (opts);

	Nodes.setActive (nodes, opts, optsDisabled);
}
