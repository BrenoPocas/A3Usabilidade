function calcularIdade() {
    
    const anoNascimento = document.getElementById("anoNascimento").value;

    const anoAtual = document.getElementById("anoAtual").value;

    const idadeAtual = anoAtual - anoNascimento;

    const idadeEm2050 = 2050 - anoNascimento;

    const resultado = document.getElementById("resultado");
    
    resultado.textContent = `Você tem ${idadeAtual} anos. Em 2050, você terá ${idadeEm2050} anos.`;
}