(function(){
    "use strict";

    /**
     * TODO:
     * Create an array of 4 people's names and store it in a variable called
     * 'names'.
     */

    var person1 = "James";
    var person2 = "Sarah";
    var person3 = "Xavier";
    var person4 = "Grogu";

    var names = ["James", "Sarah", "Xavier", "Grogu"]
    /**
     * TODO:
     * Create a log statement that will log the number of elements in the names
     * array.
     */
    console.log(names.length);
    /**
     * TODO:
     * Create log statements that will print each of the names individually by
     * accessing each element's index.
     */
    // console.log(names[0]);//should output James
    // console.log(names[1]);//should ouput Sarah
    // console.log(names[2]);
    // console.log(names[3]);
    //
    // /**
    //  * TODO:
    //  * Write some code that uses a for loop to log every item in the names
    //  * array.
    //  */
    // for(let i = 0; i < names.length; i++) {
    //     console.log(names[i]); //micro wins
    // }
    // /**
    //  * TODO:
    //  * Refactor your above code to use a `forEach` loop
    //  */

    // var names = ["James", "Sarah", "Xavier", "Grogu"]; //already said above ^
    names.forEach(name => {
        console.log(name);
    });

    /**
     * TODO:
     * Create the following three functions, each will accept an array and
     * return an an element from it
     * - first: returns the first item in the array
     * - second: returns the second item in the array
     * - last: returns the last item in the array
     *
     * // break down the problem from customer language to "intermediate language psuedocode"
     *
     *
     * Example:
     *  > first([1, 2, 3, 4, 5]) // returns 1
     *  > second([1, 2, 3, 4, 5]) // returns 2
     *  > last([1, 2, 3, 4, 5]) // return 5
     */
    //the following is walkthrough with Doc Rob:
    function first(anArray) {
        return anArray[0];
    }
    function second(anArray) {
        return anArray[1];
    }
    function last(anArray) {
        return anArray[2];
    }

    console.log(first( [1, 2, 3, 4, 5]));
    console.log(first(names));

    console.log(last(names));
    console.log(last([1, 2, 3, 4, 5])); // As per Doc Rob, consider these utility functions
    //In other words, make your functions clean and utilitarian so you can use them over and over or for other needs
    //tools in the toolbox


})();