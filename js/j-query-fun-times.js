console.log($(".navContent"));

//Changing styles or attribute


$(".navbar").css("background-color", "green");

console.log($("div.container-fluid>p.col-12"));

$("div.container-fluid>p.col-12").hover(function () {
    //hover-in function
    //jquery changes the definition of this, has lexicical scoping
    $(this).css("background-color", "lightblue");
}, function(){

    $(this).css(backgroundcolor)
    //   TODO: How to get the  (name: and value: that is in light grey before background color and light blue?
    //meaning if you call for jquery this inside of here, it is scoped for whatever triggered the hover function
    //means we don't have to resave the jquery or save it as a variable


});



