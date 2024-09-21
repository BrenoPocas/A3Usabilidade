function calcularAumento() {
    
    const salarioAtual = document.getElementById("salarioAtual").value;

    const novoSalario = (salarioAtual * 0.25) + parseFloat(salarioAtual);

    const resultado = document.getElementById("resultado");
    
    resultado.textContent = `Seu salário novo é de R$${novoSalario}.`;
}