"use strict";

$(document).ready(function() {

    // INSERT JAVASCRIPT CODE SAMPLE HERE

});

$(document).ready(function() {
    alert( 'The DOM has finished loading!' );
});

var contents = $('#codeup').html();
alert(contents);

//help with walkthrough from Casey:

//make html in js to practice using dom and jquery - per Casey

$('body').append(getTemplates("George"));

//HTML
// /*HTML*

// function getTemplates(name) {
//     return <div>
//         <h1>Templates ..... yeah!</h1>
//         <p data-user-id=$"{studentObj.id}";