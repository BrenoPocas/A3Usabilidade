function calcularIMC() {
    const peso = parseFloat(document.getElementById('peso').value);
    const altura = parseFloat(document.getElementById('altura').value);
  
    if (isNaN(peso) || isNaN(altura)) {
      alert('Por favor, insira valores válidos para peso e altura.');
      return;
    }
  
    const imc = peso / (altura * altura);
    let resultado;
  
    if (imc < 20) {
      resultado = "Abaixo do peso";
    } else if (imc >= 20 && imc <= 25) {
      resultado = "Normal";
    } else if (imc >= 26 && imc <= 30) {
      resultado = "Sobrepeso";
    } else if (imc >= 31 && imc <= 35) {
      resultado = "Obesidade grau 1";
    } else if (imc >= 36 && imc <= 40) {
      resultado = "Obesidade grau 2";
    } else {
      resultado = "Obesidade grau 3";
    }
  
    document.getElementById('resultado').textContent = `Seu IMC é ${imc.toFixed(2)} e você está: ${resultado}`;
  }