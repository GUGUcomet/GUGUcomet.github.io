const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");
const TODOS_KEY = "todos"
let toDos = [];

function saveToDos(){
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}


function deleteTodo(event){
  const li = event.target.parentElement;
  li.remove();
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
  saveToDos();

}


function paintToDo(newTodo){
  const list = document.createElement("li");
  list.id = newTodo.id;
  const span = document.createElement("span");
  span.innerText = newTodo.text;
  const button = document.createElement("button");
  button.innerText ="X"
  button.addEventListener("click", deleteTodo);
  list.appendChild(span);
  list.appendChild(button);
  toDoList.appendChild(list);
}

function handleToDoSubmit(event){
  event.preventDefault();
  const newTodos = toDoInput.value 
  toDoInput.value ="";
  const newToDoObj = {
    text:newTodos,
    id:Date.now(),
  }
  toDos.push(newToDoObj);
  paintToDo(newToDoObj);
  saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);


const savedToDos = localStorage.getItem(TODOS_KEY);
if(savedToDos){ //savedToDOs !== Null
  const parsedToDos = JSON.parse(savedToDos);
  toDos = parsedToDos;
  parsedToDos.forEach(paintToDo);
}