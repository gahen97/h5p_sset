/*
	Update the build to only add space for a tower IF the tower is shown.
	This should be easy, right? It's from the left - which means if a tower's not shown ...
	You can just hide the tower, subtract i by 1 for the remaining towers, and place them
	at i - 1, etc.

	So instead of calculating:
		0 -> 1 -> 2 -> 3 -> 4
	It might be:
		0 -> 1(hidden) -> 1 -> 2 -> 3
	Which would end up placing 2 over 1, etc., hiding 1.
*/

function getLeadTextIIIA () {
	return "add";
}

overload({name: "getLeadText"}, isAO, getLeadTextIIIA);
