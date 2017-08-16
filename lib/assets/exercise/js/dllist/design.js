/****
	Coding the DLList:
		- Nodes. Each should have a DOM Element.
			Next pointers can be dragged to a target. Every pointer can be dragged onto and from. Should ideally have an arrow going out and an arrow coming in.
			If placed on a target, set to next.
				This can loop, but should loop over the dummy.
			A way to get next & get data to find the final answer.
				Would check both ways:
					forwards => is same as correct answer?
					backwards => is reverse of correct answer?
		- Draggable. This'll control making the line and dragging it.
			- If a line was already created, would replace old line and make new line.
				- Doing so resets next.
		- Droppable. Control when a line is dragged onto this element and:
			- Connect the line to the element so it sticks.
			- Set the next pointer to the element if enabled.
		- Dummy. Dummy.next = head of list, Dummy.prev = tail of list.
		- Pointer. Controls a pointer, making a draggable line and the next element.
			- Disabled => When disabled, the pointer can't be used.
			- When dragging over an element, the element's next becomes enabled.
				- Can then be dragged onto.
				- Previous node would then be disabled.
			- At any time, head and tail nodes are always enabled.
		- Answer. Goes through every node head->tail, determines final answer, checks against correct answer.
			- Also checks reverse, tail->head
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