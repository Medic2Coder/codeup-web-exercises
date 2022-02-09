"use strict";

let fullNameEntered = false;
let names = "";
// WE DON'T KNOW HOW MANY NAMES THEY HAVE!
//Use the right tool for the right job, because the while loop was not the best tool, where as do while was
do {
    names += prompt("Please enter or add to your name");
    fullNameEntered = confirm("Is this your full name?");
    if(!fullNameEntered){
        names+= " ";
    }
}
alert("This is your name: " + names);























