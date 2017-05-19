var Nodes;

var currentNode;

var searchPath = new NodesArray ();
var sentinel;

var check;

var answer;

var build;

$(function (){
	check = new Checkmark ();
	jsPlumb.ready (function(){
		load (function(){
			answer = new Answer ();
		});
	})
});

function setSearchingFor (d){
	DOM.getOper ().text ("find(" + d + ")");
}

function resize(){
	parent.resizeIframe ();
}
