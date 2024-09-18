//function is a block of code designed to perform a particular task
//is executed when "something" invokes it

function myFunction(a, b) {
    return a * b;
}
const x = function (a, b) {return a * b};
const z = x(4, 3);
console.log(z);

const sampleFunction = (a, b) => {
    return a + b
};
const s1 = sampleFunction(5,6);
console.log(s1);

//Hoisting is JavaScript's default behavior of moving declarations to the top of the current scope.
//Hoisting applies to variable declarations and to function declarations.
//Because of this, JavaScript functions can be called before they are declared.

const host = hositingFunction(5);
function hositingFunction(y) {
  return y * y;
};
console.log("Hosting",host);

//A self-invoking expression is invoked (started) automatically, without being called.
//Function expressions will execute automatically if the expression is followed by ().
//You cannot declaare self-invoke function.
//You have to add parentheses around the function to indicate that it is a function expression

const selfInvoking = (function () {
    let x = "Hello!!";  // I will invoke myself
})();
console.log("Self Invoking Function",selfInvoking);

//JavaScript functions can be used as values:
function values(a, b) {
    return a * b;
}
const xValues = values(4, 3);
console.log("Function as values",xValues);

//JavaScript functions can be used in expressions:
function expressions(a, b) {
    return a * b;
}
const xExpressions = expressions(4, 3) * 2;
console.log("FUnction as Expressions",xExpressions);

//The toString() method returns the function as a string:
function myFunction(a, b) {
    return a * b;
}
const text = myFunction.toString();
console.log("Function as a String",text); 