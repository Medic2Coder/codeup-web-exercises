(function() {
    "use strict";
//walkthrough help with Ry
    /**
     * TODO:
     * Create an object with firstName and lastName properties that are strings
     * with your first and last name. Store this object in a variable named
     * `person`.
     *
     * Example:
     *  > console.log(person.firstName) // "Rick"
     *  > console.log(person.lastName) // "Sanchez"
     */
    let person = {};
    person.firstname = Mark
    person.lastname = Stokes

    /**
     * TODO:
     * Add a sayHello method to the person object that returns a greeting using
     * the firstName and lastName properties.
     * console.log the returned message to check your work
     *
     * Example
     * > console.log(person.sayHello()) // "Hello from Rick Sanchez!"
     */
    console.log(person.firstname);
    console.log(person.lastname);

    /** TODO:
     * HEB has an offer for the shoppers that buy products amounting to
     * more than $200. If a shopper spends more than $200, they get a 12%
     * discount. Write a JS program, using conditionals, that logs to the
     * browser, how much Ryan, Cameron and George need to pay. We know that
     * Cameron bought $180, Ryan $250 and George $320. Your program will have to
     * display a line with the name of the person, the amount before the
     * discount, the discount, if any, and the amount after the discount.
     *
     * Uncomment the lines below to create an array of objects where each object
     * represents one shopper. Use a foreach loop to iterate through the array,
     * and console.log the relevant messages for each person
     */

    person.sayHello = function () {
        console.log(" Hello From " + firstname + " " + lastname);
    }
    person.sayHello();
    console.log(person.sayHello());

    //have a set of parenthesis to potentially take in arguments
    // var shoppers = [
    //     {name: 'Cameron', amount: 180},
    //     {name: 'Ryan', amount: 250},
    //     {name: 'George', amount: 320}
    // ];
let shoppers = [
    {name: "Cameron", amount: 180},
    {name: "Ryan", amount: 250},
    {name: "George", amount: 320}
];
shoppers.forEach(function (shopper) {
    console.log(shoppers.amount);
    if (shoppers.amount > 200) {
        //apply discount
        console.log(shoppers.name + ', your amount before discount is: $ ' + shoppers.amount + ' your discount is: $' + discount + ', and your total after applied discount is $ ' + amountAfterDiscount.toFixed);

    } else {
        //keep original mount
        console.log(shoppers.name + ', your total is: $' + shoppers.amount);
    }
});
//walkthrough help with Ry ^
    /** TODO:
     * Create an array of objects that represent books and store it in a
     * variable named `books`. Each object should have a title and an author
     * property. The author property should be an object with properties
     * `firstName` and `lastName`. Be creative and add at least 5 books to the
     * array
     *
     * Example:
     * > console.log(books[0].title) // "The Salmon of Doubt"
     * > console.log(books[0].author.firstName) // "Douglas"
     * > console.log(books[0].author.lastName) // "Adams"
     */
 let books = [
        {
            title: "Dune",
            author: {
                firstname: 'Frank',
                lastname: 'Herbert',
            }
        }
    ]
    /**
     * TODO:
     * Loop through the books array and output the following information about
     * each book:
     * - the book number (use the index of the book in the array)
     * - the book title
     * - author's full name (first name + last name)
     *
     * Example Console Output:
     *
     *      Book # 1
     *      Title: The Salmon of Doubt
     *      Author: Douglas Adams
     *      ---
     *      Book # 2
     *      Title: Walkaway
     *      Author: Cory Doctorow
     *      ---
     *      Book # 3
     *      Title: A Brief History of Time
     *      Author: Stephen Hawking
     *      ---
     *      ...
     */
books.forEach(function (book, index) { // how to get the greyed out notation :number?
        console.log('book # ' + 1); //interesting problem using for each, use index +1
        console.log('Title: ' +book.title);
        console.log('Author: ' + book.author);
        console.log('---')
});
    /**
     * Bonus:
     * - Create a function named `createBook` that accepts a title and author
     *   name and returns a book object with the properties described
     *   previously. Refactor your code that creates the books array to instead
     *   use your function.
     * - Create a function named `showBookInfo` that accepts a book object and
     *   outputs the information described above. Refactor your loop to use your
     *   `showBookInfo` function.
     */
function createBook(title, author) {
    let authorNameSplit = authorName.split
    return {
        title: title,
        author: {
            firstname: authorNameSplit[0],
            lastname: authorNameSplit[1],
        }
    }
    }
    createBook(title: 'Clean Code', authorName: 'Bob Martin'));

// how to add book to array?

    // push?
    //ry says yes:

    addBook(createBook('Clean Code', 'Bob Martin'));

    function addBook(book) {
        books.push(book)
    }
})();