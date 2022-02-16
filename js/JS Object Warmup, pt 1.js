"use strict";
// JS Object Warmup, pt 1:
// Create an object representing a person. It should have properties representing:
//     names (an array of strings)
// date of birth
// occupation
// Hard code some values in that object, then log it and its properties to the console

const Mark = {
    fullname:["Markle", "M.", "Sparkle"],
    firstname: "Markle",
    lastname: "Sparkle",
    species: 'human',
    model: 'north american',
    year: 1999 + "wishful thinking",
    eyes: 'brown',
    password: "fortran4lie",
    occupation: "Padawan to code gremlin",
    dob: "10.21.1999"
};

console.log(Mark);
console.log(Mark.password);
//

//walkthrough by Casey:

// let person2 = Object.create(person); //syntax error........
//
// person2["names"]=["ry", "sutton"];
// person2["occupation"]="Fab Father";
// person2.dob ="01.01.1998"
// console.log(person2);


//


