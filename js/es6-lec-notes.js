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
// let sample = "hi there"; // if you define a variable inside a function probably wont be able to see it outside the function
//
// let scopeyBoi = function () {
//          console.log(sample);
//     }
//      scopeyBoi();
//     //but can see the variable inside the function if its placed outside on top


//TODO: further read on lexical scoping

// function notLexicalThings(){                           //highest scoping is global scoping
//               console.log(this.global.parseInt('12')); //'this' is currently NOT lexical
//
// }
//            notLexicalThings();

let lexicalThings = () => {
    // console.log(this.global.parseInt('12'));
    this['new prop'] = "string boi";
    console.log(this);
    // return this;

}
lexicalThings();
// console.log(lexicicalThings());

//"use strict"; TODO: review "use strict" use cases

//import hopeThisIsVisible from "./es6-lec-notes.js", make sure to type it out to get the js
//can be used to cross reference JS files
