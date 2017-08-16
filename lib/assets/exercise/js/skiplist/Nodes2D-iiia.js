/*
	Overloads Nodes2D to:
		- Implement new index
			Sort based on indices of the elements
*/

function findNewIndexIIIA (element, row) {
	// I could implement a more efficient search here but the rows won't be very large,
	// so its not really necessary. probably.
	var myIndex = element.index ();
	var result = row.closest (function (node) {
		return node.index() - myIndex;
	});

	if (!result || (!result.index && result.index !== 0))
		return row.size();

	return result.index;
}

overload({name: 'findNewIndex', env: Nodes2D, id: 'IndexSort'}, isAO, findNewIndexIIIA);
