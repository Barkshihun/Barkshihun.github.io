const form = document.querySelector(".js-form"),
  input = form.querySelector("input"),
  greeting = document.querySelector(".js-greetings"),
  delUserName = document.querySelector(".js-delUserName"),
  userName = document.querySelector("h4");

const USER_LS = "currentUser",
  SHOWING_CN = "showing",
  NAME_SHOWING_CN = "nameShowing";

function saveName(text){
  localStorage.setItem(USER_LS, text);
}

function handleUserNameSubmit(event){
  event.preventDefault()
  const currentValue = input.value;
  paintGreeting(currentValue);
  saveName(currentValue);
}

function askForName(){
  form.classList.add(SHOWING_CN);
  delUserName.classList.remove(NAME_SHOWING_CN)
  form.addEventListener("submit", handleUserNameSubmit)
}

function paintGreeting(text) {
  form.classList.remove(SHOWING_CN);
  delUserName.classList.add(NAME_SHOWING_CN)
  greeting.classList.add(NAME_SHOWING_CN);
  greeting.innerText = `"Hello ${text}"`;
}

function loadName() {
  const currentUser = localStorage.getItem(USER_LS);
  if (currentUser === null) {
    askForName();
  } else {
    paintGreeting(currentUser);
  }
}
delUserName.addEventListener("click", handleDelUserName)

function handleDelUserName(){
  localStorage.removeItem(USER_LS);
  userName.classList.remove(NAME_SHOWING_CN)
  input.value = ""
  askForName();
}
function init() {
  loadName();
}

init();