const text = "Ushika";
const str = "Apple, Banana, Kiwi";
const text2 = "Reddy";
const text3 = "     SravdanaReddy     ";
const str2 = "Spandana and Sravan are parents of Ushika";
const text4 = "Please locate where 'locate' occurs!";

//********* length *********//
const textLength = text.length;
console.log("Length of String",textLength);

//**********************************************************************************************************//

//******************** FINDING STRING IN A STRING ********************//

//********* indexOf() *********//
//returns the index of the first occurrence of a string in a string, or it returns -1 if the string is not found
//cannot take powerful search operation(regular expressions)
const indexText = text4.indexOf("locate");
const indexText2 = text4.indexOf("locate",  12)//2nd paramenter defines from where to start
console.log("Index of String",indexText);
console.log("Index of String including 2nd paramter", indexText2);

//********* lastIndexOf() *********//
//returns the index of the last occurrence of a specified text in a string:
const lastIndexText = text4.lastIndexOf("locate");
const lastIndexText2 = text4.lastIndexOf("locate",  12)//2nd paramenter defines from where to start
console.log("Last Index Of String",lastIndexText);
console.log("Last Index Of String including 2nd parameter+",lastIndexText2);

//**********************************************************************************************************//

                //******************** SEARCHING STRING IN A STRING ********************//

//********* search() *********//
// searches a string for a specified value (or a regular expression) and returns the position of the match
//doenot accept 2nd parameter
const searchText = text.search("locate");
const searchText2 = text.search(/locate/);
console.log("Searching Text",searchText);
console.log("Searching Text",searchText2);

//********* includes() *********//
//method returns true if a string contains a specified value otherwise false
//is cases sensitive
//1st parameter = string to be searched for
//2nd parametr = start position for searching, by default its 0 if omitted
const includesText = text.includes("where");
console.log("Search Text",includesText);
const includesText2 = text.includes("where", 13);
console.log("Search Text with 2nd parameter",includesText2);

//********* startsWith() *********//
//method returns true if a string begins with a specified value, or-else false
//is cases sensitive
//1st parameter = string to be searched for
//2nd parametr = start position for searching, by default its 0 if omitted
const startsWithText = text.startsWith("Please");
console.log("Starts With",startsWithText);
const startsWithText2 = text.startsWith("Please", 1);
console.log("Starts With including 2nd parameter",startsWithText2);

//********* endsWith() *********//
//method returns true if a string ends with a specified value, or-else false
//is cases sensitive
//1st parameter = string to be searched for
//2nd parametr = start position for searching, by default its 0 if omitted
const endsWithText = text.endsWith("locate");
console.log("Ends With",endsWithText);
const endsWithText2 = text.endsWith("loacte", 1);
console.log("Ends with including 2nd parameter",endsWithText2); 

//********* match() *********//
//returns an array containing the results of matching a string against a string (or a regular expression).
const matchText = text.match("ate");
console.log("Match Text",matchText);
//for global Search
const matchTextGlobal = text.match(/ate/g);
console.log("Globally match text",matchTextGlobal);
//for global and case sensitive search
const matchtextGlobalCaseInsesitive = text.match(/ate/gi);
console.log("Globally match text with case insensitive",matchtextGlobalCaseInsesitive);

//********* matchAll() *********//
//returns an iterator containing the results of matching a string against a string (or a regular expression)
const matchAllText = text.matchAll("Cats");
console.log("Match All Text",matchAllText);

//**********************************************************************************************************//
       
                //******************** EXTRACTING STRING PARTS ********************//

//********* slice() *********//
// extracts a part of a string and returns the extracted part in a new string will take 2 parameters.
//If you omit the 2nd parameter, then method will slice out the rest of the string
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

//********* substring() *********//
//is similar to slice, difference is that negative indexes is not accepted.
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

//********* substr() *********//
//similar to slice, difference is 2nd paramter specifies the length of extracted string 
//1st parameter - position to start extraction
//2nd parameter - count
//If 2nd parameter is omitted then all characters from start position till end 
//this method is depricated
const subStr = str.substr(2,6);
console.log("Substring", subStr);
const subStr2 = str.substr(2);
console.log("SubStr with 2nd paramter omitted", subStr2);

//**********************************************************************************************************//

                //******************** REPLACING STRING CONTENT ********************//

//********* replace() *********//
//replaces a specified value with another value in a string
//replace only first match
//is case sensitive
//to replace case insenstive use regular expression with /i
//to replace all matches use regular expression with /g
const replaceStr = str2.replace("Ushika", "UshikaReddy");
console.log("Replaced String",replaceStr);

//**********************************************************************************************************//

                //******************** CONVERTING STRING ********************//

//********* toUpperCase() *********//
//to convert to upperCase
const upperCase = text.toUpperCase();
console.log("Convert to Upper Case",upperCase);

//********* toLowerCase() *********//
//to convert to lower case
const lowerCase = text.toLowerCase();
console.log("Convert to Lower Case",lowerCase);

//**********************************************************************************************************//

                //******************** EXTRACTING STRING CHARACTERS ********************//

//********* charAt() *********//
//method returns the character at a specified index (position) in a string
const charPosition = text.charAt(4);
console.log("Position of Character",charPosition);

//********* charCodeAt() *********//
//method returns the code of the character at a specified index in a string
const charIndex = text.charCodeAt(3);
console.log("Code of Character",charIndex);

//**********************************************************************************************************//

                //******************** JOINING STRING ********************//

//********* concat() *********//
//joins two or more strings
//can be used instead of + operator
const concateStr = text.concat(text2);
console.log("Concate Two Strings",concateStr);
const concateStr2 = text.concat(" ", text2);
console.log("Concate Two Strings with space",concateStr2);

//**********************************************************************************************************//

                //******************** REMOVING WHITE SPACES ********************//

//********* trim() *********//
//method removes whitespace from both sides of a string:
const trimText = text3.trim();
console.log("String after removing white space",trimText);

//********* trimStart() *********//
//method works like trim(), but removes whitespace only from the start of a string.
const trimStartText = text3.trimStart();
console.log("String after removing white space from starting",trimStartText);

//********* trimEnd() *********//
//method works like trim(), but removes whitespace only from the end of a string.
const trimEndText = text3.trimEnd();
console.log("String after removing white space from End",trimEndText);

//**********************************************************************************************************//

                //******************** REPEATING STRING ********************//

//********* repeat() *********//
//method returns a string with a number of copies of a string
const repeatText = text.repeat(3);
console.log("Repeated Text",repeatText);

//**********************************************************************************************************//

                //******************** SPLITTING STRING ********************//

//********* split() *********//
//converts string to an array
const splitText = text.split("");
console.log("Splitted Text",splitText);

//**********************************************************************************************************//
