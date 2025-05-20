// CAROUSEL LOGIC
const track     = document.querySelector('.carousel-track');
const slides    = Array.from(track.children);
const prevBtn   = document.querySelector('.carousel-btn.prev');
const nextBtn   = document.querySelector('.carousel-btn.next');
let currentIndex = 0;

function updateCarousel() {
  const width = slides[0].getBoundingClientRect().width;
  track.style.transform = `translateX(-${currentIndex * width}px)`;
}

nextBtn.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % slides.length;
  updateCarousel();
});
prevBtn.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  updateCarousel();
});

// SCROLL-REVEAL TIMELINE + CARDS
const revealEls = document.querySelectorAll('.section, .project-card, .timeline-entry');
const observerOpts = { threshold: 0.1 };
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, observerOpts);

revealEls.forEach(el => {
  el.classList.add('hidden');
  revealObserver.observe(el);
});
