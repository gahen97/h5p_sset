/*
	This stores most of the functionality for dragging, sorting, and dropping into trash.
	Also handles resetting sets, which it probably shouldn't..
*/

// runs the initial dragging & sorting after page loads
$(function(){
	applyDraggingSorting();
});

function cloner(ev,ui,t, s){
	return $(t).clone ().draggable({
		connectToSortable: s,
		revert: false
	}).css("height", "15px");
}

/*
	Applies dragging & sorting for elements.
	Optional t indicates where to implement the grabbing & sorting for:
		- If given, only applies to children of t
		- Otherwise applies to every element in the DOM
*/
function applyDraggingSorting (t){
	// items already in the set
	$(".items", t).each(function(j,q){
		var el = $(q);
		el.sortable({
			containment: el.parent(), // would be the div above the ul element
			//axis: "x",
			revert: true,
		 	stop: function(ev, ui){
		 		var p = $(this).parent().parent();
		 		checkIncor(p);
		 	},
		 	connectWith: ".droppable",
			cursor: "move"
		});
	});

	// add(el)
	$(".newItem", t).each(function(){
		var btn = $(this);
		var id = btn.attr("id");
		var sortable = id.replace("new", "set");
		btn.draggable({
			connectToSortable: "#" + sortable,
			axis: "x",
	 		revert: "invalid",
			helper: function(ev,ui){
				return cloner (ev, ui, this, "#"+sortable);
			}
		})
	})

	// trash
	$(".droppable").droppable({
		drop: function(ev, ui){
			var parentRow = ui.helper.closest("tr");
			ui.helper.remove();
			checkIncor(parentRow);
		},
		tolerance: "touch",

	});

	// not sure if this is needed, but it was on the JQuery example
	$("#set,.newItem,.element", t).disableSelection();

	// connect the reset event (for when Reset Button / Row above is completed)
	$("ul.items", t).on("reset", reset);
}

/*
	Resets the next line of an sset to its default values
*/
function reset(ev, ignorePrev){
	var main = $(this).closest("tr");
	var resetId   = main.attr("id").replace("row", "reset");
	var reset     = $("#" + resetId);

	// reset.children().clone() takes every child of the reset# row and makes a clone of it
	// which can then be pushed into the real (shown) row as a sort of reset.
	var newChildren = reset.children().clone();
	main.empty().append(newChildren);

	// call this to make everything draggable, sortable, droppable
	applyDraggingSorting (newChildren);

	// mark the row as being incorrect so items can be copied from previous rows
	markAsIncorrect (main);

	// if this wasn't called from check button, test the check button
	// if it should have elements for this row
	if (!ignorePrev){
		var prevId = main.data("index") - 1;
		var prevRow = $("#row" + prevId);
		var checkBtn = $("#check", prevRow);

		// Copy the elements from the row above if & only if its already completed
		// (Fixes a bug that if reset is clicked, row above is done but not yet checked, will be checked)
		if (prevRow.data("correct") === 1)
			checkBtn.click();
	}
}
