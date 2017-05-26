searchPath = new NodesArray ();
mode = new Mode(modes);

$(function (){
	DOM.checkBtn ().hide ();

	check = new Checkmark ();
	jsPlumb.ready (function(){
		load (function(){
			answer = new Answer ();
		});
	})
});

function setOperText (txt){
	DOM.getOper ().text (txt);
}

function setSearchingFor (d){
	DOM.getOper ().text ("find(" + d + ")");
}

function resize(){
	parent.resizeIframe ();
}
