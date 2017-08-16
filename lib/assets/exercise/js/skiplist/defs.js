const SEARCH_PATH_CLASS = "searchPath";

const CODES = {
	DISABLE: "DISABLE",
	ENABLE: "ENABLE",
	DOM_ACTIVE: "DOM ACTIVE",
	DOM_INACTIVE: "DOM INACTIVE"
}

var modes = [
	{
		name: "searchPath"
	}
];

const MIN_N = 0;
const MAX_N = 99;

var active = false;
var Nodes;
var currentNode;
var searchPath;
var sentinel;
var check;
var answer;
var build;
