function remFromRowsIIIR (data, index) {
	// data here is an index .... so remove that index
	console.log ("REMOVING ", index);
	console.log (this.rows);
	this.rows.removeIndex (index);

	console.log ("AFTER: ", this.rows);

	console.log ("HERE'S A TRACE: ");
	console.trace ();
}

overload({name: "removeFromRows", env: Build}, isRO, remFromRowsIIIR);
