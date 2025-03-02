document.addEventListener("DOMContentLoaded", function () {
    
    const projects = [
        { id: 1, name: "Project 1", description: "Description of the project goes here." },
        { id: 2, name: "Project 2", description: "Another project description." }
    ];

   
    const projectsList = document.getElementById("projectsList");

    projects.forEach(project => {
        const projectElement = document.createElement("div");
        projectElement.classList.add("bg-gray-200", "p-6", "rounded-md", "flex", "justify-between", "items-center");

        const projectDetails = document.createElement("div");
        projectDetails.innerHTML = `
            <h3 class="text-lg font-semibold">${project.name}</h3>
            <p class="text-sm text-gray-500">${project.description}</p>
        `;

        const projectActions = document.createElement("div");
        projectActions.innerHTML = `
            <button onclick="editProject(${project.id})" class="bg-yellow-500 text-white px-4 py-2 rounded-md mr-2">Edit</button>
            <button onclick="deleteProject(${project.id})" class="bg-red-500 text-white px-4 py-2 rounded-md">Delete</button>
        `;

        projectElement.appendChild(projectDetails);
        projectElement.appendChild(projectActions);

        projectsList.appendChild(projectElement);
    });
});


function editProject(id) {
    window.location.href = `edit.html?id=${id}`;
}

function deleteProject(id) {
    if (confirm("Are you sure you want to delete this project?")) {
       
        const projects = JSON.parse(localStorage.getItem("projects")) || [];
      
        const updatedProjects = projects.filter(project => project.id !== id);
        
        localStorage.setItem("projects", JSON.stringify(updatedProjects));
        
   
        alert(`Project ${id} deleted.`);
        
      
        location.reload();  
    }
}
