//******************** CREATING OBJECT ********************//

const empInfo = {
  lName: "Ushika",
  fName: "Bommana",
  id: 12345,
  fullName: function () {
    return this.fName + " " + this.lName
  }
};
console.log(empInfo);

//**********************************************************************************************************//

            //******************** ACCESSING METHODS OF OBJECT ********************//

const fullNameOfEmp = empInfo.fullName();
console.log("Full Name", fullNameOfEmp);

//**********************************************************************************************************//

            //******************** MODIFYING PROPERTY ********************//

empInfo.id = "11";
console.log("Modifying Object", empInfo);

//**********************************************************************************************************//

            //******************** ADDING NEW PROPERTY ********************//

empInfo.nationality = "Indian";
console.log("After Adding", empInfo);

//**********************************************************************************************************//

            //******************** DELETING PROPERTY ********************//

//deletes both the value of the property and the property itself.
//delete keyword is used to delete a property of object but not a local variable
delete empInfo.id;
console.log("After Deleting", empInfo);

//**********************************************************************************************************//

            //******************** ADDING & ACCESSING NEW PROPERTY WITH SPACES ********************//
//For adding key with spaces, we should wrap it in quotations
const user = {
  fName: "Sravdana",
  age: 28,
  "Is she married": true
};
const access = user["Is she married"];
console.log("Accessing", access);

//**********************************************************************************************************//

            //******************** ADDING DYNAMICALLY KEY VALUE PAIRS ********************//
//For adding dynmically values in object the key of the object must be wrapped in []
const property = "fName";
const names = "SravanReddy";
const dynamicObject = {
  [property]: names
};
console.log("Dynamic Added Values", dynamicObject);

//**********************************************************************************************************//

            //******************** To Display the properties of an object ********************//

//Loop
let propertiesLoop = "";
for (let x in empInfo) {
  console.log("To get properties", x);
  console.log("To get properties values", empInfo[x]);
  propertiesLoop += empInfo[x] + " ";
}
console.log("Display values of properties using Loop", propertiesLoop);

//Object.values()
//returns values of properties in an array
const PropertiesOb = Object.values(empInfo);
console.log("Dispaly Properties using Object.values", PropertiesOb);

//Object.entries()
//is used generally to iterate in loops
let prop = "";
for (let [emp, value] of Object.entries(empInfo)) {
  prop += emp + ": " + value;
}
console.log("Object enteries", prop);

//JSON.stringify 
//converts object into a string
//Is used to store object in a localStorage, because we cannot store inform of object
let stringifyString = JSON.stringify(empInfo);
console.log("Stringify Object", stringifyString);
// localStorage.setItem("test", stringifyString);
// const testItem = localStorage.getItem("test");
// console.log("Test Item Stored in Local Storage", testItem);

//JSON.parse
//converts string into object
let objectFromString = JSON.parse(stringifyString);
console.log("Object", objectFromString);

//**********************************************************************************************************//

            //******************** RoadSide Coder Question ********************//

const obj = {
  a: "One",
  b: "Two",
  a: "Three"
};
console.log(obj);
//Here same keys will be replaced with latest value, and will be in same position with last updated value

//Create a func that multiplies all numeric property values of nums by 2
let nums = {
  a: 100,
  b: 200,
  title: "My nums"
}
function multiplyByTwo(obj) {
  for (let x in obj) {
    if (typeof obj[x] === "number") {
      obj[x] *= 2;
    }
  }
};
multiplyByTwo(nums);
console.log("Multiply By Two", nums);

//OutPut
const a = {};
const b = { key: "b" }; 
const c = { key: "c" }; 
a[b] = 123; // a["[object object]"] -- value get assigned in this format
a[c] = 456; // a["[object object]"] -- because JS tries to convert forcefully
console.log(a[b]);
//object cannot be converted into a key unless its a string
//a has 456 which is latest updated

const setting = {
  username: "Sravdana",
  level: 1,
  health: 90
};
const data = JSON.stringify(setting, ["level", "health"]);
//Here it will convert into string only those keys which are mentioned 
console.log(data);

const shape = {
  radius: 10,
  diameter() {
    return this.radius * 2 // here this refers to shape object
  },
  perimeter: () => 2 * Math.PI * this.radius // here this refer to window object due to arrow function
};
console.log(shape.diameter());
console.log(shape.perimeter());

//O/P based question
let cc = {greeting: "Hello"};
let dd;
dd = cc;
cc.greeting = "Hello";
console.log(dd.greeting);
//When we try to copy one object to another, we wont copy the object but we provide reference to the object
//So, when we change anything in any of the variable then that will affect both.
//Shallow Copy example

console.log({a: 1} == {a: 1});
//console.log({a: 1} === {a: 1});
//Here both condition will be false because both objects point to different m/m space

let person = { name: "Ushika" };
const members = [person];
person = null;
console.log(members);

//**********************************************************************************************************//

            //******************** Shallow Copy Deep Copy ********************//

//When one object holds the reference of another object, then its shallow copy
//When we clone completely one object into another object, is deep copy, we wont have any reference

const user1 ={
  name: "UshikaReddy",
  age: "5 months"
};
//Deep Copy can be done in 3 ways
//1)Using Object.assign
const objClone = Object.assign({}, user1);
console.log("Deep Copy using Object.assign", objClone);
//Modifying properties of clonned object wont affect the original object
objClone.name = "SravdanaReddy";
console.log("Modying Object", objClone);
//2)Using JSON.parse and JSON.stringify
const objClone2 = JSON.parse(JSON.stringify(user1));
console.log("Modying Object Using JSON.parse and JSON.stringify", objClone2);
objClone2.name = "SravdanaReddy";
console.log("Modying Object", objClone2);
//3)Destructing
const objClone3 = {...user1};
console.log("Deep Copy using Destructing", objClone3);
objClone3.name = "SravdanaReddy";
console.log("Modying Object", objClone3);

//**********************************************************************************************************//