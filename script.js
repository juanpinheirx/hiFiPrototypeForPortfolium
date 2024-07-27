const carousel = document.querySelector('.carousel');
const carouselInner = document.querySelector('.carousel-inner');
const carouselItems = document.querySelectorAll('.carousel-item');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

let currentIndex = 0;

let itemWidth = carouselItems[0].offsetWidth;

function calculateItemWidth() {
  itemWidth = carouselItems[0].offsetWidth;
}

calculateItemWidth(); // Calculate initial item width


nextBtn.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % carouselItems.length;
  carouselInner.style.marginLeft = `-${currentIndex * itemWidth}px`;
});

prevBtn.addEventListener('click', () => {
  currentIndex =
  (currentIndex - 1 + carouselItems.length) % carouselItems.length;
  carouselInner.style.marginLeft = `-${currentIndex * itemWidth}px`;
});

let autoplay;

function startAutoplay() {
  autoplay = setInterval(() => {
    nextBtn.click();
  }, 5000);
}

function stopAutoplay() {
  clearInterval(autoplay);
}

startAutoplay();
// ... rest of your JavaScript code

window.addEventListener('resize', () => {
  calculateItemWidth();
});