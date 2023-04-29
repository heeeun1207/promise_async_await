// 🍬syntactic sugar🍬
async function fetchUser () {
	//do network request in 10 secs...
	return 'heen';
}

const user = fetchUser();
user.then(console.log);
console.log(user);

// 2. await ✨
function delay(ms) {
  return new Promise(resolve=> setTimeout(resolve,ms));
}
async function getStrawberry() { 
  await delay(3000);
  return '🍓';
}
async function getChocolate(){
  await delay(3000);
  return '🍫';
}
//병렬적으로 실행하기 
// async function pickFoods() {
//   const strawberryPromise = getStrawberry();
//   const chocolatePromise = getChocolate();
//   const strawberry = await strawberryPromise;
//   const chocolate = await chocolatePromise;
//   return `${strawberry}+ ${chocolate}`;
// }
//* useful Promise APIs
function pickAllFoods() {
  return Promise.all([getStrawberry(), getChocolate()]).then(foods => 
    foods.join(' + ')
    );
}
pickAllFoods().then(console.log);



//Promise
// function getBanana(){
//   return(3000)
//   .then (()=> '🍌');
// }