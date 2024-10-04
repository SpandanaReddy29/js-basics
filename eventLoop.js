
//The Event Loop in JavaScript is a mechanism responsible for managing asynchronous behavior in a single-threaded environment
//It acts like a traffic controller, ensuring tasks are executed in an orderly manner by processing pending tasks in queues (microtasks and macrotasks)
//Call Stack has all the synchronous task
//Task Queue has all the asynchronous task, all web APIs goes here and after getting result it goes in Call Stack
//Microtask Queue manages more prioty task like promises and then added to the Call Stack
//Event loop is responsible to handle which needs to go under  Call Stack, Task Queue

//The event loop is necessary to handle asynchronous operations in JavaScript effectively.
//It manages task queues and microtask queues to ensure that tasks are executed efficiently without blocking the main thread.

console.log("START");

setTimeout(() => {
  console.log("INSIDE SET-TIMEOUT")
}, 0); //TASK QUEUE

Promise.resolve().then(() => {
  console.log("INSIDE PROMISE")
}); //MICROTASK QUEUE

console.log("END");

//OUTPUT
//START
//END
//INSIDE PROMISE
//INSIDE SET-TIMEOUT