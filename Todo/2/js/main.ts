'use strict';

const textInput = document.getElementById('text-input') as HTMLInputElement;
const todoList = document.getElementById('todo-list') as HTMLUListElement;

textInput.addEventListener('keydown', (e) => {
  const text = textInput.value.trim();

  if (text === '' || e.key !== 'Enter') {
    return;
  }

  const li = document.createElement('li') as HTMLLIElement;
  const checkbox = document.createElement('input') as HTMLInputElement;
  const span = document.createElement('span') as HTMLSpanElement;
  const button = document.createElement('button') as HTMLButtonElement;

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
  button.addEventListener('click', (e: MouseEvent) => {
    // closest()は、e.targetからさかのぼって、一番近くのli要素を取得する
    todoList.removeChild((e.target as Element).closest('li') as HTMLLIElement);
  });

  li.appendChild(checkbox);
  li.appendChild(span);
  li.appendChild(button);
  todoList.appendChild(li);

  textInput.value = '';
});
