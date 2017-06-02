var Skiplist = { };

// taken from the textbook ...
function pickHeight(maxCount){
        var z = rand.nextInt();
        var k = 1;
        var m = 1;

        while ((z & m) != 0) {
            k++;
            m <<= 1;
        }

	// the maxCount is to limit the size of the Skiplist.
	// if we're adding three empty rows, for example, we can limit that
	// to just one empty row because there's few operations happening.
	if (maxCount)
		k = Math.min (k, maxCount);

        return k;
}

Skiplist.calculateHeight = function (maxCount){
	return pickHeight (maxCount);
}
