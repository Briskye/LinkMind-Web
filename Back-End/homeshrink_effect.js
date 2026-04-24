const heroInner = document.querySelector(".hero-content");

window.addEventListener("scroll", () => {
  let scroll = window.scrollY;

  // subtle scale only (like LinkMind)
  let scale = 1 - scroll / 3000;

  // limit it (important!)
  if (scale < 0.9) scale = 0.9;

  heroInner.style.transform = `scale(${scale})`;
});