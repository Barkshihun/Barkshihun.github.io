const toDoForm = document.querySelector(".js-toDoForm"),
    toDoInput = toDoForm.querySelector("input"),
    toDoList = document.querySelector(".js-toDoList");

const TODO_LS = "toDos";

let toDos = []
let idNumbers = 1;

function deleteToDo(event){
    const btn = event.target
    const li = btn.parentNode
    toDoList.removeChild(li)
    const cleanToDo = toDos.filter(function(toDo){
        return toDo.id !== parseInt(li.id)
    });
    toDos = cleanToDo
    saveToDos();
}

function saveToDos(){
    localStorage.setItem(TODO_LS, JSON.stringify(toDos));
}

function paintToDo(text){
    const li = document.createElement("li");
    const delBtn = document.createElement("button");
    const span = document.createElement("span");
    const newId = idNumbers
    idNumbers += 1
    delBtn.innerText = "❌";
    delBtn.addEventListener("click", deleteToDo)
    span.innerText = ` ${text}`;
    li.appendChild(delBtn);
    li.appendChild(span);
    li.id = newId;
    delBtn.className = "btn"
    toDoList.appendChild(li);
    const toDoObj = {
        text: text,
        id: newId
    };
    toDos.push(toDoObj);
    saveToDos();
}


function handleSubmit(event){
    event.preventDefault();
    const currentValue = toDoInput.value;
    paintToDo(currentValue);
    toDoInput.value = "";
}

function loadToDos(){
    const loadedToDos = localStorage.getItem(TODO_LS);
    if(loadedToDos !== null){
        const parsedToDos = JSON.parse(loadedToDos);
        parsedToDos.forEach(function(toDo){
            paintToDo(toDo.text)
        })
    }
}
function init(){
    loadToDos();
    toDoForm.addEventListener("submit", handleSubmit)
}
init();