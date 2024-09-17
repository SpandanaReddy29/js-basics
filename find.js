const num = [2, 4, 6, 8, 10, 12, 14, 16 ];

                //******************** find ********************//

//find() method returns the value of the first array element that passes a test function.
//always returns only one element and 1st occurance which statisfy the condition

let findGreaterNum = num.find(ele =>  ele > 8 );
console.log("Grater Number with find", findGreaterNum);

				//******************** findIndex ********************//

//findIndex() method returns the index of the first array element that passes a test function

let findIndexGreaterNum = num.findIndex(ele =>  ele > 8 );
console.log("Grater Number Index with findIndex", findIndexGreaterNum);