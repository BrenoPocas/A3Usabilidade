const salario = document.querySelector('#salario')
const salarioMais25Porcento = document.querySelector('#salarioMais25Porcento')

function calcularReajuste(){
    const reajuste = salario.value*1.25
    salarioMais25Porcento.textContent = reajuste.toFixed(2)
}

salario.addEventListener('input', () => {
    calcularReajuste()
})

document.addEventListener('readystatechange', () => {
    calcularReajuste()
})