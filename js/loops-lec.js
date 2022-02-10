"use strict";
//Personal notes
//let num = 8;

//

//for (num; num <=50; num++){
// console.log(num)
// }

// for (/*control variable*/; /*test condition*/; /*iterator*/) {
//     //code to run for each iteration of the loop
// }

// Identify one control variable
// Test the  two run condition
// Iterate through
// Repeat through

// 1. Control Variable - thing we keep checking against
// 2. condition, thing we check against control variable, like num is less than 50
// 3. Iterates
// 4. loops
// 5. Break the loop


// for 8; and 8 is less than 50, for num 8 +1
// check that nine is ...for (
//     whenever this condition turns false we break the loop
//
//
//
// let letters = "";
// for(let i=1; i <=36; i++){ //stop the loop when the character count is 36
//     console.log(i);
//     letters += "z";
//     console.log(letters);
//     //we are or are not trusting i is in parity with letters?
// }
//i<=35 ?
//
// or i --; = nope, don't do this! this is infinie
//
// or letters.lenth -1 in for line (nope that gave us 38 in console log!
//How to solve so we end up with 36?
//
// console.log(letters.length);

//example in class

let letters = "mark"

for (let i=0; i<36; i++) {//stop the loop when the character count is 36
    if (letters.toUpperCase() === letters) ;

    letters = letters.lowercase();

else
    letters = letters.toUpperCase();
    console.log(letters);
    console.log(letters.length);
}
// In Bracket purgatory ^^^

// for (let i=0; i<36; i++){
//     if letters.toUpperCase()===letters();
// }





