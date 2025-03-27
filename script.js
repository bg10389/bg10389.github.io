// Wait for the DOM to fully load
document.addEventListener('DOMContentLoaded', function() {
    // Responsive Navigation Menu Toggle
    const navToggle = document.getElementById('navToggle');
    const navUl = document.querySelector('nav ul');
  
    navToggle.addEventListener('click', function() {
      navUl.classList.toggle('active');
    });
    
    // Optional: Close navigation menu when a link is clicked (for mobile)
    const navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach(link => {
      link.addEventListener('click', function() {
        if (navUl.classList.contains('active')) {
          navUl.classList.remove('active');
        }
      });
    });
    
    // Optional: Modal Pop-up functionality example (uncomment and customize if needed)
    /*
    const modal = document.getElementById('modal');
    const modalClose = document.getElementById('modalClose');
    
    // Open modal when an element with class 'open-modal' is clicked
    document.querySelectorAll('.open-modal').forEach(button => {
      button.addEventListener('click', function() {
        modal.style.display = 'block';
      });
    });
    
    // Close modal when clicking the close button
    modalClose.addEventListener('click', function() {
      modal.style.display = 'none';
    });
    
    // Close modal when clicking outside the modal content
    window.addEventListener('click', function(e) {
      if (e.target == modal) {
        modal.style.display = 'none';
      }
    });
    */
  });
  