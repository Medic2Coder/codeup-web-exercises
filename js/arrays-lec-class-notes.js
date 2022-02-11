"use strict";

//walkthrough by Doc Rob

//strings are complicated data in other languages
// you will see the benefits of using arrays of things that are similar
// console.log("test")

var dog1 = "Fido";
var dog2 = "Spot";
var dog3 = "Fifi";
var dog4 = "Lola";

//use square brackets to delimit the declaration of the array
//use commas to seperate the elements when used in this way
var dogAges = [5, 2, 3, 10]
// var dogs = ["Fido", 5, "Spot", 2] //JS is only language that allows heterogeneous data types
var dogNames = ["Fido", "Spot", "Fifi", "Lola"]; // you can also start out with an empty array and fill in later
// console.log(dogNames);
console.log("Dog names: "+ dogNames);
//if concated as a string is it still readable?

//fundamental propery of an array is it's length, very important
console.log(dogNames.length);
//js is zero based lanaguage meaning...
//order of elements is not arbitrary, does not change unless we change it
console.log(dogNames[0]);//should output Fido
//element at a particular index, first element is zero
var lastIndex = dogNames.length -1;
console.log(dogNames[dogNames.length -1]); //should output Lola

//**notes to self (in voice of Doc Rob):

//how to speak accessing elements
//the element at index 0
//the 0th element in the array
//note that index can also be referred to as subscript
//last element is at index length -1


//how to speak accessing the last element?
//the last element in the array

//loops and arrays are like peas and carrots -Doc Rob
//note to self ^ this would make a good t-shirt idea

// for(var i=0; i<dogNames.length; i<100; i++) { //standard counting moves
//     //start at 0 because JS is a zero based language
// }


//use longer expressive variables for most things, but short syntax for loops and arrays
//Fido is the first element, even tho the index is 0

for (var i = 0; i <dogNames.length; i++) {
    //output the ith element in the array, the variable changes
    //output the element sub i
    //output the element at index i
    // console.log(dogNames[i]);
    console.log(" Dog at index " + i + " is " + dogNames[i]);
}
for (let i = dogNames.length - 1; i >= 0; i--) {//decrement
    console.log(" Dog at index " + i + " is " +dogNames[i]);
}