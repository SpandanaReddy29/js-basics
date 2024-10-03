//Prototype - when we want the property or method to attach to evey instance of a function

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
Toyota.prototype = Object.create(Car.prototype);//inherit the properties of Car, it will replace the DOG constructor function
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

//******************** CLASSES ********************//

//Refractor using ES6 Classes

class CarES6 {
  constructor({ title }) {
    this.title = title;
  }
  drive() {
    return 'vroom';
  }
}

class ToyotaES6 extends CarES6 {
  constructor(options) {
    super(options);
    this.color = options.color;
  }
  honk() {
    return 'beep';
  }
}

const carES6 = new CarES6({ title: 'Toyota' });
const c2 = carES6.drive();

const toyotaES6 = new ToyotaES6({ color: 'red', title: 'Daily Driver' });
const t3 = toyotaES6.honk();


// Create a sub-class of Moster called Snake with bite() method.
// Snake instance (given as argument) should have health deducted by 10.
class Monster {
  constructor(options) {
    this.health = 100;
    this.name = options.name;
  }
}

class Snake extends Monster {
  constructor(options) {
    super(options);
  }
  bite(snake) {
    snake.health = 0.9 * snake.health;
    return snake;
  }
}

const snake1 = new Snake({ name: 'Big Snake' });
const snake2 = new Snake({ name: 'Little Snake' });
const s2 = snake2.bite(snake1);
console.log(snake1);
console.log(snake2);
