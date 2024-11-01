const cateto1 = document.querySelector('#cateto1')
const cateto2 = document.querySelector('#cateto2')
const btnSubmit = document.querySelector('#btnSubmit')
const resultado = document.querySelector('#resultado')

btnSubmit.addEventListener('click', () =>{
    const c1 = parseFloat(cateto1.value)
    const c2 = parseFloat(cateto2.value)
    if(c1 != 0 && c2 != 0){
        const hipotenusa = Math.sqrt(Math.pow(c1, 2) + Math.pow(c2, 2)).toFixed(2)
        resultado.textContent = hipotenusa
    }
})