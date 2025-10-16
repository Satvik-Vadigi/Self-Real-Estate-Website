const carousel = document.querySelector('.carousel');
const dots = document.querySelectorAll('.dot');
let currentIndex = 0;

function showSlide(index) {
  const totalSlides = 10;
  if (index >= totalSlides) index = 0;
  if (index < 0) index = totalSlides - 1;

  // Use the width of the visible container instead of the entire carousel
  const slideWidth = document.querySelector('.carousel-container').clientWidth;
  carousel.style.transform = `translateX(-${index * slideWidth}px)`;

  dots.forEach(dot => dot.classList.remove('active'));
  dots[index].classList.add('active');

  currentIndex = index;
}

function nextSlide() {
  showSlide(currentIndex + 1);
}

function prevSlide() {
  showSlide(currentIndex - 1);
}

function setSlide(index) {
  showSlide(index);
}
