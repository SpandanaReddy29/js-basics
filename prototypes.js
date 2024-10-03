                //******************** PROTOTYPE ********************//
//JavaScript is a prototype-based, automatically adds a prototype property to functions upon creation
//This prototype object allows attaching methods and properties, facilitating inheritance for all objects created from the function
//Prototypes are the mechanism by which JavaScript objects inherit features from one another
//Every object in JavaScript has a built-in property, which is called its prototype
//The prototype is itself an object, so the prototype will have its own prototype, making what's called a prototype chain.
//he prototype is an object that is associated with every functions and objects by default in JavaScript, 
//where function's prototype property is accessible and modifiable and object's prototype property is not visible
//The prototype object is special type of enumerable object to which additional properties can be attached to it which will be shared across all the instances of it's constructor function

//__proto__ - Is an object property that points to prototype of the object
//            It is used for inheritance and allows accessing the prototype chain
//prototype - It is property exist on the constructor function and to set up inheritance for object by that constructor function
//            It defines properties and methods shared by all instances created by that constructor function

//Prototypal Inheritance

function Car(options) {
  this.title = options.title
};
Car.prototype.drive = function () {
  return 'vroom'
};
const car = new Car({ title: 'Focus' });
const c1 = car.drive();
console.log(c1);
console.log(car);

function Toyota(options) {
  Car.call(this, options);
  this.color = options.color;
}
Toyota.prototype = Object.create(Car.prototype);//inherit the properties of Car, it will replace the Toyoto constructor function
Toyota.prototype.constructor = Toyota;//To have the constructor function of itself
//Addition of new property to prototype of Dog
Toyota.prototype.honk = function () {
  return 'beep';
};
const toyota = new Toyota({ color: 'red', title: 'Daily Driver' });
const t1 = toyota.drive();
const t2 = toyota.honk();
console.log(toyota);
console.log(t1);
console.log(t2);


//**********************************************************************************************************//

//setPrototypeOf
//setPrototypeOf is a method used to set the prototype (the object's internal [[Prototype]]) of a specified object to another object or null. 
//It allows changing the prototype dynamically after an object has been created

//instance Of
//instanceof is an operator that checks if an object is an instance of a specific constructor or its prototype chain. 
//It returns true if the object is an instance of the constructor or a constructor's prototype chain

//You can create an object without a prototype by using Object.create(null). 
//This creates an object with no prototype chain, making it free from any inherited properties or methods
//var obj1 =  Object.create(null)


//The deepClone function recursively creates a deep copy of an object, including nested objects and arrays, 
//ensuring that the cloned object is completely independent of the original object

