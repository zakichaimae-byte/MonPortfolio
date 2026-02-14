/*
   ScriptJS - Portfolio with I18n Support
   Author: Chaimae Zaki
*/

// Translation Data
const translations = {
    "en": {
        "page-title": "Chaimae Zaki | Web & Backend Developer",
        "nav-home": "Home",
        "nav-about": "About",
        "nav-skills": "Skills",
        "nav-education": "Education",
        "nav-activities": "Activities",
        "nav-projects": "Projects",
        "nav-contact": "Contact",
        "hero-greeting": "Hello, I am",
        "hero-role": "Web & Backend Developer",
        "hero-bio": "I enjoy designing efficient backend solutions and building scalable web applications. Ready to contribute and grow as a developer.",
        "hero-view-projects": "View Projects",
        "hero-download-cv": "Download CV",
        "about-title": "About Me",
        "about-summary": "Final-year Software Engineering Student — Web & Backend Developer",
        "about-p1": "I am a final-year Software Engineering student with a strong focus on backend development and building modern web architectures. I enjoy designing and implementing efficient backend solutions, ensuring scalability and performance across varied projects.",
        "about-p2": "My academic projects include leading a team to develop a C++ Smart City Simulation (Raylib) and building a web application with Laravel, showcasing both my collaborative and technical skills.",
        "about-p3": "I am looking for an internship or junior developer role where I can contribute my expertise, take on technical challenges, and continue growing as a backend developer.",
        "skills-title": "Technical Skills",
        "skills-core": "Core Languages",
        "skills-backend": "Backend & Web",
        "skill-mvc": "MVC",
        "skills-db": "Databases & Modeling",
        "skill-merise": "Merise",
        "skill-uml": "UML",
        "skills-automation": "Automation & Engineering",
        "skills-soft": "Qualities & Soft Skills",
        "skill-rigorous": "Rigorous",
        "skill-curious": "Curious",
        "skill-team": "Team Spirit",
        "skill-persistent": "Persistent",
        "skill-learning": "Continuous Learning",
        "edu-title": "My Education",
        "edu-bac-title": "Baccalaureate — Physical Sciences",
        "edu-bac-desc": "Scientific foundation and work discipline.",
        "edu-deust-title": "DEUST — MIPC",
        "edu-deust-desc": "Mathematics, Computer Science, Physics, and Chemistry. Solid base: scientific rigor and abstraction.",
        "edu-present": "Present",
        "edu-bachelor-title": "Bachelor's in App Dev Engineering",
        "edu-bachelor-desc": "Computer application development. Focus on software architectures and backend.",
        "edu-future": "Future Goal",
        "edu-masters-title": "Master's in Security & Systems",
        "edu-masters-desc": "Specialization in cybersecurity, security auditing, and data protection.",
        "activities-title": "Extracurricular Activities & Clubs",
        "club-digi-title": "DigiGirlz Program (2023)",
        "club-digi-role": "Mentor & Group Communication Lead",
        "club-digi-desc": "• Mentored participants and supported their learning journey.<br>• Managed group communications, coordinated activities, and shared important updates efficiently.<br>• Fostered participant engagement and collaboration throughout the program.",
        "club-skill-mentoring": "Mentoring",
        "club-skill-comm": "Communication",
        "club-skill-leadership": "Leadership",
        "club-skill-engagement": "Engagement",
        "club-itgeeks-title": "IT GEEKS Club (2025 – Present)",
        "club-itgeeks-role": "Active Member",
        "club-itgeeks-desc": "Participation in technical and collaborative activities. Practical training on versioning tools.",
        "club-skill-teamwork": "Teamwork",
        "club-skill-vc": "Version Control",
        "club-skill-autonomy": "Autonomy",
        "projects-title": "My Projects",
        "project-view-code": "View Code 💻",
        "project-learn-more": "Learn More 🔍",
        "contact-title": "Contact Me",
        "contact-send": "Send Message"
    },
    "fr": {
        "page-title": "Chaimae Zaki | Développeuse Web & Backend",
        "nav-home": "Accueil",
        "nav-about": "À propos",
        "nav-skills": "Compétences",
        "nav-education": "Éducation",
        "nav-activities": "Activités",
        "nav-projects": "Projets",
        "nav-contact": "Contact",
        "hero-greeting": "Bonjour, je suis",
        "hero-role": "Développeuse Web & Backend",
        "hero-bio": "J’aime concevoir des solutions backend efficaces et construire des applications web évolutives. Prête à contribuer et à évoluer en tant que développeuse.",
        "hero-view-projects": "Voir les Projets",
        "hero-download-cv": "Télécharger CV",
        "about-title": "À Propos de Moi",
        "about-summary": "Étudiante en dernière année de Licence d'Ingénierie de Développement d'Applications Informatiques — Développeuse Web & Backend",
        "about-p1": "Je suis étudiante en dernière année de Licence d'Ingénierie de Développement d'Applications Informatiques avec une forte spécialisation en développement backend et en architectures web modernes. J’apprécie concevoir et implémenter des solutions backend performantes, garantissant l’évolutivité sur divers projets.",
        "about-p2": "Mes projets académiques incluent la direction d’une équipe pour développer une simulation de ville intelligente en C++ (Raylib) et la création d’une application web avec Laravel, démontrant mes compétences techniques et collaboratives.",
        "about-p3": "Je recherche un stage ou un poste de développeuse junior où je pourrai apporter mon expertise, relever des défis techniques et continuer à progresser en tant que développeuse backend.",
        "skills-title": "Compétences Techniques",
        "skills-core": "Langages Principaux",
        "skills-backend": "Web & Backend",
        "skill-mvc": "Modèle MVC",
        "skills-db": "Bases de données & Modélisation",
        "skill-merise": "Méthode Merise",
        "skill-uml": "UML",
        "skills-automation": "Automatisation & Ingénierie",
        "skills-soft": "Qualités & Soft Skills",
        "skill-rigorous": "Rigoureuse",
        "skill-curious": "Curieuse",
        "skill-team": "Esprit d'Équipe",
        "skill-persistent": "Persévérante",
        "skill-learning": "Apprentissage Continu",
        "edu-title": "Mon Parcours Scolaire",
        "edu-bac-title": "Baccalauréat — Sciences Physiques",
        "edu-bac-desc": "Bases scientifiques solides et discipline de travail.",
        "edu-deust-title": "DEUST — MIPC",
        "edu-deust-desc": "Mathématiques, Informatique, Physique et Chimie. Base solide : rigueur scientifique et abstraction.",
        "edu-present": "Présent",
        "edu-bachelor-title": "Licence d'Ingénierie de Développement d'Applications Informatiques",
        "edu-bachelor-desc": "Développement d'applications informatiques. Focus sur les architectures logicielles et le backend.",
        "edu-future": "Objectif Futur",
        "edu-masters-title": "Master en Systèmes et Sécurité",
        "edu-masters-desc": "Spécialisation en cybersécurité, audit de sécurité et protection des données.",
        "activities-title": "Activités Extrascolaires & Clubs",
        "club-digi-title": "Programme DigiGirlz (2023)",
        "club-digi-role": "Mentore & Responsable Communication de Groupe",
        "club-digi-desc": "• Mentorat des participantes pour soutenir leur apprentissage.<br>• Gestion des communications du groupe, coordination des activités et partage des mises à jour importantes.<br>• Encouragement de l'engagement et de la collaboration entre les participantes.",
        "club-skill-mentoring": "Mentorat",
        "club-skill-comm": "Communication",
        "club-skill-leadership": "Leadership",
        "club-skill-engagement": "Engagement",
        "club-itgeeks-title": "Club IT GEEKS (2025 – Présent)",
        "club-itgeeks-role": "Membre Actif",
        "club-itgeeks-desc": "Participation à des activités techniques et collaboratives. Formation pratique sur les outils de versionnage.",
        "club-skill-teamwork": "Travail d'Équipe",
        "club-skill-vc": "Contrôle de Version",
        "club-skill-autonomy": "Autonomie",
        "projects-title": "Mes Projets",
        "project-view-code": "Code Source 💻",
        "project-learn-more": "En Savoir Plus 🔍",
        "contact-title": "Contactez-moi",
        "contact-send": "Envoyer le Message"
    }
};

let currentLang = "en";

function updateContent() {
    document.querySelectorAll("[data-i18n]").forEach(element => {
        const key = element.getAttribute("data-i18n");
        if (translations[currentLang][key]) {
            if (element.tagName === "INPUT" || element.tagName === "TEXTAREA") {
                element.placeholder = translations[currentLang][key];
            } else if (element.tagName === "TITLE") {
                document.title = translations[currentLang][key];
            } else {
                element.innerHTML = translations[currentLang][key];
            }
        }
    });

    // Update active button state
    document.querySelectorAll(".lang-btn").forEach(btn => {
        btn.classList.toggle("active", btn.id === `lang-${currentLang}`);
    });
}

// Language Switcher Events
const enBtn = document.getElementById("lang-en");
const frBtn = document.getElementById("lang-fr");

if (enBtn && frBtn) {
    enBtn.onclick = (e) => {
        currentLang = "en";
        localStorage.setItem("preferred-lang", currentLang);
        updateContent();
    };
    frBtn.onclick = (e) => {
        currentLang = "fr";
        localStorage.setItem("preferred-lang", currentLang);
        updateContent();
    };
}

// Initial update
document.addEventListener("DOMContentLoaded", updateContent);

// Project Details Data with multi-language support
const projectData = {
    "itms": {
        title: {
            "en": "Adaptive Signal Control (ITMS)",
            "fr": "Contrôle Adaptatif des Feux (ITMS)"
        },
        tagline: {
            "en": "Intelligent Traffic Management Logic",
            "fr": "Logique de gestion de trafic intelligente"
        },
        goal: {
            "en": "Synchronize high-density traffic grids to reduce urban wait times through adaptive signaling algorithms.",
            "fr": "Synchroniser les grilles de trafic à haute densité pour réduire les temps d'attente urbains grâce à des algorithmes de signalisation adaptatifs."
        },
        contribution: {
            "en": "Designed and implemented the 10s-90s adaptive timing engine and emergency vehicle priority override systems.",
            "fr": "Conception et implémentation du moteur de chronométrage adaptatif (10s-90s) et des systèmes de priorité pour véhicules d'urgence."
        },
        challenges: {
            "en": "Managing real-time synchronization across dynamic 10x10 grids and handling high vehicle density peaks during simulation.",
            "fr": "Gestion de la synchronisation en temps réel sur des grilles dynamiques 10x10 et gestion des pics de densité de véhicules."
        },
        learnings: {
            "en": ["Algorithm Optimization", "Real-time Synchronization", "C++ System Logic"],
            "fr": ["Optimisation d'Algorithmes", "Synchronisation en Temps Réel", "Logique Système C++"]
        },
        github: "https://github.com/zakichaimae-byte/ADAPTIVE-SIGNAL-CONTROL.git",
        demo: "#"
    },
    "smartcity": {
        title: {
            "en": "Smart City Simulation Project",
            "fr": "Projet de Simulation de Ville Intelligente"
        },
        tagline: {
            "en": "Urban Modeling & Infrastructure Integration",
            "fr": "Modélisation Urbaine & Intégration d'Infrastructures"
        },
        goal: {
            "en": "Model a complete, functional city integrating infrastructure, public services, and realistic urban flows.",
            "fr": "Modéliser une ville complète et fonctionnelle intégrant infrastructures, services publics et flux urbains réalistes."
        },
        contribution: {
            "en": "Modeled a fully functional city featuring: <br>• <strong>Infrastructure:</strong> Hospitals, Police, Schools, Banks, Fire Stations.<br>• <strong>Public Spaces:</strong> Parks, Sports fields, Cinemas, Cultural centers.<br>• <strong>Commercial & Residential:</strong> Restaurants, Markets, Retail, Houses, Apartments.",
            "fr": "Modélisation d'une ville entièrement fonctionnelle comprenant : <br>• <strong>Infrastructure :</strong> Hôpitaux, Police, Écoles, Banques, Casernes.<br>• <strong>Espaces Publics :</strong> Parcs, Terrains de sport, Cinémas, Centres culturels.<br>• <strong>Commercial & Résidentiel :</strong> Restaurants, Marchés, Commerces, Maisons, Appartements."
        },
        challenges: {
            "en": "Integrating multiple urban systems (Commercial, Housing, Transportation) into a cohesive and interactive simulated environment.",
            "fr": "Intégration de multiples systèmes urbains (Commerce, Logement, Transport) dans un environnement simulé cohérent et interactif."
        },
        learnings: {
            "en": ["Urban Systems Integration", "Infrastructure Modeling", "Object-Oriented Design"],
            "fr": ["Intégration de Systèmes Urbains", "Modélisation d'Infrastructures", "Design Orienté Objet"]
        },
        github: "https://github.com/zakichaimae-byte/SmatCity.git",
        demo: "#"
    },
    "datacenter": {
        title: {
            "en": "Data Center Resource Manager",
            "fr": "Gestionnaire de Ressources Data Center"
        },
        tagline: {
            "en": "Laravel Full-Stack Management System",
            "fr": "Système de Gestion Full-Stack Laravel"
        },
        goal: {
            "en": "Efficiently manage and reserve physical resources (servers, routers) while preventing scheduling conflicts.",
            "fr": "Gérer et réserver efficacement les ressources physiques (serveurs, routeurs) tout en évitant les conflits de planification."
        },
        contribution: {
            "en": "Architect & System Administrator. Implemented Security protocols, Authentication flow, and User Management (RBAC).",
            "fr": "Architecte et Administrateur Système. Implémentation des protocoles de sécurité, du flux d'authentification et de la gestion des utilisateurs (RBAC)."
        },
        challenges: {
            "en": "Developing a robust anti-overlap algorithm via SQL logic and building a visual Gantt chart from scratch without external libraries.",
            "fr": "Développement d'un algorithme anti-chevauchement robuste via SQL et création d'un diagramme de Gantt visuel sans bibliothèques externes."
        },
        learnings: {
            "en": ["Laravel 11 & PHP 8.2", "Custom Gantt Visualization", "RBAC Security", "Real-time JSON Notifications"],
            "fr": ["Laravel 11 & PHP 8.2", "Visualisation Gantt Personnalisée", "Sécurité RBAC", "Notifications JSON en temps réel"]
        },
        github: "https://github.com/gunner206/Reservation-Ressources-Data-Center.git",
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

    const title = data.title[currentLang];
    const tagline = data.tagline[currentLang];
    const goal = data.goal[currentLang];
    const contribution = data.contribution[currentLang];
    const challenges = data.challenges[currentLang];
    const learnings = data.learnings[currentLang];

    let techHtml = learnings.map(tech => `<span class="skill-tag">${tech}</span>`).join('');

    const content = `
        <div class="modal-header">
            <h2>${title}</h2>
            <div class="modal-subheader">${tagline}</div>
        </div>
        
        <div class="modal-grid">
            <div class="modal-section">
                <h3><i class="fa-solid fa-bullseye"></i> ${currentLang === 'en' ? 'Goal' : 'Objectif'}</h3>
                <p>${goal}</p>
            </div>
            <div class="modal-section">
                <h3><i class="fa-solid fa-code-branch"></i> Contribution</h3>
                <p>${contribution}</p>
            </div>
            <div class="modal-section">
                <h3><i class="fa-solid fa-mountain"></i> ${currentLang === 'en' ? 'Challenges' : 'Défis'}</h3>
                <p>${challenges}</p>
            </div>
            <div class="modal-section">
                <h3><i class="fa-solid fa-book-open"></i> ${currentLang === 'en' ? 'Learnings' : 'Apprentissages'}</h3>
                <div class="skill-items">${techHtml}</div>
            </div>
        </div>

        <div class="modal-links">
            <a href="${data.github}" class="btn-modal btn-primary" target="_blank"><i class="fa-brands fa-github"></i> ${currentLang === 'en' ? 'View Code' : 'Code Source'}</a>
        </div>
    `;

    modalBody.innerHTML = content;
    modal.style.display = "flex";
    void modal.offsetWidth;
    modal.classList.add("show");
    document.body.style.overflow = "hidden";
}

function closeModal() {
    modal.classList.remove("show");
    setTimeout(() => {
        modal.style.display = "none";
        document.body.style.overflow = "auto";
    }, 300);
}

projectButtons.forEach(btn => {
    btn.addEventListener("click", (e) => {
        e.preventDefault();
        const projectId = btn.getAttribute("data-project");
        openModal(projectId);
    });
});

if (closeBtn) closeBtn.addEventListener("click", closeModal);

window.addEventListener("click", (e) => {
    if (e.target === modal) {
        closeModal();
    }
});

// Header scroll effect
const header = document.querySelector("header");
const menu = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');

window.addEventListener("scroll", function () {
    header.classList.toggle("sticky", window.scrollY > 0);
});

if (menu) {
    menu.onclick = () => {
        menu.classList.toggle('bx-x');
        navbar.classList.toggle('active');
    };
}

window.onscroll = () => {
    if (menu) {
        menu.classList.remove('bx-x');
        navbar.classList.remove('active');
    }
};

// Intersection Observer for scroll animations
const observerOptions = {
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

document.querySelectorAll('.hero-content, .about-content, .skill-category, .timeline-item, .club-card, .project-card, .contact-container').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'all 0.6s ease-out';
    observer.observe(el);
});

// Back to Top Button
const backToTopBtn = document.querySelector('#back-to-top');
window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTopBtn.classList.add('active');
    } else {
        backToTopBtn.classList.remove('active');
    }
});

// Contact Form AJAX
const contactForm = document.getElementById('contact-form');
const formStatus = document.getElementById('form-status');

if (contactForm) {
    contactForm.addEventListener('submit', async function (e) {
        e.preventDefault();
        const submitBtn = contactForm.querySelector('button[type="submit"]');
        const originalBtnText = submitBtn.innerHTML;

        submitBtn.disabled = true;
        submitBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> ...';

        try {
            const response = await fetch(contactForm.action, {
                method: 'POST',
                body: new FormData(contactForm),
                headers: { 'Accept': 'application/json' }
            });

            if (response.ok) {
                formStatus.textContent = currentLang === 'en' ? 'Thank you! Your message has been sent.' : 'Merci ! Votre message a été envoyé.';
                formStatus.className = 'form-status success';
                contactForm.reset();
            } else {
                formStatus.textContent = currentLang === 'en' ? 'Oops! Something went wrong.' : 'Oups ! Une erreur est survenue.';
                formStatus.className = 'form-status error';
            }
        } catch (error) {
            formStatus.textContent = currentLang === 'en' ? 'Connection error.' : 'Erreur de connexion.';
            formStatus.className = 'form-status error';
        } finally {
            submitBtn.disabled = false;
            submitBtn.innerHTML = originalBtnText;
            setTimeout(() => { formStatus.textContent = ''; }, 5000);
        }
    });
}
