//******************** CREATING OBJECT ********************//

const empInfo = {
    lName: "Ushika",
    fName: "Bommana",
    id: 12345,
    fullName: function() {
        return this.fName + " " +this.lName
    }
};
console.log(empInfo);

//**********************************************************************************************************//

            //******************** ACCESSING METHODS OF OBJECT ********************//

const fullNameOfEmp = empInfo.fullName();
console.log("Full Name", fullNameOfEmp);

//**********************************************************************************************************//

            //******************** ADDING NEW PROPERTY ********************//

empInfo.nationality = "Indian";
console.log("After Adding",empInfo);

//**********************************************************************************************************//

            //******************** DELETING PROPERTY ********************//
 
//deletes both the value of the property and the property itself.
delete empInfo.id;
console.log("After Deleting", empInfo);

//**********************************************************************************************************//

            //******************** To Display the properties of an object ********************//
            
//Loop
let propertiesLoop = "";
for (let x in empInfo) {
    propertiesLoop += empInfo[x] + " ";
}
console.log("Display Properties using Loop",propertiesLoop);

//Object.values()
//returns values of properties in an array
const PropertiesOb = Object.values(empInfo);
console.log("Dispaly Properties using Object.values", PropertiesOb);

//Object.entries()
//is used generally to iterate in loops
let prop = "";
for(let [emp, value] of Object.entries(empInfo)){
    prop += emp + ": " +value;
}
console.log("Object enteries", prop);

//JSON.stringify 
//converts object into a string
let stringifyString = JSON.stringify(empInfo);
console.log("Stringify Object", stringifyString);

//**********************************************************************************************************//
