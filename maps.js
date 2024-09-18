//A Map holds key-value pairs where the keys can be any datatype.
//A Map remembers the original insertion order of the keys
//type of map is object

                //******************** CREATING SETS ********************//

//********* new Map() *********//
//A Map can be created by passing an Array to the new Map() constructor
const fruits = new Map([
    ["apples", 500],
    ["bananas", 300],
    ["oranges", 200]
]);
console.log("Map", fruits);

//**********************************************************************************************************//

                //******************** ADDING ELEMENTS TO MAP ********************//

//********* Map.set() *********//
//used to add elements
//can also be used to change existing Map values
const vegetables = new Map();
vegetables.set("Brinjal", 500);
vegetables.set("Tomoto", 300);
vegetables.set("Chillies", 200);
console.log("Map", vegetables);
vegetables.set("Chillies", 100);
console.log("Map after changing", vegetables);

//**********************************************************************************************************//

                //******************** ACCESSING ELEMENTS OF MAP ********************//

//********* get() *********//
//method gets the value of a key in a Map
const getElements = fruits.get("apples");
console.log("Accessing Elements", getElements);

//**********************************************************************************************************//

                //******************** SIZE OF MAP ********************//

//********* size() *********//
//property returns the number of elements in a map
const sizeOfMap = vegetables.size;
console.log("Size of Map", sizeOfMap);

//**********************************************************************************************************//

                //******************** SIZE OF MAP ********************//

//********* delete() *********//
//method removes a map element
//returns boolean value
vegetables.delete("Tomoto");
console.log("Delete Element of Map", vegetables);

//********* clear() *********//
//method removes all the elements from a map
vegetables.clear();
console.log("Remove all elements", vegetables);

//**********************************************************************************************************//

                //******************** SEARECHING ELEMENTS IN MAP ********************//

//********* has() *********//
//method returns true if a key exists in a map
const answer = fruits.has("apples");
console.log("Has Method", answer);

//********* enteries() *********//
//method returns an iterator object with the [key,values] in a map
let enteriesInMap = "";
for (const x of fruits.entries()) {
    enteriesInMap += x;
}
console.log("Enteries Method", enteriesInMap);

//********* keys() *********//
//method returns an iterator object with the keys in a map
let keysInMap = "";
for (const x of fruits.keys()) {
    keysInMap += x;
}
console.log("Key Method", keysInMap);

//********* values() *********//
//method returns an iterator object with the values in a map
//method to sum the values in a map
let valuesInMap = "";
for(const x of fruits.values()){
    valuesInMap += x;
}
console.log("Values Method", valuesInMap);

//**********************************************************************************************************//
