function calcular() {
    const codigo = document.getElementById('codigo').value;
    const horas = document.getElementById('horas').value;

    const colaboradores = [
        { codigo: 1, nome: 'Ana', valorHora: 47.78 },
        { codigo: 2, nome: 'Bruna', valorHora: 60.00 },
        { codigo: 3, nome: 'Ana', valorHora: 38.99 },
        { codigo: 4, nome: 'Diogo', valorHora: 45.78 },
        { codigo: 5, nome: 'Ester', valorHora: 45.78 }
    ];

    const colaborador = colaboradores.find(c => c.codigo == codigo);

    if (colaborador) {
        const valorBruto = colaborador.valorHora * horas;

        document.getElementById('resultado').textContent = `O valor bruto a ser pago para ${colaborador.nome} é R$ ${valorBruto.toFixed(2)}`;
    } else {
        document.getElementById('resultado').textContent = "Colaborador não encontrado.";
    }
}