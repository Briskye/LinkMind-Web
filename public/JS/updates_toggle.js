document.querySelectorAll(".toggle").forEach(item => {
  item.addEventListener("click", () => {
    item.parentElement.parentElement.classList.toggle("active");
  });
});