
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
	endpoint: ["Rectangle", {width: NODE_WIDTH, height: NODE_HEIGHT}],
	connector: ["Straight"],
	maxConnections: -1
}
const ANCHOR_SRC = ["Center"];
const ANCHOR_TARG = [[-0.025, 0.5, -1, 0]];

const DRAG_OPTS = {
	containment: true,
}

function Plumbify (item, typ, hasEndpoint){
	this.item = item;
	this.src  = item.getElem();
	this.dragging = false;

	if (hasEndpoint !== false)
		this.addEndpoint (this.src, typ);

	return this;
}

Plumbify.prototype.setDragging = function(w){ this.dragging = w; }
Plumbify.prototype.isDragging  = function(){ return this.dragging; }

Plumbify.prototype.reposition = function(){
	if (this.src) jsPlumb.repaint(this.src);
}

Plumbify.prototype.addEndpoint = function(elem, typ){
	var my = this;
	var cls = (typ === "target") ? ENDPOINT_TARG : ENDPOINT_SRC;
	var anchor = (typ === "target") ? ANCHOR_TARG : ANCHOR_SRC;

	my.endpoint = jsPlumb.addEndpoint($(elem).attr("id"), { 
	  anchors: anchor
	}, cls);
}

Plumbify.prototype.target = function(){
	jsPlumb.makeTarget (this.src, {
		endpoint: "Blank",
		anchor: [ "Perimeter", { shape:"Rectangle" } ],
		maxConnections: -1
	});
	return this;
}
Plumbify.prototype.setTargEnabled = function(n){
	jsPlumb.setTargetEnabled (this.src, n);
}
Plumbify.prototype.isTargetEnabled = function(){
	return jsPlumb.isTargetEnabled (this.src);
}

Plumbify.prototype.draggable = function(elem){
	jsPlumb.draggable ($(this.src)[0], DRAG_OPTS);
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

Plumbify.prototype.connectTo = function (elem, canDetach){
	if (!elem) return;
	this.disconnect ();

	this.conn = jsPlumb.connect({
		source: this.endpoint,
		target: elem,
		overlays: [
	        [ "Arrow", { width:10, length:12, location:1, id:"arrow" } ]
	    ],
	    detachable: canDetach
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

function findPlumb (fromSrc){
	if (!fromSrc) return null;
	fromSrc = $(fromSrc);
	return Nodes.find(function(el){ return fromSrc.is(el.getSrc()); });
}

function reloadPlumbs (){
	jsPlumb.repaintEverything();
}

// event handlers
jsPlumb.bind("connection", function(evt){
	var src = evt.source;
	var p   = findPlumb (src);

	if (!p) return;

	p.setNext (evt.target);
});
jsPlumb.bind("connectionDetached", function(evt){
	var src = evt.source;
	var p   = findPlumb (src);
	if (!p) return;
	

	p.setNext (null);
})

// dragging events
jsPlumb.bind("connectionDrag", function(evt){
	var src = evt.source;
	var p   = findPlumb (src);

	if (!p) return;
	p.setDragging(true);
});
jsPlumb.bind("connectionDragStop", function(evt){
	var src = evt.source;
	var p   = findPlumb (src);

	if (!p) return;
	p.setDragging(false);
});
jsPlumb.bind("connectionAborted", function(evt){
	var src = evt.source;
	var p   = findPlumb (src);

	if (!p) return;
	p.setDragging(false);
});

jsPlumb.ready(function(){
	jsPlumb.setContainer("question");
});
