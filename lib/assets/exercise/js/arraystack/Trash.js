function Trash(){
	
}

Trash.add = function (e){
	$(e).each(function(index,ele){
		Draggable(ele);
	})
}