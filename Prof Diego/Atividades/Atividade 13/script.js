
const raio = document.querySelector("#raio")
const Comprimento = document.querySelector("#Comprimento")
const Area = document.querySelector("#Area")
const Volume = document.querySelector("#Volume")
const botaoEnviar = document.querySelector("#botaoEnviar")

botaoEnviar.addEventListener('click', ()=> {
    const r = parseFloat(raio.value)
    const comprimento = 2 * Math.PI * r
    const area = Math.PI * Math.pow(r, 2)
    const volume = 3 / 4 * Math.PI * Math.pow(r, 3)

    Comprimento.textContent = comprimento.toFixed(2)
    Area.textContent = area.toFixed(2)
    Volume.textContent = volume.toFixed(2)

})