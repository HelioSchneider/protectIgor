
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