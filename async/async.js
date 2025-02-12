// async & await
// clear style of using promise 

// 1. async

// function fetchUser() {
//     return new Promise((resolve, reject) => {
//         // do network request in 10 secs
//         resolve('dah');
//     });
// }

async function fetchUser() {
    return 'dah';
}

const user = fetchUser();
user.then(console.log);
console.log(user)

// 2. await
function delay(ms){
    // 정해진 ms가 지나면 resolve를 호출하는 promise를 리턴
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function getApple() {
    await delay(1000);
    // throw 'error';
    return 'apple';
}

async function getBanana() {
    await delay(2000);
    return 'banana';
}

// function getBanana() {
//     return delay(3000)
//     .then(()=> 'banana');
// }


/*
callback hell과 비슷한 Promise에서의 문제
function pickFruits() {
    return getApple().then(apple => {
        return getBanana().then(banana => `${Apple} + ${Banana}`);
    });
}
*/

async function pickFruits(){
    // Promise가 완료될 때까지 함수 실행을 일시 중지
    try{
        const apple = await getApple();
        const banana = await getBanana();
        return `${apple} + ${banana}`; // 3초 소요
    } catch(error) {
        console.log(error);
    }
   
}

// async의 병렬적 사용
// getApple과 getBanana가 독립적인 작업일 때 
async function pickFruits2(){
    //Promise를 즉시 반환
    const applePromise = getApple();
    const bananaPromise = getBanana();
    console.log(applePromise, bananaPromise); // Pending상태의 Promise
    const apple = await applePromise;
    const banana = await bananaPromise;
    return `${apple} + ${banana}`; // 2초 소요
}

pickFruits().then(console.log);
pickFruits2().then(console.log);

// 3. useful Promise APIs
function pickAllFruits() {
    return Promise.all([getApple(), getBanana()]).then(fruits => 
        fruits.join('+')
);
}
pickAllFruits().then(console.log);

function pickOnlyOne(){
    return Promise.race([getApple(), getBanana]);
}
pickOnlyOne().then(console.log);