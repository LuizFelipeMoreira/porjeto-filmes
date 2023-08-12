export default function initModal() {
  const botao = document.querySelectorAll(".botao");
  const containerModal = document.querySelector(".container-modal");
  const btnFechar = document.querySelector(".btn-fechar");

  botao.forEach((btn) => {
    btn.addEventListener("click", openModal);
  });

  // Abrir Modal
  function openModal(event) {
    event.preventDefault();
    const div = this.parentElement;
    containerModal.classList.add("ativo");
    replaceContent(div.parentElement);
  }

  function replaceContent(itemClicado) {
    const tituloAntigo = itemClicado.querySelector(".titulo");
    const imgAntigo = itemClicado
      .querySelector(".filmeIMG")
      .getAttribute("src");
    const anoAntigo = itemClicado.querySelector(".Ano");

    const tituloModal = document.querySelector(".titulo-modal");
    const imgModal = document.querySelector(".img-modal");
    const anoModal = document.querySelector(".ano-modal");

    tituloModal.innerText = tituloAntigo.innerText;
    anoModal.innerText = anoAntigo.innerText;

    imgModal.setAttribute("src", imgAntigo);
  }

  //fechar modal
  btnFechar.addEventListener("click", closeModal);
  function closeModal(event) {
    containerModal.classList.remove("ativo");

    const imgModalSrc = document.querySelector(".img-modal");
    imgModalSrc.setAttribute("src", "");
  }

  containerModal.addEventListener("click", clickOutside);
  function clickOutside(event) {
    const click = event.target === this;
    if (click) {
      closeModal();
    }
  }
}
