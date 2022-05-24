//async function to fetch definitions

async function fetchDef(word) {
    let response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
    let data = await response.json();
    let quote = data[0].meanings[0].definitions[0].definition
    let definition = document.querySelector(".definition")
    definition.innerText = quote;
    
}

//search for definition (event listeners)

const inputField = document.querySelector("#input-word")
const searchButton = document.querySelector(".search-definition")
let word 

inputField.addEventListener("keyup", function(event) {
      word = event.target.value
      searchButton.addEventListener("click", function (){
          fetchDef(word)
      })
   })

//save definitions (create and append li's)

let saveButton = document.querySelector(".save-definition")

saveButton.addEventListener("click", async function appendDef() {
    let definition = document.querySelector(".definition")
    let quote = definition.innerText
    let saveList = document.querySelector("ul");
    let newLi = document.createElement("li");
    let savedDefinition = document.createTextNode(quote);
    newLi.appendChild(savedDefinition);
    saveList.appendChild(newLi)
    if ("click" == 3) {
        console.log("stop")
    }
})

//dark mode 

const darkMode = document.querySelector(".dark-mode")

darkMode.addEventListener("click", function (){
    let body = document.querySelector("body")
    body.classList.toggle("dark-mode-theme")
    
})


/*
RECAP
- ive appended saved definitons to ul 
- ive figured out a way to generalise the url 
- but i dont know how to connect input to function parameter
- did some quick dark mode for something kinda cool 

- i captured value of input field and used it to search api;

*/

/*
TO DO 
- get audio;
- maybe put delete button for saved searches
- maybe put a limit on how many to save 
- display searched word too
*/

//let saveList = document.querySelector(".saved-list")
/*saveButton.addEventListener("click",function () {
    fetchDef();
   let saveList = document.querySelector("ul");
   console.log(saveList);
   let newLi = document.createElement("li");
   console.log(newLi);
   let savedDefinition = document.createTextNode(quote);
   console.log(savedDefinition);
   newLi.appendChild(savedDefinition);
   saveList.appendChild(newLi)
*/

/*
- code for appending saved searches
  - how to get definition into .createTextNode X

- code for searching for definition with input
  - need to find a general api to use? 
  - changed the url so it inputs var word into url 
  >how to get input field text into variable and then into function
- code for searching for audio and playing it
 */

