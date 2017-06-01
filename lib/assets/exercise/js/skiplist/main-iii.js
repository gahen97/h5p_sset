/*
	Some notes:
		- Indices work ...
		- Working on set operation ...
		- Add add(i,x), remove(i) operations ...
		- Should show indices or values? Show indices in text
*/

function getLeadText () {
	return "set";
}

function getInnerText (index, element){
	return index + ", " + element;
}

function getExtraText () { return ""; }

function setSearchFor (){
	setOperText (getLeadText() + "(" + getInnerText.apply (this, arguments) + ")"
			+ getExtraText.apply(this, arguments));
}

overload({name: "setSearchingFor"}, retTrue, setSearchFor);
