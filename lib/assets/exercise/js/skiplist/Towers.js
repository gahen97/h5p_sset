/*
	Towers.

	I'd just like to announce my eternal love for Lua here. Lua is love. Lua is life. All power to the Luas.
*/
function Towers (t){
	if (!t) t = [ ];
	this.elements = t;
}

Towers.prototype = new ElementArray([], Tower);

// If tower at position i exists, return it;
// If not, create a new tower with given data at position i
Towers.prototype.get = function (i, data){
	var t = ElementArray.prototype.get.call(this, i);
	if (t) return t;

	return this.set (i, new Tower(data));
}

// find index to add a tower to maintain sorted order
Towers.prototype.closest = function(data){
	var closest, index;
	this.each (function (el, i){
		if (el.getData() <= data){
			closest = el;
			index   = i;
		}
	});

	if (closest.getData() === data) return false;
	return index;
}

// add a new tower with data
Towers.prototype.add = function (index, data){
	return this.push (new Tower(data), index);
}
