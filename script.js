function toggleMenu() {
  const nav = document.querySelector('.page-links');
  if (nav) {
    nav.classList.toggle('open');
  }
}

// Get all slides and store them in an array
const slides = document.querySelectorAll('.slide');

// Keep track of which slide is currently showing
let currentSlide = 0;

// This function shows a specific slide by index
function showSlide(index) {
    // If we go past the last slide, go back to the first
    if (index >= slides.length) currentSlide = 0;
    // If we go before the first slide, go to the last
    if (index < 0) currentSlide = slides.length - 1;
    
    // Remove active from all slides
    slides.forEach(slide => slide.classList.remove('active'));
    
    // Add active to the current slide
    slides[currentSlide].classList.add('active');
}

// Move to the next or previous slide
function changeSlide(direction) {
    currentSlide += direction;
    showSlide(currentSlide);
}

// Auto advance every 5 seconds
setInterval(() => {
    currentSlide++;
    showSlide(currentSlide);
}, 5000);

// Show the first slide on load
showSlide(currentSlide);