
const projects = [
    {
        name: "Guess The Number",
        description: "A number guessing game built using HTML, CSS and JavaScript.",
        link: "https://mahendratiwari969668.github.io/Guess-the-number-/"
    },
    {
        name: "Guess The Number",
        description: "A number guessing game built using HTML, CSS and JavaScript.",
        link: "https://mahendratiwari969668.github.io/Guess-the-number-/"
    },

    // Add your next project here:
    // {
    //     name: "RecipeFinder",
    //     description: "Discover delicious recipes through an interactive website.",
    //     link: "https://yourusername.github.io/RecipeFinder/"
    // },
];

const projectList = document.getElementById("projectList");
const projectCount = document.getElementById("projectCount");

projectCount.textContent =
    `${projects.length} ${projects.length === 1 ? "Project" : "Projects"}`;

projects.forEach((project, index) => {
    const card = document.createElement("article");
    card.className = "project-card";

    const number = document.createElement("span");
    number.className = "project-number";
    number.textContent = `PROJECT ${String(index + 1).padStart(2, "0")}`;

    const title = document.createElement("h3");
    title.textContent = project.name;

    const description = document.createElement("p");
    description.textContent = project.description;

    const link = document.createElement("a");
    link.className = "project-link";
    link.href = project.link;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    link.textContent = "View Live Project ↗";

    card.append(number, title, description, link);
    projectList.appendChild(card);
});
