const text = "Ushika";
const str = "Apple, Banana, Kiwi";
const text2 = "Reddy";
const text3 = "     SravdanaReddy     ";
const str2 = "Spandana and Sravan are parents of Ushika";
const text4 = "Please locate where 'locate' occurs!";

//length 
const textLength = text.length;
console.log("Length of String",textLength);

//******************** FINDING STRING IN A STRING ********************//

//1) indexOf()= returns the index of the first occurrence of a string in a string, or it returns -1 if the string is not found
//cannot take powerful search operation(regular expressions)
const indexText = text4.indexOf("locate");
const indexText2 = text4.indexOf("locate",  12)//2nd paramenter defines from where to start
console.log("Index of String",indexText);
console.log("Index of String including 2nd paramter", indexText2);

//2)lastIndexOf()= returns the index of the last occurrence of a specified text in a string:
const lastIndexText = text4.lastIndexOf("locate");
const lastIndexText2 = text4.lastIndexOf("locate",  12)//2nd paramenter defines from where to start
console.log(lastIndexText);
console.log(lastIndexText2);

//******************** SEARCHING STRING IN A STRING ********************//

//1)search()= searches a string for a specified value (or a regular expression) and returns the position of the match
//doenot accept 2nd parameter
const searchText = text.search("locate");
const searchText2 = text.search(/locate/);
console.log(searchText);
console.log(searchText2);

//******************** EXTRACTING STRING PARTS ********************//

//1)slice()= extracts a part of a string and returns the extracted part in a new string will take 2 parameters.
//If you omit the second parameter, the method will slice out the rest of the string
//If a parameter is negative, the position is counted from the end of the string
//If value of 1st parameter is greater than 2nd parameter it will not swap arguments
const sliceStr = str.slice(7, 13);
console.log("Part of String",sliceStr);
const sliceStr2 = str.slice(7);
console.log("Part of String without 2nd parameter",sliceStr2);
const sliceStr4 = str.slice(-12);
console.log("Part of String with negative",sliceStr4);
const sliceStr5 = str.slice(-12, -6);
console.log("Part of String with negative", sliceStr5);
const sliceStr6 = str.slice(13, 7);
console.log("Part of String with 1st parameter greater", sliceStr6);

//2)substring()= is similar to slice, difference is that negative indexes is not accepted.
//If you omit the 2nd parameter, substring() will slice out the rest of the string.
//1st paramenter - position to start the extraction
//2nd parameter - where extraction to end
//If value of 1st parameter is greater than 2nd parameter it will swap arguments
const subStringStr = str.substring(2,6);
console.log("Substring",subStringStr);
const subStringStr1 = str.substring(6, 2);
console.log("Substring with 1st parameter greater",subStringStr);
const subStringStr2 = str.substring(-4);
console.log("Substring with negative",subStringStr2);
const subStringStr3 = str.substring(6);
console.log("Substring without 2nd paramter", subStringStr3);

//3)substr() = similar to slice, difference is 2nd paramter specifies the length of extracted string 
//1st parameter - position to start extraction
//2nd parameter - count
//If 2nd parameter is omitted then 

//charAt() method returns the character at a specified index (position) in a string
const charPosition = text.charAt(4);
console.log("Position of Character",charPosition);

//charCodeAt() method returns the code of the character at a specified index in a string
const charIndex = text.charCodeAt(3);
console.log("Code of Character",charIndex);

//to convert to upperCase
const upperCase = text.toUpperCase();
console.log(upperCase);

//to convert to lower case
const lowerCase = text.toLowerCase();
console.log(lowerCase);

//concat() joins two or more strings:
const concateStr = text.concat(text2);
console.log(concateStr);
const concateStr2 = text.concat(" ", text2);
console.log(concateStr2);

//The trim() method removes whitespace from both sides of a string:
const trimText = text3.trim();
console.log(trimText);

//The trimStart() method works like trim(), but removes whitespace only from the start of a string.
const trimStartText = text3.trimStart();
console.log(trimStartText);

//The trimEnd() method works like trim(), but removes whitespace only from the end of a string.
const trimEndText = text3.trimEnd();
console.log(trimEndText);

//repeat method returns a string with a number of copies of a string
const repeatText = text.repeat(3);
console.log(repeatText);

//The replace() method replaces a specified value with another value in a string:
//replace only first match
//is case sensitive
const replaceStr = str2.replace("Ushika", "UshikaReddy");
console.log(replaceStr);

//split converts string to an array
const splitText = text.split("");
console.log(splitText);
