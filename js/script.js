// Inicializa as animações AOS
AOS.init({
    duration: 1500,
    once: true,
    offset: 100
});

document.addEventListener('DOMContentLoaded', function() {
    const carousel = document.getElementById('marcasCarousel');
    let isDown = false;
    let startX;
    let scrollLeft;

    carousel.addEventListener('mousedown', (e) => {
        isDown = true;
        carousel.style.cursor = 'grabbing';
        startX = e.pageX - carousel.offsetLeft;
        scrollLeft = carousel.scrollLeft;
        carousel.style.animationPlayState = 'paused';
    });

    carousel.addEventListener('mouseleave', () => {
        isDown = false;
        carousel.style.cursor = 'grab';
        carousel.style.animationPlayState = 'running';
    });

    carousel.addEventListener('mouseup', () => {
        isDown = false;
        carousel.style.cursor = 'grab';
        carousel.style.animationPlayState = 'running';
    });

    carousel.addEventListener('mousemove', (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - carousel.offsetLeft;
        const walk = (x - startX) * 2;
        carousel.scrollLeft = scrollLeft - walk;
    });
});

// Intersection Observer para a seção revolution
const revolutionSection = document.querySelector('.revolution');
const revolutionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            revolutionObserver.unobserve(entry.target); // Para que a animação ocorra apenas uma vez
        }
    });
}, {
    threshold: 0.2 // A animação começará quando 20% da seção estiver visível
});

if (revolutionSection) {
    revolutionObserver.observe(revolutionSection);
}

