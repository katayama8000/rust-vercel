interface TodoModel {
  id: number;
  title: string;
  isCompleted: boolean;
}

class Todo {
  public todo: TodoModel[] = [];

  public addTodo(title: string) {
    this.todo.push({ id: this.todo.length + 1, title, isCompleted: false });
    this.render();
  }

  public toggleTodo(id: number) {
    this.todo = this.todo.map((todo) => {
      if (todo.id === id) {
        todo.isCompleted = !todo.isCompleted;
      }
      return todo;
    });
    this.render();
  }

  public deleteTodo(id: number) {
    this.todo = this.todo.filter((todo) => todo.id !== id);
    this.render();
  }

  public render() {
    const todoList = document.getElementById('todo-list');
    const html = this.todo.map((todo) => {
      return `
      <li id="${todo.id}">
      <input type="checkbox" ${
        todo.isCompleted ? 'checked' : ''
      } onClick="toggleTodo(${todo.id})">
      <span style="text-decoration: ${
        todo.isCompleted ? 'line-through' : 'none'
      }">${todo.title}</span>
      <button class="todo-delete" onClick=deleteTodo(${todo.id})>X</button></li>
      `;
    });
    if (todoList) todoList.innerHTML = html.join('');
  }
}

const todo = new Todo();
console.log(todo);

const toggleTodo = (id: number) => {
  todo.toggleTodo(id);
};

const deleteTodo = (id: number) => {
  todo.deleteTodo(id);
};

onsubmit = (event: SubmitEvent) => {
  event.preventDefault();
  const todoInput = document.getElementById('todo-input') as HTMLInputElement;
  if (!todoInput.value) {
    alert('Please enter a todo');
    return;
  }
  todo.addTodo(todoInput.value);
  todoInput.value = '';
};

const check = () => {
  console.log(todo.todo);
};
