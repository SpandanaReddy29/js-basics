let students = [
  { name: "SravanKumar Reddy", rollNo: 1, marks: 80 },
  { name: "Spandana Reddy", rollNo: 2, marks: 85 },
  { name: "Sravdana Reddy", rollNo: 3, marks: 90 },
  { name: "Ushika Reddy", rollNo: 4, marks: 95 }
];

//return total marks of students with greater than 90 after adding marks 20 to those who have scored less than 90

const totalMarks =
  students
    .map((ele) => {
      if (ele.marks < 90) {
        ele.marks += 20
      }
      return ele;
    })
    .filter(ele => ele.marks > 90)
    .reduce((sum, ele) => sum + ele.marks, 0)
console.log("Total Marks", totalMarks);