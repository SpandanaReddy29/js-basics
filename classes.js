                //******************** CLASSES ********************//
//classes are blueprints to the objects which consist of properties, methods
//keyword class to create a class
//Always add a method named constructor().
//The constructor method is called automatically when a new object is created
//constructor method is used to initialize object properties
//It is a template for JavaScript objects.
//If you do not define a constructor method, JavaScript will add an empty constructor method
//class declarations are not hoisted i.e., must declare a class before using it
//A Class can have only one constructor function

//Class doent take any input from user, constructor takes input and binds to the class

//A class is a blueprint that defines the structure and behavior of objects.
//Objects are instances of classes that possess properties and methods defined by the class.
//Function inside class need to bew declared as function

class Teacher {
  constructor(name, channel) {
    this.name = name;
    this.channel = channel;
  }
  intro(){
    return `Hey! I am ${this.name} and I have this ${this.channel} `
  }
}

var t1 = new Teacher("UshikaReddy", "Maths");
const i = t1.intro();
console.log(i);
class Car {
  constructor(name, year) {
    this.name = name;
    this.year = year;
  }
  age() { //function keyword is omitted in class
    const date = new Date();
    return date.getFullYear() - this.year;
  }
}

//For creating objects using classes
const myCar1 = new Car("Ford", 2014);
const myCar2 = new Car("Audi", 2019);
console.log("My car is " + myCar1.age() + " years old.");

//**********************************************************************************************************//

                //******************** INHERITENCE ********************//
//extends creates class inheritance
//inherites all the methods of the class
//super() method refers to the parent class
//super() method in constructor, we call parents constructor method & gets access to parents properties & methods

class YouTubeTeacher extends Teacher{
  constructor(name, channel, likes = 0, subscribers){
    super(name, channel);
    this.videoLikes = likes;
    this.subscribers = subscribers;
  }
  likes(){
    this.videoLikes++;
    return `Liked this video! Current Likes ${this.videoLikes}`;

  }
  subscribersCount() {
    return `${this.channel} has ${this.subscribers} subscribers`;
  }
};

const ytTeacher = new YouTubeTeacher("UshikaReddy", "JavaScript", 90, 10000);
const yt1 = ytTeacher.likes();
const yt2 = ytTeacher.subscribersCount();
console.log(yt1);
console.log(yt2);


class CarDetails {
  constructor(brand) {
    this.carname = brand;
  }
  present() {
    return 'I have a ' + this.carname;
  }
}
class Model extends CarDetails {
  constructor(brand, mod) {
    super(brand);
    this.model = mod;
  }
  show() {
    return this.present() + ', it is a ' + this.model;
  }
}
let myCar = new Model("Ford", "Mustang");
const carInherited = myCar.show();
console.log(carInherited);

//**********************************************************************************************************//