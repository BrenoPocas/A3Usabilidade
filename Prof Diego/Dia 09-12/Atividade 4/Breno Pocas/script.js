fetch('produtos.json')
    .then(response => response.json())
    .then(produtos => {
        produtos.forEach(produto => {
            console.log(produto)

            const card = document.createElement('div')
            card.classList.add('cartao')

            const titulo = document.createElement('h1')
            titulo.classList.add('titulo')
            titulo.textContent = produto['nome']
            
            const corpo = document.createElement('div')
            corpo.classList.add('corpo')

            const imagem = document.createElement('img')
            imagem.classList.add('imagem')
            imagem.src = produto['imagem']
            imagem.alt = 'imagem do cartão'

            const descricao = document.createElement('p')
            descricao.innerHTML = produto['descricao']

            const footer = document.createElement('footer')
            footer.classList.add('rodape')

            const preco = document.createElement('div')
            preco.textContent = `R$ ${produto['preco']}`

            const btnComprar = document.createElement('button')
            btnComprar.textContent = 'Comprar'

            corpo.appendChild(imagem)
            corpo.appendChild(descricao)
            footer.appendChild(preco)
            footer.appendChild(btnComprar)
            card.appendChild(titulo)
            card.appendChild(corpo)
            card.appendChild(footer)

            document.querySelector('#listaCards').appendChild(card)
        });
    })
    .catch(error => {
        console.error('Error fetching data:', error);
    });




// <div class="cartao">      OK
//     <h1 class="titulo">${nome}</h1>           OK
//     <div class="corpo">          OK
//         <img class="imagem" src="${imagem}" alt="imagem do cartão" />          OK
//         <p>
//             ${descricao}         OK
//         </p>
//     </div>
//     <footer class="rodape">             OK
//         <div>R$ ${preco}</div>           OK
//         <button>Comprar</button>
//     </footer>
// </div>