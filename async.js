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
//Callback Hell 비슷해진다 .
function pickFoods(){
  return getStrawberry().then(strawberry => {
    return getChocolate().then (chocolate => `${strawberry} + ${chocolate}`);
  });
}

pickFoods().then(console.log);


//Promise
// function getBanana(){
//   return(3000)
//   .then (()=> '🍌');
// }