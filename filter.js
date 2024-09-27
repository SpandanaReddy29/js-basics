//******************** filter ********************//

//The filter() method creates a new array with array elements that pass a test.
const num = [1, 2, 3, 4, 5, 6];
let filterNumByTwo = num.filter(ele => ele > 2);
console.log("Filter Num by greater than 2", filterNumByTwo);

const empInfo = [
  { name: "Spandana", position: "Junior", salary: 80000 },
  { name: "Sravan", position: "Senior", salary: 180000 },
  { name: "Ushika", position: "Junior", salary: 600000 },
  { name: "Sravdana", position: "Senior", salary: 90000 }
];

const senior = empInfo.filter(ele => {
  return ele.salary > 90000 && ele.position === "Senior"
});
console.log("Filter on basis of salary and position", senior);

const seniorName = empInfo
  .filter(ele => ele.salary > 70000 && ele.position === "Senior")
  .map(ele => ele.name)
console.log("Filter name on basis of salary and position", seniorName);

const newSeniorName = empInfo.filter(ele => {
  return ele.salary > 90000 || ele.position === "Senior"
})
console.log("Filter name on basis of salary or position", seniorName);

//**********************************************************************************************************//

let students = [
  { name: "SravanKumar Reddy", rollNo: 1, marks: 80 },
  { name: "Spandana Reddy", rollNo: 2, marks: 85 },
  { name: "Sravdana Reddy", rollNo: 3, marks: 90 },
  { name: "Ushika Reddy", rollNo: 4, marks: 95 }
];

//Return only details of students who scored more than 75 marks
const studentsDetails = students.filter(ele => ele.marks > 75);
console.log("Details of students who scored more than 75 marks", studentsDetails);

//Return only details of students who scored more than 75 marks and rollno greater than 3
const details = students.filter(ele => ele.marks > 75 && ele.rollNo > 3);
console.log("Details of students who scored more than 75 marks and rollNo greater than 3 ", details);