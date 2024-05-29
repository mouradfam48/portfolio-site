//create footer element
const currentDate = new Date();
const thisYear = currentDate.getFullYear();
const footer = document.createElement("footer");
const copyright = document.createElement("p");
copyright.innerHTML =  '<small> mourad fam &copy; 2024</small>';

footer.appendChild(copyright);
document.body.appendChild(footer);

//create list section 

let skills = ["JavaScript", "HTML", "CSS", "Adobe ", "GitHub"];
let skillsSection = document.getElementById("skills");
let skillsList = document.createElement("ul");
skillsSection.appendChild(skillsList);
for (let skill of skills){
  let skillItem = document.createElement("li");
  skillItem.innerText = skill;
  skillsList.appendChild(skillItem);
}

const messageForm =document.querySelector("[name='leave-message']");
console.log(messageForm);
messageForm.addEventListener("submit",(event) => {
  event.preventDefault();
  const usersName = event.target.usersName.value;
  const usersEmail = event.target.usersEmail.value;
  const userMessage = event.target.userMessage.value;

console.log(usersName);
console.log(usersEmail);
console.log(userMessage);

const messageList = document.querySelector("#messages");

// const messageList = messageSection.querySelector("ul");
console.log(messageList);

//console.log(messageSection);
const  newMessage = document.createElement("li");
newMessage.innerHTML = `<a href=mailto: ${usersEmail} >${usersName} </a> <span> ${userMessage} </span>` ;

const removeButton = document.createElement('button');
removeButton.innerHTML = "remove";
removeButton.type = "button";
removeButton.addEventListener("click",(event) => {
const entry = event.target.parentNode;
entry.remove();

});

// add new message to Dom  
newMessage.appendChild(removeButton); 
messageList.appendChild(newMessage);

messageForm.reset();

});

// Create a fetch for github repos 

const userName ='mouradfam48';
 fetch(`https://api.github.com/users/${userName}/repos`)
  .then((response) => {
  if (response.ok){
  return response.text();
   } else {
    throw new Error("Failed to fetch repositories");
   }
  })
   .then((data) => {
    const repositories = JSON.parse(data);
    console.log(repositories);
  
    // Dom section by id 

const projectSection = document.getElementById("projects");

// create a ul in the project section
let projectList = document.createElement("ul");
projectSection.appendChild(projectList);

for (let repository of repositories) {
  // new list item 
  let project = document.createElement("li");
  project.innerText = repository.name;
projectList.appendChild(project);
}
})

.catch((error) => {
  if (error instanceof SyntaxError) {
    console.error("unparsable response from server ");
  } else {
    
    console.error("Error fetching data:",error.message);
  }
});
