let titulos = document.querySelectorAll(".titulo")
let corpos = document.querySelectorAll(".corpo")

titulos.forEach((titulo, key) => {
    titulo.addEventListener("click", () => {
        corpos[key].classList.toggle("hide")
    })
});