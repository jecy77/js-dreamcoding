'use strict';

// Promise is a JavaScript object for asynchronous operation.
// State: pending -> fulfilled or rejected
// Producer vs Consumer

// 1. Producer
// when new Promise is created, the executor runs automatically.
const promise = new Promise((resolve, reject) => {
    // doing some heavy work (network, read files)
    console.log('doing something...');
    setTimeout(()=>{
        //resolve('dah');
        reject(new Error('no network'));
    }, 2000);
});

// 2. Consumers: then, catch, finally
promise
    .then((value) => {
        console.log(value);
    })
    .catch((error)=>{
        console.log(error);
    })
    .finally(()=>{
        console.log('finally');
    })

// 3. Promise chaining

const fetchNumber = new Promise((resolve, reject) => {
    setTimeout(()=>resolve(1), 1000);
});

fetchNumber
    .then(num => num * 2)
    .then(num => num * 3)
    .then(num => {
        return new Promise((resolve, reject) => {
            setTimeout(() => resolve(num - 1), 1000);
        });
    })
    .then(num => console.log(num));

// 4. Error Handling
const getHen = () => 
    new Promise((resolve, reject) => {
        setTimeout(() => resolve('Hen'), 1000);
    });


const getEgg = hen => 
    new Promise((resolve, reject) => {
        //setTimeout(() => resolve(`${hen} => Egg`), 1000);
        setTimeout(()=>reject(new Error(`error! ${hen}=> Egg`)), 1000);
    });

const cook = egg => 
    new Promise((resolve, reject) => {
        setTimeout(() => resolve(`${egg} => Meal`), 1000);
    });

// getHen()
//     .then(hen => getEgg(hen))
//     .then(egg => cook(egg))
//     .then(meal => console.log(meal))
//     .catch(error => console.log(error))
// 받아오는 value를 바로 함수로 전달하는 경우, 아래와 같이 축약 가능

getHen()
    .then(getEgg)
    .catch(error => {
        return 'Bread';
    })
    .then(cook)
    .then(console.log)
    .catch(console.log);