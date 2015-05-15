(function (window) {
	'use strict';

	var list = [ ];

	console.log(list);

	todos.addTaskToList("Remember the milk", list);

	console.log(list);
	// Your starting point. Enjoy the ride!
	var newTodoInput = document.querySelector('input.new-todo');
	var deleteTask = document.querySelector('ul.todo-list');
	var deleteTask2 = document.querySelector('button.destroy');

	deleteTask.addEventListener('mouseover', function deleteTaskController(event){
		console.log("This deletes stuff");
	});

	deleteTask2.addEventListener('click', function(event){
		console.log("Delete crap")
	});

})(window);
