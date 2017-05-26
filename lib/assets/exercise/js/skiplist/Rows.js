// these probably should go on a sub-class,
// but ......
Array.prototype.canCleanRow = function(r){
	for (var i = 0; i < this[r].length; i++) {
		if (this[r][i] !== false)
			return false;
	}

	return true;
}

Array.prototype.clean = function (){
	var i = this.length - 1;
	var n = i;
	while (1) {
		if (!this.canCleanRow (i))
			break;

		console.log("ok");
		i--;
	}

	var x = this.splice (i+1, n-i);
};
