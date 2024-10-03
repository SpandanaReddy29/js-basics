                //****************** Scope ********************//

//Scope is certain region of a program where defined variable exist and cannot be recognized behond that
//GlobalScope
let globalScope = 10;
console.log("Global Scope", globalScope);
//BlockScope
{
    let blockScope = 20;
    console.log("Block Scope", blockScope);
}
//FunctionalScope
function scope() {
    let functionalScope = 30;
    return console.log("Functional Scope", functionalScope)
};
scope();

//**********************************************************************************************************//

                //****************** var, let, const ********************//

//var is functional scope, while let and const are block scope
//variable declared with var can be redecalred within same scope 
//variable declared with let or const cannot be redeclared within same scope and gives error Syntax Error
//variable declared with var is accessible throughtout the program whereas with const and let wont allow and throw error as reference error
//variable declared with const should be declared with initial values otherwise throws error SyntaxError with missing initializer
//variable declared with var, let can be reinitialized, with const throws error TypeError Assignment to constant variable

{
    var testVar = 10;
    console.log("Testing Var inside block", testVar)
}
console.log("Testing Var outside block", testVar)

{
    const testConst = 20;
    console.log("Test const Inside Block", testConst)
}
// console.log("Test const outside Block", testConst)

{
    let testLet = 20;
    console.log("Test let Inside Block", testLet)
}
// console.log("Test let outside Block", testLet)

//**********************************************************************************************************//

                //****************** Variable Shadowing ********************//
//occurs when a variable with the same name as a variable in a higher scope is declared in a lower scope.

function variableShadowing () {
    let a = "Hello";
    if(true) {
        let a = "Hi";
        console.log("Variable inside condition", a)
    };
    console.log("Variable Outside", a)
};
variableShadowing();

//**********************************************************************************************************//

                //****************** Illegal Shadowing ********************//    
//occurs when trying to shadow a variable using var within the same scope where that variable is already defined using let or const.
//we can shadow a variable declared with var using let or const but not vice-versa

function illegalVariableShadowing () {
    // let a = "Hello";
    var b = "Good"
    if(true) {
        var a = "Hi";
        let b = "Morning"
        console.log("Variable inside condition", a)
        console.log("Variable inside condition", b)
    };
    console.log("Variable Outside", a)
    console.log("Variable Outside", b)
};
illegalVariableShadowing();

//**********************************************************************************************************//

                //****************** Hoisting ********************//  
//hoisting is a behavior where variable or a function declarations are moved to the top of their containing scope during the compilation phase
//only the declarations are hoisted, not the initializations or assignment
console.log("Hoisting", host);
var host = 10; 
//value will be undefined for variable declared with var
//variable declared with const or let when tried to host it, goes in Temporal Dead Zone
//where accessing the variable will result in a ReferenceError.
//because they are in the Temporal Dead Zone until they are declared.
function hositingVariables(){
    // console.log("Hositing Different variables",hostVar, hostConst, hostLet);
    var hostVar = 10;
    const hostConst = 20;
    let hostLet = 30;
}
hositingVariables();

//**********************************************************************************************************//
