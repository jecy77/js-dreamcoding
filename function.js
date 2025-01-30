// 1. default parameters
// a=5, b=3과 같이 default 값을 지정하여 undefined되는 것을 방지할 수 있다.
function plus(a=5, b=3) {
	console.log(a+b);
}

// 2. rest parameters
// function print(...args){
//     for(let i = 0; i < args.length; i++){
//         console.log(args[i]);
//     }

//     for(const arg of args){
//         console.log(arg);
//     }

//     args.forEach((arg) => console.log(arg));
// }
// print('Hi', 'hello');


// 3. early return(early exit)
// bad case
function processUser(user) {
    if (user) {
        if (user.isActive) {
            console.log("Processing user:", user.name);
        } else {
            console.log("User is not active");
        }
    } else {
        console.log("User not found");
    }
}
// good case
function processUser(user) {
    if (!user) {
        console.log("User not found");
        return; // 함수 즉시 종료
    }
    if (!user.isActive) {
        console.log("User is not active");
        return; // 함수 즉시 종료
    }

    console.log("Processing user:", user.name);
}

//first-class function

// anonymous function 
const print = function (){
    console.log('print');
}
print();

const printAgain = print;

printAgain();


// Callback function using function expression
function Quiz(answer, printCorrect, printWrong){
    if (answer === 'answer') {
        printCorrect();
    } else {
        printWrong();
    }
}

// anonymous function
const printCorrect = function(){
    console.log('correct');
};

// named function
// better debugging in debugger's stack traces
// can be used in recursions
const printWrong = function wrong(){
    console.log('wrong');
    // wrong(); -> recursion
};

// wrong();

Quiz('answer', printCorrect, printWrong);
Quiz('not answer', printCorrect, printWrong);

// Arrow function
// always anonymous
const simplePrint = () => console.log('simplePrint');
const add = (a, b) => a + b;
const multiply = (a, b) => {
    // do something more
    return a * b;
}

// IIFE: Immediately Invoked Function Expression
(function iife(){
    console.log('IIFE');
})();

