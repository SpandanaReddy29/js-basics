                //******************** CALLBACKS ********************//
//Is a function which is passed as a parameter to another function
//callbacks are most often used with asynchronous functions
//When you pass a function as an argument, remember not to use parenthesis
//setTimeout(), you can specify a callback function to be executed on time-out
//Is used where one function has to wait for another function  

console.log("START");
function importantAction(userName) {
  setTimeout(() => {
    return `Hi ${userName}, Good Morning!`
  },1000)
};
const message = importantAction("UshikaReddy");
console.log(message);//o/p is undefined
//to avoid output as undefined for asynchronous function we use callbacks
//because when callback is used it makes code to execute after synchronous code execution is completed

function importantActionCallBack(userName, cb) {
  setTimeout(() => {
    cb(`Hi ${userName}, Good Morning!`);
  },1000)
};
function likeVideo(video, cb) {
  setTimeout(() => {
    cb(`Hi, Like this ${video} video!`);
  },1000)
};
function shareVideo(video, cb) {
  setTimeout(() => {
    cb(`Hi, Share this ${video} video!`);
  },1000)
};
//callback hell
const callBackmessage = importantActionCallBack("UshikaReddy", function (callBackmessage) 
  { console.log(callBackmessage);
  likeVideo("JavaScript", (action) => {
    console.log(action);
    shareVideo("JavaScript", (action) => {
      console.log(action)
    })
  })
});
console.log("STOP");

//CallBack Hell is nesting of callback functions 
//Is created where result of one function is dependented on another function which causes nested function
//causes difficult to read, maintain