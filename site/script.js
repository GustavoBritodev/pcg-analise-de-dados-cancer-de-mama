const dialogo = document.querySelector('.dialogo-grafico');
const tituloDialogo = dialogo.querySelector('.dialogo-grafico__titulo');
const areaDialogo = dialogo.querySelector('.dialogo-grafico__area');
const botaoFechar = dialogo.querySelector('.dialogo-grafico__fechar');
let botaoOrigem = null;

function abrirGrafico(evento) {
    botaoOrigem = evento.currentTarget;
    const figura = botaoOrigem.closest('figure');
    const imagemOriginal = figura.querySelector('img');
    const imagemAmpliada = document.createElement('img');
    imagemAmpliada.src = imagemOriginal.getAttribute('src');
    imagemAmpliada.alt = imagemOriginal.alt;
    imagemAmpliada.className = 'dialogo-grafico__imagem';
    areaDialogo.replaceChildren(imagemAmpliada);
    tituloDialogo.replaceChildren(...figura.querySelector('figcaption').cloneNode(true).childNodes);
    dialogo.showModal();
    botaoFechar.focus();
}

function fecharGrafico() {
    dialogo.close();
}

document.querySelectorAll('.grafico__ampliar').forEach((botao) => {
    botao.addEventListener('click', abrirGrafico);
});

botaoFechar.addEventListener('click', fecharGrafico);

dialogo.addEventListener('close', () => {
    if (botaoOrigem) {
        botaoOrigem.focus();
    }
});
