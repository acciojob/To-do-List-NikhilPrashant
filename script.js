//your code here
const newTodoInput = document.getElementById('newTodoInput');
const addTodoBtn = document.getElementById('addTodoBtn');
const todoList = document.getElementById('todoList');

addTodoBtn.addEventListener('click', function() {
	const todoNext = newTodoInput.value.trim();
	if (todoNext != '') {
		const newTodo = document.createElement('li');
		newTodo.innerText = todoNext;
		todoList.appendChild(newTodo);
		newTodoInput.value = '';
	}
});
