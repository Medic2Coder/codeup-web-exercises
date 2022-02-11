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

//element at a particular index, first element is zero