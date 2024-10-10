const inputPrimeiroCateto = document.querySelector('#inputPrimeiroCateto')
const inputSegundoCateto = document.querySelector('#inputSegundoCateto')
const botaoEnviar = document.querySelector('#botaoEnviar')
const resultado = document.querySelector('#resultado')

botaoEnviar.addEventListener('click', () =>{
    const c1 = parseFloat(inputPrimeiroCateto.value)
    const c2 = parseFloat(inputSegundoCateto.value)
    if(c1 != 0 && c2 != 0){
        const hipotenusa = Math.sqrt(Math.pow(c1, 2) + Math.pow(c2, 2)).toFixed(2)
        resultado.textContent = hipotenusa
    }
})