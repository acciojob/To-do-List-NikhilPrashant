//your code here
const newTodoInput = document.getElementById('newTodoInput');
const addTodoButton = document.getElementById('addTodoButton');
const todoList = document.getElementById('todoList');

addTodoButton.addEventListener('click', function() {
	const todoNext = newTodoInput.value.trim();
	if (todoNext != '') {
		const newTodo = document.createElement('li');
		newTodo.innerText = todoNext;
		todoList.appendChild(newTodo);
		newTodoInput.value = '';
	}
});
