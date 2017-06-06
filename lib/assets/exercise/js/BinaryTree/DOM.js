var DOM = { };

DOM.domify = function(elem){
	return $(elem)[0];
}

DOM.all = function(selector, from){
	return $(selector, from).add($(from).filter(selector));
}

DOM.leftChild = function (r){
	return DOM.all(".pointer.left", r);
}
DOM.rightChild = function (r){
	return DOM.all(".pointer.right", r);
}
DOM.parent = function(r) {
	return DOM.all(".pointer.parent", r); // <div class='pointer parent'>
}
DOM.dataFrom = function(r){
	return DOM.all(".data", r);
}
DOM.indexFrom = function(r){
	return DOM.all("p.index", r);
}

DOM.nodes = function(){ return $(".node"); }
DOM.getOper = function(){ return $("#operation"); }
DOM.question = function(){ return $("#question"); }
DOM.checkmark = function(){ return $("span.checkmark"); }
DOM.clone = function(){ return $("#reset"); }
DOM.checkBtn = function(){ return $("#checkBtn"); }

DOM.show = function (elem){
	$(elem).removeClass ("hidden");
}
DOM.hide = function (elem){
	$(elem).addClass ("hidden");
}

DOM.moveTo = function(n, p){ $(n).css({top: p.top, left: p.left}); }
DOM.positionOf = function(n){ return $(n).position(); }

DOM.within = function(parent, child){
	var dom1 = DOM.domify (parent);
	var dom2 = DOM.domify (child);

	return ($.contains(dom1, dom2))
}
DOM.contains = function(elem){
	return DOM.within (document, elem);
}

DOM.resize = function (elem, size) {
	$(elem).css ("width", size);
	resize ();
}

// turns a possible JQuery object into DOM element
DOM.from = function (obj){
	return $(obj)[0];
}

DOM.newLength = function(){ return $("<div class='length'></div>"); }
DOM.newData = function (){
	return $("<div class='data'></div>");
}
DOM.newLeft = function() {
	return $("<div class='pointer left'></div>")
}
DOM.newRight = function() {
	return $("<div class='pointer right'></div>")
}
DOM.newParent = function() {
	return $("<div class='pointer parent'></div>")
}
DOM.newNodeP = function() {
	return $("<div class='node'></div");
}
DOM.newNode = function (big){
	var d = DOM.newNodeP();
	var data = DOM.newData();
	var next = DOM.newNext();

	if (big){
		d.addClass ("bigger");
		data.addClass ("bigger");
	}

	return d.append(data).append(next);
}
