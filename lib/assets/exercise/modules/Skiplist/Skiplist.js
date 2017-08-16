/*
	This is not a Skiplist.
	This is, instead, an array saying to the webpage whether or not each item should include in a given row of the Skiplist.
	
	An example may look like:
		[
			[1, 2, 3, 4, 5],
			[t, t, t, f, f],
			[t, f, t, f, f],
			[f, f, t, f, f]
		]

	Where the first row corresponds to the data of each element,
	 and each additional row indicates if the element exists within the row.
	 In the example, the skiplist would look like:
		1 - 2 - 3 - 4 - 5
		1 - 2 - 3
		1 - - - 3
		- - - - 3

	By not implementing a Skiplist here, it simplifies the webpage's job of creating the Skiplist.
		Rather than performing some operation to get each row & element & yadayadayada, can just look through the array.
*/

var HELPERS = "../helpers/";

var rand = require(HELPERS + "random.js");

function Skiplist (nodes){
	this.rows = [
		nodes
	];

	this.generate ();
}

Skiplist.prototype.generate = function (){
	var prevRow = this.rows[this.rows.length - 1];

	var count = prevRow.length;
	while (count>1){
		var nextRow   = [ ];
		var prevCount = count;

		// reset the count
		count = 0;
		for (var i in prevRow){
			nextRow[i] = (prevRow[i] && rand.boolean ())

			// if its in the next row, increase the total
			if (nextRow[i])
				count ++;
		}

		// minimize the skiplist: if a row is the same as the previous row, discard it
		if (count > 0)
			this.rows.push (nextRow);
		prevRow = nextRow;
	}
}

Skiplist.prototype.toJson = function (){
	return JSON.stringify (this.rows, null, "\t");
}

module.exports = Skiplist;