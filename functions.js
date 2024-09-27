                //****************** Function ********************//
//function is a block of code designed to perform a particular task
//is executed when "something" invokes it

function myFunction(a, b) {
    return a * b;
}
myFunction();

//**********************************************************************************************************//

                //****************** Function Expression ********************//
//When a function is stored inside a variable
//Function expression has anonymous function    
const x = function (a, b) {return a * b};
const z = x(4, 3);
console.log(z);

const sampleFunction = (a, b) => {
    return a + b
};
const s1 = sampleFunction(5,6);
console.log(s1);

//**********************************************************************************************************//

                //****************** First Class Function ********************//
//Functions can be treated as variable, there functions are called first class function
//Functions can be passed into another function,  used, manipulated and return those functions
//basically its similar to variable, whatever variable can do function can also do
function square(a) {
    return a * a;
};
function displaySquare(fn){
    console.log("Square is" + fn(5))
};
displaySquare(square);

//**********************************************************************************************************//

                //****************** Function Scope ********************//
//Global Scope
var num1 = 20, num2 = 30, name = "Ushika Reddy";
function multiply(){
    return num1 * num2
}
const mul = multiply();
console.log("Multiply", mul);

//Block Scope
//Here variable is declared with same name inside function, it uses value of local scope
//If variable is not declared in local scope, it searches in global scope
function getScore() {
    let num1 = 60;
    let num2 = 20;
    function add(){
        return name + " Scored marks " + (num1 + num2)
    }
    return add();
}
const scope = getScore()
console.log("Block Scope", scope);

//O/P based question
for(let i=0; i<5; i++){
    setTimeout(function(){
        console.log("Variable declared with let",i);
    }, i*1000)
};
//variable decalred with let will print all numbers from 0 to 5
//whereas variable declared with var will print only 5, 5 times
//these is because var has block global scope and takes number which has latest value
//while let has block scope 
for(var a=0; a<5; a++){
    setTimeout(function(){
        console.log("Variable declared with var",a);
    }, a*1000)
};

//**********************************************************************************************************//

                //****************** Hoisting ********************//
//Hoisting is JavaScript's default behavior of moving declarations to the top of the current scope.
//Hoisting applies to variable declarations and to function declarations.
//Because of this, JavaScript functions can be called before they are declared.

const host = hositingFunction(5);
function hositingFunction(y) {
  return y * y;
};
console.log("Hosting",host);

//**********************************************************************************************************//

                //****************** IIFE (Immediately Invoked Function Expression) ********************//
//A self-invoking expression is invoked (started) automatically, without being called.
//Function expressions will execute automatically if the expression is followed by ().
//You cannot declaare self-invoke function.
//You have to add parentheses around the function to indicate that it is a function expression

const selfInvoking = (function () {
    let x = "Hello!!";  // I will invoke myself
    return x;
})();
console.log("Self Invoking Function",selfInvoking);

(function(x) {
    return (function(y){
        console.log(x)
    })(2);
})(1);

//**********************************************************************************************************//

                //****************** CallBack Function ********************//
//Is a function which is passed to another function as a parameter
//eg: setTimeOut, map, filter, reduce

//**********************************************************************************************************//

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

//**********************************************************************************************************//
