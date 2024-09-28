const celulas = document.querySelectorAll("tbody td");
const modalContainer = document.querySelector("#modalContainer")

celulas.forEach((celula) => {
  celula.addEventListener('click', (e) =>{
    showModal(e)
  })
});


function showModal (event){
  const modal = document.createElement('div')
  modal.classList.add('popup')

  const texto = document.createElement('p')
  texto.textContent = "Valor da celula: " + event.target.textContent

  modal.appendChild(texto)
  modalContainer.appendChild(modal)

  setTimeout(() => {
    modal.remove()
  }, 4000);

}