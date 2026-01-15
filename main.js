// ============================================
// PROJECT DATA
// ============================================

const projectsData = [
    {
        title: "Employee Face Detection & Door Lock System",
        tech: "Raspberry Pi, Django, FaceNet, Python",
        description: "A Raspberry Pi–based facial recognition access control system using FaceNet and Django. Includes secure door access, employee attendance logging, and a web dashboard for user management.",
        category: "iot",
        icon: "🔐",
        details: [
            "Implemented real-time facial recognition using FaceNet deep learning model",
            "Developed Django REST API for user management and attendance tracking",
            "Integrated Raspberry Pi with camera module for door access control",
            "Created web dashboard for admin to manage employees and view logs",
            "Ensured secure authentication and authorization mechanisms"
        ]
    },
    {
        title: "Library Management System",
        tech: "Java, Swing, MySQL",
        description: "Java Swing based library management system with full CRUD operations and an admin dashboard.",
        category: "java",
        icon: "📚",
        details: [
            "Built desktop application using Java Swing for GUI",
            "Implemented complete CRUD operations for books and members",
            "Designed and developed MySQL database schema",
            "Created admin dashboard with analytics and reporting",
            "Added features like book search, issue/return tracking, and fine calculation"
        ]
    },
    {
        title: "Spam Detection System",
        tech: "Python, Scikit-learn, Logistic Regression",
        description: "Machine learning model to classify spam and non-spam emails with high accuracy.",
        category: "ml",
        icon: "📧",
        details: [
            "Developed ML model using Logistic Regression algorithm",
            "Preprocessed and vectorized email text data using TF-IDF",
            "Achieved high accuracy in spam classification",
            "Implemented feature engineering for better model performance",
            "Created user-friendly interface for email classification"
        ]
    },
    {
        title: "Railway Reservation System",
        tech: "HTML, CSS, JavaScript",
        description: "Interactive railway reservation front-end with dynamic pricing and real-time validation.",
        category: "web",
        icon: "🚂",
        details: [
            "Built responsive front-end using HTML, CSS, and vanilla JavaScript",
            "Implemented dynamic pricing based on train class and route",
            "Added real-time form validation and user feedback",
            "Created interactive seat selection interface",
            "Designed modern and intuitive user experience"
        ]
    }
];

// ============================================
// TYPING ANIMATION
// ============================================

const typingText = document.getElementById('typingText');
const name = "Abhilash Bhandari";
let charIndex = 0;
let isDeleting = false;

function typeWriter() {
    const currentText = name.substring(0, charIndex);
    typingText.textContent = currentText;

    if (!isDeleting && charIndex < name.length) {
        charIndex++;
        setTimeout(typeWriter, 100);
    } else if (isDeleting && charIndex > 0) {
        charIndex--;
        setTimeout(typeWriter, 50);
    } else if (charIndex === name.length) {
        setTimeout(() => {
            isDeleting = true;
            typeWriter();
        }, 2000);
    } else {
        isDeleting = false;
        setTimeout(typeWriter, 500);
    }
}

// Start typing animation when page loads
window.addEventListener('load', () => {
    setTimeout(typeWriter, 1000);
});

// ============================================
// NAVIGATION
// ============================================

const navbar = document.getElementById('navbar');
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');
const navLinks = document.querySelectorAll('.nav-link');

// Navbar scroll effect
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Mobile menu toggle
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Smooth scrolling for navigation links
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        if (targetSection) {
            const offsetTop = targetSection.offsetTop - 70;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// ============================================
// PROJECT FILTERING
// ============================================

const filterButtons = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card');

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Remove active class from all buttons
        filterButtons.forEach(btn => btn.classList.remove('active'));
        // Add active class to clicked button
        button.classList.add('active');
        
        const filterValue = button.getAttribute('data-filter');
        
        projectCards.forEach(card => {
            if (filterValue === 'all' || card.getAttribute('data-category') === filterValue) {
                card.classList.remove('hidden');
                card.style.animation = 'fadeInUp 0.5s ease';
            } else {
                card.classList.add('hidden');
            }
        });
    });
});

// ============================================
// PROJECT MODAL
// ============================================

const modal = document.getElementById('projectModal');
const modalClose = document.getElementById('modalClose');
const modalBody = document.getElementById('modalBody');
const viewProjectButtons = document.querySelectorAll('.view-project');

function openModal(projectIndex) {
    const project = projectsData[projectIndex];
    
    modalBody.innerHTML = `
        <h2>${project.icon} ${project.title}</h2>
        <p class="project-tech" style="margin-top: 1rem; margin-bottom: 1.5rem;">${project.tech}</p>
        <p class="project-description" style="margin-bottom: 1.5rem;">${project.description}</p>
        <h3 style="color: var(--accent-primary); margin-bottom: 1rem; font-size: 1.25rem;">Key Features:</h3>
        <ul style="list-style: none; padding: 0;">
            ${project.details.map(detail => `
                <li style="padding: 0.5rem 0; color: var(--text-secondary); display: flex; align-items: start;">
                    <span style="color: var(--accent-primary); margin-right: 0.5rem;">✓</span>
                    <span>${detail}</span>
                </li>
            `).join('')}
        </ul>
    `;
    
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

viewProjectButtons.forEach(button => {
    button.addEventListener('click', () => {
        const projectIndex = parseInt(button.getAttribute('data-project'));
        openModal(projectIndex);
    });
});

modalClose.addEventListener('click', closeModal);

modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        closeModal();
    }
});

// Close modal on Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
        closeModal();
    }
});

// ============================================
// SKILL BAR ANIMATION
// ============================================

const skillBars = document.querySelectorAll('.skill-progress');

function animateSkillBars() {
    skillBars.forEach(bar => {
        const width = bar.getAttribute('data-width');
        bar.style.width = width + '%';
    });
}

// Intersection Observer for skill bars
const skillsSection = document.querySelector('.skills');
if (skillsSection) {
    const skillsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateSkillBars();
                skillsObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.3 });

    skillsObserver.observe(skillsSection);
}

// ============================================
// SCROLL ANIMATIONS
// ============================================

const fadeElements = document.querySelectorAll('.glass-card, .section-title');

const fadeObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
});

fadeElements.forEach(element => {
    element.classList.add('fade-in');
    fadeObserver.observe(element);
});

// ============================================
// EMAILJS CONTACT FORM
// ============================================

const contactForm = document.getElementById('contactForm');
const formMessage = document.getElementById('formMessage');

// Initialize EmailJS (you'll need to replace with your EmailJS public key)
// emailjs.init("YOUR_PUBLIC_KEY");

contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        subject: document.getElementById('subject').value,
        message: document.getElementById('message').value
    };
    
    // Show loading state
    const submitButton = contactForm.querySelector('button[type="submit"]');
    const originalText = submitButton.textContent;
    submitButton.textContent = 'Sending...';
    submitButton.disabled = true;
    
    try {
        // EmailJS integration
        // Replace 'YOUR_SERVICE_ID' and 'YOUR_TEMPLATE_ID' with your actual IDs
        /*
        await emailjs.send(
            'YOUR_SERVICE_ID',
            'YOUR_TEMPLATE_ID',
            {
                from_name: formData.name,
                from_email: formData.email,
                subject: formData.subject,
                message: formData.message
            }
        );
        */
        
        // For now, simulate success (remove this when EmailJS is configured)
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        // Success message
        formMessage.textContent = 'Thank you! Your message has been sent successfully.';
        formMessage.className = 'form-message success';
        formMessage.style.display = 'block';
        
        // Reset form
        contactForm.reset();
        
        // Hide message after 5 seconds
        setTimeout(() => {
            formMessage.style.display = 'none';
        }, 5000);
        
    } catch (error) {
        // Error message
        formMessage.textContent = 'Sorry, there was an error sending your message. Please try again or email me directly.';
        formMessage.className = 'form-message error';
        formMessage.style.display = 'block';
        
        console.error('EmailJS Error:', error);
    } finally {
        submitButton.textContent = originalText;
        submitButton.disabled = false;
    }
});

// ============================================
// SMOOTH SCROLL FOR ALL ANCHOR LINKS
// ============================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#' && href !== '') {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                const offsetTop = target.offsetTop - 70;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        }
    });
});

// ============================================
// ACTIVE NAVIGATION LINK HIGHLIGHTING
// ============================================

const sections = document.querySelectorAll('section[id]');

function highlightNavLink() {
    const scrollY = window.pageYOffset;
    
    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');
        
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
}

window.addEventListener('scroll', highlightNavLink);

// ============================================
// RESUME DOWNLOAD HANDLER
// ============================================

const resumeDownloadBtn = document.querySelector('a[href*="resume.pdf"]');
if (resumeDownloadBtn) {
    resumeDownloadBtn.addEventListener('click', (e) => {
        // Ensure download attribute is set
        resumeDownloadBtn.setAttribute('download', 'Abhilash_Bhandari_Resume.pdf');
        
        // For browsers that don't support download attribute, open in new tab
        const isDownloadSupported = 'download' in document.createElement('a');
        if (!isDownloadSupported) {
            e.preventDefault();
            window.open(resumeDownloadBtn.href, '_blank');
        }
    });
}

// ============================================
// INITIALIZE ON PAGE LOAD
// ============================================

document.addEventListener('DOMContentLoaded', () => {
    // Add active class to first nav link
    if (navLinks.length > 0) {
        navLinks[0].classList.add('active');
    }
    
    // Initialize scroll animations
    highlightNavLink();
});

// ============================================
// CONSOLE MESSAGE
// ============================================

console.log('%c👋 Hello! Welcome to my portfolio.', 'color: #00d4ff; font-size: 16px; font-weight: bold;');
console.log('%cBuilt with HTML, CSS, and Vanilla JavaScript', 'color: #7b2cbf; font-size: 12px;');

