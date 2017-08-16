function getLeadTextIIIR(){
	return "remove";
}


function getInnerTextIIIR (index, element){
	return index;
}


overload({name: "getLeadText"}, isRO, getLeadTextIIIR);
overload({name: "getInnerText"}, isRO, getInnerTextIIIR);
