// script.js

function toggleMode() {
  const html = document.documentElement;
  html.classList.toggle("light");

  // Alterna ícone dentro do botão
  const btn = document.querySelector("#switch button");
  const icon = btn.querySelector("ion-icon");
  const isLight = html.classList.contains("light");
  icon.setAttribute("name", isLight ? "sunny-outline" : "moon-outline");

  // Atualiza o background do botão se quiser (opcional)
  html.style.setProperty("--switch-bg-url", isLight
    ? "url(./assets/sun.svg)"
    : "url(./assets/moon-stars.svg)");
}

// Conectar o listener e preencher o ano
document.addEventListener("DOMContentLoaded", () => {
  document.querySelector("#switch").addEventListener("click", toggleMode);
  document.getElementById("year").textContent = new Date().getFullYear();
});
