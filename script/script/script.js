
// script.js

// Array com os caminhos das imagens de fundo
const backgrounds = [
    '../../fotos/headerFundo/fundo1.jpg',
    '../../fotos/headerFundo/fundo2.jpg',
    '../../fotos/headerFundo/fundo3.jpg'
];

let currentBackgroundIndex = 0;

function changeBackground() {
    // Seleciona o próximo fundo
    currentBackgroundIndex = (currentBackgroundIndex + 1) % backgrounds.length;
    
    // Aplica o novo fundo ao body
    document.body.style.backgroundImage = `url('${backgrounds[currentBackgroundIndex]}')`;
}

// Altera o fundo a cada 2,5 segundos
setInterval(changeBackground, 5000);

let currentIndex = 0;

function moverCarrossel(direction) {
    const container = document.querySelector('.carrossel-container');
    const cards = document.querySelectorAll('.card');
    const totalCards = cards.length;
    const cardsPerView = 3; // Número de cards visíveis por vez

    // Atualiza o índice atual
    currentIndex += direction;

    // Verifica se o índice está fora dos limites
    if (currentIndex < 0) {
        currentIndex = Math.ceil(totalCards / cardsPerView) - 1; // Volta para o último grupo
    } else if (currentIndex >= Math.ceil(totalCards / cardsPerView)) {
        currentIndex = 0; // Volta para o primeiro grupo
    }

    // Calcula o deslocamento com base no índice atual
    const offset = -currentIndex * 100; // 100% por grupo de cards
    container.style.transform = `translateX(${offset}%)`;
}