const birthYear = document.querySelector("#birthYear")
const currentYear = document.querySelector("#currentYear")
const txtCurrentAge = document.querySelector("#txtCurrentAge")
const txtAgeIn2050 = document.querySelector("#txtAgeIn2050")


function calcularIdade(){
    const currentAge = currentYear.value - birthYear.value
    const ageIn2050 = 2050 - birthYear.value

    txtCurrentAge.textContent = currentAge
    txtAgeIn2050.textContent = ageIn2050
}

birthYear.addEventListener('input', () => {
    calcularIdade()
})

currentYear.addEventListener('input', () => {
    calcularIdade()
})

document.addEventListener('readystatechange', () => {
    calcularIdade()
})