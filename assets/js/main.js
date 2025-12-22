/**
 * Commune Rurale de Beni Chegdale
 * JavaScript principal - Interactions et fonctionnalités
 */

// Attendre que le DOM soit chargé
document.addEventListener('DOMContentLoaded', function() {
    
    // ============================================
    // Gestion du formulaire de contact
    // ============================================
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Validation Bootstrap
            if (!contactForm.checkValidity()) {
                e.stopPropagation();
                contactForm.classList.add('was-validated');
                return;
            }
            
            // Récupérer les données du formulaire
            const formData = new FormData(contactForm);
            const data = {
                nom: formData.get('nom'),
                email: formData.get('email'),
                telephone: formData.get('telephone'),
                sujet: formData.get('sujet'),
                message: formData.get('message')
            };
            
            // Simuler l'envoi (à remplacer par un vrai appel API)
            console.log('Données du formulaire:', data);
            
            // Afficher le message de succès
            const successAlert = document.getElementById('formSuccess');
            const errorAlert = document.getElementById('formError');
            
            if (successAlert && errorAlert) {
                successAlert.classList.remove('d-none');
                errorAlert.classList.add('d-none');
                
                // Réinitialiser le formulaire
                contactForm.reset();
                contactForm.classList.remove('was-validated');
                
                // Masquer le message après 5 secondes
                setTimeout(() => {
                    successAlert.classList.add('d-none');
                }, 5000);
            }
        });
    }
    
    // ============================================
    // Animation au scroll (Intersection Observer)
    // ============================================
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observer les éléments avec animation
    const animatedElements = document.querySelectorAll('.card, .service-card, article');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
    
    // ============================================
    // Professional Scroll Animations
    // ============================================
    const scrollAnimationObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });
    
    // Observe all scroll animation elements
    document.querySelectorAll('.fade-in-on-scroll, .slide-left-on-scroll, .slide-right-on-scroll, .scale-in-on-scroll').forEach(el => {
        scrollAnimationObserver.observe(el);
    });
    
    // Add hover effects
    document.querySelectorAll('.hover-lift').forEach(el => {
        el.classList.add('hover-lift');
    });
    
    document.querySelectorAll('.hover-glow').forEach(el => {
        el.classList.add('hover-glow');
    });
    
    document.querySelectorAll('.hover-scale').forEach(el => {
        el.classList.add('hover-scale');
    });
    
    // ============================================
    // Smooth scroll pour les ancres
    // ============================================
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href !== '#' && href.length > 1) {
                const target = document.querySelector(href);
                if (target) {
                    e.preventDefault();
                    const offsetTop = target.offsetTop - 80; // Compenser la navbar fixe
                    window.scrollTo({
                        top: offsetTop,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
    
    // ============================================
    // Navbar scroll effect
    // ============================================
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        let lastScroll = 0;
        window.addEventListener('scroll', function() {
            const currentScroll = window.pageYOffset;
            
            if (currentScroll > 100) {
                navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
            } else {
                navbar.style.boxShadow = 'none';
            }
            
            lastScroll = currentScroll;
        });
    }
    
    // ============================================
    // Animation des icônes au survol
    // ============================================
    const serviceIcons = document.querySelectorAll('.service-icon i, .service-icon-large i');
    serviceIcons.forEach(icon => {
        icon.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.2) rotate(5deg)';
            this.style.transition = 'transform 0.3s ease';
        });
        
        icon.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1) rotate(0deg)';
        });
    });
    
    // ============================================
    // Gestion des tooltips Bootstrap
    // ============================================
    const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    tooltipTriggerList.map(function(tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl);
    });
    
    // ============================================
    // Lazy loading des images (si ajoutées plus tard)
    // ============================================
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    if (img.dataset.src) {
                        img.src = img.dataset.src;
                        img.classList.remove('lazy');
                        imageObserver.unobserve(img);
                    }
                }
            });
        });
        
        document.querySelectorAll('img.lazy').forEach(img => {
            imageObserver.observe(img);
        });
    }
    
    // ============================================
    // Gestion du menu mobile
    // ============================================
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
    const navbarCollapse = document.querySelector('.navbar-collapse');
    
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (window.innerWidth < 992) {
                const bsCollapse = bootstrap.Collapse.getInstance(navbarCollapse);
                if (bsCollapse) {
                    bsCollapse.hide();
                }
            }
        });
    });
    
    // ============================================
    // Compteur animé (si nécessaire)
    // ============================================
    function animateCounter(element, target, duration = 2000) {
        let start = 0;
        const increment = target / (duration / 16);
        
        const timer = setInterval(() => {
            start += increment;
            if (start >= target) {
                element.textContent = target;
                clearInterval(timer);
            } else {
                element.textContent = Math.floor(start);
            }
        }, 16);
    }
    
    // Observer pour déclencher les compteurs
    const counterObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const counter = entry.target;
                const target = parseInt(counter.dataset.target || counter.textContent);
                if (!counter.classList.contains('counted')) {
                    counter.classList.add('counted');
                    animateCounter(counter, target);
                }
            }
        });
    }, { threshold: 0.5 });
    
    document.querySelectorAll('.counter').forEach(counter => {
        counterObserver.observe(counter);
    });
    
    // ============================================
    // Gestion des alertes
    // ============================================
    const alerts = document.querySelectorAll('.alert');
    alerts.forEach(alert => {
        if (alert.classList.contains('alert-dismissible')) {
            setTimeout(() => {
                const bsAlert = new bootstrap.Alert(alert);
                bsAlert.close();
            }, 5000);
        }
    });
    
    // ============================================
    // Console log pour le développement
    // ============================================
    console.log('%cCommune Rurale de Beni Chegdale', 'color: #1e5f3f; font-size: 20px; font-weight: bold;');
    console.log('%cSite web institutionnel - Version 1.0', 'color: #6c757d; font-size: 12px;');
    
});

// ============================================
// Fonctions utilitaires
// ============================================

/**
 * Formater un numéro de téléphone
 */
function formatPhoneNumber(phone) {
    return phone.replace(/(\d{3})(\d{3})(\d{3})/, '$1 $2 $3');
}

/**
 * Valider un email
 */
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

/**
 * Débounce function pour optimiser les événements
 */
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Optimiser le scroll avec debounce
const optimizedScroll = debounce(() => {
    // Code de scroll optimisé
}, 10);

window.addEventListener('scroll', optimizedScroll);

