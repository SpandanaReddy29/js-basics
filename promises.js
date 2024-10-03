                //******************** PROMISES ********************//
//synchronous programming executes code in a sequential manner,
//asynchronous programming allows a program to perform other tasks while waiting for a long-running task to finish

//To overcome callback hell
//To handle asynchronous code
//Is an object, that represnts eventual completion or failure of async operation and its resulting value
//represents the upcoming completion or failure of an asyn event and its resulting value

const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    const result = true;
    if(result) resolve("Hi UshikaReddy, Good morning");
    else reject(new Error("Good Afternoon"));
  }, 1000);
});
//execution of promise
promise
  .then((response) => {console.log(response)})
  .catch((error) => {console.log(error)})

//**********************************************************************************************************//

                //******************** To Avoid Callback Hell ********************//
function importantAction(userName) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`Hi ${userName}, Good Morning!`);
    },5000)
  })
};
function likeVideo(video) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`Hi, Like this ${video} video!`);
    },100)
  });
};
function shareVideo(video) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`Hi, Share this ${video} video!`);
    },200)
  });
};

importantAction("UshikaReddy")
  .then((resp) => {
    console.log(resp);
    likeVideo("JavaScript").then((resp) => {console.log(resp)
      shareVideo("JavaScript").then((resp) => {console.log(resp)})
    })
  })
  .catch((err) => {console.log(err)});

//**********************************************************************************************************//

                //******************** PROMISES CHAINING ********************//
//we may initialize another promise inside our .then() method and accordingly we may execute our results. 
//The function inside then captures the value returned by the previous promise
importantAction("Sravdana")
  .then((resp) => {
    console.log(resp);
    return likeVideo("JS")
  })
  .then((resp) => {
    console.log(resp);
    return shareVideo("JS")
  })
  .then((resp) => {
    console.log(resp)
  })
  .catch((err) => {console.log(err)});

//**********************************************************************************************************//

                //******************** PROMISES COMBINATOR ********************//
// To avoid promise chaining we have promise combinator

//******************** promise.all ********************//
//runs all the promise in parallel and returns the fulfilled promises in an array
//If one promise fails then all the promise fails
//It takes an array
Promise.all([
  importantAction("Sravan"),
  likeVideo("NODE JS"),
  shareVideo("NODE JS")
]).then((resp) => {
  console.log(resp)
}).catch((err) => {
  console.log(err)
});
//******************** promise.allSettled ********************//
//Works same as promise.all
//Will returns all the promise regardless of fullfilled or rejected
Promise.allSettled([
  importantAction("Spandana"),
  likeVideo("React"),
  shareVideo("React")
]).then((resp) => {
  console.log(resp)
}).catch((err) => {
  console.log(err)
});
//******************** promise.race ********************//
//It will give only promise which gets resolved or rejected first
Promise.race([
  importantAction("Sravan"),
  likeVideo("NODE JS"),
  shareVideo("NODE JS")
]).then((resp) => {
  console.log(resp)
}).catch((err) => {
  console.log(err)
});
//******************** promise.any ********************//
//Similar like promise.race
//It returns first fullfilled promise and ignores all rejected promise
//If all the promises are failed, then it goes catch block
Promise.any([
  importantAction("Chittithali"),
  likeVideo("CSS"),
  shareVideo("CSS")
]).then((resp) => {
  console.log(resp)
}).catch((err) => {
  console.log(err)
});

//**********************************************************************************************************//

                //******************** ASYNC AWAIT ********************//
//async makes a function return a Promise
//await makes a function to wait for a Promise to resolve or reject
//makes promises the execute one after the other
//to handle error we use try catch() block
const result = async () => {
  try {
    const message1 = await importantAction("ASYNC AND AWAIT EXAMPLE");
    const message2 = await likeVideo("HTML");
    const message3 = await shareVideo("HTML");
    console.log({message1, message2, message3});
  } catch(err) {
    console.log(err)
  }
}
result();

//**********************************************************************************************************//
