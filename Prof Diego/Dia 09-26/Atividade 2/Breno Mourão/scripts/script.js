const formulario = document.querySelector('form')
if(formulario){
    formulario.addEventListener('submit', (e) => {
        e.preventDefault()
        window.location.href = './curriculo.html'
    })
}