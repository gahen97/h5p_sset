const CHECKMARK_CHAR = '✔';
const X_CHAR = '✗';

const DEF_CHECKMARK_LENGTH = 1 * 1000;

function Checkmark (opts){
	if (!opts) opts = { };

	this.elem = opts.elem || DOM.checkmark ();
	this.len  = opts.len || DEF_CHECKMARK_LENGTH;
}

Checkmark.prototype.update = function (isCorrect) {
	var elem = $(this.elem);
	if (isCorrect){
		elem.addClass ("correct").text (CHECKMARK_CHAR);
	}else{
		elem.removeClass ("correct").text (X_CHAR);
	}

	this.timeoutHide ();
}

Checkmark.prototype.timeoutHide = function (){
	var e = $(this.elem);
	setTimeout (function(){
		e.text ("");
	}, this.len);
}
