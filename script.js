/*
   ScriptJS
   Author: Antigravity
*/
const header = document.querySelector("header");
const menu = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');
const body = document.body;

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
const scrollElements = document.querySelectorAll('.hero-content, .about-content, .skill-category, .timeline-item, .club-card, .project-card, .blog-card, .contact-container');

// Apply initial styles
scrollElements.forEach((el, index) => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'all 0.6s ease-out';
    // Reset delay for each section group to avoid long staggered delays across the whole page
    // A simple modulo approach might still cause weird delays if many elements are present.
    // Let's us a simple delay based on index within its parent or just small random/fixed delay.
    // For simplicity here, keeping modulo but reducing the group size or removing it if it causes issues.
    // Actually, purely sequential delay across the whole page is bad. 
    // Let's remove the global index reliance for delay, or keep it minimal.
    // Better: set delay to 0 here, and handling staggered animations via CSS or a more complex JS observer is cleaner.
    // But to respect "simple implementation":
    el.style.transitionDelay = '0s';
    observer.observe(el);
});

console.log("Portfolio Loaded Successfully");

// Back to Top Button
const backToTopBtn = document.querySelector('#back-to-top');

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTopBtn.classList.add('active');
    } else {
        backToTopBtn.classList.remove('active');
    }
});

// Project Details Data
const projectData = {
    "itms": {
        title: "Adaptive Signal Control (ITMS)",
        tagline: "Intelligent Traffic Management Logic",
        goal: "Synchronize high-density traffic grids to reduce urban wait times through adaptive signaling algorithms.",
        contribution: "Designed and implemented the 10s-90s adaptive timing engine and emergency vehicle priority override systems.",
        challenges: "Managing real-time synchronization across dynamic 10x10 grids and handling high vehicle density peaks during simulation.",
        learnings: ["Algorithm Optimization", "Real-time Synchronization", "C++ System Logic"],
        github: "https://github.com/zakichaimae-byte/ADAPTIVE-SIGNAL-CONTROL.git",
        demo: "#"
    },
    "smartcity": {
        title: "Smart City Simulation Project",
        tagline: "Urban Modeling & Infrastructure Integration",
        goal: "Model a complete, functional city integrating infrastructure, public services, and realistic urban flows.",
        contribution: "Modeled a fully functional city featuring: <br>• <strong>Infrastructure:</strong> Hospitals, Police, Schools, Banks, Fire Stations.<br>• <strong>Public Spaces:</strong> Parks, Sports fields, Cinemas, Cultural centers.<br>• <strong>Commercial & Residential:</strong> Restaurants, Markets, Retail, Houses, Apartments.",
        challenges: "Integrating multiple urban systems (Commercial, Housing, Transportation) into a cohesive and interactive simulated environment.",
        learnings: ["Urban Systems Integration", "Infrastructure Modeling", "Object-Oriented Design"],
        github: "https://github.com/zakichaimae-byte/SmatCity.git",
        demo: "#"
    },
    "datacenter": {
        title: "Data Center Resource Manager",
        tagline: "Laravel Full-Stack Management System",
        goal: "Efficiently manage and reserve physical resources (servers, routers) while preventing scheduling conflicts.",
        contribution: "Architect & System Administrator. Implemented Security protocols, Authentication flow, and User Management (RBAC).",
        challenges: "Developing a robust anti-overlap algorithm via SQL logic and building a visual Gantt chart from scratch without external libraries.",
        learnings: ["Laravel 11 & PHP 8.2", "Custom Gantt Visualization", "RBAC Security", "Real-time JSON Notifications"],
        github: "https://github.com/gunner206/Reservation-Ressources-Data-Center.git",
        demo: "#"
    },
    "stock": {
        title: "Stock Management App",
        tagline: "C Console Application",
        goal: "Develop a lightweight tool for small businesses to track inventory without heavy dependencies.",
        contribution: "Implemented the file handling system (CSV read/write) and QuickSort algorithm for product listing.",
        challenges: "Ensuring data persistence and handling edge cases in user input (buffer overflows).",
        learnings: ["C File I/O", "Data Structures (Linked Lists)", "Algorithm Optimization"],
        github: "#",
        demo: "#"
    }
};

// Modal Logic
const modal = document.getElementById("project-modals");
const modalBody = document.getElementById("modal-body");
const closeBtn = document.querySelector(".close-btn");
const projectButtons = document.querySelectorAll(".project-link[data-project]");

function openModal(projectId) {
    const data = projectData[projectId];
    if (!data) return;

    // Construct Modal Content
    let techHtml = data.learnings.map(tech => `<span class="skill-tag">${tech}</span>`).join('');

    const content = `
        <div class="modal-header">
            <h2>${data.title}</h2>
            <div class="modal-subheader">${data.tagline}</div>
        </div>
        
        <div class="modal-grid">
            <div class="modal-section">
                <h3><i class="fa-solid fa-bullseye"></i> Goal</h3>
                <p>${data.goal}</p>
            </div>
            <div class="modal-section">
                <h3><i class="fa-solid fa-code-branch"></i> Contribution</h3>
                <p>${data.contribution}</p>
            </div>
            <div class="modal-section">
                <h3><i class="fa-solid fa-mountain"></i> Challenges</h3>
                <p>${data.challenges}</p>
            </div>
            <div class="modal-section">
                <h3><i class="fa-solid fa-book-open"></i> Learnings</h3>
                <div class="skill-items">${techHtml}</div>
            </div>
        </div>

        <div class="modal-links">
            <a href="${data.github}" class="btn-modal btn-primary" target="_blank"><i class="fa-brands fa-github"></i> View Code</a>
            <!-- <a href="${data.demo}" class="btn-modal btn-outline" target="_blank"><i class="fa-solid fa-desktop"></i> Live Demo</a> -->
        </div>
    `;

    modalBody.innerHTML = content;
    modal.style.display = "flex";
    // Trigger reflow for transition
    void modal.offsetWidth;
    modal.classList.add("show");
    document.body.style.overflow = "hidden"; // Prevent background scrolling
}

function closeModal() {
    modal.classList.remove("show");
    setTimeout(() => {
        modal.style.display = "none";
        document.body.style.overflow = "auto";
    }, 300); // Match transition duration
}

projectButtons.forEach(btn => {
    btn.addEventListener("click", (e) => {
        e.preventDefault();
        const projectId = btn.getAttribute("data-project");
        openModal(projectId);
    });
});

closeBtn.addEventListener("click", closeModal);

window.addEventListener("click", (e) => {
    if (e.target === modal) {
        closeModal();
    }
});

// Contact Form AJAX Submission
const contactForm = document.getElementById('contact-form');
const formStatus = document.getElementById('form-status');

if (contactForm) {
    contactForm.addEventListener('submit', async function (e) {
        e.preventDefault();

        const formData = new FormData(contactForm);
        const submitBtn = contactForm.querySelector('button[type="submit"]');
        const originalBtnText = submitBtn.innerHTML;

        // Loading state
        submitBtn.disabled = true;
        submitBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Sending...';
        formStatus.className = 'form-status';
        formStatus.textContent = '';

        try {
            const response = await fetch(contactForm.action, {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            });

            if (response.ok) {
                formStatus.textContent = 'Merci! Votre message a été envoyé avec succès.';
                formStatus.classList.add('success');
                contactForm.reset();
            } else {
                const data = await response.json();
                if (Object.hasOwn(data, 'errors')) {
                    formStatus.textContent = data["errors"].map(error => error["message"]).join(", ");
                } else {
                    formStatus.textContent = "Oups! Un problème est survenu lors de l'envoi.";
                }
                formStatus.classList.add('error');
            }
        } catch (error) {
            formStatus.textContent = "Oups! Un problème de connexion est survenu.";
            formStatus.classList.add('error');
        } finally {
            submitBtn.disabled = false;
            submitBtn.innerHTML = originalBtnText;

            // Hide status after 5 seconds
            setTimeout(() => {
                formStatus.style.display = 'none';
                setTimeout(() => {
                    formStatus.className = 'form-status';
                    formStatus.style.display = '';
                }, 300);
            }, 5000);
        }
    });
}
