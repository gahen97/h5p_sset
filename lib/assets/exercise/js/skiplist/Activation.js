function Activation (node){
	this.node    = node;

	var my = this;
	$(this.node.getElem ()).mouseover (function(){
		my.check ();
	})
	$(this.node.getElem ()).click (function(){
		Buttons.check ();
	})
}

Activation.prototype.getActive = function(){
}

Activation.prototype.check = function (){
	if (!this.node.isEnabled()) return;
	if (currentNode === this.node) return;
	if (searchPath.contains (this.node)) return;

	currentNode = this.node;
	searchPath.pushUnique (currentNode);
	currentNode.getElem ().addClass ("searchPath");

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

function updateActive (){
	Nodes.setActive (getActive ());
}