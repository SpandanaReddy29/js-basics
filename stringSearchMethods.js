const text = "Please locate where 'locate' occurs!";

//indexOf returns the index of the first occurrence of a string in a string, or it returns -1 if the string is not found
const indexText = text.indexOf("locate");
const indexText2 = text.indexOf("locate",  12)//2nd paramenter defines from where to start
console.log(indexText);
console.log(indexText2);

//The lastIndexOf returns the index of the last occurrence of a specified text in a string:
const lastIndexText = text.lastIndexOf("locate");
const lastIndexText2 = text.indexOf("locate",  12)//2nd paramenter defines from where to start
console.log(lastIndexText);
console.log(lastIndexText2);

//search method searches a string for a string (or a regular expression) and returns the position of the match
//doenot accept 2nd parameter
const searchText = text.search("locate");
const searchText2 = text.search(/locate/);
console.log(searchText);
console.log(searchText2);

//match() returns an array containing the results of matching a string against a string (or a regular expression).
const matchText = text.match("ate");
console.log(matchText);
//for global Search
const matchTextGlobal = text.match(/ate/g);
console.log(matchTextGlobal);
//for global and case sensitive search
const matchtextGlobalCaseInsesitive = text.match(/ate/gi);
console.log(matchtextGlobalCaseInsesitive);

//matchAll returns an iterator containing the results of matching a string against a string (or a regular expression)
const matchAllText = text.matchAll("Cats");
console.log(matchAllText);

//The includes() method returns true if a string contains a specified value otherwise false
//is cases sensitive
const includesText = text.includes("where");
console.log(includesText);
const includesText2 = text.includes("where", 13);
console.log(includesText2);

//The startsWith() method returns true if a string begins with a specified value, or-else false
const startsWithText = text.startsWith("Please");
console.log(startsWithText);
const startsWithText2 = text.startsWith("Please", 1);
console.log(startsWithText2);

//The endsWith() method returns true if a string ends with a specified value, or-else false
const endsWithText = text.endsWith("locate");
console.log(endsWithText);
const endsWithText2 = text.endsWith("loacte", 1);
console.log(endsWithText2); 