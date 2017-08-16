// I'm on the road to become the greatest trainer, and I won't quit until I'm number one
// (gotta be number one. number one, number one)
function Rows (r) {
	var arr = r;
	arr.__proto__ = Rows.prototype;
	return arr;
}

Rows.prototype = new Array;

// Check if a row can be removed
Rows.prototype.canCleanRow = function(r){
	if (!this[r]) return false;
	for (var i = 0; i < this[r].length; i++) {
		if (this[r][i] !== false)
			return false;
	}

	return true;
}

// Clean empty rows ...
Rows.prototype.clean = function (){
	var i = this.length - 1;
	var n = i;
	while (i > 0) {
		if (!this.canCleanRow (i))
			break;

		i--;
	}

	var x = this.splice (i+1, n-i);
};

// index of ...
Rows.prototype.indexOf = function (el) {
	return this[0].indexOf(el);
};

// find closest element ...
Rows.prototype.findClosest = function(d){
	var c = 0;
	var e = null;
	var row = this[0];

	while (c < row.length) {
		if (row[c] > d)
			break;
		c ++;
		e = row[c];
	}

	return {
		index: c,
		elem: e
	}
}

// splice helper
Rows.prototype.addElement = function (height, index, numRemovals, element) {
	// create empty rows, if needed
	var size = this[0].length;
	for (var i = this.length; i < height; i++)
		this.push (Array(size).fill(false));

	// add the element in
	for (var i = 0; i < this.length; i++){
		this[i].splice (index, numRemovals, element);
		element = ((i+1) < height);
	}

};

Rows.prototype.removeElement = function (index) {
	if (index === -1) return;
	for (var i = 0; i < this.length; i++)
		this[i].splice (index, 1);
};

// remove element, but maintain sorted order
Rows.prototype.remove = function (element){
	var index = this[0].indexOf (element);
	this.removeElement(index);
};

// remove index
Rows.prototype.removeIndex = function (index) {
	this.removeElement (index);
}

// add element, maintaining sorted order
Rows.prototype.add = function (element, height, index){
	var index = this.findClosest (element, index).index;
	this.addElement (height + 1, index, 0, element);
};

// Set element at a given index to a given value
Rows.prototype.set = function (index, value) {
	if (index >= this[0].length) return;
	this[0][index] = value;
};

