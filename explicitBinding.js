//Explicit Binding is done by using call, apply, bind
//used to control the behavior of the this variable and manipulate the function's this keyword
//call, apply and bind wont make any changes to this behaviour in arrow function

var obj = {name: "Ushika"};

//**********************************************************************************************************//

                //****************** Call ********************//
//The call method is basically used to invoke the function with different this object
//Is used to call amethod with owner object as argument
//Can use method belonging to another object
//It takes arguments separately. 
//Takes two parameters
//1st parameter - ObjectInstance - It is an object which we want to use explicitly
//2nd parameter - Arguments - It is arguments that we want to pass to the calling function

function sayHellocallWithoutArguments(){
  return "Hello " + this.name
};
const callWithoutArguments = sayHellocallWithoutArguments.call(obj); //obj is the reference to which this should be refer
console.log("Call method without Arguments", callWithoutArguments);

function sayHellocallWithArguments(age){
  return "Hello " + this.name + "is " + age + " months old"
};
const callWithArguments = sayHellocallWithArguments.call(obj, 6);
console.log("Call method with Arguments", callWithArguments);

function sayHellocallWithMultipleArguments(age, profession){
  return "Hello " + this.name + "is " + age + " months old and i love " + profession
};
const callWithMultipleArguments = sayHellocallWithMultipleArguments.call(obj, 6, "MY PARENTS");
console.log("Call method with multiple Arguments", callWithMultipleArguments);

//**********************************************************************************************************//

                //****************** Apply ********************//
//Is similar like call method
//It takes arguments as an array. 
//Can also be used to append an array

function sayHelloApplly(age, profession){
  return "Hello " + this.name + "is " + age + " months old and i love " + profession
};
const apply = sayHelloApplly.apply(obj,[ 6, "MY PARENTS"]);
console.log("Apply method with Arguments", apply);

const a = ["a", "b"];
const elements = [1,2,3,4];
a.push.apply(a, elements);
console.log("New array", a);

//Can be used to find max and min value in an array
//Math.max and Math.min works only on numbers not on arrays
const numbers = [6, 10, 77, 100, 65, 85, 101];
const max = Math.max.apply(null, numbers); // we dont wont to give any reference
console.log("MAX", max);
const min = Math.min.apply(null, numbers); // we dont wont to give any reference
console.log("MIN", min);

//**********************************************************************************************************//

                //****************** Bind ********************//
//method creates a new function that, when called, has its this keyword set to the provided value
//function can be reused
//will always returns a function, that we need to call when need 

function sayHelloBind(age, profession){
  return "Hello " + this.name + "is " + age + " months old and i love " + profession
};
const bindFunc = sayHelloBind.bind(obj);//bind method refers to this obj object
console.log("Bind method", bindFunc );

const bind1 = bindFunc("6 months", "MY Parents");
const bind2 = bindFunc("7 months", "MY Parents");
const bind3 = bindFunc("8 months", "MY Parents");
console.log("Bind method", bind1 );
console.log("Bind method", bind2 );
console.log("Bind method", bind3 );

//Bind Chaining
//Binding will always bound to first object which is passed as reference
function f() {
  console.log(this.name)
}
f = f.bind({name: "Spandana"}).bind({name: "Sravan"});
f();

//**********************************************************************************************************//
//Output Based Questions

const age = 28;
var person = {
  name: "Spandana",
  age: 29,
  getAge(){
    return this.age
  },
  getAgeArrow: () =>{
    return this.age
  },
  getAgeArrows: () =>{
    return this
  },
};
var person2 = {age: 27};

const outputCall = person.getAge.call(person2);
console.log(outputCall);
const outputApply = person.getAge.apply(person2);
console.log(outputApply);
const outputBind = person.getAge.bind(person2)();
console.log(outputBind);
const outputCallArrow = person.getAgeArrow.call(person2);
console.log(outputCallArrow);
const outputCallArrows = person.getAgeArrows.call(person2);
console.log(outputCallArrows);

var status = "HAPPY";
setTimeout(() => {
  const status = "EXCITED";
  const data = {
    status: "SAD",
    getStatus(){
      return this.status;
    }
  };
  console.log(data.getStatus());
  console.log(data.getStatus.call(this));//o/p - HAPPY as setTimeout is pointing to global object
}, 0);

//**********************************************************************************************************//