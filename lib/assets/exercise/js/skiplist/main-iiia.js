/*
	CURRENTLY:
		- Adding adds the element to each row;
		- Can set the element on each row active, update pointers;
*/

function getLeadTextIIIA () {
	return "add";
}

overload({name: "getLeadText"}, isAO, getLeadTextIIIA);
