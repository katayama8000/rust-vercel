'use strict';
const textInput = document.getElementById('text-input');
const todoList = document.getElementById('todo-list');
textInput.addEventListener('keydown', (e) => {
    const text = textInput.value.trim();
    if (text === '' || e.key !== 'Enter') {
        return;
    }
    const li = document.createElement('li');
    const checkbox = document.createElement('input');
    const span = document.createElement('span');
    const button = document.createElement('button');
    li.classList.add('list-item');
    checkbox.type = 'checkbox';
    checkbox.classList.add('checkbox');
    checkbox.addEventListener('click', () => {
        span.classList.toggle('checked');
        //checkの場合、削除ボタンは非活性にする
        if (checkbox.checked) {
            button.disabled = true;
        }
    });
    span.textContent = text;
    span.classList.add('todo-text');
    button.textContent = '削除';
    button.type = 'button';
    button.classList.add('delete-button');
    button.addEventListener('click', (e) => {
        // closest()は、e.targetからさかのぼって、一番近くのli要素を取得する
        todoList.removeChild(e.target.closest('li'));
    });
    li.appendChild(checkbox);
    li.appendChild(span);
    li.appendChild(button);
    todoList.appendChild(li);
    textInput.value = '';
});
