"use strict";

// (function(){
//     "use strict";
//
//     var planetsString = "Mercury|Venus|Earth|Mars|Jupiter|Saturn|Uranus|Neptune";
//     var planetsString;

    /**
     * TODO:
     * Convert planetsString to an array, and save it in a variable named
     * planetsString.
     * console.log planetsString to check your work
     */
// var planetsString = ["Mercury", "Venus", "Earth", "Mars", "Jupiter", "Saturn", "Uranus", "Neptune",] //this was done manually
// so to save time one can use split:
let planetsString = "Mercury|Venus|Earth|Mars|Jupiter|Saturn|Uranus|Neptune";
let planetsString = planetsString.split("|");
// console.log(planetsString);
    // console.log(planetsString);
    // console.log(planetsString)

    /**
     * TODO:
     * Create a string with <br> tags between each planet. console.log() your
     * results. Why might this be useful?
     *
     * BONUS:
     * Create another string that would display your planets in an unordered
     * list. You will need an opening AND closing <ul> tags around the entire
     * string, and <li> tags around each planet.
     */
    // let listPlanets = planetsString.split("|");
    // let breakListPlanets = "<ul>" + "<li>" + listPlanets.join("</li><li>") + "</li>" + "</ul>";
    // console.log(listPlanets);
    // console.log(breakListPlanets);

    //Note to self, then would this work to make an ordered list with same logic?
//let's try

let listPlanets = planetsString.split("|");
// let breakListPlanets = "<ol>" + "<li>" + listPlanets.join("</li><li>") + "</li>" + "</ol>"; //not working
// let breakListPlanets = "<ul>" + "<li>" + listPlanets.join("</li><li>") + "</li>" + "</ul>";//trying ul again, still not working
console.log(listPlanets);
//from walkthrough:


//Place code here for

//code here for
function buildPlanetUL (arrOfPlanets) {
    let newString = '<ul>';
    for (let i = 0; i < arrOfPlanets.length; i++){
        newString += '<li>';
        newString += arrOfPlanets[i];
        newString += '</li>';
    }
    newString += '</ul>';
    return newString;
}


// console.log(breakListPlanets);// not working
//
// Collections.sort(list);

//results but not actually ordered, how to make it alphabetical?
// int[] arr = listPlanets;
// ins[] arr = ["Mercury", "Venus", "Earth", "Mars", "Jupiter", "Saturn", "Uranus",  "Neptune"]
// let arr = ["Mercury", "Venus", "Earth", "Mars", "Jupiter", "Saturn", "Uranus",  "Neptune"]
// Arrays.sort(arr);
// System.out.println("Modified arr[] : %s",
//     Arrays.toString(arr));



// listPlanets.sort();
// console.log(listPlanets); //Much better



// })();