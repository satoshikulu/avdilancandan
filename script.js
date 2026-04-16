// Splash Screen
const splashScreen = document.getElementById('splash-screen');
window.addEventListener('load', () => {
    setTimeout(() => {
        splashScreen.classList.add('hide');
        setTimeout(() => splashScreen.remove(), 600);
    }, 4000);
});

// Navbar Scroll Effect
const navbar = document.getElementById('navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
    
    // Scroll progress indicator
    const scrollProgress = document.getElementById('scroll-progress');
    const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = (currentScroll / scrollHeight) * 100;
    scrollProgress.style.width = progress + '%';
    
    lastScroll = currentScroll;
});

// Mobile Menu Toggle
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });
}

// Close mobile menu when clicking a link
const mobileLinks = document.querySelectorAll('#mobile-menu a');
mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
    });
});

// Hero Slideshow
let currentSlide = 0;
const heroSlides = document.querySelectorAll('.hero-slide');

function showNextSlide() {
    if (heroSlides.length === 0) return;
    
    heroSlides[currentSlide].classList.remove('opacity-100');
    heroSlides[currentSlide].classList.add('opacity-0');
    
    currentSlide = (currentSlide + 1) % heroSlides.length;
    
    heroSlides[currentSlide].classList.remove('opacity-0');
    heroSlides[currentSlide].classList.add('opacity-100');
}

// Change slide every 5 seconds
if (heroSlides.length > 0) {
    setInterval(showNextSlide, 5000);
}

// Blog Modal Functions
function openBlogModal(modalId) {
    const modal = document.getElementById('blog-modal-' + modalId);
    if (modal) {
        modal.classList.remove('hidden');
        document.body.style.overflow = 'hidden';
    }
}

function closeBlogModal(modalId) {
    const modal = document.getElementById('blog-modal-' + modalId);
    if (modal) {
        modal.classList.add('hidden');
        document.body.style.overflow = '';
    }
}

// Close modal on Escape key
window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        const openModal = document.querySelector('[id^="blog-modal-"]:not(.hidden)');
        if (openModal) {
            openModal.classList.add('hidden');
            document.body.style.overflow = '';
        }
    }
});

// Scroll Reveal Animation
const revealElements = document.querySelectorAll('.reveal');

const revealOnScroll = () => {
    revealElements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (elementTop < windowHeight - 100) {
            element.classList.add('active');
        }
    });
};

window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);

// Smooth Scroll for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Testimonial Slider
let currentTestimonial = 0;
const testimonialTrack = document.querySelector('.testimonial-track');
const testimonialSlides = document.querySelectorAll('.testimonial-slide');

function moveTestimonialSlider() {
    if (!testimonialTrack || testimonialSlides.length === 0) return;
    
    const slideWidth = testimonialSlides[0].offsetWidth;
    testimonialTrack.style.transform = `translateX(-${currentTestimonial * slideWidth}px)`;
    
    currentTestimonial = (currentTestimonial + 1) % testimonialSlides.length;
}

// Auto slide testimonials every 4 seconds
if (testimonialTrack && testimonialSlides.length > 0) {
    setInterval(moveTestimonialSlider, 4000);
}

// Handle window resize for testimonial slider
window.addEventListener('resize', () => {
    if (testimonialTrack) {
        testimonialTrack.style.transition = 'none';
        moveTestimonialSlider();
        setTimeout(() => {
            testimonialTrack.style.transition = 'transform 0.5s ease';
        }, 50);
    }
});

// Initialize
revealOnScroll();
