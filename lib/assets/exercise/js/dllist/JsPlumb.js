
var innerStroke = 'rgba(0, 0, 0, 1)';
var outerStroke = 'rgba(235, 235, 235, 1)';

const MAIN_WIDTH = 63;
const NODE_WIDTH = 10;
const NODE_HEIGHT = 10;

const ENDPOINT_SRC = {
	isSource:true,
	isTarget:false,
	connector: ["Straight"],
	endpointStyle:{ gradient : {stops:[[ 0, innerStroke ], [ 1, outerStroke ]], offset:17.5, innerRadius:3 }, radius:5},
    connectorOverlays: [
        [ "Arrow", { width:10, length:12, location:1, id:"arrow" } ]
    ]
};
const ENDPOINT_TARG = {
	isSource: false,
	isTarget: true,
	endpoint: ["Blank", {width: NODE_WIDTH, height: NODE_HEIGHT, cssClass: "hidden"}],
	connector: ["Straight"],
	maxConnections: -1
}
const ANCHOR_SRC = ["Center"];
const ANCHOR_TARG = [[-0.025, 0.5, -1, 0]];
const DRAG_OPTS = {
	containment: true,
	drag: function(evt, src){ jsPlumb.repaintEverything(); }
}

function Plumbify (item, opts){
	this.item = item;
	this.src  = item.getElem();
	this.dragging = false;

	if (opts.hasEndpoint !== false)
		this.addEndpoint (this.src);

	return this;
}

Plumbify.prototype.setDragging = function(w){ this.dragging = w; }
Plumbify.prototype.isDragging  = function(){ return this.dragging; }

Plumbify.prototype.reposition = function(){
	if (this.src) jsPlumb.repaint(this.src);
}

Plumbify.prototype.addEndpoint = function(elem){
	var my = this;
	//var cls = (typ === "target") ? ENDPOINT_TARG : ENDPOINT_SRC;
	//var anchor = (typ === "target") ? ANCHOR_TARG : ANCHOR_SRC;

	var cls = ENDPOINT_SRC;
	var anchor = ANCHOR_SRC;

	my.endpoint = jsPlumb.addEndpoint($(elem).attr("id"), { 
	  anchors: anchor
	}, cls);
}

Plumbify.prototype.target = function(){
	jsPlumb.makeTarget (this.src, {
		endpoint: "Blank",
		anchor: [ "Perimeter", { shape:"Rectangle" } ]
	});
	return this;
}
Plumbify.prototype.setTargEnabled = function(n){
	jsPlumb.setTargetEnabled (this.src, n);
}
Plumbify.prototype.draggable = function(elem){
	if (!elem) elem = DOM.domify (this.src);

	jsPlumb.draggable (elem, DRAG_OPTS);
	return this;
}

Plumbify.prototype.getSource = function(){
	return this.src;
}

Plumbify.prototype.disconnect = function(){
	if (!this.conn) return;
	if (!this.conn.connector) return;

	jsPlumb.detach (this.conn);
}

Plumbify.prototype.connectTo = function (elem){
	if (!elem) return;
	elem = DOM.domify (elem);
	this.disconnect ();

	this.conn = jsPlumb.connect({
		source: this.endpoint,
		target: elem,
		overlays: [
	        [ "Arrow", { width:10, length:12, location:1, id:"arrow" } ]
	    ],
	    detachable: true
	})
}

Plumbify.prototype.remove = function(){
	var e = this.src;
	jsPlumb.empty(e).remove(e);
}

Plumbify.prototype.detach = function (){
	jsPlumb.detachAllConnections(this.src);
}

Plumbify.prototype.setEnabled = function(n){
	var endpoint = this.endpoint;
	var connects = endpoint.connections;

	for (var i in connects){
		enableConnection (connects[i], n);
	}
}


// static functions
function enableConnection (conn, isEnabled){
	var connector = conn && conn.connector;
	var svg       = connector && connector.svg;

	if (!svg) return;

	if (isEnabled)
		$(svg).removeClass ("disabled");
	else
		$(svg).addClass ("disabled");
}

function reloadPlumbs (){
	jsPlumb.repaintEverything();
}

function findPtrFromEvt (src){
	return Nodes.findPointer ($(src));
}

function findTargetNode (targ){
	return Nodes.find (function (n){ return n.isTarget (targ); });
}

// event handlers
jsPlumb.bind("connection", function(evt){
	var ptr  = findPtrFromEvt (evt.source);
	var targ = findTargetNode (evt.target);
	if (!ptr) return;

	ptr.setNext (targ);
});

jsPlumb.bind("connectionDetached", function(evt){
	var ptr  = findPtrFromEvt (evt.source);
	if (!ptr) return;
	
	ptr.setNext (null);
})

// dragging events
jsPlumb.bind("connectionDrag", function(evt){
	var ptr  = findPtrFromEvt (evt.source);
	if (!ptr) return;
	
	ptr.setDragging (true);
});
jsPlumb.bind("connectionDragStop", function(evt){
	var ptr  = findPtrFromEvt (evt.source);
	if (!ptr) return;
	
	ptr.setDragging (false);
});
jsPlumb.bind("connectionAborted", function(evt){
	var ptr  = findPtrFromEvt (evt.source);
	if (!ptr) return;
	
	ptr.setDragging (false);
});

jsPlumb.ready(function(){
	jsPlumb.setContainer("question");
});