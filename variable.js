// 1. Use strict
// added in ES 5
// use this for Vanila Javascript

'use strict';

// 2. Variable, rw 
// let (added in ES6)
let globalName = 'global name'

{
    let name = 'dah';
    console.log(name);
    name = 'hello';
    console.log(name);
    console.log(globalName);
}

console.log(name);
console.log(globalName);

// var (don't ever use this!)
// var hoisting 
//has no block scope
{
    age = 4;
    var age;
}
console.log(age);

// 3. Constants, r 
// favor immutable data type always for a few reasons:
// - security
// - thread safety
// - reduce human mistakes
const daysInWeek = 7;
const maxNumber = 5;

// 4. Variable types
// primitive 타입, single item: number, string, boolean, null, undefined, symbol
// object 타입, box container
// function, first-class function

// symbol, create unique identifiers for objects
// 동일한 string으로 작성했어도 다른 symbol로 만들어짐
// 주어지는 string에 상관없이 고유한 식별자를 만들 때 사용됨 
const symbol1 = Symbol('id');
const symbol2 = Symbol('id');
console.log(symbol1 === symbol2); // false
// 동일한 string에 대해서는 동일한 symbol을 만들고 싶을 때
// Symbol.for 사용
const gSymbol1 = Symbol.for('id'); 
const gSymbol2 = Symbol.for('id');
console.log(gSymbol1 === gSymbol2); // true
// symbol 출력하려면 .description을 붙여 string으로 변환 후 출력해야함
console.log(`value: ${symbol1.description}, type: ${typeof symbol1}`);

// object, real-life object, data structure
const dah = { name: 'dah', age: 20 };
dah.age = 21; // 변경 가능 

// 5. Dynamic typing: dynamically typed language
let text = 'hello';
console.log(text.charAt(0)); // h
console.log(`value: ${text}, type: ${typeof text}`);
text = 1;
text = '7' + 5; // string
text = '8' / '2'; // number