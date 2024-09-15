const fruits = ["Banana", "Orange", "Apple", "Mango"];
const colors = ["Red", "Green", "Yellow", "Pink"];
const numbers = [4, 9, 16, 25, 29];

//********* length *********//
const size = fruits.length;
console.log("length",size);

//**********************************************************************************************************//

                //******************** CONVERTING ARRAY TO STRING ********************//

//********* toString() *********//
//to convert an array to string
const newFruits = fruits.toString();
console.log("convert to string",newFruits);

//**********************************************************************************************************//

                //******************** SEARCHING ELEMENT IN AN ARRAY ********************//

//********* at() *********//
//to find the element at mentioned index
const position = fruits.at(3);
console.log("position",position);

//**********************************************************************************************************//

                //******************** JOINING AN ARRAY ********************//

//********* join() *********//
//method joins all array elements into a string
const newJoinFruits = fruits.join("*");
console.log("join",newJoinFruits);

//********* concat() *********//
//concat creates a new array by merging existing arrays, accepts n no. of arguments, also takes String as arguments
const concatFruitsColor = fruits.concat(colors);
console.log("concat two arrays",concatFruitsColor);
const concatString = colors.concat("Purple");
console.log("concate by adding element",concatString);

//**********************************************************************************************************//

                //******************** ADDING AN ELEMENT IN AN ARRAY ********************//

//********* push() *********//
//adds a new element to an array (at the end), returns new array length
const pushFruit = fruits.push("Kiwi");
console.log("push",pushFruit);

//********* splice() *********//
//used to add new items to an array, returns array with deleted items
//The 1st parameter = the position where new elements to be added (spliced in).
//The 2nd parameter =  count of elements to be removed.
//The rest of the parameters defines the new elements to be added.
const spliceFruits = fruits.splice(2, 1, "Lemon", "Kiwi");
console.log("splice",spliceFruits);

//********* toSpliced() *********//
//is a safe way to splice an array without altering the original array.
//splice() is that the new method creates a new array, keeping the original array unchanged
//while the old method altered the original array.
const months = ["Jan", "Feb", "Mar", "Apr"];
const spliced = months.toSpliced(0, 1);
console.log("toSpliced",spliced);

//**********************************************************************************************************//

                //******************** REMOVING AN ELEMENT IN AN ARRAY ********************//

//********* pop() *********//
//removes the last element from an array, returns that element
const popFruit = fruits.pop();
console.log("pop",popFruit);

//********* slice() *********//
//slices out a piece of an array into a new array
//does not remove any elements from the source array.
//1st paremeter = start position
//2nd parameter = end position
//If 2nd parameter is omitted slices out rest of array
const citrus = fruits.slice(1);
console.log("slice",citrus);
const citrusFruits = fruits.slice(1, 3);
console.log("slice with 2nd parmeter",citrusFruits);

//**********************************************************************************************************//

                //******************** SHIFTING AN ARRAY ********************//
   
//********* unshift() *********//
//adds a new element (at the beginning), and "unshifts" older elements, returns array length
const unshiftFruits = fruits.unshift("Berry");
console.log("unshift",unshiftFruits);

//********* shift() *********//
//removes the first element and shifts all other elements to a lower index, returns value shifted out
const shiftFruits = fruits.shift();
console.log("shift",shiftFruits);

//**********************************************************************************************************//

                //******************** COPYING AN ELEMENT IN AN ARRAY ********************//

//********* copyWithin() *********//
//copyWithin copies array elements to another position in an array
//overwrites the array and doesnt return length, and doesnt add items
const copyWithinFruits = fruits.copyWithin(2, 0); //Copy to index 2, all elements from index 0
console.log("copy within",copyWithinFruits);
const copyWithinColors = colors.copyWithin(2, 0, 2); //Copy to index 2, the elements from index 0 to 2
console.log("copy within",copyWithinColors);

//**********************************************************************************************************//

                //******************** FLATING AN ARRAY ********************//

//********* flat() *********//
//flat creates a new array with sub-array elements concatenated to a specified depth.
const myArr = [[1,2],[3,4],[5,6]];
const newArr = myArr.flat();
console.log("flat",newArr);

//**********************************************************************************************************//

                //******************** SEARCHING AN ELEMENT IN AN ARRAY ********************//

//********* indexOf() *********//
//method searches an array for an element value and returns its position.
//returns -1 if the item is not found
//If the item is present more than once, it returns the position of the first occurrence.
const indexOfFruits = fruits.indexOf("Mango")// Start position is not define then it will start from 0
console.log("Index of an Element",indexOfFruits);
const indexOfFruits1 = fruits.indexOf("Orange") + 1; //defines the start element position to start with
console.log("Index of an element with starting position 1",indexOfFruits1);

//********* lastIndexOf() *********//
//returns the position of last occurrence of specified element.//
//1st parameter = The item to search for
//2nd parameter = Optional, Where to start the search
//If 2nd paramter have negative values, search will start at the given position counting from end to the start
const lastIndexOfFruits = fruits.lastIndexOf("Apple");
console.log("Last Index Of",lastIndexOfFruits);
const lastIndexOfFruits1 = fruits.lastIndexOf("Orange") + 1;
console.log("Last Index of an element with ",lastIndexOfFruits1);

//********* includes() *********//
//checks whether element is present or not and returns boolean value
const includeFruits = fruits.includes("Kiwi");
console.log("Includes",includeFruits);

//********* find() *********//
//method returns first element of an array thats passes the test function
const findNumbers = numbers.find(ele => ele > 10 );
console.log("Finding an element",findNumbers);

//********* findIndex() *********//
//findIndex() method returns the index of first element of an array that passes a test function.
const findIndexNumbers = numbers.findIndex(ele => ele === 29);
console.log("Finding Index",findIndexNumbers);

//********* findLast() *********//
//starts from the end of an array, return the value of the first element that satisfies a condition.
const findLastNumbers = numbers.findLast(ele => ele > 15);
console.log("Finding element from last",findLastNumbers);

//********* findLastIndex() *********//
//method finds the index of the last element that satisfies a condition.
const findLastIndexNumbers = numbers.findLast(ele => ele > 15);
console.log("FInding Index of Element from last",findLastIndexNumbers);

//**********************************************************************************************************//

//******************** SORTING AN ARRAY ********************//

//********* reverse() *********//
//method reverses the elements in an array
const reverseFruits = fruits.reverse();
console.log("Reversing an Array",reverseFruits);

//********* sort() *********//
//method sorts an array alphabetically
const sortFruits = fruits.sort();
console.log("Sorting an Array",sortFruits);
//By combining sort() and reverse(), you can sort an array in descending order
const reverseF = fruits.sort();
const descendingOrder = reverseF.reverse();
console.log("Descending order",descendingOrder);
//By default, the sort() function sorts values as strings.
const sortNumbers = numbers.sort(function(a, b){return b - a});
console.log("Sorting values as string",sortNumbers);

//**********************************************************************************************************//
