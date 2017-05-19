var Skiplist = { };

Skiplist.calculateHeight = function (){
	var count = 1;
	while (Math.random () < 0.5)
		count++;
	return count;
}