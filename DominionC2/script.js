// script.js

document.addEventListener("DOMContentLoaded", () => {
  const navLinks = document.querySelectorAll("nav a");

  navLinks.forEach(link => {
    link.addEventListener("click", e => {
      e.preventDefault();
      const targetId = link.getAttribute("href").substring(1);
      const targetSection = document.getElementById(targetId);
      if (targetSection) {
        targetSection.scrollIntoView({ behavior: "smooth" });
      }
    });
  });

  // Optional: button interaction animation
  const buttons = document.querySelectorAll("button");
  buttons.forEach(btn => {
    btn.addEventListener("mouseover", () => {
      btn.classList.add("glow");
    });
    btn.addEventListener("mouseout", () => {
      btn.classList.remove("glow");
    });
  });
});

const videos = [
  "dominionbg2.mp4",
  "dominionbg3.mp4"
];

// Pobierz indeks z sessionStorage lub ustaw 0 jeśli brak
function getVideoIndex() {
  let idx = sessionStorage.getItem("bgVideoIndex");
  if (idx === null) {
    idx = 0;
  } else {
    idx = (parseInt(idx, 10) + 1) % videos.length;
  }
  sessionStorage.setItem("bgVideoIndex", idx);
  return idx;
}

window.addEventListener('load', () => {
  const videoElem = document.getElementById("bg-video");
  const idx = getVideoIndex();
  videoElem.src = videos[idx];
  videoElem.load();
  videoElem.play();
});
