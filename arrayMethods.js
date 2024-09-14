const fruits = ["Banana", "Orange", "Apple", "Mango"];
const colors = ["Red", "Green", "Yellow", "Pink"];

//length of an arrya
const size = fruits.length;
console.log("length",size);

//to convert an array to string
const newFruits = fruits.toString();
console.log("convert to string",newFruits);

//to find the element at mentioned index
const position = fruits.at(3);
console.log("position",position);

//join method joins all array elements into a string
const newJoinFruits = fruits.join("*");
console.log("join",newJoinFruits);

//pop removes the last element from an array, returns that element
const popFruit = fruits.pop();
console.log("pop",popFruit);

//push adds a new element to an array (at the end), returns new array length
const pushFruit = fruits.push("Kiwi");
console.log("push",pushFruit);

//shift removes the first element and shifts all other elements to a lower index, returns value shifted out
const shiftFruits = fruits.shift();
console.log("shift",shiftFruits);

//unshift adds a new element (at the beginning), and "unshifts" older elements, returns array length
const unshiftFruits = fruits.unshift("Berry");
console.log("unshift",unshiftFruits);

//concat creates a new array by merging existing arrays, accepts n no. of arguments, also takes String as arguments
const concatFruitsColor = fruits.concat(colors);
console.log("concat two arrays",concatFruitsColor);
const concatString = colors.concat("Purple");
console.log("concate by adding element",concatString);

//copyWithin copies array elements to another position in an array, overwrites the array and doesnt return length, and doesnt add items
const copyWithinFruits = fruits.copyWithin(2, 0); //Copy to index 2, all elements from index 0
console.log("copy within",copyWithinFruits);
const copyWithinColors = colors.copyWithin(2, 0, 2); //Copy to index 2, the elements from index 0 to 2
console.log("copy within",copyWithinColors);

//flat creates a new array with sub-array elements concatenated to a specified depth.
const myArr = [[1,2],[3,4],[5,6]];
const newArr = myArr.flat();
console.log("flat",newArr);

//splice can be used to add new items to an array, returns array with deleted items
//The first parameter (2) defines the position where new elements should be added (spliced in).
//The second parameter (1) defines how many elements should be removed.
//The rest of the parameters ("Lemon" , "Kiwi") define the new elements to be added.
const spliceFruits = fruits.splice(2, 1, "Lemon", "Kiwi");
console.log("splice",spliceFruits);

//toSpliced() as a safe way to splice an array without altering the original array.
//splice() is that the new method creates a new array, keeping the original array unchanged
//while the old method altered the original array.
// const months = ["Jan", "Feb", "Mar", "Apr"];
// const spliced = months.toSpliced(0, 1);
// console.log(spliced);

//slice slices out a piece of an array into a new array
//slice() does not remove any elements from the source array.
//If the end argument is omitted, like in the first examples, the slice() method slices out the rest of the array.
const citrus = fruits.slice(1);
console.log("slice",citrus);
const citrusFruits = fruits.slice(1, 3);
console.log("slice",citrusFruits);
