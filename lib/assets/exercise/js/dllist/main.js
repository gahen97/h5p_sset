var Nodes;

var checkmark;

var save = new Save();

var curNode, newNode, dummyNode;

$(function(){
	jsPlumb.ready(function(){
		Nodes = new NodesArray();

		dummyNode = new Node(undefined, "", {big: false, isDummy: true});
		Nodes.push (dummyNode);
		
		checkmark = new Checkmark(DOM.checkmark ());

		save.update ();

		restart ();
	});
});

function updateNewNode (index) {
	if (!index) return;

	Nodes.each(function(el){
		if (el.getIndex() === index){
			newNode = el;
			return false;
		}
	});
}

function updateMainPointers (){
	Nodes.each (function (el){
		// this is really weird. switch on an object
		switch (el.getClonedFrom ()){
			case dummyNode:
				dummyNode = el;
				break;
			case newNode:
				newNode = el;
				break;
		}
	});
}

function resize(){
	parent.resizeIframe ();
}
