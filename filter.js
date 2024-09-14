//The filter() method creates a new array with array elements that pass a test.

const empInfo = [
    {name: "Spandana" , position: "Junior", salary: 80000},
    {name: "Sravan" , position: "Senior", salary: 180000},
    {name: "Ushika" , position: "Junior", salary: 600000},
    {name: "Sravdana" , position: "Senior", salary: 90000}
];

const senior = empInfo.filter(ele => {
    return ele.salary > 90000 && ele.position === "Senior"
});
console.log(senior);

const seniorName = empInfo
    .filter(ele =>  ele.salary > 70000 && ele.position === "Senior")
    .map(ele => ele.name)
console.log(seniorName);

const newSeniorName = empInfo.filter(ele => {
    return ele.salary > 90000 || ele.position === "Senior"
})
console.log(seniorName);
