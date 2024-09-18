//Sets is a collection of unique values .
//The values can be of any type, primitive values or objects.
//type of sets is object

                //******************** CREATING SETS ********************//

//********* new Set() *********//
//Pass an array to the new Set() constructor
const letters = new Set(["a","b","c"]);
console.log("SETS", letters);

//********* add() *********//
//Create a Set and add values
//If you add equal elements, only the first will be saved:
const words = new Set();
words.add("a");
words.add("b");
words.add("c");
console.log("SETS", words);

//Create a Set and add variables
const wordsWithVariable = new Set();
const a = "a";
const b = "b";
const c = "c";
wordsWithVariable.add(a);
wordsWithVariable.add(b);
wordsWithVariable.add(c);
console.log("SETS", wordsWithVariable);

//**********************************************************************************************************//

                //******************** SETS METHODS ********************//

//********* has() *********//
//method returns true if a specified value exists in a set
const answer = letters.has("d");
console.log("Has Method", answer);

//********* values() *********//
//method returns an Iterator object with the values in a Set
const valuesOfSets = letters.values();
console.log("Values", valuesOfSets);
let listOfValues = "";
for (const i of valuesOfSets) { //list all values
    listOfValues += i;
}
console.log("List of all values", listOfValues);

//********* keys() *********//
//method returns an Iterator object with the values in a Set
//A Set has no keys, so keys() returns the same as values()
//This makes Sets compatible with Maps
let listOfValuesWithKeys = "";
for (const x of letters.keys()) {
    listOfValuesWithKeys += x;
}
console.log("List of all values with keys", listOfValuesWithKeys);

//********* entries() *********//
//method is supposed to return a [key,value] pair from an object
//method returns an Iterator with [value,value] pairs from a Set has it doesnt have keys
let listOfValuesWithEntries = "";
for (const entry of letters.entries()) {
    listOfValuesWithEntries += entry;
}
console.log("List of all values in an object", listOfValuesWithEntries);

//**********************************************************************************************************//