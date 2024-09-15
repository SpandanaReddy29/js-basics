                //****************** FOR ********************//
//loops through a block of code a number of times
let text = "";
for (let i = 0; i < 5; i++) {
    text += "The number is " + i + "  ";
}
console.log("FOR LOOP",text)

//**********************************************************************************************************//

                //****************** FOR IN ********************//
//loops through the properties of an object
const person = {
    fname: "Ushika",
    lname: "Reddy"
};
let fullName = "";
for (let x in person) {
    fullName += person[x]; //person[x] is used to extract value of the key
}
console.log("FOR IN LOOP",fullName);

//**********************************************************************************************************//

                //****************** FOR OF ********************//
//loops through the values of an iterable object
//It lets you loop over iterable data structures such as Arrays, Strings, Maps, NodeLists, and more
//ARRAY
const cars = ["BMW", "Volvo", "Mini"];
let car = " ";
for (let x of cars) {
    car += x;
}
console.log("FOR OF LOOP In an Array",car);
//STRING
const Fname = "UshikaReddy";
let fname = " ";
for (let x of Fname){
    fname += x + " ";
}
console.log("FOR OF LOOP In String ", fname);
//SETS
const letters = new Set(["a","b","c"]);
let forOfSets = "";
for (const x of letters) {
    forOfSets += x;
}
console.log("FOR OF LOOP In Sets ", forOfSets);

//**********************************************************************************************************//

                //****************** WHILE ********************//
//loops through a block of code while a specified condition is true
let num = "";
let i = 0;
while (i < 10) {
    num += "The number is " + i + " ";
    i++;
}
console.log("While Loop", num);

//**********************************************************************************************************//

                //****************** DO WHILE ********************//
//also loops through a block of code while a specified condition is true
//This loop will execute the code block once, before checking if the condition is true, 
//then it will repeat the loop as long as the condition is true
let number = "";
let a = 10;
do {
    number += "The number is " + a + " ";
    a++;
} while (a < 11);
console.log("Do While Loop", number);

//**********************************************************************************************************//