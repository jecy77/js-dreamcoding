const arr1 = new Array();
const fruits = ["apple", "banana"];

console.log(fruits);

// a. for
for (let i = 0; i < fruits.length; i++){
    console.log(fruits[i]);
}

// b. for of
for (let fruit of fruits){
    console.log(fruit);
}

// c. forEach
fruits.forEach(function(fruit, index, array){
    console.log(fruit, index, array);
})
fruits.forEach((fruit, index) => console.log(fruit, index));

// 1. Addition, detection, copy
// push: add an item to the end
fruits.push('strawberry', 'peach');
console.log(fruits);

// pop: remove an item from the end
fruits.pop();
fruits.pop();
console.log(fruits);

// unshift: add an item to the beginning
fruits.unshift('strawberry', 'lemon');
console.log(fruits);

// shift: remove an item from the beginning
fruits.shift();
fruits.shift();
console.log(fruits);

// note!! shift, unshift are slower than pop, push
// splice: remove an item by index position
fruits.push('strawberry', 'peach', 'lemon');
console.log(fruits);
// fruits.splice(1);
fruits.splice(1, 1);
console.log(fruits);
fruits.splice(1, 1, 'grape', 'watermelon'); // add grape and watermelon
console.log(fruits);

// combine two arrays
const fruits2 = ['pear', 'coconut'];
const newFruits = fruits.concat(fruits2);
console.log(newFruits);

// 2. Searching
// indexOf: find the index
console.clear();
console.log(fruits);
console.log(fruits.indexOf('apple'));
console.log(fruits.indexOf('watermelon'));
console.log(fruits.indexOf('coconut')); // -1

// includes
console.log(fruits.includes('watermelon'));
console.log(fruits.includes('coconut'));

//lastIndexOf
console.clear();
fruits.push('apple');
console.log(fruits); // ['apple', 'grape', 'watermelon', 'peach', 'lemon', 'apple']
console.log(fruits.indexOf('apple')); // 0
console.log(fruits.lastIndexOf('apple')); // 5


// Quiz1
console.clear();
const fruits3 = ['apple', 'banana', 'orange'];

console.log(fruits3.toString()); // join() 도 가능

// Quiz2
console.clear();
const fruits4 = '🍎, 🥝, 🍌, 🍒';

const newFruit4 = fruits4.split(',');
console.log(newFruit4);

// Quiz3
console.clear();
const array = [1, 2, 3, 4, 5];

console.log(array.reverse());
console.log(array);

// Quiz4 
console.clear();
const array2 = [1, 2, 3, 4, 5];

// 오답 1
// array2.shift();
// array2.shift();

// 오답 2
// const result = array2.splice(0,2)

// 정답
const result = array.slice(2, 5);
console.log(result); // [3, 4, 5]
console.log(array); // [1, 2, 3, 4, 5]

// Quiz5-10
class Student {
    constructor(name, age, enrolled, score) {
      this.name = name;
      this.age = age;
      this.enrolled = enrolled;
      this.score = score;
    }
  }
  const students = [
    new Student('A', 29, true, 45),
    new Student('B', 28, false, 80),
    new Student('C', 30, true, 90),
    new Student('D', 40, false, 66),
    new Student('E', 18, true, 88),
  ];

// Quiz5 
console.clear();

const goodStudent = students.filter((student)=> student.score === 90 );
// find() 도 가능 
console.log(goodStudent);

// Quiz6
console.clear();

const enrolledStudents = students.filter((student) => student.enrolled === true);
console.log(enrolledStudents);

// Quiz7
console.clear();

const studentScores = students.map((student)=>student.score);
console.log(studentScores);

// Quiz8
console.clear();
console.log(students.some((student)=>student.score < 50));

// Quiz9
console.clear();

const sum = studentScores.reduce((acc, cur)=> acc + cur);
console.log(sum/studentScores.length);

const sum2 = students.reduce((prev, cur)=>prev + cur.score, 0);
console.log(sum2/students.length);

// Quiz10
console.clear();

const result2 = students
    .map((student)=>student.score)
    // .sort() 문자열 기준 정렬
    .sort((a, b)=>a - b) // 숫자 크기 비교 
    .join(", ");
console.log(result2);