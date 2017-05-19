/*
	Contains code for dropping
*/

const DROP_OPTS = {
	classes: {
	  "ui-droppable-hover": "hover"
    }
}

function Droppable (elem, list){
	if (!list){
		list = DOM.listFrom (DOM.rowFrom (elem));
	}

	this.list = list;
	this.elem = elem;
	var self = this;

	// make it droppable
	elem = $(elem);
	elem.droppable(DROP_OPTS).on("drop", function(e,u){ self.dropped(e, u, self); });

	if (elem == list) // in this case, should check for it to go over & contain it
		elem.on("over", this.over);
}

Droppable.prototype.dropped = function (evt, ui, droppable){
	var elem     = Droppers.from (droppable.elem);
	var con      = elem.getConnect();
	var dropped  = ui.helper;
	var dropEle  = Elements.from (dropped);

	// check if the dropped item is trash can
	if (dropped.hasClass('trash')){
		if (con){
			con.remove();
			elem.removeConnect();
		}
	}else{
		// it wasn't... we're good here
		var newDiv   = Draggable.clone (dropped)
		var list     = droppable.list;

		if (con && con != dropped)
			con.remove();

		if (dropEle && !dropEle.isClone()){
			dropped.remove();
			Elements.remove (dropEle);
		}

		elem.connectTo (newDiv);
		
		newDiv.appendTo(list.parent()).css('position', 'relative');

		DOM.pushOnTop(newDiv, droppable.elem);

		// make it so it clones!
		Draggable.setToClone(newDiv).setContainment(newDiv, list);
	}

	// and reposition all the elements that we have so they look nice
	Droppers.reposition();
}

Droppable.prototype.over = function(evt, ui){
	Draggable.setContainment(ui.helper, this.list);
}