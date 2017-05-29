/*
	In Lua, you can just call:
		var f = new Debounce(function(){ })
		f ();
	and it works. but javascript is not lua
*/
function Debounce (f) {
	
	this.f = f;
	this.debounce = false;
};

Debounce.prototype.call = function(){
	if (this.debounce) return;
	this.debounce = true;

	this.f.apply (this, arguments);

	this.debounce = false;
}
