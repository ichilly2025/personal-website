/**
 * Personal Website - JavaScript Application
 * 
 * This file contains all interactive logic, animation controls, and form handling
 * for the senior full-stack engineer's personal website.
 * 
 * @version 1.0.0
 * @author Senior Full-Stack Engineer
 */

// DOM Content Loaded Event Listener
document.addEventListener('DOMContentLoaded', function() {
    console.log('Personal Website initialized');
    
    // Initialize all modules
    initNavigation();
    initHeroAnimations();
    initProjectCards();
    initTechStackCarousel();
    initContactForm();
    initScrollAnimations();
    initThemeManager();
    initPerformanceOptimizations();
});

/**
 * Navigation Module
 * Handles navigation menu interactions and scroll behavior
 */
function initNavigation() {
    const nav = document.querySelector('nav');
    const navLinks = document.querySelectorAll('nav a[href^="#"]');
    const mobileMenuButton = document.querySelector('.mobile-menu-button');
    const mobileMenu = document.querySelector('.mobile-menu');
    
    if (!nav) {
        console.warn('Navigation element not found');
        return;
    }
    
    // Handle scroll effect on navigation
    let lastScrollTop = 0;
    
    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        // Add/remove background based on scroll position
        if (scrollTop > 50) {
            nav.classList.add('bg-gray-900/90', 'backdrop-blur-md', 'shadow-lg');
            nav.classList.remove('bg-transparent');
        } else {
            nav.classList.remove('bg-gray-900/90', 'backdrop-blur-md', 'shadow-lg');
            nav.classList.add('bg-transparent');
        }
        
        // Hide/show navigation on scroll direction
        if (scrollTop > lastScrollTop && scrollTop > 100) {
            // Scrolling down
            nav.style.transform = 'translateY(-100%)';
        } else {
            // Scrolling up
            nav.style.transform = 'translateY(0)';
        }
        
        lastScrollTop = scrollTop;
    });
    
    // Smooth scrolling for navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (!targetElement) {
                console.warn(`Target element ${targetId} not found`);
                return;
            }
            
            // Close mobile menu if open
            if (mobileMenu && mobileMenu.classList.contains('hidden')) {
                mobileMenu.classList.add('hidden');
            }
            
            // Smooth scroll to target
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        });
    });
    
    // Mobile menu toggle
    if (mobileMenuButton && mobileMenu) {
        mobileMenuButton.addEventListener('click', function() {
            mobileMenu.classList.toggle('hidden');
            
            // Update aria-expanded attribute for accessibility
            const isExpanded = !mobileMenu.classList.contains('hidden');
            mobileMenuButton.setAttribute('aria-expanded', isExpanded);
            
            // Animate hamburger icon
            const bars = mobileMenuButton.querySelectorAll('svg path');
            if (isExpanded) {
                bars[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
                bars[1].style.opacity = '0';
                bars[2].style.transform = 'rotate(-45deg) translate(7px, -6px)';
            } else {
                bars[0].style.transform = 'none';
                bars[1].style.opacity = '1';
                bars[2].style.transform = 'none';
            }
        });
        
        // Close mobile menu when clicking outside
        document.addEventListener('click', function(e) {
            if (!mobileMenu.classList.contains('hidden') &&
                !mobileMenu.contains(e.target) &&
                !mobileMenuButton.contains(e.target)) {
                mobileMenu.classList.add('hidden');
                mobileMenuButton.setAttribute('aria-expanded', 'false');
                
                // Reset hamburger icon
                const bars = mobileMenuButton.querySelectorAll('svg path');
                bars[0].style.transform = 'none';
                bars[1].style.opacity = '1';
                bars[2].style.transform = 'none';
            }
        });
    }
    
    // Highlight active section in navigation
    function updateActiveNavLink() {
        const sections = document.querySelectorAll('section[id]');
        const scrollPosition = window.scrollY + 100;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            const sectionId = section.getAttribute('id');
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('text-blue-400', 'border-blue-400');
                    link.classList.add('text-gray-300', 'hover:text-white');
                    
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.remove('text-gray-300', 'hover:text-white');
                        link.classList.add('text-blue-400', 'border-blue-400');
                    }
                });
            }
        });
    }
    
    window.addEventListener('scroll', updateActiveNavLink);
    updateActiveNavLink(); // Initial call
}

/**
 * Hero Animations Module
 * Handles animations and effects in the hero section
 */
function initHeroAnimations() {
    const heroTitle = document.querySelector('.hero-title');
    const heroSubtitle = document.querySelector('.hero-subtitle');
    const heroButtons = document.querySelectorAll('.hero-buttons a');
    
    if (!heroTitle) {
        console.warn('Hero title element not found');
        return;
    }
    
    // Split text for character animation
    function splitTextForAnimation(element) {
        const text = element.textContent;
        element.innerHTML = '';
        
        text.split('').forEach((char, index) => {
            const span = document.createElement('span');
            span.textContent = char === ' ' ? '\u00A0' : char;
            span.style.display = 'inline-block';
            span.style.opacity = '0';
            span.style.transform = 'translateY(20px)';
            span.style.transition = `opacity 0.5s ease ${index * 0.05}s, transform 0.5s ease ${index * 0.05}s`;
            element.appendChild(span);
        });
    }
    
    // Apply text splitting to hero elements
    if (heroTitle) splitTextForAnimation(heroTitle);
    if (heroSubtitle) splitTextForAnimation(heroSubtitle);
    
    // Animate hero elements on load
    setTimeout(() => {
        // Animate title characters
        const titleChars = heroTitle.querySelectorAll('span');
        titleChars.forEach(char => {
            char.style.opacity = '1';
            char.style.transform = 'translateY(0)';
        });
        
        // Animate subtitle characters with delay
        setTimeout(() => {
            if (heroSubtitle) {
                const subtitleChars = heroSubtitle.querySelectorAll('span');
                subtitleChars.forEach(char => {
                    char.style.opacity = '1';
                    char.style.transform = 'translateY(0)';
                });
            }
        }, 500);
        
        // Animate buttons with delay
        setTimeout(() => {
            heroButtons.forEach((button, index) => {
                button.style.opacity = '0';
                button.style.transform = 'translateY(20px)';
                button.style.transition = `opacity 0.5s ease ${index * 0.2}s, transform 0.5s ease ${index * 0.2}s`;
                
                setTimeout(() => {
                    button.style.opacity = '1';
                    button.style.transform = 'translateY(0)';
                }, 100);
            });
        }, 1000);
    }, 300);
    
    // Add floating animation to hero section
    function addFloatingAnimation() {
        const heroSection = document.querySelector('#hero');
        if (!heroSection) return;
        
        let mouseX = 0;
        let mouseY = 0;
        let floatingElements = [];
        
        // Create floating elements
        for (let i = 0; i < 15; i++) {
            const element = document.createElement('div');
            element.className = 'floating-element';
            element.style.position = 'absolute';
            element.style.width = `${Math.random() * 4 + 1}px`;
            element.style.height = element.style.width;
            element.style.background = 'rgba(59, 130, 246, 0.3)';
            element.style.borderRadius = '50%';
            element.style.top = `${Math.random() * 100}%`;
            element.style.left = `${Math.random() * 100}%`;
            element.style.zIndex = '-1';
            element.style.pointerEvents = 'none';
            
            heroSection.appendChild(element);
            floatingElements.push({
                element,
                speed: Math.random() * 0.5 + 0.2,
                x: parseFloat(element.style.left),
                y: parseFloat(element.style.top)
            });
        }
        
        // Mouse move effect
        heroSection.addEventListener('mousemove', (e) => {
            const rect = heroSection.getBoundingClientRect();
            mouseX = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
            mouseY = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
        });
        
        // Animation loop
        function animateFloatingElements() {
            floatingElements.forEach(item => {
                // Update position based on mouse movement
                item.x += mouseX * 0.01;
                item.y += mouseY * 0.01;
                
                // Add natural floating movement
                item.x += Math.sin(Date.now() * 0.001 * item.speed) * 0.1;
                item.y += Math.cos(Date.now() * 0.001 * item.speed) * 0.1;
                
                // Keep within bounds
                item.x = (item.x + 100) % 100;
                item.y = (item.y + 100) % 100;
                
                // Apply position
                item.element.style.left = `${item.x}%`;
                item.element.style.top = `${item.y}%`;
            });
            
            requestAnimationFrame(animateFloatingElements);
        }
        
        animateFloatingElements();
    }
    
    // Start floating animation
    setTimeout(addFloatingAnimation, 2000);
}

/**
 * Project Cards Module
 * Handles 3D hover effects and interactions for project cards
 */
function initProjectCards() {
    const projectCards = document.querySelectorAll('.project-card');
    
    if (projectCards.length === 0) {
        console.warn('No project cards found');
        return;
    }
    
    projectCards.forEach(card => {
        // Store original transform for reset
        card.dataset.originalTransform = 'perspective(1000px) rotateX(0) rotateY(0)';
        
        // Add 3D transform style
        card.style.transformStyle = 'preserve-3d';
        card.style.transition = 'transform 0.5s ease, box-shadow 0.5s ease';
        
        // Mouse move effect
        card.addEventListener('mousemove', function(e) {
            if (window.innerWidth < 768) return; // Disable on mobile
            
            const rect = this.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateY = ((x - centerX) / centerX) * 10; // Max 10 degrees
            const rotateX = ((centerY - y) / centerY) * 10; // Max 10 degrees
            
            // Apply 3D transform
            this.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`;
            
            // Add shadow based on mouse position
            const shadowX = (x - centerX) / 10;
            const shadowY = (y - centerY) / 10;
            const shadowBlur = 30;
            const shadowColor = 'rgba(59, 130, 246, 0.3)';
            
            this.style.boxShadow = `${shadowX}px ${shadowY}px ${shadowBlur}px ${shadowColor}`;
        });
        
        // Mouse leave effect
        card.addEventListener('mouseleave', function() {
            this.style.transform = this.dataset.originalTransform;
            this.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.2)';
        });
        
        // Touch events for mobile
        card.addEventListener('touchstart', function() {
            if (window.innerWidth >= 768) return;
            this.style.transform = 'scale(0.98)';
        });
        
        card.addEventListener('touchend', function() {
            if (window.innerWidth >= 768) return;
            this.style.transform = 'scale(1)';
        });
        
        // Click effect
        card.addEventListener('click', function(e) {
            // Prevent navigation if clicking on links inside card
            if (e.target.tagName === 'A' || e.target.closest('a')) {
                return;
            }
            
            // Add click animation
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = this.dataset.originalTransform;
            }, 150);
            
            // Find and click the view project link
            const projectLink = this.querySelector('a[href*="project"]');
            if (projectLink) {
                projectLink.click();
            }
        });
        
        // Keyboard navigation
        card.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                this.click();
            }
        });
        
        // Set tabindex for accessibility
        card.setAttribute('tabindex', '0');
        card.setAttribute('role', 'button');
        card.setAttribute('aria-label', `View ${this.querySelector('h3')?.textContent || 'project'} details`);
    });
    
    // Lazy load project images
    const projectImages = document.querySelectorAll('.project-image');
    
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    const src = img.dataset.src;
                    
                    if (src) {
                        img.src = src;
                        img.classList.add('loaded');
                        observer.unobserve(img);
                    }
                }
            });
        }, {
            rootMargin: '50px 0px',
            threshold: 0.1
        });
        
        projectImages.forEach(img => {
            if (img.dataset.src) {
                imageObserver.observe(img);
            }
        });
    } else {
        // Fallback for older browsers
        projectImages.forEach(img => {
            if (img.dataset.src) {
                img.src = img.dataset.src;
            }
        });
    }
}

/**
 * Tech Stack Carousel Module
 * Handles the auto-scrolling tech stack icons wall
 */
function initTechStackCarousel() {
    const techStackContainer = document.querySelector('.tech-stack-container');
    
    if (!techStackContainer) {
        console.warn('Tech stack container not found');
        return;
    }
    
    // Clone items for seamless scrolling
    const items = techStackContainer.innerHTML;
    techStackContainer.innerHTML += items;
    
    // Set up animation
    let animationId;
    let scrollPosition = 0;
    const scrollSpeed = 0.5; // pixels per frame
    
    function animateCarousel() {
        scrollPosition -= scrollSpeed;
        
        // Reset position when scrolled halfway
        const containerWidth = techStackContainer.scrollWidth / 2;
        if (Math.abs(scrollPosition) >= containerWidth) {
            scrollPosition = 0;
        }
        
        techStackContainer.style.transform = `translateX(${scrollPosition}px)`;
        animationId = requestAnimationFrame(animateCarousel);
    }
    
    // Start animation
    animateCarousel();
    
    // Pause animation on hover
    techStackContainer.addEventListener('mouseenter', () => {
        cancelAnimationFrame(animationId);
        techStackContainer.style.transition = 'transform 0.3s ease';
        techStackContainer.style.transform = `translateX(${scrollPosition}px)`;
    });
    
    techStackContainer.addEventListener('mouseleave', () => {
        techStackContainer.style.transition = 'none';
        animateCarousel();
    });
    
    // Touch support for mobile
    let touchStartX = 0;
    let isDragging = false;
    
    techStackContainer.addEventListener('touchstart', (e) => {
        touchStartX = e.touches[0].clientX;
        isDragging = true;
        cancelAnimationFrame(animationId);
    });
    
    techStackContainer.addEventListener('touchmove', (e) => {
        if (!isDragging) return;
        
        const touchX = e.touches[0].clientX;
        const deltaX = touchX - touchStartX;
        
        scrollPosition += deltaX * 0.5;
        techStackContainer.style.transform = `translateX(${scrollPosition}px)`;
        touchStartX = touchX;
    });
    
    techStackContainer.addEventListener('touchend', () => {
        isDragging = false;
        animateCarousel();
    });
    
    // Add click/tap effect to icons
    const techIcons = document.querySelectorAll('.tech-icon');
    techIcons.forEach(icon => {
        icon.addEventListener('click', function() {
            this.style.transform = 'scale(0.9)';
            this.style.transition = 'transform 0.2s ease';
            
            setTimeout(() => {
                this.style.transform = 'scale(1)';
            }, 200);
            
            // Get tech name for potential analytics or