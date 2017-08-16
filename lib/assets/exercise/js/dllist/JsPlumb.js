var strokeNext = {
	inner: 'rgba(0, 0, 0, 1)',
	outer: 'rgba(235, 235, 235, 1)'
};

var strokePrev = {
	inner : 'rgba(235, 235, 235, 1)',
	outer : 'rgba(0, 0, 0, 1)'
};

const MAIN_WIDTH = 63;
const NODE_WIDTH = 10;
const NODE_HEIGHT = 10;

const ENDPOINT_NEXT = {
	isSource:true,
	isTarget:false,
	connector: ["StateMachine"],
	endpointStyle:{ fill:"black", outlineStroke:"white", outlineWidth:1, radius: 5 },
    connectorOverlays: [
        [ "Arrow", { width:10, length:12, location:1, id:"arrow" } ]
    ]
};
const ENDPOINT_PREV = {
	isSource:true,
	isTarget:false,
	connector: ["StateMachine"],
	endpointStyle:{ fill:"white", outlineStroke:"black", outlineWidth: 1, radius: 4 },
    connectorOverlays: [
        [ "Arrow", { width:10, length:12, location:1, id:"arrow" } ]
    ]
};

const ENDPOINT_RECT = {
	isSource:false,
	isTarget:false,
	endpoint: ["Rectangle", {width: 7, height: 7, cssClass: "dummybox"}],
	endpointStyle: {fill: "white", outlineStroke: "white", outlineWidth: 0},
}

const ANCHOR_SRC = ["Center"];
const ANCHOR_RECT = [0.45, 0.4, 0, -1];

const DRAG_OPTS = {
	containment: true,
	drag: function(evt, src){ jsPlumb.repaintEverything(); }
}

function Plumbify (item, opts, type){
	this.item = item;
	this.src  = item.getElem();
	this.dragging = false;

	if (opts.hasEndpoint !== false)
		this.addEndpoint (this.src, type);

	return this;
}

Plumbify.prototype.setDragging = function(w){ this.dragging = w; }
Plumbify.prototype.isDragging  = function(){ return this.dragging; }

Plumbify.prototype.reposition = function(){
	if (this.src) jsPlumb.repaint(this.src);
}

Plumbify.prototype.addEndpoint = function(elem, type){
	var my = this;
	if (type === "rect")
		cls = ENDPOINT_RECT;
	else if (type === "next")
		cls = ENDPOINT_NEXT;
	else
		cls = ENDPOINT_PREV;

	var anchor = (type === "rect") ? ANCHOR_RECT : ANCHOR_SRC;

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
	var connects = endpoint && endpoint.connections;

	for (var i in connects){
		enableConnection (connects[i], n);
	}

	return this;
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

	if (targ === false)
		targ = null;

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
	var nxt  = Nodes.from (evt.target);

	if (!ptr) return;
	ptr.setDragging (false);

	if (!nxt)
		setTimeout (function(){
			ptr.connectTo (ptr.getNext (), {update: false});
		}, 50);
});
jsPlumb.bind("connectionAborted", function(evt){
	var ptr  = findPtrFromEvt (evt.source);
	if (!ptr) return;
	
	ptr.setDragging (false);
});


// connector events
// when already connected & dragging, start a new connection
jsPlumb.bind("beforeStartDetach", function(endpoint, source, sourceId){
	jsPlumb.detachAllConnections(endpoint.source, {
		fireEvent: false
	});

	return true;
});


jsPlumb.ready(function(){
	jsPlumb.setContainer("question");
});
