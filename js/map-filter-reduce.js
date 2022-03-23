

"use strict";

const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];
//guided by walkthrough
let usersWithThreeOrMoreLanguages = users.filter(function (user){
    //return boolean value to check condition of each user
    return.user.languages.length >=3; //or greater than two
});
//comment out below then run
let usersWithThreeOrMoreLanguages = forEach(function (user){
    console.log(user.languages);
});

let emailAddresses = users.map(function (user ) {
   // TODO: check return.user.email  and  know that arrow is a call back function
   // return.user.email;
   // or with arrow function
    users.map(e=>e.email);

});
     //write last function here

emailAddresses.forEach(function (email){
    console.log(email);
});

let totalYears = users.reduce((totalYears, user ) => {
    return totalYears + user.yearsOfExperience;

}, 0);
                                                   //TODO: How to get the :string and :{...}) notation?
let longestEmail = users.reduce(longest   , user   , ) => {
           if (user.email.length.longest.length) {
               longest = user.email;

           }
             return longest;
}, ''

console.log(longestEmail);

//TODO ^ Weird, is there a better way to do this above ^


        let instructorString = users.reduce ((resultString, user ){
            return resultString +=user.name;

}

console.log(instructorString);

//TODO ^ clean this up

//Bonus

let languages = users.reduce((listOfLanguages, user)=>{
    // if (!ListofLanguages.includes(user)) //so we may need to loop through each
    users.langauges.forEach(function(lang ){
        if (!listOfLanguages.includes(lang)) {
            listOfLanguages.push(lang);
        }
        // return ListOfLanguages  //dont return in the loop!
    })
    return listOfLanguages; //implicitly looping through each user and looping through their languages, no?
//          so if langauge isnt in final array, will push in
}, [])











