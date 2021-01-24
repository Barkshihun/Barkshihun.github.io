const clockContainer = document.querySelector(".js-clock"),
    clockTitle = clockContainer.querySelector("h1");
function getTime(){
    const date = new Date();
    const minitues = date.getMinutes();
    const hours = date.getHours();
    const seconds = date.getSeconds();
    clockTitle.innerText = `${hours < 10 ? `0${hours}` : hours}:${
    minitues < 10 ? `0${minitues}` : minitues}:${
    seconds < 10 ? `0${seconds}` : seconds}`;
}
function init(){
    getTime();
    setInterval(getTime, 1000);
}
init();