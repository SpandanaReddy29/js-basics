const fruits = ["Apple", "Orange", "Kiwi", "Mango"];
const numbers = [4, 9, 16, 25, 29];

//The indexOf() method searches an array for an element value and returns its position.
//returns -1 if the item is not found
//If the item is present more than once, it returns the position of the first occurrence.
const indexOfFruits = fruits.indexOf("Mango")// Start position is not define then it will start from 0
console.log(indexOfFruits);
const indexOfFruits1 = fruits.indexOf("Orange") + 1; //defines the start element position to start with
console.log(indexOfFruits1);

//lastIndexOf returns the position of last occurrence of specified element.
const lastIndexOfFruits = fruits.lastIndexOf("Apple");
console.log(lastIndexOfFruits);
const lastIndexOfFruits1 = fruits.lastIndexOf("Orange") + 1;
console.log(lastIndexOfFruits1);

//includes checks whether element is present or not and returns boolean value
const includeFruits = fruits.includes("Kiwi");
console.log(includeFruits);

//find method returns first element of an array thats passes the test function
const findNumbers = numbers.find(ele => ele > 10 );
console.log(findNumbers);

//findIndex() method returns the index of first element of an array that passes a test function.
const findIndexNumbers = numbers.findIndex(ele => ele === 29);
console.log(findIndexNumbers);

//findLast will start from the end of an array, return the value of the first element that satisfies a condition.
const findLastNumbers = numbers.findLast(ele => ele > 15);
console.log(findLastNumbers);

//The findLastIndex() method finds the index of the last element that satisfies a condition.
const findLastIndexNumbers = numbers.findLast(ele => ele > 15);
console.log(findLastIndexNumbers);
