const defaultColors = ['red', 'green'];
const userFavoriteColors = ['orange', 'yellow'];

//******************** spread ********************//

//Spread operator allows us to quickly copy all or part of an existing array or object into another array or object
//The ... operator expands an iterable (like an array) into more elements:
//The ... operator can be used to expand an iterable into more arguments for function calls
//can be at any parameter in function defination

const spreadColors = ['blue', ...defaultColors, ...userFavoriteColors];
console.log("Spread Operator in Array", spreadColors);

const myVehicle = {
  brand: 'Ford',
  model: 'Mustang',
  color: 'red'
};
const updateMyVehicle = {
  type: 'car',
  year: 2021,
  color: 'yellow'
};
const myUpdatedVehicle = { ...myVehicle, ...updateMyVehicle };
//if same properties exist with different values, the last updated value get stored in updated object
console.log("Spread Operator in Objects", myUpdatedVehicle);

//Spread operator is often used in combination with destructuring.
const numb = [1, 2, 3, 4, 5, 6];
const [one, two, ...rest] = numb;

const normalAddNumbers = (numbers) => {
  return numbers.reduce((sum, number) => {
    return sum + number;;
  }, 0);
}
const result1 = normalAddNumbers([1, 2, 3, 4, 5]);
console.log(result1);

//**********************************************************************************************************//

//******************** rest ********************//

//The rest parameter syntax allows a function to accept an indefinite number of arguments as an array
//should be last parameter in function defination
const RestAddNumbers = (...numbers) => {
  return numbers.reduce((sum, number) => {
    return sum + number;;
  }, 0);
}
const result2 = RestAddNumbers(1, 2, 3, 4, 5, 6, 7, 8, 9)
console.log(result2);

const SpreadRestValidateShoppingList = (...items) => {
  if (items.indexOf('milk') < 0) {
    return ['milk', ...items];
  }
  return items
}
const result3 = SpreadRestValidateShoppingList('oranges', 'bread', 'eggs');
console.log(result3);

const NormalMathLibrary = {
  calculateProduct(...rest) {
    console.log('Please use the multiply method instead');
    return this.multiply(...rest);
  },
  multiply(a, b) {
    return a * b;
  }
};
const result4 = NormalMathLibrary.calculateProduct(2, 3);
console.log(result4);

const RestSpreadMathLibrary = {
  calculateProduct(...rest) {
    console.log('Please use the multiply method instead');
    return this.multiply(...rest);
  },
  multiply(...numbers) {
    return numbers.reduce((mult, number) => {
      return mult * number;;
    }, 1);
  }
};
const result5 = RestSpreadMathLibrary.calculateProduct(2, 3, 4);
console.log(result5);

//**********************************************************************************************************//

//Road Side Coading
//rest operator is acceptiong n number of parameter to a function while declaring
//spread is spreading an array

function restAndSpread(...nums) { //rest operator
  console.log("Rest Operator", nums)
}
var nums = [9, 7, 5];
restAndSpread(...nums)//spread operator

//rest or spread opertaor should be last one otherwise throws SyntaxError, Rest opertaor must be last parameter
// const fn = (a, ...numbers, b, c) => {
// 	console.log(b,c)
// };
// fn(6,7,9);

console.log([..."Spandana"]);
//When trying to spread a string in an array
//Here it will spread into each character

const user = { name: "Sravan", age: 35 }
const admin = { admin: true, ...user };
console.log("Spread Operator", admin)

