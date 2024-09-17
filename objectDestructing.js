//Destructuring assignment makes it easy to assign array values and object properties to variables
//must use the same name for the variables as the corresponding object keys

const person = {
    firstName: "Ushika",
    lastName: "Reddy",
    age: 1,
    eyeColor: "grey"
  };
  
  // Destructuring Assignment
  let { firstName, age } = person;
  console.log("Object Destructing", firstName, age);