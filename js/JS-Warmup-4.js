"use strict";
// JS Object Warmup, pt 4:
// We are going to create a method which
//          let name = window.prompt("Enter all your names to your heart's content: ");
//          alert("Your name is " + name);
// allows a user to input their desired amount of names names

// use prompt, alert, confirm inside of a while loop

//     assign each name to an array
 /// once the user decides they are done giving names, end the loop and return the string array

// then assigning that returned array by invoking your new function on the Person.names property value!


//     Things to consider:
//     Should this be a standalone function or should it be a method on the Person object?

//prompt, alert, confirm then should use an html file


//Casey's walkthrough below:

//Start with function, no need for parameters? No need

function Person (occupation, dob, contactInfo) {
    this.names = getNames();
}

function getNames() { //while loop or for loop, while loop may be easier in this case //if you name something get, intention is you will return it
    // this.names = () => {}
    let namesArr = [];
    let hasMoreNames = true;
    while (hasMoreNames) {
        //get those names!
        namesArr.push(prompt("Please enter your desired name")); // no variable assignment at this moment so...
        //prompt for names //push puts the input at the end, built into the array prototype
    }
    return namesArr;

}
// this.names();
console.log(getNames);

/*This is called a
"getter method"
 */






















