function addEle() {
    const input = document.getElementById('input1');
    const todoList = document.getElementById('todo-list');

    if (input.value.trim() !== '') {
        const container = document.createElement('div');
        container.className = 'todo-item-container';

        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.onclick = function () {
            if (checkbox.checked) {
                todoBox.classList.add('completed');
            } else {
                todoBox.classList.remove('completed');
            }
        };

        const todoBox = document.createElement('div');
        todoBox.className = 'todo-item-box';
        todoBox.textContent = input.value;

        const actions = document.createElement('div');
        actions.className = 'todo-item-actions';

        const editButton = document.createElement('button');
        editButton.className = 'edit-btn';
        editButton.textContent = 'Edit';
        editButton.onclick = function () {
            if (editButton.textContent === 'Edit') {
                const editInput = document.createElement('input');
                editInput.type = 'text';
                editInput.value = todoBox.textContent;
                editInput.className = 'edit-input';
                container.replaceChild(editInput, todoBox);
                editButton.textContent = 'Save';
            } else {
                const newValue = container.querySelector('.edit-input').value;
                todoBox.textContent = newValue;
                container.replaceChild(todoBox, container.querySelector('.edit-input'));
                editButton.textContent = 'Edit';
            }
        };

        const deleteButton = document.createElement('button');
        deleteButton.className = 'delete-btn';
        deleteButton.textContent = 'Delete';
        deleteButton.onclick = function () {
            todoList.removeChild(container);
        };

        actions.appendChild(editButton);
        actions.appendChild(deleteButton);

        container.appendChild(checkbox);
        container.appendChild(todoBox);
        container.appendChild(actions);

        todoList.appendChild(container);

        input.value = '';
    } else {
        alert('Please enter a to-do item!');
    }
}

function toggleMode() {
    document.body.classList.toggle('light-mode');
    const button = document.getElementById('mode-toggle');
    if (document.body.classList.contains('light-mode')) {
        button.textContent = 'Switch to Dark Mode';
    } else {
        button.textContent = 'Switch to Light Mode';
    }
}