
const addBtn = document.getElementById("addBtn");
const modal = document.getElementById("projectModal");
const cancelBtn = document.getElementById("cancelBtn");
const projectForm = document.getElementById("projectForm");
const projectList = document.getElementById("projectList");
const emptyMessage = document.getElementById("emptyMessage");
const searchInput = document.getElementById("searchInput");

let projects = JSON.parse(
    localStorage.getItem("myProjects") || "[]"
);

// Open form
addBtn.addEventListener("click", () => {
    projectForm.reset();
    modal.style.display = "flex";
});

// Close form
cancelBtn.addEventListener("click", () => {
    modal.style.display = "none";
});

// Save project
projectForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const name = document
        .getElementById("projectName").value.trim();

    const link = document
        .getElementById("projectLink").value.trim();

    try {
        const url = new URL(link);

        if (!["http:", "https:"].includes(url.protocol)) {
            throw new Error("Invalid URL");
        }

        projects.push({
            id: crypto.randomUUID(),
            name: name,
            link: url.href
        });

        saveProjects();
        renderProjects();

        modal.style.display = "none";
        projectForm.reset();

    } catch {
        alert("Please enter a valid project URL.");
    }
});

// Save in browser
function saveProjects() {
    localStorage.setItem(
        "myProjects",
        JSON.stringify(projects)
    );
}

// Display projects
function renderProjects() {
    const searchText = searchInput.value.toLowerCase();

    const filteredProjects = projects.filter(project =>
        project.name.toLowerCase().includes(searchText) ||
        project.link.toLowerCase().includes(searchText)
    );

    projectList.innerHTML = "";

    emptyMessage.style.display =
        filteredProjects.length === 0 ? "block" : "none";

    emptyMessage.textContent = projects.length === 0
        ? "No projects added yet."
        : "No matching projects found.";

    filteredProjects.forEach(project => {
        const card = document.createElement("div");
        card.className = "project-card";

        const title = document.createElement("h3");
        title.textContent = project.name;

        const urlText = document.createElement("p");
        urlText.textContent = project.link;

        const openLink = document.createElement("a");
        openLink.className = "open-link";
        openLink.href = project.link;
        openLink.target = "_blank";
        openLink.rel = "noopener noreferrer";
        openLink.textContent = "Open Project ↗";

        const deleteBtn = document.createElement("button");
        deleteBtn.className = "delete-btn";
        deleteBtn.textContent = "Delete";

        deleteBtn.addEventListener("click", () => {
            const confirmed = confirm(
                `Delete "${project.name}"?`
            );

            if (!confirmed) return;

            projects = projects.filter(
                item => item.id !== project.id
            );

            saveProjects();
            renderProjects();
        });

        card.append(title, urlText, openLink, deleteBtn);
        projectList.appendChild(card);
    });
}

// Search projects
searchInput.addEventListener("input", renderProjects);

// Load saved projects on page open
renderProjects();
