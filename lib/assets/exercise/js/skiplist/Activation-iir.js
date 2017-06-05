/**
	This handles updating active when the operation is remove.

	For a removal:
		- Does not keep track of search path
		- When moving down:
			- if next element is to be removed, pointer set to next->next
			- then moves down
		- When moving to the side:
			- normal ... but no search path
		- Then, check is normal: check if pointers are correct for the removal

	Should then take over:
		- Activation-ii
			- no search path
			- when an element is active:
				- pointer can be set
				- next, next->next, down would all be active
				- all other nodes disabled
			- if moused over an element to set a pointer, this is ignored for active node
				- should have a boolean. when dragging a node, this is set to true.
				- if true, then active check is ignored.
				- when mouse leaves an element or enters, check if anything is being dragged ...
					if not, this would be set to false.
					can then make the active node.
				   otherwise, ignore it.

		When op.get () === "remove"
*/

const DOWN_ACTIVE_OPTIONS = {
	ptr: false,
	next: CODES.DISABLED,
	detachable: false,
	addClass: "active"
};

Activation.prototype.enabled = function () {
	if (!this.node.isEnabled()) return false;
	if (!canBeActive (this.node)) return false;
	if (isPointering) return false;

	return true;
};

function mouseLeft (){
	if (!pointerDragging)
		isPointering = false;
}

function checkCanDisconnect (node) {
	return (node === currentNode);
};

function getOptions(opts) {
	this.baseFunction (opts);

	if (op.get () === "remove")
		opts.detachable = true;
}

function checkIIR () {
	var e = this.enabled ();

	if (!e) return false;

	// moved over an element without a pointer ...
	// this element should be the current node
	currentNode = this.node;

	// push into the search path ...
	searchPath.pushUnique (currentNode);

	// and update our active nodes
	updateActive ();
};

function getActiveIIR () {
	// active nodes should be current, current's next, current's next's next, and current's down
	var a1 = currentNode;
	var a2 = a1 && a1.getNext ();
	var a3 = a2 && a2.getNext ();
	var a4 = a1 && a1.getDown ();

	return {
		leading: a1,
		next: a2,
		trailing: a3,
		down: a4
	};
};

function updateActiveIIR () {
	var active = getActive ();
	Nodes.setActive (active.leading, LEAD_ACTIVE_OPTIONS.ENABLE,
                                                LEAD_ACTIVE_OPTIONS.DISABLE);

	tryEnable (active.next, NEW_ACTIVE_OPTIONS.ENABLE);
	tryEnable (active.trailing, NXT_ACTIVE_OPTIONS.ENABLE);
	tryEnable (active.down, DOWN_ACTIVE_OPTIONS);

	setCanBeActive ([active.next, active.down]);
};

var canSetActive = null;
function canBeActive (node){
	return !canSetActive || canSetActive.contains (node);
}

function setCanBeActive (nodes){
	nodes = nodes.filter(function(f){ return f !== null; });
	if (nodes.length === 0)
		canSetActive = null;
	else
		canSetActive = new NodesArray (nodes);
}

function tryEnable (n, opts){
	if (n)
		n.enable (opts);
}

function checkIsRemove(){ return op.get() === "remove"; }

function initAnswer(){
	if (answer) answer.init();
}

function init () {
	this.baseFunction (initAnswer);

	isPointering = false;
	canSetActive = null;
	initAnswer();
};

overload ({name: "getOpts"}, checkIsRemove, getOptions);
overload ({name: "left", env: Activation}, checkIsRemove, mouseLeft);
overload ({name: "check", env: Activation}, checkIsRemove, checkIIR);
overload ({name: "getActive"}, checkIsRemove, getActiveIIR);
overload ({name: "updateActive"}, function(n){ return !n && checkIsRemove(); }, updateActiveIIR);

overload ({name: "initSearchPath"}, function(){ return true; }, init);
overload ({name: "restart", env: Buttons}, function(){ return true; }, init);
overload ({name: "reset", env: Buttons}, function(){ return true; }, init);
overload ({name: "next", env: Buttons}, function(){ return true; }, init);

overload ({name: "allowDisconnect"}, function(){ return true; }, checkCanDisconnect);
