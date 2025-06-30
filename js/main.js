document.addEventListener('DOMContentLoaded', function() {
    // Preloader
    const preloader = document.querySelector('.preloader');
    
    window.addEventListener('load', function() {
        setTimeout(function() {
            preloader.style.opacity = '0';
            setTimeout(function() {
                preloader.style.display = 'none';
            }, 500);
        }, 1000);
    });
    
    // Mobile Menu
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const nav = document.querySelector('.nav');
    
    mobileMenuBtn.addEventListener('click', function() {
        nav.classList.toggle('active');
        mobileMenuBtn.innerHTML = nav.classList.contains('active') ? 
            '<i class="fas fa-times"></i>' : '<i class="fas fa-bars"></i>';
    });
    
    // Smooth Scrolling for Anchor Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
                
                // Close mobile menu if open
                if (nav.classList.contains('active')) {
                    nav.classList.remove('active');
                    mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
                }
            }
        });
    });
    
    // Header Scroll Effect
    const header = document.querySelector('.header');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
    
    // Menu Tab Switching
    const tabBtns = document.querySelectorAll('.tab-btn');
    const menuCategories = document.querySelectorAll('.menu-category');
    
    tabBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            // Remove active class from all buttons and categories
            tabBtns.forEach(b => b.classList.remove('active'));
            menuCategories.forEach(cat => cat.classList.remove('active'));
            
            // Add active class to clicked button
            this.classList.add('active');
            
            // Show corresponding category
            const categoryId = this.getAttribute('data-category');
            document.getElementById(categoryId).classList.add('active');
        });
    });
    
    // Scroll Animation
    const animateElements = document.querySelectorAll('[data-animate]');
    
    function checkScroll() {
        animateElements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (elementPosition < windowHeight - 100) {
                element.classList.add('animated');
            }
        });
    }
    
    // Initial check
    checkScroll();
    
    // Check on scroll
    window.addEventListener('scroll', checkScroll);
    
    // Image Zoom Effect
    const zoomImages = document.querySelectorAll('.img-zoom');
    
    zoomImages.forEach(img => {
        img.addEventListener('mousemove', function(e) {
            const { left, top, width, height } = this.getBoundingClientRect();
            const x = (e.clientX - left) / width * 100;
            const y = (e.clientY - top) / height * 100;
            this.style.transformOrigin = `${x}% ${y}%`;
        });
    });
});