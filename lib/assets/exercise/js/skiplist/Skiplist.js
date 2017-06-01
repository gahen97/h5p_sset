var Skiplist = { };

// taken from the textbook ...
function pickHeight(){
        var z = rand.nextInt();
        var k = 1;
        var m = 1;
        while ((z & m) != 0) {
            k++;
            m <<= 1;
        }
        return k;
}

Skiplist.calculateHeight = function (maxCount){
	return pickHeight ();
}
