const arr1 = [3,4,2,1];
    //arrays come with predfined methods that work on any array
console.log(arr1.sort());
   //worked
      //sort is an array method so it has to be attached to an array to work
//method is a function that is never called by istself
//method is always called using dot notation using some kind of data such as an array
//must incluse paramter list with parenthesis, even if it's empty as in sort

//it is possible to pass a function into another function's argument list as an argument
 //concepts: higher order functions and callback functions

//higher order functions: a function that takes another function as an argument, or returns a function as a return value

//callback functions: a function that's passed into a higher order function as an argument, then used inside it (called back)
//callback function is the flip side of higher order function

/*ARRAY METHODS:
MAP, FILTER, REDUCE
... are higher order functions, each take a callback function as an argument
and this callback function is defined by the programmer and is usually in the form of an
arrow function
NEED TO KNOW:
None of these methods (map, filter, reduce) are mutator methods, they do not change the original array
   can be classified as iteration methods - they iterate through the array as many times as the array length

   Last to know: All have return values, not all array methods do, but map, filter return a new array
   reduce will return a single a value
 */


