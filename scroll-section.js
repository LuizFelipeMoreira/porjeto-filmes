export default function scrollSection() {}

const setas = document.querySelectorAll("[data-direcao]");
const filmesLista = document.querySelector(".filmes-lista");

setas.forEach((element) => {
  element.addEventListener("click", Show);
});

function Show() {
  const seta = this;
  const dataSet = seta.dataset.direcao;
  const parentElement = seta.parentElement;
  const nextElement = parentElement.nextElementSibling;

  if (dataSet == 1) {
    nextElement.scrollLeft = nextElement.scrollLeft - 250;
  } else if (dataSet == 2) {
    nextElement.scrollLeft = nextElement.scrollLeft + 250;
  }
}
