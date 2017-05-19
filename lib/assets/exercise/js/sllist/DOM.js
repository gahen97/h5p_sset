var DOM = { };

DOM.domify = function(elem){
	return $(elem)[0];
}

DOM.all = function(selector, from){
	return $(selector, from).add($(from).filter(selector));
}

DOM.pointerFrom = function (r){
	return DOM.all(".pointer", r);
}
DOM.dataFrom = function(r){
	return DOM.all(".data", r);
}

DOM.nodes = function(){ return $(".node"); }
DOM.getOper = function(){ return $("#op"); }
DOM.question = function(){ return $("#question"); }
DOM.checkmark = function(){ return $("span.checkmark"); }

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
DOM.newNext = function() {
	return $("<div class='pointer'></div>")
}
DOM.newNodeP = function() {
	return $("<div class='node'></div");
}
DOM.newNode = function (big){
	var d = DOM.newNodeP();
	var data = DOM.newData();
	var next = DOM.newNext();

	if (big){
		data.addClass ("bigger");
		d.addClass ("bigger");
	}

	return d.append(data).append(next)
}