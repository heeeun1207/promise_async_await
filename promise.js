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
});
