//The reduce() method runs a function on each array element to produce (reduce it to) a single value.
//It accepts initial value
//it takes 4 values as parameters i.e., acc, curr, i, arr
//acc - accumulator which take computation of previous value
//curr - current value of the array
// i - index
//arr - array

const num = [2, 3, 4, 5, 6];
let sum = 0;
sum = num.reduce((sum, ele) => {
  return sum + ele
}, 0);
console.log("Reduce Array values", sum);

const primaryColors = [
  { color: 'red' },
  { color: 'yellow' },
  { color: 'blue' },
  { color: 'orange' }
];
let colors = primaryColors.reduce((prev, ele) => {
  prev.push(ele.color);
  return prev
}, []);
console.log(colors);

const desk = [
  { type: 'Sitting' },
  { type: 'Standing' },
  { type: 'Sitting' },
  { type: 'Standing' },
  { type: 'Standing' },
];
let deskTypes = desk.reduce((prev, ele) => {
  prev[ele.type]++
  return prev
}, { Sitting: 0, Standing: 0 });
console.log(deskTypes);

const numbers = [1, 2, 2, 2, 3, 4, 5, 1, 8, 8];
const uniqueFunction = (array) => {
  return array.reduce((prev, ele) => {
    if (!prev.find(findEle => {
      return findEle === ele
    })) {
      prev.push(ele)
    }
    return prev;
  }, []);
};
const uniqueNum = uniqueFunction(numbers);
console.log(uniqueNum);

const balancedParams = (string) => {
  return !string.split("").reduce((prev, ele) => {
    if (prev > 0) return prev;
    if (ele === "(") return ++prev;
    if (ele === ")") return --prev;
    return prev
  }, 0)
};
const params = "(((((())))))))))))((()))";
const checkParams = balancedParams(params);
console.log(checkParams);

//**********************************************************************************************************//

let students = [
  { name: "SravanKumar Reddy", rollNo: 1, marks: 80 },
  { name: "Spandana Reddy", rollNo: 2, marks: 85 },
  { name: "Sravdana Reddy", rollNo: 3, marks: 90 },
  { name: "Ushika Reddy", rollNo: 4, marks: 95 }
];

//Return sum of marks of all students
let sumOfMarksOfStudents = 0;
sumOfMarksOfStudents = students.reduce((sumOfMarksOfStudents, ele) => {
  return sumOfMarksOfStudents + ele.marks
}, 0);
console.log("Sum of marks of all students", sumOfMarksOfStudents)