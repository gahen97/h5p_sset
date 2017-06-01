var previousNode;

function okToCheckIIIA () {
	if (!this.base.apply (this, arguments)) return false;
	if (this.node === leadingNode) return false;
	if (this.node === newNode) return false;
	if (this.node === trailingNode) return false;
	return true;
}

function disableNodes () {
	try {
		new NodesArray(leadingNode).removeClass ("searchPath").removeClass ("new").removeClass ("active");
		new NodesArray(newNode).removeClass ("searchPath").removeClass ("new").removeClass ("active");
		new NodesArray(trailingNode).removeClass ("searchPath").removeClass ("new").removeClass ("active");
	} catch (err) {
		// if it errors, well, it's not as good as some people say it is
	};

	leadingNode = newNode = trailingNode = null;
}

function checkBetween (newIndex, index, length) {
	if (newIndex === index) return false;
	if (newIndex > index && length===0) return true;
	return (newIndex > index && newIndex <= index+length);
}

function checkIIIA() {
	if (!this.canCheck()) return false;
	disableNodes ();

	this.base.call(this);

	// if moved down, update the pointers for the row above ....
	if (previousNode && currentNode === previousNode.getDown ())
		build.updateRowIndices (previousNode.getHeight());

	previousNode = currentNode;

	currentNode.removeClass ("searchPath");

	// when this is moused over ... if the next index is hidden ... show it
	var myNode = this.node;

	var index  = myNode && myNode.index();
	var length = myNode.getLength();
	if (!index && index !== 0) return;

	var newTower = answer.getTower ();	
	var newIndex = answer.getIndex ();
	var between  = checkBetween(newIndex, index, length);
	if (between) {
		var node = newTower.get(myNode.getHeight());
		if (node) {
			leadingNode  = myNode;
			newNode      = node;
			trailingNode = myNode.getNext ();

			newNode.show().removeClass ("disabled");

			updateActive ();
		}
	};
};

function checkTrailingOk () {
	if (!trailingNode) return false;
	if (!leadingNode && !newNode) return false;
	
	if (leadingNode && leadingNode.getNext() === trailingNode) return true;
	if (newNode && newNode.getNext() === trailingNode) return true;

	return false;
};

// everybody's going to the party have a real good time.
// dancing in the desert blowing up the sunshine
function updateActiveIIIA (nodes) {
	if (nodes || !leadingNode){
		return this.base.call(this, nodes, {includeSearchPath: false});
	}

	if (!checkTrailingOk ())
		trailingNode = null;

	var leading = new NodesArray(leadingNode);
	var newb    = new NodesArray(newNode);
	var trail   = new NodesArray(trailingNode);
	var cur     = new NodesArray(currentNode && currentNode.getDown());

	// show them ...
	Nodes.setActive (trail, NXT_ACTIVE_OPTIONS.ENABLE, 
                                     NXT_ACTIVE_OPTIONS.DISABLE);
	newb.setActive (newb, NEW_ACTIVE_OPTIONS.ENABLE,
                                                  NEW_ACTIVE_OPTIONS.DISABLE);
	leading.setActive (leading, LEAD_ACTIVE_OPTIONS.ENABLE,
                                                LEAD_ACTIVE_OPTIONS.DISABLE);
	cur.setActive (cur, DEF_OPTS.ENABLED, DEF_OPTS.DISABLED);
};


// I'm getting to the point where a fox may as well go arf
overload({name: "canCheck", env: Activation}, isAO, okToCheckIIIA);
overload({name: "check", env: Activation}, isAO, checkIIIA);
overload({name: "updateActive"}, isAO, updateActiveIIIA);
