
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
    ],
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

	this.enabled = true;
	this.classes = "";

	return this;
}

Plumbify.prototype.isEnabled = function(){ return this.enabled; }

Plumbify.prototype.setDragging = function(w){ this.dragging = w; }
Plumbify.prototype.isDragging  = function(){ return this.dragging; }

Plumbify.prototype.reposition = function(){
	if (this.src) jsPlumb.repaint(this.src);
}


// Note: Takes f in as an argument.
// Will pass in current class,
// Receives new class to be set
Plumbify.prototype.setClass = function (f){
	var e = this.endpoint;
	if (!e) return;

	// get the new class .... and remove trailing, leading spaces if there are any
	var c = f(e.connectorClass);
	if (c) c = c.trim ();

	// set the class
	e.connectorClass = c;
	this.classes = c;
}

// add the class. if already has classes, add it to the end - otherwise just return class
Plumbify.prototype.addClass = function (cls){
	this.setClass (function (c){
		if (!c) return cls;
		else return c.replace(cls, "") + " " + cls;
	});
}
// remove the class. if does not have classes, return empty string - otherwise remove
Plumbify.prototype.removeClass = function (cls){
	this.setClass (function (c){
		if (!c) return "";
		else return c.replace(cls, "");
	});
}

Plumbify.prototype.addEndpoint = function(elem){
	var cls = ENDPOINT_SRC;
	var anchor = ANCHOR_SRC;

	this.endpoint = jsPlumb.addEndpoint($(elem).attr("id"), { 
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

Plumbify.prototype.setDetach = function (b){
	if (!this.conn) return;
	if (!this.enabled) return;
	if (!this.conn.connector) return;

	this.conn.setDetachable (b);
}

Plumbify.prototype.getSource = function(){
	return this.src;
}

Plumbify.prototype.disconnect = function(){
	if (!this.conn) return;
	if (!this.conn.connector) return;

	jsPlumb.detach (this.conn);
}

Plumbify.prototype.connectTo = function (elem, opts){
	if (!elem) return;
	if (!opts) opts = { };

	elem = DOM.domify (elem);
	this.disconnect ();

	this.conn = jsPlumb.connect({
		source: this.endpoint,
		target: elem,
		overlays: [
	          [ "Arrow", { width:10, length:12, location:1, id:"arrow" } ],
	        ],
		cssClass: this.classes,
	        detachable: opts.detachable
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
	this.enabled = n;

	var endpoint = this.endpoint;
	if (endpoint.endpoint)
		endpoint.setEnabled (n);

	this.showEnabled (n);
}

// SHOW Enabled: Remove the disabled classes, but don't actually enable
Plumbify.prototype.showEnabled = function (n){
	var endpoint    = this.endpoint;
	var connections = endpoint.connections;
	if (endpoint.canvas)
		controlDisabledClass (endpoint.canvas, n);
	for (var i in connections)
		showConnectionEnabled (connections[i], n);
}


// static functions
function showConnectionEnabled (conn, isEnabled){
	var connector = conn && conn.connector;
	var svg       = connector && connector.svg;

	if (!svg) return;

	controlDisabledClass (svg, isEnabled);
}

function controlDisabledClass (elem, n){
	if (n)
		$(elem).removeClass ("disabled");
	else
		$(elem).addClass ("disabled");
}


function reloadPlumbs (){
	jsPlumb.repaintEverything();
}

function findNodeFrom (src){
	return Nodes.find (function (n){
		return n.hasPointer ($(src));
	});
}

function findTargetNode (targ){
	return Nodes.find (function (n){ return n.isTarget (targ); });
}

// event handlers
jsPlumb.bind("connection", function(evt){
	var src = findNodeFrom (evt.source);
	var trg = findNodeFrom (evt.target);
	if (!src || !trg) return;

	src.setNext (trg);
	updateActive ();
});

jsPlumb.bind("connectionDetached", function(evt){
	var src = findNodeFrom (evt.source);
	if (!src) return;

	src.setNext (null);
	updateActive ();
})

// dragging events
jsPlumb.bind("connectionDrag", function(evt){
});
jsPlumb.bind("connectionDragStop", function(evt){
});
jsPlumb.bind("connectionAborted", function(evt){
	var p   = findNodeFrom (evt.source);
	var c    = findNodeFrom (evt.target);

	if (p && !c) {
		setTimeout (function (){
			p.applyConnections ({detachable: true});
		}, 5);
	}
});


// connector events
// when already connected & dragging, start a new connection
jsPlumb.bind("beforeStartDetach", function(params){
	var n = findNodeFrom (params.source);
	if (!n || !n.isEnabled () || !n.isNextEnabled()) return;

	jsPlumb.detachAllConnections(params.source, {
		fireEvent: false
	});

	return true;
});


jsPlumb.ready(function(){
	jsPlumb.setContainer("question");
});
