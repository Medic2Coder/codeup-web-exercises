"use strict";

let handler = function () {
    alert("You clicked something!");

}

document.addEventListener("click", handler);

//function expressions are NOT hoisted to the top of the script -
// ...therefore best practice to put for example document handler on bottom

//This is a better way to limit scope, best practice ^

//remember that regular functions are hoisted to the top of the script

//the function of what you do is seperate from when you do it.


//ACCESS (GRAB) ELEMENT
let header = document.querySelector("#main-header");

//ATTACH EVENT LISTENER
header.addEventListener("click", headerClick);

//What happens on header click

function headerClick() {
    header.style.backgroundColor = "yellow"
}