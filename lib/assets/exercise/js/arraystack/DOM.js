/*
	Everything DOM-related. Find an element, get the index of an element, ...
*/

var DOM = { };

const DROP = "div.droppable";
const ELEM = "div.element";
const LIST = "ul.items";
const TRSH = "img.trash";
const BTN  = "a.button";
const ROW  = "tr";
const INDS = "tr.indices";
const SPIN = "span.textin";
const RESH = "div.ui-resizable-handle";
const NODB = "#doubleSize";
const NOHV = "#halfSize";

DOM.all = function(selector, from){
	return $(selector, from).add($(from).filter(selector));
}
DOM.rowFrom = function(elem){
	return $(elem).closest (ROW);
}
DOM.listFrom = function(r){
	return DOM.all(LIST, r);
}
DOM.trashFrom = function(r){
	return DOM.all(TRSH, r);
}
DOM.buttonsFrom = function(r){
	return DOM.all(BTN, r);
}
DOM.elementsFrom = function(r){
	return DOM.all(ELEM, r);
}
DOM.droppersFrom = function(r){
	return DOM.all(DROP, r);
}
DOM.indicesSpanFrom = function(r){
	return DOM.all(SPIN, r);
}
DOM.resizeHandleFrom = function(r){
	return DOM.all(RESH, r);
}
DOM.prevRowFrom = function(r){
	var id   = $(r).data("index");
	var next = id - 1;

	return DOM.rowFromIndex (next);
}
DOM.nextRowFrom = function(r){
	var id   = $(r).data("index");
	var next = id + 1;

	return DOM.rowFromIndex (next);
}
DOM.rowIndices = function(r){
	var index = DOM.indexOf(r);
	return DOM.indicesFromIndex (index);
}
DOM.indexOf = function (elem){
	var r = DOM.rowFrom (elem);
	return r.data("index");
}

DOM.indicesFromIndex = function (index){
	return $("#indices" + index);
}
DOM.rowFromIndex = function (index){
	return $("#row" + index);
}
DOM.getReset = function (index){
	return $("#reset" + index);
}

DOM.rows = function(){
	return $(ROW);
}
DOM.elements = function(){
	return $(ELEM);
}
DOM.droppers = function(){
	return $(DROP);
}
DOM.indices = function(){
	return $(INDS);
}
DOM.trash = function(){
	return $(TRSH);
}
DOM.noteDoubled = function(){
	return $(NODB);
}
DOM.noteHalved = function(){
	return $(NOHV);
}

DOM.makeListItem = function(){
	return $("<li>");
}
DOM.makeDropperElement = function(){
	return $("<div class='droppable'>");
}

DOM.within = function(parent, child){
	var dom1, dom2;
	dom1 = parent instanceof jQuery ? parent[0] : parent;
	dom2 = child instanceof jQuery ? child[0] : child;

	return ($.contains(dom1, dom2))
}
DOM.contains = function(elem){
	return DOM.within (document, elem);
}

DOM.pushOnTop = function(div, t){
	div.position({
	  my:        "left center",
	  at:        "left center",
	  of:        t,
	  collision: "fit"
	})
}

DOM.width = function(elem){
	var css = $(elem).css("width");
	return parseInt(css);
}