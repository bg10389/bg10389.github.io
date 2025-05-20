document.addEventListener('DOMContentLoaded', () => {
  const slides = document.querySelectorAll('.slides');
  let current = 0;
  const interval = 5000;

  function show(n) {
    slides.forEach((s,i) => s.classList.toggle('active', i === n));
  }

  show(current);
  setInterval(() => {
    current = (current + 1) % slides.length;
    show(current);
  }, interval);
});
