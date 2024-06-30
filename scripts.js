// In js/scripts.js
document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelector('.nav-links');
    document.querySelector('.menu-toggle').addEventListener('click', function() {
        navLinks.classList.toggle('nav-active');
    });
});
