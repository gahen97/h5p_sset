/*
	JsPlumb class. Handles interactions with the JsPlumb library, such as connecting elements.
*/
	
var innerStroke = 'rgba(0, 0, 0, 1)';
var outerStroke = 'rgba(235, 235, 235, 1)';

const MAIN_WIDTH = 63;
const NODE_WIDTH = 10;
const NODE_HEIGHT = 10;

const LABEL_OVERLAY = [ "Label", {label: this.label, id:"PIKA-CHU", cssClass: 'length', location: 0.6}];

const ENDPOINT_SRC = {
	isSource:true,
	isTarget:false,
	connector: ["Straight"],
	endpointStyle:{ gradient : {stops:[[ 0, innerStroke ], [ 1, outerStroke ]], offset:17.5, innerRadius:3 }, radius:5},
    connectorOverlays: [
        [ "Arrow", { width:10, length:12, location:1, id:"arrow" } ],
	LABEL_OVERLAY
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

Plumbify.prototype.getEndpoint = function(){
	var e = this && this.endpoint;
	var c = e && e.endpoint && e.endpoint.canvas;
	return c;
}

Plumbify.prototype.isEnabled = function(){ return this.enabled; }

Plumbify.prototype.setDragging = function(w){ this.dragging = w; }
Plumbify.prototype.isDragging  = function(){ return this.dragging; }

Plumbify.prototype.repaint = function () {
	if (this.label && this.getLabel())
		this.getLabel().setLabel(this.label); // that's a lot of labels
}

Plumbify.prototype.reposition = function(){
	if (this.src) jsPlumb.repaint(this.src);
}

Plumbify.prototype.getLabel = function(){
	var c = this.conn;
	if (!c || !c.connector) return null;

	try {
		return c.getOverlay ("PIKA-CHU");
	} catch (err) {
		return null;
	}
}

// Find connector .... mainly for addClass, removeClass.
// JsPlumb has its own but that doesn't actually work.
Plumbify.prototype.findConnector = function () {
	var con = this.conn;	
	var connector = con && con.connector;
	var canvas    = connector && connector.canvas;
	return canvas;
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
	else   c = "";

	// set the class
	e.connectorClass = c;
	$(this.getEndpoint()).attr("class", c);

	this.classes = c;
}

// add the class. if already has classes, add it to the end - otherwise just return class
Plumbify.prototype.addClass = function (cls){
	this.setClass (function (c){
		if (!c) return cls;
		else return c.replace(cls, "") + " " + cls;
	});

	$(this.findConnector()).addClass(cls);
}

// remove the class. if does not have classes, return empty string - otherwise remove
Plumbify.prototype.removeClass = function (cls){
	this.setClass (function (c){
		if (!c) return "";
			else return c.replace(cls, "");
	});

	$(this.findConnector()).removeClass(cls);
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

	this.isDetachable = b;
	this.conn.setDetachable (b);
}

Plumbify.prototype.getSource = function(){
	return this.src;
}

Plumbify.prototype.disconnect = function(newConnector){
	if (!this.conn) return;
	if (!this.conn.connector) return;
	if (this.conn === newConnector) return;

	jsPlumb.detach (this.conn);
	this.conn = null;
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
		  LABEL_OVERLAY
	        ],
		cssClass: this.classes,
	        detachable: opts.detachable || this.isDetachable
	});

	this.fixLabel ();
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
	this.isShownEnabled = n;

	var endpoint    = this.endpoint;
	var connections = endpoint.connections;
	if (endpoint.canvas)
		controlDisabledClass (endpoint.canvas, n);
	for (var i in connections)
		showConnectionEnabled (connections[i], n);
}

Plumbify.prototype.setConnector = function (c, opts) {
	if (!opts || opts.disconnect !== false)
		this.disconnect (c);
	this.conn = c;

	this.fixLabel().setLabel (this.label);
}

Plumbify.prototype.fixLabel = function(){
	var labelOverlay = this.getLabel();
	if (!labelOverlay) return this;

	// this is kind of gross but works
	labelOverlay.canvas.style.transform = "translate(-50%, -100%)";

	return this;
}

Plumbify.prototype.setLabel = function (text) {
	if (!text) return;

	text = String(text);
	this.label = text;

	if (!this.conn || !this.conn.connector || !this.getLabel()) return;
	this.getLabel().setLabel (text);
};

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
	else{
		$(elem).addClass ("disabled");
	}
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

// say this ten times fast
function getPlumbFrom (node) {
	var pointer = node && node.getNextPtr ();
	var plumb   = pointer && pointer.getPlumb ();
	return plumb;
}

function connect(src, trg){
	if (!src) return;

	src.setNext (trg);
	updateActive ();
}

function allowDisconnect (node){
	return false;
}

// event handlers
jsPlumb.bind("connection", function(evt){
	var src = findNodeFrom (evt.source);
	var trg = findNodeFrom (evt.target);
	if (!src || !trg) return;

	var plumb = getPlumbFrom (src);
	if (plumb)
		plumb.setConnector (evt.connection);

	connect (src, trg);
});

jsPlumb.bind("connectionDetached", function(evt){
	var src = findNodeFrom (evt.source);
	if (!src) return;

	var plumb = getPlumbFrom (src);
	if (plumb) plumb.setConnector (null, {disconnect: false});

	connect (src, null);
})

// dragging events
jsPlumb.bind("connectionDrag", function(evt){
	pointerDragging = true;
	isPointering    = true;
});
jsPlumb.bind("connectionDragStop", function(evt){
	pointerDragging = false;
});
jsPlumb.bind("connectionAborted", function(evt){
	var p   = findNodeFrom (evt.source);
	var c    = findNodeFrom (evt.target);

	pointerDragging = false;

	if (allowDisconnect (p))
	{
		connect(p, null);
	}

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
