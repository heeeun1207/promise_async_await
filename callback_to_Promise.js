class UserStorage {
  loginUser(id, password) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if ((id === 'heen' && password === 'dream') || (id === 'myhome' && password === 'quiet')) {
          resolve(id);
        } else {
          reject(new Error('not found'));
        }
      }, 2000);
    });
  }

  getRoles(user) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (user === 'heen') {
          resolve({ name: 'heen', role: 'developer' });
        } else {
          reject(new Error('no access'));
        }
      }, 1000);
    });
  }
}
const userStorage = new UserStorage();
const id = prompt('Enter your id');
const password = prompt('Enter your password');
userStorage
  .loginUser(id, password)
  .then((user) => userStorage.getRoles(user))
  .then((user) => alert(`Hello ${user.name}, you have a ${user.role} role!`))
  .catch(console.log);

// class UserStorage  {
//   loginUser(id , password , onSuccess ,onError){
// 	setTimeout(() => {
// 	if(
// 		(id === 'heen' && password === 'dream') ||
// 		(id === 'myhome' && password ==='quiet')
// 	) {
// 		onSuccess(id);
// 	} else {
// 		onError(new Error('not Found'));
// 	}
// 	},2000 );
// }

// getRoles(user, onSuccess ,onError){
// // 네트워크 통신을 하는것처럼 가상환경 만들어놓기. 
//  	setTimeout(() => {
// 		if(user === 'heen'){
// 			onSuccess({ name : 'heen' ,role :'developer'});
// 	}else {
// 			onError(new Error('no access'));
// 			}
// 		}, 1000); 
// 	}
// }
// const userStorage = new UserStorage();
// const id = prompt ('enter your id');
// const password =prompt ('enter your password');
// userStorage.loginUser(
// 	id,
// 	password,
// 	user => {
// 		userStorage.getRoles(
// 			user,
// 			userWithRole => {
// 				alert(`Hello ${userWithRole.name} , you have a ${userWithRole.role}! role`);
// 			},
// 		error => { 
// 			console.log(error);
//       }
// 		);
// 	},
// 	error => {
// 	  console.log(error);
// 	}
// );