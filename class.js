
// Class declarations
class Person {

    // constructor (생성자)
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    // methods
    speak() {
        console.log(`${this.name}: hello`); // backtick
    }
}

const dah = new Person('dah', 22);
console.log(dah.name);
console.log(dah.age);
dah.speak();

// Getter and Setter
class User {
    constructor(firstName, lastName, age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    // 내부적으로 저장된 _age 값 반환 
    get age() {
        return this._age;
    }

    // age 매개변수(파라미터)는 세터를 통해 내부 속성 _age에 할당
    set age(value) {
        // if (value < 0) {
        //     throw Error('age can not be negative');
        // }
        this._age = value < 0 ? 0 : value;
    }
}

const user1 = new User('Steve', 'Job', -1); // age 속성 값 설정 시 setter 호출
console.log(user1.age); // age 속성 값 요청 시 getter 호출


// Fields (public, private)
class Experiment {
    publicField = 2;
    #privateField = 0;
}

const experiment = new Experiment();
console.log(experiment.publicField); // 2
console.log(experiment.privateField); // undefined

// Static properties and methods
class Article {
    static publisher = 'Dah';
    constructor(articleNumber){
        this.articleNumber = articleNumber;
    }

    static printPublisher(){
        console.log(Article.publisher);
    }
}

const article1 = new Article(1);
const article2 = new Article(2);
console.log(Article.publisher);
// console.log(article1.publisher); -> undefined
Article.printPublisher();

//Inheritance
class Shape {
    constructor(width, height, color) {
        this.width = width;
        this.height = height;
        this.color = color;
    }

    draw() {
        console.log(`drawing ${this.color} color`);
    }

    getArea() {
        return width = this.height;
    }
}

class Rectangle extends Shape {
    draw() { // Overriding
        super.draw();
        console.log('drawing rectangle');
    }
}

// Polymorphism: 프로그램 언어의 각 요소들(상수, 변수, 식, 오브젝트, 함수, 메소드 등)이 
// 다양한 자료형(type)에 속하는 것이 허가되는 성질

class Triangle extends Shape {
    draw() { // Overriding
        super.draw();
        console.log('drawing triangle');
    }

    getArea() { // Overriding
        return (this.width * this.height) / 2;
    }
}

const rectangle = new Rectangle(20, 20, 'blue');
rectangle.draw();
const triangle = new Triangle(20, 20, 'red');
triangle.draw();

// Class checking: instanceOf
console.log(rectangle instanceof Rectangle);
console.log(triangle instanceof Rectangle);
console.log(triangle instanceof Triangle);
console.log(triangle instanceof Shape);
console.log(triangle instanceof Object);