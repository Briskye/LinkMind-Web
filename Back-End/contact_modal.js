const contactModal = document.getElementById("contactModal");
const openContact = document.getElementById("openContact");
const closeContact = document.querySelector(".close-contact");

openContact.onclick = () => {
  contactModal.style.display = "flex";
};

closeContact.onclick = () => {
  contactModal.style.display = "none";
};

window.addEventListener("click", (e) => {
  if (e.target === contactModal) {
    contactModal.style.display = "none";
  }
});