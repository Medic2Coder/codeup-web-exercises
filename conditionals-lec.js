"use strict";

//class notes: name ==="xavier"
//based on this condition you can either have a or b branches
//T executes some code, False executes some code
//the most complex logic is based on very small decisions
//in essence executing specific blocks of code

let isAdmin = false;

if (isAdmin) {
    console.log("You're an admin")
}

let itemPrice = 4.99;
let moneyInMyWallet = 5.00;

if (moneyInMyWallet > itemPrice) {
    console.log("You can buy this itemPrice")
} else {
    console.log("You can't buy this ya poor")
}

//can I buy a drink at the bar?
//gather info, details that will become variables
//drinking age, price of beer
var age = 21;
var priceOfDrink = 8.00;

if (moneyInMyWallet >= priceOfDrink && age >= 21) {
    console.log("You can buy a drink")
} else {
    console.log("Nope")
}


//note to self: syntax

