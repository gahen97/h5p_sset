function Activation (node){
	if (!node) return;

	this.node    = node;

	var my = this;
	$(this.node.getElem ()).mouseover (function(){
		my.check ();
	})
	$(this.node.getElem ()).click (function(){
		Buttons.check ();
	})
}

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

	if (mode.get () === "addRemove")
		opts.detachable = true;

	Nodes.setActive (nodes, opts, optsDisabled);
}
