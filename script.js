let currentSlide = 0;

function showSlide(index) {
    const slides = document.querySelector('.slides');
    const totalSlides = document.querySelectorAll('.slide').length;
    currentSlide = (index + totalSlides) % totalSlides;
    slides.style.transform = `translateX(${-currentSlide * 100}%)`;
}

function moveSlide(direction) {
    showSlide(currentSlide + direction);
}

// Initialize the slider
showSlide(currentSlide);