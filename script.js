// Simple JavaScript for Visio Expert Landing Page
document.addEventListener('DOMContentLoaded', function() {
    
    // Scroll to section (instant)
    function scrollToSection(sectionId) {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView();
        }
    }
    
    // Make scrollToSection globally available
    window.scrollToSection = scrollToSection;
    
    // Start free trial function
    function startFreeTrial() {
        alert('🎉 Welcome to Visio Expert!\n\nYour 14-day free trial has started. Check your email for setup instructions.');
    }
    
    // Book demo function
    function bookDemo() {
        alert('📅 Demo Booking\n\nThank you for your interest! Our team will contact you within 24 hours to schedule your demo.');
    }
    
    // Make functions globally available
    window.startFreeTrial = startFreeTrial;
    window.bookDemo = bookDemo;
    
    // Tab Navigation
    const tabButtons = document.querySelectorAll('.nav-tab');
    tabButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all tabs
            tabButtons.forEach(tab => tab.classList.remove('active'));
            // Add active class to clicked tab
            this.classList.add('active');
            
            // Handle tab content switching
            const tabType = this.getAttribute('data-tab');
            switchTabContent(tabType);
        });
    });
    
    // Switch tab content function
    function switchTabContent(tabType) {
        const hero = document.querySelector('.secure-video-section .hero');
        const heroImage = document.querySelector('.secure-video-section .hero-image');
        
        if (!hero || !heroImage) return;
        
        switch(tabType) {
            case 'video':
                hero.querySelector('h1').textContent = 'Call from any device';
                hero.querySelector('p').textContent = 'Eliminate unnecessary travel and simplify your organization. Your clients receive a secure link, you launch the video call in 1 click, wherever you are.';
                heroImage.src = 'assets/images/main-video.png';
                heroImage.alt = 'Video conferencing interface showing a professional video call with participants';
                break;
            case 'payment':
                hero.querySelector('h1').textContent = 'Integrated Online Payment';
                hero.querySelector('p').textContent = 'Request payment before, during, or after the video call, by credit card, via a secure link directly integrated into your appointment.';
                heroImage.src = 'assets/images/online-payment.png';
                heroImage.alt = 'Online payment interface';
                break;
            case 'notes':
                hero.querySelector('h1').textContent = 'Notes & Reports';
                hero.querySelector('p').textContent = 'Take notes during your appointments and generate professional reports automatically. Keep track of all your client sessions.';
                heroImage.src = 'assets/images/notes-image.png';
                heroImage.alt = 'Notes and reports interface';
                break;
            case 'france':
                hero.querySelector('h1').textContent = 'Made in France';
                hero.querySelector('p').textContent = 'A solution designed in France, secure from end to end, meeting the requirements of professionals. GDPR compliant and hosted in France.';
                heroImage.src = 'assets/images/Made-france.png';
                heroImage.alt = 'Made in France certification';
                break;
        }
    }
    
    // Professionals slider with infinite loop
    const professionalsGrid = document.querySelector('.professionals-grid');
    const professionalsLeftArrow = document.querySelector('.professionals-section .nav-arrow.left');
    const professionalsRightArrow = document.querySelector('.professionals-section .nav-arrow.right');
    const professionalCards = document.querySelectorAll('.professional-card');
    
    let currentProfessionalIndex = 0;
    const totalProfessionals = professionalCards.length;
    
    function slideProfessionals(direction) {
        if (direction === 'left') {
            currentProfessionalIndex = Math.max(0, currentProfessionalIndex - 1);
        } else if (direction === 'right') {
            currentProfessionalIndex = Math.min(totalProfessionals - 1, currentProfessionalIndex + 1);
        }
        
        if (professionalsGrid) {
            const cardWidth = 296; // 280px card + 16px gap
            const translateX = -currentProfessionalIndex * cardWidth;
            professionalsGrid.style.transform = `translateX(${translateX}px)`;
        }
    }
    
    window.slideProfessionals = slideProfessionals;
    
    if (professionalsLeftArrow) {
        professionalsLeftArrow.addEventListener('click', () => slideProfessionals('left'));
    }
    
    if (professionalsRightArrow) {
        professionalsRightArrow.addEventListener('click', () => slideProfessionals('right'));
    }
    
    // Testimonials slider with infinite loop
    const testimonialsSlider = document.querySelector('.testimonials-slider');
    const testimonialsLeftArrow = document.querySelector('.testimonials-section .nav-arrow.left');
    const testimonialsRightArrow = document.querySelector('.testimonials-section .nav-arrow.right');
    const testimonialCards = document.querySelectorAll('.testimonial-card');
    
    let currentTestimonialIndex = 0;
    const totalTestimonials = testimonialCards.length;
    
    function slideTestimonials(direction) {
        if (direction === 'left') {
            currentTestimonialIndex = Math.max(0, currentTestimonialIndex - 1);
        } else if (direction === 'right') {
            currentTestimonialIndex = Math.min(totalTestimonials - 1, currentTestimonialIndex + 1);
        }
        
        if (testimonialsSlider) {
            const cardWidth = 316; // 300px card + 16px gap
            const translateX = -currentTestimonialIndex * cardWidth;
            testimonialsSlider.style.transform = `translateX(${translateX}px)`;
        }
    }
    
    window.slideTestimonials = slideTestimonials;
    
    if (testimonialsLeftArrow) {
        testimonialsLeftArrow.addEventListener('click', () => slideTestimonials('left'));
    }
    
    if (testimonialsRightArrow) {
        testimonialsRightArrow.addEventListener('click', () => slideTestimonials('right'));
    }
    
    // FAQ functionality
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        const answer = item.querySelector('.faq-answer');
        const toggle = item.querySelector('.faq-toggle');
        
        if (question && answer && toggle) {
            question.addEventListener('click', () => {
                const isOpen = answer.style.display === 'block';
                
                // Close all other FAQ items
                faqItems.forEach(otherItem => {
                    const otherAnswer = otherItem.querySelector('.faq-answer');
                    const otherToggle = otherItem.querySelector('.faq-toggle');
                    if (otherAnswer && otherToggle) {
                        otherAnswer.style.display = 'none';
                        otherToggle.textContent = '+';
                    }
                });
                
                // Toggle current item
                if (!isOpen) {
                    answer.style.display = 'block';
                    toggle.textContent = '−';
                } else {
                    answer.style.display = 'none';
                    toggle.textContent = '+';
                }
            });
        }
    });
    
    // removed smooth anchor scrolling and console log
});
