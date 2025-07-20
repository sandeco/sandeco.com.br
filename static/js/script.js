document.addEventListener('DOMContentLoaded', function() {
    // Calcula os anos dinamicamente
    function calcularAnos() {
        const anoAtual = new Date().getFullYear();
        const anosIA = anoAtual - 2009;
        const anosComputacao = anoAtual - 1991;
        
        // Atualiza os elementos no DOM
        const elementoAnosIA = document.getElementById('anos-ia');
        const elementoAnosComputacao = document.getElementById('anos-computacao');
        
        if (elementoAnosIA) {
            elementoAnosIA.textContent = `${anosIA} anos na Inteligência Artificial`;
        }
        
        if (elementoAnosComputacao) {
            elementoAnosComputacao.textContent = `${anosComputacao} anos na computação`;
        }
    }
    
    // Executa o cálculo dos anos
    calcularAnos();
    
    // Inicializa as animações AOS
    AOS.init({
        duration: 1500,
        once: true,
        offset: 100
    });

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

// Menu responsivo
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menuToggle');
    const navLinks = document.getElementById('navLinks');

    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            menuToggle.classList.toggle('active');
        });

        // Fecha o menu ao clicar em um link
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
                menuToggle.classList.remove('active');
            });
        });

        // Fecha o menu ao clicar fora
        document.addEventListener('click', (e) => {
            if (!menuToggle.contains(e.target) && !navLinks.contains(e.target)) {
                navLinks.classList.remove('active');
                menuToggle.classList.remove('active');
            }
        });
    }
});

