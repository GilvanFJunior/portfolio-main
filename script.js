//menu responsivo
const btnMobile = document.getElementById("btn-mobile");

function toggleMenu(event) {
  if (event.type === "touchstart") event.preventDefault();
  const nav = document.getElementById("nav");
  nav.classList.toggle("active");
  const active = nav.classList.contains("active");
  event.currentTarget.setAttribute("aria-expanded", active);
  if (active) {
    event.currentTarget.setAttribute("aria-label", "Fechar Menu");
  } else {
    event.currentTarget.setAttribute("aria-label", "Abrir Menu");
  }
}

btnMobile.addEventListener("click", toggleMenu);
btnMobile.addEventListener("touchstart", toggleMenu);

//scroll

const sr = ScrollReveal({
  origin: "bottom",
  distance: "80px",
  duration: 2000,
  reset: true,
});

sr.reveal(".imagem-perfil", {});
sr.reveal(".menu-logo", {});
sr.reveal(".introducao-container", {});
sr.reveal(".bottom", {});
sr.reveal(".projetos", {});
sr.reveal(".formacao", {});
sr.reveal(".contato", {});
sr.reveal(".apresentacao", {});
sr.reveal(".experiencia-container", {});
