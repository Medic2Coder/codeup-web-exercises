"use strict";

// Write a function called findAverage that takes in an array of integers representing grades and returns the average.
//     Example input: [95, 74, 86, 100]
// Example output: 88.75 (edited)
// Ryan's example:

// function findAverage(){//create a bucket
//     let sum = 0;
//     //loop through grades, where we add each grade to the sum
//     grades.forEach(function (grade) {
//         sum +=grade;
//     }
//     for (let i = 0; i < grades.length; i++) {}
//     return.sum /grades.length;
//
// }
//
// console.log(findAverage) [95, 74, 86, 100]

//syntax


// let nums = [95, 74, 86, 100];
//
// let totalSum = 0;
// for(let i in nums) {
//     totalSum += nums[i];
// }
//
// let numsCnt = nums.length;
// let average = totalSum / numsCnt;
//
// console.log('Grade Point Average is: ' + average);

//Another way

let arr = [95, 74, 86, 100];

function arrayAverage(arr){
    let sum = 0;
    for(let i in arr) {
        sum += arr[i];
    }
    let numbersCnt = arr.length;
    return (sum / numbersCnt);
}

let avg = arrayAverage(arr);
console.log(avg);

