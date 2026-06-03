const contactModal = document.getElementById("contactModal");

document.getElementById("openContactModal")
.addEventListener("click", () => {

  contactModal.style.display = "flex";

});

document.querySelector(".contact-close")
.addEventListener("click", () => {

  contactModal.style.display = "none";

});

window.addEventListener("click", (e) => {

  if(e.target === contactModal){

    contactModal.style.display = "none";

  }

});