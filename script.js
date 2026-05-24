
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            // Close mobile menu if open
            closeHamburgerMenu();
            
            // Scroll to target with smooth behavior
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});


function updateActiveNavLink() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    let currentSection = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        // Check if section is in viewport (with offset for navbar)
        if (window.scrollY >= sectionTop - 200) {
            currentSection = section.getAttribute('id');
        }
    });
    
    // Remove active class from all links
    navLinks.forEach(link => {
        link.classList.remove('active');
    });
    
    // Add active class to current section link
    if (currentSection) {
        const activeLink = document.querySelector(`.nav-link[href="#${currentSection}"]`);
        if (activeLink) {
            activeLink.classList.add('active');
        }
    }
}

// Update active link on scroll
window.addEventListener('scroll', updateActiveNavLink);

// ============================================
// 3. Scroll Animation (Fade-in Effects)
// ============================================

/**
 * Use Intersection Observer API to trigger fade-in
 * animations when elements come into view
 */
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        // Check if element is in viewport
        if (entry.isIntersecting) {
            // Add animation to element
            entry.target.style.animation = 'fadeInUp 0.8s ease forwards';
            
            // Stop observing this element
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe all elements with fade-in class
document.querySelectorAll('.fade-in').forEach(element => {
    observer.observe(element);
});

// ============================================
// 4. Mobile Hamburger Menu
// ============================================

/**
 * Toggle hamburger menu for mobile devices
 */
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

if (hamburger) {
    hamburger.addEventListener('click', function() {
        navMenu.classList.toggle('active');
        
        // Animate hamburger icon
        const spans = hamburger.querySelectorAll('span');
        
        if (navMenu.classList.contains('active')) {
            // Transform to X icon
            spans[0].style.transform = 'rotate(45deg) translate(10px, 10px)';
            spans[1].style.opacity = '0';
            spans[2].style.transform = 'rotate(-45deg) translate(7px, -7px)';
        } else {
            // Return to hamburger icon
            spans[0].style.transform = 'none';
            spans[1].style.opacity = '1';
            spans[2].style.transform = 'none';
        }
    });
}

/**
 * Close hamburger menu
 */
function closeHamburgerMenu() {
    if (navMenu && navMenu.classList.contains('active')) {
        navMenu.classList.remove('active');
        
        const spans = hamburger.querySelectorAll('span');
        spans[0].style.transform = 'none';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'none';
    }
}

// Close menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', closeHamburgerMenu);
});

// Close menu when clicking outside
document.addEventListener('click', function(e) {
    if (hamburger && navMenu) {
        if (!e.target.closest('.nav-container')) {
            closeHamburgerMenu();
        }
    }
});

// ============================================
// 5. Add Mobile Menu Styles Dynamically
// ============================================

/**
 * Add styles for mobile hamburger menu
 * This runs dynamically so styles work properly
 */
if (window.innerWidth <= 480) {
    const style = document.createElement('style');
    style.textContent = `
        .nav-menu {
            position: fixed;
            left: -100%;
            top: 60px;
            flex-direction: column;
            background: rgba(10, 14, 39, 0.98);
            width: 100%;
            text-align: center;
            transition: 0.3s;
            padding: 20px 0;
            border-bottom: 1px solid rgba(0, 217, 255, 0.2);
        }
        
        .nav-menu.active {
            left: 0;
        }
        
        .nav-menu li {
            padding: 15px 0;
            border-bottom: 1px solid rgba(0, 217, 255, 0.1);
        }
        
        .nav-menu li:last-child {
            border-bottom: none;
        }
    `;
    document.head.appendChild(style);
}

// ============================================
// 6. Form Submission Handler
// ============================================

/**
 * Handle contact form submission
 * Prevents default behavior and shows success message
 */
const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form values
        const formData = new FormData(this);
        const name = this.querySelector('input[type="text"]').value;
        const email = this.querySelector('input[type="email"]').value;
        const message = this.querySelector('textarea').value;
        
        // Simple validation
        if (!name || !email || !message) {
            showNotification('Please fill in all fields', 'error');
            return;
        }
        
        // Validate email format
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            showNotification('Please enter a valid email', 'error');
            return;
        }
        
        // Show success message
        showNotification('Message sent successfully! I will get back to you soon.', 'success');
        
        // Reset form
        this.reset();
    });
}

/**
 * Show notification message
 * @param {string} message - The message to display
 * @param {string} type - 'success' or 'error'
 */
function showNotification(message, type) {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    
    // Add styles
    const style = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: ${type === 'success' ? '#00d9ff' : '#ff006e'};
        color: ${type === 'success' ? '#0a0e27' : 'white'};
        padding: 15px 25px;
        border-radius: 5px;
        font-weight: 600;
        z-index: 2000;
        animation: slideInRight 0.5s ease;
        max-width: 300px;
        word-wrap: break-word;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
    `;
    
    // Apply inline styles
    Object.assign(notification.style, {
        position: 'fixed',
        top: '100px',
        right: '20px',
        background: type === 'success' ? '#00d9ff' : '#ff006e',
        color: type === 'success' ? '#0a0e27' : 'white',
        padding: '15px 25px',
        borderRadius: '5px',
        fontWeight: '600',
        zIndex: '2000',
        maxWidth: '300px',
        wordWrap: 'break-word',
        boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)',
        animation: 'slideInRight 0.5s ease'
    });
    
    // Add to body
    document.body.appendChild(notification);
    
    // Remove notification after 4 seconds
    setTimeout(() => {
        notification.style.animation = 'slideInRight 0.5s ease reverse';
        setTimeout(() => {
            notification.remove();
        }, 500);
    }, 4000);
}

// ============================================
// 7. Scroll Animations for Timeline
// ============================================

/**
 * Stagger animation for timeline items
 */
function initTimelineAnimation() {
    const timelineItems = document.querySelectorAll('.timeline-item');
    
    timelineItems.forEach((item, index) => {
        observer.observe(item);
        
        // Set initial opacity to 0
        item.style.opacity = '0';
        
        // Add delay to each item
        item.style.animationDelay = `${index * 0.1}s`;
    });
}

// Initialize timeline animation when DOM is loaded
document.addEventListener('DOMContentLoaded', initTimelineAnimation);

// ============================================
// 8. Smooth Scroll for Project Cards
// ============================================

/**
 * Add scroll animations to project cards
 */
function initProjectCardAnimation() {
    const projectCards = document.querySelectorAll('.project-card');
    
    projectCards.forEach((card, index) => {
        observer.observe(card);
        
        // Set animation delay
        card.style.animationDelay = `${index * 0.15}s`;
    });
}

document.addEventListener('DOMContentLoaded', initProjectCardAnimation);

// ============================================
// 9. Animate Skill Categories on Scroll
// ============================================

/**
 * Add animation to skill categories
 */
function initSkillCategoryAnimation() {
    const skillCategories = document.querySelectorAll('.skill-category');
    
    skillCategories.forEach((category, index) => {
        observer.observe(category);
        
        category.style.animationDelay = `${index * 0.1}s`;
    });
}

document.addEventListener('DOMContentLoaded', initSkillCategoryAnimation);

// ============================================
// 10. Animate Certification Cards
// ============================================

/**
 * Add animation to certification cards
 */
function initCertificationAnimation() {
    const certCards = document.querySelectorAll('.certification-card');
    
    certCards.forEach((card, index) => {
        observer.observe(card);
        
        card.style.animationDelay = `${index * 0.1}s`;
    });
}

document.addEventListener('DOMContentLoaded', initCertificationAnimation);

// ============================================
// 11. Parallax Effect for Hero Section
// ============================================

/**
 * Add subtle parallax effect to hero section
 */
window.addEventListener('scroll', function() {
    const hero = document.querySelector('.hero');
    
    if (hero) {
        const scrollPosition = window.scrollY;
        hero.style.backgroundPosition = `center ${scrollPosition * 0.5}px`;
    }
});

// ============================================
// 12. Add Scroll Indicator Animation
// ============================================

/**
 * Hide scroll indicator when user scrolls down
 */
window.addEventListener('scroll', function() {
    const scrollIndicator = document.querySelector('.scroll-indicator');
    
    if (scrollIndicator) {
        if (window.scrollY > 100) {
            scrollIndicator.style.opacity = '0';
            scrollIndicator.style.pointerEvents = 'none';
        } else {
            scrollIndicator.style.opacity = '1';
            scrollIndicator.style.pointerEvents = 'auto';
        }
    }
});

// ============================================
// 13. Initialize All Animations on Page Load
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    // Initialize all fade-in animations
    const fadeInElements = document.querySelectorAll('.fade-in');
    fadeInElements.forEach((element, index) => {
        element.style.animationDelay = `${index * 0.1}s`;
    });
    
    // Initialize active link on page load
    updateActiveNavLink();
    
    console.log('Portfolio website initialized successfully!');
});

// ============================================
// 14. Responsive Navbar Update
// ============================================

/**
 * Handle window resize to update navbar behavior
 */
let currentViewport = window.innerWidth;

window.addEventListener('resize', function() {
    const newViewport = window.innerWidth;
    
    // If switched from mobile to desktop or vice versa
    if ((currentViewport <= 480 && newViewport > 480) || 
        (currentViewport > 480 && newViewport <= 480)) {
        location.reload(); // Reload page to apply correct styles
    }
    
    currentViewport = newViewport;
});

// ============================================
// 15. Keyboard Navigation Support
// ============================================

/**
 * Add keyboard navigation support
 * Use Tab key to navigate through sections
 */
document.addEventListener('keydown', function(e) {
    // Close menu on Escape key
    if (e.key === 'Escape') {
        closeHamburgerMenu();
    }
});

// ============================================
// 16. Performance Optimization
// ============================================

/**
 * Debounce function to optimize scroll event listeners
 */
function debounce(func, delay) {
    let timeoutId;
    return function(...args) {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => func.apply(this, args), delay);
    };
}

// Debounce active link update
const debouncedUpdateActiveLink = debounce(updateActiveNavLink, 100);
window.addEventListener('scroll', debouncedUpdateActiveLink);

// ============================================
// Console Message
// ============================================

console.log('%cWelcome to Al Mottasim Riyad Portfolio', 'color: #00d9ff; font-size: 20px; font-weight: bold;');
console.log('%cBuilt with HTML, CSS, and JavaScript', 'color: #8338ec; font-size: 14px;');
