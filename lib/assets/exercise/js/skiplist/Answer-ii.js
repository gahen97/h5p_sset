const MIN_N = 0;
const MAX_N = 99;

Answer.prototype.newPath = function (data){
	if (!data && data !== 0){
		var elems = build.getElements ();
		var nums  = elems.eachToArray (function (el){ return el.getData(); });
		var data  = rand.excluding (MIN_N, MAX_N, nums);
	}

	this.searchingFor = data;
	setSearchingFor (data);
}

Answer.prototype.addedCorrectly = function (element){
	var towers = build.towers;
	towers.each (function (tower, index){
		tower.each (function (node, heightIndex){
			console.log (node, heightIndex, index);
		});
	});
}
