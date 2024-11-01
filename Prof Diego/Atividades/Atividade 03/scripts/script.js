let titulo = document.querySelector("h1")

setInterval(() => {
    titulo.style.color = setColor(window.getComputedStyle(document.querySelector("h1")).color)
}, 200)

function setColor(color){
    switch(color){
        case 'rgb(255, 0, 0)':
            return "#00FF00"
        case 'rgb(0, 255, 0)':
            return "#0000FF"
        case 'rgb(0, 0, 255)':
            return "#FF0000"
        default:
            return "#FF0000"
    }
}