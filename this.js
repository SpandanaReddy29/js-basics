//Implicit Binding
//this keyword is used to reference something
//Depends on the context of which in
//this keyword refers to parent object in normal function
//this keyword in arrow function points to parent normal function,
//if doesnt have any parent function it will point to window onject the o/p will be undefined
//we cant manipulate the context of arrow function

let user = {
  fName: "Ushika",
  lName: "Reddy",
  getDetails(){
    console.log("This keyword", this.fName);
  },
  getDetailsArrow: ()=> {
    console.log("This keyword", this.fName);
  },
  getDetailsA(){
    const nestedArrow = () => {
      console.log("This keyword", this.fName + " and " + this.lName)
    }
    nestedArrow();
  }
};
user.getDetails();
user.getDetailsArrow(); //undefined
user.getDetailsA();

let obj = {
  fName: "Ushika",
  childObj: {
    lName: "Reddy",
    getDetails(){
      console.log("This keyword", this.fName + " and " + this.lName);
    },
    getDetailsArrow: ()=> {
      console.log("This keyword", this.fName + " and " + this.lName);
    },
    getDetailsA(){
      const nestedArrow = () => {
        console.log("This keyword", this.fName + " and " + this.lName)
      }
      nestedArrow();
    }
  },
};
obj.childObj.getDetails();
obj.childObj.getDetailsArrow();
obj.childObj.getDetailsA();

//**********************************************************************************************************//

          //****************** Classes ********************//

class userObj {
  constructor(n) {
    this.name = n;
  }
  getName(){
    console.log(this.name);
  }
}
const userDetails = new userObj("Ushika");
userDetails.getName();
console.log("This Keyword in class", userDetails);

//**********************************************************************************************************//

          //****************** RoadSide Coader ********************//

let personUser = {
  firstName: "Ushika",
  getName(){
    const firstName = "Ushika Reddy";
    return this.firstName
  },
};
const details = personUser.getName();
console.log(details);