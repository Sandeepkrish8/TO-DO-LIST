// script.js
document.addEventListener('DOMContentLoaded', () => {
    const todoForm = document.getElementById('todo-form');
    const todoInput = document.getElementById('todo-input');
    const todoList = document.getElementById('todo-list');

    todoForm.addEventListener('submit', (e) => {
        e.preventDefault();
        addTodo();
    });

    function addTodo() {
        const todoText = todoInput.value.trim();
        if (todoText === '') return;
        

        const li = document.createElement('li');
        const span = document.createElement('span');
        span.textContent = todoText;
        li.appendChild(span);

        const completeButton = document.createElement('button');
        completeButton.textContent = 'Complete';
        completeButton.addEventListener('click', () => {
            li.classList.toggle('completed');
            alert("THAT'S GOOD")
        });
        li.appendChild(completeButton);

        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.addEventListener('click', () => {
            todoList.removeChild(li);
        });
        li.appendChild(removeButton);

        todoList.appendChild(li);
        todoInput.value = '';
    }
});
