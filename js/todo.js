const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

let toDos = [];

function saveToDos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
} 

function deleteToDo(event) {
    const li = event.target.parentElement;
    li.remove();
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
    saveToDos(); //필터 통해 새 어레이 만들었으므로 새로 저장
}

function paintToDo(newToDo) {
    const li = document.createElement("li");
    const span = document.createElement("span");
    li.id = newToDo.id;
    span.innerText = newToDo.text;
    const btn = document.createElement("button");
    btn.innerText = "❌";
    btn.addEventListener("click", deleteToDo);
    li.appendChild(span);
    li.appendChild(btn);
    toDoList.appendChild(li);
    saveToDos();
}

function handleToDoSubmit(event) {
    event.preventDefault();
    const newToDo = toDoInput.value;
    toDoInput.value = "";
    const newToDoObj = {
        text: newToDo,
        id: Date.now()
    }
    toDos.push(newToDoObj);
    paintToDo(newToDoObj);
    saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);


const savedToDos = localStorage.getItem(TODOS_KEY);

if(savedToDos !==null) {
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos; //toDos가 비어있는 array일때만 아이템을 집어넣는 것이 아니라, 스토리지에 이미 저장되어있던 예전 기록이 array에 들어와 있는 상태에서 새 기록이 들어올 수 있게 함
    parsedToDos.forEach(paintToDo);
}