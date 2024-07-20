// Variáveis de estado do carrinho
let quantidadeCarrinho = 0;
const carrinhoCountElem = document.getElementById('quantidade-carrinho');
const imagemPreviewElem = document.getElementById('imagem-preview');
const mostrarCarrinhoButton = document.getElementById('mostrar-carrinho');

// Atualiza a exibição do contador de itens no carrinho
function atualizarCarrinho() {
    carrinhoCountElem.textContent = quantidadeCarrinho;
}

// Adiciona um item ao carrinho e anima o botão
function adicionarAoCarrinho(button, estoqueElem) {
    const estoqueAtual = parseInt(estoqueElem.textContent.split(': ')[1]);
    
    if (quantidadeCarrinho < estoqueAtual) {
        quantidadeCarrinho += 1;
        atualizarCarrinho();

        // Adiciona classe de animação ao botão
        button.classList.add('animar');

        // Remove a classe de animação após a animação terminar
        setTimeout(() => {
            button.classList.remove('animar');
        }, 600); // Duração da animação em milissegundos
    } else {
        alert('Não há estoque suficiente para adicionar mais itens ao carrinho.');
    }
}

// Alterna a exibição dos detalhes do produto
function toggleDetalhes(button) {
    const detalhes = button.nextElementSibling;
    if (detalhes.style.display === "none" || detalhes.style.display === "") {
        detalhes.style.display = "block";
        button.textContent = "Menos Detalhes";
    } else {
        detalhes.style.display = "none";
        button.textContent = "Mais Detalhes";
    }
}

// Adiciona event listeners aos botões de adicionar ao carrinho
document.querySelectorAll('.btn.adicionar').forEach(button => {
    // Encontra o elemento de estoque mais próximo ao botão clicado
    const estoqueElem = button.closest('.produto').querySelector('.estoque');
    button.addEventListener('click', () => adicionarAoCarrinho(button, estoqueElem));
});

// Event listener para exibir o carrinho
document.getElementById('mostrar-carrinho').addEventListener('click', () => {
    document.getElementById('carrinho').style.display = 'block';
});

// Event listener para ocultar o carrinho
document.getElementById('fechar-carrinho').addEventListener('click', () => {
    document.getElementById('carrinho').style.display = 'none';
});

// Atualiza a visualização da imagem quando o mouse passa sobre o botão "Mostrar Carrinho"
mostrarCarrinhoButton.addEventListener('mouseover', () => {
    // Aqui você pode definir a imagem que deseja mostrar
    imagemPreviewElem.innerHTML = '<img src="Camisa-Polo-Para-Empresa-Poliester-Masculina-Branca-Frente.jpg" alt="Imagem do Item">';
});

mostrarCarrinhoButton.addEventListener('mouseout', () => {
    // Limpa a visualização da imagem ao remover o mouse
    imagemPreviewElem.innerHTML = '';
});
