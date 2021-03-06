"use strict";

// let handler = function () {
//     alert("You clicked something!");
//
// }
//
// document.addEventListener("click", handler);

//function expressions are NOT hoisted to the top of the script -
// ...therefore best practice to put for example document handler on bottom

//This is a better way to limit scope, best practice ^

//remember that regular functions are hoisted to the top of the script

//the function of what you do is seperate from when you do it.


//ACCESS (GRAB) ELEMENT
let header = document.querySelector("#main-header");

//ATTACH EVENT LISTENER
header.addEventListener("click", headerClick);
// header.addEventListener("dblclick", headerClick);


//What happens on header click

// function headerClick() {
//     header.style.backgroundColor = "yellow"
// }
//
let input = document.querySelector("#search");
//
// input.addEventListener("keyup", function (event) {
//     // console.log(event.code);
//
//     //PRINT ELEMENT
//     console.log(event.target);
//
//
// //PRINT KEY CODE
//     console.log(event.code);
// })

//Last Part of walkthrough-lecture:
// input.addEventListener("keyup", function (event) {
//    
// })

let moreBtn = document.querySelector("#more");
moreBtn.addEventListener("click", function (e) {
    let p = e.target.previousElementSibling
    if (p.classList.contains("hidden")) {
        p.classList.remove("hidden");
        e.target.innerText = "Less";
    } else {
        p.classList.add("hidden");
        e.target.innerText = "More";
    }

    console.log(e.target.previousElementSibling);
});





