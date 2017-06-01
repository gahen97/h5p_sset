function getOpType (op){
	switch (op){
		case 'ADD': return 'add';
		case 'REM': return "remove";
		case 'PUSH': return "push";
		case 'POP': return "pop";
		default: return "";
	}
}

function getValStr (val){
	if (!val)
		return "()"
	else
		return "('" + val + "')"
}
function getOpString (op, val){
	var opType = getOpType (op);
	var value  = getValStr (val);

	return opType + value;
}

function load (){
	$.get("/sllist/exercise", function(resp){
		resp = JSON.parse(resp);
		var answer = resp.answer;
		var op     = resp.type;
		var val    = resp.value;
		var opStr  = getOpString (op, val);

		$(DOM.getOper()).text(opStr);
		Answer.setCorrect (answer);

		if (val)
			Nodes.add (val);
		else
			newN.disconnect(null);

		cur.disconnect ();
		save.update ();
		resize ();

		jsPlumb.repaintEverything ();
	})
}

function restart (){
	$.get("/sllist/reset", load);
}
