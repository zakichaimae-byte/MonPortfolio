/* 
   ScriptJS 
   Author: Antigravity
   Functionality: Mobile Menu, Scroll Animations
*/

// Mobile Menu Toggle
const menuIcon = document.getElementById('menu-icon');
const navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    navbar.classList.toggle('active');
    // Change icon based on state (optional)
};

// Remove menu on scroll
window.onscroll = () => {
    navbar.classList.remove('active');
};

// Scroll Reveal Animations (Simple Implementation preferred over heavy library if simple)
// But let's use ScrollReveal CDN if we want easy effects, or write a simple Intersection Observer.
// Writing a simple Intersection Observer for performance and dependency-free.

const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Select elements to animate
const scrollElements = document.querySelectorAll('.hero-content, .about-content, .project-card, .timeline-item, .contact-container');

// Apply initial styles
scrollElements.forEach((el, index) => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'all 0.6s ease-out';
    el.style.transitionDelay = `${index % 3 * 0.1}s`; // Stagger effect
    observer.observe(el);
});

console.log("Portfolio Loaded Successfully");
