let titulos = document.querySelectorAll(".titulo")
let corpos = document.querySelectorAll(".corpo")

titulos.forEach((titulo, key) => {
    titulo.addEventListener("click", () => {
        if (corpos[key].classList.contains("hide")) {
            hideAll()
            corpos[key].classList.toggle("hide")
        } else {
            hideAll()
        }
    })
});

function hideAll(){
    corpos.forEach(e => {
        e.classList.add("hide")
    })
}