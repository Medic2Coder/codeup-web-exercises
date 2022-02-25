"use strict";
//This is walkthrough portion
// let incrementor = 0;
// while (incrementor > 0) {
//     console.log(incrementor--);
// }
// console.log("The loops has ended");

//TODO: Use a while loop to output the numbers from 8-50
//TODO: Using the same example, output the ODD numbers from 8-50
//TODO: Hint: Use the % operator..


// let i = 8;
// while (i <=50) {
//     console.log(i++);
// }

for (let i = 8; i<=50; i++) {
  if ( i % 2 !== 0) console.log(i);
}

