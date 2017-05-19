
var innerStroke = 'rgba(0, 0, 0, 1)';
var outerStroke = 'rgba(235, 235, 235, 1)';

const MAIN_WIDTH = 63;
const NODE_WIDTH = 10;
const NODE_HEIGHT = 10;

const ENDPOINT_SRC = {
	isSource:false,
	isTarget:false,
	connector: ["Straight"],
	endpointStyle:{ gradient : {stops:[[ 0, innerStroke ], [ 1, outerStroke ]], offset:17.5, innerRadius:3 }, radius:5},
    connectorOverlays: [
        [ "Arrow", { width:10, length:12, location:1, id:"arrow" } ]
    ]
};

const ANCHOR_SRC = ["Center"];
const ANCHOR_PERIM = [ "Perimeter", { shape:"Rectangle" } ];
const ANCHOR_CENTERED = ["Center"];

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

	var cls = ENDPOINT_SRC;
	var anchor = ANCHOR_SRC;

	my.endpoint = jsPlumb.addEndpoint($(elem).attr("id"), { 
	  anchors: anchor
	}, cls);
}

Plumbify.prototype.target = function(opts){
	var anchor = opts.centered ? ANCHOR_CENTERED : ANCHOR_PERIM;

	jsPlumb.makeTarget (this.src, {
		endpoint: "Blank",
		anchor: anchor
	});
	return this;
}
Plumbify.prototype.setTargEnabled = function(n){
	jsPlumb.setTargetEnabled (this.src, n);
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
	    detachable: false
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

jsPlumb.ready(function(){
	jsPlumb.setContainer("question");
});