let titulos = document.querySelectorAll(".titulo")
let corpos = document.querySelectorAll(".corpo")
let backgroundList = [
    "./img/default-wallpaper.jpg", //DEFAULT
    "./img/arte-e-design.png", 
    "./img/educacao-e-cultura.png", 
    "./img/meio-ambiente-e-estilo-de-vida.png", 
    "./img/ciencia-e-tecnologia.png", 
    "./img/saude-e-bem-estar.png", 
    "./img/economia-e-financas.png"
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
    document.querySelector("body").style.backgroundImage = 'url("' + backgroundList[key] + '"'
}