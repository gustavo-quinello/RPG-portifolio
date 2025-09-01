// slideshow.js

const slides = document.querySelectorAll('.slide');
let currentSlide = 0;

function showNextSlide() {
    // Esconde o slide atual
    if (slides[currentSlide]) {
        slides[currentSlide].classList.remove('active');
    }
    
    // Calcula o próximo slide, voltando para o primeiro se chegar no fim
    currentSlide = (currentSlide + 1) % slides.length;

    // Mostra o próximo slide
    if (slides[currentSlide]) {
        slides[currentSlide].classList.add('active');
    }
}

// Inicia o slideshow mostrando o primeiro slide imediatamente
if (slides.length > 0) {
    slides[0].classList.add('active');
    // Define o intervalo para a troca de imagens (aqui, 5000ms = 5 segundos)
    setInterval(showNextSlide, 5000);
}