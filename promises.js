//A Promise is an Object that links Producing code and Consuming code


const promise = new Promise((resolve, reject) => {
    resolve(); 
    // reject();
});
promise
    .then(() => console.log('Finally Completed'))
    .then(() => console.log('I ran'))
    .catch(() => console.log('Oh No'))

//asyn code to call resolve or reject
const p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve();
    }, 3000);
})

const p3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject();
    }, 3000);
})

// async makes a function return a Promise, await makes a function wait for a Promise
async function greet() {
    let p4 = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('HELLO, HOW ARE YOU!')
        }, 2000)
    });
    let output = await p4;
    console.log(output)
};
const asyncAwait = greet();
console.log(asyncAwait);
