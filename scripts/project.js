// Update Last Modified Date
document.getElementById("lastModified").textContent = `Last Updated: ${document.lastModified}`;

// Display Projects Dynamically
const projects = [
    { name: "Weather App", description: "A web app showing live weather.", link: "#" },
    { name: "Task Manager", description: "A simple to-do list.", link: "#" },
    { name: "Portfolio Site", description: "A personal portfolio website.", link: "#" }
];

const projectsContainer = document.getElementById("projects-container");

projects.forEach(project => {
    let div = document.createElement("div");
    div.innerHTML = `<h3>${project.name}</h3><p>${project.description}</p><a href="${project.link}">View Project</a>`;
    projectsContainer.appendChild(div);
});

// Contact Form Submission
document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();
    alert("Message sent!");
});
