const num = [2,4,6,8];

//The every() method checks if all array values pass a test.
const everyNum = num.every(ele => ele/2 === 0);
console.log(everyNum);

//The some() method checks if some array values pass a test.
const someNum = num.some(ele => ele > 6);
console.log(someNum);
