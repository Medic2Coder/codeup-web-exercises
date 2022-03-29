// Handle An API Promise
// Create a file named promises.js inside of your js directory and link it to an HTML file of your choice.
//
//     Generate a Personal Access Token for the GitHub API.
//
//     We will use this so that we don't get rate limited when talking to the GitHub API. You can add the token to your requests like this:
//
//
// fetch(url, {headers: {'Authorization': 'token YOUR_TOKEN_HERE'}})
// Create a function that accepts a GitHub username, and returns a promise that resolves returning just the date of the last commit that user made. Reference the github api documentation to achieve this.
//
//TODO: This ^
//get commits with mimicing the green squares for bonus effect


fetch('https://api.github.com/users/Medic2Coder', {headers: {'Authorization':gitHubToken}})
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.log(error));

//walkthrough:
const baseURL = 'https://api.github.com/users/Medic2Coder';
                         // function getCommits(baseURL) {
                         //     return fetch(url, {headers: {'Authorization':gitHubToken}})
                         //         .then(response => response.json())
                         //         .then(data => console.log(data))
                         //         .catch(error => console.log(error));
                         // }
function getLastPush(username) {
    const url = `${baseURL}/events/public`;
    return fetch(url, {headers: {'Authorization':gitHubToken}})
        .then(response => response.json())
        .then(data => console.log(data)) //do something with data, loop through, find first push event and return it //do some logic here and return it
        .catch(error => console.log(error));   //and remove these console.logs
}
// fetch(baseURL + "/")
getLastPush('Medic2Coder').then(event => {
    // $("body").html(event.created_at + " " + event.type + "</li>");
    console.log(event);
});

//TODO: review that option command t is your friend















// TODO: THIS below:
//     Create Your Own Promise
  // Write a function named wait that accepts a number as a parameter, and returns a promise that resolves after the passed number of milliseconds.
//
//
// wait(1000).then(() => console.log('You\'ll see this after 1 second'));
// wait(3000).then(() => console.log('You\'ll see this after 3 seconds'));
// 1. As a bonus make sure the promise resolves with the milliseconds in return, so you can make the console log message more dynamic.