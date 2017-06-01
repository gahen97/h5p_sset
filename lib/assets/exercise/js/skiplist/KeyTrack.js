$(function(){
	var body = $("body");
	body.keydown (function (evt) {
		var keyCode = evt.which;
		switch (keyCode) {
			case 68: case 39: // D, right arrow
				evt.preventDefault ();
				return fireKey (currentNode && currentNode.getNext ());
			case 83: case 40: // S, down arrow
				evt.preventDefault ();
				return fireKey (currentNode && currentNode.getDown ());
			case 82: // R key ... reset
				return Buttons.reset ();
			case 13: // enter key
				return Buttons.check ();
			default:
				return null;
		}
	});
});

function fireKey (nextNode) {
	if (!currentNode){
		var sentinel = build.towers.get(0).getTopNode ();
		sentinel.fire ();
	}

	if (!nextNode) return;
	nextNode.fire ();
}
