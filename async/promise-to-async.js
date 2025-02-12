
class UserStorage {

    loginUser = (id, password) => 
        new Promise((resolve, reject) => {
        setTimeout(()=>{
            if (
                (id === 'dah' && password === 'dah123') ||
                (id === 'jecy' && password === 'jecy123')
            ) {
                resolve(id);
            }
            else {
                reject(new Error('not found'));
            }
        }, 2000);
    });

    getRoles = (user) => 
        new Promise((resolve, reject) => {
            setTimeout(()=> {
                if (user === 'dah'){
                    resolve({ name: 'dah', role: 'admin' });
                } else {
                    reject(console.log(new Error('no access')));
                }
            }, 1000);
        });
    }
    

const userStorage = new UserStorage();

let id = prompt("아이디를 입력해주세요: ");
let password = prompt("비밀번호를 입력해주세요: ");

console.log(id);
console.log(password);

async function checkUser() {
    try{
        const user = await userStorage.loginUser(id, password);
        alert(`${user}님, 로그인 되었습니다.`);
        const admin = await userStorage.getRoles(user);
        alert(`${admin.name}님, ${admin.role} 권한을 가집니다.`);
    } catch (error) {
        console.log(error);
    }
}

checkUser();