var rand = { };

const MAX_ATTEMPTS = 35;
const MAX_INT = Math.pow (2, 32);

rand.between = function (min, max){
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

rand.nextInt = function(){
	return rand.between (0, MAX_INT);
}

rand.bool = function(){
	return Math.random () <= 0.5;
}

rand.letter = function(){
	return String.fromCharCode (rand.between (A_ASCII, Z_ASCII));
}

rand.index = function(list){
	return rand.between(0, list.length - 1);
}

rand.elem = function(list){
	return list[rand.index (list)];
}

rand.excluding = function(min, max, wo, opts){
	if (!opts) opts = { };

	var maxAttempts = opts.maxAttempts || MAX_ATTEMPTS;
	var i = 0;
	while (i < maxAttempts){
		var n = rand.between (min, max);
		if (wo.indexOf (n) === -1)
			return n;
		i++;
	}

	return matchSmallest(min, max, wo);
}

rand.uniqArray = function(minN, maxN, numElems, opts){
	var maxAttempts = opts.maxAttempts || MAX_ATTEMPTS;

	// there's a few ways to do this. either:
	//   1) lots of preprocessing: make an array from minN to maxN, choose numElems elements.
	//        bad if there's a lot of numbers, ex. 1 to 100,000 ...
	//   2) pick a new number each time, if it's in the array, retry
	//        bad if there's a lot of elements in relation to the possible numbers,
        //        ex. 100 elements 1 from 100 will give a lot of retrying near the end
	//   3) a mix of both?
        //   4) if the number of elements can be UP TO n, but not exactly n, can take n numbers
        //        from the set and remove duplicates. could be a lot of removals.
	//   5) again, if numbers can be UP TO N, then can set a limit on number of retries;
	//        if it goes over this limit, skip the number
        //   5) math

	// for the sake of my sanity, i'm just going to go with #2
	var arr = [ ];
	for(var i = 0; i < numElems; i++){
		var n = pickUniqueNumber (minN, maxN, arr, maxAttempts);
		if (n) arr.push (n);
	}

	return arr;
}
