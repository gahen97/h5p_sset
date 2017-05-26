/*
	Let's say the skip list looks like:



                    4
        1           4
        1           4       6
	0 - 1 - 2 - 3 - 4 - 5 - 6 - 7 - 8

    Nodes should be spaced out by:
      node.width[shown] + some offset value
    Node pointers would be on the right side of this:
      node position + node.data.width
    Height offsets should be exactly node.height.

    NOTE: AS OF NOW, if an element is added and removed (by reset),
          the extra rows will not be removed. gotta fix that.
          BUT I'M FREE. free fallin'
*/
const ROW_TIMEOUT = 5;
const MIN_WIDTH   = 850;

function Build (rows, opts){
	if (!opts) opts = { };

	var elem = $(DOM.newNode ()).appendTo (question);

	this.height = elem.height ();
	this.width  = elem.width ();
	this.widthOffset = opts.widthOffset || 10;

	var data = DOM.dataFrom (elem);
	this.dataWidth = $(data).width ();

	elem.remove ();
	this.build (rows, opts.callback);
}

Build.prototype.get = function (row, col){
	var tower = this.towers.get (row);
	if (!tower) return null;

	var elem = tower.get (col);
	if (!elem) return null;

	return elem;
}

Build.prototype.getRowHeight = function (rowNum, n){
	return (n - rowNum) * this.height;
}

Build.prototype.calcWidth = function (){
	return this.width + this.widthOffset;
}
Build.prototype.getPtrOffset = function (){
	return this.dataWidth;
}

Build.prototype.getElPosition = function (i, n){
	return (i + 1) * (this.calcWidth ()) + this.widthOffset;
}

Build.prototype.makeSentinel = function (rowNum, n, height){
	var node = this.makeNode (-1, -1, n, height, rowNum);
	node.hideData ();
	return node;
}

Build.prototype.getElements = function(){ return this.elems; }

Build.prototype.addRow = function (rows, rowNum){
	// make the row....
	var height = this.getRowHeight (rowNum, rows.length);
	var n = new NodesArray ();
	this.nodes[rowNum] = n;
	
	// make a sentinel node
	var p = this.makeSentinel (rowNum, rows[rowNum].length, height);
	
	return {row: n, sentinel: p};
}

Build.prototype.getPosition = function (height, i, n){
	var position = {
		top: height,
		left: this.getElPosition (i, n)
	};
	
	return position;
}
Build.prototype.positionNode = function (node, height, i, n){
	node.setPosition (this.getPosition (height, i, n));
}

Build.prototype.reposition = function (){
	var len = this.nodes.length;
	var bld = this;
	
	var rowLength = this.nodes[0].size ();
	var indices = this.nodes[0].toDict (function (n, i){ return n; },
										function (n, i){ return i; });
	
	this.towers.each (function (tower, i){
		tower.each (function (node, r){
			var height = bld.getRowHeight (r, len);
			bld.positionNode (node, height, i - 1, rowLength);
		});
	});

	jsPlumb.repaintEverything ();
}

Build.prototype.makeNode = function(data, i, n, height, rowNum){
	var question = DOM.question ();
	
	// give it a position
	var pos = this.getPosition (height, i, n);

	// add the new node
	var node = new Node (undefined, data, {parent: question, enabled: true, height:rowNum, position: pos});
	
	// push it into places
	this.towers.get (i + 1, data).push (node);
	Nodes.push (node);
	this.nodes[rowNum].push (node, i+1);
	
	if (rowNum === 0 && i>=0)
		this.elems.push (node);
	
	return node;
}

// When a new element gets added, this should be updated to the rows
// Takes the index of the new element. Should be called after the element is done being added
Build.prototype.updateRows = function (data){
	var rows = this.rows;
	var btmRow = rows[0];
	if (btmRow.indexOf(data) !== -1) return;

	// find the tower with the given data
	var myElement = this.towers.findExact (data);
	if (!myElement) return;

	var tower = myElement.elem;
	var index = myElement.index - 1; // exclude the sentinel. has a tower, but not included in rows

	// splice it into each row
	btmRow.splice (index, 0, data);
	for (var i = 1; i < rows.length; i++){
		var elementInRow = tower.get(i) != undefined;

		rows[i].splice(index, 0, elementInRow)
	}
}

Build.prototype.addEmptyRow = function (cb) {
	var row = [ ];

	var myRows    = this.rows;
	var bottomRow = myRows [0];
	var n         = myRows.length;

	// by giving every value false, makes the row without any elements
	for (var i = 0; i < bottomRow.length; i++)
		row.push (false);
	
	// add the sentinel
	myRows.push (row);
	return this.buildRow (n, myRows, {timeout: 0}, cb);
}

Build.prototype.updateHeight = function (nh) {
	// couldn't get an l in there. :/.
	if (nh <= this.rows.length) return;

	// would be the same as adding height - n empty rows
	for (var i = this.rows.length; i < nh; i++) {
		var sentinel = this.addEmptyRow ();
		if (sentinel){		
			searchPath.push (sentinel);
			$(sentinel.getElem ()).addClass (SEARCH_PATH_CLASS);
		}
	}
}

Build.prototype.addElement = function (data){
	var pi    = this.towers.closest (data);
	var tower = this.towers.add (pi+1, data);
	var n     = this.towers.size ();

	this.n ++;

	var nodeHeight = Skiplist.calculateHeight ();
	this.updateHeight (nodeHeight);

	// i don't even know why, but he's coming for you - yeah, he's coming for you.
	for (var i = 0; i < nodeHeight; i++){
		var height = this.getRowHeight (i, this.numRows);
		var node   = this.makeNode (data, pi, n, height, i);
		node.addClass ("new");

		data = true;
	}
	
	this.reposition ();
	this.resize ();

	return tower;
}

Build.prototype.buildRow = function (rowNum, rows, opts, cb){
	var height = this.getRowHeight (rowNum, rows.length);
	var row = rows[rowNum];
		
	var r = this.addRow (rows, rowNum);
	var prevNode = r.sentinel;
		
	for (var i = 0; i < row.length; i++){
		if (!row[i] && row[i] !== 0) continue;

		var n = this.makeNode (row[i], i, row.length, height, rowNum);

		if (prevNode)
			prevNode.connectTo (n);
			
		prevNode = n;
	}

	setTimeout (cb, opts.timeout);
	return r.sentinel;
}

Build.prototype.buildRows = function(rows, rn, cb){
	if (!rn) rn = 0;
	if (rn >= rows.length) cb();
	else {
		var bld = this;
		bld.buildRow (rn, rows, {timeout: ROW_TIMEOUT}, function(){
			bld.buildRows (rows, rn+1, cb);
		});
	}
}

Build.prototype.build = function (rows, cb){
	if (this.building) return;
	this.building = true;

	searchPath = new NodesArray ();

	this.towers = new Towers ();
	this.rows = rows;
	this.n    = rows[0].length;
	var question = DOM.question ();

	Nodes = new NodesArray ();
	this.elems  = new NodesArray ();

	var prevNode;
	
	this.nodes = [ ];

	var my = this;
	my.buildRows (rows, 0, function(){
		sentinel = my.towers.get (0);
	
		my.numRows = rows.length;
		updateActive ([sentinel.getTopNode()])
	
		// getting some issues with the top sentinel not repainting
		// waiting 10 ms fixes the issues, so doing this for now
		jsPlumb.repaintEverything ();
		setTimeout (function(){
			jsPlumb.repaintEverything ();
		}, 1);

		my.resize ();
		my.building = false;

		my.towers.check ();

		if (cb)
			cb();
	});
}

Build.prototype.remove  = function (data){
	var tower = this.towers.find (function(t){ return t.getData() === data; });
	if (!tower) return false;

	this.towers.remove (tower);
	this.reposition ();
	return true;
}

Build.prototype.rebuild = function (rows, cb){
	if (this.building) return;

	if (!rows)
		rows = this.rows;

	rows.clean ();

	this.towers.removeAll ();

	this.build (rows, cb);
}

Build.prototype.totalWidth = function (){
	if (!this.rows || !this.rows[0]) return MIN_WIDTH;

	var n = this.n;
	var w = this.getElPosition (n, n);

	return Math.max (w, MIN_WIDTH);
}

Build.prototype.resize = function (){
	var width = this.totalWidth ();
	DOM.resize (DOM.question(), width);
}
