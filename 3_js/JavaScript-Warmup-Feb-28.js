
// var bugs = ["mosquito", "ant", "scorpion", "ant", "ant", "mosquito", "typo", "reference error", "type error"];
//
// console.log(removeAll(bugs, "ant"));
//
// // should print
// [
//     'mosquito',
//     'scorpion',
//     'mosquito',
//     'typo',
//     'reference error',
//     'type error'
// ]

// Warmup: Write a function called removeAll that takes two parameters.
//     One that represents an array and another that represents a value to be removed from that array.
//     When called this function should return an array with all the values of the original array except
// the specified value to be removed.


              //Walthrough below... however still want to use pop
//
// function removeAll (coffees, valueToRemove) {
//     let coffees = ['espresso', 'mochachino', 'cocoa', 'jetblackhyperchargedcoffee'];
//
//     for (let i = 0; i <coffees.length; i++) {
//     if (valueToRemove === coffees[i]) }
//     continue;
// }
// filtered.push(coffees[i]);
//
// console.log(removeAll(coffees, "cocoa"));

// TODO: Refactor this from walkthrough:

// {
//     let coffees = ['espresso', 'mochachino', 'cocoa', 'jetblackhyperchargedcoffee'];
//
//     for (let i = 0; i <coffees.length; i++) {
//     if (valueToRemove === coffees[i]) }
//     continue;
// }
// filtered.push(coffees[i]);
//
// console.log(removeAll(coffees, "cocoa"));

//Example from article:

// var array = [10,11,12,13,14,15,16,17];
//
// function removeElement(arr) {
//     if(arr.length > 0)
//         arr.length --;
//     return arr
// };
//
// var newArray = removeElement(array);
// console.log(newArray);
// Adding it together:

let coffees = ['espresso', 'mochachino', 'cocoa', 'jetblackhyperchargedcoffee'];

function removeElement(arr) {
    if (arr.length >0)
        arr.length --;
    return arr
};

let newCoffees = removeElement(coffees);
console.log(newCoffees);

//TODO: still not calling correctly       Done.

// TODO: Celebrate even the samll wins! Done.



