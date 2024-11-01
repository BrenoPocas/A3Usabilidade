function calcularMedia() {
    
    const primeiraNota = document.getElementById("primeiraNota").value;

    const segundaNota = document.getElementById("segundaNota").value;

    const terceiraNota = document.getElementById("terceiraNota").value;

    const mediaAritmetica = (parseInt(primeiraNota) + parseInt(segundaNota) + parseInt(terceiraNota)) / 3;

    const resultado = document.getElementById("resultado");
    
    resultado.textContent = `A média aritmética é de ${mediaAritmetica}.`;
}