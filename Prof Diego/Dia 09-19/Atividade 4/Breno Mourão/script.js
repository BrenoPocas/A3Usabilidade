const nota1 = document.querySelector('#nota1')
const nota2 = document.querySelector('#nota2')
const nota3 = document.querySelector('#nota3')
const btnSubmit = document.querySelector('#btnSubmit')
const form = document.querySelector('form')
const txtMedia = document.querySelector('#txtMedia')

form.addEventListener('submit', (e) => {
    e.preventDefault()
    calcularMedia()
})

function calcularMedia() {
    const media = (parseFloat(nota1.value) + parseFloat(nota2.value) + parseFloat(nota3.value)) / 3
    txtMedia.textContent = media
}