"use strict";


// Create a function which returns true if the given argument is a number, false if it is not a number
//Testcases to consider:
// Numeric strings?
// Boolean?
// Arrays?
// Objects?
// To test, simply invoke your function inside a console.log and pass in values of different types (see above) as arguments


// function trueForNumber(x){
//     x === 3;
//     if (x) === !NaN);
//     return true;
//     else
//     prompt("false!") ; //first thought process
// }
//
// Function Numeric(a) {
//     if(isNaN(a)===false)
//         return true;
//     else
//         throw "Element is not a number"; //stackflow inspired
// }
//
// function isNumber(c)
// {
//     return isNaN(c||typeof(c)!=="number"?false:true; //syntax?
// }

// function numerical (y) {
//     y=2;
//     if(isNaN(y)===false) {
//         return true;
//     } else
//         return false; //favorite
// }
//
//
// console.log(numerical);

// Casey's method'

function isANumber(maybeANum){
    // console.log(Number.isNaN(maybeANum));
    // return !isNaN(maybeANum); // give opposite of the opposite of truthiness
    return !!parseFloat(maybeANum);
}

//string
console.log(isANumber("zebra"));

// numeric string
console.log(isANumber("12"));



function definitelyNumerical(numberOrNot){ //making the function my own for memory purposes
    return !!parseFloat(numberOrNot);

}
//numeric string
console.log(definitelyNumerical("132"));
//mary poppins typo
console.log(definitelyNumerical("super cal i fridgelicious"));

