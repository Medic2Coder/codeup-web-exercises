"use strict";

//Casey's walkthrough and notes

// function showMultiplicationTables (num) {
//     for (let multiplier=1; multiplier <=10; multiplier++) {
//         //7 x 1 = 7
//         console.log(num + " x " + multiplier + "=" +num *multiplier);
//         // console.log(num*multiplier);
//     }
// }

// TODO: What is the syntax error preventing this to console.log? ^

// function printRandomNumbers (num) {
//     for (let i = 1; i <=10; i++){
//         // let randomNum = (Math.floor()*180) =20
//         // let randomNum =math.floor(180 * Math.random()=20)
//         // let randomNum = Math.floor()*180=20
//         randomNum
//         if (randomNum % 2 === 0) {
//             console.log(randomNum + " is even!");
//         }else{
//             console.log(RandomNum + " is odd!");
//         }
//     }
// }
// Casey's example
//more syntax errors
// let randomNum syntax not correct


// function printNumStack(){//casey's Walkthrough in class // nested for loop?
//     for (let i =1; i < 10; i++){
//         console.log(i);
//     }
// }
// printNumStack();

// function printNumStack(){//casey's Walkthrough in class // nested for loop?
//     for (let outerNum =1; outerNum < 10; outerNum++){
//         for (let innerNum =1; innerNum <= outerNum; innerNum++)
//             console.log(outerNum);//not formatted correctly? // Make these a string?
//         // console.log(i);
//     }
// }
// // printNumStack();

//Note to self to review primer on JS with freecodecamp to plug holes in JS knowledge

for (var x = 1, y = 1; x <10; x++, y++) {
    let output = x.toString();
    console.log(output.repeat(y));//Jordan Foote's example
}// Casey comments that this uses multiple control variables in a loop
// however what object is the repeat on? notice it is on string.repeat so output
//type string then dot eg string. and you see all other examples of this use
