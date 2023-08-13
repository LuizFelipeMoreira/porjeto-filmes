export default function initFiltro() {}
const filtro = document.querySelector(".filtro");
const inputFiltro = document.querySelector(".inputFiltro");

filtro.addEventListener("click", (event) => {
  if (event.target !== inputFiltro) {
    filtro.classList.toggle("active");
  }
});
