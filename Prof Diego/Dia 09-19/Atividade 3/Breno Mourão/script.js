const tempCelsius = document.querySelector('#tempCelsius')
const txtTempFahrenheit = document.querySelector('#txtTempFahrenheit')

function calcularFahrenheit() {
    //F = (C * 1,8) + 32
    tempFahrenheit = (tempCelsius.value * 1.8) + 32
    txtTempFahrenheit.textContent = tempFahrenheit.toFixed(2) + ' F'
}

tempCelsius.addEventListener('input', () => {
    calcularFahrenheit()
})

document.addEventListener('readystatechange', () => {
    calcularFahrenheit()
})