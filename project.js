// Select modal elements
const modal = document.getElementById("projectModal");
const modalTitle = document.getElementById("modalTitle");
const modalDescription = document.getElementById("modalDescription");
const modalSkills = document.getElementById("modalSkills");

// Project data
const projects = {
  "Python Calculator": {
    description: "A basic calculator for practicing Python fundamentals and problem-solving.",
    skills: "Python, Problem Solving"
  },
  "Tic-Tac-Toe": {
    description: "Interactive game built with Python logic, playable directly in the browser.",
    skills: "Python, Logic, User Interaction"
  },
  "Password Generator": {
    description: "Generates strong, random passwords; practice with Python functions.",
    skills: "Python, String Manipulation, Security"
  },
  "Quiz Game": {
    description: "A multiple-choice quiz game that tests knowledge interactively.",
    skills: "Python, Logic, User Interaction"
  },
  "Profile Card Maker": {
    description: "Interactive project to create visual profile cards using HTML/CSS/JS.",
    skills: "HTML, CSS, JavaScript"
  },
  "Guess the Number": {
    description: "Simple interactive Python game where the player guesses a randomly chosen number.",
    skills: "Python, Logic, Loops"
  }
};

// Function to open modal with project info
function openProject(projectName) {
  if (projects[projectName]) {
    modalTitle.textContent = projectName;
    modalDescription.textContent = projects[projectName].description;
    modalSkills.innerHTML = "<strong>Skills:</strong> " + projects[projectName].skills;
    modal.style.display = "block";
  }
}

// Function to close modal
function closeProject() {
  modal.style.display = "none";
}

// Close modal if user clicks outside of it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
