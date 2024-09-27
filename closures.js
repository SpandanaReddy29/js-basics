//****************** Closures ********************//
//Closure is a JavaScript feature that allows a function to remember and access its lexical scope even when the function is executed outside that scope
//whenever function is created with inner function, then inner function is closure

//variable declared oustide of the function is accessible inside of function this is known as lexical scope
//Lexical scope refers to how variable names are resolved in nested functions based on where the functions are defined.
//we cannot access variable from inside of function

var username = "Ushika";
function local() {
  console.log(username)
};
local();

//closures give access to outer function scope from inner function
//is created every time when function is created
function subscribe() {
  let name = "Hi, How are you doing";
  //displayMessage is closure
  function displayMessage() {
    console.log("Closures", name)
  };
  displayMessage()
};
subscribe();

//closures have access to all scope i.e., inner, outer and global scope is called as closure scope chain
//Closure scope chain refers to the hierarchy of nested functions and their respective scopes that closures have access to.
var e = 10;
function sum(a) {
  return function (b) {
    return function (c) {
      return function (d) {
        return a + b + c + d + e
      }
    }
  }
}
const sumOfAllVariables = sum(20)(30)(40)(50);
console.log("Closure chain", sumOfAllVariables);

//**********************************************************************************************************//

//Output based questions

let count = 0;
(function printOut() {
  if (count === 0) {
    //shadowing
    let count = 1;
    console.log("Inside If", count) //o/p 1
  }
  console.log("Outside If", count) //o/p 0
})();

//write function which can allow this
//var addSix = createBase(6);
//addSix(10) -- returns 16
//addSix(21) -- returns 27
function createBase(num) {
  return function (innerNum) {
    return num + innerNum
  }
}
let addSix = createBase(6);
console.log(addSix(10));
console.log(addSix(21));

//overcoming the limitation of var scope
for (var i = o; i < 3; i++) {
  setTimeout(function log() {
    console.log(i);
  }, i * 1000)
}
//the above code will print 3, 3 times as var has global level scope, this can be overcome by two ways
//by declaring variable with datatype let and by using closure
for (var i = o; i < 3; i++) {
  function inner(i) {
    setTimeout(function log() {
      console.log(i);
    }, i * 1000)
  }
  inner(i);
}

//Closure refers to a function's ability to retain access to variables from its lexical scope even after that scope has closed,
//while scope refers to the visibility and accessibility of variables within a specific context, such as global scope, function scope, or block scope.
