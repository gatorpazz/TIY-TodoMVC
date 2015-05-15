(function (window) {
	'use strict';

	var list = [];
	// Your starting point. Enjoy the ride!
	var newTodoInput = document.querySelector('input.new-todo');
	var deleteTask = document.querySelector('ul.todo-list');
	var deleteTaskButtons = document.querySelectorAll('button.destroy');
	var editTask = document.querySelectorAll('li');

	//deleteTask.addEventListener('mouseover', function deleteTaskController(event){
	//	console.log("This deletes stuff");
	//});
	newTodoInput.addEventListener('keyup', function addTodoController(event){
		if ( event.keyCode === 13){
			if ( newTodoInput.value !== '' ){
				var newTask = todos.addTaskToList(newTodoInput.value.trim(), todos.taskList);
				newTodoInput.value = '';
			}
		}
	}); // END addEventListener(addTodoController)

	_.forEach(deleteTaskButtons, function(element, index, deleteTaskButtons){
		element.addEventListener('click', function removeLi(){
			var deleteTaskButtons = document.querySelectorAll('button.destroy');;
			var editTask = document.querySelectorAll('li');
			editTask[index].parentNode.removeChild(editTask[index]);
		});
	});

	_.forEach(editTask, function(element, index, editTask){
		element.addEventListener('dblclick', function(){
			console.log("Edit this shit!");
		});
	});

})(window);
