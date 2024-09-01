let titulos = document.querySelectorAll(".titulo")
let corpos = document.querySelectorAll(".corpo")
let backgroundList = [
    "./img/bg/default-wallpaper.jpg", //DEFAULT
    "./img/bg/arte-e-design.png", 
    "./img/bg/educacao-e-cultura.png", 
    "./img/bg/meio-ambiente-e-estilo-de-vida.png", 
    "./img/bg/ciencia-e-tecnologia.png", 
    "./img/bg/saude-e-bem-estar.png", 
    "./img/bg/economia-e-financas.png"
]

titulos.forEach((titulo, key) => {
    titulo.addEventListener("click", () => {
        if (corpos[key].classList.contains("hide")) {
            hideAll()
            updateBackground(key + 1)
            corpos[key].classList.remove("hide")
        } else {
            updateBackground()
            hideAll()
        }
    })
});

function hideAll(){
    corpos.forEach(e => {
        e.classList.add("hide")
    })
}

function updateBackground(key){
    if(key == undefined) key = 0        
    document.querySelector(".container").style.backgroundImage = 'url("' + backgroundList[key] + '"'
}