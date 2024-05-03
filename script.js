const titleEl = document.querySelector(".title");
const todoAddEl = document.querySelector(".todo__add");
const todoListSection = document.querySelector(".todo__list");
const todoNewTaskInput = document.querySelector(".todo__new-task");
const todoNewTaskButton = document.querySelector(".todo__list--add-action");

let todoId = 0;

todoNewTaskButton.addEventListener("click", () => {
  addNewTodos();
  resetNewTaskElValue();
});

function addNewTodos(number = 1) {
  for (let i = 0; i < number; i++) {
    createNewTodoEl(i);
  }
}

function createNewTodoEl() {
  const toDoContainer = document.createElement("div");
  toDoContainer.classList.add(["row"]);
  const todoInput = document.createElement("input");
  todoInput.setAttribute("type", "checkbox");
  const todoIdFormatted = `todo_${todoId}`;
  todoInput.setAttribute("id", todoIdFormatted);
  const todoLabel = document.createElement("label");
  todoLabel.setAttribute("for", todoIdFormatted);
  todoLabel.innerText = todoNewTaskInput.value;
  todoListSection.appendChild(toDoContainer);
  toDoContainer.append(todoInput, todoLabel);
  todoId++;
}

function resetNewTaskElValue() {
  todoNewTaskInput.value = "";
}
