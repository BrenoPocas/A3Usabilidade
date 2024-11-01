function consultarPreco() {
    const codigoProduto = document.getElementById('codigoProduto').value;

    const produtos = [
        { codigo: 1, nome: 'Sapato', preco: 99.99 },
        { codigo: 2, nome: 'Bolsa', preco: 103.89 },
        { codigo: 3, nome: 'Camisa', preco: 49.98 },
        { codigo: 4, nome: 'Calça', preco: 89.72 },
        { codigo: 5, nome: 'Blusa', preco: 97.35 }
    ];

    const produtoEncontrado = produtos.find(produto => produto.codigo == codigoProduto);

    const resultadoElement = document.getElementById('resultado');
    if (produtoEncontrado) {
        resultadoElement.textContent = `O produto ${produtoEncontrado.nome} custa R$ ${produtoEncontrado.preco.toFixed(2)}`;
    } else {
        resultadoElement.textContent = "Produto não encontrado.";
    }
}