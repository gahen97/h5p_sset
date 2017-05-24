var Nodes;

var currentNode;

var searchPath = new NodesArray ();
var sentinel;

var check;

var answer;

var build;

var mode = new Mode(["searchPath"]);

$(function (){
	check = new Checkmark ();
	jsPlumb.ready (function(){
		load (function(){
			answer = new Answer ();
		});
	})

	if (Buttons.setup)
		Buttons.setup ();
});

function setSearchingFor (d){
	DOM.getOper ().text ("find(" + d + ")");
}

function resize(){
	parent.resizeIframe ();
}
