const projectModal = document.getElementById("projectModal");
const openProjectBtn = document.getElementById("openProjectModal");
const closeProjectBtn = document.querySelector(".close-project");

openProjectBtn.onclick = (e) => {
  e.preventDefault();
  projectModal.style.display = "flex";
};

closeProjectBtn.onclick = () => {
  projectModal.style.display = "none";
};

window.addEventListener("click", (e) => {
  if (e.target === projectModal) {
    projectModal.style.display = "none";
  }
});