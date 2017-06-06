/*
	Provides helper functions for Arrays.
*/

function BaseArray (elements) {
	if (!elements) elements = [ ];
	this.elements = elements;
}

/* ----------- CODES ------------------ */
const CODE_ASC = "ASCENDING";
const CODE_DSC = "DESCENDING";

/* ----------- STATIC FUNCTIONS -------------- */

// Concat two Arrays together into a new one
BaseArray.concat = function (arr, arr2){
	arr = toArray (arr);
	arr2 = toArray (arr2);

	var n = newArray (this);

	n.append (arr);
	n.append (arr2);
	
	return n;
}

// Comparator Functions
function ascending (a, b){ return a - b; }
function descending (a, b){ return b - a; }

BaseArray.comparators = { };
BaseArray.comparators [CODE_ASC] = ascending;
BaseArray.comparators [CODE_DSC] = descending;


/* ----------- BASIC FUNCTIONS --------------- */

// size of the array
BaseArray.prototype.size = function(){ return this.elements.length; }

// index of element
BaseArray.prototype.indexOf = function(el){
	return this.elements.indexOf (el);
}

// contains
BaseArray.prototype.contains = function(el){
	return this.indexOf(el) != -1;
}

// Basic set operation
BaseArray.prototype.set = function(i, x){
	this.elements[i] = x;
	return x;
}

// Basic get operation
BaseArray.prototype.get = function(i){
	return this.elements[i];
}

// Get the last element from the array
BaseArray.prototype.last = function (){
	return this.get (this.size() - 1);
}

/* ----------- ADD ELEMENTS --------------- */

// Push a new element into the array
BaseArray.prototype.push = function(newElem, index){
	if (!index && index !== 0) index = this.size();
	this.elements.splice (index, 0, newElem);

	return newElem;
}

// Push a new element into the array only if the element isn't already in the array
BaseArray.prototype.pushUnique = function (newElem){
	if (this.contains (newElem)) return;
	this.push (newElem);
}

// Push each element from an array into this array
BaseArray.prototype.pushAll = function (arr) {
	var t   = this;	
	    arr = toArray (arr);

	arr.each (function (n){ t.push (n); });
	return this;
}

/* ------------------ SORT ------------------------ */
BaseArray.prototype.sort = function (comparator) {
	if (typeof (comparator) !== "function")
		comparator = BaseArray.comparators [comparator];
	if (!comparator) return false;

	this.elements.sort (comparator);
	return this;
}

/* ----------- SHARED MANIPULATORS --------------- */

// Append an Array to this Array
BaseArray.prototype.append = function (arr){
	arr = toArray (arr);

	var els = this;
	arr.each (function (el){
		els.push (el);
	});

	// cascading
	return this;
}

// Create a new Array from the shared elements between this and another array
BaseArray.prototype.merge = function (arr){
	var results = newArray (this);
	    arr     = toArray (arr);

	this.each (function (el){
		if (arr.contains (el))
			results.push (el);
	});
	return results;
}

// Get all elements that are not within another array
BaseArray.prototype.not = function (arr) {
	// convert to a BaseArray, if not already
	arr = toArray (arr);

	// check every element and store in results array
	var results = newArray (this);
	this.each (function (element) {
		if (!arr.contains (element))
			results.push (element);
	});

	return results;
};

/* ----------- RANDOMIZATION --------------- */

// Get a random element from the array
BaseArray.prototype.random = function(){
	var elements = this.elements;
  	return elements[Math.floor((Math.random()*elements.length))];
}

/* ----------- EACH --------------- */

// Run function f on each element in the array
BaseArray.prototype.each = function(f){
	$(this.elements).each(function(index, item){
		return f(item, index);
	});
}

// given some function, go through every element
// and push results into an array
BaseArray.prototype.eachToArray = function(f){
	var results = [ ];
	this.each (function (el){
		results.push (f (el));
	});
	return results;
}

/* ----------- FIND --------------- */

// Find first occurence where a given function returns true
BaseArray.prototype.find = function(f){
	if (typeof (f) !== "function")
		f = function(){ return f; }

	var r, res;
	this.each (function (elem, index){
		res = f (elem, index);
		if (res || res === 0) {
			r = elem;
			return false;
		}
	});

	// if there was a special result - not just true - return that
	// otherwise, return the item
	return (res === true) ? r : res;
}

// Find every occurence where a given function is true
BaseArray.prototype.findAll = function(f){
	var results = [ ];
	this.each (function (elem){
		if (f (elem))
			results.push (elem);
	})
	return newArray(this).append (results);
}

// Find closest element matching a given function.
// Should take two arguments, element and index, and return a number.
// The number will be used to match closest element. Negative values will be dropped.
// Returns {elem: CLOSEST_ELEMENT, index: INDEX_OF_CLOSEST_ELEMENT}
BaseArray.prototype.closest = function (f) {
	var previous, result, index;
	this.each (function (elem, i) {
		var newR = f (elem, i);
		if ((!previous || newR < previous) && newR >= 0) {
			result   = elem;
			previous = newR;
			index    = i;
		}
	});
	if (!result) result = previous;

	return {elem: result, index: index}
}

/* ----------- REMOVALS --------------- */

// Remove an element, given the element
BaseArray.prototype.remove = function (data){
	var index = this.elements.indexOf (data);
	if (index === -1)
		return null;

	return this.removeByIndex (index);
}

// Perform a shallow removal of an element, by index
BaseArray.prototype.removeByIndex = function (index){
	var x = this.get (index);
	if (!x) return;

	this.elements.splice (index, 1);

	return x;
}

// Shallow removal of all elements matching some function (function returns true)
BaseArray.prototype.removeAll = function (f) {
	// gets messy if done at the same time as looping through,
	// so store removed elements for later
	var removed = [ ];
	var my      = this;

	this.each (function (element, index){
		if (!f || f (element))
			removed.push (my.remove (element));
	});

	return toArray (removed);
}

/* ----------- EQUALITY --------------- */

// Check if two arrays are equal
BaseArray.prototype.equals = function (elements){
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

/* ----------- COPY --------------- */
// Copy the array
BaseArray.prototype.copy = function () {
	var clone = newArray (this);
	this.each (function (element){
		clone.push (element);
	});
	return clone;
}

/* ----------- CONVERSIONS --------------- */

// convert to array
BaseArray.prototype.toArray = function(){
	return this.eachToArray (function (el){ return el; });
}

// convert to dictionary ... calls function on each element
BaseArray.prototype.toDict = function (keyFunc, valFunc){
	var dict = { };
	this.each (function (n, i){
		dict[keyFunc(n, i)] = valFunc(n, i);
	});
	return dict;
}

// Convert the array to a string
BaseArray.prototype.toString = function (){
	var s = "";
	this.each (function (n){
		s += n;
	});
	return s;
}


/* ----------- GLOBAL HELPER FUNCTIONS --------------- */
// Helper functions that are called by the BaseFunctions class
function newArray (){
	return new BaseArray ();
}
function toArray (elements){
	if (isArray (elements))
		return elements;
	return new BaseArray (elements);
}
function isArray (e){ return e instanceof BaseArray; }
