const MAX_INTEGER  = Math.pow (2, 32);
const MAX_ATTEMPTS = 35;

const A_ASCII = 65;
const Z_ASCII = 90;

class Random {
	/* Random between given x and y */
	constructor (minElement, maxElement) {
		this.minElement = minElement;
		this.maxElement = maxElement;
	}

	// Get the next element
	get next () {
		return Random.between (this.minElement, this.maxElement);
	}

	/* Static Functions */
	static between (min, max) {
		return Math.floor(Math.random() * (max - min + 1)) + min;
	}

	// Various data types
	static get Integer () {
		return Random.between (0, MAX_INTEGER)
	}
	static get Boolean () {
		return Random.between(0,1) === 0;
	}
	static get Character () {
		return String.fromCharCode (Random.between (A_ASCII, Z_ASCII))
	}

	// List helpers
	static index (list) {
		return Random.between (0, list.length);
	}
	static element (list) {
		return list [Random.index (list)];
	}
}