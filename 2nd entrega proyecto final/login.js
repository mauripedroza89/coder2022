function signup(e){
    event.preventDefault();



let username = document.getElementById('username').value;
let password = document.getElementById('password').value;

let user = {
    username:username,
    password:password
};

let json = JSON.stringify(user);
localStorage.setItem(user, json);
console.log("user logged");

}

function loginFunc(e){
    event.preventDefault();

let username = document.getElementById('username').value;
let password = document.getElementById('password').value;
let result = document.getElementById('result');

let user = localStorage.getItem(username);
let data = JSON.parse(user);
console.log(data)

}