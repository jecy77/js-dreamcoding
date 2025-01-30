console.log(3/2); // js에는 몫을 구하는 연산자 없음

const stringFive = '5';
const numberFive = 5;


// == loose equality, with type conversion
console.log(stringFive == numberFive);
console.log(stringFive != numberFive);

// == strict equality, no type conversion
console.log(stringFive === numberFive);
console.log(stringFive !== numberFive);

// object equality by reference
const dah1 = { name: 'dah' };
const dah2 = { name: 'dah' };
const dah3 = dah1;
console.log(dah1 == dah2); // f
console.log(dah1 === dah2); // f
console.log(dah1 === dah3); // t
