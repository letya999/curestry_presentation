// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Button hover effects
document.querySelectorAll('button, a.btn').forEach(btn => {
    btn.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-2px)';
    });
    btn.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
    });
});

// Presentation navigation
if (document.querySelector('.presentation-container')) {
    const slides = document.querySelectorAll('.slide');
    let currentSlide = 0;
    
    const updateSlideVisibility = () => {
        slides.forEach((slide, index) => {
            if (index === currentSlide) {
                slide.style.display = 'flex';
            } else {
                slide.style.display = 'none';
            }
        });
        
        const prevBtn = document.getElementById('prev-slide');
        const nextBtn = document.getElementById('next-slide');
        const slideCounter = document.getElementById('slide-counter');
        
        if (prevBtn) prevBtn.disabled = currentSlide === 0;
        if (nextBtn) nextBtn.disabled = currentSlide === slides.length - 1;
        if (slideCounter) {
            slideCounter.textContent = `${currentSlide + 1} / ${slides.length}`;
        }
    };
    
    const prevBtn = document.getElementById('prev-slide');
    const nextBtn = document.getElementById('next-slide');
    
    if (prevBtn) {
        prevBtn.addEventListener('click', () => {
            if (currentSlide > 0) {
                currentSlide--;
                updateSlideVisibility();
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }
        });
    }
    
    if (nextBtn) {
        nextBtn.addEventListener('click', () => {
            if (currentSlide < slides.length - 1) {
                currentSlide++;
                updateSlideVisibility();
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }
        });
    }
    
    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft' && currentSlide > 0) {
            currentSlide--;
            updateSlideVisibility();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        } else if (e.key === 'ArrowRight' && currentSlide < slides.length - 1) {
            currentSlide++;
            updateSlideVisibility();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    });
    
    // Initialize
    updateSlideVisibility();
}

