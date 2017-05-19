const NBSP = '\xa0';

function Indices (r){
	this.row     = $(r);
	this.indices = $(DOM.indicesSpanFrom (r));
	this.def     = this.indices.text();
}

Indices.prototype.update = function (newText){
	this.indices.text(newText);
}

Indices.prototype.reset = function (){
	this.update (this.def);
}

Indices.prototype.getElem = function(){ return this.row; }