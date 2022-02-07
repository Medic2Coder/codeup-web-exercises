"use strict";

// IF / ELSE IF / ELSE
// Create a function called getToDestination which will help determine how a person can get to their destination!
//     It will accept 4 arguments and the parameter names are:
//     age - the age of the rider
// isInsured - a boolean telling the function if the rider has insurance
// hasCar - a boolean describing if the rider has a car
// canGetRideshare - boolean describing if the rider can get a ride share (Uber, etc)
// If the rider is over 16, has insurance, and has a car then they can use their own vehicle
// If the rider is not over 16, has no insurance, OR has no car but they CAN get a rideshare, then they call up a rideshare service
// If the rider meets none of the above, they should call a friend for a ride!
//     This getToDestination should not return any value, but rather console log based on the conditions met.
//     getToDestination, part 2
// Create a function called canGetRideshare() which will RETURN a boolean
// It will determine if there are drivers nearby and the person has enough money for the ride
// Now, when you call getToDestination(), instead of passing in a canGetRideShare parameter
// Call canGetRideshare() in the else if after !isLegalDriver &&...
// Be sure to log to the user if they can or cannot get a rideshare

var age = 17;
var isInsured = true;
var hasCar = true;
var canGetRideShare = true;

console.log(isInsured);

// function getToDestination(age,isInsured, hasCar, canGetRideShare) {
//
//     if (age > 16 && isInsured   && hasCar) {
//         console.log(You Can Use Your Own Car);
//         //true true true true
//     } else if (age <=16 && !isInsured || !hasCar && canGetRideShare) {
//         console.log("You can get a RideShare!");
//     } else {
//         console.log("You gotta call a friend");
//     }
// }
//
// getToDestination(age:17, isInsured:true, hasCar:true canGetRideshare:true);

//Something after argument list is breaking the code
//also a flaw in the logic
