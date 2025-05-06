// Referencia al audio y botón
const music = document.getElementById("bg-music");
const botonMusica = document.querySelector("button");

// Configurar audio
music.volume = 0.6;
music.pause();

// Texto inicial del botón
botonMusica.innerText = "▶️ TU BANDA SONORA";

// Al hacer clic, alternar entre play y pause
botonMusica.addEventListener("click", function () {
  if (music.paused) {
    music.play();
    botonMusica.innerText = "⏸️ Reproduciendo";
  } else {
    music.pause();
    botonMusica.innerText = "▶️ TU BANDA SONORA";
  }
});

// Fecha objetivo
const targetDate = new Date("2025-05-11T00:00:00");

// Obtener texto de cuenta atrás
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

// Mostrar el contador por primera vez
function firstDisplay() {
  const countdown = document.getElementById("countdown");
  countdown.innerText = getCountdownText();
  countdown.classList.add("animate");

  setTimeout(() => {
    countdown.classList.remove("animate");
  }, 1500);
}

// Actualizar cada segundo
function updateCountdown() {
  const now = new Date();
  const diff = targetDate - now;

  if (diff <= 0) {
    document.getElementById("contenido-inicial").style.display = "none";
    document.getElementById("contenido-revelado").style.display = "block";
    return;
  }

  document.getElementById("countdown").innerText = getCountdownText();
}

firstDisplay();
setInterval(updateCountdown, 1000);
