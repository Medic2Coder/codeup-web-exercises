"use strict";

// TODO: Use a for loop to print the even numbers between 0 and 30, inclusive.
//  HINT: remember the remainder operator (modulo)


// let i;
// i = 0; //add a for to this
// while (i<=30) {
//     i+=2;
//     console.log(i);
// }


// TODO: loop through numbers 1 - 40. Print "marco" if it's divisible by 3. Print "polo" if it's divisible by 5.
//  -> If it's neither print "I'm not playing"
//  -> Print "marco polo" if it's divisible by 3 and 5.

for (let i = 0; i <=40; i++){
    if (i%3 === 0){
        console.log(i+"marco");
    } else if (i%5===0){
        console.log(i + "polo");
    } else if (i%3 ===0 && i%5 !==0){
        console.log(i +"I'm not playing... this isn't fun :(");
    }  if (i%3 ===0 && i%5 ===0)
        console.log(i+" Marco Polo!")
}

//Strange console log results, 3569101215
