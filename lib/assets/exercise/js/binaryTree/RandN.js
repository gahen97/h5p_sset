function RandN (mn, mx, opts) {
	if (!opts) opts = { };
	if (!opts.excluding) opts.excluding = { };

	this.minNum = mn;
	this.maxNum = mx;

	this.possibilities = [ ];
	for (var i = mn; i <= mx; i++){
		this.possibilities.push (i);
	}
};

RandN.prototype.next = function () {
	var i = rand.index (this.possibilities);
	var res = this.possibilities[i];

	this.remove (i);
	return res;
}

RandN.prototype.exclude = function (n) {
	if (typeof (n) === "object"){
		var r = this;
		each (n, function(o){ r.exclude (o); });
	} else{
		var index = this.possibilities.indexOf (n);
		if (index !== -1)
			this.remove (index);
	}

	return this;
}

RandN.prototype.remove = function(i){ this.possibilities.splice (i, 1); }
