//Destructuring assignment makes it easy to assign array values and object properties to variables
//must use the same name for the variables as the corresponding object keys
//means taking out the properties

const person = {
  firstName: "Ushika",
  lastName: "Reddy",
  age: 1,
  eyeColor: "grey"
};

// Destructuring Assignment
let { firstName, age } = person;
console.log("Object Destructing", firstName, age);

//Renaming Destructed Value 
let {firstName: fname} = person;
console.log("Renaming Destructed Value", fname);

//Nested Object Destructing
const user = {
  firstName: "Ushika",
  lastName: "Reddy",
  age: 1,
  fullName: {
    fName: "Sravdana",
    lName: "Reddy"
  }
};
const {fullName: {fName}}= user;
console.log("Nested Object Destructing", fName);

//**********************************************************************************************************//
