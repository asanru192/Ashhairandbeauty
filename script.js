document.addEventListener('DOMContentLoaded', () => {
    // Fix navbar offset when announcement bar is closed
    document.addEventListener('click', (e) => {
        if (e.target.closest('#closeAnnouncement') || e.target.closest('.announcement-close')) {
            const navbar = document.querySelector('.navbar');
            if (navbar) navbar.style.top = '0';
        }
    });

    // Mobile Navigation Toggle
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');
    
    mobileMenuBtn.addEventListener('click', () => {
        mobileMenuBtn.classList.toggle('active');
        navLinks.classList.toggle('active');
    });

    // Close mobile menu when clicking a link
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            mobileMenuBtn.classList.remove('active');
            navLinks.classList.remove('active');
        });
    });

    // Sticky Navbar on Scroll
    const navbar = document.querySelector('.navbar');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Smooth Scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            if (this.getAttribute('href') !== '#') {
                e.preventDefault();
                
                const targetId = this.getAttribute('href');
                const targetElement = document.querySelector(targetId);
                
                if (targetElement) {
                    // Adjust for navbar height
                    const navHeight = navbar.offsetHeight;
                    const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY - navHeight;
                    
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });

    // Simple Intersection Observer for scroll animations
    const faders = document.querySelectorAll('.service-card, .about-content, .hours-card, .map-card');
    
    const appearOptions = {
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px"
    };
    
    const appearOnScroll = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return;
            } else {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, appearOptions);
    
    // Initialize elements for animation
    faders.forEach(fader => {
        fader.style.opacity = '0';
        fader.style.transform = 'translateY(30px)';
        fader.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        appearOnScroll.observe(fader);
    });

    // Service Menu Tabs Switcher
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabPanels = document.querySelectorAll('.services-panel');
    
    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const targetTab = btn.getAttribute('data-tab');
            
            // Remove active classes from all buttons and panels
            tabBtns.forEach(b => b.classList.remove('active'));
            tabPanels.forEach(p => p.classList.remove('active'));
            
            // Add active class to clicked button and targeted panel
            btn.classList.add('active');
            const targetPanel = document.getElementById(targetTab);
            if (targetPanel) {
                targetPanel.classList.add('active');
            }
        });
    });

    // Gallery Category Filtering
    const filterBtns = document.querySelectorAll('.filter-btn');
    const galleryItems = document.querySelectorAll('.gallery-item');
    
    if (filterBtns.length > 0 && galleryItems.length > 0) {
        filterBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                const filterValue = btn.getAttribute('data-filter');
                
                // Active button class toggle
                filterBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                
                // Show/hide gallery items
                galleryItems.forEach(item => {
                    if (filterValue === 'all' || item.classList.contains(filterValue)) {
                        item.classList.remove('hidden');
                        setTimeout(() => {
                            item.style.opacity = '1';
                            item.style.transform = 'scale(1)';
                        }, 50);
                    } else {
                        item.classList.add('hidden');
                        item.style.opacity = '0';
                        item.style.transform = 'scale(0.95)';
                    }
                });
            });
        });
    }

    // Contact Form Handling
    const contactForm = document.getElementById('contactForm');
    const formFeedback = document.getElementById('formFeedback');
    
    if (contactForm && formFeedback) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Clean classes
            formFeedback.className = 'form-feedback';
            formFeedback.textContent = '';
            
            // Get inputs
            const name = document.getElementById('formName').value.trim();
            const email = document.getElementById('formEmail').value.trim();
            const message = document.getElementById('formMessage').value.trim();
            
            // Validate
            if (!name || !email || !message) {
                formFeedback.classList.add('error');
                formFeedback.textContent = 'Please fill out all fields.';
                return;
            }
            
            // Email regex check
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                formFeedback.classList.add('error');
                formFeedback.textContent = 'Please enter a valid email address.';
                return;
            }
            
            // Simulate successful submission
            formFeedback.classList.add('success');
            formFeedback.textContent = 'Thank you for your message! Asanthi (Ash) will get back to you shortly.';
            contactForm.reset();
        });
    }
});
