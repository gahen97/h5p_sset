/*
	Random numbers library.

	Has helper functions for:
		between (min, max)		Returns some number x such that min <= x <= max.
		nextInt ()			Returns some integer (0 to 2^32)
		bool ()				Returns true or false
		letter ()			Returns some letter between A and Z
		index (list)			Returns a random index x such that 0 <= x <= list.length
		elem (list)			Returns a random element from the list
		excluding (min, max, wo, opts)
						Returns a random number between min and max,
						 that is not within the list wo.
*/

var rand = { };

const MAX_ATTEMPTS = 35;
const MAX_INT = Math.pow (2, 32);

const A_ASCII = 65;
const Z_ASCII = 90;

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
