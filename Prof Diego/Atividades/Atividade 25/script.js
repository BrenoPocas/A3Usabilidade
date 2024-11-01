function resolverEquacao() {
    const a = parseFloat(document.getElementById('a').value);
    const b = parseFloat(document.getElementById('b').value);
    const c = parseFloat(document.getElementById('c').value);

    if (a === 0 && b === 0 && c === 0) {
        document.getElementById('resultado').textContent = "Igualdade confirmada: 0 = 0";
    } else if (a === 0 && b === 0 && c !== 0) {
        document.getElementById('resultado').textContent = "Coeficientes informados incorretamente";
    } else if (a === 0 && b !== 0) {
        const x = -c / b;
        document.getElementById('resultado').textContent = "Esta é uma equação de primeiro grau. A raiz é x = " + x
    } else {
        document.getElementById('resultado').textContent = "Esta é uma equação de segundo grau.";

        const delta = b * b - 4 * a * c;

        if (delta < 0) {
            document.getElementById('resultado').textContent += "Esta equação não possui raízes reais.";
        } else if (delta === 0) {
            const x = -b / (2 * a);
            document.getElementById('resultado').textContent += "Esta equação possui duas raízes reais iguais: x = " + x;
        } else {
            const x1 = (-b + Math.sqrt(delta)) / (2 * a);
            const x2 = (-b - Math.sqrt(delta)) / (2 * a);
            document.getElementById('resultado').textContent += "Esta equação possui duas raízes reais diferentes: x1 = " + x1 + " e x2 = " + x2;
        }
    }
}