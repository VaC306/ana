// Botón para reproducir música
document.getElementById("bg-music").volume = 0.6;
document.getElementById("bg-music").pause();

document.querySelector("button").addEventListener("click", function () {
  const music = document.getElementById("bg-music");
  music.play();
  this.style.display = "none";
});

const targetDate = new Date("2025-05-11T00:00:00");

function getCountdownText() {
  const now = new Date();
  const diff = targetDate - now;

  if (diff <= 0) {
    return "¡Feliz cumpleaños! 🎂";
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / 1000 / 60) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  return `${days}d ${hours}h ${minutes}m ${seconds}s`;
}

function firstDisplay() {
  const countdown = document.getElementById("countdown");
  countdown.innerText = getCountdownText();
  countdown.classList.add("animate");

  // Quitar la clase para que no afecte más
  setTimeout(() => {
    countdown.classList.remove("animate");
  }, 1000);
}

function updateCountdown() {
  document.getElementById("countdown").innerText = getCountdownText();
}

firstDisplay();
setInterval(updateCountdown, 1000);
