const super_secret_key = "password123";  // you can't change the value bc strings are immutable
//tell me a fact baout strings and objects in js?
//answer: they are immutable

// super_secret_key = 'new string boi'; //will not work

//differences between let and var:

// {
//
//     {
//         {
//             {       let sample ="hi there"; //scoping is inside a curly brace
//             }
//             console.log(sample); //works if var  does not with let, let is only accessible within that scope// but will work inwardly
//         }
//     }
// }


// {                   let sample ="hi there"; //scoping is inside a curly brace
//
//     {
//         {
//             {
//             }
//             console.log(sample); //works if var  does not with let, let is only accessible within that scope// but will work inwardly
//         }
//     }
// }
//
//

//anonymous function is when you don't write specifically function instead just put let
let sample = "hi there"; // if you define a variable inside a function probably wont be able to see it outside the function

let scopeyBoi = function () {
         console.log(sample);
    }
     scopeyBoi();
    //but can see the variable inside the function if its placed outside on top


//TODO: further read on lexical scoping
