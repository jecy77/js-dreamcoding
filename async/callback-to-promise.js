
class UserStorage {
    loginUser(id, password, onSuccess, onError){
        setTimeout(()=>{
            if (
                (id === 'dah' && password === 'dah123') ||
                (id === 'jecy' && password === 'jecy123')
            ) {
                onSuccess(id);
            } else {
                onError(new Error('not found'));
            }
        }, 2000);
    }

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

userStorage.loginUser(
    id,
    password,
)
    .then(user => {
        alert(`${user}님, 로그인 되었습니다.`)
        return user;
    })
    .then(userStorage.getRoles)
    .then(user => {
        alert(`${user.name}님, ${user.role} 권한을 가집니다.`)
        return user;
    })
    .then(console.log)
    .catch(console.log);