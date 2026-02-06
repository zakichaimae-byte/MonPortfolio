
const header = document.querySelector("header");
const menu = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');
const themeBtn = document.querySelector('#theme-btn');
const themeIcon = themeBtn.querySelector('i');
const body = document.body;

// Theme Toggle Logic
// Check local storage on load
if (localStorage.getItem('theme') === 'dark') {
    body.classList.add('dark-mode');
    themeIcon.classList.remove('fa-moon');
    themeIcon.classList.add('fa-sun');
}

themeBtn.addEventListener('click', () => {
    body.classList.toggle('dark-mode');

    if (body.classList.contains('dark-mode')) {
        themeIcon.classList.remove('fa-moon');
        themeIcon.classList.add('fa-sun');
        localStorage.setItem('theme', 'dark');
    } else {
        themeIcon.classList.remove('fa-sun');
        themeIcon.classList.add('fa-moon');
        localStorage.setItem('theme', 'light');
    }
});

window.addEventListener("scroll", function () {
    header.classList.toggle("sticky", window.scrollY > 0);
});

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

window.onscroll = () => {
    menu.classList.remove('bx-x');
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
