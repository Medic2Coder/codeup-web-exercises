"use strict;"
//walkthrough with Doc Rob
//good code design means easier to maintain code for longer term

//console.log("test log");


//JS allows you to declare variables before the function for better code design
//in bigger programs sometimes a good idea to put functions in it's own file
var oddNumber = promptUserForOddNumberInRange(1, 50);
oddNumber = parseInt(oddNumber);
// console.log(oddNumber);
printOddNumbersinRangeWithSkip(1, 50, oddNumber);

function printOddNumbersinRangeWithSkip(low, high, skipNummber) {
    //INCLUSIVE
    for (let i = low; i <=high; i = i ++){
        if ( i === skipNummber || i %2 ===0){ //loose vs strict equality
            //if i is the skipnumber then output something special
            if (i===skipNummber){
                console.log("Yikes! Skipping number: " +1);
            }
            continue;
        }
        // if you get here then there should be an odd number tha tis within range and not skipnumber
        console.log(" Here is an odd number: " + 1);
    }
}

// continue forces to skip rest of iteration and start next iteration






function promptUserForOddNumberInRange(low, high) {
    //loop until user gives an odd number in the range
    var result;
    while (true) {
        var result = prompt("Enter an odd number from " + low + " to " + high);
        console.log(result);
        if (result !== null && result %2 ===1 && result >= low && result <=high){ //simple even check
            break;
        }
    } return result;
}
//get out of the loop using and if statement and a break is sometimes simpler
//global or within code block only?

// console.log(result);

//how many more checks do we need?

//design your functions into very specialized functions, is it a happy function?