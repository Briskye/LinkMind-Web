const companyModal = document.getElementById("companyModal");
const openCompanyBtn = document.getElementById("openCompanyModal");
const closeCompanyBtn = document.querySelector(".close-company");

openCompanyBtn.onclick = (e) => {
  e.preventDefault();
  companyModal.style.display = "flex";
};

closeCompanyBtn.onclick = () => {
  companyModal.style.display = "none";
};

window.addEventListener("click", (e) => {
  if (e.target === companyModal) {
    companyModal.style.display = "none";
  }
});