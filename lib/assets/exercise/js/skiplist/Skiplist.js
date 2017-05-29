var Skiplist = { };

Skiplist.calculateHeight = function (maxCount){
	var count = 1;
	while (Math.random () < 0.5 && count<maxCount)
		count++;
	return count;
}
