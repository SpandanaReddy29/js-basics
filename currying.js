                //****************** Currying ********************//

//Means, function with n arguments is transformed into a series of n functions, each taking single argument
//It breaks down a function that takes multiple parameters into a chain of functions that each take one parameter
//The outer function takes the first argument and returns a new function.
//The returned function takes the next argument and returns another function.
//This process continues until the final function is called with the last argument and produces the result.
//Is useful for creating specialized functions, improving code reusability, and maintainable code.

// Regular function
function simpleFunction(param1, param2, param3) {
    return param1 + param2 + param3;
}
// Curried function
function curriedFunction(param1) {
    return function(param2) {
        return function(param3) {
            return param1 + param2 + param3;
        };
    };
}
console.log("Regular Function",simpleFunction(1,2,3));
console.log("Currying Function",curriedFunction(3)(4)(5));

//**********************************************************************************************************//

//Ques - sum(2)(6)(1)
function add(a) {
    return function (b) {
        return function (c) {
            return a + b + c
        };
    };
};
let addition = add(2)(6)(1);
console.log("Output based question", addition);

//**********************************************************************************************************//

//Ques - evaluate("sum")(4)(2) => 6
//       evaluate("multiply")(4)(2) => 8
//       evaluate("divide")(4)(2) => 2
//       evaluate("subtract")(4)(2) => 2

function evaluate(operation){
    return function(a){
        return function(b){
            if(operation === "sum") return a + b;
            else if(operation === "multiply") return a * b;
            else if(operation === "divide") return a / b;
            else if(operation === "subtract") return a - b;
            else return "Invalid Operation";
        }
    }
}
let sum = evaluate("sum")(4)(2);
let multiply = evaluate("multiply")(4)(2);
let divide = evaluate("divide")(4)(2);
let subtract = evaluate("subtract")(4)(2);
console.log(sum, multiply, divide, subtract);

//**********************************************************************************************************//

                //****************** Infinite Currying ********************//
//sum(1)(2)(5)();
//should be able to work infinitely 
//can except n no of arguments
function infiniteCurrying(a){
    return function(b){
        if (b) return infiniteCurrying(a + b);
        return a;
    }
}
const total = infiniteCurrying(5)(8)(4)(9)();
console.log("Total", total);

//**********************************************************************************************************//

//curry() implementation, convert f(a,b,c) to f(a)(b)(c)
function curry(func){
    return function curriedFunction(...args) {
        if(args.length >= func.length){
            return func(...args);
        }else {
            return function(...next){
                return curriedFunction(...args, ...next);
            };
        }
    }
}
const curryAdd = (a, b, c, d) => a + b + c + d;
const totalSumOfCurry = curry(curryAdd);
console.log("Function Currying", totalSumOfCurry(2)(3)(5)(8));
