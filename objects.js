const empInfo = {
    lName: "Ushika",
    fName: "Bommana",
    id: 12345,
    fullName: function() {
        return this.fName + " " +this.lName
    }
};

console.log(empInfo);

//Accessing methods of objects
const fullNameOfEmp = empInfo.fullName();
console.log("Full Name", fullNameOfEmp);

//Adding new property
empInfo.nationality = "Indian";
console.log("After Adding",empInfo);

//Deleting property of an object by using delete keyword 
//deletes both the value of the property and the property itself.
delete empInfo.id;
console.log("After Deleting", empInfo);

//To Display the properties of an object
//1) Loop
let propertiesLoop = "";
for (let x in empInfo) {
    propertiesLoop += empInfo[x] + " ";
}
console.log("Display Properties using Loop",propertiesLoop);

//2)Using Object.values()
//returns values of properties in an array
const PropertiesOb = Object.values(empInfo);
console.log("Dispaly Properties using Object.values", PropertiesOb);

//3)Using Object.entries
//is used generally to iterate in loops
let prop = "";
for(let [emp, value] of Object.entries(empInfo)){
    prop += emp + ": " +value;
}
console.log("Object enteries", prop);

//4)JSON.stringify converts object into a string
let stringifyString = JSON.stringify(empInfo);
console.log("Stringify Object", stringifyString);
