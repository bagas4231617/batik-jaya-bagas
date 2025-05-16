// Mobile Navigation Toggle
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');

navToggle.addEventListener('click', () => {
    navToggle.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a nav link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navToggle.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// Sticky navbar on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.padding = '15px 0';
        navbar.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.padding = '20px 0';
        navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    }
});

// Active nav link based on scroll position
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// Testimonial Slider
const testimoniCards = document.querySelectorAll('.testimoni-card');
const dots = document.querySelectorAll('.dot');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
let currentTestimoni = 0;

function showTestimoni(index) {
    testimoniCards.forEach(card => card.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));
    
    testimoniCards[index].classList.add('active');
    dots[index].classList.add('active');
    currentTestimoni = index;
}

dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        showTestimoni(index);
    });
});

prevBtn.addEventListener('click', () => {
    currentTestimoni = (currentTestimoni - 1 + testimoniCards.length) % testimoniCards.length;
    showTestimoni(currentTestimoni);
});

nextBtn.addEventListener('click', () => {
    currentTestimoni = (currentTestimoni + 1) % testimoniCards.length;
    showTestimoni(currentTestimoni);
});

// Auto slide testimonial
setInterval(() => {
    currentTestimoni = (currentTestimoni + 1) % testimoniCards.length;
    showTestimoni(currentTestimoni);
}, 5000);

// Form submission
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    // Here you would typically send the form data to a server
    // For this example, we'll just show an alert
    alert(`Terima kasih ${name}! Pesan Anda telah terkirim. Kami akan segera menghubungi Anda melalui email ${email}.`);
    
    // Reset form
    contactForm.reset();
});

// Animation on scroll
function animateOnScroll() {
    const elements = document.querySelectorAll('.produk-card, .tentang-image, .kontak-form, .kontak-info');
    
    elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;
        
        if (elementPosition < screenPosition) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    });
}

// Set initial state for animated elements
document.querySelectorAll('.produk-card, .tentang-image, .kontak-form, .kontak-info').forEach(element => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(50px)';
    element.style.transition = 'all 0.6s ease';
});

window.addEventListener('scroll', animateOnScroll);
window.addEventListener('load', animateOnScroll);