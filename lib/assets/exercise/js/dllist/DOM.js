var DOM = { };

const INDEX_NODE = "<p class='index'><span></span></p>";
const INDEX_DUMMY = "<p class='index'><span class='flipped'></span></p>"
DOM.domify = function(elem){
	return $(elem)[0];
}

DOM.all = function(selector, from){
	return $(selector, from).add($(from).filter(selector));
}

DOM.nextFrom = function (r){
	return DOM.all(".pointer.next", r);
}
DOM.prevFrom = function (r){
	return DOM.all(".pointer.prev", r);
}
DOM.dataFrom = function(r){
	return DOM.all(".data", r);
}
DOM.indexFrom = function(r){
	return DOM.all("p.index > span", r);
}

DOM.nodes = function(){ return $(".node"); }
DOM.getOper = function(){ return $("#op"); }
DOM.question = function(){ return $("#question"); }
DOM.checkmark = function(){ return $("span.checkmark"); }
DOM.clone = function(){ return $("#reset"); }

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

// turns a possible JQuery object into DOM element
DOM.from = function (obj){
	return $(obj)[0];
}

DOM.newData = function (){
	return $("<div class='data'></div>");	
}
DOM.newPrev = function(){
	return $("<div class='pointer prev'></div>");
}
DOM.newNext = function() {
	return $("<div class='pointer next'></div>")
}
DOM.newIndex = function(dummy){
	var p = dummy ? INDEX_DUMMY : INDEX_NODE;
	    p = $(p);
	console.log(p);
	return $(p);
}
DOM.newNodeP = function() {
	return $("<div class='node'></div");
}
DOM.newNode = function (opts){
	var d = DOM.newNodeP();
	var prev = DOM.newPrev();
	var data = DOM.newData();
	var next = DOM.newNext();
	var ind  = DOM.newIndex(opts.isDummy);

	if (opts.hasPointers === false){
		return d.addClass("smaller").append(data);
	} else if (opts.isDummy){
		//d.addClass ("bigger");
		//data.addClass ("bigger");

		return d.append(next).append(data).append(prev).append(ind);
	} else
		return d.append(prev).append(data).append(next).append (ind);
}
