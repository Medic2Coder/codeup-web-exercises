"use strict";

var sayhello = sayhello("hello world")

function istwo(num) {
    if(num === 2) {
        return true;
    } else {
        return false;
    }
}

// console.log(random)
// console.log(isTwo)random));
//
// function isTwo(num) {
//     return num ===2;
//
// }
// console.log(random)
// console.log(isTwo(random))

//tip percentage
//two paramaters, total bill, total amount to tip

function calculateTip(tipPercentage, totalBill) {
    return tipPercentage * totalBill;
}

console.log(calculateTip(tippercentage 0.20, totalBill 20));
console.log(calculateTip(tippercentage 0.25, totalBill 25.50));

//prompt the user for what the total bill and what percetnage they would like to tip
var totalBillInput = prompt (message: "What is your total bill amount?");
var tipPercentInput = prompt(message: "What percentage would you like to tip?");

function applyDiscount (originalPrice, discountPercent) {
    var discountAmount = originalPrice * discountPercent;
    return originalPrice - discountAmount;
}

console.log(applyDiscount(originalPrice:45.99, discountPercent 0.12));



