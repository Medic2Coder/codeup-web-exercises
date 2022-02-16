

//still needs to be polished up
//walkthrough with Casey modifications will be noted below:




// (function() {
    "use strict";

// create a circle object
// var circle = {
//     radius: 3,
//         return; // TODO: return the proper value

        function area (radius) {
            // let area = Math.PI * radius * radius //better but syntax is redundant in area? circle back to this, fun with puns.
            // return area;
            return Math.PI * radius * radius; //suggestion per Casey to make this less verbose
        }
// TODO: complete this method
// hint: area = pi * radius^2
// TODO: return the proper value
console.log(area(3));



        // logInfo: function (doRounding) {
            // if (doRounding){
            //     console.log(Math.round(this.getArea)); //works if getArea declared without comments above
            // }
    //         // TODO: complete this method.
    //         // If doRounding is true, round the result to the nearest integer.
    //         // Otherwise, output the complete value
    //         console.log("Area of a circle with radius: " + this.radius + ", is: ");
    //     }
console.log(Math.round(28.274333882308138));

// circle["radius"] = 5; //alternatively use bracket notation

    // // log info about the circle
    // console.log("Raw circle information");
    // circle.logInfo(false);
    // console.log("Circle information rounded to the nearest whole number");
    // circle.logInfo(true);
    //
    // console.log("=======================================================");
    // // TODO: Change the radius of the circle to 5.
    //

console.log(area(5));
console.log(Math.round(78.53981633974483
));




    // // log info about the circle
    // console.log("Raw circle information");
    // circle.logInfo(false);
    // console.log("Circle information rounded to the nearest whole number");
    // circle.logInfo(true);
// })();