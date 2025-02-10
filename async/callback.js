'use strict';

// Synchronous callback 
function printImmediately(print) {
    print();
}

// Asynchronous callback
function printWithDelay(print, timeout) {
    setTimeout(print, timeout);
}

// JavaScript is synchronous =
// Execute the code block in order after hoisting
// hoisting: var, function declaration 
console.log('1'); // synchronous
setTimeout(()=>console.log('2'), 1000); // asynchronous
console.log('3'); // synchronous
printImmediately(()=>console.log('hello')); // synchronous
printWithDelay(()=>console.log('async callback'), 2000); // asynchronous

// Callback Hell example
class UserStorage {
    loginUser(id, password, onSuccess, onError){
        setTimeout(()=>{
            if (
                (id === 'dah' && password === 'dah123') ||
                (id === 'jecy' && password === 'jecy123')
            ) {
                onSuccess(id);
            } else {
                onError(new Error('not found'));
            }
        }, 2000);
    }

    getRoles(user, onSuccess, onError){
        setTimeout(()=> {
            if (user === 'dah'){
                onSuccess({ name: 'dah', role: 'admin' });
            } else {
                onError(new Error('no access'));
            }
        }, 1000);
    }
}


const userStorage = new UserStorage();

let id = prompt("아이디를 입력해주세요: ");
let password = prompt("비밀번호를 입력해주세요: ");

console.log(id);
console.log(password);

userStorage.loginUser(
    id,
    password,
    user => {
        userStorage.getRoles(
            user,
            userWithRole => {
                alert(`Hello ${userWithRole.name}, you have a ${userWithRole.role} role`);
            },
            error => {
                console.log(error);
            }
        );
    },
    error => {
        console.log(error);
    }
)

