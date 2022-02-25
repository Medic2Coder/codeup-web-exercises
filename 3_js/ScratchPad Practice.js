"use strict";

//This is my scratchpad for practicing JS, for refreshing knowledge and building on that knowledge.

/*This will most likely not be extremely organized as this is for free flow externalizing of JS thoughts and to improve
muscle memory in typing out this beautiful functions.
 */

/* Attempting to be as "Feynman Technique" as possible, ie, starting with a blank note and writing everything about the topic
plainly and simply. To advance this, place questions that myself or a child would have when introduced to this knowledge
and answer that, Question and answer style if necessary to be able to speak it out or use Socratic method.
 */
//Started: 16Feb2022 0530

// function testFun(param1, param2){
//     console.log(1, 2);
// }
//
// testFun(1,2);

//Much of this work is inspired by the work I did in FreeCodeCamp
function reusableFunction(){
    console.log("Hi World");
}
reusableFunction();

function functionWithArgs(parameter1,parameter2){
    console.log(parameter1 + parameter2);
}
functionWithArgs(1,2);
functionWithArgs(7,9);




function nextInLine(arr, item) {
    // Only change code below this line
    arr.push(item);
    return arr.shift(item);
    // Only change code above this line
}

// Setup
const testArr = [1, 2, 3, 4, 5];

// Display code
console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6));
console.log("After: " + JSON.stringify(testArr)); //To make a string from an array use JSON.stringify


