

    "use strict";
    // Allow the user to enter the Konami Code: "↑ ↑ ↓ ↓ ← → ← → b a enter" (the return key)
    // Find the matching sequence using the code above for each key in the Konami Code.
    //     Don't worry about capital a or b just check for lowercase.
    // After the correct Konami Code sequence is inputted, have the script alert the user: "You have added 30 lives! Other ideas:
    // Change the background screen.
    //     Play a sound.
    //     Be creative!
    //     Happy Playing.

    //Finding the code:
    // "↑ ↑ ↓ ↓ ← → ← → b a enter"  :
    //                   konamiCode = "3838404037393739666513";
    //if konamiCode never changes, then is would be preferable to have it as const vs let
    //therefore const konamiCode = "3838404037393739666513";


//     $(document).keyup(function(KeyboardEvent){
//         const konamiCode = "3838404037393739666513";
//         let codeEntered = "";
//     console.log(KeyboardEvent.code);
// });


    //example from jquery team:

    // if ( window.addEventListener ) {
    //     var state = 0, konami = [38,38,40,40,37,39,37,39,66,65];
    //     window.addEventListener("keydown", function(e) {
    //         if ( e.keyCode == konami[state] ) state++;
    //         else state = 0;
    //         if ( state == 10 )
    //             window.location = "http://example.com";
    //     }, true);
    // }



    //copypasta for alert to you have added 30 lives

    //this works:
    if ( window.addEventListener ) {
        var state = 0, konami = [38,38,40,40,37,39,37,39,66,65];
        window.addEventListener("keydown", function(e) {
            if ( e.keyCode == konami[state] ) state++;
            else state = 0;
            if ( state == 10 ) {
                alert("You have added 30 lives!"), window.location = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
            }

        }, true);
    }

    