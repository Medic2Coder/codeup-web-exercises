"use strict";

// JS Object Warmup, pt 2:
// Create an object representing a person’s contact info. It should have:
//     phone number
// street address
// state
// postal code
// email address
//

const mark = {
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

console.log(mark);
console.log(mark.password);
//
let contactInfo = {
    // streetAddress: ["8888 Research Forest Drive", + "Houston, Texas" + 77382], // //why a NaN here?
    streetAddress: "8888 Hazel Lane",
    state: "Texas",
    city: "Houston",
    postalCode: 77382,
    emailAddress: "somethingsomething@gmail.com"

}

console.log(contactInfo);
console.log(contactInfo.city + "," + contactInfo.state + ","); //there is an easier way
console.log(typeof this);

//TODO: print out the formatted address of the contact info
// It should look like this-ish:

//123 anywhere Ln

//constructor function:

//Defines a ContactInfo object
function ContactInfo (streetAddress, postalCode, dob, state) {
    this.streetAddress = streetAddress;
    this.postalCode = postalCode;
    this.dob = dob;
    this.state = state;
}

// function Mark (fullname,occupation,dob,contactInfo) {
//     let person2 = new Mark( fullname,occupation, dob, contactInfo);
//     new ContactInfo(streetAddress, person2)
//
// }
// This will help you learn to work with APIs