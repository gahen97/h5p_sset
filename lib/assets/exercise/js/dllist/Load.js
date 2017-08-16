var questionIndex;

function getOpString (op, val){
	switch (op){
		case 'ADD':
			return 'add(' + val.i + ", " + val.x + ");"
		case 'REM':
			return 'rem(' + val.i + ');';
		default:
			return '?!?!?!?!?';
	}
}

function getIndex(val){ return val && val.i; }

function load (){
	$.get("/dllist/exercise", function(resp){
		resp = JSON.parse(resp);

		var answer = resp.answer;
		var op     = resp.type;
		var val    = resp.value;
		var opStr  = getOpString (op, val);

		questionIndex = getIndex(val);

		$(DOM.getOper()).text(opStr);
		Answer.setCorrect (answer);

		if (val.x)
			Nodes.add (val.x);
		else
			updateNewNode (val.i);

		curNode = dummyNode;
		save.update ();

		update ();
		resize ();
	})
}

function restart (){
	$.get("/dllist/reset", load);
}
