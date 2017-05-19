var Nodes;

var head, tail, cur, newN;
var checkmark;

var save = new Save();

$(function(){
	jsPlumb.ready(function(){
		Nodes = new NodesArray();

		head = new Node($("div.node.head"), "first", false);
		tail = new Node($("div.node.tail"), "last", false);
		cur  = new AutomaticNode($("div.node.cur"), "CUR");
		newN = new AutomaticNode($("div.node.new"), "NEW");

		Nodes.push (head);
		Nodes.push (tail);
		Nodes.push (cur);
		Nodes.push (newN);

		checkmark = new Checkmark(DOM.checkmark ());

		save.update ();

		restart ();

	});
});

function updateMainPointers (){
	Nodes.each (function (el){
		switch (el.getData()){
			case "first": case "HEAD":
				head = el;
				break;
			case "last": case "TAIL":
				tail = el;
				break;
			case "CUR":
				cur = el;
				break;
			case "NEW":
				newN = el;
				break;
			default:
				break;
		}
	});
}

function resize(){
	parent.resizeIframe ();
}
