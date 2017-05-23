function ElementArray(elements, objClass){
	this.elements    = [ ];
	this.ObjType     = objClass;

	this.init (elements);
}

ElementArray.prototype.init = function(elems){
	var eleArr = this;

	$(elems).each(function(i, e){
		// only initialize it if its not already the same class
		if (!(eleArr.isClass(e)))
			e = new eleArr.ObjType(e);

		eleArr.push (e);
	})
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
	return (res === true) ? r : res;
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
ElementArray.prototype.push = function(newElem){
	this.elements.push (newElem);
}
ElementArray.prototype.pushUnique = function (newElem){
	if (this.contains (newElem)) return;
	this.push (newElem);
}
ElementArray.prototype.each = function(f){
	$(this.elements).each(function(index, item){
		return f(item);
	});
}
ElementArray.prototype.eachWithin = function(r, f){
	this.within(r).each(function(elem){
		f(elem);
	});
}
ElementArray.prototype.get = function(i){
	return this.elements[i];
}

ElementArray.prototype.remove = function(data){
	for (var i in this.elements){
		if (this.elements[i] === data){
			this.elements.splice(i, 1);
			return true;
		}
	}
	return false;
}

// Do a deep removal of everything inside the array
ElementArray.prototype.removeAll = function (f){
	this.each (function (ele){
		if (!f || f(ele))
			ele.remove ();
	})
	this.cleanup();
}

// add new elements to the array & initialize them
ElementArray.prototype.add = function(elems){
	this.init (elems);
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

// convert to array
ElementArray.prototype.toArray = function(){
	var n = [ ];
	this.each (function (el){
		n.push (el);
	});
	
	return n;
}

// convert to dictionary ... calls function on each element
ElementArray.prototype.toDict = function (keyFunc, valFunc){
	var dict = { };
	this.each (function (n){
		dict[keyFunc(n)] = valFunc(n);
	});
	return dict;
}
