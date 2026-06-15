// script.js
// Handles navigation toggling on mobile and dynamic content updates.

document.addEventListener('DOMContentLoaded', () => {
  const toggleBtn = document.querySelector('.menu-toggle');
  const navLinks = document.querySelector('.nav-links');

  // Toggle the mobile navigation menu
  if (toggleBtn) {
    toggleBtn.addEventListener('click', () => {
      navLinks.classList.toggle('open');
    });
  }

  // Close navigation when a link is clicked (mobile only)
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
    });
  });

  // Update copyright year
  const yearEl = document.getElementById('year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
});
