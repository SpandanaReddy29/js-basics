const num1 = 29;
const age = 28;
let isAgeGreater = true;

                //****************** IF ********************//
//specifies a block of code to be executed, if a specified condition is true
const ifStatements = () => {
    if(age < num1){
        return console.log("IF STATEMENT", isAgeGreater);
    };
};
ifStatements();

//**********************************************************************************************************//

                //****************** ELSE ********************//
//Use the else statement to specify a block of code to be executed if the condition is false

const elseStatements = () => {
    if (num1 < 18) {
        return console.log("Good day");
    } else {
        return console.log("Good evening")
    }
};
elseStatements();

//**********************************************************************************************************//

                //****************** ELSE IF ********************//
//else if statement to specify a new condition if the first condition is false.

const elseIfStatements = () => {
    if (age < 10) {
        return console.log("Good morning");
    } else if (age < 20) {
        return console.log("Good day");
    } else {
        return console.log("Good evening");
    }
}
elseIfStatements();

//**********************************************************************************************************//

                //****************** SWITCH ********************//
//The switch expression is evaluated once.
//The value of the expression is compared with the values of each case.
//If there is a match, the associated block of code is executed.
//If there is no match, the default code block is executed.

let day;
const switchStatements = () => {
    switch (new Date().getDay()) {
        case 0:
            day = "Sunday";
            break;
        case 1:
            day = "Monday";
            break;
        case 2:
            day = "Tuesday";
            break;
        case 3:
            day = "Wednesday";
            break;
        case 4:
            day = "Thursday";
            break;
        case 5:
            day = "Friday";
            break;
        case 6:
            day = "Saturday";
    }
    console.log(`Today is ${day}`);
}
switchStatements();
//**********************************************************************************************************//