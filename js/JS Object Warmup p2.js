"use strict";

// JS Object Warmup, pt 2:
// Create an object representing a person’s contact info. It should have:
//     phone number
// street address
// state
// postal code
// email address
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

// function Person(names, occupation, dob) {
//     this.streetAddress = streetAddress;
//     this.postalCode = postalCode;
//     this.dob = dob;
// }