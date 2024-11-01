function calcularTemperatura() {
    
    const temperaturaCelsius = document.getElementById("temperaturaCelsius").value;

    const temperaturaFahrenheit = (temperaturaCelsius * 1.8) + 32;

    const resultado = document.getElementById("resultado");
    
    resultado.textContent = `A temperatura em Fahrenheit é de ${temperaturaFahrenheit}º.`;
}