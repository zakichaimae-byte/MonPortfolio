/*
   ScriptJS - Portfolio with I18n Support
   Author: Chaimae Zaki
*/

// Translation Data
const translations = {
    "en": {
        "page-title": "Chaimae Zaki | Full Stack Developer",
        "nav-home": "Home",
        "nav-about": "About",
        "nav-skills": "Skills",
        "nav-education": "Education",
        "nav-activities": "Activities",
        "nav-projects": "Projects",
        "nav-contact": "Contact",
        "hero-greeting": "Hello, I am",
        "hero-role": "Full Stack Developer",
        "hero-location": "Based in Tangier, Morocco",
        "hero-status": "Open to internship / junior opportunities",
        "hero-bio": "I enjoy designing complete full stack solutions, from intuitive frontends to efficient backends. Ready to contribute and grow as a developer.",
        "hero-view-projects": "View Projects",
        "hero-download-cv": "Download CV",
        "about-title": "About Me",
        "about-summary": "Final-year Bachelor's in App Dev Engineering — Full Stack Developer",
        "about-p1": "I am a final-year student in a Bachelor's in App Dev Engineering with a strong focus on full stack development, building modern web architectures from frontend to backend. I enjoy designing and implementing efficient solutions, ensuring scalability and performance across varied projects.",
        "about-p2": "My academic projects include leading a team to develop a C++ Smart City Simulation (Raylib) and building web applications with Laravel and Django, showcasing both my collaborative and technical skills.",
        "about-p3": "I am looking for an internship or junior developer role where I can contribute my expertise, take on technical challenges, and continue growing as a full stack developer.",
        "skills-title": "Technical Skills",
        "skills-core": "Programming Languages",
        "skills-backend": "Backend & Web",
        "skill-mvc": "MVC",
        "skill-mvt": "MVT Model",
        "skill-auth": "Authentication",
        "skill-routing": "Routing",
        "skill-validation": "Form Validation",
        "skills-db": "Databases & Modeling",
        "skill-merise": "Merise",
        "skill-uml": "UML",
        "skill-er": "ER Diagram",
        "skill-class-diag": "Class Diagram",
        "skill-usecase": "Use Case Diagram",
        "skill-sequence": "Sequence Diagram",
        "skills-tools": "Development Tools",
        "skills-languages": "Languages",
        "lang-spoken": "Spoken Languages",
        "lang-progr": "Programming Languages",
        "lang-arabic": "Arabic \u2014 Native",
        "lang-french": "French \u2014 Good",
        "lang-english": "English \u2014 Intermediate",
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
        "edu-masters-title": "Master's in Artificial Intelligence",
        "edu-masters-desc": "Specialization in machine learning, deep learning, and intelligent systems development.",
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
        "workshops-title": "Workshops & Meetups",
        "ws-itwave-title": "ITWAVE Meet-Up Q&A 2026",
        "ws-itwave-cert": "Certificate of Participation",
        "ws-itwave-desc": "Participated in a technology meetup covering artificial intelligence, entrepreneurship, personal branding, and cybersecurity.",
        "ws-itwave-date": "15 April 2026",
        "projects-title": "My Projects",
        "project-view-code": "View Code 💻",
        "project-learn-more": "Learn More 🔍",
        "contact-title": "Contact Me",
        "contact-send": "Send Message"
    },
    "fr": {
        "page-title": "Chaimae Zaki | Développeuse Full Stack",
        "nav-home": "Accueil",
        "nav-about": "À propos",
        "nav-skills": "Compétences",
        "nav-education": "Éducation",
        "nav-activities": "Activités",
        "nav-projects": "Projets",
        "nav-contact": "Contact",
        "hero-greeting": "Bonjour, je suis",
        "hero-role": "D\u00e9veloppeuse Full Stack",
        "hero-location": "Bas\u00e9e \u00e0 Tanger, Maroc",
        "hero-status": "Ouverte aux opportunit\u00e9s de stage / junior",
        "hero-bio": "J'aime concevoir des solutions full stack compl\u00e8tes, du frontend intuitif au backend performant. Pr\u00eate \u00e0 contribuer et \u00e0 \u00e9voluer en tant que d\u00e9veloppeuse.",
        "hero-view-projects": "Voir les Projets",
        "hero-download-cv": "Télécharger CV",
        "about-title": "À Propos de Moi",
        "about-summary": "Étudiante en dernière année de Licence d'Ingénierie de Développement d'Applications Informatiques — Développeuse Web & Backend",
        "about-p1": "Je suis étudiante en dernière année de Licence d'Ingénierie de Développement d'Applications Informatiques avec une forte spécialisation en développement backend et en architectures web modernes. J'apprécie concevoir et implémenter des solutions backend performantes, garantissant l'évolutivité sur divers projets.",
        "about-p2": "Mes projets académiques incluent la direction d’une équipe pour développer une simulation de ville intelligente en C++ (Raylib) et la création d’applications web avec Laravel et Django, démontrant mes compétences techniques et collaboratives.",
        "about-p3": "Je recherche un stage ou un poste de développeuse junior où je pourrai apporter mon expertise, relever des défis techniques et continuer à progresser en tant que développeuse full stack.",
        "skills-title": "Compétences Techniques",
        "skills-core": "Langages de Programmation",
        "skills-backend": "Web & Backend",
        "skill-mvc": "Mod\u00e8le MVC",
        "skill-mvt": "Mod\u00e8le MVT",
        "skill-auth": "Authentification",
        "skill-routing": "Routage",
        "skill-validation": "Validation de Formulaire",
        "skills-db": "Bases de donn\u00e9es & Mod\u00e9lisation",
        "skill-merise": "M\u00e9thode Merise",
        "skill-uml": "UML",
        "skill-er": "ER Diagram / MCD",
        "skill-class-diag": "Diagramme de Classes",
        "skill-usecase": "Cas d'Utilisation",
        "skill-sequence": "Diagramme de S\u00e9quence",
        "skills-tools": "Outils de D\u00e9veloppement",
        "skills-languages": "Langues",
        "lang-spoken": "Langues Parl\u00e9es",
        "lang-progr": "Langages de Programmation",
        "lang-arabic": "Arabe \u2014 Langue maternelle",
        "lang-french": "Fran\u00e7ais \u2014 Bon niveau",
        "lang-english": "Anglais \u2014 Niveau Interm\u00e9diaire",
        "skills-soft": "Qualit\u00e9s & Soft Skills",
        "skill-rigorous": "Rigoureuse",
        "skill-curious": "Curieuse",
        "skill-team": "Esprit d'\u00c9quipe",
        "skill-persistent": "Pers\u00e9v\u00e9rante",
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
        "edu-masters-title": "Master en Intelligence Artificielle",
        "edu-masters-desc": "Spécialisation en apprentissage automatique, deep learning et développement de systèmes intelligents.",
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
        "workshops-title": "Ateliers & Meetups",
        "ws-itwave-title": "ITWAVE Meet-Up Q&A 2026",
        "ws-itwave-cert": "Certificat de Participation",
        "ws-itwave-desc": "Participation  un meetup technologique traitant de l'intelligence artificielle, de l'entrepreneuriat, du personal branding et de la cybers\u00e9curit\u00e9.",
        "ws-itwave-date": "15 Avril 2026",
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
    },
    "preskool": {
        title: {
            "en": "PreSkool — Smart School Management",
            "fr": "PreSkool — Gestion Scolaire Intelligente"
        },
        tagline: {
            "en": "Django-based Web Platform for Private Schools",
            "fr": "Plateforme Web Django pour Établissements Privés"
        },
        goal: {
            "en": "Centralize and automate all administrative and pedagogical operations of private schools, replacing traditional paper-based methods with a secure, digital solution.",
            "fr": "Centraliser et automatiser toutes les opérations administratives et pédagogiques des écoles privées, en remplaçant les méthodes traditionnelles par une solution numérique sécurisée."
        },
        contribution: {
            "en": "Designed the MVT architecture and implemented core modules: <br>• <strong>Authentication</strong>: Role-based login (Admin, Teacher, Student).<br>• <strong>Student Management</strong>: CRUD, profiles auto-created via Django signals.<br>• <strong>Academic</strong>: Timetables, exams, events, notifications.<br>• <strong>Library & Chatbot</strong>: Digital library + AI assistance module.",
            "fr": "Conception de l'architecture MVT et implémentation des modules principaux : <br>• <strong>Authentification</strong> : Connexion par rôle (Admin, Prof, Étudiant).<br>• <strong>Gestion des élèves</strong> : CRUD, profils créés automatiquement via signaux Django.<br>• <strong>Académique</strong> : Emplois du temps, examens, événements, notifications.<br>• <strong>Bibliothèque & Chatbot</strong> : Bibliothèque numérique + module d'assistance IA."
        },
        challenges: {
            "en": "Resolving image display issues via MEDIA_URL configuration, automating profile creation with Django signals, and managing Git conflicts in a collaborative team environment.",
            "fr": "Résolution de l'affichage des images via MEDIA_URL, automatisation de la création des profils avec les signaux Django, et gestion des conflits Git en environnement collaboratif."
        },
        learnings: {
            "en": ["Django & Python", "MVT Architecture", "Role-Based Auth", "Django Signals", "SQLite", "Bootstrap", "Git Collaboration"],
            "fr": ["Django & Python", "Architecture MVT", "Auth par Rôles", "Signaux Django", "SQLite", "Bootstrap", "Collaboration Git"]
        },
        github: "https://github.com/zakichaimae-byte/PreSkool",
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
