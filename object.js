// Objects
// one of the Javascript's data types.
// a collection of related data and/or functionality.
// Nearly all objects in JavaScript are instances of Object.
// object = { key : value };

// 1. Literals and properties
const obj1 = {}; // 'object literal' syntax
const obj2 = new Object(); // 'object constructor' syntax

function print(person) {
    console.log(person.name);
    console.log(person.age);
}

const dah = {name: 'dah', age: 22};
print(dah);

// with JavaScript magic (dynamically typed language)
// can add properties later 
dah.hasJob = true;
console.log(dah.hasJob);

// can delete properties later 
delete dah.hasJob;
console.log(dah.hasJob);


// 2. Computed properties
// key should be always string
console.log(dah.name); // dot notation
console.log(dah['name']); // bracket notation - computed properties
dah['hasJob'] = true;
console.log(dah.hasJob);

function printValue(obj, key) {
    // console.log(obj.key); // fail(obj의 key라는 속성을 찾음)
    console.log(obj[key]);
}
printValue(dah, 'name');
printValue(dah, 'age');

// 3. Property value shorthand
const person1 = { name: 'Bob', age: 2};
const person2 = { name: 'Steve', age: 3};
const person3 = { name: 'Dave', age: 4};
const person4 = makePerson('dah', 22);
console.log(person4);

function makePerson(name, age){
    return{
        // name: name,
        name, // property value shorthand 
        // age: age,
        age, // property value shorthand 
    }
}


// 4. Constructor Function
const person5 = new Person('Person', 5);
console.log(person5);

function Person(name, age) {
    // this = {};
    this.name = name;
    this.age = age;
    // return this;
}

// 5. in operator: property existence check (key in obj)
console.log('name' in dah);
console.log('age' in dah);
console.log('random' in dah);
console.log(dah.random);

// 6. for...in vs for...of
// for (key in obj)
console.clear();
for (key in dah) {
    console.log(key);
    console.log(dah[key]);
}

// for (value of iterable)
const array = [1, 2, 4, 5];
for(value of array){
    console.log(value);
}

// 7. Fun cloning
// Object.assgin(target, [obj1, obj2, obj3...])
const user = {name: 'Sera', age: '22'};
const user2 = user;
user2.name = 'dah'
console.log(user);

// old way
const user3 = {};
for (key in user) {
    user3[key] = user[key];
}
console.clear();
console.log(user3);


// const user4 = {};
// Object.assign(user4, user);
const user4 = Object.assign({}, user);
console.log(user4);

// another example
const fruit1 = { name: 'blueberry', color: 'red' };
const fruit2 = { color: 'blue', size: 'small' };
const mixed = Object.assign({}, fruit1, fruit2);
console.log(mixed);