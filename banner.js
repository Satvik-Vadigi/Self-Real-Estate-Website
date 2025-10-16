document.addEventListener("DOMContentLoaded", () => {
    let currentIndex = 0;
    const slides = document.querySelector('.banner-sliding');
    const totalSlides = slides.children.length;
    
    function nextSlide() {
        currentIndex = (currentIndex + 1) % totalSlides;
        updateSlidePosition();
    }
    
    function updateSlidePosition() {
        slides.style.transform = `translateX(-${currentIndex * 100}vw)`;
    }
    
    setInterval(nextSlide, 5000);
});