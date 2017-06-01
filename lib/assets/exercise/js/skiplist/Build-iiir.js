function remFromRowsIIIR (data, index) {
	// data here is an index .... so remove that index
	this.rows.removeIndex (index);
}

overload({name: "removeFromRows", env: Build}, isRO, remFromRowsIIIR);
