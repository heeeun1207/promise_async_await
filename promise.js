//callback : result / reject 
const promise = new Promise((resolve,reject)=>{
	//doing some heavy work ( => networt, read file )
console.log('doing something...')
setTimeout(() => {
	resolve('heeun');
	//reject(new Error('no network'));
	},2000);
});
//2.Consumers
promise
.then(value => { 
	console.log(value);
})
.catch(error => {
	console.log(error);
})
.finally(()=> { 
	console.log('finally');
})
// 3. Promise chaining
const fetchNumber = new Promise((resolve, reject)=>{
 setTimeout(() => resolve(1), 1000);
})
fetchNumber
.then(num => num * 2 )
.then(num => num * 3 )
.then(num => {
	return new Promise((resolve, reject ) => {
		setTimeout(()=> resolve(num -1), 1000)
	})
})
.then(num => console.log(num));


//4. Error Handling 
const getHen = () =>
new Promise ((resolve , reject) => {
	setTimeout(() => resolve('🐥'), 1000);
});
const getEgg = hen =>
new Promise((resolve , reject ) => {
	setTimeout(() => reject(new Error(`error! ${hen} => 🥚`)),1000);
});
const cook = egg => 
new Promise((resolve ,reject ) => {
	setTimeout(() => resolve(`${egg} => 🍳`), 1000);
});

// getHen()
// .then(hen =>getEgg(hen))
// .then(egg =>cook(egg))
// .then(meal =>console.log(meal));

//다른 함수로 바로 호출하는경우 생략 가능
getHen() // 
.then(getEgg)
.catch(error => {
  return '🥐';
})  //.catch 처리로 요리(Promise chaining )가 완성되게 할 수 있다.  
.then(cook)
.then(console.log)
.catch(console.log);

