function Length (f, t, opts) {
	this.from = f;
	this.to   = t;
	this.elem = null;

	if (!f || !t) return;

	this.elem = this.draw (opts.txt);
};

Length.prototype.update = function (txt, nxt) {
	if (nxt)
		this.to = nxt;

	if (!this.elem)
		this.elem = this.draw (txt);

	$(this.elem).text (txt);
}

Length.prototype.draw = function (txt) {
	console.log ("--------------------------------------------");
	console.log ("DRAWING");
	console.log (this);

	var l   = $(DOM.newLength ()).appendTo (DOM.question()).text (txt);
	l.appendTo (DOM.question()).text (txt);

	this.elem = l;
	this.reposition ();

	console.log ("---------------------------------");
	return l;
};

Length.prototype.reposition = function () {
	var pos = this.calcPos (this.elem);
	$(this.elem).css({top: pos.y, left: pos.x});
}

Length.prototype.calcPos = function (ele) {
	var mid = this.mid (this.from, this.to);

	return {
		x: mid.x - ele.width (),
		y: mid.y - ele.height ()/2
	};
};

Length.prototype.mid = function(n1, n2) {
	// we want the right corner of the left node & the left corner of the right node.
	// then calculate midpoint between those two ....
	var p1 = n1.getPosition();
	var p2 = n2.getPosition();

	// make p1 the left node, p2 right node
	if (p1.left > p2.left) {
		// we want these swapped ....
		var t = n1;
		n1    = n2;
		n2    = t;

		var t2 = p1;
		p1     = p2;
		p2     = t2;
	}

	// and find their positions, calculate midpoint ...

	return {
		x: p1.left + 40,
		y: midpoint (p1.top, p2.top)
	};
}
