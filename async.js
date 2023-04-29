async function fetchUser () {
	//do network request in 10 secs...
	return 'heen';
}

const user = fetchUser();
user.then(console.log);
console.log(user);

// function fetchUser () {
// 	return new Promise((resolve, reject)=> {
	// do network request in 10 secs...
// 	resolve('heen');
// 	});
// }

// const user = fetchUser();
// user.then(console.log);
// console.log(user);