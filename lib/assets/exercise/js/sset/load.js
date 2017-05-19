function loadExercise(){
	$.get("/sset/exercise", function(res){
		var tbody = $("tbody");
		tbody.empty().append(res);
		applyDraggingSorting();
		resize ();
	})
}
