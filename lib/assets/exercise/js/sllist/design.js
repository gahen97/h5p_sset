/****
	Coding the SLList:
		- Nodes. Each should have a DOM Element.
			Next pointers are draggable. When dragged, return a new line which will drag from the pointer to the mouse movement.
			If it lands on a Droppable, then this element will be set as next.
				What if a loop? Should check that it doesn't loop, if it does, throws an error => Would be some kind of screen output.
			A way to get next & get data to find the final answer.
				For example, if head->1->2->3, then answer would be 123.
		- Draggable. This'll control making the line and dragging it.
			- If a line was already created, would replace old line and make new line.
				- Doing so resets next.
		- Droppable. Control when a line is dragged onto this element and:
			- Connect the line to the element so it sticks.
			- Set the next pointer to the element if enabled.
		- Head and tail. Two pointers to the head and the tail of the list.
		- Pointer. Controls a pointer, making a draggable line and the next element.
			- Disabled => When disabled, the pointer can't be used.
			- When dragging over an element, the element's next becomes enabled.
				- Can then be dragged onto.
				- Previous node would then be disabled.
			- At any time, head and tail nodes are always enabled.
		- Answer. Goes through every node head->tail, determines final answer, checks against correct answer.
			- If correct, will move on to a new question.
		- Buttons.
			- New => Starts a new mode without any nodes.


So the design should look like:
	Nodes
		Pointer[next]
		data
		active
	Draggable
		line?
	Droppable
		onDrop
	Head
		Pointer
	Tail
		Pointer
	Pointer
		target
		elem
		active
		Draggable (elem)
	Data
		elem
		value
		Droppable (elem)
	Answer
		correctAnswer
		getAnswer ()
		check ()
	Buttons
		New
*/