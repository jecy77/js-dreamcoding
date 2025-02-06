// JSON
// JavaScript Object Notation

// 1. Object to JSON
// stringify(obj)
let json = JSON.stringify(true);
console.log(json);

json = JSON.stringify(['apple', 'banana']);
console.log(json);

const rabbit = {
    name: 'tori',
    color: 'white',
    size: null,
    birthDate: new Date(),
    // symbol: Symbol('id'), // javascript에만 있는 특별한 data는 json 형식에 포함되지 않음
    // 함수는 object에 있는 데이터가 아니므로 json 형식에 포함되지 않음
    jump: () => { 
        console.log(`${name} can jump!`);
    },
}

json = JSON.stringify(rabbit);
console.log(json);

json = JSON.stringify(rabbit, ['name', 'color', 'size']);
console.log(json);

json = JSON.stringify(rabbit, (key, value) => {
    console.log(`key: ${key}, value: ${value}`);
    return key === 'name' ? 'dah' : value;
});
console.log(json);

// 2. JSON to Object 
// parse(json)
console.clear();
json = JSON.stringify(rabbit);
console.log(json);

const obj = JSON.parse(json);
console.log(obj);
rabbit.jump();
// obj.jump(); // 함수는 serialize 될 때 포함이 안되므로 obj에 해당 기능이 없음

console.log(rabbit.birthDate.getDate());
// console.log(obj.birthDate.getDate()); // obj의 birthDate는 string이므로 실행 X

const obj2 = JSON.parse(json, (key, value) => {
    console.log(`key: ${key}, value: ${value}`);
    return key === 'birthDate' ? new Date(value) : value;
});
console.log(obj2);
console.log(obj2.birthDate.getDate());
