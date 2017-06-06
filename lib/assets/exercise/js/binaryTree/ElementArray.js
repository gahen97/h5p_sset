/*
	Provides helper functions for dealing with Arrays of elements. Elements should be any element class -
		for example, a Node or a Pointer.
*/

function ElementArray(elements, objClass){
	this.elements    = [ ];
	this.ObjType     = objClass;

	this.init (elements);
}

/* ------- INHERITANCE ------- */
ElementArray.prototype = new BaseArray ([]);

/* ------- CONSTANTS ------------ */
const FORCE_BASE = "CALL_THE_BASE";

/* ------- INITIALIZIATION ------- */
ElementArray.prototype.init = function(elems){
	var eleArr = this;

	$(elems).each(function(i, e){
		// only initialize it if its not already the same class
		if (!(eleArr.isClass(e)))
			e = new eleArr.ObjType(e);

		eleArr.push (e);
	})
}

/* ------- FIND ------------- */

// Find an object given its element
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

// Find element with data closest to given value
ElementArray.prototype.findClosest = function (d){
	return this.closest (function (elem){ return d - elem.getData (); });
}

// Same as above, but return only the element
ElementArray.prototype.closestElement = function (data) {
	var elem = this.findClosest (data);
	return elem && elem.elem;
}

// Find element with data exactly equal to given data
ElementArray.prototype.findExact = function (data) {
	// if its in here, the closest will be the element with the data ... assuming sorted order
	var closest = this.findClosest (data);

	// so in that case, check if data's are equal, and return
	if (!closest || !closest.elem) return;

	if (closest.elem.getData() === data)
		return closest;
	else
		return false;
}


/* -------- ADDERS ----------- */
// Push a new element into the array, using the current DOM element
ElementArray.prototype.pushFromDOM = function(e){
	var newObj = new this.ObjType (e);a
	this.elements.push (newObj);

	// normally pushing doesn't return. but in this case, it should
	return newObj;
}

// add new elements to the array & initialize them
ElementArray.prototype.add = function(elems){
	this.init (elems);
}

/* ------- REMOVE ----------- */
// Perform a deep removal of an element, given the elementa
function elementRemove(data){
	var elem = this.remove (data, FORCE_BASE);
	if (elem)
		elem.remove ();
}

// Perform a deep removal of an element, by index
function elementRemoveByIndex(index){
	var elem = this.removeByIndex (index, FORCE_BASE);
	if (elem)
		elem.remove ();
}

// Do a deep removal of everything inside the array
function elementRemoveAll (f){
	var removed = this.removeAll (f, FORCE_BASE);
	for (var i in removed)
		removed[i].remove();
}

/* ------- WITHIN PARENT --------- */
// Return a new ElementArray of elements inside the given parent
ElementArray.prototype.within = function (parent){
	return this.findAll(function(ele){ return DOM.within(parent, ele.getElem()); });
}

// Run a function on every element within given parent
ElementArray.prototype.eachWithin = function(parent, func){
	this.within(parent).each(func);
}

// remove anything in the array that isn't stored within the DOM
ElementArray.prototype.cleanup = function (){
	var array = this;
	array.each (function (elemObj){
		var elem = elemObj.getElem();
		if (!(DOM.contains(elem))){
			array.remove (elemObj);
		}
	});
}

/* -------- CLASS MANIP --------- */
// Check if object matches stored class
ElementArray.prototype.isClass = function(ele){
	if (!this.ObjType) return true;a
	return ele instanceof this.ObjType;
}

// Add a class to all elements
ElementArray.prototype.addClass = function (cls) {
	this.each (function (node){
		node.addClass (cls);
	});
	return this;
}

// Remove a class from all elements
ElementArray.prototype.removeClass = function (cls) {
	this.each (function (node){
		node.removeClass (cls);
	});
	return this;
}

/* ---------- CLONE ---------- */
// Clone the array into a new array
ElementArray.prototype.clone = function(){
	var clone = new ElementArray ([], this.ObjType);
	this.each (function (n){
		clone.push (n.clone());
	});

	return clone;
}

// Perform a shallow copy of the array
ElementArray.prototype.copy = function() {
	var newArray = new ElementArray ([], this.ObjType);
	this.each (function (n){
		newArray.push (n);
	});

	return newArray;
}

/* ------- CONVERSIONS ---------- */
// Return array of all data
ElementArray.prototype.data = function () {
	return this.eachToArray (function (e){ return e.getData && e.getData(); });
}

/* ------- GLOBAL HELPERS -------- */
function isElementArray (r){ return r instanceof ElementArray; }
function toElementArray (r){
	if (isElementArray (r)) return r;
	else return new ElementArray (r);
}
function makeElementArray (t) {
	return new ElementArray([], t.ObjType);
}

function callBase () {
	var lastArg = arguments[arguments.length - 1];
	return lastArg === FORCE_BASE;
}

/* -------- OVERLOADING ------- */
overload ({name: "removeByIndex", env: ElementArray}, !callBase, elementRemoveByIndex);
overload ({name: "remove", env: ElementArray}, !callBase, elementRemove);
overload ({name: "removeAll", env: ElementArray}, !callBase, elementRemoveAll);
overload ({name: "newArray"}, isElementArray, makeElementArray);

