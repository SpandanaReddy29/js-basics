//The map() method creates a new array by performing a function on each array element.
//It does not execute the function for array elements without values and doesnt change original array

const num = [1,2,3,4,5,6];
let doubledNum = num.map(ele => ele * 2);
console.log("Map values",doubledNum);

const images = [
    {length: 2, breadth: 4},
    {length: 4, breadth: 6},
    {length: 6, breadth: 8},
    {length: 10, breadth: 12}
];
let newImage = images.map(ele => {
    return {
        length: ele.length + 2,
        breadth: ele.breadth + 1
    }
});
console.log("Map over array of object",newImage);

let areaImage = images.map(ele => {
    return {
        ...ele,
        area: ele.length * ele.breadth
    }
})
console.log("Map over Array of Object with addition of new property",areaImage);

let areaNewImage = images.map(ele => {
    return {
        area: ele.length * ele.breadth
    }
})
console.log("Map over Array of Object",areaNewImage);

const implementImages = (array, a=5, b=5) => {
    return array.map(ele => {
        return {
            length: ele.length + a,
            breadth: ele.breadth + b
        }
    })
};
const newArray = implementImages(images, 10, 20);
console.log("Map over Array of Object with default values",newArray);
