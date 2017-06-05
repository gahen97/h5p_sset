// my dog would much rather play fetch by itself... i still live with my mom and i'm 42 :/

var lastOn;

const DEF_OPTS = {
	ENABLED: {
		next: CODES.DOM_ACTIVE
	},
	DISABLED: {
		next: CODES.DISABLE
	}
}

function Activation (node){
	if (!node) return;

	this.node    = node;

	var my = this;
	var e = $(this.node.getElem ());
	e.hover (function(){
		if (!active) return;
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

Activation.prototype.canCheck = function (){
	if (mode.get() !== "searchPath") return false;
	if (!this.node.isEnabled()) return false;
	if (currentNode === this.node) return false;
	if (searchPath.contains (this.node)) return false;
	return true;
}

Activation.prototype.check = function (){
	if (!this.canCheck())
		return false;

	currentNode = this.node;
	searchPath.pushUnique (currentNode);
	currentNode.addClass (SEARCH_PATH_CLASS);

	updateActive ();
}

function getOpts(opts){
	if (mode.get () === "addRemove")
		opts.detachable = true;
}

function getActive (opts) {
	var res;

	if (opts && opts.includeSearchPath === false)
		res = [ ];
	else
		res = searchPath.toArray();

	if (!currentNode) return res;


	function check (c){
		if (c) res.push(c);
	}

	check (currentNode);
	check (currentNode.getDown ());
	check (currentNode.getNext ());

	return res;
}

function updateActive (nodes, opts){
	if (!opts) opts={};

	if (!nodes)
		nodes = getActive (opts);

	if (!opts.enabled)
		opts.enabled  = DEF_OPTS.ENABLED;

	if (!opts.disabled)
		opts.disabled = DEF_OPTS.DISABLED;

	getOpts (opts);

	Nodes.setActive (nodes, opts.enabled, opts.disabled);
}
