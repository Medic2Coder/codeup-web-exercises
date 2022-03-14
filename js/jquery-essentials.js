
//VERSION USING VANILLA JS...
(function(){

// get the thing
    let navContent = document.getElementById("navContent");

// log the thing to make sure you got the thing
// console.log(navContent);


// create an element
    let nameElement = document.createElement("p");

// get the data and set it to the text of the new element
    nameElement.innerText = "Hi, " + getGitHubInfo().name + "!";
    nameElement.style["color"] = 'white';
    nameElement.classList.add('col-4');
    nameElement.classList.add('align-self-end');
    nameElement.classList.add('text-start');

// TODO: Add nameElement to the DOM - specifically in between the GitHub Logo and the ul on the navbar
    navContent.insertBefore(nameElement, navContent.children[1]);


    let contentDiv = document.querySelector('div.container-fluid.container-md.row.mx-md-auto.mt-4');

    let details = document.createElement('p');
    details.innerText = getGitHubInfo().details;

    contentDiv.replaceChildren();


// PRETEND THIS IS AN API CALL ACROSS THE INTERWEBS
    function getGitHubInfo(){
        return {
            name: "vegetasrevenge",
            details: "I DO CODE REAL GUD 🧠"
        };
    }
})()






