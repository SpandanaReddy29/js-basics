const fruits = ["Banana", "Orange", "Apple", "Mango"];
const months = ["Jan", "Feb", "Mar", "Apr"];
const numbers = [40, 100, 1, 5, 25, 10];

//reverse() method reverses the elements in an array
const reverseFruits = fruits.reverse();
console.log(reverseFruits);

//sort() method sorts an array alphabetically
const sortFruits = fruits.sort();
console.log(sortFruits);

//By combining sort() and reverse(), you can sort an array in descending order
const reverseF = fruits.sort();
const descendingOrder = reverseF.reverse();
console.log(descendingOrder);

//By default, the sort() function sorts values as strings.
const sortNumbers = numbers.sort(function(a, b){return b - a});
console.log(sortNumbers);