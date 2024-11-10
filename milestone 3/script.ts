// get references to the form and display area

const form = document.getElementById("resume-form") as HTMLFormElement
const resumedisplayelements = document.getElementById("resume-display") as HTMLDivElement

// handle form submission

form.addEventListener("submit", (Event: Event) => {
    Event.preventDefault();  //prevent page reload

    // collect input values

    const name =(document.getElementById("name") as HTMLInputElement).value
    const email =(document.getElementById("name") as HTMLInputElement).value
    const phone =(document.getElementById("name") as HTMLInputElement).value
    const education =(document.getElementById("name") as HTMLInputElement).value
    const experience =(document.getElementById("name") as HTMLInputElement).value
    const skills =(document.getElementById("name") as HTMLInputElement).value

    // generate the resume content dynamically

    const resumeHTML =`
    <h2><b>resume</b></h2>
    <h3>personal information</h3>
    <p><b>name</b>${name}</p>
     <p><b>Email</b>${email}</p>
      <p><b>phone</b>${phone}</p>

     <h3>Education</h3>
     <p>${education}</p>
    
     <h3>Experience</h3>
    <p>${experience}</p>

    <h3>skills</h3>
    <p>${skills}</p>
    `;

    // display the generated resume

    if(resumedisplayelements) {
        resumedisplayelements.innerHTML = resumeHTML
    } else {
        console.error("the resume display element is missing.");
    }
});