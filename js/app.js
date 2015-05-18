(function (window) {
	'use strict';

	var list = [];
	// Your starting point. Enjoy the ride!
	var newTodoInput = document.querySelector('input.new-todo');
	var todoList = document.querySelector('ul.todo-list');
	var editTask = document.querySelectorAll('li');
	var templateContent = document.querySelector('template').content;

	//deleteTask.addEventListener('mouseover', function deleteTaskController(event){
	//	console.log("This deletes stuff");
	//});
	newTodoInput.addEventListener('keyup', function addTodoController(event){
		if ( event.keyCode === 13){
			if ( newTodoInput.value !== '' ){
				todos.addTaskToList(newTodoInput.value.trim(), todos.taskList);
				var clone = templateContent.cloneNode(true);
				clone.querySelector("label").appendChild(document.createTextNode(newTodoInput.value.trim()));
				clone.querySelector("input.edit").value = document.createTextNode(newTodoInput.value.trim());
				todoList.appendChild(clone);
				newTodoInput.value = '';
				deletingTasks();
				editingTasks();
				completingTasks();
			}
		}
	}); // END addEventListener(addTodoController)
	function deletingTasks() {
		var deleteTaskButtons = document.querySelectorAll('button.destroy');
		_.last(deleteTaskButtons).addEventListener('click', function removeLi(){
			//console.log(event.target.parentNode.parentNode.parentNode);
			event.target.parentNode.parentNode.parentNode.removeChild(event.target.parentNode.parentNode);
			todos.deleteTask(_.indexOf(deleteTaskButtons, event.target), todos.taskList);
		});
	}

	function editingTasks(){
		var editTask = document.querySelectorAll('li.task');
		var editInput = document.querySelectorAll('input.edit');
		_.last(editTask).addEventListener('dblclick', function taskEdit(){
			//console.log("Edit this shit!");
			event.target.parentNode.parentNode.classList.toggle('editing');
		});
		document.addEventListener('click', function exitEdit(){
			_.forEach(editTask, function(index){
				index.classList.remove('editing');
			})
		})
	}

	function completingTasks(){
		var completeTask = document.querySelectorAll('input.toggle');
		_.last(completeTask).addEventListener('click', function(){
			event.target.parentNode.parentNode.classList.toggle('completed')
		})
	}


})(window);
/*editInput.addEventListener('keyup', function inputExit(){
	if ( event.keycode === 13 ){
		if ( editInput.value !== '' ){
			console.log("okay guy!");
		}
		else {
			event.target.parentNode.parentNode.parentNode.removeChild(event.target.parentNode.parentNode);
		}
	}*/
