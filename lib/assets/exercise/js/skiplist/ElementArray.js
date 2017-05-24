function ElementArray(elements, objClass){
	this.elements    = [ ];
	this.ObjType     = objClass;

	this.init (elements);
}

ElementArray.prototype.init = function(elems){
	var eleArr = this;

	$(elems).each(function(i, e){
		// only initialize it if its not already the same class
		console.log (e);
		if (!(eleArr.isClass(e)))
			e = new eleArr.ObjType(e);

		eleArr.push (e);
	})
}

ElementArray.prototype.size = function(){ return this.elements.length; }

ElementArray.prototype.random = function(){
	var elements = this.elements;
  	return elements[Math.floor((Math.random()*elements.length))];
}

ElementArray.prototype.from = function (e){
	var elems = $(this.elements);
	var result = null;

	elems.each(function(i, r){
		var elem = r.getElem();
		if (elem.is(e)){
		  result = r;
		  return false;
		}
	});

	return result;
}

ElementArray.prototype.isClass = function(ele){
	if (!this.ObjType) return true;
	return ele instanceof this.ObjType;
}

// Find first occurence where a given function returns true
ElementArray.prototype.find = function(f){
	var r, res;
	this.each (function (elem){
		res = f (elem);
		if (res) {
			r = elem;
			return false;
		}
	});

	// if there was a special result - not just true - return that
	// otherwise, return the item
	return (res === true) ? r : res;;
}

// Find every occurence where a given function is true
ElementArray.prototype.findAll = function(f){
	var results = [ ];
	this.each (function (elem){
		if (f (elem))
			results.push (elem);
	})
	return new ElementArray(results, this.ObjType);
}

// Find element with data closest to given value
ElementArray.prototype.findClosest = function (d){
	var previous, result, index;
	this.each(function(elem, i){
		if (elem.getData () > d){
			result = previous;
			return false;
		}
		
		previous = elem;
		index    = i;
	});
	
	if (!result) result = previous;
	return {
		elem: result,
		index: index
	};
}

// contains
ElementArray.prototype.contains = function(el){
	return this.elements.indexOf(el) != -1;
}

// Returns a new ElementArray of all objects within 
ElementArray.prototype.within = function (parent){
	return this.findAll(function(ele){ return DOM.within(parent, ele.getElem()); });
}

ElementArray.prototype.pushFromDOM = function(e){
	var newObj = new this.ObjType (e);
	this.elements.push (newObj);

	// normally pushing doesn't return. but in this case, it should
	return newObj;
}
ElementArray.prototype.push = function(newElem, index){
	if (!index && index !== 0) index = this.size();
	this.elements.splice (index, 0, newElem);

	return newElem;
}

ElementArray.prototype.pushUnique = function (newElem){
	if (this.contains (newElem)) return;
	this.push (newElem);
}

// add new elements to the array & initialize them
ElementArray.prototype.add = function(elems){
	this.init (elems);
}

ElementArray.prototype.remove = function(data){
	for (var i in this.elements){
		if (this.elements[i] === data){
			this.rem (i);
			return true;
		}
	}
	return false;
}

ElementArray.prototype.rem = function (index){
	var x = this.get (index);
	if (!x) return;

	this.elements.splice (index, 1);
	x.remove ();
}

// Do a deep removal of everything inside the array
ElementArray.prototype.removeAll = function (f){
	this.each (function (ele){
		if (!f || f(ele))
			ele.remove ();
	})
	this.cleanup();
}

// Append an ElementArray to this ElementArray
ElementArray.prototype.append = function (arr){
	arr = toElementArray (arr);

	var els = this;
	arr.each (function (el){
		els.push (el);
	});

	// cascading
	return this;
}

// Concat two ElementArrays together into a new one
ElementArray.prototype.concat = function (arr, arr2){
	arr = toElementArray (arr);
	arr2 = toElementArray (arr2);

	var n = new ElementArray ();

	n.append (arr);
	n.append (arr2);
	
	return n;
}

// this is a bad name, but it's bacon.
// Take the similar elements between this against some other array
ElementArray.prototype.baconify = function (arr){
	var results = new ElementArray ();
	this.each (function (el){
		if (arr.contains (el))
			results.push (el);
	});
	return results;
}

// Run function f on each element in the array
ElementArray.prototype.each = function(f){
	$(this.elements).each(function(index, item){
		return f(item, index);
	});
}

ElementArray.prototype.eachWithin = function(r, f){
	this.within(r).each(function(elem){
		f(elem);
	});
}

ElementArray.prototype.set = function(i, x){
	this.elements[i] = x;
	return x;
}

ElementArray.prototype.get = function(i){
	return this.elements[i];
}

ElementArray.prototype.last = function (){
	return this.get (this.size() - 1);
}


// Check if two arrays are equal
ElementArray.prototype.equals = function (elements){
	res = true;
	
	if (this.size() !== elements.size()) return false;
	this.each (function (n, index){
		if (elements.get (index) != n){
			res = false;
			return false;
		}
	});
	return res;
}
// Clone the array into a new array
ElementArray.prototype.clone = function(){
	var clone = new ElementArray ([], this.ObjType);
	this.each (function (n){
		clone.push (n.clone());
	});

	return clone;
}

// remove anything in the array that doesn't exist within the DOM anymore
ElementArray.prototype.cleanup = function (){
	var array = this;
	array.each (function (elemObj){
		var elem = elemObj.getElem();
		if (!(DOM.contains(elem))){
			array.remove (elemObj);
		}
	});
}

// given some function, go through every element
// and push results into an array
ElementArray.prototype.eachToArray = function(f){
	var results = [ ];
	this.each (function (el){
		results.push (f (el));
	});
	return results;
}

// convert to array
ElementArray.prototype.toArray = function(){
	return this.eachToArray (function (el){ return el; });
}

// convert to dictionary ... calls function on each element
ElementArray.prototype.toDict = function (keyFunc, valFunc){
	var dict = { };
	this.each (function (n, i){
		dict[keyFunc(n, i)] = valFunc(n, i);
	});
	return dict;
}


ElementArray.prototype.toString = function (){
	var s = "";
	this.each (function (n){
		s += n;
	});
	return s;
}


function isElementArray (r){ return r instanceof ElementArray; }
function toElementArray (r){
	if (isElementArray (r)) return r;
	else return new ElementArray (r);
}
