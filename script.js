/*
   ScriptJS - Portfolio with I18n Support
   Author: Chaimae Zaki
*/

// Translation Data
const translations = {
    "en": {
        "page-title": "Chaimae Zaki | Full Stack Developer",
        "nav-home": "HOME",
        "nav-about": "ABOUT",
        "nav-experience": "EXPERIENCE",
        "nav-skills": "SKILLS",
        "nav-education": "EDUCATION",
        "nav-activities": "ACTIVITIES",
        "nav-projects": "PROJECTS",
        "nav-contact": "CONTACT",
        "hero-greeting": "HELLO, I'M CHAIMAE",
        "hero-role-1": "Software Developer",
        "hero-role-2": "AI Enthusiast.",
        "hero-location": "Tangier, Morocco",
        "hero-status": "Open to junior / full-time opportunities",
        "hero-bio": "I build modern web applications and intelligent digital solutions.",
        "hero-view-projects": "View Projects",
        "hero-download-cv": "Download CV",
        "about-title": "About Me",
        "about-summary": "Bachelor's Graduate in App Dev Engineering — Full Stack Developer",
        "about-p1": "I graduated with a Bachelor's in App Dev Engineering with a strong focus on full stack development, building modern web architectures from frontend to backend. I enjoy designing and implementing efficient solutions, ensuring scalability and performance across varied projects.",
        "about-p2": "My academic projects include leading a team to develop a C++ Smart City Simulation (Raylib) and building web applications with Laravel and Django, showcasing both my collaborative and technical skills.",
        "about-p3": "I am looking for an internship or junior developer role where I can contribute my expertise, take on technical challenges, and continue growing as a full stack developer.",
        "experience-title": "Professional Experience",
        "exp-company": "SMART AUTOMATION TECHNOLOGIES",
        "exp-pfe": "Graduation Project (PFE) — OMNILOG",
        "exp-omnilog-desc": "Development of the B2B marketplace platform, data integration and management, development and integration of platform features, with participation in the integration of the conversational AI chatbot assistant based on RAG and LLM architectures.",
        "exp-view-project": "View Project",
        "skills-title": "Technical Skills",
        "skills-frontend": "Frontend",
        "skills-backend": "Backend",
        "skills-ai": "AI",
        "skills-programming": "Programming",
        "skills-database": "Database",
        "skills-tools": "Tools",
        "skills-languages": "Languages",
        "lang-arabic": "Arabic — Native",
        "lang-french": "French — Good",
        "lang-english": "English — Intermediate",
        "skills-soft": "Soft Skills",
        "skill-rigorous": "Rigorous",
        "skill-curious": "Curious",
        "skill-team": "Team Spirit",
        "skill-persistent": "Persistent",
        "skill-learning": "Continuous Learning",
        "edu-title": "My Education",
        "edu-bachelor-title": "Licence IDAI",
        "edu-bachelor-desc": "FST Tanger",
        "edu-deust-title": "DEUST MIPC",
        "edu-deust-desc": "FST Tanger",
        "edu-bac-title": "Baccalaureate — Physical Sciences",
        "edu-bac-desc": "FST Tanger",
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
        "project-view-code": "View Code",
        "project-learn-more": "View Case Study",
        "project-omnilog-tagline": "B2B Marketplace for Material Handling",
        "project-omnilog-desc": "B2B digital platform for the material handling sector, enabling professionals to discover equipment, vehicles and services, and contact suppliers directly.",
        "project-role-title": "My role",
        "project-role-desc": "Frontend Developer • Full-Stack Developer • AI Integration",
        "project-results-title": "Key Results",
        "project-result-1": "B2B Marketplace",
        "project-result-2": "User & role management",
        "project-result-3": "REST API",
        "project-result-4": "RAG-based AI Assistant",
        "contact-title": "Contact Me",
        "contact-send": "Send Message",
        "filter-all": "All",
        "filter-web": "Web Development",
        "filter-ai": "AI & Systems",
        "pfe-badge": "01 — FEATURED PROJECT",
        "omnilog-desc-1": "B2B Marketplace dedicated to material handling and transport professionals.",
        "omnilog-desc-2": "Search and consultation of professional gear and machinery.",
        "omnilog-desc-3": "Catalog of vehicles and tools tailored for professionals.",
        "omnilog-desc-4": "Intelligent assistant based on LLM and RAG to guide users.",
        "omnilog-desc-5": "Connecting users around transport offers and inquiries.",
        "project-tech-title": "Technologies",
        "project-omnilog-contrib-summary": "Development of the B2B marketplace platform, data integration and management, development and integration of platform features, with participation in the integration of the conversational AI chatbot assistant based on RAG and LLM architectures.",
        "other-projects-title": "Other Projects"
    },
    "fr": {
        "page-title": "Chaimae Zaki | Développeuse Full Stack",
        "nav-home": "ACCUEIL",
        "nav-about": "À PROPOS",
        "nav-experience": "EXPÉRIENCE",
        "nav-skills": "COMPÉTENCES",
        "nav-education": "ÉDUCATION",
        "nav-activities": "ACTIVITÉS",
        "nav-projects": "PROJETS",
        "nav-contact": "CONTACT",
        "hero-greeting": "BONJOUR, JE SUIS CHAIMAE",
        "hero-role-1": "Développeuse Logiciel",
        "hero-role-2": "Passionnée d'IA.",
        "hero-location": "Tanger, Maroc",
        "hero-status": "Ouverte aux opportunités junior / CDI",
        "hero-bio": "Je conçois des applications web modernes et des solutions numériques intelligentes.",
        "hero-view-projects": "Voir les Projets",
        "hero-download-cv": "Télécharger CV",
        "about-title": "À Propos de Moi",
        "about-summary": "Diplômée en Licence d'Ingénierie de Développement d'Applications Informatiques — Développeuse Web & Backend",
        "about-p1": "Je suis diplômée en Licence d'Ingénierie de Développement d'Applications Informatiques avec une forte spécialisation en développement backend et en architectures web modernes. J'apprécie concevoir et implémenter des solutions backend performantes, garantissant l'évolutivité sur divers projets.",
        "about-p2": "Mes projets académiques incluent la direction d’une équipe pour développer une simulation de ville intelligente en C++ (Raylib) et la création d’applications web avec Laravel et Django, démontrant mes compétences techniques et collaboratives.",
        "about-p3": "Je recherche un stage ou un poste de développeuse junior où je pourrai apporter mon expertise, relever des défis techniques et continuer à progresser en tant que développeuse full stack.",
        "experience-title": "Expérience Professionnelle",
        "exp-company": "SMART AUTOMATION TECHNOLOGIES",
        "exp-pfe": "Projet de Fin d'Études — OMNILOG",
        "exp-omnilog-desc": "Développement de la plateforme de marketplace B2B, intégration et gestion des données, développement et intégration des fonctionnalités de la plateforme, avec participation à l’intégration de l’assistant chatbot IA conversationnel basé sur les architectures RAG et LLM.",
        "exp-view-project": "Voir le Projet",
        "skills-title": "Compétences Techniques",
        "skills-core": "Langages de Programmation",
        "skills-backend": "Web & Backend",
        "skill-mvc": "Modèle MVC",
        "skill-mvt": "Modèle MVT",
        "skill-auth": "Authentification",
        "skill-routing": "Routage",
        "skill-validation": "Validation de Formulaire",
        "skills-db": "Bases de données & Modélisation",
        "skill-merise": "Méthode Merise",
        "skill-uml": "UML",
        "skill-er": "ER Diagram / MCD",
        "skill-class-diag": "Diagramme de Classes",
        "skill-usecase": "Cas d'Utilisation",
        "skill-sequence": "Diagramme de Séquence",
        "skills-tools": "Outils de Développement",
        "skills-languages": "Langues",
        "lang-spoken": "Langues Parlées",
        "lang-progr": "Langages de Programmation",
        "lang-arabic": "Arabe — Langue maternelle",
        "lang-french": "Français — Bon niveau",
        "lang-english": "Anglais — Niveau Intermédiaire",
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
        "edu-present": "2025 – 2026",
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
        "ws-itwave-desc": "Participation à un meetup technologique traitant de l'intelligence artificielle, de l'entrepreneuriat, du personal branding et de la cybersécurité.",
        "ws-itwave-date": "15 Avril 2026",
        "projects-title": "Mes Projets",
        "project-view-code": "Code Source 💻",
        "project-learn-more": "Étude de Cas",
        "project-omnilog-tagline": "Plateforme B2B pour la Manutention et le Transport",
        "project-omnilog-desc": "Plateforme digitale B2B dédiée au secteur de la manutention, permettant aux professionnels de découvrir des équipements, véhicules et services et de contacter directement les fournisseurs.",
        "project-role-title": "Mon rôle",
        "project-role-desc": "Développeuse Frontend • Développeuse Full-Stack • Intégration IA",
        "project-results-title": "Résultats Clés",
        "project-result-1": "Marketplace B2B",
        "project-result-2": "Gestion des utilisateurs et rôles",
        "project-result-3": "API REST",
        "project-result-4": "Assistant IA basé sur RAG",
        "contact-title": "Contactez-moi",
        "contact-send": "Envoyer le Message",
        "filter-all": "Tous",
        "filter-web": "Développement Web",
        "filter-ai": "IA & Systèmes",
        "pfe-badge": "01 — PROJET VEDETTE (PFE)",
        "omnilog-desc-1": "Marketplace B2B dédiée aux professionnels de la manutention et du transport.",
        "omnilog-desc-2": "Recherche et consultation d'engins et équipements professionnels.",
        "omnilog-desc-3": "Catalogue de véhicules et matériels destinés aux professionnels.",
        "omnilog-desc-4": "Assistant intelligent basé sur LLM et RAG pour accompagner les utilisateurs.",
        "omnilog-desc-5": "Mise en relation autour des offres et demandes de transport.",
        "project-tech-title": "Technologies",
        "project-omnilog-contrib-summary": "Développement de la plateforme de marketplace B2B, intégration et gestion des données, développement et intégration des fonctionnalités de la plateforme, avec participation à l’intégration de l’assistant chatbot IA conversationnel basé sur les architectures RAG et LLM.",
        "other-projects-title": "Autres Projets"
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

// Initial update and filter logic setup
document.addEventListener("DOMContentLoaded", () => {
    updateContent();
    
    // Project Filtering Logic
    const filterButtons = document.querySelectorAll(".filter-btn");
    const projectCards = document.querySelectorAll(".projects-grid .project-card");

    if (filterButtons.length > 0) {
        filterButtons.forEach(btn => {
            btn.addEventListener("click", () => {
                filterButtons.forEach(b => b.classList.remove("active"));
                btn.classList.add("active");

                const filterValue = btn.getAttribute("data-filter");

                projectCards.forEach(card => {
                    const categories = card.getAttribute("data-category") ? card.getAttribute("data-category").split(" ") : [];
                    if (filterValue === "all" || categories.includes(filterValue)) {
                        card.style.display = "flex";
                    } else {
                        card.style.display = "none";
                    }
                });
            });
        });
    }
});

// Project Details Data with multi-language support
const projectData = {
    "omnilog": {
        title: {
            "en": "OMNILOG — B2B Material Handling Marketplace",
            "fr": "OMNILOG — Marketplace B2B de manutention"
        },
        tagline: {
            "en": "Graduation Project (PFE) at Smart Automation Technologies (SAT)",
            "fr": "Projet de Fin d'Études (PFE) chez Smart Automation Technologies (SAT)"
        },
        images: [
            {
                src: "omnilog.png",
                captionEn: "Platform Overview — Homepage & Marketplace",
                captionFr: "Vue générale de la plateforme — Page d'accueil & Marketplace"
            },
            {
                src: "manutention.png",
                captionEn: "Material Handling — Equipment Listings & Machinery",
                captionFr: "Manutention — Annonces d'engins & équipements"
            },
            {
                src: "vehicule.png",
                captionEn: "Vehicles — Fleet Catalogue for Pros",
                captionFr: "Véhicules — Catalogue de camions & utilitaires"
            },
            {
                src: "Chatbot.png",
                captionEn: "AI Chatbot — LLM & RAG Assistant",
                captionFr: "Chatbot IA — Assistant conversationnel RAG"
            },
            {
                src: "Bourse de Fret Live.png",
                captionEn: "Freight Exchange — Transport Deals & Listings",
                captionFr: "Bourse de Fret — Offres & demandes de transport"
            }
        ],
        goal: {
            "en": "Digitize and centralize transactions between various players in the material handling sector. The platform allows businesses and professionals to publish and manage equipment, vehicles, and services while facilitating direct connection with suppliers.",
            "fr": "Digitaliser et centraliser les échanges entre les différents acteurs du secteur de la manutention. La plateforme permet aux entreprises et professionnels de consulter, publier et gérer des équipements, véhicules, engins et services, tout en facilitant la mise en relation directe avec les fournisseurs."
        },
        contribution: {
            "en": "Participated in the full design, development, and integration of the platform:<br>• <strong>UI Development (Angular):</strong> Designed and built responsive user interfaces for the B2B Marketplace and product management modules.<br>• <strong>Role Management:</strong> Developed dedicated dashboards and capabilities tailored to distinct user roles (Admin, Super Admin, Supplier, Driver).<br>• <strong>REST API Integration:</strong> Connected the Angular frontend with the Node.js/Express.js backend and MongoDB database.<br>• <strong>AI Assistant Integration:</strong> Integrated an intelligent conversational chatbot utilizing LLM and RAG (Retrieval-Augmented Generation) architectures, exploring Graph RAG to enhance contextual search and document processing.",
            "fr": "Conception, développement et intégration de la plateforme OMNILOG :<br>• <strong>Développement de l'interface (Angular) :</strong> Conception et intégration des interfaces utilisateur responsive pour la Marketplace et le module de gestion des produits.<br>• <strong>Gestion des rôles :</strong> Mise en place des espaces et fonctionnalités dédiés selon le profil (Administrateur, Super Administrateur, Fournisseur, Chauffeur).<br>• <strong>Intégration d'API REST :</strong> Liaison du frontend Angular avec le backend Node.js / Express.<br>• <strong>Intégration d'un assistant IA :</strong> Intégration d'un chatbot conversationnel basé sur un LLM et une architecture RAG, avec exploration de l'approche Graph RAG pour améliorer la recherche contextuelle et le traitement de documents."
        },
        challenges: {
            "en": "Integrating a conversational assistant based on a LLM and RAG architecture with voice and multilingual interactions (FR, EN, AR, ES), and exploring advanced Graph RAG structures for optimized contextual searches.",
            "fr": "Intégration d'un assistant conversationnel basé sur un LLM et une architecture RAG avec support multilingue (FR, EN, AR, ES) et interactions vocales, ainsi que l'exploration de l'architecture Graph RAG pour optimiser la recherche contextuelle."
        },
        learnings: {
            "en": ["Angular", "Node.js", "Express.js", "MongoDB", "LLM / RAG", "n8n / Automation", "Graph RAG", "REST API", "TypeScript", "UI/UX & Figma"],
            "fr": ["Angular", "Node.js", "Express.js", "MongoDB", "LLM / RAG", "n8n / Automatisation", "Graph RAG", "API REST", "TypeScript", "UI/UX & Figma"]
        },
        github: "https://github.com/zakichaimae-byte",
        demo: "#"
    },
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

function openModal(projectId, initialSlideIndex = 0) {
    const data = projectData[projectId];
    if (!data) return;

    const title = data.title[currentLang];
    const tagline = data.tagline[currentLang];
    const goal = data.goal[currentLang];
    const contribution = data.contribution[currentLang];
    const challenges = data.challenges[currentLang];
    const learnings = data.learnings[currentLang];

    let techHtml = learnings.map(tech => `<span class="skill-tag">${tech}</span>`).join('');

    // Build image carousel if images array exists
    let carouselHtml = '';
    if (data.images && data.images.length > 0) {
        const slides = data.images.map((img, i) => {
            const caption = currentLang === 'fr' ? img.captionFr : img.captionEn;
            return `
            <div class="carousel-slide${i === initialSlideIndex ? ' active' : ''}">
                <img src="${img.src}" alt="${caption}"
                     onerror="this.parentElement.style.background='#f0f0f0'; this.style.display='none';">
                <div class="carousel-caption">${caption}</div>
            </div>`;
        }).join('');

        const dots = data.images.map((_, i) =>
            `<button class="carousel-dot${i === initialSlideIndex ? ' active' : ''}" data-index="${i}"></button>`
        ).join('');

        carouselHtml = `
        <div class="modal-carousel" id="modal-carousel-${projectId}">
            <div class="carousel-track">${slides}</div>
            <button class="carousel-prev" aria-label="Previous"><i class="fa-solid fa-chevron-left"></i></button>
            <button class="carousel-next" aria-label="Next"><i class="fa-solid fa-chevron-right"></i></button>
            <div class="carousel-dots">${dots}</div>
        </div>`;
    }

    const content = `
        <div class="modal-header">
            <h2>${title}</h2>
            <div class="modal-subheader">${tagline}</div>
        </div>
        
        ${carouselHtml}

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

    // Init carousel after injecting HTML
    if (data.images && data.images.length > 0) {
        initCarousel(`modal-carousel-${projectId}`, initialSlideIndex);
    }
}

function closeModal() {
    modal.classList.remove("show");
    setTimeout(() => {
        modal.style.display = "none";
        document.body.style.overflow = "auto";
    }, 300);
}

function initCarousel(carouselId, initialSlideIndex = 0) {
    const container = document.getElementById(carouselId);
    if (!container) return;

    const slides = container.querySelectorAll(".carousel-slide");
    const dots = container.querySelectorAll(".carousel-dot");
    const prevBtn = container.querySelector(".carousel-prev");
    const nextBtn = container.querySelector(".carousel-next");
    let currentIndex = initialSlideIndex;

    function showSlide(index) {
        if (index < 0) index = slides.length - 1;
        if (index >= slides.length) index = 0;
        currentIndex = index;

        slides.forEach((slide, i) => {
            slide.classList.toggle("active", i === currentIndex);
        });

        dots.forEach((dot, i) => {
            dot.classList.toggle("active", i === currentIndex);
        });
    }

    if (prevBtn) {
        prevBtn.onclick = (e) => {
            e.stopPropagation();
            showSlide(currentIndex - 1);
        };
    }

    if (nextBtn) {
        nextBtn.onclick = (e) => {
            e.stopPropagation();
            showSlide(currentIndex + 1);
        };
    }

    dots.forEach(dot => {
        dot.onclick = (e) => {
            e.stopPropagation();
            const index = parseInt(dot.getAttribute("data-index"));
            showSlide(index);
        };
    });
}

// Bind all items with data-project (cards, text links, buttons)
document.addEventListener("click", (e) => {
    const trigger = e.target.closest("[data-project]");
    if (trigger) {
        e.preventDefault();
        const projectId = trigger.getAttribute("data-project");
        const slideIndexAttr = trigger.getAttribute("data-slide-index");
        const slideIndex = slideIndexAttr ? parseInt(slideIndexAttr) : 0;
        openModal(projectId, slideIndex);
    }
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
