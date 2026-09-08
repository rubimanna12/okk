// Render Lucide SVG icons
lucide.createIcons();

// Typewriter Effect Configuration
const words = ["roblox dev", "developer", "creator"];
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typedTarget = document.getElementById("typed-text");

function typeEffect() {
  const currentWord = words[wordIndex];

  if (isDeleting) {
    typedTarget.textContent = currentWord.substring(0, charIndex - 1);
    charIndex--;
  } else {
    typedTarget.textContent = currentWord.substring(0, charIndex + 1);
    charIndex++;
  }

  let speed = isDeleting ? 40 : 90;

  if (!isDeleting && charIndex === currentWord.length) {
    speed = 1800;
    isDeleting = true;
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    wordIndex = (wordIndex + 1) % words.length;
    speed = 400;
  }

  setTimeout(typeEffect, speed);
}

typeEffect();

// Click-to-Enter Overlay & Audio Control
const overlay = document.getElementById("click-overlay");
const audio = document.getElementById("bgm");
const audioToggle = document.getElementById("audio-toggle");

overlay.addEventListener("click", () => {
  overlay.classList.add("fade-out");
  audio.volume = 0.4;
  audio.play().catch(() => {});
});

audioToggle.addEventListener("click", () => {
  const volumeIcon = document.getElementById("volume-icon");
  
  if (audio.paused) {
    audio.play();
    volumeIcon.setAttribute("data-lucide", "volume-2");
  } else {
    audio.pause();
    volumeIcon.setAttribute("data-lucide", "volume-x");
  }

  lucide.createIcons();
});
