
const raio = document.querySelector("#raio")
const spanComprimento = document.querySelector("#spanComprimento")
const spanArea = document.querySelector("#spanArea")
const spanVolume = document.querySelector("#spanVolume")
const btnSubmit = document.querySelector("#btnSubmit")

btnSubmit.addEventListener('click', ()=> {
    const r = parseFloat(raio.value)
    // a. O comprimento de uma esfera: C = 2 * π * R.
    const comprimento = 2 * Math.PI * r
    // b. A área de uma esfera: A = π * R²
    const area = Math.PI * Math.pow(r, 2)
    // c. O volume de uma esfera: V = ¾ * π * R³.
    const volume = 3 / 4 * Math.PI * Math.pow(r, 3)

    spanComprimento.textContent = comprimento.toFixed(2)
    spanArea.textContent = area.toFixed(2)
    spanVolume.textContent = volume.toFixed(2)

})