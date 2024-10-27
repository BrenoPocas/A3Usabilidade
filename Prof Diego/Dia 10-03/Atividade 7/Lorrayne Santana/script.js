    function calcularTroco() {
        const valorCompra = parseFloat(document.getElementById('valorCompra').value);
        const valorPago = parseFloat(document.getElementById('valorPago').value);
        const resultado = document.getElementById('resultado');

        if (valorPago < valorCompra) {
            resultado.textContent = "Valor pago insuficiente.";
            return;
        }

        let troco = valorPago - valorCompra;
        
        const notas = [50, 20, 10, 5, 2, 1];
        let quantidadeNotas = [];

        for (let i = 0; i < notas.length; i++) {
        quantidadeNotas[i] = Math.floor(troco / notas[i]);
        troco -= quantidadeNotas[i] * notas[i];
        }

        let mensagem = "Troco: R$" + troco.toFixed(2) + "<br>";
        for (let i = 0; i < notas.length; i++) {
            if (quantidadeNotas[i] > 0) {
                mensagem += "Nota(s) de R$" + notas[i] + ": " + quantidadeNotas[i] + "<br>";
            }
        }
        resultado.innerHTML = mensagem;
    }