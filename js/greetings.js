
const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username); //이름을 저장하는 장소
    paintGreetings(username);
}

function paintGreetings(username) {
     // greeting.innerText="Hello "+USERNAME_KEY;
    greeting.innerText = `Hello ${username} 😊`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}


const savedUsername = localStorage.getItem(USERNAME_KEY);
//local storage가 정보를 저장하고 불러오고 삭제하는 역할

if (savedUsername === null) {
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
    } else {
    paintGreetings(savedUsername);
    }