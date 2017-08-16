function findClosestRowsIIIA(data, index){
	// if it has index ... we just take index, right?
	return {index: index};
};

overload({name: "findClosest", env: Rows}, isAO, findClosestRowsIIIA);
