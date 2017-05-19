const CHECKMARK_TIME = 1000;

function Checkmark (s){
	this.elem = s;
}

Checkmark.prototype.getElem = function(){ return this.elem; }

Checkmark.prototype.show = function (){
	var ch = this;
	ch.enable ();

	setTimeout (function (){
		ch.disable ();
	}, CHECKMARK_TIME);
}

Checkmark.prototype.enable = function (){
	DOM.show (this.getElem ());
}
Checkmark.prototype.disable = function (){
	DOM.hide (this.getElem ());
}