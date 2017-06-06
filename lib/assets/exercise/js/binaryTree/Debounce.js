/*
	Handles Debounce. When a function has debounce, it will not run if it is currently running -
		this is mostly useful with events, such as buttons, which may be double clicked quickly.
		In this case, the function should be run once and subsequent clicks ignored.
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
