window.onload = () => {
    const listaImagem = document.getElementsByClassName('id');
    for (const imagem of listaImagem) {
        imagem.addEventListener('mouseenter', () => {
            imagem.style.transform = 'scale(1.2)';
            imagem.addEventListener('mouseleave', () => {
                imagem.style.transform = 'scale(1.0)';

            })
        });
    }
}
