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
*/

function Build (rows, opts){
	if (!opts) opts = { };

	var elem = $(DOM.newNode ()).appendTo (question);

	this.height = elem.height ();
	this.width  = elem.width ();
	this.widthOffset = opts.widthOffset || 10;

	var data = DOM.dataFrom (elem);
	this.dataWidth = $(data).width ();

	elem.remove ();
	this.build (rows);
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

Build.prototype.getTower = function (i, data){
	if (!this.towers.get (i))
		this.towers.set (i, new Tower (data));
	return this.towers.get (i);
}
Build.prototype.addTower = function (i, data){
	this.towers.push (new Tower(data), i);
}

Build.prototype.addRow = function (rows, rowNum){
	// make the row....
	var height = this.getRowHeight (rowNum, rows.length);
	var n = new NodesArray ();
	this.nodes[rowNum] = n;
	
	// make a sentinel node
	var p = this.makeSentinel (rowNum, rows[rowNum].length, height);
	
	return {row: n, sentinel: p};
}

Build.prototype.positionNode = function (node, height, i, n){
	var position = {
		top: height,
		left: this.getElPosition (i, n)
	};
	
	node.setPosition (position);
}

Build.prototype.reposition = function (){
	var len = this.nodes.length;
	var bld = this;
	
	var rowLength = this.nodes[0].size ();
	var indices = this.nodes[0].toDict (function (n, i){ return n; },
										function (n, i){ return i; });
	
	for (var i in this.nodes){
		var row = this.nodes[i];
		row.each (function (elem, index){
			console.log (indices[elem]);

			var height = bld.getRowHeight (i, len);
			bld.positionNode (elem, height, indices[elem] - 1, rowLength);
			
		});
	}
	
	jsPlumb.repaintEverything ();
}

Build.prototype.makeNode = function(data, i, n, height, rowNum){
	var question = DOM.question ();
	
	// add a new node for the element
	var node = new Node (undefined, data, {parent: question, enabled: true, height:rowNum});
	
	// give it a position
	this.positionNode (node, height, i, n);
	
	// push it into places
	this.getTower (i + 1, data).push (node);
	Nodes.push (node);
	this.nodes[rowNum].push (node, i+1);
	
	if (rowNum === 0 && i>=0)
		this.elems.push (node);
	
	return node;
}

Build.prototype.addElement = function (data){
	var bottomRow = this.nodes[0];
	var prev = bottomRow.findClosest (data);
	var n    = bottomRow.size();
	var pi   = prev.index;
	
	this.addTower (pi+1, data);
	
	var nodeHeight = Skiplist.calculateHeight ();
	// Here, if nodeHeight > skiplistHeight, the skiplist should grow to new height -
	// which I'll implement at some point. For now, limit the height to max height of skiplist ....
	if (nodeHeight > this.numRows) nodeHeight = this.numRows;
	
	// i don't even know why, but he's coming for you - yeah, he's coming for you.
	for (var i = 0; i < nodeHeight; i++){
		var height = this.getRowHeight (i, this.numRows);
		var node   = this.makeNode (data, pi, n, height, i);
	}
	
	this.reposition ();
}

Build.prototype.build = function (rows){
	var question = DOM.question ();

	Nodes = new NodesArray ();
	this.towers = new ElementArray ();
	this.elems  = new NodesArray ();

	var prevNode;
	
	this.nodes = [ ];

	for (var rowNum = 0; rowNum < rows.length; rowNum ++){
		var height = this.getRowHeight (rowNum, rows.length);
		var row = rows[rowNum];
		
		var r = this.addRow (rows, rowNum);
		prevNode = r.sentinel;
		
		for (var i = 0; i < row.length; i++){
			if (!row[i]) continue;

			var n = this.makeNode (row[i], i, row.length, height, rowNum);

			if (prevNode)
				prevNode.connectTo (n);
			
			prevNode = n;
		}
	}

	sentinel = this.getTower (0);
	
	this.numRows = rows.length;
	Nodes.setActive ([sentinel.getTopNode()])
	
	// getting some issues with the top sentinel not repainting
	// waiting 10 ms fixes the issues, so doing this for now
	jsPlumb.repaintEverything ();
	setTimeout (function(){
		jsPlumb.repaintEverything ();
	}, 1);
}

Build.prototype.rebuild = function (rows){
	this.towers.removeAll ();

	this.build (rows);
}
