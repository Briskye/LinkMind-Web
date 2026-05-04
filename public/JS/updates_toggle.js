document.querySelectorAll(".toggle").forEach(title => {
  title.addEventListener("click", () => {
    const item = title.parentElement;

    item.classList.toggle("active");
  });
});